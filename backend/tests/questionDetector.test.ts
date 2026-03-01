/**
 * Unit Tests for Question Detection
 */

import { QuestionDetector, isQuestion } from '../src/utils/questionDetector';

describe('QuestionDetector', () => {
  let detector: QuestionDetector;

  beforeEach(() => {
    detector = new QuestionDetector();
  });

  describe('isQuestion', () => {
    describe('question mark detection', () => {
      it('should detect question mark at end', () => {
        expect(detector.isQuestion('What is this?')).toBe(true);
        expect(detector.isQuestion('Really?')).toBe(true);
        expect(detector.isQuestion('Is this working?')).toBe(true);
      });

      it('should detect question mark in middle', () => {
        expect(detector.isQuestion('What? I dont understand')).toBe(true);
      });

      it('should detect multiple question marks', () => {
        expect(detector.isQuestion('What??? Why???')).toBe(true);
      });
    });

    describe('question word detection', () => {
      it('should detect "what" at start', () => {
        expect(detector.isQuestion('What happened here')).toBe(true);
        expect(detector.isQuestion('what is going on')).toBe(true);
      });

      it('should detect "when" at start', () => {
        expect(detector.isQuestion('When will this be fixed')).toBe(true);
        expect(detector.isQuestion('when did you do this')).toBe(true);
      });

      it('should detect "where" at start', () => {
        expect(detector.isQuestion('Where can I find this')).toBe(true);
        expect(detector.isQuestion('where is the link')).toBe(true);
      });

      it('should detect "who" at start', () => {
        expect(detector.isQuestion('Who made this')).toBe(true);
        expect(detector.isQuestion('who is responsible')).toBe(true);
      });

      it('should detect "why" at start', () => {
        expect(detector.isQuestion('Why did you do that')).toBe(true);
        expect(detector.isQuestion('why is this happening')).toBe(true);
      });

      it('should detect "how" at start', () => {
        expect(detector.isQuestion('How does this work')).toBe(true);
        expect(detector.isQuestion('how can I do this')).toBe(true);
      });

      it('should detect "which" at start', () => {
        expect(detector.isQuestion('Which one is better')).toBe(true);
        expect(detector.isQuestion('which option should I choose')).toBe(true);
      });

      it('should detect "whose" at start', () => {
        expect(detector.isQuestion('Whose idea was this')).toBe(true);
        expect(detector.isQuestion('whose responsibility is it')).toBe(true);
      });

      it('should detect "whom" at start', () => {
        expect(detector.isQuestion('Whom should I contact')).toBe(true);
        expect(detector.isQuestion('whom did you ask')).toBe(true);
      });
    });

    describe('non-question detection', () => {
      it('should not detect statements as questions', () => {
        expect(detector.isQuestion('This is a statement')).toBe(false);
        expect(detector.isQuestion('Great video')).toBe(false);
        expect(detector.isQuestion('I love this')).toBe(false);
      });

      it('should not detect question words in middle as questions', () => {
        expect(detector.isQuestion('I dont know what to do')).toBe(false);
        expect(detector.isQuestion('Tell me how you did this')).toBe(false);
      });

      it('should handle empty strings', () => {
        expect(detector.isQuestion('')).toBe(false);
        expect(detector.isQuestion('   ')).toBe(false);
      });
    });

    describe('edge cases', () => {
      it('should handle mixed case', () => {
        expect(detector.isQuestion('WHAT IS THIS?')).toBe(true);
        expect(detector.isQuestion('WhAt HaPpEnEd?')).toBe(true);
      });

      it('should handle extra whitespace', () => {
        expect(detector.isQuestion('  What is this?  ')).toBe(true);
        expect(detector.isQuestion('   why   ')).toBe(true);
      });

      it('should handle punctuation combinations', () => {
        expect(detector.isQuestion('What?!')).toBe(true);
        expect(detector.isQuestion('Really!?')).toBe(true);
      });
    });
  });

  describe('convenience function', () => {
    it('should work as standalone function', () => {
      expect(isQuestion('What is this?')).toBe(true);
      expect(isQuestion('This is a statement')).toBe(false);
    });
  });
});
