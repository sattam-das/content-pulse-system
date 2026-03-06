/**
 * Unit Tests for BedrockClient
 *
 * Tests Claude/Llama invocation, failover logic, and error handling
 * using aws-sdk-client-mock to mock BedrockRuntimeClient.
 */

import { mockClient } from 'aws-sdk-client-mock';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { BedrockClient, DualModelFailureError, ModelInvocationError } from '../analyze-comments/bedrock-client';

const bedrockMock = mockClient(BedrockRuntimeClient);

// Helper to create a mock Bedrock response body
function mockClaudeResponse(text: string): any {
    return new TextEncoder().encode(JSON.stringify({
        id: 'msg_test',
        type: 'message',
        role: 'assistant',
        content: [{ type: 'text', text }],
        model: 'claude-sonnet-4-5-v2',
        stop_reason: 'end_turn',
        usage: { input_tokens: 100, output_tokens: 50 },
    }));
}

function mockLlamaResponse(generation: string): any {
    return new TextEncoder().encode(JSON.stringify({
        generation,
        prompt_token_count: 100,
        generation_token_count: 50,
        stop_reason: 'stop',
    }));
}

const VALID_ANALYSIS_JSON = JSON.stringify({
    commonQuestions: [{ question: 'How does this work?', count: 5, examples: ['example1'] }],
    confusionPoints: [{ issue: 'Unclear steps', count: 3, timestamp: '2:30' }],
    timelineMarkers: [{ timestamp: '1:00', mentions: 2, sentiment: 'positive' }],
    executiveSummary: 'Analyzed 100 comments. 70% positive, 10% negative.',
    engagementMetrics: { positiveFeedbackCount: 70, topPositiveComment: 'Great video!', actionItems: ['Add chapters'] },
});

beforeEach(() => {
    bedrockMock.reset();
});

