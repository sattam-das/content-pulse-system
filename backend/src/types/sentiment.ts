/**
 * Sentiment Analysis Type Definitions
 * 
 * Core TypeScript interfaces for AWS Comprehend sentiment analysis integration.
 */

export interface SentimentAnalyzerConfig {
  region: string;
  maxRetries: number;
  retryDelayMs: number;
  batchSize: number;
  maxTextLength: number;
}

export interface SentimentResult {
  sentiment: 'positive' | 'negative' | 'neutral' | 'question' | 'confusion';
  confidence: number;
  scores: {
    positive: number;
    negative: number;
    neutral: number;
    mixed: number;
  };
}

export interface SentimentBreakdown {
  positive: number;
  negative: number;
  neutral: number;
  question: number;
  confusion: number;
}

export interface AnalysisResult {
  sentimentBreakdown: SentimentBreakdown;
  overallSentiment: string;
  comments: Array<{
    text: string;
    sentiment: string;
    confidence: number;
  }>;
  metadata?: {
    successCount: number;
    failureCount: number;
    totalCount: number;
  };
}

export interface Batch {
  items: string[];
  startIndex: number;
  endIndex: number;
}

export interface BatchResult {
  success: boolean;
  results: SentimentResult[];
  failedIndices: number[];
}

export interface ComprehendConfig {
  region: string;
  maxAttempts: number;
  requestTimeout: number;
}

export interface DetectSentimentRequest {
  Text: string;
  LanguageCode: 'en';
}

export interface BatchDetectSentimentRequest {
  TextList: string[];
  LanguageCode: 'en';
}

export interface ErrorResponse {
  error: string;
  message: string;
  details?: any;
  timestamp: string;
}

export interface RetryContext {
  attempt: number;
  maxAttempts: number;
  lastError: Error;
  backoffMs: number;
}

export enum ErrorCategory {
  THROTTLING = 'THROTTLING',
  SERVICE = 'SERVICE',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  UNKNOWN = 'UNKNOWN'
}

export interface ErrorResolution {
  shouldRetry: boolean;
  strategy?: RetryStrategy;
  maxRetries?: number;
  fallbackSentiment?: string;
}

export enum RetryStrategy {
  EXPONENTIAL_BACKOFF = 'EXPONENTIAL_BACKOFF',
  FIXED_DELAY = 'FIXED_DELAY'
}

export interface LogContext {
  videoId?: string;
  analysisId?: string;
  batchNumber?: number;
  commentCount?: number;
}

export interface FeatureFlags {
  useAwsComprehend: boolean;
  enableParallelComparison: boolean;
}
