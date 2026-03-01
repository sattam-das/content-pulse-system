/**
 * Sentiment Aggregation Module
 * 
 * Handles aggregation of individual sentiment results into breakdown counts
 * and generation of overall sentiment summaries.
 */

import { SentimentResult, SentimentBreakdown } from '../types/sentiment';

/**
 * Calculates sentiment breakdown from individual sentiment results.
 * 
 * Aggregates sentiment classifications into counts for each category:
 * positive, negative, neutral, question, confusion
 * 
 * @param results - Array of individual sentiment results
 * @returns SentimentBreakdown with counts for each sentiment type
 */
export function calculateBreakdown(results: SentimentResult[]): SentimentBreakdown {
  const breakdown: SentimentBreakdown = {
    positive: 0,
    negative: 0,
    neutral: 0,
    question: 0,
    confusion: 0
  };

  for (const result of results) {
    switch (result.sentiment) {
      case 'positive':
        breakdown.positive++;
        break;
      case 'negative':
        breakdown.negative++;
        break;
      case 'neutral':
        breakdown.neutral++;
        break;
      case 'question':
        breakdown.question++;
        break;
      case 'confusion':
        breakdown.confusion++;
        break;
    }
  }

  return breakdown;
}

/**
 * Generates overall sentiment summary text based on sentiment distribution.
 * 
 * Creates a human-readable summary describing the overall sentiment
 * of the comment set based on the breakdown distribution.
 * 
 * @param breakdown - Sentiment breakdown with counts
 * @returns Human-readable overall sentiment summary
 */
export function generateOverallSentiment(breakdown: SentimentBreakdown): string {
  const total = breakdown.positive + breakdown.negative + breakdown.neutral + 
                breakdown.question + breakdown.confusion;

  if (total === 0) {
    return 'No comments to analyze';
  }

  // Calculate percentages
  const positivePercent = (breakdown.positive / total) * 100;
  const negativePercent = (breakdown.negative / total) * 100;
  const questionPercent = (breakdown.question / total) * 100;

  // Determine dominant sentiment
  const maxCount = Math.max(
    breakdown.positive,
    breakdown.negative,
    breakdown.neutral,
    breakdown.question,
    breakdown.confusion
  );

  // Generate summary based on distribution
  if (positivePercent >= 60) {
    return `Overwhelmingly positive (${positivePercent.toFixed(0)}% positive)`;
  } else if (negativePercent >= 60) {
    return `Overwhelmingly negative (${negativePercent.toFixed(0)}% negative)`;
  } else if (questionPercent >= 40) {
    return `Mostly questions (${questionPercent.toFixed(0)}% questions)`;
  } else if (positivePercent > negativePercent && positivePercent >= 40) {
    return `Generally positive (${positivePercent.toFixed(0)}% positive, ${negativePercent.toFixed(0)}% negative)`;
  } else if (negativePercent > positivePercent && negativePercent >= 40) {
    return `Generally negative (${negativePercent.toFixed(0)}% negative, ${positivePercent.toFixed(0)}% positive)`;
  } else if (maxCount === breakdown.neutral) {
    return `Mostly neutral (${((breakdown.neutral / total) * 100).toFixed(0)}% neutral)`;
  } else {
    return `Mixed sentiment (${positivePercent.toFixed(0)}% positive, ${negativePercent.toFixed(0)}% negative, ${questionPercent.toFixed(0)}% questions)`;
  }
}
