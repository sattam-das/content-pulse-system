import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessKey.
 *
 * @stability experimental
 */
export interface IAccessKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessKey resource.
     */
    readonly accessKeyRef: AccessKeyReference;
}
/**
 * A reference to a AccessKey resource.
 *
 * @struct
 * @stability external
 */
export interface AccessKeyReference {
    /**
     * The Id of the AccessKey resource.
     */
    readonly accessKeyId: string;
}
/**
 * Indicates that this resource can be referenced as a Group.
 *
 * @stability experimental
 */
export interface IGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Group resource.
     */
    readonly groupRef: GroupReference;
}
/**
 * A reference to a Group resource.
 *
 * @struct
 * @stability external
 */
export interface GroupReference {
    /**
     * The GroupName of the Group resource.
     */
    readonly groupName: string;
    /**
     * The ARN of the Group resource.
     */
    readonly groupArn: string;
}
/**
 * Indicates that this resource can be referenced as a GroupPolicy.
 *
 * @stability experimental
 */
export interface IGroupPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GroupPolicy resource.
     */
    readonly groupPolicyRef: GroupPolicyReference;
}
/**
 * A reference to a GroupPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface GroupPolicyReference {
    /**
     * The PolicyName of the GroupPolicy resource.
     */
    readonly policyName: string;
    /**
     * The GroupName of the GroupPolicy resource.
     */
    readonly groupName: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceProfile.
 *
 * @stability experimental
 */
export interface IInstanceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceProfile resource.
     */
    readonly instanceProfileRef: InstanceProfileReference;
}
/**
 * A reference to a InstanceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceProfileReference {
    /**
     * The InstanceProfileName of the InstanceProfile resource.
     */
    readonly instanceProfileName: string;
    /**
     * The ARN of the InstanceProfile resource.
     */
    readonly instanceProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a ManagedPolicy.
 *
 * @stability experimental
 */
export interface IManagedPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ManagedPolicy resource.
     */
    readonly managedPolicyRef: ManagedPolicyReference;
}
/**
 * A reference to a ManagedPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ManagedPolicyReference {
    /**
     * The PolicyArn of the ManagedPolicy resource.
     */
    readonly policyArn: string;
}
/**
 * Indicates that this resource can be referenced as a OIDCProvider.
 *
 * @stability experimental
 */
export interface IOIDCProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OIDCProvider resource.
     */
    readonly oidcProviderRef: OIDCProviderReference;
}
/**
 * A reference to a OIDCProvider resource.
 *
 * @struct
 * @stability external
 */
export interface OIDCProviderReference {
    /**
     * The Arn of the OIDCProvider resource.
     */
    readonly oidcProviderArn: string;
}
/**
 * Indicates that this resource can be referenced as a Policy.
 *
 * @stability experimental
 */
export interface IPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Policy resource.
     */
    readonly policyRef: PolicyReference;
}
/**
 * A reference to a Policy resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyReference {
    /**
     * The Id of the Policy resource.
     */
    readonly policyId: string;
}
/**
 * Indicates that this resource can be referenced as a Role.
 *
 * @stability experimental
 */
export interface IRoleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Role resource.
     */
    readonly roleRef: RoleReference;
}
/**
 * A reference to a Role resource.
 *
 * @struct
 * @stability external
 */
export interface RoleReference {
    /**
     * The RoleName of the Role resource.
     */
    readonly roleName: string;
    /**
     * The ARN of the Role resource.
     */
    readonly roleArn: string;
}
/**
 * Indicates that this resource can be referenced as a RolePolicy.
 *
 * @stability experimental
 */
export interface IRolePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RolePolicy resource.
     */
    readonly rolePolicyRef: RolePolicyReference;
}
/**
 * A reference to a RolePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface RolePolicyReference {
    /**
     * The PolicyName of the RolePolicy resource.
     */
    readonly policyName: string;
    /**
     * The RoleName of the RolePolicy resource.
     */
    readonly roleName: string;
}
/**
 * Indicates that this resource can be referenced as a SAMLProvider.
 *
 * @stability experimental
 */
export interface ISAMLProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SAMLProvider resource.
     */
    readonly samlProviderRef: SAMLProviderReference;
}
/**
 * A reference to a SAMLProvider resource.
 *
 * @struct
 * @stability external
 */
export interface SAMLProviderReference {
    /**
     * The Arn of the SAMLProvider resource.
     */
    readonly samlProviderArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServerCertificate.
 *
 * @stability experimental
 */
export interface IServerCertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServerCertificate resource.
     */
    readonly serverCertificateRef: ServerCertificateReference;
}
/**
 * A reference to a ServerCertificate resource.
 *
 * @struct
 * @stability external
 */
export interface ServerCertificateReference {
    /**
     * The ServerCertificateName of the ServerCertificate resource.
     */
    readonly serverCertificateName: string;
    /**
     * The ARN of the ServerCertificate resource.
     */
    readonly serverCertificateArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceLinkedRole.
 *
 * @stability experimental
 */
export interface IServiceLinkedRoleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceLinkedRole resource.
     */
    readonly serviceLinkedRoleRef: ServiceLinkedRoleReference;
}
/**
 * A reference to a ServiceLinkedRole resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceLinkedRoleReference {
    /**
     * The RoleName of the ServiceLinkedRole resource.
     */
    readonly roleName: string;
}
/**
 * Indicates that this resource can be referenced as a User.
 *
 * @stability experimental
 */
export interface IUserRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a User resource.
     */
    readonly userRef: UserReference;
}
/**
 * A reference to a User resource.
 *
 * @struct
 * @stability external
 */
export interface UserReference {
    /**
     * The UserName of the User resource.
     */
    readonly userName: string;
    /**
     * The ARN of the User resource.
     */
    readonly userArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserPolicy.
 *
 * @stability experimental
 */
export interface IUserPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPolicy resource.
     */
    readonly userPolicyRef: UserPolicyReference;
}
/**
 * A reference to a UserPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface UserPolicyReference {
    /**
     * The PolicyName of the UserPolicy resource.
     */
    readonly policyName: string;
    /**
     * The UserName of the UserPolicy resource.
     */
    readonly userName: string;
}
/**
 * Indicates that this resource can be referenced as a UserToGroupAddition.
 *
 * @stability experimental
 */
export interface IUserToGroupAdditionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserToGroupAddition resource.
     */
    readonly userToGroupAdditionRef: UserToGroupAdditionReference;
}
/**
 * A reference to a UserToGroupAddition resource.
 *
 * @struct
 * @stability external
 */
export interface UserToGroupAdditionReference {
    /**
     * The Id of the UserToGroupAddition resource.
     */
    readonly userToGroupAdditionId: string;
}
/**
 * Indicates that this resource can be referenced as a VirtualMFADevice.
 *
 * @stability experimental
 */
export interface IVirtualMFADeviceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VirtualMFADevice resource.
     */
    readonly virtualMfaDeviceRef: VirtualMFADeviceReference;
}
/**
 * A reference to a VirtualMFADevice resource.
 *
 * @struct
 * @stability external
 */
export interface VirtualMFADeviceReference {
    /**
     * The SerialNumber of the VirtualMFADevice resource.
     */
    readonly serialNumber: string;
}
