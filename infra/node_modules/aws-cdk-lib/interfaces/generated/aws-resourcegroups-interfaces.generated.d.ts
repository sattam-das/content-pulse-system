import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Group.
 *
 * @stability experimental
 */
export interface IGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Group resource.
     */
    readonly groupRef: GroupReference;
}
/**
 * A reference to a Group resource.
 *
 * @struct
 * @stability external
 */
export interface GroupReference {
    /**
     * The Name of the Group resource.
     */
    readonly groupName: string;
    /**
     * The ARN of the Group resource.
     */
    readonly groupArn: string;
}
/**
 * Indicates that this resource can be referenced as a TagSyncTask.
 *
 * @stability experimental
 */
export interface ITagSyncTaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TagSyncTask resource.
     */
    readonly tagSyncTaskRef: TagSyncTaskReference;
}
/**
 * A reference to a TagSyncTask resource.
 *
 * @struct
 * @stability external
 */
export interface TagSyncTaskReference {
    /**
     * The TaskArn of the TagSyncTask resource.
     */
    readonly taskArn: string;
}
