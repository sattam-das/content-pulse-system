import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Volume.
 *
 * @stability experimental
 */
export interface IVolumeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Volume resource.
     */
    readonly volumeRef: VolumeReference;
}
/**
 * A reference to a Volume resource.
 *
 * @struct
 * @stability external
 */
export interface VolumeReference {
    /**
     * The VolumeId of the Volume resource.
     */
    readonly volumeId: string;
}
/**
 * Indicates that this resource can be referenced as a VolumeAssociation.
 *
 * @stability experimental
 */
export interface IVolumeAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VolumeAssociation resource.
     */
    readonly volumeAssociationRef: VolumeAssociationReference;
}
/**
 * A reference to a VolumeAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface VolumeAssociationReference {
    /**
     * The WorkspaceInstanceId of the VolumeAssociation resource.
     */
    readonly workspaceInstanceId: string;
    /**
     * The VolumeId of the VolumeAssociation resource.
     */
    readonly volumeId: string;
    /**
     * The Device of the VolumeAssociation resource.
     */
    readonly device: string;
}
/**
 * Indicates that this resource can be referenced as a WorkspaceInstance.
 *
 * @stability experimental
 */
export interface IWorkspaceInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkspaceInstance resource.
     */
    readonly workspaceInstanceRef: WorkspaceInstanceReference;
}
/**
 * A reference to a WorkspaceInstance resource.
 *
 * @struct
 * @stability external
 */
export interface WorkspaceInstanceReference {
    /**
     * The WorkspaceInstanceId of the WorkspaceInstance resource.
     */
    readonly workspaceInstanceId: string;
}
