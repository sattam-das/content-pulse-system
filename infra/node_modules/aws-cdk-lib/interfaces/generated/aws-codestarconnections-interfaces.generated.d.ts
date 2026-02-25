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
/**
 * Indicates that this resource can be referenced as a RepositoryLink.
 *
 * @stability experimental
 */
export interface IRepositoryLinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RepositoryLink resource.
     */
    readonly repositoryLinkRef: RepositoryLinkReference;
}
/**
 * A reference to a RepositoryLink resource.
 *
 * @struct
 * @stability external
 */
export interface RepositoryLinkReference {
    /**
     * The RepositoryLinkArn of the RepositoryLink resource.
     */
    readonly repositoryLinkArn: string;
}
/**
 * Indicates that this resource can be referenced as a SyncConfiguration.
 *
 * @stability experimental
 */
export interface ISyncConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SyncConfiguration resource.
     */
    readonly syncConfigurationRef: SyncConfigurationReference;
}
/**
 * A reference to a SyncConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SyncConfigurationReference {
    /**
     * The ResourceName of the SyncConfiguration resource.
     */
    readonly resourceName: string;
    /**
     * The SyncType of the SyncConfiguration resource.
     */
    readonly syncType: string;
}
