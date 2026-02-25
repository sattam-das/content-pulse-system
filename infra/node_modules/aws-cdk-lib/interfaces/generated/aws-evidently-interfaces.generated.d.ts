import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Experiment.
 *
 * @stability experimental
 */
export interface IExperimentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Experiment resource.
     */
    readonly experimentRef: ExperimentReference;
}
/**
 * A reference to a Experiment resource.
 *
 * @struct
 * @stability external
 */
export interface ExperimentReference {
    /**
     * The Arn of the Experiment resource.
     */
    readonly experimentArn: string;
}
/**
 * Indicates that this resource can be referenced as a Feature.
 *
 * @stability experimental
 */
export interface IFeatureRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Feature resource.
     */
    readonly featureRef: FeatureReference;
}
/**
 * A reference to a Feature resource.
 *
 * @struct
 * @stability external
 */
export interface FeatureReference {
    /**
     * The Arn of the Feature resource.
     */
    readonly featureArn: string;
}
/**
 * Indicates that this resource can be referenced as a Launch.
 *
 * @stability experimental
 */
export interface ILaunchRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Launch resource.
     */
    readonly launchRef: LaunchReference;
}
/**
 * A reference to a Launch resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchReference {
    /**
     * The Arn of the Launch resource.
     */
    readonly launchArn: string;
}
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The Arn of the Project resource.
     */
    readonly projectArn: string;
}
/**
 * Indicates that this resource can be referenced as a Segment.
 *
 * @stability experimental
 */
export interface ISegmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Segment resource.
     */
    readonly segmentRef: SegmentReference;
}
/**
 * A reference to a Segment resource.
 *
 * @struct
 * @stability external
 */
export interface SegmentReference {
    /**
     * The Arn of the Segment resource.
     */
    readonly segmentArn: string;
}
