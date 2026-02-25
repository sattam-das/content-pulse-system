import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AllowList.
 *
 * @stability experimental
 */
export interface IAllowListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AllowList resource.
     */
    readonly allowListRef: AllowListReference;
}
/**
 * A reference to a AllowList resource.
 *
 * @struct
 * @stability external
 */
export interface AllowListReference {
    /**
     * The Id of the AllowList resource.
     */
    readonly allowListId: string;
    /**
     * The ARN of the AllowList resource.
     */
    readonly allowListArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomDataIdentifier.
 *
 * @stability experimental
 */
export interface ICustomDataIdentifierRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomDataIdentifier resource.
     */
    readonly customDataIdentifierRef: CustomDataIdentifierReference;
}
/**
 * A reference to a CustomDataIdentifier resource.
 *
 * @struct
 * @stability external
 */
export interface CustomDataIdentifierReference {
    /**
     * The Id of the CustomDataIdentifier resource.
     */
    readonly customDataIdentifierId: string;
    /**
     * The ARN of the CustomDataIdentifier resource.
     */
    readonly customDataIdentifierArn: string;
}
/**
 * Indicates that this resource can be referenced as a FindingsFilter.
 *
 * @stability experimental
 */
export interface IFindingsFilterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FindingsFilter resource.
     */
    readonly findingsFilterRef: FindingsFilterReference;
}
/**
 * A reference to a FindingsFilter resource.
 *
 * @struct
 * @stability external
 */
export interface FindingsFilterReference {
    /**
     * The Id of the FindingsFilter resource.
     */
    readonly findingsFilterId: string;
    /**
     * The ARN of the FindingsFilter resource.
     */
    readonly findingsFilterArn: string;
}
/**
 * Indicates that this resource can be referenced as a Session.
 *
 * @stability experimental
 */
export interface ISessionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Session resource.
     */
    readonly sessionRef: SessionReference;
}
/**
 * A reference to a Session resource.
 *
 * @struct
 * @stability external
 */
export interface SessionReference {
    /**
     * The AwsAccountId of the Session resource.
     */
    readonly awsAccountId: string;
}
