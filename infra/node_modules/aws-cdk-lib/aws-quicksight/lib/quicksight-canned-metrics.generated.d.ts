export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class QuickSightMetrics {
    static dashboardViewCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static dashboardViewCountSum(this: void, dimensions: {
        DashboardId: string;
    }): MetricWithDims<{
        DashboardId: string;
    }>;
    static dashboardViewLoadTimeAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static dashboardViewLoadTimeAverage(this: void, dimensions: {
        DashboardId: string;
    }): MetricWithDims<{
        DashboardId: string;
    }>;
    static ingestionErrorCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static ingestionErrorCountSum(this: void, dimensions: {
        DatasetId: string;
    }): MetricWithDims<{
        DatasetId: string;
    }>;
    static ingestionInvocationCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static ingestionInvocationCountSum(this: void, dimensions: {
        DatasetId: string;
    }): MetricWithDims<{
        DatasetId: string;
    }>;
    static ingestionLatencyAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static ingestionLatencyAverage(this: void, dimensions: {
        DatasetId: string;
    }): MetricWithDims<{
        DatasetId: string;
    }>;
    static ingestionRowCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static ingestionRowCountSum(this: void, dimensions: {
        DatasetId: string;
    }): MetricWithDims<{
        DatasetId: string;
    }>;
    static spiceCapacityConsumedInMbAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static spiceCapacityLimitInMbAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static visualLoadTimeAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static visualLoadTimeAverage(this: void, dimensions: {
        DashboardId: string;
    }): MetricWithDims<{
        DashboardId: string;
    }>;
    static visualLoadTimeAverage(this: void, dimensions: {
        DashboardId: string;
        SheetId: string;
        VisualId: string;
    }): MetricWithDims<{
        DashboardId: string;
        SheetId: string;
        VisualId: string;
    }>;
    static visualLoadErrorCountSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static visualLoadErrorCountSum(this: void, dimensions: {
        DashboardId: string;
    }): MetricWithDims<{
        DashboardId: string;
    }>;
    static visualLoadErrorCountSum(this: void, dimensions: {
        DashboardId: string;
        SheetId: string;
        VisualId: string;
    }): MetricWithDims<{
        DashboardId: string;
        SheetId: string;
        VisualId: string;
    }>;
}
