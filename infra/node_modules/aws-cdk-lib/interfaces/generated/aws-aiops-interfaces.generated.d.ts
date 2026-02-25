import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a InvestigationGroup.
 *
 * @stability experimental
 */
export interface IInvestigationGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InvestigationGroup resource.
     */
    readonly investigationGroupRef: InvestigationGroupReference;
}
/**
 * A reference to a InvestigationGroup resource.
 *
 * @struct
 * @stability external
 */
export interface InvestigationGroupReference {
    /**
     * The Arn of the InvestigationGroup resource.
     */
    readonly investigationGroupArn: string;
}
