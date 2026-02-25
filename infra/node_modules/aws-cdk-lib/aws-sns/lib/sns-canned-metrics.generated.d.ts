export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SNSMetrics {
    static numberOfNotificationsDeliveredSum(this: void, dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static numberOfNotificationsFailedSum(this: void, dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static numberOfMessagesPublishedSum(this: void, dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static publishSizeAverage(this: void, dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static smsSuccessRateSum(this: void, dimensions: {
        Country: string;
        SMSType: string;
    }): MetricWithDims<{
        Country: string;
        SMSType: string;
    }>;
    static phoneNumberDirectSum(this: void, dimensions: {
        PhoneNumber: string;
    }): MetricWithDims<{
        PhoneNumber: string;
    }>;
    static smsMonthToDateSpentUsdSum(this: void, dimensions: {}): MetricWithDims<{}>;
}
