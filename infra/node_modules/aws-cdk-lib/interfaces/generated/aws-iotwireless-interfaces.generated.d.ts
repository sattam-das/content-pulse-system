import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Destination.
 *
 * @stability experimental
 */
export interface IDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Destination resource.
     */
    readonly destinationRef: DestinationReference;
}
/**
 * A reference to a Destination resource.
 *
 * @struct
 * @stability external
 */
export interface DestinationReference {
    /**
     * The Name of the Destination resource.
     */
    readonly destinationName: string;
    /**
     * The ARN of the Destination resource.
     */
    readonly destinationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DeviceProfile.
 *
 * @stability experimental
 */
export interface IDeviceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeviceProfile resource.
     */
    readonly deviceProfileRef: DeviceProfileReference;
}
/**
 * A reference to a DeviceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceProfileReference {
    /**
     * The Id of the DeviceProfile resource.
     */
    readonly deviceProfileId: string;
    /**
     * The ARN of the DeviceProfile resource.
     */
    readonly deviceProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a FuotaTask.
 *
 * @stability experimental
 */
export interface IFuotaTaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FuotaTask resource.
     */
    readonly fuotaTaskRef: FuotaTaskReference;
}
/**
 * A reference to a FuotaTask resource.
 *
 * @struct
 * @stability external
 */
export interface FuotaTaskReference {
    /**
     * The Id of the FuotaTask resource.
     */
    readonly fuotaTaskId: string;
    /**
     * The ARN of the FuotaTask resource.
     */
    readonly fuotaTaskArn: string;
}
/**
 * Indicates that this resource can be referenced as a MulticastGroup.
 *
 * @stability experimental
 */
export interface IMulticastGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MulticastGroup resource.
     */
    readonly multicastGroupRef: MulticastGroupReference;
}
/**
 * A reference to a MulticastGroup resource.
 *
 * @struct
 * @stability external
 */
export interface MulticastGroupReference {
    /**
     * The Id of the MulticastGroup resource.
     */
    readonly multicastGroupId: string;
    /**
     * The ARN of the MulticastGroup resource.
     */
    readonly multicastGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkAnalyzerConfiguration.
 *
 * @stability experimental
 */
export interface INetworkAnalyzerConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkAnalyzerConfiguration resource.
     */
    readonly networkAnalyzerConfigurationRef: NetworkAnalyzerConfigurationReference;
}
/**
 * A reference to a NetworkAnalyzerConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkAnalyzerConfigurationReference {
    /**
     * The Name of the NetworkAnalyzerConfiguration resource.
     */
    readonly networkAnalyzerConfigurationName: string;
    /**
     * The ARN of the NetworkAnalyzerConfiguration resource.
     */
    readonly networkAnalyzerConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a PartnerAccount.
 *
 * @stability experimental
 */
export interface IPartnerAccountRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PartnerAccount resource.
     */
    readonly partnerAccountRef: PartnerAccountReference;
}
/**
 * A reference to a PartnerAccount resource.
 *
 * @struct
 * @stability external
 */
export interface PartnerAccountReference {
    /**
     * The PartnerAccountId of the PartnerAccount resource.
     */
    readonly partnerAccountId: string;
    /**
     * The ARN of the PartnerAccount resource.
     */
    readonly partnerAccountArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceProfile.
 *
 * @stability experimental
 */
export interface IServiceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceProfile resource.
     */
    readonly serviceProfileRef: ServiceProfileReference;
}
/**
 * A reference to a ServiceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceProfileReference {
    /**
     * The Id of the ServiceProfile resource.
     */
    readonly serviceProfileId: string;
    /**
     * The ARN of the ServiceProfile resource.
     */
    readonly serviceProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a TaskDefinition.
 *
 * @stability experimental
 */
export interface ITaskDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TaskDefinition resource.
     */
    readonly taskDefinitionRef: TaskDefinitionReference;
}
/**
 * A reference to a TaskDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface TaskDefinitionReference {
    /**
     * The Id of the TaskDefinition resource.
     */
    readonly taskDefinitionId: string;
    /**
     * The ARN of the TaskDefinition resource.
     */
    readonly taskDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a WirelessDevice.
 *
 * @stability experimental
 */
export interface IWirelessDeviceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WirelessDevice resource.
     */
    readonly wirelessDeviceRef: WirelessDeviceReference;
}
/**
 * A reference to a WirelessDevice resource.
 *
 * @struct
 * @stability external
 */
export interface WirelessDeviceReference {
    /**
     * The Id of the WirelessDevice resource.
     */
    readonly wirelessDeviceId: string;
    /**
     * The ARN of the WirelessDevice resource.
     */
    readonly wirelessDeviceArn: string;
}
/**
 * Indicates that this resource can be referenced as a WirelessDeviceImportTask.
 *
 * @stability experimental
 */
export interface IWirelessDeviceImportTaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WirelessDeviceImportTask resource.
     */
    readonly wirelessDeviceImportTaskRef: WirelessDeviceImportTaskReference;
}
/**
 * A reference to a WirelessDeviceImportTask resource.
 *
 * @struct
 * @stability external
 */
export interface WirelessDeviceImportTaskReference {
    /**
     * The Id of the WirelessDeviceImportTask resource.
     */
    readonly wirelessDeviceImportTaskId: string;
    /**
     * The ARN of the WirelessDeviceImportTask resource.
     */
    readonly wirelessDeviceImportTaskArn: string;
}
/**
 * Indicates that this resource can be referenced as a WirelessGateway.
 *
 * @stability experimental
 */
export interface IWirelessGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WirelessGateway resource.
     */
    readonly wirelessGatewayRef: WirelessGatewayReference;
}
/**
 * A reference to a WirelessGateway resource.
 *
 * @struct
 * @stability external
 */
export interface WirelessGatewayReference {
    /**
     * The Id of the WirelessGateway resource.
     */
    readonly wirelessGatewayId: string;
    /**
     * The ARN of the WirelessGateway resource.
     */
    readonly wirelessGatewayArn: string;
}
