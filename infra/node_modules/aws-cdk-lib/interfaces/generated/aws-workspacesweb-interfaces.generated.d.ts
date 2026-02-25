import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a BrowserSettings.
 *
 * @stability experimental
 */
export interface IBrowserSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BrowserSettings resource.
     */
    readonly browserSettingsRef: BrowserSettingsReference;
}
/**
 * A reference to a BrowserSettings resource.
 *
 * @struct
 * @stability external
 */
export interface BrowserSettingsReference {
    /**
     * The BrowserSettingsArn of the BrowserSettings resource.
     */
    readonly browserSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a IdentityProvider.
 *
 * @stability experimental
 */
export interface IIdentityProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityProvider resource.
     */
    readonly identityProviderRef: IdentityProviderReference;
}
/**
 * A reference to a IdentityProvider resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityProviderReference {
    /**
     * The IdentityProviderArn of the IdentityProvider resource.
     */
    readonly identityProviderArn: string;
}
/**
 * Indicates that this resource can be referenced as a IpAccessSettings.
 *
 * @stability experimental
 */
export interface IIpAccessSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IpAccessSettings resource.
     */
    readonly ipAccessSettingsRef: IpAccessSettingsReference;
}
/**
 * A reference to a IpAccessSettings resource.
 *
 * @struct
 * @stability external
 */
export interface IpAccessSettingsReference {
    /**
     * The IpAccessSettingsArn of the IpAccessSettings resource.
     */
    readonly ipAccessSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkSettings.
 *
 * @stability experimental
 */
export interface INetworkSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkSettings resource.
     */
    readonly networkSettingsRef: NetworkSettingsReference;
}
/**
 * A reference to a NetworkSettings resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkSettingsReference {
    /**
     * The NetworkSettingsArn of the NetworkSettings resource.
     */
    readonly networkSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a Portal.
 *
 * @stability experimental
 */
export interface IPortalRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Portal resource.
     */
    readonly portalRef: PortalReference;
}
/**
 * A reference to a Portal resource.
 *
 * @struct
 * @stability external
 */
export interface PortalReference {
    /**
     * The PortalArn of the Portal resource.
     */
    readonly portalArn: string;
}
/**
 * Indicates that this resource can be referenced as a TrustStore.
 *
 * @stability experimental
 */
export interface ITrustStoreRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrustStore resource.
     */
    readonly trustStoreRef: TrustStoreReference;
}
/**
 * A reference to a TrustStore resource.
 *
 * @struct
 * @stability external
 */
export interface TrustStoreReference {
    /**
     * The TrustStoreArn of the TrustStore resource.
     */
    readonly trustStoreArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserAccessLoggingSettings.
 *
 * @stability experimental
 */
export interface IUserAccessLoggingSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserAccessLoggingSettings resource.
     */
    readonly userAccessLoggingSettingsRef: UserAccessLoggingSettingsReference;
}
/**
 * A reference to a UserAccessLoggingSettings resource.
 *
 * @struct
 * @stability external
 */
export interface UserAccessLoggingSettingsReference {
    /**
     * The UserAccessLoggingSettingsArn of the UserAccessLoggingSettings resource.
     */
    readonly userAccessLoggingSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserSettings.
 *
 * @stability experimental
 */
export interface IUserSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserSettings resource.
     */
    readonly userSettingsRef: UserSettingsReference;
}
/**
 * A reference to a UserSettings resource.
 *
 * @struct
 * @stability external
 */
export interface UserSettingsReference {
    /**
     * The UserSettingsArn of the UserSettings resource.
     */
    readonly userSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataProtectionSettings.
 *
 * @stability experimental
 */
export interface IDataProtectionSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataProtectionSettings resource.
     */
    readonly dataProtectionSettingsRef: DataProtectionSettingsReference;
}
/**
 * A reference to a DataProtectionSettings resource.
 *
 * @struct
 * @stability external
 */
export interface DataProtectionSettingsReference {
    /**
     * The DataProtectionSettingsArn of the DataProtectionSettings resource.
     */
    readonly dataProtectionSettingsArn: string;
}
/**
 * Indicates that this resource can be referenced as a SessionLogger.
 *
 * @stability experimental
 */
export interface ISessionLoggerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SessionLogger resource.
     */
    readonly sessionLoggerRef: SessionLoggerReference;
}
/**
 * A reference to a SessionLogger resource.
 *
 * @struct
 * @stability external
 */
export interface SessionLoggerReference {
    /**
     * The SessionLoggerArn of the SessionLogger resource.
     */
    readonly sessionLoggerArn: string;
}
