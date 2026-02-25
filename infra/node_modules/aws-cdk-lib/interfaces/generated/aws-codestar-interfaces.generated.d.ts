import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a GitHubRepository.
 *
 * @stability experimental
 */
export interface IGitHubRepositoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GitHubRepository resource.
     */
    readonly gitHubRepositoryRef: GitHubRepositoryReference;
}
/**
 * A reference to a GitHubRepository resource.
 *
 * @struct
 * @stability external
 */
export interface GitHubRepositoryReference {
    /**
     * The Id of the GitHubRepository resource.
     */
    readonly gitHubRepositoryId: string;
}
