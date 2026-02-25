import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AutomationRule.
 *
 * @stability experimental
 */
export interface IAutomationRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutomationRule resource.
     */
    readonly automationRuleRef: AutomationRuleReference;
}
/**
 * A reference to a AutomationRule resource.
 *
 * @struct
 * @stability external
 */
export interface AutomationRuleReference {
    /**
     * The RuleArn of the AutomationRule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a Hub.
 *
 * @stability experimental
 */
export interface IHubRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Hub resource.
     */
    readonly hubRef: HubReference;
}
/**
 * A reference to a Hub resource.
 *
 * @struct
 * @stability external
 */
export interface HubReference {
    /**
     * The ARN of the Hub resource.
     */
    readonly hubArn: string;
}
/**
 * Indicates that this resource can be referenced as a Standard.
 *
 * @stability experimental
 */
export interface IStandardRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Standard resource.
     */
    readonly standardRef: StandardReference;
}
/**
 * A reference to a Standard resource.
 *
 * @struct
 * @stability external
 */
export interface StandardReference {
    /**
     * The StandardsSubscriptionArn of the Standard resource.
     */
    readonly standardsSubscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a AggregatorV2.
 *
 * @stability experimental
 */
export interface IAggregatorV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AggregatorV2 resource.
     */
    readonly aggregatorV2Ref: AggregatorV2Reference;
}
/**
 * A reference to a AggregatorV2 resource.
 *
 * @struct
 * @stability external
 */
export interface AggregatorV2Reference {
    /**
     * The AggregatorV2Arn of the AggregatorV2 resource.
     */
    readonly aggregatorV2Arn: string;
}
/**
 * Indicates that this resource can be referenced as a AutomationRuleV2.
 *
 * @stability experimental
 */
export interface IAutomationRuleV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutomationRuleV2 resource.
     */
    readonly automationRuleV2Ref: AutomationRuleV2Reference;
}
/**
 * A reference to a AutomationRuleV2 resource.
 *
 * @struct
 * @stability external
 */
export interface AutomationRuleV2Reference {
    /**
     * The RuleArn of the AutomationRuleV2 resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationPolicy.
 *
 * @stability experimental
 */
export interface IConfigurationPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationPolicy resource.
     */
    readonly configurationPolicyRef: ConfigurationPolicyReference;
}
/**
 * A reference to a ConfigurationPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationPolicyReference {
    /**
     * The Arn of the ConfigurationPolicy resource.
     */
    readonly configurationPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectorV2.
 *
 * @stability experimental
 */
export interface IConnectorV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectorV2 resource.
     */
    readonly connectorV2Ref: ConnectorV2Reference;
}
/**
 * A reference to a ConnectorV2 resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorV2Reference {
    /**
     * The ConnectorArn of the ConnectorV2 resource.
     */
    readonly connectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a DelegatedAdmin.
 *
 * @stability experimental
 */
export interface IDelegatedAdminRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DelegatedAdmin resource.
     */
    readonly delegatedAdminRef: DelegatedAdminReference;
}
/**
 * A reference to a DelegatedAdmin resource.
 *
 * @struct
 * @stability external
 */
export interface DelegatedAdminReference {
    /**
     * The DelegatedAdminIdentifier of the DelegatedAdmin resource.
     */
    readonly delegatedAdminIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a FindingAggregator.
 *
 * @stability experimental
 */
export interface IFindingAggregatorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FindingAggregator resource.
     */
    readonly findingAggregatorRef: FindingAggregatorReference;
}
/**
 * A reference to a FindingAggregator resource.
 *
 * @struct
 * @stability external
 */
export interface FindingAggregatorReference {
    /**
     * The FindingAggregatorArn of the FindingAggregator resource.
     */
    readonly findingAggregatorArn: string;
}
/**
 * Indicates that this resource can be referenced as a HubV2.
 *
 * @stability experimental
 */
export interface IHubV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HubV2 resource.
     */
    readonly hubV2Ref: HubV2Reference;
}
/**
 * A reference to a HubV2 resource.
 *
 * @struct
 * @stability external
 */
export interface HubV2Reference {
    /**
     * The HubV2Arn of the HubV2 resource.
     */
    readonly hubV2Arn: string;
}
/**
 * Indicates that this resource can be referenced as a Insight.
 *
 * @stability experimental
 */
export interface IInsightRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Insight resource.
     */
    readonly insightRef: InsightReference;
}
/**
 * A reference to a Insight resource.
 *
 * @struct
 * @stability external
 */
export interface InsightReference {
    /**
     * The InsightArn of the Insight resource.
     */
    readonly insightArn: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationConfiguration.
 *
 * @stability experimental
 */
export interface IOrganizationConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationConfiguration resource.
     */
    readonly organizationConfigurationRef: OrganizationConfigurationReference;
}
/**
 * A reference to a OrganizationConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationConfigurationReference {
    /**
     * The OrganizationConfigurationIdentifier of the OrganizationConfiguration resource.
     */
    readonly organizationConfigurationIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyAssociation.
 *
 * @stability experimental
 */
export interface IPolicyAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyAssociation resource.
     */
    readonly policyAssociationRef: PolicyAssociationReference;
}
/**
 * A reference to a PolicyAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyAssociationReference {
    /**
     * The AssociationIdentifier of the PolicyAssociation resource.
     */
    readonly associationIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a ProductSubscription.
 *
 * @stability experimental
 */
export interface IProductSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProductSubscription resource.
     */
    readonly productSubscriptionRef: ProductSubscriptionReference;
}
/**
 * A reference to a ProductSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface ProductSubscriptionReference {
    /**
     * The ProductSubscriptionArn of the ProductSubscription resource.
     */
    readonly productSubscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityControl.
 *
 * @stability experimental
 */
export interface ISecurityControlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityControl resource.
     */
    readonly securityControlRef: SecurityControlReference;
}
/**
 * A reference to a SecurityControl resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityControlReference {
    /**
     * The SecurityControlId of the SecurityControl resource.
     */
    readonly securityControlId: string;
}
