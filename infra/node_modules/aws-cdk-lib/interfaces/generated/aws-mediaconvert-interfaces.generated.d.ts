import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a JobTemplate.
 *
 * @stability experimental
 */
export interface IJobTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a JobTemplate resource.
     */
    readonly jobTemplateRef: JobTemplateReference;
}
/**
 * A reference to a JobTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface JobTemplateReference {
    /**
     * The Name of the JobTemplate resource.
     */
    readonly jobTemplateName: string;
    /**
     * The ARN of the JobTemplate resource.
     */
    readonly jobTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Preset.
 *
 * @stability experimental
 */
export interface IPresetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Preset resource.
     */
    readonly presetRef: PresetReference;
}
/**
 * A reference to a Preset resource.
 *
 * @struct
 * @stability external
 */
export interface PresetReference {
    /**
     * The Name of the Preset resource.
     */
    readonly presetName: string;
    /**
     * The ARN of the Preset resource.
     */
    readonly presetArn: string;
}
/**
 * Indicates that this resource can be referenced as a Queue.
 *
 * @stability experimental
 */
export interface IQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Queue resource.
     */
    readonly queueRef: QueueReference;
}
/**
 * A reference to a Queue resource.
 *
 * @struct
 * @stability external
 */
export interface QueueReference {
    /**
     * The Name of the Queue resource.
     */
    readonly queueName: string;
    /**
     * The ARN of the Queue resource.
     */
    readonly queueArn: string;
}
