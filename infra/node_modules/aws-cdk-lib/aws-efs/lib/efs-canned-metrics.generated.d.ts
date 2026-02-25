export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EFSMetrics {
    static burstCreditBalanceAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static clientConnectionsSum(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataReadIoBytesAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataWriteIoBytesAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static metadataIoBytesAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static meteredIoBytesAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static percentIoLimitAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static permittedThroughputAverage(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static totalIoBytesSum(this: void, dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static storageBytesAverage(this: void, dimensions: {
        FileSystemId: string;
        StorageClass: string;
    }): MetricWithDims<{
        FileSystemId: string;
        StorageClass: string;
    }>;
}
