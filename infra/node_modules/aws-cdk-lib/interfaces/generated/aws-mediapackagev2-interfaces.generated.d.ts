import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Arn of the Channel resource.
     */
    readonly channelArn: string;
}
/**
 * Indicates that this resource can be referenced as a ChannelGroup.
 *
 * @stability experimental
 */
export interface IChannelGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ChannelGroup resource.
     */
    readonly channelGroupRef: ChannelGroupReference;
}
/**
 * A reference to a ChannelGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelGroupReference {
    /**
     * The Arn of the ChannelGroup resource.
     */
    readonly channelGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ChannelPolicy.
 *
 * @stability experimental
 */
export interface IChannelPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ChannelPolicy resource.
     */
    readonly channelPolicyRef: ChannelPolicyReference;
}
/**
 * A reference to a ChannelPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelPolicyReference {
    /**
     * The ChannelGroupName of the ChannelPolicy resource.
     */
    readonly channelGroupName: string;
    /**
     * The ChannelName of the ChannelPolicy resource.
     */
    readonly channelName: string;
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
     * The Arn of the OriginEndpoint resource.
     */
    readonly originEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a OriginEndpointPolicy.
 *
 * @stability experimental
 */
export interface IOriginEndpointPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OriginEndpointPolicy resource.
     */
    readonly originEndpointPolicyRef: OriginEndpointPolicyReference;
}
/**
 * A reference to a OriginEndpointPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface OriginEndpointPolicyReference {
    /**
     * The ChannelGroupName of the OriginEndpointPolicy resource.
     */
    readonly channelGroupName: string;
    /**
     * The ChannelName of the OriginEndpointPolicy resource.
     */
    readonly channelName: string;
    /**
     * The OriginEndpointName of the OriginEndpointPolicy resource.
     */
    readonly originEndpointName: string;
}
