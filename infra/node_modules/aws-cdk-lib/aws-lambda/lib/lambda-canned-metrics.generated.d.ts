export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class LambdaMetrics {
    static concurrentExecutionsMaximum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static concurrentExecutionsMaximum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static concurrentExecutionsMaximum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static concurrentExecutionsMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static deadLetterErrorsSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static deadLetterErrorsSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static deadLetterErrorsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static destinationDeliveryFailuresSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static destinationDeliveryFailuresSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static destinationDeliveryFailuresSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static durationAverage(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static durationAverage(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static durationAverage(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static durationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static errorsSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static errorsSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static errorsSum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static errorsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static invocationsSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static invocationsSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static invocationsSum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static invocationsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static iteratorAgeAverage(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static iteratorAgeAverage(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static iteratorAgeAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static postRuntimeExtensionsDurationAverage(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static postRuntimeExtensionsDurationAverage(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static postRuntimeExtensionsDurationAverage(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static postRuntimeExtensionsDurationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static provisionedConcurrencyInvocationsSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static provisionedConcurrencyInvocationsSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencyInvocationsSum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencyInvocationsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static provisionedConcurrencySpilloverInvocationsSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static provisionedConcurrencySpilloverInvocationsSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencySpilloverInvocationsSum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencySpilloverInvocationsSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static provisionedConcurrentExecutionsMaximum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static provisionedConcurrentExecutionsMaximum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrentExecutionsMaximum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrentExecutionsMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static throttlesSum(this: void, dimensions: {
        FunctionName: string;
    }): MetricWithDims<{
        FunctionName: string;
    }>;
    static throttlesSum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static throttlesSum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static throttlesSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static provisionedConcurrencyUtilizationMaximum(this: void, dimensions: {
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencyUtilizationMaximum(this: void, dimensions: {
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }): MetricWithDims<{
        ExecutedVersion: string;
        FunctionName: string;
        Resource: string;
    }>;
    static provisionedConcurrencyUtilizationMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
    static unreservedConcurrentExecutionsMaximum(this: void, dimensions: {}): MetricWithDims<{}>;
}
