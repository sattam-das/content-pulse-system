import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccountAuditConfiguration.
 *
 * @stability experimental
 */
export interface IAccountAuditConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccountAuditConfiguration resource.
     */
    readonly accountAuditConfigurationRef: AccountAuditConfigurationReference;
}
/**
 * A reference to a AccountAuditConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface AccountAuditConfigurationReference {
    /**
     * The AccountId of the AccountAuditConfiguration resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a Authorizer.
 *
 * @stability experimental
 */
export interface IAuthorizerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Authorizer resource.
     */
    readonly authorizerRef: AuthorizerReference;
}
/**
 * A reference to a Authorizer resource.
 *
 * @struct
 * @stability external
 */
export interface AuthorizerReference {
    /**
     * The AuthorizerName of the Authorizer resource.
     */
    readonly authorizerName: string;
    /**
     * The ARN of the Authorizer resource.
     */
    readonly authorizerArn: string;
}
/**
 * Indicates that this resource can be referenced as a BillingGroup.
 *
 * @stability experimental
 */
export interface IBillingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BillingGroup resource.
     */
    readonly billingGroupRef: BillingGroupReference;
}
/**
 * A reference to a BillingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface BillingGroupReference {
    /**
     * The BillingGroupName of the BillingGroup resource.
     */
    readonly billingGroupName: string;
    /**
     * The ARN of the BillingGroup resource.
     */
    readonly billingGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a CACertificate.
 *
 * @stability experimental
 */
export interface ICACertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CACertificate resource.
     */
    readonly caCertificateRef: CACertificateReference;
}
/**
 * A reference to a CACertificate resource.
 *
 * @struct
 * @stability external
 */
export interface CACertificateReference {
    /**
     * The Id of the CACertificate resource.
     */
    readonly caCertificateId: string;
    /**
     * The ARN of the CACertificate resource.
     */
    readonly caCertificateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Certificate.
 *
 * @stability experimental
 */
export interface ICertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Certificate resource.
     */
    readonly certificateRef: CertificateReference;
}
/**
 * A reference to a Certificate resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateReference {
    /**
     * The Id of the Certificate resource.
     */
    readonly certificateId: string;
    /**
     * The ARN of the Certificate resource.
     */
    readonly certificateArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomMetric.
 *
 * @stability experimental
 */
export interface ICustomMetricRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomMetric resource.
     */
    readonly customMetricRef: CustomMetricReference;
}
/**
 * A reference to a CustomMetric resource.
 *
 * @struct
 * @stability external
 */
export interface CustomMetricReference {
    /**
     * The MetricName of the CustomMetric resource.
     */
    readonly metricName: string;
}
/**
 * Indicates that this resource can be referenced as a Dimension.
 *
 * @stability experimental
 */
export interface IDimensionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dimension resource.
     */
    readonly dimensionRef: DimensionReference;
}
/**
 * A reference to a Dimension resource.
 *
 * @struct
 * @stability external
 */
export interface DimensionReference {
    /**
     * The Name of the Dimension resource.
     */
    readonly dimensionName: string;
    /**
     * The ARN of the Dimension resource.
     */
    readonly dimensionArn: string;
}
/**
 * Indicates that this resource can be referenced as a DomainConfiguration.
 *
 * @stability experimental
 */
export interface IDomainConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainConfiguration resource.
     */
    readonly domainConfigurationRef: DomainConfigurationReference;
}
/**
 * A reference to a DomainConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface DomainConfigurationReference {
    /**
     * The DomainConfigurationName of the DomainConfiguration resource.
     */
    readonly domainConfigurationName: string;
    /**
     * The ARN of the DomainConfiguration resource.
     */
    readonly domainConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a FleetMetric.
 *
 * @stability experimental
 */
export interface IFleetMetricRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FleetMetric resource.
     */
    readonly fleetMetricRef: FleetMetricReference;
}
/**
 * A reference to a FleetMetric resource.
 *
 * @struct
 * @stability external
 */
export interface FleetMetricReference {
    /**
     * The MetricName of the FleetMetric resource.
     */
    readonly metricName: string;
}
/**
 * Indicates that this resource can be referenced as a JobTemplate.
 *
 * @stability experimental
 */
export interface IJobTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a JobTemplate resource.
     */
    readonly jobTemplateRef: JobTemplateReference;
}
/**
 * A reference to a JobTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface JobTemplateReference {
    /**
     * The JobTemplateId of the JobTemplate resource.
     */
    readonly jobTemplateId: string;
    /**
     * The ARN of the JobTemplate resource.
     */
    readonly jobTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Logging.
 *
 * @stability experimental
 */
