import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a HttpNamespace.
 *
 * @stability experimental
 */
export interface IHttpNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HttpNamespace resource.
     */
    readonly httpNamespaceRef: HttpNamespaceReference;
}
/**
 * A reference to a HttpNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface HttpNamespaceReference {
    /**
     * The Id of the HttpNamespace resource.
     */
    readonly httpNamespaceId: string;
    /**
     * The ARN of the HttpNamespace resource.
     */
    readonly httpNamespaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Instance.
 *
 * @stability experimental
 */
export interface IInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Instance resource.
     */
    readonly instanceRef: InstanceReference;
}
/**
 * A reference to a Instance resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceReference {
    /**
     * The InstanceId of the Instance resource.
     */
    readonly instanceId: string;
}
/**
 * Indicates that this resource can be referenced as a PrivateDnsNamespace.
 *
 * @stability experimental
 */
export interface IPrivateDnsNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrivateDnsNamespace resource.
     */
    readonly privateDnsNamespaceRef: PrivateDnsNamespaceReference;
}
/**
 * A reference to a PrivateDnsNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface PrivateDnsNamespaceReference {
    /**
     * The Id of the PrivateDnsNamespace resource.
     */
    readonly privateDnsNamespaceId: string;
    /**
     * The ARN of the PrivateDnsNamespace resource.
     */
    readonly privateDnsNamespaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a PublicDnsNamespace.
 *
 * @stability experimental
 */
export interface IPublicDnsNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublicDnsNamespace resource.
     */
    readonly publicDnsNamespaceRef: PublicDnsNamespaceReference;
}
/**
 * A reference to a PublicDnsNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface PublicDnsNamespaceReference {
    /**
     * The Id of the PublicDnsNamespace resource.
     */
    readonly publicDnsNamespaceId: string;
    /**
     * The ARN of the PublicDnsNamespace resource.
     */
    readonly publicDnsNamespaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Service.
 *
 * @stability experimental
 */
export interface IServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Service resource.
     */
    readonly serviceRef: ServiceReference;
}
/**
 * A reference to a Service resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceReference {
    /**
     * The Id of the Service resource.
     */
    readonly serviceId: string;
    /**
     * The ARN of the Service resource.
     */
    readonly serviceArn: string;
}
