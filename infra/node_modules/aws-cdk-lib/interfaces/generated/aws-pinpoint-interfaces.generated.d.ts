import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ADMChannel.
 *
 * @stability experimental
 */
export interface IADMChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ADMChannel resource.
     */
    readonly admChannelRef: ADMChannelReference;
}
/**
 * A reference to a ADMChannel resource.
 *
 * @struct
 * @stability external
 */
export interface ADMChannelReference {
    /**
     * The Id of the ADMChannel resource.
     */
    readonly admChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a APNSChannel.
 *
 * @stability experimental
 */
export interface IAPNSChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a APNSChannel resource.
     */
    readonly apnsChannelRef: APNSChannelReference;
}
/**
 * A reference to a APNSChannel resource.
 *
 * @struct
 * @stability external
 */
export interface APNSChannelReference {
    /**
     * The Id of the APNSChannel resource.
     */
    readonly apnsChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a APNSSandboxChannel.
 *
 * @stability experimental
 */
export interface IAPNSSandboxChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a APNSSandboxChannel resource.
     */
    readonly apnsSandboxChannelRef: APNSSandboxChannelReference;
}
/**
 * A reference to a APNSSandboxChannel resource.
 *
 * @struct
 * @stability external
 */
export interface APNSSandboxChannelReference {
    /**
     * The Id of the APNSSandboxChannel resource.
     */
    readonly apnsSandboxChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a APNSVoipChannel.
 *
 * @stability experimental
 */
export interface IAPNSVoipChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a APNSVoipChannel resource.
     */
    readonly apnsVoipChannelRef: APNSVoipChannelReference;
}
/**
 * A reference to a APNSVoipChannel resource.
 *
 * @struct
 * @stability external
 */
export interface APNSVoipChannelReference {
    /**
     * The Id of the APNSVoipChannel resource.
     */
    readonly apnsVoipChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a APNSVoipSandboxChannel.
 *
 * @stability experimental
 */
export interface IAPNSVoipSandboxChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a APNSVoipSandboxChannel resource.
     */
    readonly apnsVoipSandboxChannelRef: APNSVoipSandboxChannelReference;
}
/**
 * A reference to a APNSVoipSandboxChannel resource.
 *
 * @struct
 * @stability external
 */
export interface APNSVoipSandboxChannelReference {
    /**
     * The Id of the APNSVoipSandboxChannel resource.
     */
    readonly apnsVoipSandboxChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a App.
 *
 * @stability experimental
 */
export interface IAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a App resource.
     */
    readonly appRef: AppReference;
}
/**
 * A reference to a App resource.
 *
 * @struct
 * @stability external
 */
export interface AppReference {
    /**
     * The Id of the App resource.
     */
    readonly appId: string;
    /**
     * The ARN of the App resource.
     */
    readonly appArn: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationSettings.
 *
 * @stability experimental
 */
export interface IApplicationSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationSettings resource.
     */
    readonly applicationSettingsRef: ApplicationSettingsReference;
}
/**
 * A reference to a ApplicationSettings resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationSettingsReference {
    /**
     * The Id of the ApplicationSettings resource.
     */
    readonly applicationSettingsId: string;
}
/**
 * Indicates that this resource can be referenced as a BaiduChannel.
 *
 * @stability experimental
 */
export interface IBaiduChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BaiduChannel resource.
     */
    readonly baiduChannelRef: BaiduChannelReference;
}
/**
 * A reference to a BaiduChannel resource.
 *
 * @struct
 * @stability external
 */
export interface BaiduChannelReference {
    /**
     * The Id of the BaiduChannel resource.
     */
    readonly baiduChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a Campaign.
 *
 * @stability experimental
 */
export interface ICampaignRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Campaign resource.
     */
    readonly campaignRef: CampaignReference;
}
/**
 * A reference to a Campaign resource.
 *
 * @struct
 * @stability external
 */
export interface CampaignReference {
    /**
     * The CampaignId of the Campaign resource.
     */
    readonly campaignId: string;
    /**
     * The ARN of the Campaign resource.
     */
    readonly campaignArn: string;
}
/**
 * Indicates that this resource can be referenced as a EmailChannel.
 *
 * @stability experimental
 */
