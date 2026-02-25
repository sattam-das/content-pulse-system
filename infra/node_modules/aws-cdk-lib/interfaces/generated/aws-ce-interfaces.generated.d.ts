import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AnomalyMonitor.
 *
 * @stability experimental
 */
export interface IAnomalyMonitorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnomalyMonitor resource.
     */
    readonly anomalyMonitorRef: AnomalyMonitorReference;
}
/**
 * A reference to a AnomalyMonitor resource.
 *
 * @struct
 * @stability external
 */
export interface AnomalyMonitorReference {
    /**
     * The MonitorArn of the AnomalyMonitor resource.
     */
    readonly monitorArn: string;
}
/**
 * Indicates that this resource can be referenced as a AnomalySubscription.
 *
 * @stability experimental
 */
export interface IAnomalySubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnomalySubscription resource.
     */
    readonly anomalySubscriptionRef: AnomalySubscriptionReference;
}
/**
 * A reference to a AnomalySubscription resource.
 *
 * @struct
 * @stability external
 */
export interface AnomalySubscriptionReference {
    /**
     * The SubscriptionArn of the AnomalySubscription resource.
     */
    readonly subscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a CostCategory.
 *
 * @stability experimental
 */
export interface ICostCategoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CostCategory resource.
     */
    readonly costCategoryRef: CostCategoryReference;
}
/**
 * A reference to a CostCategory resource.
 *
 * @struct
 * @stability external
 */
export interface CostCategoryReference {
    /**
     * The Arn of the CostCategory resource.
     */
    readonly costCategoryArn: string;
}
