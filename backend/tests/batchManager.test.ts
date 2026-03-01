/**
 * Unit Tests for Batch Manager
 */

import { BatchManager } from '../src/services/batchManager';
import { SentimentResult } from '../src/types/sentiment';

describe('BatchManager', () => {
  let batchManager: BatchManager;

  beforeEach(() => {
    batchManager = new BatchManager();
  });

  describe('createBatches', () => {
    it('should return empty array for empty input', () => {
      const batches = batchManager.createBatches([]);
      expect(batches).toEqual([]);
    });

    it('should create single batch for 1 comment', () => {
      const comments = ['comment1'];
      const batches = batchManager.createBatches(comments);
      
      expect(batches.length).toBe(1);
      expect(batches[0].items).toEqual(['comment1']);
      expect(batches[0].startIndex).toBe(0);
      expect(batches[0].endIndex).toBe(1);
    });

    it('should create single batch for 25 comments', () => {
      const comments = Array(25).fill('comment');
      const batches = batchManager.createBatches(comments);
      
      expect(batches.length).toBe(1);
      expect(batches[0].items.length).toBe(25);
      expect(batches[0].startIndex).toBe(0);
      expect(batches[0].endIndex).toBe(25);
    });

    it('should create two batches for 26 comments', () => {
      const comments = Array(26).fill('comment');
      const batches = batchManager.createBatches(comments);
      
      expect(batches.length).toBe(2);
      expect(batches[0].items.length).toBe(25);
      expect(batches[1].items.length).toBe(1);
      expect(batches[0].startIndex).toBe(0);
      expect(batches[0].endIndex).toBe(25);
      expect(batches[1].startIndex).toBe(25);
      expect(batches[1].endIndex).toBe(26);
    });

    it('should create multiple batches for 400 comments', () => {
      const comments = Array(400).fill('comment');
      const batches = batchManager.createBatches(comments);
      
      expect(batches.length).toBe(16); // 400 / 25 = 16
      
      // Check first batch
      expect(batches[0].items.length).toBe(25);
      expect(batches[0].startIndex).toBe(0);
      expect(batches[0].endIndex).toBe(25);
      
      // Check last batch
      expect(batches[15].items.length).toBe(25);
      expect(batches[15].startIndex).toBe(375);
      expect(batches[15].endIndex).toBe(400);
    });

    it('should handle custom batch size', () => {
      const comments = Array(100).fill('comment');
      const batches = batchManager.createBatches(comments, 10);
      
      expect(batches.length).toBe(10); // 100 / 10 = 10
      expect(batches[0].items.length).toBe(10);
    });

    it('should handle uneven division', () => {
      const comments = Array(27).fill('comment');
      const batches = batchManager.createBatches(comments);
      
      expect(batches.length).toBe(2);
      expect(batches[0].items.length).toBe(25);
      expect(batches[1].items.length).toBe(2);
    });
  });

  describe('processBatch', () => {
    it('should return success for successful processing', async () => {
      const batch = {
        items: ['comment1', 'comment2'],
        startIndex: 0,
        endIndex: 2
      };

      const mockProcessor = jest.fn().mockResolvedValue([
        { sentiment: 'positive' },
        { sentiment: 'negative' }
      ]);

      const result = await batchManager.processBatch(batch, mockProcessor);

      expect(result.success).toBe(true);
      expect(result.results.length).toBe(2);
      expect(result.failedIndices).toEqual([]);
      expect(mockProcessor).toHaveBeenCalledWith(['comment1', 'comment2']);
    });

    it('should return failure for failed processing', async () => {
      const batch = {
        items: ['comment1', 'comment2'],
        startIndex: 0,
        endIndex: 2
      };

      const mockProcessor = jest.fn().mockRejectedValue(new Error('API Error'));

      const result = await batchManager.processBatch(batch, mockProcessor);

      expect(result.success).toBe(false);
      expect(result.results).toEqual([]);
      expect(result.failedIndices).toEqual([0, 1]);
    });
  });

  describe('retryFailedItems', () => {
    it('should retry all items individually', async () => {
      const items = ['comment1', 'comment2', 'comment3'];
      const mockProcessor = jest.fn()
        .mockResolvedValueOnce({ sentiment: 'positive', confidence: 0.9, scores: { positive: 0.9, negative: 0.05, neutral: 0.05, mixed: 0 } })
        .mockResolvedValueOnce({ sentiment: 'negative', confidence: 0.8, scores: { positive: 0.1, negative: 0.8, neutral: 0.1, mixed: 0 } })
        .mockResolvedValueOnce({ sentiment: 'neutral', confidence: 0.7, scores: { positive: 0.1, negative: 0.2, neutral: 0.7, mixed: 0 } });

      const results = await batchManager.retryFailedItems(items, mockProcessor);

      expect(results.length).toBe(3);
      expect(results[0].sentiment).toBe('positive');
      expect(results[1].sentiment).toBe('negative');
      expect(results[2].sentiment).toBe('neutral');
      expect(mockProcessor).toHaveBeenCalledTimes(3);
    });

    it('should use neutral fallback for failed individual retries', async () => {
      const items = ['comment1', 'comment2'];
      const mockProcessor = jest.fn()
        .mockResolvedValueOnce({ sentiment: 'positive', confidence: 0.9, scores: { positive: 0.9, negative: 0.05, neutral: 0.05, mixed: 0 } })
        .mockRejectedValueOnce(new Error('Individual failure'));

      const results = await batchManager.retryFailedItems(items, mockProcessor);

      expect(results.length).toBe(2);
      expect(results[0].sentiment).toBe('positive');
      expect(results[1].sentiment).toBe('neutral');
      expect(results[1].confidence).toBe(0.0);
    });

    it('should handle all items failing', async () => {
      const items = ['comment1', 'comment2'];
      const mockProcessor = jest.fn().mockRejectedValue(new Error('All failed'));

      const results = await batchManager.retryFailedItems(items, mockProcessor);

      expect(results.length).toBe(2);
      expect(results[0].sentiment).toBe('neutral');
      expect(results[1].sentiment).toBe('neutral');
    });
  });
});
