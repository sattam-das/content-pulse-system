export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class QLDBMetrics {
    static commandLatencyAverage(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static journalStorageSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static indexedStorageSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static isImpairedSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static occConflictExceptionsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static readIOsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static session4XxExceptionsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static session5XxExceptionsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static sessionRateExceededExceptionsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static writeIOsSum(this: void, dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
}
