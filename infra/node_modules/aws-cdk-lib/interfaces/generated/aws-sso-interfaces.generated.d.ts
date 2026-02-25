import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Assignment.
 *
 * @stability experimental
 */
export interface IAssignmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Assignment resource.
     */
    readonly assignmentRef: AssignmentReference;
}
/**
 * A reference to a Assignment resource.
 *
 * @struct
 * @stability external
 */
export interface AssignmentReference {
    /**
     * The InstanceArn of the Assignment resource.
     */
    readonly instanceArn: string;
    /**
     * The TargetId of the Assignment resource.
     */
    readonly targetId: string;
    /**
     * The TargetType of the Assignment resource.
     */
    readonly targetType: string;
    /**
     * The PermissionSetArn of the Assignment resource.
     */
    readonly permissionSetArn: string;
    /**
     * The PrincipalType of the Assignment resource.
     */
    readonly principalType: string;
    /**
     * The PrincipalId of the Assignment resource.
     */
    readonly principalId: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceAccessControlAttributeConfiguration.
 *
 * @stability experimental
 */
export interface IInstanceAccessControlAttributeConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceAccessControlAttributeConfiguration resource.
     */
    readonly instanceAccessControlAttributeConfigurationRef: InstanceAccessControlAttributeConfigurationReference;
}
/**
 * A reference to a InstanceAccessControlAttributeConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceAccessControlAttributeConfigurationReference {
    /**
     * The InstanceArn of the InstanceAccessControlAttributeConfiguration resource.
     */
    readonly instanceArn: string;
}
/**
 * Indicates that this resource can be referenced as a PermissionSet.
 *
 * @stability experimental
 */
export interface IPermissionSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PermissionSet resource.
     */
    readonly permissionSetRef: PermissionSetReference;
}
/**
 * A reference to a PermissionSet resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionSetReference {
    /**
     * The InstanceArn of the PermissionSet resource.
     */
    readonly instanceArn: string;
    /**
     * The PermissionSetArn of the PermissionSet resource.
     */
    readonly permissionSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The ApplicationArn of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationAssignment.
 *
 * @stability experimental
 */
export interface IApplicationAssignmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationAssignment resource.
     */
    readonly applicationAssignmentRef: ApplicationAssignmentReference;
}
/**
 * A reference to a ApplicationAssignment resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationAssignmentReference {
    /**
     * The ApplicationArn of the ApplicationAssignment resource.
     */
    readonly applicationArn: string;
    /**
     * The PrincipalType of the ApplicationAssignment resource.
     */
    readonly principalType: string;
    /**
     * The PrincipalId of the ApplicationAssignment resource.
     */
    readonly principalId: string;
}
/**
 * Indicates that this resource can be referenced as a Instance.
 *
 * @stability experimental
 */
export interface IInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Instance resource.
     */
    readonly instanceRef: InstanceReference;
}
/**
 * A reference to a Instance resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceReference {
    /**
     * The InstanceArn of the Instance resource.
     */
    readonly instanceArn: string;
}
