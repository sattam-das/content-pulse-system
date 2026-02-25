import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ApplicationInstance.
 *
 * @stability experimental
 */
export interface IApplicationInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationInstance resource.
     */
    readonly applicationInstanceRef: ApplicationInstanceReference;
}
/**
 * A reference to a ApplicationInstance resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationInstanceReference {
    /**
     * The ApplicationInstanceId of the ApplicationInstance resource.
     */
    readonly applicationInstanceId: string;
    /**
     * The ARN of the ApplicationInstance resource.
     */
    readonly applicationInstanceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Package.
 *
 * @stability experimental
 */
export interface IPackageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Package resource.
     */
    readonly packageRef: PackageReference;
}
/**
 * A reference to a Package resource.
 *
 * @struct
 * @stability external
 */
export interface PackageReference {
    /**
     * The PackageId of the Package resource.
     */
    readonly packageId: string;
    /**
     * The ARN of the Package resource.
     */
    readonly packageArn: string;
}
/**
 * Indicates that this resource can be referenced as a PackageVersion.
 *
 * @stability experimental
 */
export interface IPackageVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PackageVersion resource.
     */
    readonly packageVersionRef: PackageVersionReference;
}
/**
 * A reference to a PackageVersion resource.
 *
 * @struct
 * @stability external
 */
export interface PackageVersionReference {
    /**
     * The PackageId of the PackageVersion resource.
     */
    readonly packageId: string;
    /**
     * The PackageVersion of the PackageVersion resource.
     */
    readonly packageVersion: string;
    /**
     * The PatchVersion of the PackageVersion resource.
     */
    readonly patchVersion: string;
}
