import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ComponentType.
 *
 * @stability experimental
 */
export interface IComponentTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ComponentType resource.
     */
    readonly componentTypeRef: ComponentTypeReference;
}
/**
 * A reference to a ComponentType resource.
 *
 * @struct
 * @stability external
 */
export interface ComponentTypeReference {
    /**
     * The WorkspaceId of the ComponentType resource.
     */
    readonly workspaceId: string;
    /**
     * The ComponentTypeId of the ComponentType resource.
     */
    readonly componentTypeId: string;
    /**
     * The ARN of the ComponentType resource.
     */
    readonly componentTypeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Entity.
 *
 * @stability experimental
 */
export interface IEntityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Entity resource.
     */
    readonly entityRef: EntityReference;
}
/**
 * A reference to a Entity resource.
 *
 * @struct
 * @stability external
 */
export interface EntityReference {
    /**
     * The WorkspaceId of the Entity resource.
     */
    readonly workspaceId: string;
    /**
     * The EntityId of the Entity resource.
     */
    readonly entityId: string;
    /**
     * The ARN of the Entity resource.
     */
    readonly entityArn: string;
}
/**
 * Indicates that this resource can be referenced as a Scene.
 *
 * @stability experimental
 */
export interface ISceneRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Scene resource.
     */
    readonly sceneRef: SceneReference;
}
/**
 * A reference to a Scene resource.
 *
 * @struct
 * @stability external
 */
export interface SceneReference {
    /**
     * The WorkspaceId of the Scene resource.
     */
    readonly workspaceId: string;
    /**
     * The SceneId of the Scene resource.
     */
    readonly sceneId: string;
    /**
     * The ARN of the Scene resource.
     */
    readonly sceneArn: string;
}
/**
 * Indicates that this resource can be referenced as a SyncJob.
 *
 * @stability experimental
 */
export interface ISyncJobRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SyncJob resource.
     */
    readonly syncJobRef: SyncJobReference;
}
/**
 * A reference to a SyncJob resource.
 *
 * @struct
 * @stability external
 */
export interface SyncJobReference {
    /**
     * The WorkspaceId of the SyncJob resource.
     */
    readonly workspaceId: string;
    /**
     * The SyncSource of the SyncJob resource.
     */
    readonly syncSource: string;
    /**
     * The ARN of the SyncJob resource.
     */
    readonly syncJobArn: string;
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
     * The WorkspaceId of the Workspace resource.
     */
    readonly workspaceId: string;
    /**
     * The ARN of the Workspace resource.
     */
    readonly workspaceArn: string;
}
