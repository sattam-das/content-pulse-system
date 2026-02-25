import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Listener.
 *
 * @stability experimental
 */
export interface IListenerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Listener resource.
     */
    readonly listenerRef: ListenerReference;
}
/**
 * A reference to a Listener resource.
 *
 * @struct
 * @stability external
 */
export interface ListenerReference {
    /**
     * The ListenerArn of the Listener resource.
     */
    readonly listenerArn: string;
}
/**
 * Indicates that this resource can be referenced as a ListenerCertificate.
 *
 * @stability experimental
 */
export interface IListenerCertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ListenerCertificate resource.
     */
    readonly listenerCertificateRef: ListenerCertificateReference;
}
/**
 * A reference to a ListenerCertificate resource.
 *
 * @struct
 * @stability external
 */
export interface ListenerCertificateReference {
    /**
     * The Id of the ListenerCertificate resource.
     */
    readonly listenerCertificateId: string;
}
/**
 * Indicates that this resource can be referenced as a ListenerRule.
 *
 * @stability experimental
 */
export interface IListenerRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ListenerRule resource.
     */
    readonly listenerRuleRef: ListenerRuleReference;
}
/**
 * A reference to a ListenerRule resource.
 *
 * @struct
 * @stability external
 */
export interface ListenerRuleReference {
    /**
     * The RuleArn of the ListenerRule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a LoadBalancer.
 *
 * @stability experimental
 */
export interface ILoadBalancerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoadBalancer resource.
     */
    readonly loadBalancerRef: LoadBalancerReference;
}
/**
 * A reference to a LoadBalancer resource.
 *
 * @struct
 * @stability external
 */
export interface LoadBalancerReference {
    /**
     * The LoadBalancerArn of the LoadBalancer resource.
     */
    readonly loadBalancerArn: string;
}
/**
 * Indicates that this resource can be referenced as a TargetGroup.
 *
 * @stability experimental
 */
export interface ITargetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TargetGroup resource.
     */
    readonly targetGroupRef: TargetGroupReference;
}
/**
 * A reference to a TargetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface TargetGroupReference {
    /**
     * The TargetGroupArn of the TargetGroup resource.
     */
    readonly targetGroupArn: string;
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
     * The TrustStoreArn of the TrustStore resource.
     */
    readonly trustStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a TrustStoreRevocation.
 *
 * @stability experimental
 */
export interface ITrustStoreRevocationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrustStoreRevocation resource.
     */
    readonly trustStoreRevocationRef: TrustStoreRevocationReference;
}
/**
 * A reference to a TrustStoreRevocation resource.
 *
 * @struct
 * @stability external
 */
export interface TrustStoreRevocationReference {
    /**
     * The RevocationId of the TrustStoreRevocation resource.
     */
    readonly revocationId: string;
    /**
     * The TrustStoreArn of the TrustStoreRevocation resource.
     */
    readonly trustStoreArn: string;
}
