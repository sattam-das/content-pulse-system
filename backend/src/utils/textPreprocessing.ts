/**
 * Text Preprocessing Utilities
 * 
 * Handles text sanitization, validation, and truncation for AWS Comprehend API.
 * AWS Comprehend has a limit of 5000 bytes (UTF-8 encoded) per text input.
 */

/**
 * Preprocesses comment text for AWS Comprehend analysis.
 * 
 * Handles:
 * - Empty strings and whitespace-only text
 * - UTF-8 byte truncation at 5000 bytes
 * - Leading/trailing whitespace removal
 * 
 * @param text - The raw comment text to preprocess
 * @returns Preprocessed text ready for AWS Comprehend, or empty string if invalid
 */
export function preprocessComment(text: string): string {
  // Remove leading/trailing whitespace
  const trimmed = text.trim();
  
  // Return empty string if only whitespace
  if (trimmed.length === 0) {
    return '';
  }
  
  // Truncate to AWS Comprehend limit (5000 bytes UTF-8)
  const maxBytes = 5000;
  let truncated = trimmed;
  
  // Check if text exceeds byte limit
  let encoder = new TextEncoder();
  let encoded = encoder.encode(truncated);
  
  // Iteratively truncate until within byte limit
  while (encoded.length > maxBytes && truncated.length > 0) {
    // Remove last character
    truncated = truncated.slice(0, -1);
    encoded = encoder.encode(truncated);
  }
  
  return truncated;
}

/**
 * Checks if text is empty or contains only whitespace.
 * 
 * @param text - The text to check
 * @returns True if text is empty or whitespace-only
 */
export function isEmpty(text: string): boolean {
  return text.trim().length === 0;
}

/**
 * Gets the UTF-8 byte length of a string.
 * 
 * @param text - The text to measure
 * @returns The byte length in UTF-8 encoding
 */
export function getByteLength(text: string): number {
  return new TextEncoder().encode(text).length;
}
