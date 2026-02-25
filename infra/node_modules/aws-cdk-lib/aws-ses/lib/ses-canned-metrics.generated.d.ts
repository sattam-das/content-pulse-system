export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SESMetrics {
    static bounceSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static bounceSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static clickSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static clickSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static complaintSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static complaintSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static deliverySum(this: void, dimensions: {}): MetricWithDims<{}>;
    static deliverySum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static openSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static openSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static rejectSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static rejectSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static renderingFailureSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static renderingFailureSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationBounceRateAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static reputationComplaintRateAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static sendSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static sendSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationBounceRateSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationComplaintRateSum(this: void, dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
}
