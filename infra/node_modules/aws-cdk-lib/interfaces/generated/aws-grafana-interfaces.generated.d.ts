import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
