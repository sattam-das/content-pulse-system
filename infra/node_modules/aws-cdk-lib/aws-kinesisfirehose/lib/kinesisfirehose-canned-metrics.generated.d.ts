export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class FirehoseMetrics {
    static incomingBytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static incomingRecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3BytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3DataFreshnessAverage(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3RecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3SuccessSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static dataReadFromKinesisStreamBytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static dataReadFromKinesisStreamRecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchBytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchRecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchSuccessSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftBytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftRecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftSuccessSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3BytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3DataFreshnessAverage(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3RecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3SuccessSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkBytesSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkDataAckLatencyAverage(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkDataFreshnessAverage(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkRecordsSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkSuccessSum(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static kinesisMillisBehindLatestAverage(this: void, dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
}
