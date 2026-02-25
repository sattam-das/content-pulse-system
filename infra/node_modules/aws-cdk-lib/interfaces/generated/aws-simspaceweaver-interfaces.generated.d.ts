import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Simulation.
 *
 * @stability experimental
 */
export interface ISimulationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Simulation resource.
     */
    readonly simulationRef: SimulationReference;
}
/**
 * A reference to a Simulation resource.
 *
 * @struct
 * @stability external
 */
export interface SimulationReference {
    /**
     * The Name of the Simulation resource.
     */
    readonly simulationName: string;
}
