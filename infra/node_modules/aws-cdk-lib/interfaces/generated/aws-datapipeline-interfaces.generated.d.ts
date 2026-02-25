import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Pipeline.
 *
 * @stability experimental
 */
export interface IPipelineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pipeline resource.
     */
    readonly pipelineRef: PipelineReference;
}
/**
 * A reference to a Pipeline resource.
 *
 * @struct
 * @stability external
 */
export interface PipelineReference {
    /**
     * The PipelineId of the Pipeline resource.
     */
    readonly pipelineId: string;
}
