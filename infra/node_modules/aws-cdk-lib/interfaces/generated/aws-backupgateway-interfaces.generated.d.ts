import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Hypervisor.
 *
 * @stability experimental
 */
export interface IHypervisorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Hypervisor resource.
     */
    readonly hypervisorRef: HypervisorReference;
}
/**
 * A reference to a Hypervisor resource.
 *
 * @struct
 * @stability external
 */
export interface HypervisorReference {
    /**
     * The HypervisorArn of the Hypervisor resource.
     */
    readonly hypervisorArn: string;
}
