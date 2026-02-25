import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ComputeEnvironment.
 *
 * @stability experimental
 */
export interface IComputeEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ComputeEnvironment resource.
     */
    readonly computeEnvironmentRef: ComputeEnvironmentReference;
}
/**
 * A reference to a ComputeEnvironment resource.
 *
 * @struct
 * @stability external
 */
export interface ComputeEnvironmentReference {
    /**
     * The ComputeEnvironmentArn of the ComputeEnvironment resource.
     */
    readonly computeEnvironmentArn: string;
}
/**
 * Indicates that this resource can be referenced as a JobDefinition.
 *
 * @stability experimental
 */
export interface IJobDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a JobDefinition resource.
     */
    readonly jobDefinitionRef: JobDefinitionReference;
}
/**
 * A reference to a JobDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface JobDefinitionReference {
    /**
     * The JobDefinitionArn of the JobDefinition resource.
     */
    readonly jobDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a JobQueue.
 *
 * @stability experimental
 */
export interface IJobQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a JobQueue resource.
     */
    readonly jobQueueRef: JobQueueReference;
}
/**
 * A reference to a JobQueue resource.
 *
 * @struct
 * @stability external
 */
export interface JobQueueReference {
    /**
     * The JobQueueArn of the JobQueue resource.
     */
    readonly jobQueueArn: string;
}
/**
 * Indicates that this resource can be referenced as a SchedulingPolicy.
 *
 * @stability experimental
 */
export interface ISchedulingPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SchedulingPolicy resource.
     */
    readonly schedulingPolicyRef: SchedulingPolicyReference;
}
/**
 * A reference to a SchedulingPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface SchedulingPolicyReference {
    /**
     * The Arn of the SchedulingPolicy resource.
     */
    readonly schedulingPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConsumableResource.
 *
 * @stability experimental
 */
export interface IConsumableResourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConsumableResource resource.
     */
    readonly consumableResourceRef: ConsumableResourceReference;
}
/**
 * A reference to a ConsumableResource resource.
 *
 * @struct
 * @stability external
 */
export interface ConsumableResourceReference {
    /**
     * The ConsumableResourceArn of the ConsumableResource resource.
     */
    readonly consumableResourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceEnvironment.
 *
 * @stability experimental
 */
export interface IServiceEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceEnvironment resource.
     */
    readonly serviceEnvironmentRef: ServiceEnvironmentReference;
}
/**
 * A reference to a ServiceEnvironment resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceEnvironmentReference {
    /**
     * The ServiceEnvironmentArn of the ServiceEnvironment resource.
     */
    readonly serviceEnvironmentArn: string;
}
