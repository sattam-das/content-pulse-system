import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The Arn of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a StreamGroup.
 *
 * @stability experimental
 */
export interface IStreamGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamGroup resource.
     */
    readonly streamGroupRef: StreamGroupReference;
}
/**
 * A reference to a StreamGroup resource.
 *
 * @struct
 * @stability external
 */
export interface StreamGroupReference {
    /**
     * The Arn of the StreamGroup resource.
     */
    readonly streamGroupArn: string;
}
