export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AppStreamMetrics {
    static capacityUtilizationAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static insufficientCapacityErrorSum(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static actualCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static availableCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static desiredCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static inUseCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static pendingCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static runningCapacityAverage(this: void, dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
}
