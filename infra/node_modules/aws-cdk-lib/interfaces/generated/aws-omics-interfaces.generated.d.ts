import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AnnotationStore.
 *
 * @stability experimental
 */
export interface IAnnotationStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnnotationStore resource.
     */
    readonly annotationStoreRef: AnnotationStoreReference;
}
/**
 * A reference to a AnnotationStore resource.
 *
 * @struct
 * @stability external
 */
export interface AnnotationStoreReference {
    /**
     * The Name of the AnnotationStore resource.
     */
    readonly annotationStoreName: string;
}
/**
 * Indicates that this resource can be referenced as a ReferenceStore.
 *
 * @stability experimental
 */
export interface IReferenceStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReferenceStore resource.
     */
    readonly referenceStoreRef: ReferenceStoreReference;
}
/**
 * A reference to a ReferenceStore resource.
 *
 * @struct
 * @stability external
 */
export interface ReferenceStoreReference {
    /**
     * The ReferenceStoreId of the ReferenceStore resource.
     */
    readonly referenceStoreId: string;
    /**
     * The ARN of the ReferenceStore resource.
     */
    readonly referenceStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a RunGroup.
 *
 * @stability experimental
 */
export interface IRunGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RunGroup resource.
     */
    readonly runGroupRef: RunGroupReference;
}
/**
 * A reference to a RunGroup resource.
 *
 * @struct
 * @stability external
 */
export interface RunGroupReference {
    /**
     * The Id of the RunGroup resource.
     */
    readonly runGroupId: string;
    /**
     * The ARN of the RunGroup resource.
     */
    readonly runGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a SequenceStore.
 *
 * @stability experimental
 */
export interface ISequenceStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SequenceStore resource.
     */
    readonly sequenceStoreRef: SequenceStoreReference;
}
/**
 * A reference to a SequenceStore resource.
 *
 * @struct
 * @stability external
 */
export interface SequenceStoreReference {
    /**
     * The SequenceStoreId of the SequenceStore resource.
     */
    readonly sequenceStoreId: string;
    /**
     * The ARN of the SequenceStore resource.
     */
    readonly sequenceStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a VariantStore.
 *
 * @stability experimental
 */
export interface IVariantStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VariantStore resource.
     */
    readonly variantStoreRef: VariantStoreReference;
}
/**
 * A reference to a VariantStore resource.
 *
 * @struct
 * @stability external
 */
export interface VariantStoreReference {
    /**
     * The Name of the VariantStore resource.
     */
    readonly variantStoreName: string;
}
/**
 * Indicates that this resource can be referenced as a Workflow.
 *
 * @stability experimental
 */
export interface IWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workflow resource.
     */
    readonly workflowRef: WorkflowReference;
}
/**
 * A reference to a Workflow resource.
 *
 * @struct
 * @stability external
 */
export interface WorkflowReference {
    /**
     * The Id of the Workflow resource.
     */
    readonly workflowId: string;
    /**
     * The ARN of the Workflow resource.
     */
    readonly workflowArn: string;
}
/**
 * Indicates that this resource can be referenced as a WorkflowVersion.
 *
 * @stability experimental
 */
export interface IWorkflowVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkflowVersion resource.
     */
    readonly workflowVersionRef: WorkflowVersionReference;
}
/**
 * A reference to a WorkflowVersion resource.
 *
 * @struct
 * @stability external
 */
export interface WorkflowVersionReference {
    /**
     * The Arn of the WorkflowVersion resource.
     */
    readonly workflowVersionArn: string;
}
