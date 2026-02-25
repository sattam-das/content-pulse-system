import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a App.
 *
 * @stability experimental
 */
export interface IAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a App resource.
     */
    readonly appRef: AppReference;
}
/**
 * A reference to a App resource.
 *
 * @struct
 * @stability external
 */
export interface AppReference {
    /**
     * The Id of the App resource.
     */
    readonly appId: string;
}
/**
 * Indicates that this resource can be referenced as a ElasticLoadBalancerAttachment.
 *
 * @stability experimental
 */
export interface IElasticLoadBalancerAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ElasticLoadBalancerAttachment resource.
     */
    readonly elasticLoadBalancerAttachmentRef: ElasticLoadBalancerAttachmentReference;
}
/**
 * A reference to a ElasticLoadBalancerAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface ElasticLoadBalancerAttachmentReference {
    /**
     * The Id of the ElasticLoadBalancerAttachment resource.
     */
    readonly elasticLoadBalancerAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a Instance.
 *
 * @stability experimental
 */
export interface IInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Instance resource.
     */
    readonly instanceRef: InstanceReference;
}
/**
 * A reference to a Instance resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceReference {
    /**
     * The Id of the Instance resource.
     */
    readonly instanceId: string;
}
/**
 * Indicates that this resource can be referenced as a Layer.
 *
 * @stability experimental
 */
export interface ILayerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Layer resource.
     */
    readonly layerRef: LayerReference;
}
/**
 * A reference to a Layer resource.
 *
 * @struct
 * @stability external
 */
export interface LayerReference {
    /**
     * The Id of the Layer resource.
     */
    readonly layerId: string;
}
/**
 * Indicates that this resource can be referenced as a Stack.
 *
 * @stability experimental
 */
export interface IStackRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stack resource.
     */
    readonly stackRef: StackReference;
}
/**
 * A reference to a Stack resource.
 *
 * @struct
 * @stability external
 */
export interface StackReference {
    /**
     * The Id of the Stack resource.
     */
    readonly stackId: string;
}
/**
 * Indicates that this resource can be referenced as a UserProfile.
 *
 * @stability experimental
 */
export interface IUserProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserProfile resource.
     */
    readonly userProfileRef: UserProfileReference;
}
/**
 * A reference to a UserProfile resource.
 *
 * @struct
 * @stability external
 */
export interface UserProfileReference {
    /**
     * The Id of the UserProfile resource.
     */
    readonly userProfileId: string;
}
/**
 * Indicates that this resource can be referenced as a Volume.
 *
 * @stability experimental
 */
export interface IVolumeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Volume resource.
     */
    readonly volumeRef: VolumeReference;
}
/**
 * A reference to a Volume resource.
 *
 * @struct
 * @stability external
 */
export interface VolumeReference {
    /**
     * The Id of the Volume resource.
     */
    readonly volumeId: string;
}
