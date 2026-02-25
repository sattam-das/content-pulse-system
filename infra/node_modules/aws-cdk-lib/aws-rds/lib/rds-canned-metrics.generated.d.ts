export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class RDSMetrics {
    static cpuUtilizationAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readLatencyAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readLatencyAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static databaseConnectionsSum(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static databaseConnectionsSum(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeStorageSpaceAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static freeStorageSpaceAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readThroughputAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readThroughputAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readIopsAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readIopsAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeLatencyAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeLatencyAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeThroughputAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeThroughputAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeIopsAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeIopsAverage(this: void, dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static serverlessDatabaseCapacityAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
}
