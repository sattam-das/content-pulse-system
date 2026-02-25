import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The ClusterArn of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a ControlPanel.
 *
 * @stability experimental
 */
export interface IControlPanelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ControlPanel resource.
     */
    readonly controlPanelRef: ControlPanelReference;
}
/**
 * A reference to a ControlPanel resource.
 *
 * @struct
 * @stability external
 */
export interface ControlPanelReference {
    /**
     * The ControlPanelArn of the ControlPanel resource.
     */
    readonly controlPanelArn: string;
}
/**
 * Indicates that this resource can be referenced as a RoutingControl.
 *
 * @stability experimental
 */
export interface IRoutingControlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RoutingControl resource.
     */
    readonly routingControlRef: RoutingControlReference;
}
/**
 * A reference to a RoutingControl resource.
 *
 * @struct
 * @stability external
 */
export interface RoutingControlReference {
    /**
     * The RoutingControlArn of the RoutingControl resource.
     */
    readonly routingControlArn: string;
}
/**
 * Indicates that this resource can be referenced as a SafetyRule.
 *
 * @stability experimental
 */
export interface ISafetyRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SafetyRule resource.
     */
    readonly safetyRuleRef: SafetyRuleReference;
}
/**
 * A reference to a SafetyRule resource.
 *
 * @struct
 * @stability external
 */
export interface SafetyRuleReference {
    /**
     * The SafetyRuleArn of the SafetyRule resource.
     */
    readonly safetyRuleArn: string;
}
