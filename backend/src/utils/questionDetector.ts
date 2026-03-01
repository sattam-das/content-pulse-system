/**
 * Question Detection Module
 * 
 * Identifies question-oriented comments using pattern matching.
 * Questions should be classified as 'question' sentiment regardless of AWS Comprehend output.
 */

export class QuestionDetector {
  private questionWords: string[] = [
    'what', 'when', 'where', 'who', 'why', 'how', 'which', 'whose', 'whom'
  ];

  private questionPatterns: RegExp[] = [
    /\?$/,  // Ends with question mark
    /^(what|when|where|who|why|how|which|whose|whom)\s/i,  // Starts with question word
  ];

  /**
   * Checks if the given text is a question.
   * 
   * Detection criteria:
   * 1. Contains a question mark
   * 2. Starts with a question word (what, when, where, who, why, how, which, whose, whom)
   * 
   * @param text - The text to analyze
   * @returns True if the text is a question
   */
  isQuestion(text: string): boolean {
    if (!text || text.trim().length === 0) {
      return false;
    }

    const trimmed = text.trim();

    // Check for question mark
    if (this.hasQuestionMark(trimmed)) {
      return true;
    }

    // Check for question words at the start
    if (this.hasQuestionWords(trimmed)) {
      return true;
    }

    // Check for question patterns
    if (this.matchesQuestionPattern(trimmed)) {
      return true;
    }

    return false;
  }

  /**
   * Checks if text contains a question mark.
   * 
   * @param text - The text to check
   * @returns True if text contains '?'
   */
  private hasQuestionMark(text: string): boolean {
    return text.includes('?');
  }

  /**
   * Checks if text starts with a question word.
   * 
   * @param text - The text to check
   * @returns True if text starts with a question word
   */
  private hasQuestionWords(text: string): boolean {
    const firstWord = text.toLowerCase().split(/\s+/)[0];
    return this.questionWords.includes(firstWord);
  }

  /**
   * Checks if text matches any question pattern.
   * 
   * @param text - The text to check
   * @returns True if text matches a question pattern
   */
  private matchesQuestionPattern(text: string): boolean {
    return this.questionPatterns.some(pattern => pattern.test(text));
  }
}

/**
 * Convenience function to check if text is a question.
 * 
 * @param text - The text to analyze
 * @returns True if the text is a question
 */
export function isQuestion(text: string): boolean {
  const detector = new QuestionDetector();
  return detector.isQuestion(text);
}
