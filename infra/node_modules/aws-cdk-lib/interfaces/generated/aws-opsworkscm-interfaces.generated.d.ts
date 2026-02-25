import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Server.
 *
 * @stability experimental
 */
export interface IServerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Server resource.
     */
    readonly serverRef: ServerReference;
}
/**
 * A reference to a Server resource.
 *
 * @struct
 * @stability external
 */
export interface ServerReference {
    /**
     * The ARN of the Server resource.
     */
    readonly serverArn: string;
}
