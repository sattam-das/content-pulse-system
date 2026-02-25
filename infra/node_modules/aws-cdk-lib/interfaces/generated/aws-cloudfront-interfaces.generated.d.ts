import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CachePolicy.
 *
 * @stability experimental
 */
export interface ICachePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CachePolicy resource.
     */
    readonly cachePolicyRef: CachePolicyReference;
}
/**
 * A reference to a CachePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface CachePolicyReference {
    /**
     * The Id of the CachePolicy resource.
     */
    readonly cachePolicyId: string;
}
/**
 * Indicates that this resource can be referenced as a CloudFrontOriginAccessIdentity.
 *
 * @stability experimental
 */
export interface ICloudFrontOriginAccessIdentityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudFrontOriginAccessIdentity resource.
     */
    readonly cloudFrontOriginAccessIdentityRef: CloudFrontOriginAccessIdentityReference;
}
/**
 * A reference to a CloudFrontOriginAccessIdentity resource.
 *
 * @struct
 * @stability external
 */
export interface CloudFrontOriginAccessIdentityReference {
    /**
     * The Id of the CloudFrontOriginAccessIdentity resource.
     */
    readonly cloudFrontOriginAccessIdentityId: string;
}
/**
 * Indicates that this resource can be referenced as a ContinuousDeploymentPolicy.
 *
 * @stability experimental
 */
export interface IContinuousDeploymentPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContinuousDeploymentPolicy resource.
     */
    readonly continuousDeploymentPolicyRef: ContinuousDeploymentPolicyReference;
}
/**
 * A reference to a ContinuousDeploymentPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ContinuousDeploymentPolicyReference {
    /**
     * The Id of the ContinuousDeploymentPolicy resource.
     */
    readonly continuousDeploymentPolicyId: string;
}
/**
 * Indicates that this resource can be referenced as a Distribution.
 *
 * @stability experimental
 */
export interface IDistributionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Distribution resource.
     */
    readonly distributionRef: DistributionReference;
}
/**
 * A reference to a Distribution resource.
 *
 * @struct
 * @stability external
 */
export interface DistributionReference {
    /**
     * The Id of the Distribution resource.
     */
    readonly distributionId: string;
}
/**
 * Indicates that this resource can be referenced as a Function.
 *
 * @stability experimental
 */
export interface IFunctionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Function resource.
     */
    readonly functionRef: FunctionReference;
}
/**
 * A reference to a Function resource.
 *
 * @struct
 * @stability external
 */
export interface FunctionReference {
    /**
     * The FunctionARN of the Function resource.
     */
    readonly functionArn: string;
}
/**
 * Indicates that this resource can be referenced as a KeyGroup.
 *
 * @stability experimental
 */
export interface IKeyGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a KeyGroup resource.
     */
    readonly keyGroupRef: KeyGroupReference;
}
/**
 * A reference to a KeyGroup resource.
 *
 * @struct
 * @stability external
 */
export interface KeyGroupReference {
    /**
     * The Id of the KeyGroup resource.
     */
    readonly keyGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a MonitoringSubscription.
 *
 * @stability experimental
 */
export interface IMonitoringSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MonitoringSubscription resource.
     */
    readonly monitoringSubscriptionRef: MonitoringSubscriptionReference;
}
/**
 * A reference to a MonitoringSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface MonitoringSubscriptionReference {
    /**
     * The DistributionId of the MonitoringSubscription resource.
     */
    readonly distributionId: string;
}
/**
 * Indicates that this resource can be referenced as a OriginAccessControl.
 *
 * @stability experimental
 */
export interface IOriginAccessControlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OriginAccessControl resource.
     */
    readonly originAccessControlRef: OriginAccessControlReference;
}
/**
 * A reference to a OriginAccessControl resource.
 *
 * @struct
 * @stability external
 */
export interface OriginAccessControlReference {
    /**
     * The Id of the OriginAccessControl resource.
     */
    readonly originAccessControlId: string;
}
/**
 * Indicates that this resource can be referenced as a OriginRequestPolicy.
 *
 * @stability experimental
 */
export interface IOriginRequestPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OriginRequestPolicy resource.
     */
    readonly originRequestPolicyRef: OriginRequestPolicyReference;
}
/**
 * A reference to a OriginRequestPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface OriginRequestPolicyReference {
    /**
     * The Id of the OriginRequestPolicy resource.
     */
    readonly originRequestPolicyId: string;
}
/**
 * Indicates that this resource can be referenced as a PublicKey.
 *
 * @stability experimental
 */
export interface IPublicKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublicKey resource.
     */
    readonly publicKeyRef: PublicKeyReference;
}
/**
 * A reference to a PublicKey resource.
 *
 * @struct
 * @stability external
 */
export interface PublicKeyReference {
    /**
     * The Id of the PublicKey resource.
     */
    readonly publicKeyId: string;
}
/**
 * Indicates that this resource can be referenced as a RealtimeLogConfig.
 *
 * @stability experimental
 */
