import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a OrganizationCentralizationRule.
 *
 * @stability experimental
 */
export interface IOrganizationCentralizationRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationCentralizationRule resource.
     */
    readonly organizationCentralizationRuleRef: OrganizationCentralizationRuleReference;
}
/**
 * A reference to a OrganizationCentralizationRule resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationCentralizationRuleReference {
    /**
     * The RuleArn of the OrganizationCentralizationRule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationTelemetryRule.
 *
 * @stability experimental
 */
export interface IOrganizationTelemetryRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationTelemetryRule resource.
     */
    readonly organizationTelemetryRuleRef: OrganizationTelemetryRuleReference;
}
/**
 * A reference to a OrganizationTelemetryRule resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationTelemetryRuleReference {
    /**
     * The RuleArn of the OrganizationTelemetryRule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a S3TableIntegration.
 *
 * @stability experimental
 */
export interface IS3TableIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a S3TableIntegration resource.
     */
    readonly s3TableIntegrationRef: S3TableIntegrationReference;
}
/**
 * A reference to a S3TableIntegration resource.
 *
 * @struct
 * @stability external
 */
export interface S3TableIntegrationReference {
    /**
     * The Arn of the S3TableIntegration resource.
     */
    readonly s3TableIntegrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a TelemetryPipelines.
 *
 * @stability experimental
 */
export interface ITelemetryPipelinesRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TelemetryPipelines resource.
     */
    readonly telemetryPipelinesRef: TelemetryPipelinesReference;
}
/**
 * A reference to a TelemetryPipelines resource.
 *
 * @struct
 * @stability external
 */
export interface TelemetryPipelinesReference {
    /**
     * The PipelineIdentifier of the TelemetryPipelines resource.
     */
    readonly pipelineIdentifier: string;
    /**
     * The ARN of the TelemetryPipelines resource.
     */
    readonly telemetryPipelinesArn: string;
}
/**
 * Indicates that this resource can be referenced as a TelemetryRule.
 *
 * @stability experimental
 */
export interface ITelemetryRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TelemetryRule resource.
     */
    readonly telemetryRuleRef: TelemetryRuleReference;
}
/**
 * A reference to a TelemetryRule resource.
 *
 * @struct
 * @stability external
 */
export interface TelemetryRuleReference {
    /**
     * The RuleArn of the TelemetryRule resource.
     */
    readonly ruleArn: string;
}
