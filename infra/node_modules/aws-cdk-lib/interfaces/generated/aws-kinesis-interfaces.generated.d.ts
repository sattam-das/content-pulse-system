import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Stream.
 *
 * @stability experimental
 */
export interface IStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stream resource.
     */
    readonly streamRef: StreamReference;
}
/**
 * A reference to a Stream resource.
 *
 * @struct
 * @stability external
 */
export interface StreamReference {
    /**
     * The Name of the Stream resource.
     */
    readonly streamName: string;
    /**
     * The ARN of the Stream resource.
     */
    readonly streamArn: string;
}
/**
 * Indicates that this resource can be referenced as a StreamConsumer.
 *
 * @stability experimental
 */
export interface IStreamConsumerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamConsumer resource.
     */
    readonly streamConsumerRef: StreamConsumerReference;
}
/**
 * A reference to a StreamConsumer resource.
 *
 * @struct
 * @stability external
 */
export interface StreamConsumerReference {
    /**
     * The ConsumerARN of the StreamConsumer resource.
     */
    readonly consumerArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The ResourceArn of the ResourcePolicy resource.
     */
    readonly resourceArn: string;
}
