import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a IdentitySource.
 *
 * @stability experimental
 */
export interface IIdentitySourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentitySource resource.
     */
    readonly identitySourceRef: IdentitySourceReference;
}
/**
 * A reference to a IdentitySource resource.
 *
 * @struct
 * @stability external
 */
export interface IdentitySourceReference {
    /**
     * The IdentitySourceId of the IdentitySource resource.
     */
    readonly identitySourceId: string;
    /**
     * The PolicyStoreId of the IdentitySource resource.
     */
    readonly policyStoreId: string;
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
     * The PolicyId of the Policy resource.
     */
    readonly policyId: string;
    /**
     * The PolicyStoreId of the Policy resource.
     */
    readonly policyStoreId: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyStore.
 *
 * @stability experimental
 */
export interface IPolicyStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyStore resource.
     */
    readonly policyStoreRef: PolicyStoreReference;
}
/**
 * A reference to a PolicyStore resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyStoreReference {
    /**
     * The PolicyStoreId of the PolicyStore resource.
     */
    readonly policyStoreId: string;
    /**
     * The ARN of the PolicyStore resource.
     */
    readonly policyStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyTemplate.
 *
 * @stability experimental
 */
export interface IPolicyTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyTemplate resource.
     */
    readonly policyTemplateRef: PolicyTemplateReference;
}
/**
 * A reference to a PolicyTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyTemplateReference {
    /**
     * The PolicyStoreId of the PolicyTemplate resource.
     */
    readonly policyStoreId: string;
    /**
     * The PolicyTemplateId of the PolicyTemplate resource.
     */
    readonly policyTemplateId: string;
}
