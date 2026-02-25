import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a BillingView.
 *
 * @stability experimental
 */
export interface IBillingViewRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BillingView resource.
     */
    readonly billingViewRef: BillingViewReference;
}
/**
 * A reference to a BillingView resource.
 *
 * @struct
 * @stability external
 */
export interface BillingViewReference {
    /**
     * The Arn of the BillingView resource.
     */
    readonly billingViewArn: string;
}