export interface ILoggingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Logging resource.
     */
    readonly loggingRef: LoggingReference;
}
/**
 * A reference to a Logging resource.
 *
 * @struct
 * @stability external
 */
export interface LoggingReference {
    /**
     * The AccountId of the Logging resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a MitigationAction.
 *
 * @stability experimental
 */
export interface IMitigationActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MitigationAction resource.
     */
    readonly mitigationActionRef: MitigationActionReference;
}
/**
 * A reference to a MitigationAction resource.
 *
 * @struct
 * @stability external
 */
export interface MitigationActionReference {
    /**
     * The ActionName of the MitigationAction resource.
     */
    readonly actionName: string;
    /**
     * The ARN of the MitigationAction resource.
     */
    readonly mitigationActionArn: string;
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
     * The PolicyName of the Policy resource.
     */
    readonly policyName: string;
    /**
     * The ARN of the Policy resource.
     */
    readonly policyArn: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyPrincipalAttachment.
 *
 * @stability experimental
 */
export interface IPolicyPrincipalAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyPrincipalAttachment resource.
     */
    readonly policyPrincipalAttachmentRef: PolicyPrincipalAttachmentReference;
}
/**
 * A reference to a PolicyPrincipalAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyPrincipalAttachmentReference {
    /**
     * The Id of the PolicyPrincipalAttachment resource.
     */
    readonly policyPrincipalAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a ProvisioningTemplate.
 *
 * @stability experimental
 */
export interface IProvisioningTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProvisioningTemplate resource.
     */
    readonly provisioningTemplateRef: ProvisioningTemplateReference;
}
/**
 * A reference to a ProvisioningTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface ProvisioningTemplateReference {
    /**
     * The TemplateName of the ProvisioningTemplate resource.
     */
    readonly templateName: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceSpecificLogging.
 *
 * @stability experimental
 */
export interface IResourceSpecificLoggingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceSpecificLogging resource.
     */
    readonly resourceSpecificLoggingRef: ResourceSpecificLoggingReference;
}
/**
 * A reference to a ResourceSpecificLogging resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceSpecificLoggingReference {
    /**
     * The TargetId of the ResourceSpecificLogging resource.
     */
    readonly targetId: string;
}
/**
 * Indicates that this resource can be referenced as a RoleAlias.
 *
 * @stability experimental
 */
export interface IRoleAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RoleAlias resource.
     */
    readonly roleAliasRef: RoleAliasReference;
}
/**
 * A reference to a RoleAlias resource.
 *
 * @struct
 * @stability external
 */
export interface RoleAliasReference {
    /**
     * The RoleAlias of the RoleAlias resource.
     */
    readonly roleAlias: string;
    /**
     * The ARN of the RoleAlias resource.
     */
    readonly roleAliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a ScheduledAudit.
 *
 * @stability experimental
 */
export interface IScheduledAuditRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScheduledAudit resource.
     */
    readonly scheduledAuditRef: ScheduledAuditReference;
}
/**
 * A reference to a ScheduledAudit resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduledAuditReference {
    /**
     * The ScheduledAuditName of the ScheduledAudit resource.
     */
    readonly scheduledAuditName: string;
    /**
     * The ARN of the ScheduledAudit resource.
     */
    readonly scheduledAuditArn: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityProfile.
 *
 * @stability experimental
 */
export interface ISecurityProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityProfile resource.
     */
    readonly securityProfileRef: SecurityProfileReference;
}
/**
 * A reference to a SecurityProfile resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityProfileReference {
    /**
     * The SecurityProfileName of the SecurityProfile resource.
     */
    readonly securityProfileName: string;
    /**
     * The ARN of the SecurityProfile resource.
     */
    readonly securityProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a SoftwarePackage.
 *
 * @stability experimental
 */
export interface ISoftwarePackageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SoftwarePackage resource.
     */
    readonly softwarePackageRef: SoftwarePackageReference;
}
/**
 * A reference to a SoftwarePackage resource.
 *
 * @struct
 * @stability external
 */
export interface SoftwarePackageReference {
    /**
     * The PackageName of the SoftwarePackage resource.
     */
    readonly packageName: string;
}
/**
 * Indicates that this resource can be referenced as a SoftwarePackageVersion.
 *
 * @stability experimental
 */
export interface ISoftwarePackageVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SoftwarePackageVersion resource.
     */
    readonly softwarePackageVersionRef: SoftwarePackageVersionReference;
}
/**
 * A reference to a SoftwarePackageVersion resource.
 *
 * @struct
 * @stability external
 */
