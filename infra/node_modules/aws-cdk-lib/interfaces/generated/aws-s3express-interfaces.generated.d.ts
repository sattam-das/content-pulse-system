import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessPoint.
 *
 * @stability experimental
 */
export interface IAccessPointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessPoint resource.
     */
    readonly accessPointRef: AccessPointReference;
}
/**
 * A reference to a AccessPoint resource.
 *
 * @struct
 * @stability external
 */
export interface AccessPointReference {
    /**
     * The Name of the AccessPoint resource.
     */
    readonly accessPointName: string;
    /**
     * The ARN of the AccessPoint resource.
     */
    readonly accessPointArn: string;
}
/**
 * Indicates that this resource can be referenced as a BucketPolicy.
 *
 * @stability experimental
 */
export interface IBucketPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BucketPolicy resource.
     */
    readonly bucketPolicyRef: BucketPolicyReference;
}
/**
 * A reference to a BucketPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface BucketPolicyReference {
    /**
     * The Bucket of the BucketPolicy resource.
     */
    readonly bucket: string;
}
/**
 * Indicates that this resource can be referenced as a DirectoryBucket.
 *
 * @stability experimental
 */
export interface IDirectoryBucketRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DirectoryBucket resource.
     */
    readonly directoryBucketRef: DirectoryBucketReference;
}
/**
 * A reference to a DirectoryBucket resource.
 *
 * @struct
 * @stability external
 */
export interface DirectoryBucketReference {
    /**
     * The BucketName of the DirectoryBucket resource.
     */
    readonly bucketName: string;
    /**
     * The ARN of the DirectoryBucket resource.
     */
    readonly directoryBucketArn: string;
}
