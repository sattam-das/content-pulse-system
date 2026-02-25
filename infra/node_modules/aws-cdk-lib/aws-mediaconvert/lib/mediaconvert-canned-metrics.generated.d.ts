export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaConvertMetrics {
    static transcodingTimeAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static jobsCompletedCountSum(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static _8KOutputDurationAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static audioOutputDurationAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static hdOutputDurationAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static jobsErroredCountSum(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static sdOutputDurationAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static standbyTimeSum(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static uhdOutputDurationAverage(this: void, dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
}
