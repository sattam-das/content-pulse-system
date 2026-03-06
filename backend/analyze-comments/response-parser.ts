/**
 * Response Parser for Bedrock Model Outputs
 *
 * Extracts and validates JSON from Claude and Llama model responses.
 * Handles markdown code fences and validates required analysis fields.
 */

export interface ParsedAnalysisResult {
    commonQuestions: Array<{ question: string; count: number; examples: string[] }>;
    confusionPoints: Array<{ issue: string; count: number; timestamp: string }>;
    timelineMarkers: Array<{ timestamp: string; mentions: number; sentiment: string }>;
    sentimentBreakdown?: {
        positive: number;
        negative: number;
        neutral: number;
        questions: number;
        overallSentiment: string;
    };
    executiveSummary: string;
    engagementMetrics: {
        positiveFeedbackCount: number;
        topPositiveComment: string;
        actionItems: string[];
    };
}

const REQUIRED_FIELDS = ['commonQuestions', 'confusionPoints', 'executiveSummary'] as const;

/**
 * Parses raw model response text into a validated analysis result.
 *
 * Handles:
 * - Raw JSON strings
 * - JSON wrapped in markdown code fences (```json ... ```)
 * - Responses with leading/trailing text around JSON
 */
export function parseModelResponse(rawResponse: string): ParsedAnalysisResult {
    if (!rawResponse || typeof rawResponse !== 'string') {
        throw new Error('Invalid model response: empty or non-string input');
    }

    // Step 1: Strip markdown code fences if present
    let cleaned = rawResponse.trim();

    // Remove ```json ... ``` or ``` ... ``` wrapping
    const codeFenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeFenceMatch) {
        cleaned = codeFenceMatch[1].trim();
    }

    // Step 2: Extract JSON object using regex
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error(`Failed to extract JSON from model response. Response starts with: "${cleaned.substring(0, 100)}"`);
    }

    // Step 3: Parse JSON
    let parsed: any;
    try {
        parsed = JSON.parse(jsonMatch[0]);
    } catch (e) {
        throw new Error(`Invalid JSON in model response: ${(e as Error).message}. JSON starts with: "${jsonMatch[0].substring(0, 100)}"`);
    }

    // Step 4: Validate required fields
    for (const field of REQUIRED_FIELDS) {
        if (!(field in parsed)) {
            throw new Error(`Model response missing required field: "${field}". Present fields: ${Object.keys(parsed).join(', ')}`);
        }
    }

    return parsed as ParsedAnalysisResult;
}
