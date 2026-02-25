export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EventsMetrics {
    static invocationsSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static failedInvocationsSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static deadLetterInvocationsSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static triggeredRulesSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static throttledRulesSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static invocationsFailedToBeSentToDlqSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static invocationsSentToDlqSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
}
