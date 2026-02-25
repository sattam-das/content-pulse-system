export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class StatesMetrics {
    static executionsAbortedSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsFailedSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsStartedSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsSucceededSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionThrottledSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsTimedOutSum(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionTimeAverage(this: void, dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static activitiesFailedSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesHeartbeatTimedOutSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesScheduledSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesStartedSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesSucceededSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesTimedOutSum(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activityRunTimeAverage(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activityScheduleTimeAverage(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activityTimeAverage(this: void, dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
}
