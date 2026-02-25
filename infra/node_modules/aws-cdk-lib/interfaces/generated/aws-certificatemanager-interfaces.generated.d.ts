import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Account.
 *
 * @stability experimental
 */
export interface IAccountRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Account resource.
     */
    readonly accountRef: AccountReference;
}
/**
 * A reference to a Account resource.
 *
 * @struct
 * @stability external
 */
export interface AccountReference {
    /**
     * The AccountId of the Account resource.
     */
    readonly accountId: string;
}
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
     * The Id of the Certificate resource.
     */
    readonly certificateId: string;
}
