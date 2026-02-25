export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CodeBuildMetrics {
    static succeededBuildsSum(this: void, dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static failedBuildsSum(this: void, dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static buildsSum(this: void, dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static durationAverage(this: void, dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
}
