export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AppSyncMetrics {
    static _4XxErrorSum(this: void, dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
    static _5XxErrorSum(this: void, dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
}
