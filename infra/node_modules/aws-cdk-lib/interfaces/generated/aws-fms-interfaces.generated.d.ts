import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a NotificationChannel.
 *
 * @stability experimental
 */
export interface INotificationChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotificationChannel resource.
     */
    readonly notificationChannelRef: NotificationChannelReference;
}
/**
 * A reference to a NotificationChannel resource.
 *
 * @struct
 * @stability external
 */
export interface NotificationChannelReference {
    /**
     * The SnsTopicArn of the NotificationChannel resource.
     */
    readonly snsTopicArn: string;
}
/**
 * Indicates that this resource can be referenced as a Policy.
 *
 * @stability experimental
 */
export interface IPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Policy resource.
     */
    readonly policyRef: PolicyReference;
}
/**
 * A reference to a Policy resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyReference {
    /**
     * The Id of the Policy resource.
     */
    readonly policyId: string;
    /**
     * The ARN of the Policy resource.
     */
    readonly policyArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceSet.
 *
 * @stability experimental
 */
export interface IResourceSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceSet resource.
     */
    readonly resourceSetRef: ResourceSetReference;
}
/**
 * A reference to a ResourceSet resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceSetReference {
    /**
     * The Id of the ResourceSet resource.
     */
    readonly resourceSetId: string;
}
