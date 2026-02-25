import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Arn of the Dataset resource.
     */
    readonly datasetArn: string;
}
/**
 * Indicates that this resource can be referenced as a DatasetGroup.
 *
 * @stability experimental
 */
export interface IDatasetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DatasetGroup resource.
     */
    readonly datasetGroupRef: DatasetGroupReference;
}
/**
 * A reference to a DatasetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DatasetGroupReference {
    /**
     * The DatasetGroupArn of the DatasetGroup resource.
     */
    readonly datasetGroupArn: string;
}
