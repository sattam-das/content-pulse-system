import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Firewall.
 *
 * @stability experimental
 */
export interface IFirewallRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Firewall resource.
     */
    readonly firewallRef: FirewallReference;
}
/**
 * A reference to a Firewall resource.
 *
 * @struct
 * @stability external
 */
export interface FirewallReference {
    /**
     * The FirewallArn of the Firewall resource.
     */
    readonly firewallArn: string;
}
/**
 * Indicates that this resource can be referenced as a FirewallPolicy.
 *
 * @stability experimental
 */
export interface IFirewallPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FirewallPolicy resource.
     */
    readonly firewallPolicyRef: FirewallPolicyReference;
}
/**
 * A reference to a FirewallPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface FirewallPolicyReference {
    /**
     * The FirewallPolicyArn of the FirewallPolicy resource.
     */
    readonly firewallPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a LoggingConfiguration.
 *
 * @stability experimental
 */
export interface ILoggingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoggingConfiguration resource.
     */
    readonly loggingConfigurationRef: LoggingConfigurationReference;
}
/**
 * A reference to a LoggingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface LoggingConfigurationReference {
    /**
     * The FirewallArn of the LoggingConfiguration resource.
     */
    readonly firewallArn: string;
}
/**
 * Indicates that this resource can be referenced as a RuleGroup.
 *
 * @stability experimental
 */
export interface IRuleGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RuleGroup resource.
     */
    readonly ruleGroupRef: RuleGroupReference;
}
/**
 * A reference to a RuleGroup resource.
 *
 * @struct
 * @stability external
 */
export interface RuleGroupReference {
    /**
     * The RuleGroupArn of the RuleGroup resource.
     */
    readonly ruleGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a TLSInspectionConfiguration.
 *
 * @stability experimental
 */
export interface ITLSInspectionConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TLSInspectionConfiguration resource.
     */
    readonly tlsInspectionConfigurationRef: TLSInspectionConfigurationReference;
}
/**
 * A reference to a TLSInspectionConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface TLSInspectionConfigurationReference {
    /**
     * The TLSInspectionConfigurationArn of the TLSInspectionConfiguration resource.
     */
    readonly tlsInspectionConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a VpcEndpointAssociation.
 *
 * @stability experimental
 */
export interface IVpcEndpointAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcEndpointAssociation resource.
     */
    readonly vpcEndpointAssociationRef: VpcEndpointAssociationReference;
}
/**
 * A reference to a VpcEndpointAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface VpcEndpointAssociationReference {
    /**
     * The VpcEndpointAssociationArn of the VpcEndpointAssociation resource.
     */
    readonly vpcEndpointAssociationArn: string;
}
