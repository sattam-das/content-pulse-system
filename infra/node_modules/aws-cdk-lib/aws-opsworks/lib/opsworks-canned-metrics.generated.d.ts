export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class OpsWorksMetrics {
    static procsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static procsAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static procsAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryUsedAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryUsedAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryUsedAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuIdleAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuIdleAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuIdleAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuNiceAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuNiceAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuNiceAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuStealAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuStealAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuStealAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuSystemAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuSystemAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuSystemAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuUserAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUserAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuUserAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static cpuWaitioAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuWaitioAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static cpuWaitioAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static load1Average(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static load1Average(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static load1Average(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static load15Average(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static load15Average(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static load15Average(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static load5Average(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static load5Average(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static load5Average(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryBuffersAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryBuffersAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryBuffersAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryCachedAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryCachedAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryCachedAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryFreeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryFreeAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryFreeAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memorySwapAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memorySwapAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memorySwapAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryTotalAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryTotalAverage(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryTotalAverage(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static memoryUsedMaximum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryUsedMaximum(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static memoryUsedMaximum(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
    static load1Maximum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static load1Maximum(this: void, dimensions: {
        LayerId: string;
    }): MetricWithDims<{
        LayerId: string;
    }>;
    static load1Maximum(this: void, dimensions: {
        StackId: string;
    }): MetricWithDims<{
        StackId: string;
    }>;
}
