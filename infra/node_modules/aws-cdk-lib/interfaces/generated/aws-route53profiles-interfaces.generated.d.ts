import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Id of the Profile resource.
     */
    readonly profileId: string;
    /**
     * The ARN of the Profile resource.
     */
    readonly profileArn: string;
}
/**
 * Indicates that this resource can be referenced as a ProfileAssociation.
 *
 * @stability experimental
 */
export interface IProfileAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProfileAssociation resource.
     */
    readonly profileAssociationRef: ProfileAssociationReference;
}
/**
 * A reference to a ProfileAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ProfileAssociationReference {
    /**
     * The Id of the ProfileAssociation resource.
     */
    readonly profileAssociationId: string;
    /**
     * The ResourceId of the ProfileAssociation resource.
     */
    readonly resourceId: string;
}
/**
 * Indicates that this resource can be referenced as a ProfileResourceAssociation.
 *
 * @stability experimental
 */
export interface IProfileResourceAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProfileResourceAssociation resource.
     */
    readonly profileResourceAssociationRef: ProfileResourceAssociationReference;
}
/**
 * A reference to a ProfileResourceAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ProfileResourceAssociationReference {
    /**
     * The Id of the ProfileResourceAssociation resource.
     */
    readonly profileResourceAssociationId: string;
}
