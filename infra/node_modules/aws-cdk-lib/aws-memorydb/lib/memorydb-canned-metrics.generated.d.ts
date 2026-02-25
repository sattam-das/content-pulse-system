export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MemoryDBMetrics {
    static activeDefragHitsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static authenticationFailuresSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static bytesUsedForMemoryDbAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static commandAuthorizationFailuresSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static currConnectionsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static currItemsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static databaseMemoryUsagePercentageAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static engineCpuUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static evictionsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static isPrimaryAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static keyAuthorizationFailuresSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static keyspaceHitsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static keyspaceMissesSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static keysTrackedSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static maxReplicationThroughputAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static memoryFragmentationRatioAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkBandwidthInAllowanceExceededAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkBandwidthOutAllowanceExceededAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkBytesInAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkBytesOutAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkConntrackAllowanceExceededAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkPacketsInAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkPacketsOutAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static networkPacketsPerSecondAllowanceExceededAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static newConnectionsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static primaryLinkHealthStatusAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static reclaimedSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static replicationBytesSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static replicationDelayedWriteCommandsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static replicationLagAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
}
