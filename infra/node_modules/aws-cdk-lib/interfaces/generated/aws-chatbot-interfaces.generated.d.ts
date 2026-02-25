import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a MicrosoftTeamsChannelConfiguration.
 *
 * @stability experimental
 */
export interface IMicrosoftTeamsChannelConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MicrosoftTeamsChannelConfiguration resource.
     */
    readonly microsoftTeamsChannelConfigurationRef: MicrosoftTeamsChannelConfigurationReference;
}
/**
 * A reference to a MicrosoftTeamsChannelConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface MicrosoftTeamsChannelConfigurationReference {
    /**
     * The Arn of the MicrosoftTeamsChannelConfiguration resource.
     */
    readonly microsoftTeamsChannelConfigurationArn: string;
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
     * The Arn of the SlackChannelConfiguration resource.
     */
    readonly slackChannelConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomAction.
 *
 * @stability experimental
 */
export interface ICustomActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomAction resource.
     */
    readonly customActionRef: CustomActionReference;
}
/**
 * A reference to a CustomAction resource.
 *
 * @struct
 * @stability external
 */
export interface CustomActionReference {
    /**
     * The CustomActionArn of the CustomAction resource.
     */
    readonly customActionArn: string;
}
