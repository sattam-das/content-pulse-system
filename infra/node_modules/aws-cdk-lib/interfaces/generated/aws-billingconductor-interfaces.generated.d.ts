import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a BillingGroup.
 *
 * @stability experimental
 */
export interface IBillingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BillingGroup resource.
     */
    readonly billingGroupRef: BillingGroupReference;
}
/**
 * A reference to a BillingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface BillingGroupReference {
    /**
     * The Arn of the BillingGroup resource.
     */
    readonly billingGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomLineItem.
 *
 * @stability experimental
 */
export interface ICustomLineItemRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomLineItem resource.
     */
    readonly customLineItemRef: CustomLineItemReference;
}
/**
 * A reference to a CustomLineItem resource.
 *
 * @struct
 * @stability external
 */
export interface CustomLineItemReference {
    /**
     * The Arn of the CustomLineItem resource.
     */
    readonly customLineItemArn: string;
}
/**
 * Indicates that this resource can be referenced as a PricingPlan.
 *
 * @stability experimental
 */
export interface IPricingPlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PricingPlan resource.
     */
    readonly pricingPlanRef: PricingPlanReference;
}
/**
 * A reference to a PricingPlan resource.
 *
 * @struct
 * @stability external
 */
export interface PricingPlanReference {
    /**
     * The Arn of the PricingPlan resource.
     */
    readonly pricingPlanArn: string;
}
/**
 * Indicates that this resource can be referenced as a PricingRule.
 *
 * @stability experimental
 */
export interface IPricingRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PricingRule resource.
     */
    readonly pricingRuleRef: PricingRuleReference;
}
/**
 * A reference to a PricingRule resource.
 *
 * @struct
 * @stability external
 */
export interface PricingRuleReference {
    /**
     * The Arn of the PricingRule resource.
     */
    readonly pricingRuleArn: string;
}
