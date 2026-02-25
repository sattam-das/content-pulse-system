export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DataSyncMetrics {
    static filesTransferredSum(this: void, dimensions: {
        AgentId: string;
    }): MetricWithDims<{
        AgentId: string;
    }>;
    static filesTransferredSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesTransferredSum(this: void, dimensions: {
        AgentId: string;
    }): MetricWithDims<{
        AgentId: string;
    }>;
    static bytesTransferredSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesWrittenSum(this: void, dimensions: {
        AgentId: string;
    }): MetricWithDims<{
        AgentId: string;
    }>;
    static bytesWrittenSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesPreparedDestinationSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesPreparedSourceSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesVerifiedDestinationSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static bytesVerifiedSourceSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static filesPreparedDestinationSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static filesPreparedSourceSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static filesVerifiedDestinationSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
    static filesVerifiedSourceSum(this: void, dimensions: {
        TaskId: string;
    }): MetricWithDims<{
        TaskId: string;
    }>;
}
