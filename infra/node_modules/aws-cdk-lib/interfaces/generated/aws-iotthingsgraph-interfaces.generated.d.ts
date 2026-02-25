import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a FlowTemplate.
 *
 * @stability experimental
 */
export interface IFlowTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowTemplate resource.
     */
    readonly flowTemplateRef: FlowTemplateReference;
}
/**
 * A reference to a FlowTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface FlowTemplateReference {
    /**
     * The Id of the FlowTemplate resource.
     */
    readonly flowTemplateId: string;
}
