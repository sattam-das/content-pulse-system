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
     * The BucketName of the Bucket resource.
     */
    readonly bucketName: string;
    /**
     * The ARN of the Bucket resource.
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
 * Indicates that this resource can be referenced as a MultiRegionAccessPoint.
 *
 * @stability experimental
 */
export interface IMultiRegionAccessPointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MultiRegionAccessPoint resource.
     */
    readonly multiRegionAccessPointRef: MultiRegionAccessPointReference;
}
/**
 * A reference to a MultiRegionAccessPoint resource.
 *
 * @struct
 * @stability external
 */
export interface MultiRegionAccessPointReference {
    /**
     * The Name of the MultiRegionAccessPoint resource.
     */
    readonly multiRegionAccessPointName: string;
}
/**
 * Indicates that this resource can be referenced as a MultiRegionAccessPointPolicy.
 *
 * @stability experimental
 */
export interface IMultiRegionAccessPointPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MultiRegionAccessPointPolicy resource.
     */
    readonly multiRegionAccessPointPolicyRef: MultiRegionAccessPointPolicyReference;
}
/**
 * A reference to a MultiRegionAccessPointPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface MultiRegionAccessPointPolicyReference {
    /**
     * The MrapName of the MultiRegionAccessPointPolicy resource.
     */
    readonly mrapName: string;
}
/**
 * Indicates that this resource can be referenced as a StorageLens.
 *
 * @stability experimental
 */
export interface IStorageLensRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StorageLens resource.
     */
    readonly storageLensRef: StorageLensReference;
}
/**
 * A reference to a StorageLens resource.
 *
 * @struct
 * @stability external
 */
export interface StorageLensReference {
    /**
     * The StorageLensConfiguration/Id of the StorageLens resource.
     */
    readonly storageLensId: string;
}
/**
 * Indicates that this resource can be referenced as a AccessGrant.
 *
 * @stability experimental
 */
export interface IAccessGrantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessGrant resource.
     */
    readonly accessGrantRef: AccessGrantReference;
}
/**
 * A reference to a AccessGrant resource.
 *
 * @struct
 * @stability external
 */
export interface AccessGrantReference {
    /**
     * The AccessGrantId of the AccessGrant resource.
     */
    readonly accessGrantId: string;
    /**
     * The ARN of the AccessGrant resource.
     */
    readonly accessGrantArn: string;
}
/**
 * Indicates that this resource can be referenced as a AccessGrantsInstance.
 *
 * @stability experimental
 */
export interface IAccessGrantsInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessGrantsInstance resource.
     */
    readonly accessGrantsInstanceRef: AccessGrantsInstanceReference;
}
/**
 * A reference to a AccessGrantsInstance resource.
 *
 * @struct
 * @stability external
 */
export interface AccessGrantsInstanceReference {
    /**
     * The AccessGrantsInstanceArn of the AccessGrantsInstance resource.
     */
    readonly accessGrantsInstanceArn: string;
}
/**
 * Indicates that this resource can be referenced as a AccessGrantsLocation.
 *
 * @stability experimental
 */
export interface IAccessGrantsLocationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessGrantsLocation resource.
     */
    readonly accessGrantsLocationRef: AccessGrantsLocationReference;
}
/**
 * A reference to a AccessGrantsLocation resource.
 *
 * @struct
 * @stability external
 */
export interface AccessGrantsLocationReference {
    /**
     * The AccessGrantsLocationId of the AccessGrantsLocation resource.
     */
    readonly accessGrantsLocationId: string;
    /**
     * The ARN of the AccessGrantsLocation resource.
     */
    readonly accessGrantsLocationArn: string;
}
/**
 * Indicates that this resource can be referenced as a StorageLensGroup.
 *
 * @stability experimental
 */
export interface IStorageLensGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StorageLensGroup resource.
     */
    readonly storageLensGroupRef: StorageLensGroupReference;
}
/**
 * A reference to a StorageLensGroup resource.
 *
 * @struct
 * @stability external
 */
export interface StorageLensGroupReference {
    /**
     * The Name of the StorageLensGroup resource.
     */
    readonly storageLensGroupName: string;
    /**
     * The ARN of the StorageLensGroup resource.
     */
    readonly storageLensGroupArn: string;
}