describe('BedrockClient', () => {
    const client = new BedrockClient({
        region: 'us-east-1',
        primaryModel: 'meta.llama3-3-70b-instruct-v1:0',
        failsafeModel: 'meta.llama3-1-70b-instruct-v1:0',
        timeoutPerModel: 30000,
        totalTimeout: 60000,
    });

    describe('Primary model invocation (Llama 3.3 70B)', () => {
        it('should invoke Llama 3.3 first and return primary result on success', async () => {
            bedrockMock.on(InvokeModelCommand).resolves({
                body: mockLlamaResponse(VALID_ANALYSIS_JSON),
            });

            const result = await client.invokeModel('Analyze these comments', 'You are an analyst');

            expect(result.modelUsed).toBe('primary');
            expect(result.attemptCount).toBe(1);
            expect(result.content).toBe(VALID_ANALYSIS_JSON);

            // Verify the correct model was invoked
            const calls = bedrockMock.commandCalls(InvokeModelCommand);
            expect(calls).toHaveLength(1);
            const requestBody = JSON.parse(calls[0].args[0].input.body as string);
            expect(calls[0].args[0].input.modelId).toBe('meta.llama3-3-70b-instruct-v1:0');
            expect(requestBody.max_gen_len).toBe(1500);
            expect(requestBody.temperature).toBe(0.3);
        });

        it('should format Llama 3.3 request with correct message structure', async () => {
            bedrockMock.on(InvokeModelCommand).resolves({
                body: mockLlamaResponse('{"test": true}'),
            });

            await client.invokeModel('User prompt here', 'System prompt here');

            const calls = bedrockMock.commandCalls(InvokeModelCommand);
            const requestBody = JSON.parse(calls[0].args[0].input.body as string);
            expect(requestBody.prompt).toBe('System prompt here\n\nUser: User prompt here\n\nAssistant:');
            expect(requestBody.max_gen_len).toBe(1500);
            expect(requestBody.top_p).toBe(0.9);
        });
    });

    describe('Failover to Llama 3.1', () => {
        it('should fail over to Llama 3.1 when Llama 3.3 fails', async () => {
            bedrockMock
                .on(InvokeModelCommand)
                .rejectsOnce(new Error('Claude service error'))
                .resolves({
                    body: mockLlamaResponse(VALID_ANALYSIS_JSON),
                });

            const result = await client.invokeModel('Analyze comments', 'System prompt');

            expect(result.modelUsed).toBe('failsafe');
            expect(result.attemptCount).toBe(2);
            expect(result.content).toBe(VALID_ANALYSIS_JSON);

            // Should have made 2 calls: Claude then Llama
            const calls = bedrockMock.commandCalls(InvokeModelCommand);
            expect(calls).toHaveLength(2);
        });

        it('should format Llama 3.1 failsafe request with correct prompt structure', async () => {
            bedrockMock
                .on(InvokeModelCommand)
                .rejectsOnce(new Error('Llama 3.3 failed'))
                .resolves({
                    body: mockLlamaResponse('{"test": true}'),
                });

            await client.invokeModel('User prompt', 'System prompt');

            const calls = bedrockMock.commandCalls(InvokeModelCommand);
            const llamaBody = JSON.parse(calls[1].args[0].input.body as string);
            expect(llamaBody.prompt).toBe('System prompt\n\nUser: User prompt\n\nAssistant:');
            expect(llamaBody.max_gen_len).toBe(1500);
            expect(llamaBody.temperature).toBe(0.3);
            expect(llamaBody.top_p).toBe(0.9);
        });
    });

    describe('Dual model failure', () => {
        it('should throw DualModelFailureError when both models fail', async () => {
            bedrockMock
                .on(InvokeModelCommand)
                .rejectsOnce(new Error('Claude down'))
                .rejectsOnce(new Error('Llama down'));

            await expect(client.invokeModel('prompt', 'system'))
                .rejects
                .toThrow(DualModelFailureError);
        });

        it('should include error details from both models in DualModelFailureError', async () => {
            bedrockMock
                .on(InvokeModelCommand)
                .rejectsOnce(new Error('Claude timeout'))
                .rejectsOnce(new Error('Llama rate limited'));

            try {
                await client.invokeModel('prompt', 'system');
                fail('Expected DualModelFailureError');
            } catch (err) {
                const dualErr = err as DualModelFailureError;
                expect(dualErr.primaryError).toBeDefined();
                expect(dualErr.failsafeError).toBeDefined();
                expect(dualErr.totalAttempts).toBe(2);
                expect(dualErr.totalDuration).toBeGreaterThanOrEqual(0);
                expect(dualErr.message).toContain('Both models failed');
            }
        });
    });

    describe('Auth error handling', () => {
        it('should NOT fail over on auth errors — fail immediately', async () => {
            const authError: any = new Error('Access denied');
            authError.name = 'AccessDeniedException';
            authError.$metadata = { httpStatusCode: 403 };

            bedrockMock.on(InvokeModelCommand).rejectsOnce(authError);

            await expect(client.invokeModel('prompt', 'system'))
                .rejects
                .toThrow(ModelInvocationError);

            // Only 1 call — no failover
            const calls = bedrockMock.commandCalls(InvokeModelCommand);
            expect(calls).toHaveLength(1);
        });
    });

    describe('Response parsing', () => {
        it('should correctly parse Llama primary response body (generation field)', async () => {
            const expectedText = '{"key": "value"}';
            bedrockMock.on(InvokeModelCommand).resolves({
                body: mockLlamaResponse(expectedText),
            });

            const result = await client.invokeModel('prompt', 'system');
            expect(result.content).toBe(expectedText);
        });

        it('should correctly parse Llama failsafe response body (generation field)', async () => {
            const expectedText = '{"key": "value"}';
            bedrockMock
                .on(InvokeModelCommand)
                .rejectsOnce(new Error('Claude failed'))
                .resolves({
                    body: mockLlamaResponse(expectedText),
                });

            const result = await client.invokeModel('prompt', 'system');
            expect(result.content).toBe(expectedText);
        });

        it('should throw when Llama response is missing generation field', async () => {
            bedrockMock.on(InvokeModelCommand)
                .resolvesOnce({
                    body: new TextEncoder().encode(JSON.stringify({ })) as any,
                })
                .resolves({
                    body: mockLlamaResponse(VALID_ANALYSIS_JSON),
                });

            // Should fail over to Llama
            const result = await client.invokeModel('prompt', 'system');
            expect(result.modelUsed).toBe('failsafe');
        });
    });
});
