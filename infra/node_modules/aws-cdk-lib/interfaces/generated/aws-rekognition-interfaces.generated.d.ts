import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Collection.
 *
 * @stability experimental
 */
export interface ICollectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Collection resource.
     */
    readonly collectionRef: CollectionReference;
}
/**
 * A reference to a Collection resource.
 *
 * @struct
 * @stability external
 */
export interface CollectionReference {
    /**
     * The CollectionId of the Collection resource.
     */
    readonly collectionId: string;
    /**
     * The ARN of the Collection resource.
     */
    readonly collectionArn: string;
}
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
/**
 * Indicates that this resource can be referenced as a StreamProcessor.
 *
 * @stability experimental
 */
export interface IStreamProcessorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamProcessor resource.
     */
    readonly streamProcessorRef: StreamProcessorReference;
}
/**
 * A reference to a StreamProcessor resource.
 *
 * @struct
 * @stability external
 */
export interface StreamProcessorReference {
    /**
     * The Name of the StreamProcessor resource.
     */
    readonly streamProcessorName: string;
    /**
     * The ARN of the StreamProcessor resource.
     */
    readonly streamProcessorArn: string;
}
