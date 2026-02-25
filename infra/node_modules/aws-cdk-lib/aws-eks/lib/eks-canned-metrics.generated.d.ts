export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EKSMetrics {
    static schedulerPendingPodsSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static schedulerPendingPodsActiveqSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static schedulerPendingPodsUnschedulableSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestTotalSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestTotal5XxSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestTotal4XxSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestTotal429Sum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsGetP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsPostP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsPutP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsDeleteP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsPatchP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverRequestDurationSecondsListP99Average(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverCurrentInflightRequestsMutatingAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverCurrentInflightRequestsReadonlyAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverAdmissionWebhookRequestTotalSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverAdmissionWebhookRequestTotalValidatingSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static apiserverAdmissionWebhookRequestTotalAdmitSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
}
export declare class ContainerInsightsMetrics {
    static nodeCpuLimitSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeCpuUsageTotalSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeMemoryLimitSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeMemoryWorkingSetSum(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podNetworkRxBytesAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podNetworkRxBytesAverage(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
    static podNetworkTxBytesAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podNetworkTxBytesAverage(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
    static nodeNetworkTotalBytesAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static clusterFailedNodeCountAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeFilesystemUtilizationp90(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static clusterNodeCountAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podCpuUtilizationAverage(this: void, dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podCpuLimitSum(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
    static podCpuUsageTotalSum(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
    static podMemoryLimitSum(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
    static podMemoryWorkingSetSum(this: void, dimensions: {
        ClusterName: string;
        LaunchType: string;
    }): MetricWithDims<{
        ClusterName: string;
        LaunchType: string;
    }>;
}
