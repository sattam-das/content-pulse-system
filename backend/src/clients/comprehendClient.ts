/**
 * AWS Comprehend Client Wrapper
 * 
 * Encapsulates AWS SDK v3 Comprehend client with configuration and error handling.
 */

import {
  ComprehendClient,
  DetectSentimentCommand,
  BatchDetectSentimentCommand,
  DetectSentimentResponse,
  BatchDetectSentimentResponse
} from '@aws-sdk/client-comprehend';
import { ComprehendConfig } from '../types/sentiment';

export class ComprehendClientWrapper {
  private client: ComprehendClient;

  constructor(config: ComprehendConfig) {
    this.client = new ComprehendClient({
      region: config.region,
      maxAttempts: config.maxAttempts,
      requestHandler: {
        requestTimeout: config.requestTimeout
      }
    });
  }

  /**
   * Detects sentiment for a single text.
   * 
   * @param text - The text to analyze
   * @returns DetectSentimentResponse from AWS Comprehend
   */
  async detectSentiment(text: string): Promise<DetectSentimentResponse> {
    const command = new DetectSentimentCommand({
      Text: text,
      LanguageCode: 'en'
    });

    return await this.client.send(command);
  }

  /**
   * Detects sentiment for multiple texts in a batch.
   * 
   * AWS Comprehend supports up to 25 texts per batch request.
   * 
   * @param texts - Array of texts to analyze (max 25)
   * @returns BatchDetectSentimentResponse from AWS Comprehend
   */
  async batchDetectSentiment(texts: string[]): Promise<BatchDetectSentimentResponse> {
    if (texts.length > 25) {
      throw new Error('Batch size cannot exceed 25 items');
    }

    const command = new BatchDetectSentimentCommand({
      TextList: texts,
      LanguageCode: 'en'
    });

    return await this.client.send(command);
  }

  /**
   * Checks if an error is a throttling error.
   * 
   * @param error - The error to check
   * @returns True if error is throttling-related
   */
  isThrottlingError(error: any): boolean {
    const throttlingErrors = [
      'ThrottlingException',
      'ProvisionedThroughputExceededException',
      'TooManyRequestsException'
    ];

    return throttlingErrors.includes(error.name);
  }

  /**
   * Checks if an error is retryable.
   * 
   * @param error - The error to check
   * @returns True if error should be retried
   */
  isRetryableError(error: any): boolean {
    // Throttling errors are retryable
    if (this.isThrottlingError(error)) {
      return true;
    }

    // Service errors (5xx) are retryable
    const retryableErrors = [
      'InternalServerException',
      'ServiceUnavailableException',
      'InternalServerError'
    ];

    if (retryableErrors.includes(error.name)) {
      return true;
    }

    // HTTP 5xx errors are retryable
    if (error.$metadata?.httpStatusCode && error.$metadata.httpStatusCode >= 500) {
      return true;
    }

    return false;
  }

  /**
   * Checks if an error is a validation error.
   * 
   * @param error - The error to check
   * @returns True if error is validation-related
   */
  isValidationError(error: any): boolean {
    const validationErrors = [
      'InvalidRequestException',
      'TextSizeLimitExceededException',
      'ValidationException'
    ];

    return validationErrors.includes(error.name);
  }

  /**
   * Checks if an error is an authentication error.
   * 
   * @param error - The error to check
   * @returns True if error is authentication-related
   */
  isAuthenticationError(error: any): boolean {
    const authErrors = [
      'UnrecognizedClientException',
      'AccessDeniedException',
      'InvalidSignatureException'
    ];

    return authErrors.includes(error.name);
  }
}
