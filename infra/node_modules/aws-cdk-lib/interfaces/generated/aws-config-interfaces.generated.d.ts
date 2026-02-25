import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AggregationAuthorization.
 *
 * @stability experimental
 */
export interface IAggregationAuthorizationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AggregationAuthorization resource.
     */
    readonly aggregationAuthorizationRef: AggregationAuthorizationReference;
}
/**
 * A reference to a AggregationAuthorization resource.
 *
 * @struct
 * @stability external
 */
export interface AggregationAuthorizationReference {
    /**
     * The AuthorizedAccountId of the AggregationAuthorization resource.
     */
    readonly authorizedAccountId: string;
    /**
     * The AuthorizedAwsRegion of the AggregationAuthorization resource.
     */
    readonly authorizedAwsRegion: string;
    /**
     * The ARN of the AggregationAuthorization resource.
     */
    readonly aggregationAuthorizationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigRule.
 *
 * @stability experimental
 */
export interface IConfigRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigRule resource.
     */
    readonly configRuleRef: ConfigRuleReference;
}
/**
 * A reference to a ConfigRule resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigRuleReference {
    /**
     * The ConfigRuleName of the ConfigRule resource.
     */
    readonly configRuleName: string;
    /**
     * The ARN of the ConfigRule resource.
     */
    readonly configRuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationAggregator.
 *
 * @stability experimental
 */
export interface IConfigurationAggregatorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationAggregator resource.
     */
    readonly configurationAggregatorRef: ConfigurationAggregatorReference;
}
/**
 * A reference to a ConfigurationAggregator resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationAggregatorReference {
    /**
     * The ConfigurationAggregatorName of the ConfigurationAggregator resource.
     */
    readonly configurationAggregatorName: string;
    /**
     * The ARN of the ConfigurationAggregator resource.
     */
    readonly configurationAggregatorArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationRecorder.
 *
 * @stability experimental
 */
export interface IConfigurationRecorderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationRecorder resource.
     */
    readonly configurationRecorderRef: ConfigurationRecorderReference;
}
/**
 * A reference to a ConfigurationRecorder resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationRecorderReference {
    /**
     * The Id of the ConfigurationRecorder resource.
     */
    readonly configurationRecorderId: string;
}
/**
 * Indicates that this resource can be referenced as a ConformancePack.
 *
 * @stability experimental
 */
export interface IConformancePackRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConformancePack resource.
     */
    readonly conformancePackRef: ConformancePackReference;
}
/**
 * A reference to a ConformancePack resource.
 *
 * @struct
 * @stability external
 */
export interface ConformancePackReference {
    /**
     * The ConformancePackName of the ConformancePack resource.
     */
    readonly conformancePackName: string;
}
/**
 * Indicates that this resource can be referenced as a DeliveryChannel.
 *
 * @stability experimental
 */
export interface IDeliveryChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeliveryChannel resource.
     */
    readonly deliveryChannelRef: DeliveryChannelReference;
}
/**
 * A reference to a DeliveryChannel resource.
 *
 * @struct
 * @stability external
 */
export interface DeliveryChannelReference {
    /**
     * The Id of the DeliveryChannel resource.
     */
    readonly deliveryChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationConfigRule.
 *
 * @stability experimental
 */
export interface IOrganizationConfigRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationConfigRule resource.
     */
    readonly organizationConfigRuleRef: OrganizationConfigRuleReference;
}
/**
 * A reference to a OrganizationConfigRule resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationConfigRuleReference {
    /**
     * The Id of the OrganizationConfigRule resource.
     */
    readonly organizationConfigRuleId: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationConformancePack.
 *
 * @stability experimental
 */
export interface IOrganizationConformancePackRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationConformancePack resource.
     */
    readonly organizationConformancePackRef: OrganizationConformancePackReference;
}
/**
 * A reference to a OrganizationConformancePack resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationConformancePackReference {
    /**
     * The OrganizationConformancePackName of the OrganizationConformancePack resource.
     */
    readonly organizationConformancePackName: string;
}
/**
 * Indicates that this resource can be referenced as a RemediationConfiguration.
 *
 * @stability experimental
 */
export interface IRemediationConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RemediationConfiguration resource.
     */
    readonly remediationConfigurationRef: RemediationConfigurationReference;
}
/**
 * A reference to a RemediationConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface RemediationConfigurationReference {
    /**
     * The Id of the RemediationConfiguration resource.
     */
    readonly remediationConfigurationId: string;
}
/**
 * Indicates that this resource can be referenced as a StoredQuery.
 *
 * @stability experimental
 */
export interface IStoredQueryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StoredQuery resource.
     */
    readonly storedQueryRef: StoredQueryReference;
}
/**
 * A reference to a StoredQuery resource.
 *
 * @struct
 * @stability external
 */
export interface StoredQueryReference {
    /**
     * The QueryName of the StoredQuery resource.
     */
    readonly queryName: string;
}
