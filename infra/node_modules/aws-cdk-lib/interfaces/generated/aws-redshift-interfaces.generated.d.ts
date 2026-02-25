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
     * The ClusterIdentifier of the Cluster resource.
     */
    readonly clusterIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a ClusterParameterGroup.
 *
 * @stability experimental
 */
export interface IClusterParameterGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClusterParameterGroup resource.
     */
    readonly clusterParameterGroupRef: ClusterParameterGroupReference;
}
/**
 * A reference to a ClusterParameterGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterParameterGroupReference {
    /**
     * The ParameterGroupName of the ClusterParameterGroup resource.
     */
    readonly parameterGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a ClusterSecurityGroup.
 *
 * @stability experimental
 */
export interface IClusterSecurityGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClusterSecurityGroup resource.
     */
    readonly clusterSecurityGroupRef: ClusterSecurityGroupReference;
}
/**
 * A reference to a ClusterSecurityGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterSecurityGroupReference {
    /**
     * The Id of the ClusterSecurityGroup resource.
     */
    readonly clusterSecurityGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a ClusterSecurityGroupIngress.
 *
 * @stability experimental
 */
export interface IClusterSecurityGroupIngressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClusterSecurityGroupIngress resource.
     */
    readonly clusterSecurityGroupIngressRef: ClusterSecurityGroupIngressReference;
}
/**
 * A reference to a ClusterSecurityGroupIngress resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterSecurityGroupIngressReference {
    /**
     * The Id of the ClusterSecurityGroupIngress resource.
     */
    readonly clusterSecurityGroupIngressId: string;
}
/**
 * Indicates that this resource can be referenced as a ClusterSubnetGroup.
 *
 * @stability experimental
 */
export interface IClusterSubnetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClusterSubnetGroup resource.
     */
    readonly clusterSubnetGroupRef: ClusterSubnetGroupReference;
}
/**
 * A reference to a ClusterSubnetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterSubnetGroupReference {
    /**
     * The ClusterSubnetGroupName of the ClusterSubnetGroup resource.
     */
    readonly clusterSubnetGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a EndpointAccess.
 *
 * @stability experimental
 */
export interface IEndpointAccessRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EndpointAccess resource.
     */
    readonly endpointAccessRef: EndpointAccessReference;
}
/**
 * A reference to a EndpointAccess resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointAccessReference {
    /**
     * The EndpointName of the EndpointAccess resource.
     */
    readonly endpointName: string;
}
/**
 * Indicates that this resource can be referenced as a EndpointAuthorization.
 *
 * @stability experimental
 */
export interface IEndpointAuthorizationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EndpointAuthorization resource.
     */
    readonly endpointAuthorizationRef: EndpointAuthorizationReference;
}
/**
 * A reference to a EndpointAuthorization resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointAuthorizationReference {
    /**
     * The ClusterIdentifier of the EndpointAuthorization resource.
     */
    readonly clusterIdentifier: string;
    /**
     * The Account of the EndpointAuthorization resource.
     */
    readonly account: string;
}
/**
 * Indicates that this resource can be referenced as a EventSubscription.
 *
 * @stability experimental
 */
export interface IEventSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventSubscription resource.
     */
    readonly eventSubscriptionRef: EventSubscriptionReference;
}
/**
 * A reference to a EventSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface EventSubscriptionReference {
    /**
     * The SubscriptionName of the EventSubscription resource.
     */
    readonly subscriptionName: string;
}
/**
 * Indicates that this resource can be referenced as a ScheduledAction.
 *
 * @stability experimental
 */
export interface IScheduledActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScheduledAction resource.
     */
    readonly scheduledActionRef: ScheduledActionReference;
}
/**
 * A reference to a ScheduledAction resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduledActionReference {
    /**
     * The ScheduledActionName of the ScheduledAction resource.
     */
    readonly scheduledActionName: string;
}
/**
 * Indicates that this resource can be referenced as a Integration.
 *
 * @stability experimental
 */
export interface IIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Integration resource.
     */
    readonly integrationRef: IntegrationReference;
}
/**
 * A reference to a Integration resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationReference {
    /**
     * The IntegrationArn of the Integration resource.
     */
    readonly integrationArn: string;
}
