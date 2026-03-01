/**
 * Unit Tests for Sentiment Aggregation
 */

import { calculateBreakdown, generateOverallSentiment } from '../src/services/sentimentAggregation';
import { SentimentResult } from '../src/types/sentiment';

describe('Sentiment Aggregation', () => {
  describe('calculateBreakdown', () => {
    it('should count all positive sentiments', () => {
      const results: SentimentResult[] = [
        { sentiment: 'positive', confidence: 0.9, scores: { positive: 0.9, negative: 0.05, neutral: 0.05, mixed: 0 } },
        { sentiment: 'positive', confidence: 0.8, scores: { positive: 0.8, negative: 0.1, neutral: 0.1, mixed: 0 } },
        { sentiment: 'positive', confidence: 0.95, scores: { positive: 0.95, negative: 0.02, neutral: 0.03, mixed: 0 } }
      ];

      const breakdown = calculateBreakdown(results);

      expect(breakdown.positive).toBe(3);
      expect(breakdown.negative).toBe(0);
      expect(breakdown.neutral).toBe(0);
      expect(breakdown.question).toBe(0);
      expect(breakdown.confusion).toBe(0);
    });

    it('should count mixed sentiments correctly', () => {
      const results: SentimentResult[] = [
        { sentiment: 'positive', confidence: 0.9, scores: { positive: 0.9, negative: 0.05, neutral: 0.05, mixed: 0 } },
        { sentiment: 'negative', confidence: 0.8, scores: { positive: 0.1, negative: 0.8, neutral: 0.1, mixed: 0 } },
        { sentiment: 'neutral', confidence: 0.7, scores: { positive: 0.1, negative: 0.2, neutral: 0.7, mixed: 0 } },
        { sentiment: 'question', confidence: 0.6, scores: { positive: 0.3, negative: 0.3, neutral: 0.4, mixed: 0 } },
        { sentiment: 'confusion', confidence: 0.5, scores: { positive: 0.2, negative: 0.5, neutral: 0.3, mixed: 0 } }
      ];

      const breakdown = calculateBreakdown(results);

      expect(breakdown.positive).toBe(1);
      expect(breakdown.negative).toBe(1);
      expect(breakdown.neutral).toBe(1);
      expect(breakdown.question).toBe(1);
      expect(breakdown.confusion).toBe(1);
    });

    it('should return zero counts for empty array', () => {
      const breakdown = calculateBreakdown([]);

      expect(breakdown.positive).toBe(0);
      expect(breakdown.negative).toBe(0);
      expect(breakdown.neutral).toBe(0);
      expect(breakdown.question).toBe(0);
      expect(breakdown.confusion).toBe(0);
    });

    it('should sum to total number of results', () => {
      const results: SentimentResult[] = [
        { sentiment: 'positive', confidence: 0.9, scores: { positive: 0.9, negative: 0.05, neutral: 0.05, mixed: 0 } },
        { sentiment: 'negative', confidence: 0.8, scores: { positive: 0.1, negative: 0.8, neutral: 0.1, mixed: 0 } },
        { sentiment: 'neutral', confidence: 0.7, scores: { positive: 0.1, negative: 0.2, neutral: 0.7, mixed: 0 } },
        { sentiment: 'question', confidence: 0.6, scores: { positive: 0.3, negative: 0.3, neutral: 0.4, mixed: 0 } }
      ];

      const breakdown = calculateBreakdown(results);
      const total = breakdown.positive + breakdown.negative + breakdown.neutral + 
                   breakdown.question + breakdown.confusion;

      expect(total).toBe(results.length);
    });
  });

  describe('generateOverallSentiment', () => {
    it('should return "No comments" for empty breakdown', () => {
      const breakdown = {
        positive: 0,
        negative: 0,
        neutral: 0,
        question: 0,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toBe('No comments to analyze');
    });

    it('should return "Overwhelmingly positive" for 60%+ positive', () => {
      const breakdown = {
        positive: 70,
        negative: 10,
        neutral: 10,
        question: 10,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Overwhelmingly positive');
      expect(summary).toContain('70%');
    });

    it('should return "Overwhelmingly negative" for 60%+ negative', () => {
      const breakdown = {
        positive: 10,
        negative: 70,
        neutral: 10,
        question: 10,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Overwhelmingly negative');
      expect(summary).toContain('70%');
    });

    it('should return "Mostly questions" for 40%+ questions', () => {
      const breakdown = {
        positive: 20,
        negative: 20,
        neutral: 10,
        question: 50,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Mostly questions');
      expect(summary).toContain('50%');
    });

    it('should return "Generally positive" for 40-60% positive', () => {
      const breakdown = {
        positive: 50,
        negative: 30,
        neutral: 10,
        question: 10,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Generally positive');
      expect(summary).toContain('50%');
      expect(summary).toContain('30%');
    });

    it('should return "Generally negative" for 40-60% negative', () => {
      const breakdown = {
        positive: 30,
        negative: 50,
        neutral: 10,
        question: 10,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Generally negative');
      expect(summary).toContain('50%');
      expect(summary).toContain('30%');
    });

    it('should return "Mostly neutral" when neutral is dominant', () => {
      const breakdown = {
        positive: 10,
        negative: 10,
        neutral: 60,
        question: 10,
        confusion: 10
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Mostly neutral');
      expect(summary).toContain('60%');
    });

    it('should return "Mixed sentiment" for balanced distribution', () => {
      const breakdown = {
        positive: 30,
        negative: 30,
        neutral: 20,
        question: 20,
        confusion: 0
      };

      const summary = generateOverallSentiment(breakdown);

      expect(summary).toContain('Mixed sentiment');
    });
  });
});
