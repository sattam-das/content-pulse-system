import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a App.
 *
 * @stability experimental
 */
export interface IAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a App resource.
     */
    readonly appRef: AppReference;
}
/**
 * A reference to a App resource.
 *
 * @struct
 * @stability external
 */
export interface AppReference {
    /**
     * The AppArn of the App resource.
     */
    readonly appArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResiliencyPolicy.
 *
 * @stability experimental
 */
export interface IResiliencyPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResiliencyPolicy resource.
     */
    readonly resiliencyPolicyRef: ResiliencyPolicyReference;
}
/**
 * A reference to a ResiliencyPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResiliencyPolicyReference {
    /**
     * The PolicyArn of the ResiliencyPolicy resource.
     */
    readonly policyArn: string;
}
