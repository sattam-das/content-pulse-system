export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ElasticBeanstalkMetrics {
    static environmentHealthAverage(this: void, dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests5XxAverage(this: void, dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests2XxAverage(this: void, dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests3XxAverage(this: void, dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests4XxAverage(this: void, dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
}
