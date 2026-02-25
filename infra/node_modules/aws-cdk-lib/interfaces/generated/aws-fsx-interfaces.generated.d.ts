import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DataRepositoryAssociation.
 *
 * @stability experimental
 */
export interface IDataRepositoryAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataRepositoryAssociation resource.
     */
    readonly dataRepositoryAssociationRef: DataRepositoryAssociationReference;
}
/**
 * A reference to a DataRepositoryAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface DataRepositoryAssociationReference {
    /**
     * The AssociationId of the DataRepositoryAssociation resource.
     */
    readonly associationId: string;
}
/**
 * Indicates that this resource can be referenced as a FileSystem.
 *
 * @stability experimental
 */
export interface IFileSystemRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FileSystem resource.
     */
    readonly fileSystemRef: FileSystemReference;
}
/**
 * A reference to a FileSystem resource.
 *
 * @struct
 * @stability external
 */
export interface FileSystemReference {
    /**
     * The Id of the FileSystem resource.
     */
    readonly fileSystemId: string;
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
     * The Id of the Snapshot resource.
     */
    readonly snapshotId: string;
}
/**
 * Indicates that this resource can be referenced as a StorageVirtualMachine.
 *
 * @stability experimental
 */
export interface IStorageVirtualMachineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StorageVirtualMachine resource.
     */
    readonly storageVirtualMachineRef: StorageVirtualMachineReference;
}
/**
 * A reference to a StorageVirtualMachine resource.
 *
 * @struct
 * @stability external
 */
export interface StorageVirtualMachineReference {
    /**
     * The StorageVirtualMachineId of the StorageVirtualMachine resource.
     */
    readonly storageVirtualMachineId: string;
}
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
 * Indicates that this resource can be referenced as a S3AccessPointAttachment.
 *
 * @stability experimental
 */
export interface IS3AccessPointAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a S3AccessPointAttachment resource.
     */
    readonly s3AccessPointAttachmentRef: S3AccessPointAttachmentReference;
}
/**
 * A reference to a S3AccessPointAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface S3AccessPointAttachmentReference {
    /**
     * The Name of the S3AccessPointAttachment resource.
     */
    readonly s3AccessPointAttachmentName: string;
}
