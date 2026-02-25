export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AmazonMQMetrics {
    static ackRateAverage(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static channelCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static confirmRateAverage(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static connectionCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static consumerCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static currentConnectionsCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static exchangeCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageReadyCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageUnacknowledgedCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static networkInSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static networkOutSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static publishRateAverage(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static queueCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalConsumerCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalMessageCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalProducerCountSum(this: void, dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
}
