import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Pipe.
 *
 * @stability experimental
 */
export interface IPipeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pipe resource.
     */
    readonly pipeRef: PipeReference;
}
/**
 * A reference to a Pipe resource.
 *
 * @struct
 * @stability external
 */
export interface PipeReference {
    /**
     * The Name of the Pipe resource.
     */
    readonly pipeName: string;
    /**
     * The ARN of the Pipe resource.
     */
    readonly pipeArn: string;
}
