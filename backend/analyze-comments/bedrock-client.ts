import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { logError } from '../src/utils/errorSanitizer';

// ── Configuration Interfaces ──────────────────────────────────────────────────

export interface BedrockClientConfig {
    region: string;
    primaryModel: string;
    failsafeModel: string;
    maxRetries: number;
    baseRetryDelay: number;
    maxRetryDelay: number;
    timeoutPerModel: number;
    totalTimeout: number;
}

export interface ModelInvocationResult {
    content: string;
    modelUsed: 'primary' | 'failsafe';
    attemptCount: number;
}

// ── Error Types ───────────────────────────────────────────────────────────────

export class ModelInvocationError extends Error {
    modelId: string;
    attemptNumber: number;
    errorType: 'throttling' | 'timeout' | 'invalid_response' | 'auth_error' | 'unknown';
    originalError: Error;

    constructor(
        message: string,
        modelId: string,
        attemptNumber: number,
        errorType: 'throttling' | 'timeout' | 'invalid_response' | 'auth_error' | 'unknown',
        originalError: Error
    ) {
        super(message);
        this.name = 'ModelInvocationError';
        this.modelId = modelId;
        this.attemptNumber = attemptNumber;
        this.errorType = errorType;
        this.originalError = originalError;
    }
}

export class DualModelFailureError extends Error {
    primaryError: ModelInvocationError;
    failsafeError: ModelInvocationError;
    totalAttempts: number;
    totalDuration: number;

    constructor(
        primaryError: ModelInvocationError,
        failsafeError: ModelInvocationError,
        totalDuration: number
    ) {
        super(`Both models failed. Primary (${primaryError.modelId}): ${primaryError.message}. Failsafe (${failsafeError.modelId}): ${failsafeError.message}`);
        this.name = 'DualModelFailureError';
        this.primaryError = primaryError;
        this.failsafeError = failsafeError;
        this.totalAttempts = 2;
        this.totalDuration = totalDuration;
    }
}

// ── Default Configuration ─────────────────────────────────────────────────────

const DEFAULT_CONFIG: BedrockClientConfig = {
    region: process.env.AWS_BEDROCK_REGION || 'us-east-1',
    primaryModel: 'us.meta.llama3-3-70b-instruct-v1:0',
    failsafeModel: 'us.meta.llama3-1-70b-instruct-v1:0',
    maxRetries: 1,
    baseRetryDelay: 1000,
    maxRetryDelay: 10000,
    timeoutPerModel: 30000,
    totalTimeout: 60000,
};

// ── BedrockClient Class ───────────────────────────────────────────────────────

export class BedrockClient {
    private client: BedrockRuntimeClient;
    private config: BedrockClientConfig;

