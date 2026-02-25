import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ApprovalTeam.
 *
 * @stability experimental
 */
export interface IApprovalTeamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApprovalTeam resource.
     */
    readonly approvalTeamRef: ApprovalTeamReference;
}
/**
 * A reference to a ApprovalTeam resource.
 *
 * @struct
 * @stability external
 */
export interface ApprovalTeamReference {
    /**
     * The Arn of the ApprovalTeam resource.
     */
    readonly approvalTeamArn: string;
}
/**
 * Indicates that this resource can be referenced as a IdentitySource.
 *
 * @stability experimental
 */
export interface IIdentitySourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentitySource resource.
     */
    readonly identitySourceRef: IdentitySourceReference;
}
/**
 * A reference to a IdentitySource resource.
 *
 * @struct
 * @stability external
 */
export interface IdentitySourceReference {
    /**
     * The IdentitySourceArn of the IdentitySource resource.
     */
    readonly identitySourceArn: string;
}
