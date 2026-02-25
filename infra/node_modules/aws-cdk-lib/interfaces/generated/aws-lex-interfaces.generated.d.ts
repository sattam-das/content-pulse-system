import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Bot.
 *
 * @stability experimental
 */
export interface IBotRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Bot resource.
     */
    readonly botRef: BotReference;
}
/**
 * A reference to a Bot resource.
 *
 * @struct
 * @stability external
 */
export interface BotReference {
    /**
     * The Id of the Bot resource.
     */
    readonly botId: string;
    /**
     * The ARN of the Bot resource.
     */
    readonly botArn: string;
}
/**
 * Indicates that this resource can be referenced as a BotAlias.
 *
 * @stability experimental
 */
export interface IBotAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BotAlias resource.
     */
    readonly botAliasRef: BotAliasReference;
}
/**
 * A reference to a BotAlias resource.
 *
 * @struct
 * @stability external
 */
export interface BotAliasReference {
    /**
     * The BotAliasId of the BotAlias resource.
     */
    readonly botAliasId: string;
    /**
     * The BotId of the BotAlias resource.
     */
    readonly botId: string;
    /**
     * The ARN of the BotAlias resource.
     */
    readonly botAliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a BotVersion.
 *
 * @stability experimental
 */
export interface IBotVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BotVersion resource.
     */
    readonly botVersionRef: BotVersionReference;
}
/**
 * A reference to a BotVersion resource.
 *
 * @struct
 * @stability external
 */
export interface BotVersionReference {
    /**
     * The BotId of the BotVersion resource.
     */
    readonly botId: string;
    /**
     * The BotVersion of the BotVersion resource.
     */
    readonly botVersion: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The Id of the ResourcePolicy resource.
     */
    readonly resourcePolicyId: string;
}
