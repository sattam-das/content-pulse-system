import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a LoggingConfiguration.
 *
 * @stability experimental
 */
export interface ILoggingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoggingConfiguration resource.
     */
    readonly loggingConfigurationRef: LoggingConfigurationReference;
}
/**
 * A reference to a LoggingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface LoggingConfigurationReference {
    /**
     * The Arn of the LoggingConfiguration resource.
     */
    readonly loggingConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Room.
 *
 * @stability experimental
 */
export interface IRoomRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Room resource.
     */
    readonly roomRef: RoomReference;
}
/**
 * A reference to a Room resource.
 *
 * @struct
 * @stability external
 */
export interface RoomReference {
    /**
     * The Arn of the Room resource.
     */
    readonly roomArn: string;
}
