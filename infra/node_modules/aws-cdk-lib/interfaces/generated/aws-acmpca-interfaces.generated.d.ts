import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Certificate.
 *
 * @stability experimental
 */
export interface ICertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Certificate resource.
     */
    readonly certificateRef: CertificateReference;
}
/**
 * A reference to a Certificate resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateReference {
    /**
     * The Arn of the Certificate resource.
     */
    readonly certificateArn: string;
    /**
     * The CertificateAuthorityArn of the Certificate resource.
     */
    readonly certificateAuthorityArn: string;
}
/**
 * Indicates that this resource can be referenced as a CertificateAuthority.
 *
 * @stability experimental
 */
export interface ICertificateAuthorityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CertificateAuthority resource.
     */
    readonly certificateAuthorityRef: CertificateAuthorityReference;
}
/**
 * A reference to a CertificateAuthority resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateAuthorityReference {
    /**
     * The Arn of the CertificateAuthority resource.
     */
    readonly certificateAuthorityArn: string;
}
/**
 * Indicates that this resource can be referenced as a CertificateAuthorityActivation.
 *
 * @stability experimental
 */
export interface ICertificateAuthorityActivationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CertificateAuthorityActivation resource.
     */
    readonly certificateAuthorityActivationRef: CertificateAuthorityActivationReference;
}
/**
 * A reference to a CertificateAuthorityActivation resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateAuthorityActivationReference {
    /**
     * The CertificateAuthorityArn of the CertificateAuthorityActivation resource.
     */
    readonly certificateAuthorityArn: string;
}
/**
 * Indicates that this resource can be referenced as a Permission.
 *
 * @stability experimental
 */
export interface IPermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Permission resource.
     */
    readonly permissionRef: PermissionReference;
}
/**
 * A reference to a Permission resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionReference {
    /**
     * The CertificateAuthorityArn of the Permission resource.
     */
    readonly certificateAuthorityArn: string;
    /**
     * The Principal of the Permission resource.
     */
    readonly principal: string;
}
