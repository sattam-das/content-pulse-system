import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Graph.
 *
 * @stability experimental
 */
export interface IGraphRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Graph resource.
     */
    readonly graphRef: GraphReference;
}
/**
 * A reference to a Graph resource.
 *
 * @struct
 * @stability external
 */
export interface GraphReference {
    /**
     * The Arn of the Graph resource.
     */
    readonly graphArn: string;
}
/**
 * Indicates that this resource can be referenced as a MemberInvitation.
 *
 * @stability experimental
 */
export interface IMemberInvitationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MemberInvitation resource.
     */
    readonly memberInvitationRef: MemberInvitationReference;
}
/**
 * A reference to a MemberInvitation resource.
 *
 * @struct
 * @stability external
 */
export interface MemberInvitationReference {
    /**
     * The GraphArn of the MemberInvitation resource.
     */
    readonly graphArn: string;
    /**
     * The MemberId of the MemberInvitation resource.
     */
    readonly memberId: string;
}
/**
 * Indicates that this resource can be referenced as a OrganizationAdmin.
 *
 * @stability experimental
 */
export interface IOrganizationAdminRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OrganizationAdmin resource.
     */
    readonly organizationAdminRef: OrganizationAdminReference;
}
/**
 * A reference to a OrganizationAdmin resource.
 *
 * @struct
 * @stability external
 */
export interface OrganizationAdminReference {
    /**
     * The AccountId of the OrganizationAdmin resource.
     */
    readonly accountId: string;
}
