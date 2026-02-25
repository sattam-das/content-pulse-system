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
     * The ChannelName of the Channel resource.
     */
    readonly channelName: string;
    /**
     * The ARN of the Channel resource.
     */
    readonly channelArn: string;
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
     * The ChannelName of the ChannelPolicy resource.
     */
    readonly channelName: string;
}
/**
 * Indicates that this resource can be referenced as a LiveSource.
 *
 * @stability experimental
 */
export interface ILiveSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LiveSource resource.
     */
    readonly liveSourceRef: LiveSourceReference;
}
/**
 * A reference to a LiveSource resource.
 *
 * @struct
 * @stability external
 */
export interface LiveSourceReference {
    /**
     * The LiveSourceName of the LiveSource resource.
     */
    readonly liveSourceName: string;
    /**
     * The SourceLocationName of the LiveSource resource.
     */
    readonly sourceLocationName: string;
    /**
     * The ARN of the LiveSource resource.
     */
    readonly liveSourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a PlaybackConfiguration.
 *
 * @stability experimental
 */
export interface IPlaybackConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PlaybackConfiguration resource.
     */
    readonly playbackConfigurationRef: PlaybackConfigurationReference;
}
/**
 * A reference to a PlaybackConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface PlaybackConfigurationReference {
    /**
     * The Name of the PlaybackConfiguration resource.
     */
    readonly playbackConfigurationName: string;
    /**
     * The ARN of the PlaybackConfiguration resource.
     */
    readonly playbackConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a SourceLocation.
 *
 * @stability experimental
 */
export interface ISourceLocationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SourceLocation resource.
     */
    readonly sourceLocationRef: SourceLocationReference;
}
/**
 * A reference to a SourceLocation resource.
 *
 * @struct
 * @stability external
 */
export interface SourceLocationReference {
    /**
     * The SourceLocationName of the SourceLocation resource.
     */
    readonly sourceLocationName: string;
    /**
     * The ARN of the SourceLocation resource.
     */
    readonly sourceLocationArn: string;
}
/**
 * Indicates that this resource can be referenced as a VodSource.
 *
 * @stability experimental
 */
export interface IVodSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VodSource resource.
     */
    readonly vodSourceRef: VodSourceReference;
}
/**
 * A reference to a VodSource resource.
 *
 * @struct
 * @stability external
 */
export interface VodSourceReference {
    /**
     * The SourceLocationName of the VodSource resource.
     */
    readonly sourceLocationName: string;
    /**
     * The VodSourceName of the VodSource resource.
     */
    readonly vodSourceName: string;
    /**
     * The ARN of the VodSource resource.
     */
    readonly vodSourceArn: string;
}
