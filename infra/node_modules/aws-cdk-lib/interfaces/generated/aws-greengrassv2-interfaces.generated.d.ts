import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ComponentVersion.
 *
 * @stability experimental
 */
export interface IComponentVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ComponentVersion resource.
     */
    readonly componentVersionRef: ComponentVersionReference;
}
/**
 * A reference to a ComponentVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ComponentVersionReference {
    /**
     * The Arn of the ComponentVersion resource.
     */
    readonly componentVersionArn: string;
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
     * The DeploymentId of the Deployment resource.
     */
    readonly deploymentId: string;
}
