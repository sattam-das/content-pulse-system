import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ReportDefinition.
 *
 * @stability experimental
 */
export interface IReportDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReportDefinition resource.
     */
    readonly reportDefinitionRef: ReportDefinitionReference;
}
/**
 * A reference to a ReportDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ReportDefinitionReference {
    /**
     * The ReportName of the ReportDefinition resource.
     */
    readonly reportName: string;
}
