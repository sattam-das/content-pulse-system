import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a GatewayRoute.
 *
 * @stability experimental
 */
export interface IGatewayRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GatewayRoute resource.
     */
    readonly gatewayRouteRef: GatewayRouteReference;
}
/**
 * A reference to a GatewayRoute resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayRouteReference {
    /**
     * The Arn of the GatewayRoute resource.
     */
    readonly gatewayRouteArn: string;
}
/**
 * Indicates that this resource can be referenced as a Mesh.
 *
 * @stability experimental
 */
export interface IMeshRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Mesh resource.
     */
    readonly meshRef: MeshReference;
}
/**
 * A reference to a Mesh resource.
 *
 * @struct
 * @stability external
 */
export interface MeshReference {
    /**
     * The Arn of the Mesh resource.
     */
    readonly meshArn: string;
}
/**
 * Indicates that this resource can be referenced as a Route.
 *
 * @stability experimental
 */
export interface IRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Route resource.
     */
    readonly routeRef: RouteReference;
}
/**
 * A reference to a Route resource.
 *
 * @struct
 * @stability external
 */
export interface RouteReference {
    /**
     * The Arn of the Route resource.
     */
    readonly routeArn: string;
}
/**
 * Indicates that this resource can be referenced as a VirtualGateway.
 *
 * @stability experimental
 */
export interface IVirtualGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VirtualGateway resource.
     */
    readonly virtualGatewayRef: VirtualGatewayReference;
}
/**
 * A reference to a VirtualGateway resource.
 *
 * @struct
 * @stability external
 */
export interface VirtualGatewayReference {
    /**
     * The Arn of the VirtualGateway resource.
     */
    readonly virtualGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a VirtualNode.
 *
 * @stability experimental
 */
export interface IVirtualNodeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VirtualNode resource.
     */
    readonly virtualNodeRef: VirtualNodeReference;
}
/**
 * A reference to a VirtualNode resource.
 *
 * @struct
 * @stability external
 */
export interface VirtualNodeReference {
    /**
     * The Arn of the VirtualNode resource.
     */
    readonly virtualNodeArn: string;
}
/**
 * Indicates that this resource can be referenced as a VirtualRouter.
 *
 * @stability experimental
 */
export interface IVirtualRouterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VirtualRouter resource.
     */
    readonly virtualRouterRef: VirtualRouterReference;
}
/**
 * A reference to a VirtualRouter resource.
 *
 * @struct
 * @stability external
 */
export interface VirtualRouterReference {
    /**
     * The Arn of the VirtualRouter resource.
     */
    readonly virtualRouterArn: string;
}
/**
 * Indicates that this resource can be referenced as a VirtualService.
 *
 * @stability experimental
 */
export interface IVirtualServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VirtualService resource.
     */
    readonly virtualServiceRef: VirtualServiceReference;
}
/**
 * A reference to a VirtualService resource.
 *
 * @struct
 * @stability external
 */
export interface VirtualServiceReference {
    /**
     * The Arn of the VirtualService resource.
     */
    readonly virtualServiceArn: string;
}
