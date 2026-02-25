import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessPoint.
 *
 * @stability experimental
 */
export interface IAccessPointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessPoint resource.
     */
    readonly accessPointRef: AccessPointReference;
}
/**
 * A reference to a AccessPoint resource.
 *
 * @struct
 * @stability external
 */
export interface AccessPointReference {
    /**
     * The AccessPointId of the AccessPoint resource.
     */
    readonly accessPointId: string;
    /**
     * The ARN of the AccessPoint resource.
     */
    readonly accessPointArn: string;
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
     * The FileSystemId of the FileSystem resource.
     */
    readonly fileSystemId: string;
    /**
     * The ARN of the FileSystem resource.
     */
    readonly fileSystemArn: string;
}
/**
 * Indicates that this resource can be referenced as a MountTarget.
 *
 * @stability experimental
 */
export interface IMountTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MountTarget resource.
     */
    readonly mountTargetRef: MountTargetReference;
}
/**
 * A reference to a MountTarget resource.
 *
 * @struct
 * @stability external
 */
export interface MountTargetReference {
    /**
     * The Id of the MountTarget resource.
     */
    readonly mountTargetId: string;
}
