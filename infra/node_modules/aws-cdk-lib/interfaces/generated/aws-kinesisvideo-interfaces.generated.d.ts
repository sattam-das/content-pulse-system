import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a SignalingChannel.
 *
 * @stability experimental
 */
export interface ISignalingChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SignalingChannel resource.
     */
    readonly signalingChannelRef: SignalingChannelReference;
}
/**
 * A reference to a SignalingChannel resource.
 *
 * @struct
 * @stability external
 */
export interface SignalingChannelReference {
    /**
     * The Name of the SignalingChannel resource.
     */
    readonly signalingChannelName: string;
    /**
     * The ARN of the SignalingChannel resource.
     */
    readonly signalingChannelArn: string;
}
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
