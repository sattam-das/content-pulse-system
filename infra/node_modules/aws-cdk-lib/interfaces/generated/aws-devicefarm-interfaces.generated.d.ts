import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DevicePool.
 *
 * @stability experimental
 */
export interface IDevicePoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DevicePool resource.
     */
    readonly devicePoolRef: DevicePoolReference;
}
/**
 * A reference to a DevicePool resource.
 *
 * @struct
 * @stability external
 */
export interface DevicePoolReference {
    /**
     * The Arn of the DevicePool resource.
     */
    readonly devicePoolArn: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceProfile.
 *
 * @stability experimental
 */
export interface IInstanceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceProfile resource.
     */
    readonly instanceProfileRef: InstanceProfileReference;
}
/**
 * A reference to a InstanceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceProfileReference {
    /**
     * The Arn of the InstanceProfile resource.
     */
    readonly instanceProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkProfile.
 *
 * @stability experimental
 */
export interface INetworkProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkProfile resource.
     */
    readonly networkProfileRef: NetworkProfileReference;
}
/**
 * A reference to a NetworkProfile resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkProfileReference {
    /**
     * The Arn of the NetworkProfile resource.
     */
    readonly networkProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The Arn of the Project resource.
     */
    readonly projectArn: string;
}
/**
 * Indicates that this resource can be referenced as a TestGridProject.
 *
 * @stability experimental
 */
export interface ITestGridProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TestGridProject resource.
     */
    readonly testGridProjectRef: TestGridProjectReference;
}
/**
 * A reference to a TestGridProject resource.
 *
 * @struct
 * @stability external
 */
export interface TestGridProjectReference {
    /**
     * The Arn of the TestGridProject resource.
     */
    readonly testGridProjectArn: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEConfiguration.
 *
 * @stability experimental
 */
export interface IVPCEConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEConfiguration resource.
     */
    readonly vpceConfigurationRef: VPCEConfigurationReference;
}
/**
 * A reference to a VPCEConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEConfigurationReference {
    /**
     * The Arn of the VPCEConfiguration resource.
     */
    readonly vpceConfigurationArn: string;
}
