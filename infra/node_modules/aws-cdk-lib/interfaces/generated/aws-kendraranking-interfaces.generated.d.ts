import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ExecutionPlan.
 *
 * @stability experimental
 */
export interface IExecutionPlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ExecutionPlan resource.
     */
    readonly executionPlanRef: ExecutionPlanReference;
}
/**
 * A reference to a ExecutionPlan resource.
 *
 * @struct
 * @stability external
 */
export interface ExecutionPlanReference {
    /**
     * The Id of the ExecutionPlan resource.
     */
    readonly executionPlanId: string;
    /**
     * The ARN of the ExecutionPlan resource.
     */
    readonly executionPlanArn: string;
}
