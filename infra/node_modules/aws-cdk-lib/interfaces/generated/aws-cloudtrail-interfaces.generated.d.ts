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
     * The ChannelArn of the Channel resource.
     */
    readonly channelArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventDataStore.
 *
 * @stability experimental
 */
export interface IEventDataStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventDataStore resource.
     */
    readonly eventDataStoreRef: EventDataStoreReference;
}
/**
 * A reference to a EventDataStore resource.
 *
 * @struct
 * @stability external
 */
export interface EventDataStoreReference {
    /**
     * The EventDataStoreArn of the EventDataStore resource.
     */
    readonly eventDataStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The ResourceArn of the ResourcePolicy resource.
     */
    readonly resourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Trail.
 *
 * @stability experimental
 */
export interface ITrailRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Trail resource.
     */
    readonly trailRef: TrailReference;
}
/**
 * A reference to a Trail resource.
 *
 * @struct
 * @stability external
 */
export interface TrailReference {
    /**
     * The TrailName of the Trail resource.
     */
    readonly trailName: string;
    /**
     * The ARN of the Trail resource.
     */
    readonly trailArn: string;
}
/**
 * Indicates that this resource can be referenced as a Dashboard.
 *
 * @stability experimental
 */
export interface IDashboardRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dashboard resource.
     */
    readonly dashboardRef: DashboardReference;
}
/**
 * A reference to a Dashboard resource.
 *
 * @struct
 * @stability external
 */
export interface DashboardReference {
    /**
     * The DashboardArn of the Dashboard resource.
     */
    readonly dashboardArn: string;
}
