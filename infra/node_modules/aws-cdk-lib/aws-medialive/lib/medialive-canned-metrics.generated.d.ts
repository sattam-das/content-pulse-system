export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaLiveMetrics {
    static activeAlertsMaximum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputVideoFrameRateAverage(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fillMsecAverage(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputLossSecondsSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsReceivedSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsRecoveredViaFecSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsLostSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fecRowPacketsReceivedSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fecColumnPacketsReceivedSum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static primaryInputActiveMinimum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static networkInAverage(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static networkOutAverage(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static pipelinesLockedMinimum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputTimecodesPresentMinimum(this: void, dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
}
