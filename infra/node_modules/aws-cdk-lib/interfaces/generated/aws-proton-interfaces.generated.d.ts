import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a EnvironmentAccountConnection.
 *
 * @stability experimental
 */
export interface IEnvironmentAccountConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentAccountConnection resource.
     */
    readonly environmentAccountConnectionRef: EnvironmentAccountConnectionReference;
}
/**
 * A reference to a EnvironmentAccountConnection resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentAccountConnectionReference {
    /**
     * The Arn of the EnvironmentAccountConnection resource.
     */
    readonly environmentAccountConnectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a EnvironmentTemplate.
 *
 * @stability experimental
 */
export interface IEnvironmentTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentTemplate resource.
     */
    readonly environmentTemplateRef: EnvironmentTemplateReference;
}
/**
 * A reference to a EnvironmentTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentTemplateReference {
    /**
     * The Arn of the EnvironmentTemplate resource.
     */
    readonly environmentTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceTemplate.
 *
 * @stability experimental
 */
export interface IServiceTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceTemplate resource.
     */
    readonly serviceTemplateRef: ServiceTemplateReference;
}
/**
 * A reference to a ServiceTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceTemplateReference {
    /**
     * The Arn of the ServiceTemplate resource.
     */
    readonly serviceTemplateArn: string;
}
