export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisVideoMetrics {
    static getMediaSuccessSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaSuccessSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getMediaMillisBehindNowSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static listFragmentsLatencySum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaFragmentIngestionLatencySum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaFragmentPersistLatencySum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaIncomingBytesSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaIncomingFramesSum(this: void, dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
}
