export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SQSMetrics {
    static numberOfMessagesSentAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesDelayedAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfMessagesReceivedAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfMessagesDeletedAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesNotVisibleAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesVisibleAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateAgeOfOldestMessageAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfEmptyReceivesAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static sentMessageSizeAverage(this: void, dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
}
