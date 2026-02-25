export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudWatchSyntheticsMetrics {
    static _2XxSum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static _4XxSum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static _5XxSum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static durationMaximum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static failedSum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static failedRequestsSum(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static successPercentAverage(this: void, dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
}
