import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Bridge.
 *
 * @stability experimental
 */
export interface IBridgeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Bridge resource.
     */
    readonly bridgeRef: BridgeReference;
}
/**
 * A reference to a Bridge resource.
 *
 * @struct
 * @stability external
 */
export interface BridgeReference {
    /**
     * The BridgeArn of the Bridge resource.
     */
    readonly bridgeArn: string;
}
/**
 * Indicates that this resource can be referenced as a BridgeOutput.
 *
 * @stability experimental
 */
export interface IBridgeOutputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BridgeOutput resource.
     */
    readonly bridgeOutputRef: BridgeOutputReference;
}
/**
 * A reference to a BridgeOutput resource.
 *
 * @struct
 * @stability external
 */
export interface BridgeOutputReference {
    /**
     * The BridgeArn of the BridgeOutput resource.
     */
    readonly bridgeArn: string;
    /**
     * The Name of the BridgeOutput resource.
     */
    readonly bridgeOutputName: string;
}
/**
 * Indicates that this resource can be referenced as a BridgeSource.
 *
 * @stability experimental
 */
export interface IBridgeSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BridgeSource resource.
     */
    readonly bridgeSourceRef: BridgeSourceReference;
}
/**
 * A reference to a BridgeSource resource.
 *
 * @struct
 * @stability external
 */
export interface BridgeSourceReference {
    /**
     * The BridgeArn of the BridgeSource resource.
     */
    readonly bridgeArn: string;
    /**
     * The Name of the BridgeSource resource.
     */
    readonly bridgeSourceName: string;
}
/**
 * Indicates that this resource can be referenced as a Flow.
 *
 * @stability experimental
 */
export interface IFlowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Flow resource.
     */
    readonly flowRef: FlowReference;
}
/**
 * A reference to a Flow resource.
 *
 * @struct
 * @stability external
 */
export interface FlowReference {
    /**
     * The FlowArn of the Flow resource.
     */
    readonly flowArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowEntitlement.
 *
 * @stability experimental
 */
export interface IFlowEntitlementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowEntitlement resource.
     */
    readonly flowEntitlementRef: FlowEntitlementReference;
}
/**
 * A reference to a FlowEntitlement resource.
 *
 * @struct
 * @stability external
 */
export interface FlowEntitlementReference {
    /**
     * The EntitlementArn of the FlowEntitlement resource.
     */
    readonly entitlementArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowOutput.
 *
 * @stability experimental
 */
export interface IFlowOutputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowOutput resource.
     */
    readonly flowOutputRef: FlowOutputReference;
}
/**
 * A reference to a FlowOutput resource.
 *
 * @struct
 * @stability external
 */
export interface FlowOutputReference {
    /**
     * The OutputArn of the FlowOutput resource.
     */
    readonly outputArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowSource.
 *
 * @stability experimental
 */
export interface IFlowSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowSource resource.
     */
    readonly flowSourceRef: FlowSourceReference;
}
/**
 * A reference to a FlowSource resource.
 *
 * @struct
 * @stability external
 */
export interface FlowSourceReference {
    /**
     * The SourceArn of the FlowSource resource.
     */
    readonly sourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowVpcInterface.
 *
 * @stability experimental
 */
export interface IFlowVpcInterfaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowVpcInterface resource.
     */
    readonly flowVpcInterfaceRef: FlowVpcInterfaceReference;
}
/**
 * A reference to a FlowVpcInterface resource.
 *
 * @struct
 * @stability external
 */
export interface FlowVpcInterfaceReference {
    /**
     * The FlowArn of the FlowVpcInterface resource.
     */
    readonly flowArn: string;
    /**
     * The Name of the FlowVpcInterface resource.
     */
    readonly flowVpcInterfaceName: string;
}
/**
 * Indicates that this resource can be referenced as a Gateway.
 *
 * @stability experimental
 */
export interface IGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Gateway resource.
     */
    readonly gatewayRef: GatewayReference;
}
/**
 * A reference to a Gateway resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayReference {
    /**
     * The GatewayArn of the Gateway resource.
     */
    readonly gatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouterInput.
 *
 * @stability experimental
 */
export interface IRouterInputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouterInput resource.
     */
    readonly routerInputRef: RouterInputReference;
}
/**
 * A reference to a RouterInput resource.
 *
 * @struct
 * @stability external
 */
export interface RouterInputReference {
    /**
     * The Arn of the RouterInput resource.
     */
    readonly routerInputArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouterNetworkInterface.
 *
 * @stability experimental
 */
export interface IRouterNetworkInterfaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouterNetworkInterface resource.
     */
    readonly routerNetworkInterfaceRef: RouterNetworkInterfaceReference;
}
/**
 * A reference to a RouterNetworkInterface resource.
 *
 * @struct
 * @stability external
 */
export interface RouterNetworkInterfaceReference {
    /**
     * The Arn of the RouterNetworkInterface resource.
     */
    readonly routerNetworkInterfaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouterOutput.
 *
 * @stability experimental
 */
export interface IRouterOutputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouterOutput resource.
     */
    readonly routerOutputRef: RouterOutputReference;
}
/**
 * A reference to a RouterOutput resource.
 *
 * @struct
 * @stability external
 */
export interface RouterOutputReference {
    /**
     * The Arn of the RouterOutput resource.
     */
    readonly routerOutputArn: string;
}
