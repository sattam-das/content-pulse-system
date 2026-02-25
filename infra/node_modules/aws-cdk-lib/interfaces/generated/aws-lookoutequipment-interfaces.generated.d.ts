import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a InferenceScheduler.
 *
 * @stability experimental
 */
export interface IInferenceSchedulerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InferenceScheduler resource.
     */
    readonly inferenceSchedulerRef: InferenceSchedulerReference;
}
/**
 * A reference to a InferenceScheduler resource.
 *
 * @struct
 * @stability external
 */
export interface InferenceSchedulerReference {
    /**
     * The InferenceSchedulerName of the InferenceScheduler resource.
     */
    readonly inferenceSchedulerName: string;
    /**
     * The ARN of the InferenceScheduler resource.
     */
    readonly inferenceSchedulerArn: string;
}
