import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Alias.
 *
 * @stability experimental
 */
export interface IAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Alias resource.
     */
    readonly aliasRef: AliasReference;
}
/**
 * A reference to a Alias resource.
 *
 * @struct
 * @stability external
 */
export interface AliasReference {
    /**
     * The AliasId of the Alias resource.
     */
    readonly aliasId: string;
    /**
     * The ARN of the Alias resource.
     */
    readonly aliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a Build.
 *
 * @stability experimental
 */
export interface IBuildRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Build resource.
     */
    readonly buildRef: BuildReference;
}
/**
 * A reference to a Build resource.
 *
 * @struct
 * @stability external
 */
export interface BuildReference {
    /**
     * The BuildId of the Build resource.
     */
    readonly buildId: string;
    /**
     * The ARN of the Build resource.
     */
    readonly buildArn: string;
}
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
     * The FleetId of the Fleet resource.
     */
    readonly fleetId: string;
    /**
     * The ARN of the Fleet resource.
     */
    readonly fleetArn: string;
}
/**
 * Indicates that this resource can be referenced as a GameServerGroup.
 *
 * @stability experimental
 */
export interface IGameServerGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GameServerGroup resource.
     */
    readonly gameServerGroupRef: GameServerGroupReference;
}
/**
 * A reference to a GameServerGroup resource.
 *
 * @struct
 * @stability external
 */
export interface GameServerGroupReference {
    /**
     * The GameServerGroupArn of the GameServerGroup resource.
     */
    readonly gameServerGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a GameSessionQueue.
 *
 * @stability experimental
 */
export interface IGameSessionQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GameSessionQueue resource.
     */
    readonly gameSessionQueueRef: GameSessionQueueReference;
}
/**
 * A reference to a GameSessionQueue resource.
 *
 * @struct
 * @stability external
 */
export interface GameSessionQueueReference {
    /**
     * The Name of the GameSessionQueue resource.
     */
    readonly gameSessionQueueName: string;
    /**
     * The ARN of the GameSessionQueue resource.
     */
    readonly gameSessionQueueArn: string;
}
/**
 * Indicates that this resource can be referenced as a Location.
 *
 * @stability experimental
 */
export interface ILocationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Location resource.
     */
    readonly locationRef: LocationReference;
}
/**
 * A reference to a Location resource.
 *
 * @struct
 * @stability external
 */
export interface LocationReference {
    /**
     * The LocationName of the Location resource.
     */
    readonly locationName: string;
    /**
     * The ARN of the Location resource.
     */
    readonly locationArn: string;
}
/**
 * Indicates that this resource can be referenced as a MatchmakingConfiguration.
 *
 * @stability experimental
 */
export interface IMatchmakingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MatchmakingConfiguration resource.
     */
    readonly matchmakingConfigurationRef: MatchmakingConfigurationReference;
}
/**
 * A reference to a MatchmakingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface MatchmakingConfigurationReference {
    /**
     * The Name of the MatchmakingConfiguration resource.
     */
    readonly matchmakingConfigurationName: string;
    /**
     * The ARN of the MatchmakingConfiguration resource.
     */
    readonly matchmakingConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a MatchmakingRuleSet.
 *
 * @stability experimental
 */
export interface IMatchmakingRuleSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MatchmakingRuleSet resource.
     */
    readonly matchmakingRuleSetRef: MatchmakingRuleSetReference;
}
/**
 * A reference to a MatchmakingRuleSet resource.
 *
 * @struct
 * @stability external
 */
export interface MatchmakingRuleSetReference {
    /**
     * The Name of the MatchmakingRuleSet resource.
     */
    readonly matchmakingRuleSetName: string;
    /**
     * The ARN of the MatchmakingRuleSet resource.
     */
    readonly matchmakingRuleSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a Script.
 *
 * @stability experimental
 */
export interface IScriptRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Script resource.
     */
    readonly scriptRef: ScriptReference;
}
/**
 * A reference to a Script resource.
 *
 * @struct
 * @stability external
 */
export interface ScriptReference {
    /**
     * The Id of the Script resource.
     */
    readonly scriptId: string;
    /**
     * The ARN of the Script resource.
     */
    readonly scriptArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContainerFleet.
 *
 * @stability experimental
 */
export interface IContainerFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContainerFleet resource.
     */
    readonly containerFleetRef: ContainerFleetReference;
}
/**
 * A reference to a ContainerFleet resource.
 *
 * @struct
 * @stability external
 */
export interface ContainerFleetReference {
    /**
     * The FleetId of the ContainerFleet resource.
     */
    readonly fleetId: string;
    /**
     * The ARN of the ContainerFleet resource.
     */
    readonly fleetArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContainerGroupDefinition.
 *
 * @stability experimental
 */
export interface IContainerGroupDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContainerGroupDefinition resource.
     */
    readonly containerGroupDefinitionRef: ContainerGroupDefinitionReference;
}
/**
 * A reference to a ContainerGroupDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ContainerGroupDefinitionReference {
    /**
     * The Name of the ContainerGroupDefinition resource.
     */
    readonly containerGroupDefinitionName: string;
    /**
     * The ARN of the ContainerGroupDefinition resource.
     */
    readonly containerGroupDefinitionArn: string;
}
