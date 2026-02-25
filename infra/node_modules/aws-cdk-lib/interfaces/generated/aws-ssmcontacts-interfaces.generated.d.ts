import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Contact.
 *
 * @stability experimental
 */
export interface IContactRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Contact resource.
     */
    readonly contactRef: ContactReference;
}
/**
 * A reference to a Contact resource.
 *
 * @struct
 * @stability external
 */
export interface ContactReference {
    /**
     * The Arn of the Contact resource.
     */
    readonly contactArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContactChannel.
 *
 * @stability experimental
 */
export interface IContactChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContactChannel resource.
     */
    readonly contactChannelRef: ContactChannelReference;
}
/**
 * A reference to a ContactChannel resource.
 *
 * @struct
 * @stability external
 */
export interface ContactChannelReference {
    /**
     * The Arn of the ContactChannel resource.
     */
    readonly contactChannelArn: string;
}
/**
 * Indicates that this resource can be referenced as a Plan.
 *
 * @stability experimental
 */
export interface IPlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Plan resource.
     */
    readonly planRef: PlanReference;
}
/**
 * A reference to a Plan resource.
 *
 * @struct
 * @stability external
 */
export interface PlanReference {
    /**
     * The Arn of the Plan resource.
     */
    readonly planArn: string;
}
/**
 * Indicates that this resource can be referenced as a Rotation.
 *
 * @stability experimental
 */
export interface IRotationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Rotation resource.
     */
    readonly rotationRef: RotationReference;
}
/**
 * A reference to a Rotation resource.
 *
 * @struct
 * @stability external
 */
export interface RotationReference {
    /**
     * The Arn of the Rotation resource.
     */
    readonly rotationArn: string;
}
