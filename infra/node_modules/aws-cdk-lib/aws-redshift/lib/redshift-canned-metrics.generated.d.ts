export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class RedshiftMetrics {
    static commitQueueLengthAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static concurrencyScalingActiveClustersAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static concurrencyScalingSecondsAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static databaseConnectionsAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static healthStatusSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static maintenanceModeSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static maxConfiguredConcurrencyScalingClustersSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkReceiveThroughputSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkTransmitThroughputSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static numExceededSchemaQuotasAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static percentageDiskSpaceUsedAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readIopsSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readLatencyAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readLatencyAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readThroughputSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static redshiftManagedStorageTotalCapacityAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static totalTableCountAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static wlmQueueLengthAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static wlmQueueLengthAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueueLengthAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        "service class": string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        "service class": string;
    }>;
    static writeIopsSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static writeLatencyAverage(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static writeLatencyAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeThroughputSum(this: void, dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkReceiveThroughputAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static networkTransmitThroughputAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readIopsAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readThroughputAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeIopsAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeThroughputAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
        NodeID: string;
    }>;
    static wlmQueryDurationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueryDurationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueryDurationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
        NodeID: string;
    }>;
    static wlmQueueWaitTimeAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueueWaitTimeAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueueWaitTimeAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueryPriority: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueryPriority: string;
    }>;
    static wlmRunningQueriesAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmRunningQueriesAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static queryRuntimeBreakdownAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        stage: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        stage: string;
        NodeID: string;
    }>;
    static queryRuntimeBreakdownAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        stage: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        stage: string;
    }>;
    static queriesCompletedPerSecondAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        latency: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        latency: string;
    }>;
    static queriesCompletedPerSecondAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        latency: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        latency: string;
        NodeID: string;
    }>;
    static queryDurationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        latency: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        latency: string;
    }>;
    static queryDurationAverage(this: void, dimensions: {
        ClusterIdentifier: string;
        latency: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        latency: string;
        NodeID: string;
    }>;
}