export interface IEmailChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EmailChannel resource.
     */
    readonly emailChannelRef: EmailChannelReference;
}
/**
 * A reference to a EmailChannel resource.
 *
 * @struct
 * @stability external
 */
export interface EmailChannelReference {
    /**
     * The Id of the EmailChannel resource.
     */
    readonly emailChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a EmailTemplate.
 *
 * @stability experimental
 */
export interface IEmailTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EmailTemplate resource.
     */
    readonly emailTemplateRef: EmailTemplateReference;
}
/**
 * A reference to a EmailTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface EmailTemplateReference {
    /**
     * The Id of the EmailTemplate resource.
     */
    readonly emailTemplateId: string;
    /**
     * The ARN of the EmailTemplate resource.
     */
    readonly emailTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventStream.
 *
 * @stability experimental
 */
export interface IEventStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventStream resource.
     */
    readonly eventStreamRef: EventStreamReference;
}
/**
 * A reference to a EventStream resource.
 *
 * @struct
 * @stability external
 */
export interface EventStreamReference {
    /**
     * The Id of the EventStream resource.
     */
    readonly eventStreamId: string;
}
/**
 * Indicates that this resource can be referenced as a GCMChannel.
 *
 * @stability experimental
 */
export interface IGCMChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GCMChannel resource.
     */
    readonly gcmChannelRef: GCMChannelReference;
}
/**
 * A reference to a GCMChannel resource.
 *
 * @struct
 * @stability external
 */
export interface GCMChannelReference {
    /**
     * The Id of the GCMChannel resource.
     */
    readonly gcmChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a InAppTemplate.
 *
 * @stability experimental
 */
export interface IInAppTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InAppTemplate resource.
     */
    readonly inAppTemplateRef: InAppTemplateReference;
}
/**
 * A reference to a InAppTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface InAppTemplateReference {
    /**
     * The TemplateName of the InAppTemplate resource.
     */
    readonly templateName: string;
    /**
     * The ARN of the InAppTemplate resource.
     */
    readonly inAppTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a PushTemplate.
 *
 * @stability experimental
 */
export interface IPushTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PushTemplate resource.
     */
    readonly pushTemplateRef: PushTemplateReference;
}
/**
 * A reference to a PushTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface PushTemplateReference {
    /**
     * The Id of the PushTemplate resource.
     */
    readonly pushTemplateId: string;
    /**
     * The ARN of the PushTemplate resource.
     */
    readonly pushTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a SMSChannel.
 *
 * @stability experimental
 */
export interface ISMSChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SMSChannel resource.
     */
    readonly smsChannelRef: SMSChannelReference;
}
/**
 * A reference to a SMSChannel resource.
 *
 * @struct
 * @stability external
 */
export interface SMSChannelReference {
    /**
     * The Id of the SMSChannel resource.
     */
    readonly smsChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a Segment.
 *
 * @stability experimental
 */
export interface ISegmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Segment resource.
     */
    readonly segmentRef: SegmentReference;
}
/**
 * A reference to a Segment resource.
 *
 * @struct
 * @stability external
 */
export interface SegmentReference {
    /**
     * The SegmentId of the Segment resource.
     */
    readonly segmentId: string;
    /**
     * The ARN of the Segment resource.
     */
    readonly segmentArn: string;
}
/**
 * Indicates that this resource can be referenced as a SmsTemplate.
 *
 * @stability experimental
 */
export interface ISmsTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SmsTemplate resource.
     */
    readonly smsTemplateRef: SmsTemplateReference;
}
/**
 * A reference to a SmsTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface SmsTemplateReference {
    /**
     * The Id of the SmsTemplate resource.
     */
    readonly smsTemplateId: string;
    /**
     * The ARN of the SmsTemplate resource.
     */
    readonly smsTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a VoiceChannel.
 *
 * @stability experimental
 */
export interface IVoiceChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VoiceChannel resource.
     */
    readonly voiceChannelRef: VoiceChannelReference;
}
/**
 * A reference to a VoiceChannel resource.
 *
 * @struct
 * @stability external
 */
export interface VoiceChannelReference {
    /**
     * The Id of the VoiceChannel resource.
     */
    readonly voiceChannelId: string;
}
