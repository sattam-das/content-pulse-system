import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Channel.
 *
 * @stability experimental
 */
export interface IChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Channel resource.
     */
    readonly channelRef: ChannelReference;
}
/**
 * A reference to a Channel resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelReference {
    /**
     * The Id of the Channel resource.
     */
    readonly channelId: string;
    /**
     * The ARN of the Channel resource.
     */
    readonly channelArn: string;
}
/**
 * Indicates that this resource can be referenced as a Input.
 *
 * @stability experimental
 */
export interface IInputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Input resource.
     */
    readonly inputRef: InputReference;
}
/**
 * A reference to a Input resource.
 *
 * @struct
 * @stability external
 */
export interface InputReference {
    /**
     * The Id of the Input resource.
     */
    readonly inputId: string;
    /**
     * The ARN of the Input resource.
     */
    readonly inputArn: string;
}
/**
 * Indicates that this resource can be referenced as a InputSecurityGroup.
 *
 * @stability experimental
 */
export interface IInputSecurityGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InputSecurityGroup resource.
     */
    readonly inputSecurityGroupRef: InputSecurityGroupReference;
}
/**
 * A reference to a InputSecurityGroup resource.
 *
 * @struct
 * @stability external
 */
export interface InputSecurityGroupReference {
    /**
     * The Id of the InputSecurityGroup resource.
     */
    readonly inputSecurityGroupId: string;
    /**
     * The ARN of the InputSecurityGroup resource.
     */
    readonly inputSecurityGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ChannelPlacementGroup.
 *
 * @stability experimental
 */
export interface IChannelPlacementGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ChannelPlacementGroup resource.
     */
    readonly channelPlacementGroupRef: ChannelPlacementGroupReference;
}
/**
 * A reference to a ChannelPlacementGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelPlacementGroupReference {
    /**
     * The Id of the ChannelPlacementGroup resource.
     */
    readonly channelPlacementGroupId: string;
    /**
     * The ClusterId of the ChannelPlacementGroup resource.
     */
    readonly clusterId: string;
    /**
     * The ARN of the ChannelPlacementGroup resource.
     */
    readonly channelPlacementGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a CloudWatchAlarmTemplate.
 *
 * @stability experimental
 */
export interface ICloudWatchAlarmTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudWatchAlarmTemplate resource.
     */
    readonly cloudWatchAlarmTemplateRef: CloudWatchAlarmTemplateReference;
}
/**
 * A reference to a CloudWatchAlarmTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface CloudWatchAlarmTemplateReference {
    /**
     * The Identifier of the CloudWatchAlarmTemplate resource.
     */
    readonly identifier: string;
    /**
     * The ARN of the CloudWatchAlarmTemplate resource.
     */
    readonly cloudWatchAlarmTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a CloudWatchAlarmTemplateGroup.
 *
 * @stability experimental
 */
export interface ICloudWatchAlarmTemplateGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudWatchAlarmTemplateGroup resource.
     */
    readonly cloudWatchAlarmTemplateGroupRef: CloudWatchAlarmTemplateGroupReference;
}
/**
 * A reference to a CloudWatchAlarmTemplateGroup resource.
 *
 * @struct
 * @stability external
 */
export interface CloudWatchAlarmTemplateGroupReference {
    /**
     * The Identifier of the CloudWatchAlarmTemplateGroup resource.
     */
    readonly identifier: string;
    /**
     * The ARN of the CloudWatchAlarmTemplateGroup resource.
     */
    readonly cloudWatchAlarmTemplateGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The Id of the Cluster resource.
     */
    readonly clusterId: string;
    /**
     * The ARN of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventBridgeRuleTemplate.
 *
 * @stability experimental
 */
export interface IEventBridgeRuleTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventBridgeRuleTemplate resource.
     */
    readonly eventBridgeRuleTemplateRef: EventBridgeRuleTemplateReference;
}
/**
 * A reference to a EventBridgeRuleTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface EventBridgeRuleTemplateReference {
    /**
     * The Identifier of the EventBridgeRuleTemplate resource.
     */
    readonly identifier: string;
    /**
     * The ARN of the EventBridgeRuleTemplate resource.
     */
    readonly eventBridgeRuleTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventBridgeRuleTemplateGroup.
 *
 * @stability experimental
 */
export interface IEventBridgeRuleTemplateGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventBridgeRuleTemplateGroup resource.
     */
    readonly eventBridgeRuleTemplateGroupRef: EventBridgeRuleTemplateGroupReference;
}
/**
 * A reference to a EventBridgeRuleTemplateGroup resource.
 *
 * @struct
 * @stability external
 */
export interface EventBridgeRuleTemplateGroupReference {
    /**
     * The Identifier of the EventBridgeRuleTemplateGroup resource.
     */
    readonly identifier: string;
    /**
     * The ARN of the EventBridgeRuleTemplateGroup resource.
     */
    readonly eventBridgeRuleTemplateGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a Multiplex.
 *
 * @stability experimental
 */
export interface IMultiplexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Multiplex resource.
     */
    readonly multiplexRef: MultiplexReference;
}
/**
 * A reference to a Multiplex resource.
 *
 * @struct
 * @stability external
 */
export interface MultiplexReference {
    /**
     * The Id of the Multiplex resource.
     */
    readonly multiplexId: string;
    /**
     * The ARN of the Multiplex resource.
     */
    readonly multiplexArn: string;
}
/**
 * Indicates that this resource can be referenced as a Multiplexprogram.
 *
 * @stability experimental
 */
export interface IMultiplexprogramRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Multiplexprogram resource.
     */
    readonly multiplexprogramRef: MultiplexprogramReference;
}
/**
 * A reference to a Multiplexprogram resource.
 *
 * @struct
 * @stability external
 */
export interface MultiplexprogramReference {
    /**
     * The ProgramName of the Multiplexprogram resource.
     */
    readonly programName: string;
    /**
     * The MultiplexId of the Multiplexprogram resource.
     */
    readonly multiplexId: string;
}
/**
 * Indicates that this resource can be referenced as a Network.
 *
 * @stability experimental
 */
export interface INetworkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Network resource.
     */
    readonly networkRef: NetworkReference;
}
/**
 * A reference to a Network resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkReference {
    /**
     * The Id of the Network resource.
     */
    readonly networkId: string;
    /**
     * The ARN of the Network resource.
     */
    readonly networkArn: string;
}
/**
 * Indicates that this resource can be referenced as a SdiSource.
 *
 * @stability experimental
 */
export interface ISdiSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SdiSource resource.
     */
    readonly sdiSourceRef: SdiSourceReference;
}
/**
 * A reference to a SdiSource resource.
 *
 * @struct
 * @stability external
 */
export interface SdiSourceReference {
    /**
     * The Id of the SdiSource resource.
     */
    readonly sdiSourceId: string;
    /**
     * The ARN of the SdiSource resource.
     */
    readonly sdiSourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a SignalMap.
 *
 * @stability experimental
 */
export interface ISignalMapRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SignalMap resource.
     */
    readonly signalMapRef: SignalMapReference;
}
/**
 * A reference to a SignalMap resource.
 *
 * @struct
 * @stability external
 */
export interface SignalMapReference {
    /**
     * The Identifier of the SignalMap resource.
     */
    readonly identifier: string;
    /**
     * The ARN of the SignalMap resource.
     */
    readonly signalMapArn: string;
}
