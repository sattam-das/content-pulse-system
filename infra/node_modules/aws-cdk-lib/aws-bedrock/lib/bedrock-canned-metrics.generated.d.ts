export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class BedrockAgentsMetrics {
    static invocationCountSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationCountSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static totalTimeAverage(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static totalTimeAverage(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static modelInvocationCountSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static modelInvocationCountSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static modelLatencyAverage(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static modelLatencyAverage(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static inputTokenCountSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static inputTokenCountSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static outputTokenCountSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static outputTokenCountSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static modelInvocationThrottlesSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static modelInvocationThrottlesSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static modelInvocationClientErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static modelInvocationClientErrorsSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static modelInvocationServerErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static modelInvocationServerErrorsSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static invocationThrottlesSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationThrottlesSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static invocationClientErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationClientErrorsSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
    static invocationServerErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationServerErrorsSum(this: void, dimensions: {
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }): MetricWithDims<{
        Operation: string;
        AgentAliasArn: string;
        ModelId: string;
    }>;
}
export declare class BedrockGuardrailsMetrics {
    static invocationsSum(this: void, dimensions: {
        GuardrailArn: string;
        GuardrailVersion: string;
    }): MetricWithDims<{
        GuardrailArn: string;
        GuardrailVersion: string;
    }>;
    static invocationLatencyAverage(this: void, dimensions: {
        GuardrailArn: string;
        GuardrailVersion: string;
    }): MetricWithDims<{
        GuardrailArn: string;
        GuardrailVersion: string;
    }>;
    static textUnitCountSum(this: void, dimensions: {
        GuardrailArn: string;
        GuardrailVersion: string;
    }): MetricWithDims<{
        GuardrailArn: string;
        GuardrailVersion: string;
    }>;
    static invocationsIntervenedSum(this: void, dimensions: {
        GuardrailArn: string;
        GuardrailVersion: string;
    }): MetricWithDims<{
        GuardrailArn: string;
        GuardrailVersion: string;
    }>;
    static invocationThrottlesSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationServerErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
    static invocationClientErrorsSum(this: void, dimensions: {
        Operation: string;
    }): MetricWithDims<{
        Operation: string;
    }>;
}
