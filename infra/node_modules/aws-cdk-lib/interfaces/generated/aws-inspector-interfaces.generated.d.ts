import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AssessmentTarget.
 *
 * @stability experimental
 */
export interface IAssessmentTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AssessmentTarget resource.
     */
    readonly assessmentTargetRef: AssessmentTargetReference;
}
/**
 * A reference to a AssessmentTarget resource.
 *
 * @struct
 * @stability external
 */
export interface AssessmentTargetReference {
    /**
     * The Arn of the AssessmentTarget resource.
     */
    readonly assessmentTargetArn: string;
}
/**
 * Indicates that this resource can be referenced as a AssessmentTemplate.
 *
 * @stability experimental
 */
export interface IAssessmentTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AssessmentTemplate resource.
     */
    readonly assessmentTemplateRef: AssessmentTemplateReference;
}
/**
 * A reference to a AssessmentTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface AssessmentTemplateReference {
    /**
     * The Arn of the AssessmentTemplate resource.
     */
    readonly assessmentTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceGroup.
 *
 * @stability experimental
 */
export interface IResourceGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceGroup resource.
     */
    readonly resourceGroupRef: ResourceGroupReference;
}
/**
 * A reference to a ResourceGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceGroupReference {
    /**
     * The Arn of the ResourceGroup resource.
     */
    readonly resourceGroupArn: string;
}
