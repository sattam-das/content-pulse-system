import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ReplicationSet.
 *
 * @stability experimental
 */
export interface IReplicationSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationSet resource.
     */
    readonly replicationSetRef: ReplicationSetReference;
}
/**
 * A reference to a ReplicationSet resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationSetReference {
    /**
     * The Arn of the ReplicationSet resource.
     */
    readonly replicationSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResponsePlan.
 *
 * @stability experimental
 */
export interface IResponsePlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResponsePlan resource.
     */
    readonly responsePlanRef: ResponsePlanReference;
}
/**
 * A reference to a ResponsePlan resource.
 *
 * @struct
 * @stability external
 */
export interface ResponsePlanReference {
    /**
     * The Arn of the ResponsePlan resource.
     */
    readonly responsePlanArn: string;
}
