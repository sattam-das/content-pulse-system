import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccountAlias.
 *
 * @stability experimental
 */
export interface IAccountAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccountAlias resource.
     */
    readonly accountAliasRef: AccountAliasReference;
}
/**
 * A reference to a AccountAlias resource.
 *
 * @struct
 * @stability external
 */
export interface AccountAliasReference {
    /**
     * The AccountAliasResourceId of the AccountAlias resource.
     */
    readonly accountAliasResourceId: string;
}
/**
 * Indicates that this resource can be referenced as a SlackChannelConfiguration.
 *
 * @stability experimental
 */
export interface ISlackChannelConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SlackChannelConfiguration resource.
     */
    readonly slackChannelConfigurationRef: SlackChannelConfigurationReference;
}
/**
 * A reference to a SlackChannelConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SlackChannelConfigurationReference {
    /**
     * The TeamId of the SlackChannelConfiguration resource.
     */
    readonly teamId: string;
    /**
     * The ChannelId of the SlackChannelConfiguration resource.
     */
    readonly channelId: string;
}
/**
 * Indicates that this resource can be referenced as a SlackWorkspaceConfiguration.
 *
 * @stability experimental
 */
export interface ISlackWorkspaceConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SlackWorkspaceConfiguration resource.
     */
    readonly slackWorkspaceConfigurationRef: SlackWorkspaceConfigurationReference;
}
/**
 * A reference to a SlackWorkspaceConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SlackWorkspaceConfigurationReference {
    /**
     * The TeamId of the SlackWorkspaceConfiguration resource.
     */
    readonly teamId: string;
}
