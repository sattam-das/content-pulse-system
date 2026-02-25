import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The SecretId of the ResourcePolicy resource.
     */
    readonly secretId: string;
}
/**
 * Indicates that this resource can be referenced as a RotationSchedule.
 *
 * @stability experimental
 */
export interface IRotationScheduleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RotationSchedule resource.
     */
    readonly rotationScheduleRef: RotationScheduleReference;
}
/**
 * A reference to a RotationSchedule resource.
 *
 * @struct
 * @stability external
 */
export interface RotationScheduleReference {
    /**
     * The Id of the RotationSchedule resource.
     */
    readonly rotationScheduleId: string;
}
/**
 * Indicates that this resource can be referenced as a Secret.
 *
 * @stability experimental
 */
export interface ISecretRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Secret resource.
     */
    readonly secretRef: SecretReference;
}
/**
 * A reference to a Secret resource.
 *
 * @struct
 * @stability external
 */
export interface SecretReference {
    /**
     * The Id of the Secret resource.
     */
    readonly secretId: string;
}
/**
 * Indicates that this resource can be referenced as a SecretTargetAttachment.
 *
 * @stability experimental
 */
export interface ISecretTargetAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecretTargetAttachment resource.
     */
    readonly secretTargetAttachmentRef: SecretTargetAttachmentReference;
}
/**
 * A reference to a SecretTargetAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface SecretTargetAttachmentReference {
    /**
     * The SecretId of the SecretTargetAttachment resource.
     */
    readonly secretId: string;
}