export interface IRealtimeLogConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RealtimeLogConfig resource.
     */
    readonly realtimeLogConfigRef: RealtimeLogConfigReference;
}
/**
 * A reference to a RealtimeLogConfig resource.
 *
 * @struct
 * @stability external
 */
export interface RealtimeLogConfigReference {
    /**
     * The Arn of the RealtimeLogConfig resource.
     */
    readonly realtimeLogConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResponseHeadersPolicy.
 *
 * @stability experimental
 */
export interface IResponseHeadersPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResponseHeadersPolicy resource.
     */
    readonly responseHeadersPolicyRef: ResponseHeadersPolicyReference;
}
/**
 * A reference to a ResponseHeadersPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResponseHeadersPolicyReference {
    /**
     * The Id of the ResponseHeadersPolicy resource.
     */
    readonly responseHeadersPolicyId: string;
}
/**
 * Indicates that this resource can be referenced as a StreamingDistribution.
 *
 * @stability experimental
 */
export interface IStreamingDistributionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamingDistribution resource.
     */
    readonly streamingDistributionRef: StreamingDistributionReference;
}
/**
 * A reference to a StreamingDistribution resource.
 *
 * @struct
 * @stability external
 */
export interface StreamingDistributionReference {
    /**
     * The Id of the StreamingDistribution resource.
     */
    readonly streamingDistributionId: string;
}
/**
 * Indicates that this resource can be referenced as a AnycastIpList.
 *
 * @stability experimental
 */
export interface IAnycastIpListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnycastIpList resource.
     */
    readonly anycastIpListRef: AnycastIpListReference;
}
/**
 * A reference to a AnycastIpList resource.
 *
 * @struct
 * @stability external
 */
export interface AnycastIpListReference {
    /**
     * The Id of the AnycastIpList resource.
     */
    readonly anycastIpListId: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectionFunction.
 *
 * @stability experimental
 */
export interface IConnectionFunctionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectionFunction resource.
     */
    readonly connectionFunctionRef: ConnectionFunctionReference;
}
/**
 * A reference to a ConnectionFunction resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionFunctionReference {
    /**
     * The Id of the ConnectionFunction resource.
     */
    readonly connectionFunctionId: string;
    /**
     * The ARN of the ConnectionFunction resource.
     */
    readonly connectionFunctionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectionGroup.
 *
 * @stability experimental
 */
export interface IConnectionGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectionGroup resource.
     */
    readonly connectionGroupRef: ConnectionGroupReference;
}
/**
 * A reference to a ConnectionGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionGroupReference {
    /**
     * The Id of the ConnectionGroup resource.
     */
    readonly connectionGroupId: string;
    /**
     * The ARN of the ConnectionGroup resource.
     */
    readonly connectionGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a DistributionTenant.
 *
 * @stability experimental
 */
export interface IDistributionTenantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DistributionTenant resource.
     */
    readonly distributionTenantRef: DistributionTenantReference;
}
/**
 * A reference to a DistributionTenant resource.
 *
 * @struct
 * @stability external
 */
export interface DistributionTenantReference {
    /**
     * The Id of the DistributionTenant resource.
     */
    readonly distributionTenantId: string;
    /**
     * The ARN of the DistributionTenant resource.
     */
    readonly distributionTenantArn: string;
}
/**
 * Indicates that this resource can be referenced as a KeyValueStore.
 *
 * @stability experimental
 */
export interface IKeyValueStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a KeyValueStore resource.
     */
    readonly keyValueStoreRef: KeyValueStoreReference;
}
/**
 * A reference to a KeyValueStore resource.
 *
 * @struct
 * @stability external
 */
export interface KeyValueStoreReference {
    /**
     * The Name of the KeyValueStore resource.
     */
    readonly keyValueStoreName: string;
    /**
     * The ARN of the KeyValueStore resource.
     */
    readonly keyValueStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a TrustStore.
 *
 * @stability experimental
 */
export interface ITrustStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrustStore resource.
     */
    readonly trustStoreRef: TrustStoreReference;
}
/**
 * A reference to a TrustStore resource.
 *
 * @struct
 * @stability external
 */
export interface TrustStoreReference {
    /**
     * The Id of the TrustStore resource.
     */
    readonly trustStoreId: string;
    /**
     * The ARN of the TrustStore resource.
     */
    readonly trustStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a VpcOrigin.
 *
 * @stability experimental
 */
export interface IVpcOriginRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcOrigin resource.
     */
    readonly vpcOriginRef: VpcOriginReference;
}
/**
 * A reference to a VpcOrigin resource.
 *
 * @struct
 * @stability external
 */
export interface VpcOriginReference {
    /**
     * The Id of the VpcOrigin resource.
     */
    readonly vpcOriginId: string;
    /**
     * The ARN of the VpcOrigin resource.
     */
    readonly vpcOriginArn: string;
}
