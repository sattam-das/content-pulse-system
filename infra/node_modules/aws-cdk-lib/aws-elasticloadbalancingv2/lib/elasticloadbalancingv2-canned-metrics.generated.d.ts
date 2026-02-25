export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ApplicationELBMetrics {
    static activeConnectionCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static clientTlsNegotiationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static clientTlsNegotiationErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static consumedLcUsAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static desyncMitigationModeNonCompliantRequestCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static desyncMitigationModeNonCompliantRequestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthErrorSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthErrorSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthFailureSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthFailureSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthLatencySum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthLatencySum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthRefreshTokenSuccessSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthRefreshTokenSuccessSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthSuccessSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthSuccessSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static elbAuthUserClaimsSizeExceededSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static elbAuthUserClaimsSizeExceededSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static grpcRequestCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpFixedResponseCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpFixedResponseCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpRedirectCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpRedirectCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpRedirectUrlLimitExceededCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpRedirectUrlLimitExceededCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeElb3XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb3XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeElb4XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb4XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeElb5XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb5XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeElb500CountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb502CountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb503CountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeElb504CountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeTarget2XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeTarget2XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeTarget2XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget2XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget3XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeTarget3XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeTarget3XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget3XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget4XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeTarget4XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeTarget4XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget4XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget5XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static httpCodeTarget5XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static httpCodeTarget5XxCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static httpCodeTarget5XxCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static iPv6ProcessedBytesSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static iPv6RequestCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newConnectionCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static nonStickyRequestCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static nonStickyRequestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedBytesSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static rejectedConnectionCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static rejectedConnectionCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static requestCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static requestCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static ruleEvaluationsSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static targetConnectionErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static targetConnectionErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static targetConnectionErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static targetConnectionErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static targetResponseTimeAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static targetResponseTimeAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static targetResponseTimeAverage(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static targetResponseTimeAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static targetTlsNegotiationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static targetTlsNegotiationErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static targetTlsNegotiationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static targetTlsNegotiationErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static lambdaTargetProcessedBytesSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static requestCountPerTargetSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static requestCountPerTargetSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static requestCountPerTargetSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static lambdaInternalErrorSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static lambdaInternalErrorSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static lambdaInternalErrorSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static lambdaUserErrorSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static lambdaUserErrorSum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static lambdaUserErrorSum(this: void, dimensions: {
        TargetGroup: string;
    }): MetricWithDims<{
        TargetGroup: string;
    }>;
    static droppedInvalidHeaderRequestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static forwardedInvalidHeaderRequestCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static healthyHostCountAverage(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static healthyHostCountAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static unHealthyHostCountAverage(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static unHealthyHostCountAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
}
export declare class GatewayELBMetrics {
    static healthyHostCountAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static unHealthyHostCountAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static activeFlowCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static consumedLcUsAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedBytesSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
}
export declare class NetworkELBMetrics {
    static activeFlowCountAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static activeFlowCountAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static activeFlowCountTcpAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static activeFlowCountTcpAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static activeFlowCountTlsAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static activeFlowCountTlsAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static activeFlowCountUdpAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static activeFlowCountUdpAverage(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static clientTlsNegotiationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static consumedLcUsAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static consumedLcUsTcpAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static consumedLcUsTlsAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static consumedLcUsUdpAverage(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static newFlowCountTcpSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountTcpSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static newFlowCountTlsSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountTlsSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static newFlowCountUdpSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static newFlowCountUdpSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedBytesSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedBytesSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedBytesTcpSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedBytesTcpSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedBytesTlsSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedBytesTlsSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedBytesUdpSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedBytesUdpSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static targetTlsNegotiationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static tcpClientResetCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static tcpClientResetCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static tcpElbResetCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static tcpElbResetCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static tcpTargetResetCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static tcpTargetResetCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static peakPacketsPerSecondSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static peakPacketsPerSecondSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static processedPacketsSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static processedPacketsSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static portAllocationErrorCountSum(this: void, dimensions: {
        LoadBalancer: string;
    }): MetricWithDims<{
        LoadBalancer: string;
    }>;
    static portAllocationErrorCountSum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
    }>;
    static healthyHostCountMinimum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static healthyHostCountMinimum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static unHealthyHostCountMaximum(this: void, dimensions: {
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        LoadBalancer: string;
        TargetGroup: string;
    }>;
    static unHealthyHostCountMaximum(this: void, dimensions: {
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }): MetricWithDims<{
        AvailabilityZone: string;
        LoadBalancer: string;
        TargetGroup: string;
    }>;
}
