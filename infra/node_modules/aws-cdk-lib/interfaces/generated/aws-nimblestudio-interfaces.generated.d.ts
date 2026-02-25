import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a LaunchProfile.
 *
 * @stability experimental
 */
export interface ILaunchProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchProfile resource.
     */
    readonly launchProfileRef: LaunchProfileReference;
}
/**
 * A reference to a LaunchProfile resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchProfileReference {
}
/**
 * Indicates that this resource can be referenced as a StreamingImage.
 *
 * @stability experimental
 */
export interface IStreamingImageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamingImage resource.
     */
    readonly streamingImageRef: StreamingImageReference;
}
/**
 * A reference to a StreamingImage resource.
 *
 * @struct
 * @stability external
 */
export interface StreamingImageReference {
}
/**
 * Indicates that this resource can be referenced as a Studio.
 *
 * @stability experimental
 */
export interface IStudioRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Studio resource.
     */
    readonly studioRef: StudioReference;
}
/**
 * A reference to a Studio resource.
 *
 * @struct
 * @stability external
 */
export interface StudioReference {
    /**
     * The StudioId of the Studio resource.
     */
    readonly studioId: string;
}
/**
 * Indicates that this resource can be referenced as a StudioComponent.
 *
 * @stability experimental
 */
export interface IStudioComponentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StudioComponent resource.
     */
    readonly studioComponentRef: StudioComponentReference;
}
/**
 * A reference to a StudioComponent resource.
 *
 * @struct
 * @stability external
 */
export interface StudioComponentReference {
}
