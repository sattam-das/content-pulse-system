/**
 * Unit Tests for Text Preprocessing
 */

import { preprocessComment, isEmpty, getByteLength } from '../src/utils/textPreprocessing';

describe('Text Preprocessing', () => {
  describe('preprocessComment', () => {
    it('should return empty string for empty input', () => {
      expect(preprocessComment('')).toBe('');
    });

    it('should return empty string for whitespace-only input', () => {
      expect(preprocessComment('   ')).toBe('');
      expect(preprocessComment('\t\t')).toBe('');
      expect(preprocessComment('\n\n')).toBe('');
      expect(preprocessComment('  \t\n  ')).toBe('');
    });

    it('should trim leading and trailing whitespace', () => {
      expect(preprocessComment('  hello  ')).toBe('hello');
      expect(preprocessComment('\thello\t')).toBe('hello');
      expect(preprocessComment('\nhello\n')).toBe('hello');
    });

    it('should preserve text within byte limit', () => {
      const text = 'This is a normal comment';
      expect(preprocessComment(text)).toBe(text);
    });

    it('should truncate text exceeding 5000 bytes', () => {
      // Create a string that exceeds 5000 bytes
      const longText = 'a'.repeat(6000);
      const result = preprocessComment(longText);
      
      expect(getByteLength(result)).toBeLessThanOrEqual(5000);
      expect(result.length).toBeLessThan(longText.length);
    });

    it('should handle multi-byte UTF-8 characters correctly', () => {
      // Emoji and special characters take multiple bytes
      const emoji = '😀'.repeat(2000); // Each emoji is 4 bytes
      const result = preprocessComment(emoji);
      
      expect(getByteLength(result)).toBeLessThanOrEqual(5000);
    });

    it('should handle mixed ASCII and multi-byte characters', () => {
      const mixed = 'Hello 世界 '.repeat(1000);
      const result = preprocessComment(mixed);
      
      expect(getByteLength(result)).toBeLessThanOrEqual(5000);
    });

    it('should handle text at exactly 5000 bytes', () => {
      // Create text that's exactly 5000 bytes
      const text = 'a'.repeat(5000);
      const result = preprocessComment(text);
      
      expect(result).toBe(text);
      expect(getByteLength(result)).toBe(5000);
    });

    it('should handle text at 5001 bytes', () => {
      const text = 'a'.repeat(5001);
      const result = preprocessComment(text);
      
      expect(getByteLength(result)).toBeLessThanOrEqual(5000);
      expect(result.length).toBe(5000);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return true for whitespace-only strings', () => {
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t')).toBe(true);
      expect(isEmpty('\n')).toBe(true);
      expect(isEmpty('  \t\n  ')).toBe(true);
    });

    it('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  hello  ')).toBe(false);
    });
  });

  describe('getByteLength', () => {
    it('should return correct byte length for ASCII', () => {
      expect(getByteLength('hello')).toBe(5);
      expect(getByteLength('a')).toBe(1);
    });

    it('should return correct byte length for multi-byte characters', () => {
      expect(getByteLength('😀')).toBe(4); // Emoji is 4 bytes
      expect(getByteLength('世界')).toBe(6); // Each Chinese character is 3 bytes
    });

    it('should return 0 for empty string', () => {
      expect(getByteLength('')).toBe(0);
    });
  });
});
