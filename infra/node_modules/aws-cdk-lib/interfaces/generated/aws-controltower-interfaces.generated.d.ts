import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a EnabledControl.
 *
 * @stability experimental
 */
export interface IEnabledControlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnabledControl resource.
     */
    readonly enabledControlRef: EnabledControlReference;
}
/**
 * A reference to a EnabledControl resource.
 *
 * @struct
 * @stability external
 */
export interface EnabledControlReference {
    /**
     * The TargetIdentifier of the EnabledControl resource.
     */
    readonly targetIdentifier: string;
    /**
     * The ControlIdentifier of the EnabledControl resource.
     */
    readonly controlIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a EnabledBaseline.
 *
 * @stability experimental
 */
export interface IEnabledBaselineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnabledBaseline resource.
     */
    readonly enabledBaselineRef: EnabledBaselineReference;
}
/**
 * A reference to a EnabledBaseline resource.
 *
 * @struct
 * @stability external
 */
export interface EnabledBaselineReference {
    /**
     * The EnabledBaselineIdentifier of the EnabledBaseline resource.
     */
    readonly enabledBaselineIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a LandingZone.
 *
 * @stability experimental
 */
export interface ILandingZoneRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LandingZone resource.
     */
    readonly landingZoneRef: LandingZoneReference;
}
/**
 * A reference to a LandingZone resource.
 *
 * @struct
 * @stability external
 */
export interface LandingZoneReference {
    /**
     * The LandingZoneIdentifier of the LandingZone resource.
     */
    readonly landingZoneIdentifier: string;
    /**
     * The ARN of the LandingZone resource.
     */
    readonly landingZoneArn: string;
}
