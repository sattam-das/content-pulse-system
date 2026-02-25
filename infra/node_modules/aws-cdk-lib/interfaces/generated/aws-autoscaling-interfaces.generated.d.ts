import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AutoScalingGroup.
 *
 * @stability experimental
 */
export interface IAutoScalingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutoScalingGroup resource.
     */
    readonly autoScalingGroupRef: AutoScalingGroupReference;
}
/**
 * A reference to a AutoScalingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface AutoScalingGroupReference {
    /**
     * The AutoScalingGroupName of the AutoScalingGroup resource.
     */
    readonly autoScalingGroupName: string;
    /**
     * The ARN of the AutoScalingGroup resource.
     */
    readonly autoScalingGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a LaunchConfiguration.
 *
 * @stability experimental
 */
export interface ILaunchConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchConfiguration resource.
     */
    readonly launchConfigurationRef: LaunchConfigurationReference;
}
/**
 * A reference to a LaunchConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchConfigurationReference {
    /**
     * The LaunchConfigurationName of the LaunchConfiguration resource.
     */
    readonly launchConfigurationName: string;
}
/**
 * Indicates that this resource can be referenced as a LifecycleHook.
 *
 * @stability experimental
 */
export interface ILifecycleHookRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LifecycleHook resource.
     */
    readonly lifecycleHookRef: LifecycleHookReference;
}
/**
 * A reference to a LifecycleHook resource.
 *
 * @struct
 * @stability external
 */
export interface LifecycleHookReference {
    /**
     * The AutoScalingGroupName of the LifecycleHook resource.
     */
    readonly autoScalingGroupName: string;
    /**
     * The LifecycleHookName of the LifecycleHook resource.
     */
    readonly lifecycleHookName: string;
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
}
/**
 * Indicates that this resource can be referenced as a ScheduledAction.
 *
 * @stability experimental
 */
export interface IScheduledActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScheduledAction resource.
     */
    readonly scheduledActionRef: ScheduledActionReference;
}
/**
 * A reference to a ScheduledAction resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduledActionReference {
    /**
     * The ScheduledActionName of the ScheduledAction resource.
     */
    readonly scheduledActionName: string;
    /**
     * The AutoScalingGroupName of the ScheduledAction resource.
     */
    readonly autoScalingGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a WarmPool.
 *
 * @stability experimental
 */
export interface IWarmPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WarmPool resource.
     */
    readonly warmPoolRef: WarmPoolReference;
}
/**
 * A reference to a WarmPool resource.
 *
 * @struct
 * @stability external
 */
export interface WarmPoolReference {
    /**
     * The AutoScalingGroupName of the WarmPool resource.
     */
    readonly autoScalingGroupName: string;
}
