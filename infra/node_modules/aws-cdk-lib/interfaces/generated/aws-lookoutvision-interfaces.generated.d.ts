import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The ProjectName of the Project resource.
     */
    readonly projectName: string;
    /**
     * The ARN of the Project resource.
     */
    readonly projectArn: string;
}
