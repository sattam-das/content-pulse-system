export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaPackageMetrics {
    static egressRequestCountSum(this: void, dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
    static egressResponseTimeAverage(this: void, dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
    static egressBytesSum(this: void, dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
}
