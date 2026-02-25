import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CRL.
 *
 * @stability experimental
 */
export interface ICRLRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CRL resource.
     */
    readonly crlRef: CRLReference;
}
/**
 * A reference to a CRL resource.
 *
 * @struct
 * @stability external
 */
export interface CRLReference {
    /**
     * The CrlId of the CRL resource.
     */
    readonly crlId: string;
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
 * Indicates that this resource can be referenced as a TrustAnchor.
 *
 * @stability experimental
 */
export interface ITrustAnchorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrustAnchor resource.
     */
    readonly trustAnchorRef: TrustAnchorReference;
}
/**
 * A reference to a TrustAnchor resource.
 *
 * @struct
 * @stability external
 */
export interface TrustAnchorReference {
    /**
     * The TrustAnchorId of the TrustAnchor resource.
     */
    readonly trustAnchorId: string;
    /**
     * The ARN of the TrustAnchor resource.
     */
    readonly trustAnchorArn: string;
}
