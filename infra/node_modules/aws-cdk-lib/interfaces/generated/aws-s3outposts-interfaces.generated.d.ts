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
     * The Arn of the AccessPoint resource.
     */
    readonly accessPointArn: string;
}
/**
 * Indicates that this resource can be referenced as a Bucket.
 *
 * @stability experimental
 */
export interface IBucketRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Bucket resource.
     */
    readonly bucketRef: BucketReference;
}
/**
 * A reference to a Bucket resource.
 *
 * @struct
 * @stability external
 */
export interface BucketReference {
    /**
     * The Arn of the Bucket resource.
     */
    readonly bucketArn: string;
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
 * Indicates that this resource can be referenced as a Endpoint.
 *
 * @stability experimental
 */
export interface IEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Endpoint resource.
     */
    readonly endpointRef: EndpointReference;
}
/**
 * A reference to a Endpoint resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointReference {
    /**
     * The Arn of the Endpoint resource.
     */
    readonly endpointArn: string;
}
