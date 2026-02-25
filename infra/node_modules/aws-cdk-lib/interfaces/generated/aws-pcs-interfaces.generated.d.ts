import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The Arn of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a ComputeNodeGroup.
 *
 * @stability experimental
 */
export interface IComputeNodeGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ComputeNodeGroup resource.
     */
    readonly computeNodeGroupRef: ComputeNodeGroupReference;
}
/**
 * A reference to a ComputeNodeGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ComputeNodeGroupReference {
    /**
     * The Arn of the ComputeNodeGroup resource.
     */
    readonly computeNodeGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a Queue.
 *
 * @stability experimental
 */
export interface IQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Queue resource.
     */
    readonly queueRef: QueueReference;
}
/**
 * A reference to a Queue resource.
 *
 * @struct
 * @stability external
 */
export interface QueueReference {
    /**
     * The Arn of the Queue resource.
     */
    readonly queueArn: string;
}
