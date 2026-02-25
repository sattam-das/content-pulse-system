import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a MatchingWorkflow.
 *
 * @stability experimental
 */
export interface IMatchingWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MatchingWorkflow resource.
     */
    readonly matchingWorkflowRef: MatchingWorkflowReference;
}
/**
 * A reference to a MatchingWorkflow resource.
 *
 * @struct
 * @stability external
 */
export interface MatchingWorkflowReference {
    /**
     * The WorkflowName of the MatchingWorkflow resource.
     */
    readonly workflowName: string;
}
/**
 * Indicates that this resource can be referenced as a SchemaMapping.
 *
 * @stability experimental
 */
export interface ISchemaMappingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SchemaMapping resource.
     */
    readonly schemaMappingRef: SchemaMappingReference;
}
/**
 * A reference to a SchemaMapping resource.
 *
 * @struct
 * @stability external
 */
export interface SchemaMappingReference {
    /**
     * The SchemaName of the SchemaMapping resource.
     */
    readonly schemaName: string;
}
/**
 * Indicates that this resource can be referenced as a IdMappingWorkflow.
 *
 * @stability experimental
 */
export interface IIdMappingWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdMappingWorkflow resource.
     */
    readonly idMappingWorkflowRef: IdMappingWorkflowReference;
}
/**
 * A reference to a IdMappingWorkflow resource.
 *
 * @struct
 * @stability external
 */
export interface IdMappingWorkflowReference {
    /**
     * The WorkflowName of the IdMappingWorkflow resource.
     */
    readonly workflowName: string;
}
/**
 * Indicates that this resource can be referenced as a IdNamespace.
 *
 * @stability experimental
 */
export interface IIdNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdNamespace resource.
     */
    readonly idNamespaceRef: IdNamespaceReference;
}
/**
 * A reference to a IdNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface IdNamespaceReference {
    /**
     * The IdNamespaceName of the IdNamespace resource.
     */
    readonly idNamespaceName: string;
    /**
     * The ARN of the IdNamespace resource.
     */
    readonly idNamespaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyStatement.
 *
 * @stability experimental
 */
export interface IPolicyStatementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyStatement resource.
     */
    readonly policyStatementRef: PolicyStatementReference;
}
/**
 * A reference to a PolicyStatement resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyStatementReference {
    /**
     * The Arn of the PolicyStatement resource.
     */
    readonly policyStatementArn: string;
    /**
     * The StatementId of the PolicyStatement resource.
     */
    readonly statementId: string;
}
