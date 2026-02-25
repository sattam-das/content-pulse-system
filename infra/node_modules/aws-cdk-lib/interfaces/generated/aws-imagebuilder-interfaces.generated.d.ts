import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Component.
 *
 * @stability experimental
 */
export interface IComponentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Component resource.
     */
    readonly componentRef: ComponentReference;
}
/**
 * A reference to a Component resource.
 *
 * @struct
 * @stability external
 */
export interface ComponentReference {
    /**
     * The Arn of the Component resource.
     */
    readonly componentArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContainerRecipe.
 *
 * @stability experimental
 */
export interface IContainerRecipeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContainerRecipe resource.
     */
    readonly containerRecipeRef: ContainerRecipeReference;
}
/**
 * A reference to a ContainerRecipe resource.
 *
 * @struct
 * @stability external
 */
export interface ContainerRecipeReference {
    /**
     * The Arn of the ContainerRecipe resource.
     */
    readonly containerRecipeArn: string;
}
/**
 * Indicates that this resource can be referenced as a DistributionConfiguration.
 *
 * @stability experimental
 */
export interface IDistributionConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DistributionConfiguration resource.
     */
    readonly distributionConfigurationRef: DistributionConfigurationReference;
}
/**
 * A reference to a DistributionConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface DistributionConfigurationReference {
    /**
     * The Arn of the DistributionConfiguration resource.
     */
    readonly distributionConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Image.
 *
 * @stability experimental
 */
export interface IImageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Image resource.
     */
    readonly imageRef: ImageReference;
}
/**
 * A reference to a Image resource.
 *
 * @struct
 * @stability external
 */
export interface ImageReference {
    /**
     * The Arn of the Image resource.
     */
    readonly imageArn: string;
}
/**
 * Indicates that this resource can be referenced as a ImagePipeline.
 *
 * @stability experimental
 */
export interface IImagePipelineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ImagePipeline resource.
     */
    readonly imagePipelineRef: ImagePipelineReference;
}
/**
 * A reference to a ImagePipeline resource.
 *
 * @struct
 * @stability external
 */
export interface ImagePipelineReference {
    /**
     * The Arn of the ImagePipeline resource.
     */
    readonly imagePipelineArn: string;
}
/**
 * Indicates that this resource can be referenced as a ImageRecipe.
 *
 * @stability experimental
 */
export interface IImageRecipeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ImageRecipe resource.
     */
    readonly imageRecipeRef: ImageRecipeReference;
}
/**
 * A reference to a ImageRecipe resource.
 *
 * @struct
 * @stability external
 */
export interface ImageRecipeReference {
    /**
     * The Arn of the ImageRecipe resource.
     */
    readonly imageRecipeArn: string;
}
/**
 * Indicates that this resource can be referenced as a InfrastructureConfiguration.
 *
 * @stability experimental
 */
export interface IInfrastructureConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InfrastructureConfiguration resource.
     */
    readonly infrastructureConfigurationRef: InfrastructureConfigurationReference;
}
/**
 * A reference to a InfrastructureConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface InfrastructureConfigurationReference {
    /**
     * The Arn of the InfrastructureConfiguration resource.
     */
    readonly infrastructureConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LifecyclePolicy.
 *
 * @stability experimental
 */
export interface ILifecyclePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LifecyclePolicy resource.
     */
    readonly lifecyclePolicyRef: LifecyclePolicyReference;
}
/**
 * A reference to a LifecyclePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface LifecyclePolicyReference {
    /**
     * The Arn of the LifecyclePolicy resource.
     */
    readonly lifecyclePolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a Workflow.
 *
 * @stability experimental
 */
export interface IWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workflow resource.
     */
    readonly workflowRef: WorkflowReference;
}
/**
 * A reference to a Workflow resource.
 *
 * @struct
 * @stability external
 */
export interface WorkflowReference {
    /**
     * The Arn of the Workflow resource.
     */
    readonly workflowArn: string;
}
