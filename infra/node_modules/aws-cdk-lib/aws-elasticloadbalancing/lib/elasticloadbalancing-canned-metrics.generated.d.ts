export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ELBMetrics {
    static backendConnectionErrorsSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static backendConnectionErrorsSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static desyncMitigationModeNonCompliantRequestCountSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static desyncMitigationModeNonCompliantRequestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeBackend2XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeBackend2XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeBackend3XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeBackend3XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeBackend4XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeBackend4XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeBackend5XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeBackend5XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeElb4XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeElb4XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static httpCodeElb5XxSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static httpCodeElb5XxSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static healthyHostCountAverage(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static healthyHostCountAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static latencyAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static requestCountSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static requestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static spilloverCountSum(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static spilloverCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static surgeQueueLengthAverage(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static surgeQueueLengthAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
    static unHealthyHostCountAverage(this: void, dimensions: {
        LoadBalancerName: string;
    }): MetricWithDims<{
        LoadBalancerName: string;
    }>;
    static unHealthyHostCountAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancerName: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancerName: string;
    }>;
}
