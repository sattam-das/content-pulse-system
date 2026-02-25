export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AutoScalingMetrics {
    static groupTotalInstancesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupDesiredCapacityAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupMaxSizeAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupMinSizeAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupTerminatingInstancesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupPendingInstancesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupInServiceInstancesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupStandbyInstancesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
}
