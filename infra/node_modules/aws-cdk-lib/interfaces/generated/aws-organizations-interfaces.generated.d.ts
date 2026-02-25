import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Account.
 *
 * @stability experimental
 */
export interface IAccountRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Account resource.
     */
    readonly accountRef: AccountReference;
}
/**
 * A reference to a Account resource.
 *
 * @struct
 * @stability external
 */
export interface AccountReference {
    /**
     * The AccountId of the Account resource.
     */
    readonly accountId: string;
    /**
     * The ARN of the Account resource.
     */
    readonly accountArn: string;
}
/**
 * Indicates that this resource can be referenced as a Organization.
 *
 * @stability experimental
 */
export interface IOrganizationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Organization resource.
     */
    readonly organizationRef: OrganizationReference;
}
/**
 * A reference to a Organization resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationReference {
    /**
     * The Id of the Organization resource.
     */
    readonly organizationId: string;
    /**
     * The ARN of the Organization resource.
     */
    readonly organizationArn: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationalUnit.
 *
 * @stability experimental
 */
export interface IOrganizationalUnitRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationalUnit resource.
     */
    readonly organizationalUnitRef: OrganizationalUnitReference;
}
/**
 * A reference to a OrganizationalUnit resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationalUnitReference {
    /**
     * The Id of the OrganizationalUnit resource.
     */
    readonly organizationalUnitId: string;
    /**
     * The ARN of the OrganizationalUnit resource.
     */
    readonly organizationalUnitArn: string;
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
    /**
     * The ARN of the Policy resource.
     */
    readonly policyArn: string;
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
     * The Id of the ResourcePolicy resource.
     */
    readonly resourcePolicyId: string;
    /**
     * The ARN of the ResourcePolicy resource.
     */
    readonly resourcePolicyArn: string;
}
