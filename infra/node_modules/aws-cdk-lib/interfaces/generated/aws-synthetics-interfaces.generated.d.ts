import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Canary.
 *
 * @stability experimental
 */
export interface ICanaryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Canary resource.
     */
    readonly canaryRef: CanaryReference;
}
/**
 * A reference to a Canary resource.
 *
 * @struct
 * @stability external
 */
export interface CanaryReference {
    /**
     * The Name of the Canary resource.
     */
    readonly canaryName: string;
}
/**
 * Indicates that this resource can be referenced as a Group.
 *
 * @stability experimental
 */
export interface IGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Group resource.
     */
    readonly groupRef: GroupReference;
}
/**
 * A reference to a Group resource.
 *
 * @struct
 * @stability external
 */
export interface GroupReference {
    /**
     * The Name of the Group resource.
     */
    readonly groupName: string;
}
