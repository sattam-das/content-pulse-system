import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a TrainingDataset.
 *
 * @stability experimental
 */
export interface ITrainingDatasetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrainingDataset resource.
     */
    readonly trainingDatasetRef: TrainingDatasetReference;
}
/**
 * A reference to a TrainingDataset resource.
 *
 * @struct
 * @stability external
 */
export interface TrainingDatasetReference {
    /**
     * The TrainingDatasetArn of the TrainingDataset resource.
     */
    readonly trainingDatasetArn: string;
}
