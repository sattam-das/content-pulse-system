import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ChannelAssociation.
 *
 * @stability experimental
 */
export interface IChannelAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ChannelAssociation resource.
     */
    readonly channelAssociationRef: ChannelAssociationReference;
}
/**
 * A reference to a ChannelAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelAssociationReference {
    /**
     * The Arn of the ChannelAssociation resource.
     */
    readonly channelAssociationArn: string;
    /**
     * The NotificationConfigurationArn of the ChannelAssociation resource.
     */
    readonly notificationConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventRule.
 *
 * @stability experimental
 */
export interface IEventRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventRule resource.
     */
    readonly eventRuleRef: EventRuleReference;
}
/**
 * A reference to a EventRule resource.
 *
 * @struct
 * @stability external
 */
export interface EventRuleReference {
    /**
     * The Arn of the EventRule resource.
     */
    readonly eventRuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a ManagedNotificationAccountContactAssociation.
 *
 * @stability experimental
 */
export interface IManagedNotificationAccountContactAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ManagedNotificationAccountContactAssociation resource.
     */
    readonly managedNotificationAccountContactAssociationRef: ManagedNotificationAccountContactAssociationReference;
}
/**
 * A reference to a ManagedNotificationAccountContactAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ManagedNotificationAccountContactAssociationReference {
    /**
     * The ManagedNotificationConfigurationArn of the ManagedNotificationAccountContactAssociation resource.
     */
    readonly managedNotificationConfigurationArn: string;
    /**
     * The ContactIdentifier of the ManagedNotificationAccountContactAssociation resource.
     */
    readonly contactIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a ManagedNotificationAdditionalChannelAssociation.
 *
 * @stability experimental
 */
export interface IManagedNotificationAdditionalChannelAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ManagedNotificationAdditionalChannelAssociation resource.
     */
    readonly managedNotificationAdditionalChannelAssociationRef: ManagedNotificationAdditionalChannelAssociationReference;
}
/**
 * A reference to a ManagedNotificationAdditionalChannelAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ManagedNotificationAdditionalChannelAssociationReference {
    /**
     * The ChannelArn of the ManagedNotificationAdditionalChannelAssociation resource.
     */
    readonly channelArn: string;
    /**
     * The ManagedNotificationConfigurationArn of the ManagedNotificationAdditionalChannelAssociation resource.
     */
    readonly managedNotificationConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a NotificationConfiguration.
 *
 * @stability experimental
 */
export interface INotificationConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotificationConfiguration resource.
     */
    readonly notificationConfigurationRef: NotificationConfigurationReference;
}
/**
 * A reference to a NotificationConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface NotificationConfigurationReference {
    /**
     * The Arn of the NotificationConfiguration resource.
     */
    readonly notificationConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a NotificationHub.
 *
 * @stability experimental
 */
export interface INotificationHubRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotificationHub resource.
     */
    readonly notificationHubRef: NotificationHubReference;
}
/**
 * A reference to a NotificationHub resource.
 *
 * @struct
 * @stability external
 */
export interface NotificationHubReference {
    /**
     * The Region of the NotificationHub resource.
     */
    readonly region: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationalUnitAssociation.
 *
 * @stability experimental
 */
export interface IOrganizationalUnitAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationalUnitAssociation resource.
     */
    readonly organizationalUnitAssociationRef: OrganizationalUnitAssociationReference;
}
/**
 * A reference to a OrganizationalUnitAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationalUnitAssociationReference {
    /**
     * The NotificationConfigurationArn of the OrganizationalUnitAssociation resource.
     */
    readonly notificationConfigurationArn: string;
    /**
     * The OrganizationalUnitId of the OrganizationalUnitAssociation resource.
     */
    readonly organizationalUnitId: string;
}
