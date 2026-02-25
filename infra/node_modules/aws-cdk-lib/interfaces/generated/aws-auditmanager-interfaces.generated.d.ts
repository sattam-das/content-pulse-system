import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Assessment.
 *
 * @stability experimental
 */
export interface IAssessmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Assessment resource.
     */
    readonly assessmentRef: AssessmentReference;
}
/**
 * A reference to a Assessment resource.
 *
 * @struct
 * @stability external
 */
export interface AssessmentReference {
    /**
     * The AssessmentId of the Assessment resource.
     */
    readonly assessmentId: string;
    /**
     * The ARN of the Assessment resource.
     */
    readonly assessmentArn: string;
}
