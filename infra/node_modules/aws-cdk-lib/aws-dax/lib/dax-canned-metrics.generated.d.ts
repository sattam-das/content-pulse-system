export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DAXMetrics {
    static cpuUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static failedRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static batchGetItemRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static errorRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static estimatedDbSizeAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static evictedSizeAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static faultRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static getItemRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static itemCacheHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static itemCacheMissesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static queryCacheHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static queryRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static scanCacheHitsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static totalRequestCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
}
