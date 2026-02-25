import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The DatastoreId of the Datastore resource.
     */
    readonly datastoreId: string;
    /**
     * The ARN of the Datastore resource.
     */
    readonly datastoreArn: string;
}
