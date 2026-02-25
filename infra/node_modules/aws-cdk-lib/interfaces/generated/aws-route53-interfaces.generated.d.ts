import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CidrCollection.
 *
 * @stability experimental
 */
export interface ICidrCollectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CidrCollection resource.
     */
    readonly cidrCollectionRef: CidrCollectionReference;
}
/**
 * A reference to a CidrCollection resource.
 *
 * @struct
 * @stability external
 */
export interface CidrCollectionReference {
    /**
     * The Id of the CidrCollection resource.
     */
    readonly cidrCollectionId: string;
    /**
     * The ARN of the CidrCollection resource.
     */
    readonly cidrCollectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a DNSSEC.
 *
 * @stability experimental
 */
export interface IDNSSECRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DNSSEC resource.
     */
    readonly dnssecRef: DNSSECReference;
}
/**
 * A reference to a DNSSEC resource.
 *
 * @struct
 * @stability external
 */
export interface DNSSECReference {
    /**
     * The HostedZoneId of the DNSSEC resource.
     */
    readonly hostedZoneId: string;
}
/**
 * Indicates that this resource can be referenced as a HealthCheck.
 *
 * @stability experimental
 */
export interface IHealthCheckRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HealthCheck resource.
     */
    readonly healthCheckRef: HealthCheckReference;
}
/**
 * A reference to a HealthCheck resource.
 *
 * @struct
 * @stability external
 */
export interface HealthCheckReference {
    /**
     * The HealthCheckId of the HealthCheck resource.
     */
    readonly healthCheckId: string;
}
/**
 * Indicates that this resource can be referenced as a HostedZone.
 *
 * @stability experimental
 */
export interface IHostedZoneRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HostedZone resource.
     */
    readonly hostedZoneRef: HostedZoneReference;
}
/**
 * A reference to a HostedZone resource.
 *
 * @struct
 * @stability external
 */
export interface HostedZoneReference {
    /**
     * The Id of the HostedZone resource.
     */
    readonly hostedZoneId: string;
}
/**
 * Indicates that this resource can be referenced as a KeySigningKey.
 *
 * @stability experimental
 */
export interface IKeySigningKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a KeySigningKey resource.
     */
    readonly keySigningKeyRef: KeySigningKeyReference;
}
/**
 * A reference to a KeySigningKey resource.
 *
 * @struct
 * @stability external
 */
export interface KeySigningKeyReference {
    /**
     * The HostedZoneId of the KeySigningKey resource.
     */
    readonly hostedZoneId: string;
    /**
     * The Name of the KeySigningKey resource.
     */
    readonly keySigningKeyName: string;
}
/**
 * Indicates that this resource can be referenced as a RecordSet.
 *
 * @stability experimental
 */
export interface IRecordSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RecordSet resource.
     */
    readonly recordSetRef: RecordSetReference;
}
/**
 * A reference to a RecordSet resource.
 *
 * @struct
 * @stability external
 */
export interface RecordSetReference {
    /**
     * The Name of the RecordSet resource.
     */
    readonly recordSetName: string;
}
/**
 * Indicates that this resource can be referenced as a RecordSetGroup.
 *
 * @stability experimental
 */
export interface IRecordSetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RecordSetGroup resource.
     */
    readonly recordSetGroupRef: RecordSetGroupReference;
}
/**
 * A reference to a RecordSetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface RecordSetGroupReference {
    /**
     * The Id of the RecordSetGroup resource.
     */
    readonly recordSetGroupId: string;
}
