import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DocumentClassifier.
 *
 * @stability experimental
 */
export interface IDocumentClassifierRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DocumentClassifier resource.
     */
    readonly documentClassifierRef: DocumentClassifierReference;
}
/**
 * A reference to a DocumentClassifier resource.
 *
 * @struct
 * @stability external
 */
export interface DocumentClassifierReference {
    /**
     * The Arn of the DocumentClassifier resource.
     */
    readonly documentClassifierArn: string;
}
/**
 * Indicates that this resource can be referenced as a Flywheel.
 *
 * @stability experimental
 */
export interface IFlywheelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Flywheel resource.
     */
    readonly flywheelRef: FlywheelReference;
}
/**
 * A reference to a Flywheel resource.
 *
 * @struct
 * @stability external
 */
export interface FlywheelReference {
    /**
     * The Arn of the Flywheel resource.
     */
    readonly flywheelArn: string;
}
