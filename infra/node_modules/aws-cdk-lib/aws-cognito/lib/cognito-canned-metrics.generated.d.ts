export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CognitoMetrics {
    static noRiskSum(this: void, dimensions: {
        Operation: string;
        UserPoolId: string;
    }): MetricWithDims<{
        Operation: string;
        UserPoolId: string;
    }>;
    static riskSum(this: void, dimensions: {
        Operation: string;
        UserPoolId: string;
    }): MetricWithDims<{
        Operation: string;
        UserPoolId: string;
    }>;
}
