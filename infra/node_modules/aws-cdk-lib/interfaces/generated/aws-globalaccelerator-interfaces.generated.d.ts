import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Accelerator.
 *
 * @stability experimental
 */
export interface IAcceleratorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Accelerator resource.
     */
    readonly acceleratorRef: AcceleratorReference;
}
/**
 * A reference to a Accelerator resource.
 *
 * @struct
 * @stability external
 */
export interface AcceleratorReference {
    /**
     * The AcceleratorArn of the Accelerator resource.
     */
    readonly acceleratorArn: string;
}
/**
 * Indicates that this resource can be referenced as a EndpointGroup.
 *
 * @stability experimental
 */
export interface IEndpointGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EndpointGroup resource.
     */
    readonly endpointGroupRef: EndpointGroupReference;
}
/**
 * A reference to a EndpointGroup resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointGroupReference {
    /**
     * The EndpointGroupArn of the EndpointGroup resource.
     */
    readonly endpointGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a Listener.
 *
 * @stability experimental
 */
export interface IListenerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Listener resource.
     */
    readonly listenerRef: ListenerReference;
}
/**
 * A reference to a Listener resource.
 *
 * @struct
 * @stability external
 */
export interface ListenerReference {
    /**
     * The ListenerArn of the Listener resource.
     */
    readonly listenerArn: string;
}
/**
 * Indicates that this resource can be referenced as a CrossAccountAttachment.
 *
 * @stability experimental
 */
export interface ICrossAccountAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CrossAccountAttachment resource.
     */
    readonly crossAccountAttachmentRef: CrossAccountAttachmentReference;
}
/**
 * A reference to a CrossAccountAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface CrossAccountAttachmentReference {
    /**
     * The AttachmentArn of the CrossAccountAttachment resource.
     */
    readonly attachmentArn: string;
}
