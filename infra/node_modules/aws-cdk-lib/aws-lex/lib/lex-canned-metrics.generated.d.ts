export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class LexMetrics {
    static runtimeRequestCountSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeSuccessfulRequestLatencyAverage(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeInvalidLambdaResponsesSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeLambdaErrorsSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static missedUtteranceCountSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimePollyErrorsSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeSystemErrorsSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeThrottledEventsSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeUserErrorsSum(this: void, dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
}
