export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudWatchMetricStreamsMetrics {
    static metricUpdateSum(this: void, dimensions: {
        MetricStreamName: string;
    }): MetricWithDims<{
        MetricStreamName: string;
    }>;
    static totalMetricUpdateSum(this: void, dimensions: {
        MetricStreamName: string;
    }): MetricWithDims<{
        MetricStreamName: string;
    }>;
    static publishErrorRateAverage(this: void, dimensions: {
        MetricStreamName: string;
    }): MetricWithDims<{
        MetricStreamName: string;
    }>;
}
