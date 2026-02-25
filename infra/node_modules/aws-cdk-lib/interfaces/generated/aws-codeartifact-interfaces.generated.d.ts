import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Domain.
 *
 * @stability experimental
 */
export interface IDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Domain resource.
     */
    readonly domainRef: DomainReference;
}
/**
 * A reference to a Domain resource.
 *
 * @struct
 * @stability external
 */
export interface DomainReference {
    /**
     * The Arn of the Domain resource.
     */
    readonly domainArn: string;
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
     * The Arn of the Repository resource.
     */
    readonly repositoryArn: string;
}
/**
 * Indicates that this resource can be referenced as a PackageGroup.
 *
 * @stability experimental
 */
export interface IPackageGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PackageGroup resource.
     */
    readonly packageGroupRef: PackageGroupReference;
}
/**
 * A reference to a PackageGroup resource.
 *
 * @struct
 * @stability external
 */
export interface PackageGroupReference {
    /**
     * The Arn of the PackageGroup resource.
     */
    readonly packageGroupArn: string;
}
