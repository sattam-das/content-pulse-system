import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessLogSubscription.
 *
 * @stability experimental
 */
export interface IAccessLogSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessLogSubscription resource.
     */
    readonly accessLogSubscriptionRef: AccessLogSubscriptionReference;
}
/**
 * A reference to a AccessLogSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface AccessLogSubscriptionReference {
    /**
     * The Arn of the AccessLogSubscription resource.
     */
    readonly accessLogSubscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a AuthPolicy.
 *
 * @stability experimental
 */
export interface IAuthPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AuthPolicy resource.
     */
    readonly authPolicyRef: AuthPolicyReference;
}
/**
 * A reference to a AuthPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface AuthPolicyReference {
    /**
     * The ResourceIdentifier of the AuthPolicy resource.
     */
    readonly resourceIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a Listener.
 *
 * @stability experimental
 */
export interface IListenerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Listener resource.
     */
    readonly listenerRef: ListenerReference;
}
/**
 * A reference to a Listener resource.
 *
 * @struct
 * @stability external
 */
export interface ListenerReference {
    /**
     * The Arn of the Listener resource.
     */
    readonly listenerArn: string;
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
 * Indicates that this resource can be referenced as a Rule.
 *
 * @stability experimental
 */
export interface IRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Rule resource.
     */
    readonly ruleRef: RuleReference;
}
/**
 * A reference to a Rule resource.
 *
 * @struct
 * @stability external
 */
export interface RuleReference {
    /**
     * The Arn of the Rule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a Service.
 *
 * @stability experimental
 */
export interface IServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Service resource.
     */
    readonly serviceRef: ServiceReference;
}
/**
 * A reference to a Service resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceReference {
    /**
     * The Arn of the Service resource.
     */
    readonly serviceArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceNetwork.
 *
 * @stability experimental
 */
export interface IServiceNetworkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceNetwork resource.
     */
    readonly serviceNetworkRef: ServiceNetworkReference;
}
/**
 * A reference to a ServiceNetwork resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceNetworkReference {
    /**
     * The Arn of the ServiceNetwork resource.
     */
    readonly serviceNetworkArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceNetworkServiceAssociation.
 *
 * @stability experimental
 */
export interface IServiceNetworkServiceAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceNetworkServiceAssociation resource.
     */
    readonly serviceNetworkServiceAssociationRef: ServiceNetworkServiceAssociationReference;
}
/**
 * A reference to a ServiceNetworkServiceAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceNetworkServiceAssociationReference {
    /**
     * The Arn of the ServiceNetworkServiceAssociation resource.
     */
    readonly serviceNetworkServiceAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceNetworkVpcAssociation.
 *
 * @stability experimental
 */
export interface IServiceNetworkVpcAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceNetworkVpcAssociation resource.
     */
    readonly serviceNetworkVpcAssociationRef: ServiceNetworkVpcAssociationReference;
}
/**
 * A reference to a ServiceNetworkVpcAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceNetworkVpcAssociationReference {
    /**
     * The Arn of the ServiceNetworkVpcAssociation resource.
     */
    readonly serviceNetworkVpcAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a TargetGroup.
 *
 * @stability experimental
 */
export interface ITargetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TargetGroup resource.
     */
    readonly targetGroupRef: TargetGroupReference;
}
/**
 * A reference to a TargetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface TargetGroupReference {
    /**
     * The Arn of the TargetGroup resource.
     */
    readonly targetGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a DomainVerification.
 *
 * @stability experimental
 */
export interface IDomainVerificationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainVerification resource.
     */
    readonly domainVerificationRef: DomainVerificationReference;
}
/**
 * A reference to a DomainVerification resource.
 *
 * @struct
 * @stability external
 */
export interface DomainVerificationReference {
    /**
     * The Arn of the DomainVerification resource.
     */
    readonly domainVerificationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceConfiguration.
 *
 * @stability experimental
 */
export interface IResourceConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceConfiguration resource.
     */
    readonly resourceConfigurationRef: ResourceConfigurationReference;
}
/**
 * A reference to a ResourceConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceConfigurationReference {
    /**
     * The Arn of the ResourceConfiguration resource.
     */
    readonly resourceConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceGateway.
 *
 * @stability experimental
 */
export interface IResourceGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceGateway resource.
     */
    readonly resourceGatewayRef: ResourceGatewayReference;
}
/**
 * A reference to a ResourceGateway resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceGatewayReference {
    /**
     * The Arn of the ResourceGateway resource.
     */
    readonly resourceGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceNetworkResourceAssociation.
 *
 * @stability experimental
 */
export interface IServiceNetworkResourceAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceNetworkResourceAssociation resource.
     */
    readonly serviceNetworkResourceAssociationRef: ServiceNetworkResourceAssociationReference;
}
/**
 * A reference to a ServiceNetworkResourceAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceNetworkResourceAssociationReference {
    /**
     * The Arn of the ServiceNetworkResourceAssociation resource.
     */
    readonly serviceNetworkResourceAssociationArn: string;
}
