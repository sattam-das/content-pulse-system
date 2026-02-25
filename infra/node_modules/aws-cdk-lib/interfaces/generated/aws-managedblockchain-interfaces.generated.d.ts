import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Accessor.
 *
 * @stability experimental
 */
export interface IAccessorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Accessor resource.
     */
    readonly accessorRef: AccessorReference;
}
/**
 * A reference to a Accessor resource.
 *
 * @struct
 * @stability external
 */
export interface AccessorReference {
    /**
     * The Id of the Accessor resource.
     */
    readonly accessorId: string;
    /**
     * The ARN of the Accessor resource.
     */
    readonly accessorArn: string;
}
/**
 * Indicates that this resource can be referenced as a Member.
 *
 * @stability experimental
 */
export interface IMemberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Member resource.
     */
    readonly memberRef: MemberReference;
}
/**
 * A reference to a Member resource.
 *
 * @struct
 * @stability external
 */
export interface MemberReference {
    /**
     * The MemberId of the Member resource.
     */
    readonly memberId: string;
}
/**
 * Indicates that this resource can be referenced as a Node.
 *
 * @stability experimental
 */
export interface INodeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Node resource.
     */
    readonly nodeRef: NodeReference;
}
/**
 * A reference to a Node resource.
 *
 * @struct
 * @stability external
 */
export interface NodeReference {
    /**
     * The NodeId of the Node resource.
     */
    readonly nodeId: string;
    /**
     * The ARN of the Node resource.
     */
    readonly nodeArn: string;
}
