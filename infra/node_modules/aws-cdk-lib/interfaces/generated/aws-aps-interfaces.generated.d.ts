import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a RuleGroupsNamespace.
 *
 * @stability experimental
 */
export interface IRuleGroupsNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RuleGroupsNamespace resource.
     */
    readonly ruleGroupsNamespaceRef: RuleGroupsNamespaceReference;
}
/**
 * A reference to a RuleGroupsNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface RuleGroupsNamespaceReference {
    /**
     * The Arn of the RuleGroupsNamespace resource.
     */
    readonly ruleGroupsNamespaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Workspace.
 *
 * @stability experimental
 */
export interface IWorkspaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workspace resource.
     */
    readonly workspaceRef: WorkspaceReference;
}
/**
 * A reference to a Workspace resource.
 *
 * @struct
 * @stability external
 */
export interface WorkspaceReference {
    /**
     * The Arn of the Workspace resource.
     */
    readonly workspaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a AnomalyDetector.
 *
 * @stability experimental
 */
export interface IAnomalyDetectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnomalyDetector resource.
     */
    readonly anomalyDetectorRef: AnomalyDetectorReference;
}
/**
 * A reference to a AnomalyDetector resource.
 *
 * @struct
 * @stability external
 */
export interface AnomalyDetectorReference {
    /**
     * The Arn of the AnomalyDetector resource.
     */
    readonly anomalyDetectorArn: string;
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
     * The WorkspaceArn of the ResourcePolicy resource.
     */
    readonly workspaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Scraper.
 *
 * @stability experimental
 */
export interface IScraperRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Scraper resource.
     */
    readonly scraperRef: ScraperReference;
}
/**
 * A reference to a Scraper resource.
 *
 * @struct
 * @stability external
 */
export interface ScraperReference {
    /**
     * The Arn of the Scraper resource.
     */
    readonly scraperArn: string;
}
