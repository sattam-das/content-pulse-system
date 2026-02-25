import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Fleet.
 *
 * @stability experimental
 */
export interface IFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Fleet resource.
     */
    readonly fleetRef: FleetReference;
}
/**
 * A reference to a Fleet resource.
 *
 * @struct
 * @stability external
 */
export interface FleetReference {
    /**
     * The ARN of the Fleet resource.
     */
    readonly fleetArn: string;
}
/**
 * Indicates that this resource can be referenced as a Robot.
 *
 * @stability experimental
 */
export interface IRobotRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Robot resource.
     */
    readonly robotRef: RobotReference;
}
/**
 * A reference to a Robot resource.
 *
 * @struct
 * @stability external
 */
export interface RobotReference {
    /**
     * The ARN of the Robot resource.
     */
    readonly robotArn: string;
}
/**
 * Indicates that this resource can be referenced as a RobotApplication.
 *
 * @stability experimental
 */
export interface IRobotApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RobotApplication resource.
     */
    readonly robotApplicationRef: RobotApplicationReference;
}
/**
 * A reference to a RobotApplication resource.
 *
 * @struct
 * @stability external
 */
export interface RobotApplicationReference {
    /**
     * The ARN of the RobotApplication resource.
     */
    readonly robotApplicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a RobotApplicationVersion.
 *
 * @stability experimental
 */
export interface IRobotApplicationVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RobotApplicationVersion resource.
     */
    readonly robotApplicationVersionRef: RobotApplicationVersionReference;
}
/**
 * A reference to a RobotApplicationVersion resource.
 *
 * @struct
 * @stability external
 */
export interface RobotApplicationVersionReference {
    /**
     * The ARN of the RobotApplicationVersion resource.
     */
    readonly robotApplicationVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a SimulationApplication.
 *
 * @stability experimental
 */
export interface ISimulationApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SimulationApplication resource.
     */
    readonly simulationApplicationRef: SimulationApplicationReference;
}
/**
 * A reference to a SimulationApplication resource.
 *
 * @struct
 * @stability external
 */
export interface SimulationApplicationReference {
    /**
     * The ARN of the SimulationApplication resource.
     */
    readonly simulationApplicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a SimulationApplicationVersion.
 *
 * @stability experimental
 */
export interface ISimulationApplicationVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SimulationApplicationVersion resource.
     */
    readonly simulationApplicationVersionRef: SimulationApplicationVersionReference;
}
/**
 * A reference to a SimulationApplicationVersion resource.
 *
 * @struct
 * @stability external
 */
export interface SimulationApplicationVersionReference {
    /**
     * The ARN of the SimulationApplicationVersion resource.
     */
    readonly simulationApplicationVersionArn: string;
}
