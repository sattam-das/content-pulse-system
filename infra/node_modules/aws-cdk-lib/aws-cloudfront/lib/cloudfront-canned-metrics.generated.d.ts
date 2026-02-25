export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudFrontMetrics {
    static requestsSum(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static totalErrorRateAverage(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static bytesDownloadedSum(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static bytesUploadedSum(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static _4XxErrorRateAverage(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static _5XxErrorRateAverage(this: void, dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
}
