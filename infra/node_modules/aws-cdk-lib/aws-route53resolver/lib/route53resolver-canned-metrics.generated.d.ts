export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class Route53ResolverMetrics {
    static inboundQueryVolumeSum(this: void, dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
    static outboundQueryVolumeSum(this: void, dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
    static outboundQueryAggregateVolumeSum(this: void, dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
}
