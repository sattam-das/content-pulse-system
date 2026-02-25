import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Namespace.
 *
 * @stability experimental
 */
export interface INamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Namespace resource.
     */
    readonly namespaceRef: NamespaceReference;
}
/**
 * A reference to a Namespace resource.
 *
 * @struct
 * @stability external
 */
export interface NamespaceReference {
    /**
     * The NamespaceName of the Namespace resource.
     */
    readonly namespaceName: string;
}
/**
 * Indicates that this resource can be referenced as a Workgroup.
 *
 * @stability experimental
 */
export interface IWorkgroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workgroup resource.
     */
    readonly workgroupRef: WorkgroupReference;
}
/**
 * A reference to a Workgroup resource.
 *
 * @struct
 * @stability external
 */
export interface WorkgroupReference {
    /**
     * The WorkgroupName of the Workgroup resource.
     */
    readonly workgroupName: string;
}
/**
 * Indicates that this resource can be referenced as a Snapshot.
 *
 * @stability experimental
 */
export interface ISnapshotRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Snapshot resource.
     */
    readonly snapshotRef: SnapshotReference;
}
/**
 * A reference to a Snapshot resource.
 *
 * @struct
 * @stability external
 */
export interface SnapshotReference {
    /**
     * The SnapshotName of the Snapshot resource.
     */
    readonly snapshotName: string;
}
