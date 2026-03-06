/**
 * Unit Tests for Response Parser
 *
 * Tests JSON extraction, markdown code fence handling, and field validation.
 */

import { parseModelResponse } from '../analyze-comments/response-parser';

const VALID_RESPONSE = JSON.stringify({
    commonQuestions: [{ question: 'How?', count: 2, examples: ['ex1'] }],
    confusionPoints: [{ issue: 'Step 3', count: 1, timestamp: '2:30' }],
    timelineMarkers: [{ timestamp: '1:00', mentions: 3, sentiment: 'positive' }],
    executiveSummary: 'Great video with positive reception.',
    engagementMetrics: {
        positiveFeedbackCount: 10,
        topPositiveComment: 'Amazing!',
        actionItems: ['Add chapters'],
    },
});

describe('parseModelResponse', () => {
    describe('Valid JSON parsing', () => {
        it('should parse raw JSON string', () => {
            const result = parseModelResponse(VALID_RESPONSE);
            expect(result.commonQuestions).toHaveLength(1);
            expect(result.confusionPoints).toHaveLength(1);
            expect(result.executiveSummary).toBe('Great video with positive reception.');
            expect(result.engagementMetrics.positiveFeedbackCount).toBe(10);
        });

        it('should parse JSON with leading/trailing whitespace', () => {
            const result = parseModelResponse(`  \n  ${VALID_RESPONSE}  \n  `);
            expect(result.commonQuestions).toHaveLength(1);
        });
    });

    describe('Markdown code fence handling', () => {
        it('should extract JSON from ```json code fences', () => {
            const wrapped = '```json\n' + VALID_RESPONSE + '\n```';
            const result = parseModelResponse(wrapped);
            expect(result.commonQuestions).toHaveLength(1);
            expect(result.executiveSummary).toBe('Great video with positive reception.');
        });

        it('should extract JSON from ``` code fences (no language tag)', () => {
            const wrapped = '```\n' + VALID_RESPONSE + '\n```';
            const result = parseModelResponse(wrapped);
            expect(result.commonQuestions).toHaveLength(1);
        });

        it('should handle code fences with surrounding text', () => {
            const wrapped = 'Here is the analysis:\n```json\n' + VALID_RESPONSE + '\n```\nEnd of response.';
            const result = parseModelResponse(wrapped);
            expect(result.commonQuestions).toHaveLength(1);
        });
    });

    describe('JSON extraction from mixed content', () => {
        it('should extract JSON object from text with surrounding content', () => {
            const mixed = 'Here is the result: ' + VALID_RESPONSE + ' End.';
            const result = parseModelResponse(mixed);
            expect(result.executiveSummary).toBe('Great video with positive reception.');
        });
    });

    describe('Invalid JSON handling', () => {
        it('should throw on empty string', () => {
            expect(() => parseModelResponse('')).toThrow('empty or non-string input');
        });

        it('should throw on non-JSON text', () => {
            expect(() => parseModelResponse('This is just plain text without any JSON'))
                .toThrow('Failed to extract JSON');
        });

        it('should throw on malformed JSON', () => {
            expect(() => parseModelResponse('{ "commonQuestions": [}'))
                .toThrow('Invalid JSON');
        });

        it('should throw on null/undefined input', () => {
            expect(() => parseModelResponse(null as any)).toThrow('empty or non-string input');
            expect(() => parseModelResponse(undefined as any)).toThrow('empty or non-string input');
        });
    });

    describe('Required fields validation', () => {
        it('should throw when commonQuestions is missing', () => {
            const incomplete = JSON.stringify({
                confusionPoints: [],
                executiveSummary: 'summary',
            });
            expect(() => parseModelResponse(incomplete)).toThrow('commonQuestions');
        });

        it('should throw when confusionPoints is missing', () => {
            const incomplete = JSON.stringify({
                commonQuestions: [],
                executiveSummary: 'summary',
            });
            expect(() => parseModelResponse(incomplete)).toThrow('confusionPoints');
        });

        it('should throw when executiveSummary is missing', () => {
            const incomplete = JSON.stringify({
                commonQuestions: [],
                confusionPoints: [],
            });
            expect(() => parseModelResponse(incomplete)).toThrow('executiveSummary');
        });

        it('should accept response with all required fields and optional fields missing', () => {
            const minimal = JSON.stringify({
                commonQuestions: [],
                confusionPoints: [],
                executiveSummary: 'Minimal summary',
            });
            const result = parseModelResponse(minimal);
            expect(result.commonQuestions).toEqual([]);
            expect(result.executiveSummary).toBe('Minimal summary');
        });
    });
});
