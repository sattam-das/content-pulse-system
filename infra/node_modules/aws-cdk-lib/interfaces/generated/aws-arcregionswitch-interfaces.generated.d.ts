import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
