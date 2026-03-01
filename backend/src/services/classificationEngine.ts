/**
 * Sentiment Classification Engine
 * 
 * Implements sentiment classification logic based on AWS Comprehend results.
 * Handles direct sentiment mapping, MIXED sentiment resolution, and question override.
 */

import { SentimentResult } from '../types/sentiment';
import { isQuestion } from '../utils/questionDetector';

interface SentimentScores {
  Positive: number;
  Negative: number;
  Neutral: number;
  Mixed: number;
}

export class ClassificationEngine {
  private readonly BALANCE_THRESHOLD = 0.1; // 10% difference threshold for balanced scores

  /**
   * Classifies sentiment based on AWS Comprehend output.
   * 
   * Classification rules:
   * 1. Direct mapping for POSITIVE, NEGATIVE, NEUTRAL
   * 2. MIXED sentiment resolved by highest score (or neutral if balanced)
   * 3. Question override applied if text is a question
   * 
   * @param sentiment - AWS Comprehend sentiment (POSITIVE, NEGATIVE, NEUTRAL, MIXED)
   * @param scores - AWS Comprehend sentiment scores
   * @param text - Original comment text
   * @returns SentimentResult with classified sentiment
   */
  classify(sentiment: string, scores: SentimentScores, text: string): SentimentResult {
    let classifiedSentiment: 'positive' | 'negative' | 'neutral' | 'question' | 'confusion';
    let confidence: number;

    // Direct mapping for non-MIXED sentiments
    if (sentiment === 'POSITIVE') {
      classifiedSentiment = 'positive';
      confidence = scores.Positive;
    } else if (sentiment === 'NEGATIVE') {
      classifiedSentiment = 'negative';
      confidence = scores.Negative;
    } else if (sentiment === 'NEUTRAL') {
      classifiedSentiment = 'neutral';
      confidence = scores.Neutral;
    } else if (sentiment === 'MIXED') {
      // Handle MIXED sentiment
      const mixedResult = this.classifyMixed(scores);
      classifiedSentiment = mixedResult.sentiment;
      confidence = mixedResult.confidence;
    } else {
      // Fallback for unknown sentiment
      classifiedSentiment = 'neutral';
      confidence = 0.0;
    }

    // Apply question override
    classifiedSentiment = this.applyQuestionOverride(classifiedSentiment, text);

    return {
      sentiment: classifiedSentiment,
      confidence: confidence,
      scores: {
        positive: scores.Positive,
        negative: scores.Negative,
        neutral: scores.Neutral,
        mixed: scores.Mixed
      }
    };
  }

  /**
   * Classifies MIXED sentiment based on score comparison.
   * 
   * Rules:
   * - If scores are balanced (within threshold), return neutral
   * - Otherwise, return sentiment with highest score
   * 
   * @param scores - AWS Comprehend sentiment scores
   * @returns Classified sentiment and confidence
   */
  private classifyMixed(scores: SentimentScores): { sentiment: 'positive' | 'negative' | 'neutral', confidence: number } {
    // Find highest score (excluding Mixed)
    const maxScore = Math.max(scores.Positive, scores.Negative, scores.Neutral);

    // Check if scores are balanced
    if (this.isBalanced(scores, this.BALANCE_THRESHOLD)) {
      return {
        sentiment: 'neutral',
        confidence: scores.Neutral
      };
    }

    // Return sentiment with highest score
    if (maxScore === scores.Positive) {
      return {
        sentiment: 'positive',
        confidence: scores.Positive
      };
    } else if (maxScore === scores.Negative) {
      return {
        sentiment: 'negative',
        confidence: scores.Negative
      };
    } else {
      return {
        sentiment: 'neutral',
        confidence: scores.Neutral
      };
    }
  }

  /**
   * Checks if sentiment scores are balanced (within threshold of each other).
   * 
   * @param scores - AWS Comprehend sentiment scores
   * @param threshold - Maximum allowed difference between scores
   * @returns True if scores are balanced
   */
  private isBalanced(scores: SentimentScores, threshold: number): boolean {
    const maxScore = Math.max(scores.Positive, scores.Negative, scores.Neutral);
    const minScore = Math.min(scores.Positive, scores.Negative, scores.Neutral);

    return (maxScore - minScore) <= threshold;
  }

  /**
   * Overrides classification to 'question' if text is a question.
   * 
   * @param classification - Current sentiment classification
   * @param text - Original comment text
   * @returns 'question' if text is a question, otherwise original classification
   */
  private applyQuestionOverride(
    classification: 'positive' | 'negative' | 'neutral' | 'question' | 'confusion',
    text: string
  ): 'positive' | 'negative' | 'neutral' | 'question' | 'confusion' {
    if (isQuestion(text)) {
      return 'question';
    }
    return classification;
  }
}
