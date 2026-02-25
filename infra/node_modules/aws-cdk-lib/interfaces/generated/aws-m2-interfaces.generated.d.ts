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
     * The ApplicationArn of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Environment.
 *
 * @stability experimental
 */
export interface IEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Environment resource.
     */
    readonly environmentRef: EnvironmentReference;
}
/**
 * A reference to a Environment resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentReference {
    /**
     * The EnvironmentArn of the Environment resource.
     */
    readonly environmentArn: string;
}
/**
 * Indicates that this resource can be referenced as a Deployment.
 *
 * @stability experimental
 */
export interface IDeploymentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Deployment resource.
     */
    readonly deploymentRef: DeploymentReference;
}
/**
 * A reference to a Deployment resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentReference {
    /**
     * The ApplicationId of the Deployment resource.
     */
    readonly applicationId: string;
}
