import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Subscription.
 *
 * @stability experimental
 */
export interface ISubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Subscription resource.
     */
    readonly subscriptionRef: SubscriptionReference;
}
/**
 * A reference to a Subscription resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriptionReference {
    /**
     * The Arn of the Subscription resource.
     */
    readonly subscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Topic.
 *
 * @stability experimental
 */
export interface ITopicRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Topic resource.
     */
    readonly topicRef: TopicReference;
}
/**
 * A reference to a Topic resource.
 *
 * @struct
 * @stability external
 */
export interface TopicReference {
    /**
     * The TopicArn of the Topic resource.
     */
    readonly topicArn: string;
}
/**
 * Indicates that this resource can be referenced as a TopicInlinePolicy.
 *
 * @stability experimental
 */
export interface ITopicInlinePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TopicInlinePolicy resource.
     */
    readonly topicInlinePolicyRef: TopicInlinePolicyReference;
}
/**
 * A reference to a TopicInlinePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface TopicInlinePolicyReference {
    /**
     * The TopicArn of the TopicInlinePolicy resource.
     */
    readonly topicArn: string;
}
/**
 * Indicates that this resource can be referenced as a TopicPolicy.
 *
 * @stability experimental
 */
export interface ITopicPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TopicPolicy resource.
     */
    readonly topicPolicyRef: TopicPolicyReference;
}
/**
 * A reference to a TopicPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface TopicPolicyReference {
    /**
     * The Id of the TopicPolicy resource.
     */
    readonly topicPolicyId: string;
}
