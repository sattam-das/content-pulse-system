import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a EnvironmentEC2.
 *
 * @stability experimental
 */
export interface IEnvironmentEC2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentEC2 resource.
     */
    readonly environmentEc2Ref: EnvironmentEC2Reference;
}
/**
 * A reference to a EnvironmentEC2 resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentEC2Reference {
    /**
     * The Id of the EnvironmentEC2 resource.
     */
    readonly environmentEc2Id: string;
    /**
     * The ARN of the EnvironmentEC2 resource.
     */
    readonly environmentEc2Arn: string;
}
