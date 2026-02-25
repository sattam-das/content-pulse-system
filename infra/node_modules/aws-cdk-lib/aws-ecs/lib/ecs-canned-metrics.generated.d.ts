export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ECSMetrics {
    static cpuUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
        ServiceName: string;
    }): MetricWithDims<{
        ClusterName: string;
        ServiceName: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static memoryUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
        ServiceName: string;
    }): MetricWithDims<{
        ClusterName: string;
        ServiceName: string;
    }>;
    static memoryUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static cpuReservationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static memoryReservationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static gpuReservationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
}
