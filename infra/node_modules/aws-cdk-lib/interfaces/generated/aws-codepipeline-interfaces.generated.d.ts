import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CustomActionType.
 *
 * @stability experimental
 */
export interface ICustomActionTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomActionType resource.
     */
    readonly customActionTypeRef: CustomActionTypeReference;
}
/**
 * A reference to a CustomActionType resource.
 *
 * @struct
 * @stability external
 */
export interface CustomActionTypeReference {
    /**
     * The Category of the CustomActionType resource.
     */
    readonly category: string;
    /**
     * The Provider of the CustomActionType resource.
     */
    readonly provider: string;
    /**
     * The Version of the CustomActionType resource.
     */
    readonly version: string;
}
/**
 * Indicates that this resource can be referenced as a Pipeline.
 *
 * @stability experimental
 */
export interface IPipelineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pipeline resource.
     */
    readonly pipelineRef: PipelineReference;
}
/**
 * A reference to a Pipeline resource.
 *
 * @struct
 * @stability external
 */
export interface PipelineReference {
    /**
     * The Name of the Pipeline resource.
     */
    readonly pipelineName: string;
}
/**
 * Indicates that this resource can be referenced as a Webhook.
 *
 * @stability experimental
 */
export interface IWebhookRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Webhook resource.
     */
    readonly webhookRef: WebhookReference;
}
/**
 * A reference to a Webhook resource.
 *
 * @struct
 * @stability external
 */
export interface WebhookReference {
    /**
     * The Name of the Webhook resource.
     */
    readonly webhookName: string;
}
