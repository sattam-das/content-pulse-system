export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DocDBMetrics {
    static cpuUtilizationAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static databaseConnectionsAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static engineUptimeAverage(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readThroughputSum(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeThroughputSum(this: void, dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
}
