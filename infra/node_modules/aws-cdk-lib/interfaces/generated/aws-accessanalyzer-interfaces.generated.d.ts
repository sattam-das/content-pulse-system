import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Analyzer.
 *
 * @stability experimental
 */
export interface IAnalyzerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Analyzer resource.
     */
    readonly analyzerRef: AnalyzerReference;
}
/**
 * A reference to a Analyzer resource.
 *
 * @struct
 * @stability external
 */
export interface AnalyzerReference {
    /**
     * The Arn of the Analyzer resource.
     */
    readonly analyzerArn: string;
}
