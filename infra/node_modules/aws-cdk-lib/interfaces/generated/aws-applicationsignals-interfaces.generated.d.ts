import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Discovery.
 *
 * @stability experimental
 */
export interface IDiscoveryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Discovery resource.
     */
    readonly discoveryRef: DiscoveryReference;
}
/**
 * A reference to a Discovery resource.
 *
 * @struct
 * @stability external
 */
export interface DiscoveryReference {
    /**
     * The AccountId of the Discovery resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a GroupingConfiguration.
 *
 * @stability experimental
 */
export interface IGroupingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GroupingConfiguration resource.
     */
    readonly groupingConfigurationRef: GroupingConfigurationReference;
}
/**
 * A reference to a GroupingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface GroupingConfigurationReference {
    /**
     * The AccountId of the GroupingConfiguration resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceLevelObjective.
 *
 * @stability experimental
 */
export interface IServiceLevelObjectiveRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceLevelObjective resource.
     */
    readonly serviceLevelObjectiveRef: ServiceLevelObjectiveReference;
}
/**
 * A reference to a ServiceLevelObjective resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceLevelObjectiveReference {
    /**
     * The Arn of the ServiceLevelObjective resource.
     */
    readonly serviceLevelObjectiveArn: string;
}