    constructor(config?: Partial<BedrockClientConfig>) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.client = new BedrockRuntimeClient({ region: this.config.region });
    }

    /**
     * Invokes a Bedrock model with automatic failover.
     * Tries the primary model (Llama 3.3 70B) first, then the failsafe (Llama 3.1 70B) on failure.
     */
    async invokeModel(prompt: string, systemPrompt: string): Promise<ModelInvocationResult> {
        const operationStart = Date.now();

        // ── Attempt 1: Primary Model (Llama 3.3 70B) ──
        let primaryError: ModelInvocationError;

        try {
            console.log(`Invoking primary model: ${this.config.primaryModel} (attempt 1)`);
            const content = await this.invokeLlamaModel(prompt, systemPrompt, this.config.primaryModel);
            console.log(`Primary model (${this.config.primaryModel}) succeeded.`);
            return { content, modelUsed: 'primary', attemptCount: 1 };
        } catch (err: any) {
            primaryError = this.classifyError(err, this.config.primaryModel, 1);
            logError(`Primary model (${this.config.primaryModel}) failed, attempting failsafe`, {
                modelId: this.config.primaryModel,
                errorType: primaryError.errorType,
                attemptNumber: 1,
            });

            // If auth error, fail immediately — no point trying failsafe with same IAM role
            if (primaryError.errorType === 'auth_error') {
                throw primaryError;
            }

            // Throttling backoff before failsafe
            if (primaryError.errorType === 'throttling') {
                const delay = this.calculateBackoffDelay(err);
                console.log(`Throttled — waiting ${delay}ms before failsafe attempt`);
                await this.sleep(delay);
            }
        }

        // Check total timeout before trying failsafe
        const elapsed = Date.now() - operationStart;
        if (elapsed >= this.config.totalTimeout) {
            throw new DualModelFailureError(
                primaryError!,
                new ModelInvocationError('Total timeout exceeded before failsafe attempt', this.config.failsafeModel, 2, 'timeout', new Error('Timeout')),
                elapsed
            );
        }

        // ── Attempt 2: Failsafe Model (Llama 3.1 70B) ──
        try {
            console.log(`Invoking failsafe model: ${this.config.failsafeModel} (attempt 2)`);
            const content = await this.invokeLlamaModel(prompt, systemPrompt, this.config.failsafeModel);
            console.log(`Failsafe model (${this.config.failsafeModel}) succeeded after primary failure`, {
                primaryError: primaryError!.errorType,
                failsafeModel: this.config.failsafeModel,
            });
            return { content, modelUsed: 'failsafe', attemptCount: 2 };
        } catch (err: any) {
            const failsafeError = this.classifyError(err, this.config.failsafeModel, 2);
            const totalDuration = Date.now() - operationStart;

            logError('Both models failed', {
                primaryError: primaryError!.message,
                failsafeError: failsafeError.message,
                totalDuration,
            });

            throw new DualModelFailureError(primaryError!, failsafeError, totalDuration);
        }
    }

    // ── Private: Llama Model Invocation ────────────────────────────────────────

    private async invokeLlamaModel(prompt: string, systemPrompt: string, modelId: string): Promise<string> {
        const requestBody = JSON.stringify({
            prompt: `${systemPrompt}\n\nUser: ${prompt}\n\nAssistant:`,
            max_gen_len: 1500,
            temperature: 0.3,
            top_p: 0.9,
        });

        const command = new InvokeModelCommand({
            modelId: modelId,
            contentType: 'application/json',
            accept: 'application/json',
            body: requestBody,
        });

        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), this.config.timeoutPerModel);

        try {
            const response = await this.client.send(command, {
                abortSignal: abortController.signal,
            });

            const responseBody = JSON.parse(new TextDecoder().decode(response.body));
            const text = responseBody.generation;

            if (!text) {
                throw new Error(`Llama response missing generation field (model: ${modelId})`);
            }

            return text;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    // ── Private: Error Classification ─────────────────────────────────────────

    private classifyError(err: any, modelId: string, attempt: number): ModelInvocationError {
        let errorType: ModelInvocationError['errorType'] = 'unknown';

        if (err.name === 'AbortError' || err.name === 'TimeoutError') {
            errorType = 'timeout';
        } else if (err.$metadata?.httpStatusCode === 429 || err.name === 'ThrottlingException' || err.name === 'TooManyRequestsException') {
            errorType = 'throttling';
        } else if (err.$metadata?.httpStatusCode === 403 || err.name === 'AccessDeniedException' || err.name === 'UnrecognizedClientException') {
            errorType = 'auth_error';
        } else if (err.message?.includes('missing') || err.message?.includes('Invalid')) {
            errorType = 'invalid_response';
        }

        return new ModelInvocationError(
            err.message || 'Unknown error during model invocation',
            modelId,
            attempt,
            errorType,
            err
        );
    }

    // ── Private: Backoff Calculation ──────────────────────────────────────────

    private calculateBackoffDelay(err: any): number {
        // Respect retry-after header if present
        const retryAfter = err.$metadata?.retryAfterMs || err.retryAfterSecs;
        if (retryAfter) {
            const delayMs = typeof retryAfter === 'number' ? retryAfter * 1000 : parseInt(retryAfter) * 1000;
            return Math.min(delayMs, this.config.maxRetryDelay);
        }

        // Exponential backoff: base * 2^attempt, capped at maxRetryDelay
        const delay = this.config.baseRetryDelay * Math.pow(2, 0); // First backoff
        return Math.min(delay, this.config.maxRetryDelay);
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
