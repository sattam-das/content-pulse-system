import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Activity.
 *
 * @stability experimental
 */
export interface IActivityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Activity resource.
     */
    readonly activityRef: ActivityReference;
}
/**
 * A reference to a Activity resource.
 *
 * @struct
 * @stability external
 */
export interface ActivityReference {
    /**
     * The Arn of the Activity resource.
     */
    readonly activityArn: string;
}
/**
 * Indicates that this resource can be referenced as a StateMachine.
 *
 * @stability experimental
 */
export interface IStateMachineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StateMachine resource.
     */
    readonly stateMachineRef: StateMachineReference;
}
/**
 * A reference to a StateMachine resource.
 *
 * @struct
 * @stability external
 */
export interface StateMachineReference {
    /**
     * The Arn of the StateMachine resource.
     */
    readonly stateMachineArn: string;
}
/**
 * Indicates that this resource can be referenced as a StateMachineAlias.
 *
 * @stability experimental
 */
export interface IStateMachineAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StateMachineAlias resource.
     */
    readonly stateMachineAliasRef: StateMachineAliasReference;
}
/**
 * A reference to a StateMachineAlias resource.
 *
 * @struct
 * @stability external
 */
export interface StateMachineAliasReference {
    /**
     * The Arn of the StateMachineAlias resource.
     */
    readonly stateMachineAliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a StateMachineVersion.
 *
 * @stability experimental
 */
export interface IStateMachineVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StateMachineVersion resource.
     */
    readonly stateMachineVersionRef: StateMachineVersionReference;
}
/**
 * A reference to a StateMachineVersion resource.
 *
 * @struct
 * @stability external
 */
export interface StateMachineVersionReference {
    /**
     * The Arn of the StateMachineVersion resource.
     */
    readonly stateMachineVersionArn: string;
}
