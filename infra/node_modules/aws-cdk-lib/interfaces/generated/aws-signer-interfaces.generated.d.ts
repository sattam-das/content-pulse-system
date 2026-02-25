import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ProfilePermission.
 *
 * @stability experimental
 */
export interface IProfilePermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProfilePermission resource.
     */
    readonly profilePermissionRef: ProfilePermissionReference;
}
/**
 * A reference to a ProfilePermission resource.
 *
 * @struct
 * @stability external
 */
export interface ProfilePermissionReference {
    /**
     * The StatementId of the ProfilePermission resource.
     */
    readonly statementId: string;
    /**
     * The ProfileName of the ProfilePermission resource.
     */
    readonly profileName: string;
}
/**
 * Indicates that this resource can be referenced as a SigningProfile.
 *
 * @stability experimental
 */
export interface ISigningProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SigningProfile resource.
     */
    readonly signingProfileRef: SigningProfileReference;
}
/**
 * A reference to a SigningProfile resource.
 *
 * @struct
 * @stability external
 */
export interface SigningProfileReference {
    /**
     * The Arn of the SigningProfile resource.
     */
    readonly signingProfileArn: string;
}
