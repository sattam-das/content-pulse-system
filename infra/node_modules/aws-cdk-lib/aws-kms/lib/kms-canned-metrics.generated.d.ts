export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KMSMetrics {
    static secondsUntilKeyMaterialExpirationAverage(this: void, dimensions: {
        KeyId: string;
    }): MetricWithDims<{
        KeyId: string;
    }>;
}
