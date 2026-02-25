import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The Id of the Cluster resource.
     */
    readonly clusterId: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceFleetConfig.
 *
 * @stability experimental
 */
export interface IInstanceFleetConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceFleetConfig resource.
     */
    readonly instanceFleetConfigRef: InstanceFleetConfigReference;
}
/**
 * A reference to a InstanceFleetConfig resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceFleetConfigReference {
    /**
     * The Id of the InstanceFleetConfig resource.
     */
    readonly instanceFleetConfigId: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceGroupConfig.
 *
 * @stability experimental
 */
export interface IInstanceGroupConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceGroupConfig resource.
     */
    readonly instanceGroupConfigRef: InstanceGroupConfigReference;
}
/**
 * A reference to a InstanceGroupConfig resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceGroupConfigReference {
    /**
     * The Id of the InstanceGroupConfig resource.
     */
    readonly instanceGroupConfigId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityConfiguration.
 *
 * @stability experimental
 */
export interface ISecurityConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityConfiguration resource.
     */
    readonly securityConfigurationRef: SecurityConfigurationReference;
}
/**
 * A reference to a SecurityConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityConfigurationReference {
    /**
     * The Name of the SecurityConfiguration resource.
     */
    readonly securityConfigurationName: string;
}
/**
 * Indicates that this resource can be referenced as a Step.
 *
 * @stability experimental
 */
export interface IStepRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Step resource.
     */
    readonly stepRef: StepReference;
}
/**
 * A reference to a Step resource.
 *
 * @struct
 * @stability external
 */
export interface StepReference {
    /**
     * The Id of the Step resource.
     */
    readonly stepId: string;
}
/**
 * Indicates that this resource can be referenced as a Studio.
 *
 * @stability experimental
 */
export interface IStudioRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Studio resource.
     */
    readonly studioRef: StudioReference;
}
/**
 * A reference to a Studio resource.
 *
 * @struct
 * @stability external
 */
export interface StudioReference {
    /**
     * The StudioId of the Studio resource.
     */
    readonly studioId: string;
    /**
     * The ARN of the Studio resource.
     */
    readonly studioArn: string;
}
/**
 * Indicates that this resource can be referenced as a StudioSessionMapping.
 *
 * @stability experimental
 */
export interface IStudioSessionMappingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StudioSessionMapping resource.
     */
    readonly studioSessionMappingRef: StudioSessionMappingReference;
}
/**
 * A reference to a StudioSessionMapping resource.
 *
 * @struct
 * @stability external
 */
export interface StudioSessionMappingReference {
    /**
     * The StudioId of the StudioSessionMapping resource.
     */
    readonly studioId: string;
    /**
     * The IdentityType of the StudioSessionMapping resource.
     */
    readonly identityType: string;
    /**
     * The IdentityName of the StudioSessionMapping resource.
     */
    readonly identityName: string;
}
/**
 * Indicates that this resource can be referenced as a WALWorkspace.
 *
 * @stability experimental
 */
export interface IWALWorkspaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WALWorkspace resource.
     */
    readonly walWorkspaceRef: WALWorkspaceReference;
}
/**
 * A reference to a WALWorkspace resource.
 *
 * @struct
 * @stability external
 */
export interface WALWorkspaceReference {
    /**
     * The WALWorkspaceName of the WALWorkspace resource.
     */
    readonly walWorkspaceName: string;
}
