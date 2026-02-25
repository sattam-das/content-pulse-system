import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ExperimentTemplate.
 *
 * @stability experimental
 */
export interface IExperimentTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ExperimentTemplate resource.
     */
    readonly experimentTemplateRef: ExperimentTemplateReference;
}
/**
 * A reference to a ExperimentTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface ExperimentTemplateReference {
    /**
     * The Id of the ExperimentTemplate resource.
     */
    readonly experimentTemplateId: string;
}
/**
 * Indicates that this resource can be referenced as a TargetAccountConfiguration.
 *
 * @stability experimental
 */
export interface ITargetAccountConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TargetAccountConfiguration resource.
     */
    readonly targetAccountConfigurationRef: TargetAccountConfigurationReference;
}
/**
 * A reference to a TargetAccountConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface TargetAccountConfigurationReference {
    /**
     * The ExperimentTemplateId of the TargetAccountConfiguration resource.
     */
    readonly experimentTemplateId: string;
    /**
     * The AccountId of the TargetAccountConfiguration resource.
     */
    readonly accountId: string;
}
