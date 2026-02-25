import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Id of the Repository resource.
     */
    readonly repositoryId: string;
    /**
     * The ARN of the Repository resource.
     */
    readonly repositoryArn: string;
}
