export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SageMakerMetrics {
    static invocationsSum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocation5XxErrorsSum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocation4XxErrorsSum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocationsPerInstanceSum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static modelLatencySum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static overheadLatencySum(this: void, dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
}
