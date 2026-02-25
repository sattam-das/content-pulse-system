import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ScalingPlan.
 *
 * @stability experimental
 */
export interface IScalingPlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScalingPlan resource.
     */
    readonly scalingPlanRef: ScalingPlanReference;
}
/**
 * A reference to a ScalingPlan resource.
 *
 * @struct
 * @stability external
 */
export interface ScalingPlanReference {
    /**
     * The Id of the ScalingPlan resource.
     */
    readonly scalingPlanId: string;
}
