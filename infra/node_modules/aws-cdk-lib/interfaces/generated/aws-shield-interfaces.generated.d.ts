import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DRTAccess.
 *
 * @stability experimental
 */
export interface IDRTAccessRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DRTAccess resource.
     */
    readonly drtAccessRef: DRTAccessReference;
}
/**
 * A reference to a DRTAccess resource.
 *
 * @struct
 * @stability external
 */
export interface DRTAccessReference {
    /**
     * The AccountId of the DRTAccess resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a ProactiveEngagement.
 *
 * @stability experimental
 */
export interface IProactiveEngagementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProactiveEngagement resource.
     */
    readonly proactiveEngagementRef: ProactiveEngagementReference;
}
/**
 * A reference to a ProactiveEngagement resource.
 *
 * @struct
 * @stability external
 */
export interface ProactiveEngagementReference {
    /**
     * The AccountId of the ProactiveEngagement resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a Protection.
 *
 * @stability experimental
 */
export interface IProtectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Protection resource.
     */
    readonly protectionRef: ProtectionReference;
}
/**
 * A reference to a Protection resource.
 *
 * @struct
 * @stability external
 */
export interface ProtectionReference {
    /**
     * The ProtectionArn of the Protection resource.
     */
    readonly protectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ProtectionGroup.
 *
 * @stability experimental
 */
export interface IProtectionGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProtectionGroup resource.
     */
    readonly protectionGroupRef: ProtectionGroupReference;
}
/**
 * A reference to a ProtectionGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ProtectionGroupReference {
    /**
     * The ProtectionGroupArn of the ProtectionGroup resource.
     */
    readonly protectionGroupArn: string;
}
