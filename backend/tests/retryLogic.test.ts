/**
 * Unit Tests for Retry Logic
 */

import { retryWithBackoff, retryWithFixedDelay } from '../src/utils/retryLogic';

describe('Retry Logic', () => {
  describe('retryWithBackoff', () => {
    it('should return result on first success', async () => {
      const mockFn = jest.fn().mockResolvedValue('success');

      const result = await retryWithBackoff(mockFn);

      expect(result).toBe('success');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should retry on failure and eventually succeed', async () => {
      const mockFn = jest.fn()
        .mockRejectedValueOnce(new Error('Attempt 1 failed'))
        .mockRejectedValueOnce(new Error('Attempt 2 failed'))
        .mockResolvedValueOnce('success');

      const result = await retryWithBackoff(mockFn, 3, 10); // Short delay for testing

      expect(result).toBe('success');
      expect(mockFn).toHaveBeenCalledTimes(3);
    });

    it('should throw error after max retries exhausted', async () => {
      const mockFn = jest.fn().mockRejectedValue(new Error('Always fails'));

      await expect(retryWithBackoff(mockFn, 3, 10)).rejects.toThrow('Always fails');
      expect(mockFn).toHaveBeenCalledTimes(3);
    });

    it('should not retry non-retryable errors', async () => {
      const mockFn = jest.fn().mockRejectedValue(new Error('Non-retryable'));
      const isRetryable = jest.fn().mockReturnValue(false);

      await expect(retryWithBackoff(mockFn, 3, 10, isRetryable)).rejects.toThrow('Non-retryable');
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(isRetryable).toHaveBeenCalledTimes(1);
    });

    it('should retry retryable errors', async () => {
      const mockFn = jest.fn()
        .mockRejectedValueOnce({ name: 'ThrottlingException' })
        .mockResolvedValueOnce('success');
      
      const isRetryable = jest.fn().mockReturnValue(true);

      const result = await retryWithBackoff(mockFn, 3, 10, isRetryable);

      expect(result).toBe('success');
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(isRetryable).toHaveBeenCalledTimes(1);
    });

    it('should implement exponential backoff', async () => {
      const mockFn = jest.fn()
        .mockRejectedValueOnce(new Error('Attempt 1'))
        .mockRejectedValueOnce(new Error('Attempt 2'))
        .mockResolvedValueOnce('success');

      const startTime = Date.now();
      await retryWithBackoff(mockFn, 3, 100);
      const endTime = Date.now();
      const duration = endTime - startTime;

      // First retry: ~100ms, Second retry: ~200ms
      // Total should be at least 300ms (100 + 200)
      // With jitter, could be up to ~390ms (100*1.3 + 200*1.3)
      expect(duration).toBeGreaterThanOrEqual(250); // Allow some margin
      expect(mockFn).toHaveBeenCalledTimes(3);
    });
  });

  describe('retryWithFixedDelay', () => {
    it('should return result on first success', async () => {
      const mockFn = jest.fn().mockResolvedValue('success');

      const result = await retryWithFixedDelay(mockFn);

      expect(result).toBe('success');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should retry with fixed delay', async () => {
      const mockFn = jest.fn()
        .mockRejectedValueOnce(new Error('Attempt 1'))
        .mockRejectedValueOnce(new Error('Attempt 2'))
        .mockResolvedValueOnce('success');

      const startTime = Date.now();
      await retryWithFixedDelay(mockFn, 3, 100);
      const endTime = Date.now();
      const duration = endTime - startTime;

      // Two retries with 100ms delay each = ~200ms total
      expect(duration).toBeGreaterThanOrEqual(180); // Allow some margin
      expect(mockFn).toHaveBeenCalledTimes(3);
    });

    it('should throw error after max retries exhausted', async () => {
      const mockFn = jest.fn().mockRejectedValue(new Error('Always fails'));

      await expect(retryWithFixedDelay(mockFn, 3, 10)).rejects.toThrow('Always fails');
      expect(mockFn).toHaveBeenCalledTimes(3);
    });
  });
});
