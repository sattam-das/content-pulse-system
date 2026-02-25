export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ApiGatewayMetrics {
    static _4XxErrorSum(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static _4XxErrorSum(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static _4XxErrorSum(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static _4XxErrorSum(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static _5XxErrorSum(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static _5XxErrorSum(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static _5XxErrorSum(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static _5XxErrorSum(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static cacheHitCountSum(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static cacheHitCountSum(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static cacheHitCountSum(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static cacheHitCountSum(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static cacheMissCountSum(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static cacheMissCountSum(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static cacheMissCountSum(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static cacheMissCountSum(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static countSum(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static countSum(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static countSum(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static countSum(this: void, dimensions: {
        ApiId: string;
    }): MetricWithDims<{
        ApiId: string;
    }>;
    static countSum(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiId: string;
    }): MetricWithDims<{
        ApiId: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiId: string;
        Stage: string;
        Route: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
        Route: string;
    }>;
    static integrationLatencyAverage(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        ApiName: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Stage: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        ApiName: string;
    }): MetricWithDims<{
        ApiName: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }): MetricWithDims<{
        ApiName: string;
        Method: string;
        Resource: string;
        Stage: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        ApiId: string;
    }): MetricWithDims<{
        ApiId: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        ApiId: string;
        Stage: string;
    }): MetricWithDims<{
        ApiId: string;
        Stage: string;
    }>;
}
