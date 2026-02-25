export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class TimestreamMetrics {
    static successfulRequestLatencySampleCount(this: void, dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static successfulRequestLatencySampleCount(this: void, dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static successfulRequestLatencyp95(this: void, dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
}
