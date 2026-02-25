import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Asset.
 *
 * @stability experimental
 */
export interface IAssetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Asset resource.
     */
    readonly assetRef: AssetReference;
}
/**
 * A reference to a Asset resource.
 *
 * @struct
 * @stability external
 */
export interface AssetReference {
    /**
     * The Id of the Asset resource.
     */
    readonly assetId: string;
    /**
     * The ARN of the Asset resource.
     */
    readonly assetArn: string;
}
/**
 * Indicates that this resource can be referenced as a Channel.
 *
 * @stability experimental
 */
export interface IChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Channel resource.
     */
    readonly channelRef: ChannelReference;
}
/**
 * A reference to a Channel resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelReference {
    /**
     * The Id of the Channel resource.
     */
    readonly channelId: string;
    /**
     * The ARN of the Channel resource.
     */
    readonly channelArn: string;
}
/**
 * Indicates that this resource can be referenced as a OriginEndpoint.
 *
 * @stability experimental
 */
export interface IOriginEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OriginEndpoint resource.
     */
    readonly originEndpointRef: OriginEndpointReference;
}
/**
 * A reference to a OriginEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface OriginEndpointReference {
    /**
     * The Id of the OriginEndpoint resource.
     */
    readonly originEndpointId: string;
    /**
     * The ARN of the OriginEndpoint resource.
     */
    readonly originEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a PackagingConfiguration.
 *
 * @stability experimental
 */
export interface IPackagingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PackagingConfiguration resource.
     */
    readonly packagingConfigurationRef: PackagingConfigurationReference;
}
/**
 * A reference to a PackagingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface PackagingConfigurationReference {
    /**
     * The Id of the PackagingConfiguration resource.
     */
    readonly packagingConfigurationId: string;
    /**
     * The ARN of the PackagingConfiguration resource.
     */
    readonly packagingConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a PackagingGroup.
 *
 * @stability experimental
 */
export interface IPackagingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PackagingGroup resource.
     */
    readonly packagingGroupRef: PackagingGroupReference;
}
/**
 * A reference to a PackagingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface PackagingGroupReference {
    /**
     * The Id of the PackagingGroup resource.
     */
    readonly packagingGroupId: string;
    /**
     * The ARN of the PackagingGroup resource.
     */
    readonly packagingGroupArn: string;
}
