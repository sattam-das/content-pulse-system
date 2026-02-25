import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Association.
 *
 * @stability experimental
 */
export interface IAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Association resource.
     */
    readonly associationRef: AssociationReference;
}
/**
 * A reference to a Association resource.
 *
 * @struct
 * @stability external
 */
export interface AssociationReference {
    /**
     * The AssociationId of the Association resource.
     */
    readonly associationId: string;
}
/**
 * Indicates that this resource can be referenced as a Document.
 *
 * @stability experimental
 */
export interface IDocumentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Document resource.
     */
    readonly documentRef: DocumentReference;
}
/**
 * A reference to a Document resource.
 *
 * @struct
 * @stability external
 */
export interface DocumentReference {
    /**
     * The Name of the Document resource.
     */
    readonly documentName: string;
}
/**
 * Indicates that this resource can be referenced as a MaintenanceWindow.
 *
 * @stability experimental
 */
export interface IMaintenanceWindowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MaintenanceWindow resource.
     */
    readonly maintenanceWindowRef: MaintenanceWindowReference;
}
/**
 * A reference to a MaintenanceWindow resource.
 *
 * @struct
 * @stability external
 */
export interface MaintenanceWindowReference {
    /**
     * The Id of the MaintenanceWindow resource.
     */
    readonly maintenanceWindowId: string;
}
/**
 * Indicates that this resource can be referenced as a MaintenanceWindowTarget.
 *
 * @stability experimental
 */
export interface IMaintenanceWindowTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MaintenanceWindowTarget resource.
     */
    readonly maintenanceWindowTargetRef: MaintenanceWindowTargetReference;
}
/**
 * A reference to a MaintenanceWindowTarget resource.
 *
 * @struct
 * @stability external
 */
export interface MaintenanceWindowTargetReference {
    /**
     * The WindowId of the MaintenanceWindowTarget resource.
     */
    readonly windowId: string;
    /**
     * The WindowTargetId of the MaintenanceWindowTarget resource.
     */
    readonly windowTargetId: string;
}
/**
 * Indicates that this resource can be referenced as a MaintenanceWindowTask.
 *
 * @stability experimental
 */
export interface IMaintenanceWindowTaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MaintenanceWindowTask resource.
     */
    readonly maintenanceWindowTaskRef: MaintenanceWindowTaskReference;
}
/**
 * A reference to a MaintenanceWindowTask resource.
 *
 * @struct
 * @stability external
 */
export interface MaintenanceWindowTaskReference {
    /**
     * The WindowId of the MaintenanceWindowTask resource.
     */
    readonly windowId: string;
    /**
     * The WindowTaskId of the MaintenanceWindowTask resource.
     */
    readonly windowTaskId: string;
}
/**
 * Indicates that this resource can be referenced as a Parameter.
 *
 * @stability experimental
 */
export interface IParameterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Parameter resource.
     */
    readonly parameterRef: ParameterReference;
}
/**
 * A reference to a Parameter resource.
 *
 * @struct
 * @stability external
 */
export interface ParameterReference {
    /**
     * The Name of the Parameter resource.
     */
    readonly parameterName: string;
}
/**
 * Indicates that this resource can be referenced as a PatchBaseline.
 *
 * @stability experimental
 */
export interface IPatchBaselineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PatchBaseline resource.
     */
    readonly patchBaselineRef: PatchBaselineReference;
}
/**
 * A reference to a PatchBaseline resource.
 *
 * @struct
 * @stability external
 */
export interface PatchBaselineReference {
    /**
     * The Id of the PatchBaseline resource.
     */
    readonly patchBaselineId: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceDataSync.
 *
 * @stability experimental
 */
export interface IResourceDataSyncRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceDataSync resource.
     */
    readonly resourceDataSyncRef: ResourceDataSyncReference;
}
/**
 * A reference to a ResourceDataSync resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceDataSyncReference {
    /**
     * The SyncName of the ResourceDataSync resource.
     */
    readonly syncName: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The PolicyId of the ResourcePolicy resource.
     */
    readonly policyId: string;
    /**
     * The ResourceArn of the ResourcePolicy resource.
     */
    readonly resourceArn: string;
}
