import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Link.
 *
 * @stability experimental
 */
export interface ILinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Link resource.
     */
    readonly linkRef: LinkReference;
}
/**
 * A reference to a Link resource.
 *
 * @struct
 * @stability external
 */
export interface LinkReference {
    /**
     * The Arn of the Link resource.
     */
    readonly linkArn: string;
}
/**
 * Indicates that this resource can be referenced as a Sink.
 *
 * @stability experimental
 */
export interface ISinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Sink resource.
     */
    readonly sinkRef: SinkReference;
}
/**
 * A reference to a Sink resource.
 *
 * @struct
 * @stability external
 */
export interface SinkReference {
    /**
     * The Arn of the Sink resource.
     */
    readonly sinkArn: string;
}
