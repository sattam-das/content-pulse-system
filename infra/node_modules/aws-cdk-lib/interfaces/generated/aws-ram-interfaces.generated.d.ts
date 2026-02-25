import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Permission.
 *
 * @stability experimental
 */
export interface IPermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Permission resource.
     */
    readonly permissionRef: PermissionReference;
}
/**
 * A reference to a Permission resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionReference {
    /**
     * The Arn of the Permission resource.
     */
    readonly permissionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceShare.
 *
 * @stability experimental
 */
export interface IResourceShareRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceShare resource.
     */
    readonly resourceShareRef: ResourceShareReference;
}
/**
 * A reference to a ResourceShare resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceShareReference {
    /**
     * The Arn of the ResourceShare resource.
     */
    readonly resourceShareArn: string;
}
