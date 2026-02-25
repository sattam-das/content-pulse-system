import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Graph.
 *
 * @stability experimental
 */
export interface IGraphRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Graph resource.
     */
    readonly graphRef: GraphReference;
}
/**
 * A reference to a Graph resource.
 *
 * @struct
 * @stability external
 */
export interface GraphReference {
    /**
     * The GraphId of the Graph resource.
     */
    readonly graphId: string;
    /**
     * The ARN of the Graph resource.
     */
    readonly graphArn: string;
}
/**
 * Indicates that this resource can be referenced as a PrivateGraphEndpoint.
 *
 * @stability experimental
 */
export interface IPrivateGraphEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrivateGraphEndpoint resource.
     */
    readonly privateGraphEndpointRef: PrivateGraphEndpointReference;
}
/**
 * A reference to a PrivateGraphEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface PrivateGraphEndpointReference {
    /**
     * The PrivateGraphEndpointIdentifier of the PrivateGraphEndpoint resource.
     */
    readonly privateGraphEndpointIdentifier: string;
}
