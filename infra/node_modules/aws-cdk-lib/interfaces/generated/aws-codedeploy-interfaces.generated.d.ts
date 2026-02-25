import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The ApplicationName of the Application resource.
     */
    readonly applicationName: string;
}
/**
 * Indicates that this resource can be referenced as a DeploymentConfig.
 *
 * @stability experimental
 */
export interface IDeploymentConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeploymentConfig resource.
     */
    readonly deploymentConfigRef: DeploymentConfigReference;
}
/**
 * A reference to a DeploymentConfig resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentConfigReference {
    /**
     * The DeploymentConfigName of the DeploymentConfig resource.
     */
    readonly deploymentConfigName: string;
}
/**
 * Indicates that this resource can be referenced as a DeploymentGroup.
 *
 * @stability experimental
 */
export interface IDeploymentGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeploymentGroup resource.
     */
    readonly deploymentGroupRef: DeploymentGroupReference;
}
/**
 * A reference to a DeploymentGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentGroupReference {
    /**
     * The DeploymentGroupName of the DeploymentGroup resource.
     */
    readonly deploymentGroupName: string;
}
