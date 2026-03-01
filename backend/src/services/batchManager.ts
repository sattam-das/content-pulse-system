/**
 * Batch Management Module
 * 
 * Handles grouping comments into batches and managing batch processing flow.
 * AWS Comprehend BatchDetectSentiment API supports up to 25 text items per request.
 */

import { Batch, BatchResult, SentimentResult } from '../types/sentiment';

export class BatchManager {
  /**
   * Splits comments into batches of specified size.
   * 
   * AWS Comprehend BatchDetectSentiment supports up to 25 items per batch.
   * 
   * @param comments - Array of comment texts to batch
   * @param batchSize - Maximum number of items per batch (default: 25)
   * @returns Array of batches with start/end indices
   */
  createBatches(comments: string[], batchSize: number = 25): Batch[] {
    if (comments.length === 0) {
      return [];
    }

    const batches: Batch[] = [];
    
    for (let i = 0; i < comments.length; i += batchSize) {
      const endIndex = Math.min(i + batchSize, comments.length);
      batches.push({
        items: comments.slice(i, endIndex),
        startIndex: i,
        endIndex: endIndex
      });
    }

    return batches;
  }

  /**
   * Processes a single batch with error handling.
   * 
   * @param batch - The batch to process
   * @param processor - Function to process the batch items
   * @returns BatchResult with success status and results
   */
  async processBatch(
    batch: Batch,
    processor: (items: string[]) => Promise<any>
  ): Promise<BatchResult> {
    try {
      const results = await processor(batch.items);
      return {
        success: true,
        results: results,
        failedIndices: []
      };
    } catch (error) {
      return {
        success: false,
        results: [],
        failedIndices: batch.items.map((_, idx) => batch.startIndex + idx)
      };
    }
  }

  /**
   * Retries failed items individually.
   * 
   * When a batch fails, this method attempts to process each item separately
   * to identify which specific items are causing failures.
   * 
   * @param items - Array of items that failed in batch processing
   * @param processor - Function to process individual items
   * @returns Array of sentiment results for successfully processed items
   */
  async retryFailedItems(
    items: string[],
    processor: (item: string) => Promise<SentimentResult>
  ): Promise<SentimentResult[]> {
    const results: SentimentResult[] = [];

    for (const item of items) {
      try {
        const result = await processor(item);
        results.push(result);
      } catch (error) {
        // If individual retry fails, add neutral sentiment as fallback
        results.push({
          sentiment: 'neutral',
          confidence: 0.0,
          scores: {
            positive: 0,
            negative: 0,
            neutral: 1,
            mixed: 0
          }
        });
      }
    }

    return results;
  }
}
