import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ScalableTarget.
 *
 * @stability experimental
 */
export interface IScalableTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScalableTarget resource.
     */
    readonly scalableTargetRef: ScalableTargetReference;
}
/**
 * A reference to a ScalableTarget resource.
 *
 * @struct
 * @stability external
 */
export interface ScalableTargetReference {
    /**
     * The ResourceId of the ScalableTarget resource.
     */
    readonly resourceId: string;
    /**
     * The ScalableDimension of the ScalableTarget resource.
     */
    readonly scalableDimension: string;
    /**
     * The ServiceNamespace of the ScalableTarget resource.
     */
    readonly serviceNamespace: string;
}
/**
 * Indicates that this resource can be referenced as a ScalingPolicy.
 *
 * @stability experimental
 */
export interface IScalingPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScalingPolicy resource.
     */
    readonly scalingPolicyRef: ScalingPolicyReference;
}
/**
 * A reference to a ScalingPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ScalingPolicyReference {
    /**
     * The Arn of the ScalingPolicy resource.
     */
    readonly scalingPolicyArn: string;
    /**
     * The ScalableDimension of the ScalingPolicy resource.
     */
    readonly scalableDimension: string;
}
