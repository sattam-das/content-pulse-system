import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a LoadBalancer.
 *
 * @stability experimental
 */
export interface ILoadBalancerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoadBalancer resource.
     */
    readonly loadBalancerRef: LoadBalancerReference;
}
/**
 * A reference to a LoadBalancer resource.
 *
 * @struct
 * @stability external
 */
export interface LoadBalancerReference {
    /**
     * The LoadBalancerName of the LoadBalancer resource.
     */
    readonly loadBalancerName: string;
}
