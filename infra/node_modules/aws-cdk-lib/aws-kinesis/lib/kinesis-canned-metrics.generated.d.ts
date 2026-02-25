export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisMetrics {
    static readProvisionedThroughputExceededSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static writeProvisionedThroughputExceededSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsIteratorAgeMillisecondsMaximum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordSuccessSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordsSuccessSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordsBytesSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsSuccessSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsBytesSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsRecordsSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsLatencyMaximum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static incomingBytesSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static incomingRecordsSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
}
