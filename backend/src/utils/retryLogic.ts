/**
 * Retry Logic with Exponential Backoff
 * 
 * Implements retry logic with exponential backoff and jitter for handling
 * transient failures and throttling errors from AWS services.
 */

/**
 * Sleeps for the specified number of milliseconds.
 * 
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the delay
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a function with exponential backoff.
 * 
 * Implements exponential backoff with jitter to handle throttling and transient errors.
 * The delay between retries increases exponentially: baseDelay * 2^attempt
 * Jitter (0-30% of delay) is added to prevent thundering herd problem.
 * 
 * @param fn - The async function to retry
 * @param maxRetries - Maximum number of retry attempts (default: 3)
 * @param baseDelayMs - Base delay in milliseconds (default: 1000)
 * @param isRetryable - Optional function to determine if error is retryable
 * @returns Promise resolving to the function result
 * @throws The last error if all retries are exhausted
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000,
  isRetryable?: (error: any) => boolean
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      // Check if error is retryable (if function provided)
      if (isRetryable && !isRetryable(error)) {
        throw error;
      }

      // Don't sleep after last attempt
      if (attempt < maxRetries - 1) {
        // Calculate exponential backoff delay
        const exponentialDelay = baseDelayMs * Math.pow(2, attempt);
        
        // Add jitter (0-30% of delay)
        const jitter = Math.random() * 0.3 * exponentialDelay;
        const totalDelay = exponentialDelay + jitter;

        await sleep(totalDelay);
      }
    }
  }

  // All retries exhausted, throw last error
  throw lastError!;
}

/**
 * Retries a function with fixed delay between attempts.
 * 
 * Useful for service errors where exponential backoff is not needed.
 * 
 * @param fn - The async function to retry
 * @param maxRetries - Maximum number of retry attempts (default: 3)
 * @param delayMs - Fixed delay in milliseconds between retries (default: 2000)
 * @returns Promise resolving to the function result
 * @throws The last error if all retries are exhausted
 */
export async function retryWithFixedDelay<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 2000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      // Don't sleep after last attempt
      if (attempt < maxRetries - 1) {
        await sleep(delayMs);
      }
    }
  }

  // All retries exhausted, throw last error
  throw lastError!;
}
