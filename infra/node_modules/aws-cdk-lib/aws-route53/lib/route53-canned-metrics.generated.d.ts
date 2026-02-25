export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class Route53Metrics {
    static healthCheckPercentageHealthyAverage(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static connectionTimeAverage(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static healthCheckStatusMinimum(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static sslHandshakeTimeAverage(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static childHealthCheckHealthyCountAverage(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static timeToFirstByteAverage(this: void, dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
}
