import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a PublicRepository.
 *
 * @stability experimental
 */
export interface IPublicRepositoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublicRepository resource.
     */
    readonly publicRepositoryRef: PublicRepositoryReference;
}
/**
 * A reference to a PublicRepository resource.
 *
 * @struct
 * @stability external
 */
export interface PublicRepositoryReference {
    /**
     * The RepositoryName of the PublicRepository resource.
     */
    readonly repositoryName: string;
    /**
     * The ARN of the PublicRepository resource.
     */
    readonly publicRepositoryArn: string;
}
/**
 * Indicates that this resource can be referenced as a PullThroughCacheRule.
 *
 * @stability experimental
 */
export interface IPullThroughCacheRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PullThroughCacheRule resource.
     */
    readonly pullThroughCacheRuleRef: PullThroughCacheRuleReference;
}
/**
 * A reference to a PullThroughCacheRule resource.
 *
 * @struct
 * @stability external
 */
export interface PullThroughCacheRuleReference {
    /**
     * The EcrRepositoryPrefix of the PullThroughCacheRule resource.
     */
    readonly ecrRepositoryPrefix: string;
}
/**
 * Indicates that this resource can be referenced as a RegistryPolicy.
 *
 * @stability experimental
 */
export interface IRegistryPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RegistryPolicy resource.
     */
    readonly registryPolicyRef: RegistryPolicyReference;
}
/**
 * A reference to a RegistryPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface RegistryPolicyReference {
    /**
     * The RegistryId of the RegistryPolicy resource.
     */
    readonly registryId: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicationConfiguration.
 *
 * @stability experimental
 */
export interface IReplicationConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationConfiguration resource.
     */
    readonly replicationConfigurationRef: ReplicationConfigurationReference;
}
/**
 * A reference to a ReplicationConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationConfigurationReference {
    /**
     * The RegistryId of the ReplicationConfiguration resource.
     */
    readonly registryId: string;
}
/**
 * Indicates that this resource can be referenced as a Repository.
 *
 * @stability experimental
 */
export interface IRepositoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Repository resource.
     */
    readonly repositoryRef: RepositoryReference;
}
/**
 * A reference to a Repository resource.
 *
 * @struct
 * @stability external
 */
export interface RepositoryReference {
    /**
     * The RepositoryName of the Repository resource.
     */
    readonly repositoryName: string;
    /**
     * The ARN of the Repository resource.
     */
    readonly repositoryArn: string;
}
/**
 * Indicates that this resource can be referenced as a PullTimeUpdateExclusion.
 *
 * @stability experimental
 */
export interface IPullTimeUpdateExclusionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PullTimeUpdateExclusion resource.
     */
    readonly pullTimeUpdateExclusionRef: PullTimeUpdateExclusionReference;
}
/**
 * A reference to a PullTimeUpdateExclusion resource.
 *
 * @struct
 * @stability external
 */
export interface PullTimeUpdateExclusionReference {
    /**
     * The PrincipalArn of the PullTimeUpdateExclusion resource.
     */
    readonly principalArn: string;
}
/**
 * Indicates that this resource can be referenced as a RegistryScanningConfiguration.
 *
 * @stability experimental
 */
export interface IRegistryScanningConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RegistryScanningConfiguration resource.
     */
    readonly registryScanningConfigurationRef: RegistryScanningConfigurationReference;
}
/**
 * A reference to a RegistryScanningConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface RegistryScanningConfigurationReference {
    /**
     * The RegistryId of the RegistryScanningConfiguration resource.
     */
    readonly registryId: string;
}
/**
 * Indicates that this resource can be referenced as a RepositoryCreationTemplate.
 *
 * @stability experimental
 */
export interface IRepositoryCreationTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RepositoryCreationTemplate resource.
     */
    readonly repositoryCreationTemplateRef: RepositoryCreationTemplateReference;
}
/**
 * A reference to a RepositoryCreationTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface RepositoryCreationTemplateReference {
    /**
     * The Prefix of the RepositoryCreationTemplate resource.
     */
    readonly prefix: string;
}
/**
 * Indicates that this resource can be referenced as a SigningConfiguration.
 *
 * @stability experimental
 */
export interface ISigningConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SigningConfiguration resource.
     */
    readonly signingConfigurationRef: SigningConfigurationReference;
}
/**
 * A reference to a SigningConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SigningConfigurationReference {
    /**
     * The RegistryId of the SigningConfiguration resource.
     */
    readonly registryId: string;
}
