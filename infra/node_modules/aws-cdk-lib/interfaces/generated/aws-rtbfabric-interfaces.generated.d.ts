import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a InboundExternalLink.
 *
 * @stability experimental
 */
export interface IInboundExternalLinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InboundExternalLink resource.
     */
    readonly inboundExternalLinkRef: InboundExternalLinkReference;
}
/**
 * A reference to a InboundExternalLink resource.
 *
 * @struct
 * @stability external
 */
export interface InboundExternalLinkReference {
    /**
     * The Arn of the InboundExternalLink resource.
     */
    readonly inboundExternalLinkArn: string;
}
/**
 * Indicates that this resource can be referenced as a Link.
 *
 * @stability experimental
 */
export interface ILinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Link resource.
     */
    readonly linkRef: LinkReference;
}
/**
 * A reference to a Link resource.
 *
 * @struct
 * @stability external
 */
export interface LinkReference {
    /**
     * The Arn of the Link resource.
     */
    readonly linkArn: string;
}
/**
 * Indicates that this resource can be referenced as a OutboundExternalLink.
 *
 * @stability experimental
 */
export interface IOutboundExternalLinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OutboundExternalLink resource.
     */
    readonly outboundExternalLinkRef: OutboundExternalLinkReference;
}
/**
 * A reference to a OutboundExternalLink resource.
 *
 * @struct
 * @stability external
 */
export interface OutboundExternalLinkReference {
    /**
     * The Arn of the OutboundExternalLink resource.
     */
    readonly outboundExternalLinkArn: string;
}
/**
 * Indicates that this resource can be referenced as a RequesterGateway.
 *
 * @stability experimental
 */
export interface IRequesterGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RequesterGateway resource.
     */
    readonly requesterGatewayRef: RequesterGatewayReference;
}
/**
 * A reference to a RequesterGateway resource.
 *
 * @struct
 * @stability external
 */
export interface RequesterGatewayReference {
    /**
     * The Arn of the RequesterGateway resource.
     */
    readonly requesterGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResponderGateway.
 *
 * @stability experimental
 */
export interface IResponderGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResponderGateway resource.
     */
    readonly responderGatewayRef: ResponderGatewayReference;
}
/**
 * A reference to a ResponderGateway resource.
 *
 * @struct
 * @stability external
 */
export interface ResponderGatewayReference {
    /**
     * The Arn of the ResponderGateway resource.
     */
    readonly responderGatewayArn: string;
}
