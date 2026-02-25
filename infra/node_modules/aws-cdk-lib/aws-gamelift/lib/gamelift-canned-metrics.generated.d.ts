export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class GameLiftMetrics {
    static activeInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static percentIdleInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static desiredInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static idleInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static maxInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static minInstancesAverage(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static instanceInterruptionsSum(this: void, dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
}
