import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Alert.
 *
 * @stability experimental
 */
export interface IAlertRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Alert resource.
     */
    readonly alertRef: AlertReference;
}
/**
 * A reference to a Alert resource.
 *
 * @struct
 * @stability external
 */
export interface AlertReference {
    /**
     * The ARN of the Alert resource.
     */
    readonly alertArn: string;
}
/**
 * Indicates that this resource can be referenced as a AnomalyDetector.
 *
 * @stability experimental
 */
export interface IAnomalyDetectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnomalyDetector resource.
     */
    readonly anomalyDetectorRef: AnomalyDetectorReference;
}
/**
 * A reference to a AnomalyDetector resource.
 *
 * @struct
 * @stability external
 */
export interface AnomalyDetectorReference {
    /**
     * The ARN of the AnomalyDetector resource.
     */
    readonly anomalyDetectorArn: string;
}
