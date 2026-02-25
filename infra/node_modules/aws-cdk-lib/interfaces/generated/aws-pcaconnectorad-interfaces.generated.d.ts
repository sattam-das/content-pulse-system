import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Connector.
 *
 * @stability experimental
 */
export interface IConnectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connector resource.
     */
    readonly connectorRef: ConnectorReference;
}
/**
 * A reference to a Connector resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorReference {
    /**
     * The ConnectorArn of the Connector resource.
     */
    readonly connectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a DirectoryRegistration.
 *
 * @stability experimental
 */
export interface IDirectoryRegistrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DirectoryRegistration resource.
     */
    readonly directoryRegistrationRef: DirectoryRegistrationReference;
}
/**
 * A reference to a DirectoryRegistration resource.
 *
 * @struct
 * @stability external
 */
export interface DirectoryRegistrationReference {
    /**
     * The DirectoryRegistrationArn of the DirectoryRegistration resource.
     */
    readonly directoryRegistrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServicePrincipalName.
 *
 * @stability experimental
 */
export interface IServicePrincipalNameRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServicePrincipalName resource.
     */
    readonly servicePrincipalNameRef: ServicePrincipalNameReference;
}
/**
 * A reference to a ServicePrincipalName resource.
 *
 * @struct
 * @stability external
 */
export interface ServicePrincipalNameReference {
    /**
     * The ConnectorArn of the ServicePrincipalName resource.
     */
    readonly connectorArn: string;
    /**
     * The DirectoryRegistrationArn of the ServicePrincipalName resource.
     */
    readonly directoryRegistrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Template.
 *
 * @stability experimental
 */
export interface ITemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Template resource.
     */
    readonly templateRef: TemplateReference;
}
/**
 * A reference to a Template resource.
 *
 * @struct
 * @stability external
 */
export interface TemplateReference {
    /**
     * The TemplateArn of the Template resource.
     */
    readonly templateArn: string;
}
/**
 * Indicates that this resource can be referenced as a TemplateGroupAccessControlEntry.
 *
 * @stability experimental
 */
export interface ITemplateGroupAccessControlEntryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TemplateGroupAccessControlEntry resource.
     */
    readonly templateGroupAccessControlEntryRef: TemplateGroupAccessControlEntryReference;
}
/**
 * A reference to a TemplateGroupAccessControlEntry resource.
 *
 * @struct
 * @stability external
 */
export interface TemplateGroupAccessControlEntryReference {
    /**
     * The GroupSecurityIdentifier of the TemplateGroupAccessControlEntry resource.
     */
    readonly groupSecurityIdentifier: string;
    /**
     * The TemplateArn of the TemplateGroupAccessControlEntry resource.
     */
    readonly templateArn: string;
}
