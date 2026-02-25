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
     * The Arn of the Channel resource.
     */
    readonly channelArn: string;
}
/**
 * Indicates that this resource can be referenced as a PlaybackKeyPair.
 *
 * @stability experimental
 */
export interface IPlaybackKeyPairRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PlaybackKeyPair resource.
     */
    readonly playbackKeyPairRef: PlaybackKeyPairReference;
}
/**
 * A reference to a PlaybackKeyPair resource.
 *
 * @struct
 * @stability external
 */
export interface PlaybackKeyPairReference {
    /**
     * The Arn of the PlaybackKeyPair resource.
     */
    readonly playbackKeyPairArn: string;
}
/**
 * Indicates that this resource can be referenced as a RecordingConfiguration.
 *
 * @stability experimental
 */
export interface IRecordingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RecordingConfiguration resource.
     */
    readonly recordingConfigurationRef: RecordingConfigurationReference;
}
/**
 * A reference to a RecordingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface RecordingConfigurationReference {
    /**
     * The Arn of the RecordingConfiguration resource.
     */
    readonly recordingConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a StreamKey.
 *
 * @stability experimental
 */
export interface IStreamKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StreamKey resource.
     */
    readonly streamKeyRef: StreamKeyReference;
}
/**
 * A reference to a StreamKey resource.
 *
 * @struct
 * @stability external
 */
export interface StreamKeyReference {
    /**
     * The Arn of the StreamKey resource.
     */
    readonly streamKeyArn: string;
}
/**
 * Indicates that this resource can be referenced as a EncoderConfiguration.
 *
 * @stability experimental
 */
export interface IEncoderConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EncoderConfiguration resource.
     */
    readonly encoderConfigurationRef: EncoderConfigurationReference;
}
/**
 * A reference to a EncoderConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface EncoderConfigurationReference {
    /**
     * The Arn of the EncoderConfiguration resource.
     */
    readonly encoderConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a IngestConfiguration.
 *
 * @stability experimental
 */
export interface IIngestConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IngestConfiguration resource.
     */
    readonly ingestConfigurationRef: IngestConfigurationReference;
}
/**
 * A reference to a IngestConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface IngestConfigurationReference {
    /**
     * The Arn of the IngestConfiguration resource.
     */
    readonly ingestConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a PlaybackRestrictionPolicy.
 *
 * @stability experimental
 */
export interface IPlaybackRestrictionPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PlaybackRestrictionPolicy resource.
     */
    readonly playbackRestrictionPolicyRef: PlaybackRestrictionPolicyReference;
}
/**
 * A reference to a PlaybackRestrictionPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface PlaybackRestrictionPolicyReference {
    /**
     * The Arn of the PlaybackRestrictionPolicy resource.
     */
    readonly playbackRestrictionPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a PublicKey.
 *
 * @stability experimental
 */
export interface IPublicKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublicKey resource.
     */
    readonly publicKeyRef: PublicKeyReference;
}
/**
 * A reference to a PublicKey resource.
 *
 * @struct
 * @stability external
 */
export interface PublicKeyReference {
    /**
     * The Arn of the PublicKey resource.
     */
    readonly publicKeyArn: string;
}
/**
 * Indicates that this resource can be referenced as a Stage.
 *
 * @stability experimental
 */
export interface IStageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stage resource.
     */
    readonly stageRef: StageReference;
}
/**
 * A reference to a Stage resource.
 *
 * @struct
 * @stability external
 */
export interface StageReference {
    /**
     * The Arn of the Stage resource.
     */
    readonly stageArn: string;
}
/**
 * Indicates that this resource can be referenced as a StorageConfiguration.
 *
 * @stability experimental
 */
export interface IStorageConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StorageConfiguration resource.
     */
    readonly storageConfigurationRef: StorageConfigurationReference;
}
/**
 * A reference to a StorageConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface StorageConfigurationReference {
    /**
     * The Arn of the StorageConfiguration resource.
     */
    readonly storageConfigurationArn: string;
}
