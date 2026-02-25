import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
    /**
     * The ARN of the Schedule resource.
     */
    readonly scheduleArn: string;
}
/**
 * Indicates that this resource can be referenced as a ScheduleGroup.
 *
 * @stability experimental
 */
export interface IScheduleGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScheduleGroup resource.
     */
    readonly scheduleGroupRef: ScheduleGroupReference;
}
/**
 * A reference to a ScheduleGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduleGroupReference {
    /**
     * The Name of the ScheduleGroup resource.
     */
    readonly scheduleGroupName: string;
    /**
     * The ARN of the ScheduleGroup resource.
     */
    readonly scheduleGroupArn: string;
}
