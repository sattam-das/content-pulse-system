export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DynamoDBMetrics {
    static conditionalCheckFailedRequestsSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedReadCapacityUnitsSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedReadCapacityUnitsSum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static consumedWriteCapacityUnitsSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedWriteCapacityUnitsSum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static provisionedReadCapacityUnitsAverage(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static provisionedReadCapacityUnitsAverage(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static provisionedWriteCapacityUnitsAverage(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static provisionedWriteCapacityUnitsAverage(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static readThrottleEventsSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static readThrottleEventsSum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static timeToLiveDeletedItemCountSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static transactionConflictAverage(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static writeThrottleEventsSum(this: void, dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static writeThrottleEventsSum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(this: void, dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static onlineIndexConsumedWriteCapacitySum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static onlineIndexPercentageProgressAverage(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static onlineIndexThrottleEventsSum(this: void, dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static ageOfOldestUnreplicatedRecordAverage(this: void, dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static consumedChangeDataCaptureUnitsAverage(this: void, dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static throttledPutRecordCountAverage(this: void, dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static pendingReplicationCountAverage(this: void, dimensions: {
        TableName: string;
        ReceivingRegion: string;
    }): MetricWithDims<{
        TableName: string;
        ReceivingRegion: string;
    }>;
    static replicationLatencyAverage(this: void, dimensions: {
        TableName: string;
        ReceivingRegion: string;
    }): MetricWithDims<{
        TableName: string;
        ReceivingRegion: string;
    }>;
    static returnedBytesAverage(this: void, dimensions: {
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }>;
    static returnedRecordsCountAverage(this: void, dimensions: {
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }>;
    static accountMaxReadsMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static accountMaxTableLevelReadsMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static accountMaxTableLevelWritesMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static accountMaxWritesMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static accountProvisionedReadCapacityUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static accountProvisionedWriteCapacityUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static maxProvisionedTableReadCapacityUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static maxProvisionedTableWriteCapacityUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static userErrorsSum(this: void, dimensions: {}): MetricWithDims<{}>;
}
