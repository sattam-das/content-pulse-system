import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a FHIRDatastore.
 *
 * @stability experimental
 */
export interface IFHIRDatastoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FHIRDatastore resource.
     */
    readonly fhirDatastoreRef: FHIRDatastoreReference;
}
/**
 * A reference to a FHIRDatastore resource.
 *
 * @struct
 * @stability external
 */
export interface FHIRDatastoreReference {
    /**
     * The DatastoreId of the FHIRDatastore resource.
     */
    readonly datastoreId: string;
    /**
     * The ARN of the FHIRDatastore resource.
     */
    readonly datastoreArn: string;
}
