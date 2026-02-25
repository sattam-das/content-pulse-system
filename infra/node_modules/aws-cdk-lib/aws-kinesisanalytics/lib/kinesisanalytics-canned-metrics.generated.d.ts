export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisAnalyticsMetrics {
    static kpUsAverage(this: void, dimensions: {
        Application: string;
    }): MetricWithDims<{
        Application: string;
    }>;
}
