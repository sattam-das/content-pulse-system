import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Group.
 *
 * @stability experimental
 */
export interface IGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Group resource.
     */
    readonly groupRef: GroupReference;
}
/**
 * A reference to a Group resource.
 *
 * @struct
 * @stability external
 */
export interface GroupReference {
    /**
     * The GroupId of the Group resource.
     */
    readonly groupId: string;
    /**
     * The IdentityStoreId of the Group resource.
     */
    readonly identityStoreId: string;
}
/**
 * Indicates that this resource can be referenced as a GroupMembership.
 *
 * @stability experimental
 */
export interface IGroupMembershipRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GroupMembership resource.
     */
    readonly groupMembershipRef: GroupMembershipReference;
}
/**
 * A reference to a GroupMembership resource.
 *
 * @struct
 * @stability external
 */
export interface GroupMembershipReference {
    /**
     * The MembershipId of the GroupMembership resource.
     */
    readonly membershipId: string;
    /**
     * The IdentityStoreId of the GroupMembership resource.
     */
    readonly identityStoreId: string;
}
