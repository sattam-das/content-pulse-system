export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class LogsMetrics {
    static incomingLogEventsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static incomingBytesSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static emfValidationErrorsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static emfParsingErrorsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static transformedLogEventsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static transformedBytesSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static transformationErrorsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static forwardedLogEventsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static deliveryErrorsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static deliveryThrottlingSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static logEventsWithFindingsSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static anomalyCountSum(this: void, dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
}
