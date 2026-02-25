export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CodePipelineMetrics {
    static failedPipelineExecutionsSum(this: void, dimensions: {}): MetricWithDims<{}>;
}
