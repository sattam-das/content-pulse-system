import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Farm.
 *
 * @stability experimental
 */
export interface IFarmRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Farm resource.
     */
    readonly farmRef: FarmReference;
}
/**
 * A reference to a Farm resource.
 *
 * @struct
 * @stability external
 */
export interface FarmReference {
    /**
     * The Arn of the Farm resource.
     */
    readonly farmArn: string;
}
/**
 * Indicates that this resource can be referenced as a Fleet.
 *
 * @stability experimental
 */
export interface IFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Fleet resource.
     */
    readonly fleetRef: FleetReference;
}
/**
 * A reference to a Fleet resource.
 *
 * @struct
 * @stability external
 */
export interface FleetReference {
    /**
     * The Arn of the Fleet resource.
     */
    readonly fleetArn: string;
}
/**
 * Indicates that this resource can be referenced as a LicenseEndpoint.
 *
 * @stability experimental
 */
export interface ILicenseEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LicenseEndpoint resource.
     */
    readonly licenseEndpointRef: LicenseEndpointReference;
}
/**
 * A reference to a LicenseEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface LicenseEndpointReference {
    /**
     * The Arn of the LicenseEndpoint resource.
     */
    readonly licenseEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a Limit.
 *
 * @stability experimental
 */
export interface ILimitRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Limit resource.
     */
    readonly limitRef: LimitReference;
}
/**
 * A reference to a Limit resource.
 *
 * @struct
 * @stability external
 */
export interface LimitReference {
    /**
     * The FarmId of the Limit resource.
     */
    readonly farmId: string;
    /**
     * The LimitId of the Limit resource.
     */
    readonly limitId: string;
}
/**
 * Indicates that this resource can be referenced as a MeteredProduct.
 *
 * @stability experimental
 */
export interface IMeteredProductRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MeteredProduct resource.
     */
    readonly meteredProductRef: MeteredProductReference;
}
/**
 * A reference to a MeteredProduct resource.
 *
 * @struct
 * @stability external
 */
export interface MeteredProductReference {
    /**
     * The Arn of the MeteredProduct resource.
     */
    readonly meteredProductArn: string;
}
/**
 * Indicates that this resource can be referenced as a Monitor.
 *
 * @stability experimental
 */
export interface IMonitorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Monitor resource.
     */
    readonly monitorRef: MonitorReference;
}
/**
 * A reference to a Monitor resource.
 *
 * @struct
 * @stability external
 */
export interface MonitorReference {
    /**
     * The Arn of the Monitor resource.
     */
    readonly monitorArn: string;
}
/**
 * Indicates that this resource can be referenced as a Queue.
 *
 * @stability experimental
 */
export interface IQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Queue resource.
     */
    readonly queueRef: QueueReference;
}
/**
 * A reference to a Queue resource.
 *
 * @struct
 * @stability external
 */
export interface QueueReference {
    /**
     * The Arn of the Queue resource.
     */
    readonly queueArn: string;
}
/**
 * Indicates that this resource can be referenced as a QueueEnvironment.
 *
 * @stability experimental
 */
export interface IQueueEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QueueEnvironment resource.
     */
    readonly queueEnvironmentRef: QueueEnvironmentReference;
}
/**
 * A reference to a QueueEnvironment resource.
 *
 * @struct
 * @stability external
 */
export interface QueueEnvironmentReference {
    /**
     * The FarmId of the QueueEnvironment resource.
     */
    readonly farmId: string;
    /**
     * The QueueId of the QueueEnvironment resource.
     */
    readonly queueId: string;
    /**
     * The QueueEnvironmentId of the QueueEnvironment resource.
     */
    readonly queueEnvironmentId: string;
}
/**
 * Indicates that this resource can be referenced as a QueueFleetAssociation.
 *
 * @stability experimental
 */
export interface IQueueFleetAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QueueFleetAssociation resource.
     */
    readonly queueFleetAssociationRef: QueueFleetAssociationReference;
}
/**
 * A reference to a QueueFleetAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface QueueFleetAssociationReference {
    /**
     * The FarmId of the QueueFleetAssociation resource.
     */
    readonly farmId: string;
    /**
     * The FleetId of the QueueFleetAssociation resource.
     */
    readonly fleetId: string;
    /**
     * The QueueId of the QueueFleetAssociation resource.
     */
    readonly queueId: string;
}
/**
 * Indicates that this resource can be referenced as a QueueLimitAssociation.
 *
 * @stability experimental
 */
export interface IQueueLimitAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QueueLimitAssociation resource.
     */
    readonly queueLimitAssociationRef: QueueLimitAssociationReference;
}
/**
 * A reference to a QueueLimitAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface QueueLimitAssociationReference {
    /**
     * The FarmId of the QueueLimitAssociation resource.
     */
    readonly farmId: string;
    /**
     * The LimitId of the QueueLimitAssociation resource.
     */
    readonly limitId: string;
    /**
     * The QueueId of the QueueLimitAssociation resource.
     */
    readonly queueId: string;
}
/**
 * Indicates that this resource can be referenced as a StorageProfile.
 *
 * @stability experimental
 */
export interface IStorageProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StorageProfile resource.
     */
    readonly storageProfileRef: StorageProfileReference;
}
/**
 * A reference to a StorageProfile resource.
 *
 * @struct
 * @stability external
 */
export interface StorageProfileReference {
    /**
     * The FarmId of the StorageProfile resource.
     */
    readonly farmId: string;
    /**
     * The StorageProfileId of the StorageProfile resource.
     */
    readonly storageProfileId: string;
}
