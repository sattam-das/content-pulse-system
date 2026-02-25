import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a FirewallDomainList.
 *
 * @stability experimental
 */
export interface IFirewallDomainListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FirewallDomainList resource.
     */
    readonly firewallDomainListRef: FirewallDomainListReference;
}
/**
 * A reference to a FirewallDomainList resource.
 *
 * @struct
 * @stability external
 */
export interface FirewallDomainListReference {
    /**
     * The Id of the FirewallDomainList resource.
     */
    readonly firewallDomainListId: string;
    /**
     * The ARN of the FirewallDomainList resource.
     */
    readonly firewallDomainListArn: string;
}
/**
 * Indicates that this resource can be referenced as a FirewallRuleGroup.
 *
 * @stability experimental
 */
export interface IFirewallRuleGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FirewallRuleGroup resource.
     */
    readonly firewallRuleGroupRef: FirewallRuleGroupReference;
}
/**
 * A reference to a FirewallRuleGroup resource.
 *
 * @struct
 * @stability external
 */
export interface FirewallRuleGroupReference {
    /**
     * The Id of the FirewallRuleGroup resource.
     */
    readonly firewallRuleGroupId: string;
    /**
     * The ARN of the FirewallRuleGroup resource.
     */
    readonly firewallRuleGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a FirewallRuleGroupAssociation.
 *
 * @stability experimental
 */
export interface IFirewallRuleGroupAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FirewallRuleGroupAssociation resource.
     */
    readonly firewallRuleGroupAssociationRef: FirewallRuleGroupAssociationReference;
}
/**
 * A reference to a FirewallRuleGroupAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface FirewallRuleGroupAssociationReference {
    /**
     * The Id of the FirewallRuleGroupAssociation resource.
     */
    readonly firewallRuleGroupAssociationId: string;
    /**
     * The ARN of the FirewallRuleGroupAssociation resource.
     */
    readonly firewallRuleGroupAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a OutpostResolver.
 *
 * @stability experimental
 */
export interface IOutpostResolverRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OutpostResolver resource.
     */
    readonly outpostResolverRef: OutpostResolverReference;
}
/**
 * A reference to a OutpostResolver resource.
 *
 * @struct
 * @stability external
 */
export interface OutpostResolverReference {
    /**
     * The Id of the OutpostResolver resource.
     */
    readonly outpostResolverId: string;
    /**
     * The ARN of the OutpostResolver resource.
     */
    readonly outpostResolverArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverConfig.
 *
 * @stability experimental
 */
export interface IResolverConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverConfig resource.
     */
    readonly resolverConfigRef: ResolverConfigReference;
}
/**
 * A reference to a ResolverConfig resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverConfigReference {
    /**
     * The ResourceId of the ResolverConfig resource.
     */
    readonly resourceId: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverDNSSECConfig.
 *
 * @stability experimental
 */
export interface IResolverDNSSECConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverDNSSECConfig resource.
     */
    readonly resolverDnssecConfigRef: ResolverDNSSECConfigReference;
}
/**
 * A reference to a ResolverDNSSECConfig resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverDNSSECConfigReference {
    /**
     * The Id of the ResolverDNSSECConfig resource.
     */
    readonly resolverDnssecConfigId: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverEndpoint.
 *
 * @stability experimental
 */
export interface IResolverEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverEndpoint resource.
     */
    readonly resolverEndpointRef: ResolverEndpointReference;
}
/**
 * A reference to a ResolverEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverEndpointReference {
    /**
     * The ResolverEndpointId of the ResolverEndpoint resource.
     */
    readonly resolverEndpointId: string;
    /**
     * The ARN of the ResolverEndpoint resource.
     */
    readonly resolverEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverQueryLoggingConfig.
 *
 * @stability experimental
 */
export interface IResolverQueryLoggingConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverQueryLoggingConfig resource.
     */
    readonly resolverQueryLoggingConfigRef: ResolverQueryLoggingConfigReference;
}
/**
 * A reference to a ResolverQueryLoggingConfig resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverQueryLoggingConfigReference {
    /**
     * The Id of the ResolverQueryLoggingConfig resource.
     */
    readonly resolverQueryLoggingConfigId: string;
    /**
     * The ARN of the ResolverQueryLoggingConfig resource.
     */
    readonly resolverQueryLoggingConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverQueryLoggingConfigAssociation.
 *
 * @stability experimental
 */
export interface IResolverQueryLoggingConfigAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverQueryLoggingConfigAssociation resource.
     */
    readonly resolverQueryLoggingConfigAssociationRef: ResolverQueryLoggingConfigAssociationReference;
}
/**
 * A reference to a ResolverQueryLoggingConfigAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverQueryLoggingConfigAssociationReference {
    /**
     * The Id of the ResolverQueryLoggingConfigAssociation resource.
     */
    readonly resolverQueryLoggingConfigAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverRule.
 *
 * @stability experimental
 */
export interface IResolverRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverRule resource.
     */
    readonly resolverRuleRef: ResolverRuleReference;
}
/**
 * A reference to a ResolverRule resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverRuleReference {
    /**
     * The ResolverRuleId of the ResolverRule resource.
     */
    readonly resolverRuleId: string;
    /**
     * The ARN of the ResolverRule resource.
     */
    readonly resolverRuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResolverRuleAssociation.
 *
 * @stability experimental
 */
export interface IResolverRuleAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResolverRuleAssociation resource.
     */
    readonly resolverRuleAssociationRef: ResolverRuleAssociationReference;
}
/**
 * A reference to a ResolverRuleAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverRuleAssociationReference {
    /**
     * The ResolverRuleAssociationId of the ResolverRuleAssociation resource.
     */
    readonly resolverRuleAssociationId: string;
}
