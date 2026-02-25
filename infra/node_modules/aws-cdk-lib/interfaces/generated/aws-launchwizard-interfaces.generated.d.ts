import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Arn of the Deployment resource.
     */
    readonly deploymentArn: string;
}
