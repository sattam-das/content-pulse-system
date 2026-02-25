export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ElasticMapReduceMetrics {
    static appsCompletedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsFailedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsKilledSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsPendingSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsRunningSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsSubmittedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static backupFailedAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static capacityRemainingGbSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerAllocatedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerPendingSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerPendingRatioSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerReservedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static coreNodesPendingAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static coreNodesRunningAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static corruptBlocksSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hbaseBackupFailedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsBytesReadSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsBytesWrittenSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsUtilizationAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static isIdleAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static jobsFailedAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static jobsRunningAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static liveDataNodesAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static liveTaskTrackersAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mapSlotsOpenAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryAllocatedMbSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryReservedMbSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryTotalMbSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static missingBlocksAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mostRecentBackupDurationAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrActiveNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrDecommissionedNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrLostNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrRebootedNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrTotalNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrUnhealthyNodesSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRequestedSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRunningSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRunningPercentageAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static pendingDeletionBlocksSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static reduceSlotsOpenAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static remainingMapTasksPerSlotAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static s3BytesReadSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static s3BytesWrittenSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static taskNodesPendingAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static taskNodesRunningAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static timeSinceLastSuccessfulBackupAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static totalLoadAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static underReplicatedBlocksSum(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static yarnMemoryAvailablePercentageAverage(this: void, dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
}
