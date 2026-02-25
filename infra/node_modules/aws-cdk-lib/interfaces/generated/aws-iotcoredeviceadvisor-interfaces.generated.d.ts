import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a SuiteDefinition.
 *
 * @stability experimental
 */
export interface ISuiteDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SuiteDefinition resource.
     */
    readonly suiteDefinitionRef: SuiteDefinitionReference;
}
/**
 * A reference to a SuiteDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface SuiteDefinitionReference {
    /**
     * The SuiteDefinitionId of the SuiteDefinition resource.
     */
    readonly suiteDefinitionId: string;
    /**
     * The ARN of the SuiteDefinition resource.
     */
    readonly suiteDefinitionArn: string;
}
