import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Namespace.
 *
 * @stability experimental
 */
export interface INamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Namespace resource.
     */
    readonly namespaceRef: NamespaceReference;
}
/**
 * A reference to a Namespace resource.
 *
 * @struct
 * @stability external
 */
export interface NamespaceReference {
    /**
     * The TableBucketARN of the Namespace resource.
     */
    readonly tableBucketArn: string;
    /**
     * The Namespace of the Namespace resource.
     */
    readonly namespace: string;
}
/**
 * Indicates that this resource can be referenced as a Table.
 *
 * @stability experimental
 */
export interface ITableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Table resource.
     */
    readonly tableRef: TableReference;
}
/**
 * A reference to a Table resource.
 *
 * @struct
 * @stability external
 */
export interface TableReference {
    /**
     * The TableARN of the Table resource.
     */
    readonly tableArn: string;
}
/**
 * Indicates that this resource can be referenced as a TableBucket.
 *
 * @stability experimental
 */
export interface ITableBucketRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TableBucket resource.
     */
    readonly tableBucketRef: TableBucketReference;
}
/**
 * A reference to a TableBucket resource.
 *
 * @struct
 * @stability external
 */
export interface TableBucketReference {
    /**
     * The TableBucketARN of the TableBucket resource.
     */
    readonly tableBucketArn: string;
}
/**
 * Indicates that this resource can be referenced as a TableBucketPolicy.
 *
 * @stability experimental
 */
export interface ITableBucketPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TableBucketPolicy resource.
     */
    readonly tableBucketPolicyRef: TableBucketPolicyReference;
}
/**
 * A reference to a TableBucketPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface TableBucketPolicyReference {
    /**
     * The TableBucketARN of the TableBucketPolicy resource.
     */
    readonly tableBucketArn: string;
}
/**
 * Indicates that this resource can be referenced as a TablePolicy.
 *
 * @stability experimental
 */
export interface ITablePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TablePolicy resource.
     */
    readonly tablePolicyRef: TablePolicyReference;
}
/**
 * A reference to a TablePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface TablePolicyReference {
    /**
     * The TableARN of the TablePolicy resource.
     */
    readonly tableArn: string;
}
