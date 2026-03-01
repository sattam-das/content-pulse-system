/**
 * Unit Tests for Classification Engine
 */

import { ClassificationEngine } from '../src/services/classificationEngine';

describe('ClassificationEngine', () => {
  let engine: ClassificationEngine;

  beforeEach(() => {
    engine = new ClassificationEngine();
  });

  describe('direct sentiment mapping', () => {
    it('should map POSITIVE to positive', () => {
      const result = engine.classify('POSITIVE', {
        Positive: 0.95,
        Negative: 0.02,
        Neutral: 0.03,
        Mixed: 0.0
      }, 'Great video!');

      expect(result.sentiment).toBe('positive');
      expect(result.confidence).toBe(0.95);
      expect(result.scores.positive).toBe(0.95);
    });

    it('should map NEGATIVE to negative', () => {
      const result = engine.classify('NEGATIVE', {
        Positive: 0.01,
        Negative: 0.97,
        Neutral: 0.02,
        Mixed: 0.0
      }, 'Terrible content');

      expect(result.sentiment).toBe('negative');
      expect(result.confidence).toBe(0.97);
      expect(result.scores.negative).toBe(0.97);
    });

    it('should map NEUTRAL to neutral', () => {
      const result = engine.classify('NEUTRAL', {
        Positive: 0.1,
        Negative: 0.1,
        Neutral: 0.8,
        Mixed: 0.0
      }, 'This is a video');

      expect(result.sentiment).toBe('neutral');
      expect(result.confidence).toBe(0.8);
      expect(result.scores.neutral).toBe(0.8);
    });
  });

  describe('MIXED sentiment handling', () => {
    it('should use highest score when MIXED with clear winner', () => {
      const result = engine.classify('MIXED', {
        Positive: 0.6,
        Negative: 0.3,
        Neutral: 0.1,
        Mixed: 0.0
      }, 'Good but has issues');

      expect(result.sentiment).toBe('positive');
      expect(result.confidence).toBe(0.6);
    });

    it('should classify as neutral when MIXED with balanced scores', () => {
      const result = engine.classify('MIXED', {
        Positive: 0.35,
        Negative: 0.33,
        Neutral: 0.32,
        Mixed: 0.0
      }, 'Mixed feelings about this');

      expect(result.sentiment).toBe('neutral');
    });

    it('should handle MIXED with negative as highest', () => {
      const result = engine.classify('MIXED', {
        Positive: 0.2,
        Negative: 0.7,
        Neutral: 0.1,
        Mixed: 0.0
      }, 'Not great but okay');

      expect(result.sentiment).toBe('negative');
      expect(result.confidence).toBe(0.7);
    });

    it('should handle MIXED with neutral as highest', () => {
      const result = engine.classify('MIXED', {
        Positive: 0.2,
        Negative: 0.2,
        Neutral: 0.6,
        Mixed: 0.0
      }, 'It is what it is');

      expect(result.sentiment).toBe('neutral');
      expect(result.confidence).toBe(0.6);
    });
  });

  describe('question override', () => {
    it('should override POSITIVE sentiment for questions', () => {
      const result = engine.classify('POSITIVE', {
        Positive: 0.9,
        Negative: 0.05,
        Neutral: 0.05,
        Mixed: 0.0
      }, 'What is this amazing thing?');

      expect(result.sentiment).toBe('question');
    });

    it('should override NEGATIVE sentiment for questions', () => {
      const result = engine.classify('NEGATIVE', {
        Positive: 0.05,
        Negative: 0.9,
        Neutral: 0.05,
        Mixed: 0.0
      }, 'Why is this so bad?');

      expect(result.sentiment).toBe('question');
    });

    it('should override NEUTRAL sentiment for questions', () => {
      const result = engine.classify('NEUTRAL', {
        Positive: 0.1,
        Negative: 0.1,
        Neutral: 0.8,
        Mixed: 0.0
      }, 'How does this work?');

      expect(result.sentiment).toBe('question');
    });

    it('should override MIXED sentiment for questions', () => {
      const result = engine.classify('MIXED', {
        Positive: 0.4,
        Negative: 0.4,
        Neutral: 0.2,
        Mixed: 0.0
      }, 'Is this good or bad?');

      expect(result.sentiment).toBe('question');
    });

    it('should not override non-questions', () => {
      const result = engine.classify('POSITIVE', {
        Positive: 0.9,
        Negative: 0.05,
        Neutral: 0.05,
        Mixed: 0.0
      }, 'This is great');

      expect(result.sentiment).toBe('positive');
    });
  });

  describe('edge cases', () => {
    it('should handle unknown sentiment type', () => {
      const result = engine.classify('UNKNOWN', {
        Positive: 0.3,
        Negative: 0.3,
        Neutral: 0.4,
        Mixed: 0.0
      }, 'Some text');

      expect(result.sentiment).toBe('neutral');
      expect(result.confidence).toBe(0.0);
    });

    it('should preserve all score values', () => {
      const result = engine.classify('POSITIVE', {
        Positive: 0.8,
        Negative: 0.1,
        Neutral: 0.05,
        Mixed: 0.05
      }, 'Great!');

      expect(result.scores).toEqual({
        positive: 0.8,
        negative: 0.1,
        neutral: 0.05,
        mixed: 0.05
      });
    });
  });
});
