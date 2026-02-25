export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EC2CapacityReservationsMetrics {
    static instanceUtilizationAverage(this: void, dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static usedInstanceCountAverage(this: void, dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static availableInstanceCountAverage(this: void, dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static totalInstanceCountAverage(this: void, dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
}
export declare class EBSMetrics {
    static volumeReadBytesSum(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeWriteBytesSum(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeReadOpsSum(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeTotalReadTimeAverage(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeWriteOpsSum(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeTotalWriteTimeAverage(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeIdleTimeAverage(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeQueueLengthAverage(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static burstBalanceAverage(this: void, dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
}
export declare class EC2Metrics {
    static cpuCreditUsageAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuCreditBalanceAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuSurplusCreditBalanceAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuSurplusCreditsChargedAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static cpuUtilizationAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static cpuUtilizationAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskReadBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskReadBytesAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static diskReadBytesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskReadBytesAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskReadBytesAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskReadOpsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskReadOpsAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static diskReadOpsAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskReadOpsAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskReadOpsAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskWriteBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskWriteBytesAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static diskWriteBytesAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskWriteBytesAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskWriteBytesAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskWriteOpsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskWriteOpsAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static diskWriteOpsAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskWriteOpsAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskWriteOpsAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static metadataNoTokenSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static metadataNoTokenSum(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkInAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkInAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkInAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkInAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static networkInAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static networkOutAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkOutAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkOutAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkOutAverage(this: void, dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static networkOutAverage(this: void, dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static networkPacketsInAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkPacketsInAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkPacketsInAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkPacketsOutAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkPacketsOutAverage(this: void, dimensions: {}): MetricWithDims<{}>;
    static networkPacketsOutAverage(this: void, dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static statusCheckFailedSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static statusCheckFailedInstanceSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static statusCheckFailedSystemSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsReadOpsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsWriteOpsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsReadBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsWriteBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsioBalanceaverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ebsByteBalanceaverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
}
export declare class CWAgentMetrics {
    static cpuUsageIdleAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageIowaitAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageStealAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageSystemAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageUserAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesFreeSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesTotalSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesUsedSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskUsedPercentMaximum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskUsedMaximum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioIoTimeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioReadBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioReadsAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioWriteBytesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioWritesAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memCachedAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memTotalAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memUsedAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memUsedPercentAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static netstatTcpEstablishedSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static netstatTcpTimeWaitSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static swapUsedPercentAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolBwInAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolBwOutAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolConntrackAllowanceAvailableAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolEnaSrdModeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolEnaSrdEligibleTxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolEnaSrdTxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolEnaSrdRxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolEnaSrdResourceUtilizationAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolLinklocalAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolPpsAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ethtoolConntrackAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static tcPv4ConnectionsEstablishedSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static tcPv6ConnectionsEstablishedSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryCommittedBytesInUseAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorIdleTimeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorInterruptTimeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorUserTimeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static logicalDiskFreeSpaceAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static pagingFileUsageAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static physicalDiskDiskTimeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static physicalDiskDiskReadBytessecAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static physicalDiskDiskWriteBytessecAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static physicalDiskDiskWritessecAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static physicalDiskDiskReadssecAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static aggregateInboundBwAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static aggregateOutboundBwAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static availableConnectionTrackingAllowanceAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static enaSrdModeAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static enaSrdEligibleTxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static enaSrdTxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static enaSrdRxPktsSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static enaSrdResourceUtilizationAverage(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static linkLocalPacketRateAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static ppsAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static connectionTrackingAllowanceExceededSum(this: void, dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
}
export declare class NATGatewayMetrics {
    static activeConnectionCountMaximum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsDropCountSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesInFromDestinationSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesInFromSourceSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesOutToDestinationSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesOutToSourceSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static connectionAttemptCountSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static connectionEstablishedCountSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static errorPortAllocationSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static idleTimeoutCountSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsInFromDestinationSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsInFromSourceSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsOutToDestinationSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsOutToSourceSum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static peakBytesPerSecondMaximum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static peakPacketsPerSecondMaximum(this: void, dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
}
export declare class TransitGatewayMetrics {
    static bytesInSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static bytesOutSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetDropCountBlackholeSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetDropCountNoRouteSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetsInSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetsOutSum(this: void, dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
}
export declare class VPNMetrics {
    static tunnelDataInSum(this: void, dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
    static tunnelStateAverage(this: void, dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
    static tunnelDataOutSum(this: void, dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
}
