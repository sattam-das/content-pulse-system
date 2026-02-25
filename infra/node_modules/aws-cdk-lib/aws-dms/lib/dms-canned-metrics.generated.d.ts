export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DMSMetrics {
    static cpuAllocatedSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static swapUsageAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static cdcLatencyTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcLatencySourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcChangesDiskTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcChangesDiskSourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcChangesMemorySourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcChangesMemoryTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcIncomingChangesSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcThroughputBandwidthSourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcThroughputBandwidthTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcThroughputRowsSourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cdcThroughputRowsTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static fullLoadThroughputBandwidthSourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static fullLoadThroughputBandwidthTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static fullLoadThroughputRowsSourceSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static fullLoadThroughputRowsTargetSum(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static memoryAllocatedAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static cpuAllocatedAverage(this: void, dimensions: {
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
        ReplicationTaskIdentifier: string;
    }>;
    static availableMemorySum(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static diskQueueDepthSum(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static freeStorageSpaceAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static freeMemoryAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static freeableMemoryAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static writeIopsAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static readIopsAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static writeThroughputAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static readThroughputAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static writeLatencyAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static readLatencyAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static networkTransmitThroughputAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
    static networkReceiveThroughputAverage(this: void, dimensions: {
        ReplicationInstanceExternalResourceId: string;
    }): MetricWithDims<{
        ReplicationInstanceExternalResourceId: string;
    }>;
}
