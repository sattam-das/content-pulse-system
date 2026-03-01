/**
 * Unit Tests for Comprehend Client Wrapper
 */

import { ComprehendClientWrapper } from '../src/clients/comprehendClient';
import { ComprehendClient } from '@aws-sdk/client-comprehend';
import { mockClient } from 'aws-sdk-client-mock';

const comprehendMock = mockClient(ComprehendClient);

describe('ComprehendClientWrapper', () => {
  let wrapper: ComprehendClientWrapper;

  beforeEach(() => {
    comprehendMock.reset();
    wrapper = new ComprehendClientWrapper({
      region: 'us-east-1',
      maxAttempts: 3,
      requestTimeout: 30000
    });
  });

  describe('detectSentiment', () => {
    it('should call AWS Comprehend with correct parameters', async () => {
      comprehendMock.resolves({
        Sentiment: 'POSITIVE',
        SentimentScore: {
          Positive: 0.95,
          Negative: 0.02,
          Neutral: 0.03,
          Mixed: 0.0
        }
      });

      const result = await wrapper.detectSentiment('Great video!');

      expect(result.Sentiment).toBe('POSITIVE');
      expect(result.SentimentScore?.Positive).toBe(0.95);
    });
  });

  describe('batchDetectSentiment', () => {
    it('should call AWS Comprehend batch API with correct parameters', async () => {
      comprehendMock.resolves({
        ResultList: [
          {
            Index: 0,
            Sentiment: 'POSITIVE',
            SentimentScore: {
              Positive: 0.95,
              Negative: 0.02,
              Neutral: 0.03,
              Mixed: 0.0
            }
          }
        ],
        ErrorList: []
      });

      const result = await wrapper.batchDetectSentiment(['Great video!']);

      expect(result.ResultList?.length).toBe(1);
      expect(result.ResultList?.[0].Sentiment).toBe('POSITIVE');
    });

    it('should throw error for batch size exceeding 25', async () => {
      const texts = Array(26).fill('comment');

      await expect(wrapper.batchDetectSentiment(texts)).rejects.toThrow(
        'Batch size cannot exceed 25 items'
      );
    });
  });

  describe('error classification', () => {
    describe('isThrottlingError', () => {
      it('should identify ThrottlingException', () => {
        const error = { name: 'ThrottlingException' };
        expect(wrapper.isThrottlingError(error)).toBe(true);
      });

      it('should identify ProvisionedThroughputExceededException', () => {
        const error = { name: 'ProvisionedThroughputExceededException' };
        expect(wrapper.isThrottlingError(error)).toBe(true);
      });

      it('should identify TooManyRequestsException', () => {
        const error = { name: 'TooManyRequestsException' };
        expect(wrapper.isThrottlingError(error)).toBe(true);
      });

      it('should not identify non-throttling errors', () => {
        const error = { name: 'InvalidRequestException' };
        expect(wrapper.isThrottlingError(error)).toBe(false);
      });
    });

    describe('isRetryableError', () => {
      it('should identify throttling errors as retryable', () => {
        const error = { name: 'ThrottlingException' };
        expect(wrapper.isRetryableError(error)).toBe(true);
      });

      it('should identify InternalServerException as retryable', () => {
        const error = { name: 'InternalServerException' };
        expect(wrapper.isRetryableError(error)).toBe(true);
      });

      it('should identify ServiceUnavailableException as retryable', () => {
        const error = { name: 'ServiceUnavailableException' };
        expect(wrapper.isRetryableError(error)).toBe(true);
      });

      it('should identify 5xx HTTP errors as retryable', () => {
        const error = {
          name: 'UnknownError',
          $metadata: { httpStatusCode: 500 }
        };
        expect(wrapper.isRetryableError(error)).toBe(true);
      });

      it('should not identify validation errors as retryable', () => {
        const error = { name: 'InvalidRequestException' };
        expect(wrapper.isRetryableError(error)).toBe(false);
      });
    });

    describe('isValidationError', () => {
      it('should identify InvalidRequestException', () => {
        const error = { name: 'InvalidRequestException' };
        expect(wrapper.isValidationError(error)).toBe(true);
      });

      it('should identify TextSizeLimitExceededException', () => {
        const error = { name: 'TextSizeLimitExceededException' };
        expect(wrapper.isValidationError(error)).toBe(true);
      });

      it('should identify ValidationException', () => {
        const error = { name: 'ValidationException' };
        expect(wrapper.isValidationError(error)).toBe(true);
      });

      it('should not identify non-validation errors', () => {
        const error = { name: 'ThrottlingException' };
        expect(wrapper.isValidationError(error)).toBe(false);
      });
    });

    describe('isAuthenticationError', () => {
      it('should identify UnrecognizedClientException', () => {
        const error = { name: 'UnrecognizedClientException' };
        expect(wrapper.isAuthenticationError(error)).toBe(true);
      });

      it('should identify AccessDeniedException', () => {
        const error = { name: 'AccessDeniedException' };
        expect(wrapper.isAuthenticationError(error)).toBe(true);
      });

      it('should identify InvalidSignatureException', () => {
        const error = { name: 'InvalidSignatureException' };
        expect(wrapper.isAuthenticationError(error)).toBe(true);
      });

      it('should not identify non-auth errors', () => {
        const error = { name: 'ThrottlingException' };
        expect(wrapper.isAuthenticationError(error)).toBe(false);
      });
    });
  });
});
