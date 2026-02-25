import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Container.
 *
 * @stability experimental
 */
export interface IContainerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Container resource.
     */
    readonly containerRef: ContainerReference;
}
/**
 * A reference to a Container resource.
 *
 * @struct
 * @stability external
 */
export interface ContainerReference {
    /**
     * The Id of the Container resource.
     */
    readonly containerId: string;
    /**
     * The ContainerName of the Container resource.
     */
    readonly containerName: string;
}
