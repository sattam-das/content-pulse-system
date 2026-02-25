export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaStoreMetrics {
    static requestCountSum(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static turnaroundTimeAverage(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static _4XxErrorCountSum(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static _5XxErrorCountSum(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static bytesDownloadedSum(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static bytesUploadedSum(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
    static totalTimeAverage(this: void, dimensions: {
        ContainerName: string;
        RequestType: string;
    }): MetricWithDims<{
        ContainerName: string;
        RequestType: string;
    }>;
}
