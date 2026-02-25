export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class NeptuneMetrics {
    static cpuUtilizationAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeLocalStorageMinimum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeableMemoryMinimum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinErrorsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinRequestsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinRequestsPerSecAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static loaderRequestsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static networkReceiveThroughputSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static sparqlErrorsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static sparqlRequestsPerSecSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeBytesUsedSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeReadIoPsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeWriteIoPsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
}
