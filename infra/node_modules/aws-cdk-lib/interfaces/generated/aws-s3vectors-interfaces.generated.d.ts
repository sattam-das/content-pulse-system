import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Index.
 *
 * @stability experimental
 */
export interface IIndexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Index resource.
     */
    readonly indexRef: IndexReference;
}
/**
 * A reference to a Index resource.
 *
 * @struct
 * @stability external
 */
export interface IndexReference {
    /**
     * The IndexArn of the Index resource.
     */
    readonly indexArn: string;
}
/**
 * Indicates that this resource can be referenced as a VectorBucket.
 *
 * @stability experimental
 */
export interface IVectorBucketRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VectorBucket resource.
     */
    readonly vectorBucketRef: VectorBucketReference;
}
/**
 * A reference to a VectorBucket resource.
 *
 * @struct
 * @stability external
 */
export interface VectorBucketReference {
    /**
     * The VectorBucketArn of the VectorBucket resource.
     */
    readonly vectorBucketArn: string;
}
/**
 * Indicates that this resource can be referenced as a VectorBucketPolicy.
 *
 * @stability experimental
 */
export interface IVectorBucketPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VectorBucketPolicy resource.
     */
    readonly vectorBucketPolicyRef: VectorBucketPolicyReference;
}
/**
 * A reference to a VectorBucketPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface VectorBucketPolicyReference {
    /**
     * The VectorBucketArn of the VectorBucketPolicy resource.
     */
    readonly vectorBucketArn: string;
}