export interface SoftwarePackageVersionReference {
    /**
     * The PackageName of the SoftwarePackageVersion resource.
     */
    readonly packageName: string;
    /**
     * The VersionName of the SoftwarePackageVersion resource.
     */
    readonly versionName: string;
}
/**
 * Indicates that this resource can be referenced as a Thing.
 *
 * @stability experimental
 */
export interface IThingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Thing resource.
     */
    readonly thingRef: ThingReference;
}
/**
 * A reference to a Thing resource.
 *
 * @struct
 * @stability external
 */
export interface ThingReference {
    /**
     * The ThingName of the Thing resource.
     */
    readonly thingName: string;
    /**
     * The ARN of the Thing resource.
     */
    readonly thingArn: string;
}
/**
 * Indicates that this resource can be referenced as a ThingGroup.
 *
 * @stability experimental
 */
export interface IThingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ThingGroup resource.
     */
    readonly thingGroupRef: ThingGroupReference;
}
/**
 * A reference to a ThingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ThingGroupReference {
    /**
     * The ThingGroupName of the ThingGroup resource.
     */
    readonly thingGroupName: string;
    /**
     * The ARN of the ThingGroup resource.
     */
    readonly thingGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ThingPrincipalAttachment.
 *
 * @stability experimental
 */
export interface IThingPrincipalAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ThingPrincipalAttachment resource.
     */
    readonly thingPrincipalAttachmentRef: ThingPrincipalAttachmentReference;
}
/**
 * A reference to a ThingPrincipalAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface ThingPrincipalAttachmentReference {
    /**
     * The Id of the ThingPrincipalAttachment resource.
     */
    readonly thingPrincipalAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a ThingType.
 *
 * @stability experimental
 */
export interface IThingTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ThingType resource.
     */
    readonly thingTypeRef: ThingTypeReference;
}
/**
 * A reference to a ThingType resource.
 *
 * @struct
 * @stability external
 */
export interface ThingTypeReference {
    /**
     * The ThingTypeName of the ThingType resource.
     */
    readonly thingTypeName: string;
    /**
     * The ARN of the ThingType resource.
     */
    readonly thingTypeArn: string;
}
/**
 * Indicates that this resource can be referenced as a TopicRule.
 *
 * @stability experimental
 */
export interface ITopicRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TopicRule resource.
     */
    readonly topicRuleRef: TopicRuleReference;
}
/**
 * A reference to a TopicRule resource.
 *
 * @struct
 * @stability external
 */
export interface TopicRuleReference {
    /**
     * The RuleName of the TopicRule resource.
     */
    readonly ruleName: string;
    /**
     * The ARN of the TopicRule resource.
     */
    readonly topicRuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a TopicRuleDestination.
 *
 * @stability experimental
 */
export interface ITopicRuleDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TopicRuleDestination resource.
     */
    readonly topicRuleDestinationRef: TopicRuleDestinationReference;
}
/**
 * A reference to a TopicRuleDestination resource.
 *
 * @struct
 * @stability external
 */
export interface TopicRuleDestinationReference {
    /**
     * The Arn of the TopicRuleDestination resource.
     */
    readonly topicRuleDestinationArn: string;
}
/**
 * Indicates that this resource can be referenced as a CertificateProvider.
 *
 * @stability experimental
 */
export interface ICertificateProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CertificateProvider resource.
     */
    readonly certificateProviderRef: CertificateProviderReference;
}
/**
 * A reference to a CertificateProvider resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateProviderReference {
    /**
     * The CertificateProviderName of the CertificateProvider resource.
     */
    readonly certificateProviderName: string;
    /**
     * The ARN of the CertificateProvider resource.
     */
    readonly certificateProviderArn: string;
}
/**
 * Indicates that this resource can be referenced as a Command.
 *
 * @stability experimental
 */
export interface ICommandRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Command resource.
     */
    readonly commandRef: CommandReference;
}
/**
 * A reference to a Command resource.
 *
 * @struct
 * @stability external
 */
export interface CommandReference {
    /**
     * The CommandId of the Command resource.
     */
    readonly commandId: string;
    /**
     * The ARN of the Command resource.
     */
    readonly commandArn: string;
}
/**
 * Indicates that this resource can be referenced as a EncryptionConfiguration.
 *
 * @stability experimental
 */
export interface IEncryptionConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EncryptionConfiguration resource.
     */
    readonly encryptionConfigurationRef: EncryptionConfigurationReference;
}
/**
 * A reference to a EncryptionConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface EncryptionConfigurationReference {
    /**
     * The AccountId of the EncryptionConfiguration resource.
     */
    readonly accountId: string;
}
