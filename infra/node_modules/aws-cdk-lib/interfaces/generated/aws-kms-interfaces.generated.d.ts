import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Alias.
 *
 * @stability experimental
 */
export interface IAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Alias resource.
     */
    readonly aliasRef: AliasReference;
}
/**
 * A reference to a Alias resource.
 *
 * @struct
 * @stability external
 */
export interface AliasReference {
    /**
     * The AliasName of the Alias resource.
     */
    readonly aliasName: string;
}
/**
 * Indicates that this resource can be referenced as a Key.
 *
 * @stability experimental
 */
export interface IKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Key resource.
     */
    readonly keyRef: KeyReference;
}
/**
 * A reference to a Key resource.
 *
 * @struct
 * @stability external
 */
export interface KeyReference {
    /**
     * The KeyId of the Key resource.
     */
    readonly keyId: string;
    /**
     * The ARN of the Key resource.
     */
    readonly keyArn: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicaKey.
 *
 * @stability experimental
 */
export interface IReplicaKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicaKey resource.
     */
    readonly replicaKeyRef: ReplicaKeyReference;
}
/**
 * A reference to a ReplicaKey resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicaKeyReference {
    /**
     * The KeyId of the ReplicaKey resource.
     */
    readonly keyId: string;
    /**
     * The ARN of the ReplicaKey resource.
     */
    readonly replicaKeyArn: string;
}
