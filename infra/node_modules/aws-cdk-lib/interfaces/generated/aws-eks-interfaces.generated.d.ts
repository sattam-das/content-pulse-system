import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Addon.
 *
 * @stability experimental
 */
export interface IAddonRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Addon resource.
     */
    readonly addonRef: AddonReference;
}
/**
 * A reference to a Addon resource.
 *
 * @struct
 * @stability external
 */
export interface AddonReference {
    /**
     * The ClusterName of the Addon resource.
     */
    readonly clusterName: string;
    /**
     * The AddonName of the Addon resource.
     */
    readonly addonName: string;
    /**
     * The ARN of the Addon resource.
     */
    readonly addonArn: string;
}
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The Name of the Cluster resource.
     */
    readonly clusterName: string;
    /**
     * The ARN of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a FargateProfile.
 *
 * @stability experimental
 */
export interface IFargateProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FargateProfile resource.
     */
    readonly fargateProfileRef: FargateProfileReference;
}
/**
 * A reference to a FargateProfile resource.
 *
 * @struct
 * @stability external
 */
export interface FargateProfileReference {
    /**
     * The ClusterName of the FargateProfile resource.
     */
    readonly clusterName: string;
    /**
     * The FargateProfileName of the FargateProfile resource.
     */
    readonly fargateProfileName: string;
    /**
     * The ARN of the FargateProfile resource.
     */
    readonly fargateProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a IdentityProviderConfig.
 *
 * @stability experimental
 */
export interface IIdentityProviderConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityProviderConfig resource.
     */
    readonly identityProviderConfigRef: IdentityProviderConfigReference;
}
/**
 * A reference to a IdentityProviderConfig resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityProviderConfigReference {
    /**
     * The IdentityProviderConfigName of the IdentityProviderConfig resource.
     */
    readonly identityProviderConfigName: string;
    /**
     * The ClusterName of the IdentityProviderConfig resource.
     */
    readonly clusterName: string;
    /**
     * The Type of the IdentityProviderConfig resource.
     */
    readonly type: string;
    /**
     * The ARN of the IdentityProviderConfig resource.
     */
    readonly identityProviderConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a Nodegroup.
 *
 * @stability experimental
 */
export interface INodegroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Nodegroup resource.
     */
    readonly nodegroupRef: NodegroupReference;
}
/**
 * A reference to a Nodegroup resource.
 *
 * @struct
 * @stability external
 */
export interface NodegroupReference {
    /**
     * The Id of the Nodegroup resource.
     */
    readonly nodegroupId: string;
    /**
     * The ARN of the Nodegroup resource.
     */
    readonly nodegroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a AccessEntry.
 *
 * @stability experimental
 */
export interface IAccessEntryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessEntry resource.
     */
    readonly accessEntryRef: AccessEntryReference;
}
/**
 * A reference to a AccessEntry resource.
 *
 * @struct
 * @stability external
 */
export interface AccessEntryReference {
    /**
     * The PrincipalArn of the AccessEntry resource.
     */
    readonly principalArn: string;
    /**
     * The ClusterName of the AccessEntry resource.
     */
    readonly clusterName: string;
    /**
     * The ARN of the AccessEntry resource.
     */
    readonly accessEntryArn: string;
}
/**
 * Indicates that this resource can be referenced as a Capability.
 *
 * @stability experimental
 */
export interface ICapabilityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Capability resource.
     */
    readonly capabilityRef: CapabilityReference;
}
/**
 * A reference to a Capability resource.
 *
 * @struct
 * @stability external
 */
export interface CapabilityReference {
    /**
     * The Arn of the Capability resource.
     */
    readonly capabilityArn: string;
}
/**
 * Indicates that this resource can be referenced as a PodIdentityAssociation.
 *
 * @stability experimental
 */
export interface IPodIdentityAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PodIdentityAssociation resource.
     */
    readonly podIdentityAssociationRef: PodIdentityAssociationReference;
}
/**
 * A reference to a PodIdentityAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface PodIdentityAssociationReference {
    /**
     * The AssociationArn of the PodIdentityAssociation resource.
     */
    readonly associationArn: string;
}
