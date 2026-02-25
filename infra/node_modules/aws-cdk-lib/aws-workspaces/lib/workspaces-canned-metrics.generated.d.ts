export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class WorkSpacesMetrics {
    static availableSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static availableSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static availableSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static availableSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static availableSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static availableSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static unhealthySum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static connectionAttemptSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static connectionSuccessSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static connectionFailureSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static sessionLaunchTimeAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static inSessionLatencyAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static sessionDisconnectSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static userConnectedSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static stoppedSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static maintenanceSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static restoringSum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static restoringSum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static restoringSum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static restoringSum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static restoringSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static restoringSum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static cpuUsageAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static memoryUsageAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static rootVolumeDiskUsageAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static userVolumeDiskUsageAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static udpPacketLossRateAverage(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        RunningMode: string;
    }): MetricWithDims<{
        RunningMode: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        Protocol: string;
    }): MetricWithDims<{
        Protocol: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        ComputeType: string;
    }): MetricWithDims<{
        ComputeType: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static upTimeMaximum(this: void, dimensions: {
        BundleId: string;
    }): MetricWithDims<{
        BundleId: string;
    }>;
    static trustedDeviceValidationAttemptSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static trustedDeviceValidationSuccessSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static trustedDeviceValidationFailureSum(this: void, dimensions: {
        DirectoryId: string;
    }): MetricWithDims<{
        DirectoryId: string;
    }>;
    static trustedDeviceCertificateDaysBeforeExpirationSum(this: void, dimensions: {
        CertificateId: string;
    }): MetricWithDims<{
        CertificateId: string;
    }>;
}
