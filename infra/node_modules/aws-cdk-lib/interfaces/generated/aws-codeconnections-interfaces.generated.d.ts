import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Connection.
 *
 * @stability experimental
 */
export interface IConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connection resource.
     */
    readonly connectionRef: ConnectionReference;
}
/**
 * A reference to a Connection resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionReference {
    /**
     * The ConnectionArn of the Connection resource.
     */
    readonly connectionArn: string;
}
