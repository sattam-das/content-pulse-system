import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ProfilingGroup.
 *
 * @stability experimental
 */
export interface IProfilingGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProfilingGroup resource.
     */
    readonly profilingGroupRef: ProfilingGroupReference;
}
/**
 * A reference to a ProfilingGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ProfilingGroupReference {
    /**
     * The ProfilingGroupName of the ProfilingGroup resource.
     */
    readonly profilingGroupName: string;
    /**
     * The ARN of the ProfilingGroup resource.
     */
    readonly profilingGroupArn: string;
}
