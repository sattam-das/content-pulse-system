import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Detector.
 *
 * @stability experimental
 */
export interface IDetectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Detector resource.
     */
    readonly detectorRef: DetectorReference;
}
/**
 * A reference to a Detector resource.
 *
 * @struct
 * @stability external
 */
export interface DetectorReference {
    /**
     * The Arn of the Detector resource.
     */
    readonly detectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a EntityType.
 *
 * @stability experimental
 */
export interface IEntityTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EntityType resource.
     */
    readonly entityTypeRef: EntityTypeReference;
}
/**
 * A reference to a EntityType resource.
 *
 * @struct
 * @stability external
 */
export interface EntityTypeReference {
    /**
     * The Arn of the EntityType resource.
     */
    readonly entityTypeArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventType.
 *
 * @stability experimental
 */
export interface IEventTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventType resource.
     */
    readonly eventTypeRef: EventTypeReference;
}
/**
 * A reference to a EventType resource.
 *
 * @struct
 * @stability external
 */
export interface EventTypeReference {
    /**
     * The Arn of the EventType resource.
     */
    readonly eventTypeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Label.
 *
 * @stability experimental
 */
export interface ILabelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Label resource.
     */
    readonly labelRef: LabelReference;
}
/**
 * A reference to a Label resource.
 *
 * @struct
 * @stability external
 */
export interface LabelReference {
    /**
     * The Arn of the Label resource.
     */
    readonly labelArn: string;
}
/**
 * Indicates that this resource can be referenced as a List.
 *
 * @stability experimental
 */
export interface IListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a List resource.
     */
    readonly listRef: ListReference;
}
/**
 * A reference to a List resource.
 *
 * @struct
 * @stability external
 */
export interface ListReference {
    /**
     * The Arn of the List resource.
     */
    readonly listArn: string;
}
/**
 * Indicates that this resource can be referenced as a Outcome.
 *
 * @stability experimental
 */
export interface IOutcomeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Outcome resource.
     */
    readonly outcomeRef: OutcomeReference;
}
/**
 * A reference to a Outcome resource.
 *
 * @struct
 * @stability external
 */
export interface OutcomeReference {
    /**
     * The Arn of the Outcome resource.
     */
    readonly outcomeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Variable.
 *
 * @stability experimental
 */
export interface IVariableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Variable resource.
     */
    readonly variableRef: VariableReference;
}
/**
 * A reference to a Variable resource.
 *
 * @struct
 * @stability external
 */
export interface VariableReference {
    /**
     * The Arn of the Variable resource.
     */
    readonly variableArn: string;
}
