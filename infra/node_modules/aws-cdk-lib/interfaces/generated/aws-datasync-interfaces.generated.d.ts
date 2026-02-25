import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Agent.
 *
 * @stability experimental
 */
export interface IAgentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Agent resource.
     */
    readonly agentRef: AgentReference;
}
/**
 * A reference to a Agent resource.
 *
 * @struct
 * @stability external
 */
export interface AgentReference {
    /**
     * The AgentArn of the Agent resource.
     */
    readonly agentArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationAzureBlob.
 *
 * @stability experimental
 */
export interface ILocationAzureBlobRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationAzureBlob resource.
     */
    readonly locationAzureBlobRef: LocationAzureBlobReference;
}
/**
 * A reference to a LocationAzureBlob resource.
 *
 * @struct
 * @stability external
 */
export interface LocationAzureBlobReference {
    /**
     * The LocationArn of the LocationAzureBlob resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationEFS.
 *
 * @stability experimental
 */
export interface ILocationEFSRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationEFS resource.
     */
    readonly locationEfsRef: LocationEFSReference;
}
/**
 * A reference to a LocationEFS resource.
 *
 * @struct
 * @stability external
 */
export interface LocationEFSReference {
    /**
     * The LocationArn of the LocationEFS resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationFSxLustre.
 *
 * @stability experimental
 */
export interface ILocationFSxLustreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationFSxLustre resource.
     */
    readonly locationFSxLustreRef: LocationFSxLustreReference;
}
/**
 * A reference to a LocationFSxLustre resource.
 *
 * @struct
 * @stability external
 */
export interface LocationFSxLustreReference {
    /**
     * The LocationArn of the LocationFSxLustre resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationFSxONTAP.
 *
 * @stability experimental
 */
export interface ILocationFSxONTAPRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationFSxONTAP resource.
     */
    readonly locationFSxOntapRef: LocationFSxONTAPReference;
}
/**
 * A reference to a LocationFSxONTAP resource.
 *
 * @struct
 * @stability external
 */
export interface LocationFSxONTAPReference {
    /**
     * The LocationArn of the LocationFSxONTAP resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationFSxOpenZFS.
 *
 * @stability experimental
 */
export interface ILocationFSxOpenZFSRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationFSxOpenZFS resource.
     */
    readonly locationFSxOpenZfsRef: LocationFSxOpenZFSReference;
}
/**
 * A reference to a LocationFSxOpenZFS resource.
 *
 * @struct
 * @stability external
 */
export interface LocationFSxOpenZFSReference {
    /**
     * The LocationArn of the LocationFSxOpenZFS resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationFSxWindows.
 *
 * @stability experimental
 */
export interface ILocationFSxWindowsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationFSxWindows resource.
     */
    readonly locationFSxWindowsRef: LocationFSxWindowsReference;
}
/**
 * A reference to a LocationFSxWindows resource.
 *
 * @struct
 * @stability external
 */
export interface LocationFSxWindowsReference {
    /**
     * The LocationArn of the LocationFSxWindows resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationHDFS.
 *
 * @stability experimental
 */
export interface ILocationHDFSRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationHDFS resource.
     */
    readonly locationHdfsRef: LocationHDFSReference;
}
/**
 * A reference to a LocationHDFS resource.
 *
 * @struct
 * @stability external
 */
export interface LocationHDFSReference {
    /**
     * The LocationArn of the LocationHDFS resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationNFS.
 *
 * @stability experimental
 */
export interface ILocationNFSRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationNFS resource.
     */
    readonly locationNfsRef: LocationNFSReference;
}
/**
 * A reference to a LocationNFS resource.
 *
 * @struct
 * @stability external
 */
export interface LocationNFSReference {
    /**
     * The LocationArn of the LocationNFS resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationObjectStorage.
 *
 * @stability experimental
 */
export interface ILocationObjectStorageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationObjectStorage resource.
     */
    readonly locationObjectStorageRef: LocationObjectStorageReference;
}
/**
 * A reference to a LocationObjectStorage resource.
 *
 * @struct
 * @stability external
 */
export interface LocationObjectStorageReference {
    /**
     * The LocationArn of the LocationObjectStorage resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationS3.
 *
 * @stability experimental
 */
export interface ILocationS3Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationS3 resource.
     */
    readonly locationS3Ref: LocationS3Reference;
}
/**
 * A reference to a LocationS3 resource.
 *
 * @struct
 * @stability external
 */
export interface LocationS3Reference {
    /**
     * The LocationArn of the LocationS3 resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocationSMB.
 *
 * @stability experimental
 */
export interface ILocationSMBRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocationSMB resource.
     */
    readonly locationSmbRef: LocationSMBReference;
}
/**
 * A reference to a LocationSMB resource.
 *
 * @struct
 * @stability external
 */
export interface LocationSMBReference {
    /**
     * The LocationArn of the LocationSMB resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Task.
 *
 * @stability experimental
 */
export interface ITaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Task resource.
     */
    readonly taskRef: TaskReference;
}
/**
 * A reference to a Task resource.
 *
 * @struct
 * @stability external
 */
export interface TaskReference {
    /**
     * The TaskArn of the Task resource.
     */
    readonly taskArn: string;
}
