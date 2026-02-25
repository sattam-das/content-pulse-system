import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessPolicy.
 *
 * @stability experimental
 */
export interface IAccessPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessPolicy resource.
     */
    readonly accessPolicyRef: AccessPolicyReference;
}
/**
 * A reference to a AccessPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface AccessPolicyReference {
    /**
     * The Type of the AccessPolicy resource.
     */
    readonly type: string;
    /**
     * The Name of the AccessPolicy resource.
     */
    readonly accessPolicyName: string;
}
/**
 * Indicates that this resource can be referenced as a Collection.
 *
 * @stability experimental
 */
export interface ICollectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Collection resource.
     */
    readonly collectionRef: CollectionReference;
}
/**
 * A reference to a Collection resource.
 *
 * @struct
 * @stability external
 */
export interface CollectionReference {
    /**
     * The Id of the Collection resource.
     */
    readonly collectionId: string;
    /**
     * The ARN of the Collection resource.
     */
    readonly collectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityConfig.
 *
 * @stability experimental
 */
export interface ISecurityConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityConfig resource.
     */
    readonly securityConfigRef: SecurityConfigReference;
}
/**
 * A reference to a SecurityConfig resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityConfigReference {
    /**
     * The Id of the SecurityConfig resource.
     */
    readonly securityConfigId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityPolicy.
 *
 * @stability experimental
 */
export interface ISecurityPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityPolicy resource.
     */
    readonly securityPolicyRef: SecurityPolicyReference;
}
/**
 * A reference to a SecurityPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityPolicyReference {
    /**
     * The Type of the SecurityPolicy resource.
     */
    readonly type: string;
    /**
     * The Name of the SecurityPolicy resource.
     */
    readonly securityPolicyName: string;
}
/**
 * Indicates that this resource can be referenced as a VpcEndpoint.
 *
 * @stability experimental
 */
export interface IVpcEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcEndpoint resource.
     */
    readonly vpcEndpointRef: VpcEndpointReference;
}
/**
 * A reference to a VpcEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface VpcEndpointReference {
    /**
     * The Id of the VpcEndpoint resource.
     */
    readonly vpcEndpointId: string;
}
/**
 * Indicates that this resource can be referenced as a Index.
 *
 * @stability experimental
 */
export interface IIndexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Index resource.
     */
    readonly indexRef: IndexReference;
}
/**
 * A reference to a Index resource.
 *
 * @struct
 * @stability external
 */
export interface IndexReference {
    /**
     * The IndexName of the Index resource.
     */
    readonly indexName: string;
    /**
     * The CollectionEndpoint of the Index resource.
     */
    readonly collectionEndpoint: string;
}
/**
 * Indicates that this resource can be referenced as a LifecyclePolicy.
 *
 * @stability experimental
 */
export interface ILifecyclePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LifecyclePolicy resource.
     */
    readonly lifecyclePolicyRef: LifecyclePolicyReference;
}
/**
 * A reference to a LifecyclePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface LifecyclePolicyReference {
    /**
     * The Type of the LifecyclePolicy resource.
     */
    readonly type: string;
    /**
     * The Name of the LifecyclePolicy resource.
     */
    readonly lifecyclePolicyName: string;
}
