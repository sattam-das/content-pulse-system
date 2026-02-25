import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Capability.
 *
 * @stability experimental
 */
export interface ICapabilityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Capability resource.
     */
    readonly capabilityRef: CapabilityReference;
}
/**
 * A reference to a Capability resource.
 *
 * @struct
 * @stability external
 */
export interface CapabilityReference {
    /**
     * The CapabilityId of the Capability resource.
     */
    readonly capabilityId: string;
    /**
     * The ARN of the Capability resource.
     */
    readonly capabilityArn: string;
}
/**
 * Indicates that this resource can be referenced as a Partnership.
 *
 * @stability experimental
 */
export interface IPartnershipRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Partnership resource.
     */
    readonly partnershipRef: PartnershipReference;
}
/**
 * A reference to a Partnership resource.
 *
 * @struct
 * @stability external
 */
export interface PartnershipReference {
    /**
     * The PartnershipId of the Partnership resource.
     */
    readonly partnershipId: string;
    /**
     * The ARN of the Partnership resource.
     */
    readonly partnershipArn: string;
}
/**
 * Indicates that this resource can be referenced as a Profile.
 *
 * @stability experimental
 */
export interface IProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Profile resource.
     */
    readonly profileRef: ProfileReference;
}
/**
 * A reference to a Profile resource.
 *
 * @struct
 * @stability external
 */
export interface ProfileReference {
    /**
     * The ProfileId of the Profile resource.
     */
    readonly profileId: string;
    /**
     * The ARN of the Profile resource.
     */
    readonly profileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Transformer.
 *
 * @stability experimental
 */
export interface ITransformerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Transformer resource.
     */
    readonly transformerRef: TransformerReference;
}
/**
 * A reference to a Transformer resource.
 *
 * @struct
 * @stability external
 */
export interface TransformerReference {
    /**
     * The TransformerId of the Transformer resource.
     */
    readonly transformerId: string;
    /**
     * The ARN of the Transformer resource.
     */
    readonly transformerArn: string;
}
