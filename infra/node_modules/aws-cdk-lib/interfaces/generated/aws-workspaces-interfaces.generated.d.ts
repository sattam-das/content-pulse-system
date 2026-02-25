import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConnectionAlias.
 *
 * @stability experimental
 */
export interface IConnectionAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectionAlias resource.
     */
    readonly connectionAliasRef: ConnectionAliasReference;
}
/**
 * A reference to a ConnectionAlias resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionAliasReference {
    /**
     * The AliasId of the ConnectionAlias resource.
     */
    readonly aliasId: string;
}
/**
 * Indicates that this resource can be referenced as a Workspace.
 *
 * @stability experimental
 */
export interface IWorkspaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workspace resource.
     */
    readonly workspaceRef: WorkspaceReference;
}
/**
 * A reference to a Workspace resource.
 *
 * @struct
 * @stability external
 */
export interface WorkspaceReference {
    /**
     * The Id of the Workspace resource.
     */
    readonly workspaceId: string;
}
/**
 * Indicates that this resource can be referenced as a WorkspacesPool.
 *
 * @stability experimental
 */
export interface IWorkspacesPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkspacesPool resource.
     */
    readonly workspacesPoolRef: WorkspacesPoolReference;
}
/**
 * A reference to a WorkspacesPool resource.
 *
 * @struct
 * @stability external
 */
export interface WorkspacesPoolReference {
    /**
     * The PoolId of the WorkspacesPool resource.
     */
    readonly poolId: string;
    /**
     * The ARN of the WorkspacesPool resource.
     */
    readonly poolArn: string;
}
