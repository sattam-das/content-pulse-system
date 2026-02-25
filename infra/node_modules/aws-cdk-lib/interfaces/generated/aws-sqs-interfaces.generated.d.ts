import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Queue.
 *
 * @stability experimental
 */
export interface IQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Queue resource.
     */
    readonly queueRef: QueueReference;
}
/**
 * A reference to a Queue resource.
 *
 * @struct
 * @stability external
 */
export interface QueueReference {
    /**
     * The QueueUrl of the Queue resource.
     */
    readonly queueUrl: string;
    /**
     * The ARN of the Queue resource.
     */
    readonly queueArn: string;
}
/**
 * Indicates that this resource can be referenced as a QueueInlinePolicy.
 *
 * @stability experimental
 */
export interface IQueueInlinePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QueueInlinePolicy resource.
     */
    readonly queueInlinePolicyRef: QueueInlinePolicyReference;
}
/**
 * A reference to a QueueInlinePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface QueueInlinePolicyReference {
    /**
     * The Queue of the QueueInlinePolicy resource.
     */
    readonly queue: string;
}
/**
 * Indicates that this resource can be referenced as a QueuePolicy.
 *
 * @stability experimental
 */
export interface IQueuePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QueuePolicy resource.
     */
    readonly queuePolicyRef: QueuePolicyReference;
}
/**
 * A reference to a QueuePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface QueuePolicyReference {
    /**
     * The Id of the QueuePolicy resource.
     */
    readonly queuePolicyId: string;
}
