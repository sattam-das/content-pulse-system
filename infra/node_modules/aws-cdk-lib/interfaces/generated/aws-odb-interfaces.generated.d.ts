import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CloudAutonomousVmCluster.
 *
 * @stability experimental
 */
export interface ICloudAutonomousVmClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudAutonomousVmCluster resource.
     */
    readonly cloudAutonomousVmClusterRef: CloudAutonomousVmClusterReference;
}
/**
 * A reference to a CloudAutonomousVmCluster resource.
 *
 * @struct
 * @stability external
 */
export interface CloudAutonomousVmClusterReference {
    /**
     * The CloudAutonomousVmClusterArn of the CloudAutonomousVmCluster resource.
     */
    readonly cloudAutonomousVmClusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a CloudExadataInfrastructure.
 *
 * @stability experimental
 */
export interface ICloudExadataInfrastructureRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudExadataInfrastructure resource.
     */
    readonly cloudExadataInfrastructureRef: CloudExadataInfrastructureReference;
}
/**
 * A reference to a CloudExadataInfrastructure resource.
 *
 * @struct
 * @stability external
 */
export interface CloudExadataInfrastructureReference {
    /**
     * The CloudExadataInfrastructureArn of the CloudExadataInfrastructure resource.
     */
    readonly cloudExadataInfrastructureArn: string;
}
/**
 * Indicates that this resource can be referenced as a CloudVmCluster.
 *
 * @stability experimental
 */
export interface ICloudVmClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudVmCluster resource.
     */
    readonly cloudVmClusterRef: CloudVmClusterReference;
}
/**
 * A reference to a CloudVmCluster resource.
 *
 * @struct
 * @stability external
 */
export interface CloudVmClusterReference {
    /**
     * The CloudVmClusterArn of the CloudVmCluster resource.
     */
    readonly cloudVmClusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a OdbNetwork.
 *
 * @stability experimental
 */
export interface IOdbNetworkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OdbNetwork resource.
     */
    readonly odbNetworkRef: OdbNetworkReference;
}
/**
 * A reference to a OdbNetwork resource.
 *
 * @struct
 * @stability external
 */
export interface OdbNetworkReference {
    /**
     * The OdbNetworkArn of the OdbNetwork resource.
     */
    readonly odbNetworkArn: string;
}
/**
 * Indicates that this resource can be referenced as a OdbPeeringConnection.
 *
 * @stability experimental
 */
export interface IOdbPeeringConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OdbPeeringConnection resource.
     */
    readonly odbPeeringConnectionRef: OdbPeeringConnectionReference;
}
/**
 * A reference to a OdbPeeringConnection resource.
 *
 * @struct
 * @stability external
 */
export interface OdbPeeringConnectionReference {
    /**
     * The OdbPeeringConnectionArn of the OdbPeeringConnection resource.
     */
    readonly odbPeeringConnectionArn: string;
}
