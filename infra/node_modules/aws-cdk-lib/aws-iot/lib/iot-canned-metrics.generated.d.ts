export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class IoTMetrics {
    static topicMatchSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static parseErrorSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static ruleEvaluationThrottledSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static ruleNotFoundSum(this: void, dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
}
