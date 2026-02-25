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
 * Indicates that this resource can be referenced as a AccessPointPolicy.
 *
 * @stability experimental
 */
export interface IAccessPointPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessPointPolicy resource.
     */
    readonly accessPointPolicyRef: AccessPointPolicyReference;
}
/**
 * A reference to a AccessPointPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface AccessPointPolicyReference {
    /**
     * The ObjectLambdaAccessPoint of the AccessPointPolicy resource.
     */
    readonly objectLambdaAccessPoint: string;
}
