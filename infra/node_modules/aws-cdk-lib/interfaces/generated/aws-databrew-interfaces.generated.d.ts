import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Dataset.
 *
 * @stability experimental
 */
export interface IDatasetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dataset resource.
     */
    readonly datasetRef: DatasetReference;
}
/**
 * A reference to a Dataset resource.
 *
 * @struct
 * @stability external
 */
export interface DatasetReference {
    /**
     * The Name of the Dataset resource.
     */
    readonly datasetName: string;
}
/**
 * Indicates that this resource can be referenced as a Job.
 *
 * @stability experimental
 */
export interface IJobRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Job resource.
     */
    readonly jobRef: JobReference;
}
/**
 * A reference to a Job resource.
 *
 * @struct
 * @stability external
 */
export interface JobReference {
    /**
     * The Name of the Job resource.
     */
    readonly jobName: string;
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
     * The Name of the Project resource.
     */
    readonly projectName: string;
}
/**
 * Indicates that this resource can be referenced as a Recipe.
 *
 * @stability experimental
 */
export interface IRecipeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Recipe resource.
     */
    readonly recipeRef: RecipeReference;
}
/**
 * A reference to a Recipe resource.
 *
 * @struct
 * @stability external
 */
export interface RecipeReference {
    /**
     * The Name of the Recipe resource.
     */
    readonly recipeName: string;
}
/**
 * Indicates that this resource can be referenced as a Ruleset.
 *
 * @stability experimental
 */
export interface IRulesetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Ruleset resource.
     */
    readonly rulesetRef: RulesetReference;
}
/**
 * A reference to a Ruleset resource.
 *
 * @struct
 * @stability external
 */
export interface RulesetReference {
    /**
     * The Name of the Ruleset resource.
     */
    readonly rulesetName: string;
}
/**
 * Indicates that this resource can be referenced as a Schedule.
 *
 * @stability experimental
 */
export interface IScheduleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Schedule resource.
     */
    readonly scheduleRef: ScheduleReference;
}
/**
 * A reference to a Schedule resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduleReference {
    /**
     * The Name of the Schedule resource.
     */
    readonly scheduleName: string;
}
