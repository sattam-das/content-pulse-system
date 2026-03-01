/**
 * Sentiment Analyzer Module
 * 
 * Core module for AWS Comprehend sentiment analysis integration.
 * Orchestrates batch processing, classification, and aggregation.
 */

import { ComprehendClientWrapper } from '../clients/comprehendClient';
import { BatchManager } from './batchManager';
import { ClassificationEngine } from './classificationEngine';
import { calculateBreakdown, generateOverallSentiment } from './sentimentAggregation';
import { preprocessComment, isEmpty } from '../utils/textPreprocessing';
import { retryWithBackoff } from '../utils/retryLogic';
import {
  SentimentAnalyzerConfig,
  SentimentResult,
  AnalysisResult
} from '../types/sentiment';

export class SentimentAnalyzer {
  private comprehendClient: ComprehendClientWrapper;
  private batchManager: BatchManager;
  private classificationEngine: ClassificationEngine;
  private config: SentimentAnalyzerConfig;

  constructor(config: SentimentAnalyzerConfig) {
    this.config = config;
    this.comprehendClient = new ComprehendClientWrapper({
      region: config.region,
      maxAttempts: config.maxRetries,
      requestTimeout: 30000
    });
    this.batchManager = new BatchManager();
    this.classificationEngine = new ClassificationEngine();
  }

  /**
   * Analyzes sentiment for an array of comments.
   * 
   * Main entry point for sentiment analysis. Processes comments in batches,
   * classifies sentiments, and aggregates results.
   * 
   * @param comments - Array of comment texts to analyze
   * @returns AnalysisResult with sentiment breakdown and details
   */
  async analyzeComments(comments: string[]): Promise<AnalysisResult> {
    if (comments.length === 0) {
      return {
        sentimentBreakdown: {
          positive: 0,
          negative: 0,
          neutral: 0,
          question: 0,
          confusion: 0
        },
        overallSentiment: 'No comments to analyze',
        comments: [],
        metadata: {
          successCount: 0,
          failureCount: 0,
          totalCount: 0
        }
      };
    }

    // Preprocess comments
    const preprocessedComments = comments.map(c => preprocessComment(c));

    // Process batches
    const results = await this.processBatches(preprocessedComments);

    // Calculate breakdown
    const breakdown = calculateBreakdown(results);

    // Generate overall sentiment
    const overallSentiment = generateOverallSentiment(breakdown);

    // Count successes and failures
    const successCount = results.filter(r => r.confidence > 0).length;
    const failureCount = results.length - successCount;

    return {
      sentimentBreakdown: breakdown,
      overallSentiment: overallSentiment,
      comments: results.map((r, i) => ({
        text: comments[i],
        sentiment: r.sentiment,
        confidence: r.confidence
      })),
      metadata: {
        successCount,
        failureCount,
        totalCount: comments.length
      }
    };
  }

  /**
   * Processes comments in batches using AWS Comprehend.
   * 
   * @param comments - Preprocessed comment texts
   * @returns Array of sentiment results
   */
  private async processBatches(comments: string[]): Promise<SentimentResult[]> {
    const results: SentimentResult[] = [];
    const batches = this.batchManager.createBatches(comments, this.config.batchSize);

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];

      try {
        const batchResults = await this.batchDetectSentiment(batch.items);
        results.push(...batchResults);
      } catch (error) {
        // If batch fails, retry items individually
        console.error(`Batch ${i + 1} failed, retrying individually`, error);
        const retryResults = await this.batchManager.retryFailedItems(
          batch.items,
          async (item) => await this.detectSingleSentiment(item)
        );
        results.push(...retryResults);
      }
    }

    return results;
  }

  /**
   * Calls AWS Comprehend BatchDetectSentiment API.
   * 
   * @param texts - Array of texts to analyze (max 25)
   * @returns Array of sentiment results
   */
  private async batchDetectSentiment(texts: string[]): Promise<SentimentResult[]> {
    // Filter out empty texts and track indices
    const validTexts: string[] = [];
    const validIndices: number[] = [];
    const results: SentimentResult[] = [];

    for (let i = 0; i < texts.length; i++) {
      if (isEmpty(texts[i])) {
        // Empty text gets neutral sentiment without API call
        results[i] = {
          sentiment: 'neutral',
          confidence: 0.0,
          scores: {
            positive: 0,
            negative: 0,
            neutral: 1,
            mixed: 0
          }
        };
      } else {
        validTexts.push(texts[i]);
        validIndices.push(i);
      }
    }

    if (validTexts.length === 0) {
      return results;
    }

    // Call AWS Comprehend with retry logic
    const response = await retryWithBackoff(
      async () => await this.comprehendClient.batchDetectSentiment(validTexts),
      this.config.maxRetries,
      this.config.retryDelayMs,
      (error) => this.comprehendClient.isRetryableError(error)
    );

    // Process successful results
    if (response.ResultList) {
      for (const result of response.ResultList) {
        const originalIndex = validIndices[result.Index!];
        const originalText = texts[originalIndex];
        
        results[originalIndex] = this.classificationEngine.classify(
          result.Sentiment!,
          {
            Positive: result.SentimentScore!.Positive!,
            Negative: result.SentimentScore!.Negative!,
            Neutral: result.SentimentScore!.Neutral!,
            Mixed: result.SentimentScore!.Mixed!
          },
          originalText
        );
      }
    }

    // Handle errors in batch
    if (response.ErrorList && response.ErrorList.length > 0) {
      for (const error of response.ErrorList) {
        const originalIndex = validIndices[error.Index!];
        console.error(`Error processing item ${originalIndex}:`, error.ErrorMessage);
        
        // Use neutral as fallback
        results[originalIndex] = {
          sentiment: 'neutral',
          confidence: 0.0,
          scores: {
            positive: 0,
            negative: 0,
            neutral: 1,
            mixed: 0
          }
        };
      }
    }

    return results;
  }

  /**
   * Detects sentiment for a single text.
   * 
   * Used for individual retries when batch processing fails.
   * 
   * @param text - Text to analyze
   * @returns Sentiment result
   */
  private async detectSingleSentiment(text: string): Promise<SentimentResult> {
    if (isEmpty(text)) {
      return {
        sentiment: 'neutral',
        confidence: 0.0,
        scores: {
          positive: 0,
          negative: 0,
          neutral: 1,
          mixed: 0
        }
      };
    }

    const response = await retryWithBackoff(
      async () => await this.comprehendClient.detectSentiment(text),
      this.config.maxRetries,
      this.config.retryDelayMs,
      (error) => this.comprehendClient.isRetryableError(error)
    );

    return this.classificationEngine.classify(
      response.Sentiment!,
      {
        Positive: response.SentimentScore!.Positive!,
        Negative: response.SentimentScore!.Negative!,
        Neutral: response.SentimentScore!.Neutral!,
        Mixed: response.SentimentScore!.Mixed!
      },
      text
    );
  }
}
