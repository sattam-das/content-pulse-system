import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a LifecyclePolicy.
 *
 * @stability experimental
 */
export interface ILifecyclePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LifecyclePolicy resource.
     */
    readonly lifecyclePolicyRef: LifecyclePolicyReference;
}
/**
 * A reference to a LifecyclePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface LifecyclePolicyReference {
    /**
     * The Id of the LifecyclePolicy resource.
     */
    readonly lifecyclePolicyId: string;
    /**
     * The ARN of the LifecyclePolicy resource.
     */
    readonly lifecyclePolicyArn: string;
}
