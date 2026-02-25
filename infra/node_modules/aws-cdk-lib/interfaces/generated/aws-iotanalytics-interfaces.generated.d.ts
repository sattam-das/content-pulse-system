import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Channel.
 *
 * @stability experimental
 */
export interface IChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Channel resource.
     */
    readonly channelRef: ChannelReference;
}
/**
 * A reference to a Channel resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelReference {
    /**
     * The ChannelName of the Channel resource.
     */
    readonly channelName: string;
}
/**
 * Indicates that this resource can be referenced as a Dataset.
 *
 * @stability experimental
 */
export interface IDatasetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dataset resource.
     */
    readonly datasetRef: DatasetReference;
}
/**
 * A reference to a Dataset resource.
 *
 * @struct
 * @stability external
 */
export interface DatasetReference {
    /**
     * The DatasetName of the Dataset resource.
     */
    readonly datasetName: string;
}
/**
 * Indicates that this resource can be referenced as a Datastore.
 *
 * @stability experimental
 */
export interface IDatastoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Datastore resource.
     */
    readonly datastoreRef: DatastoreReference;
}
/**
 * A reference to a Datastore resource.
 *
 * @struct
 * @stability external
 */
export interface DatastoreReference {
    /**
     * The DatastoreName of the Datastore resource.
     */
    readonly datastoreName: string;
}
/**
 * Indicates that this resource can be referenced as a Pipeline.
 *
 * @stability experimental
 */
export interface IPipelineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pipeline resource.
     */
    readonly pipelineRef: PipelineReference;
}
/**
 * A reference to a Pipeline resource.
 *
 * @struct
 * @stability external
 */
export interface PipelineReference {
    /**
     * The PipelineName of the Pipeline resource.
     */
    readonly pipelineName: string;
}
