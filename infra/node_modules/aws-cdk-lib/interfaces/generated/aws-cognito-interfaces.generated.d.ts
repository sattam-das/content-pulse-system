import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a IdentityPool.
 *
 * @stability experimental
 */
export interface IIdentityPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityPool resource.
     */
    readonly identityPoolRef: IdentityPoolReference;
}
/**
 * A reference to a IdentityPool resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityPoolReference {
    /**
     * The Id of the IdentityPool resource.
     */
    readonly identityPoolId: string;
}
/**
 * Indicates that this resource can be referenced as a IdentityPoolPrincipalTag.
 *
 * @stability experimental
 */
export interface IIdentityPoolPrincipalTagRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityPoolPrincipalTag resource.
     */
    readonly identityPoolPrincipalTagRef: IdentityPoolPrincipalTagReference;
}
/**
 * A reference to a IdentityPoolPrincipalTag resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityPoolPrincipalTagReference {
    /**
     * The IdentityPoolId of the IdentityPoolPrincipalTag resource.
     */
    readonly identityPoolId: string;
    /**
     * The IdentityProviderName of the IdentityPoolPrincipalTag resource.
     */
    readonly identityProviderName: string;
}
/**
 * Indicates that this resource can be referenced as a IdentityPoolRoleAttachment.
 *
 * @stability experimental
 */
export interface IIdentityPoolRoleAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityPoolRoleAttachment resource.
     */
    readonly identityPoolRoleAttachmentRef: IdentityPoolRoleAttachmentReference;
}
/**
 * A reference to a IdentityPoolRoleAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityPoolRoleAttachmentReference {
    /**
     * The Id of the IdentityPoolRoleAttachment resource.
     */
    readonly identityPoolRoleAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a UserPool.
 *
 * @stability experimental
 */
export interface IUserPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPool resource.
     */
    readonly userPoolRef: UserPoolReference;
}
/**
 * A reference to a UserPool resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolReference {
    /**
     * The UserPoolId of the UserPool resource.
     */
    readonly userPoolId: string;
    /**
     * The ARN of the UserPool resource.
     */
    readonly userPoolArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolClient.
 *
 * @stability experimental
 */
export interface IUserPoolClientRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolClient resource.
     */
    readonly userPoolClientRef: UserPoolClientReference;
}
/**
 * A reference to a UserPoolClient resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolClientReference {
    /**
     * The UserPoolId of the UserPoolClient resource.
     */
    readonly userPoolId: string;
    /**
     * The ClientId of the UserPoolClient resource.
     */
    readonly clientId: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolDomain.
 *
 * @stability experimental
 */
export interface IUserPoolDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolDomain resource.
     */
    readonly userPoolDomainRef: UserPoolDomainReference;
}
/**
 * A reference to a UserPoolDomain resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolDomainReference {
    /**
     * The UserPoolId of the UserPoolDomain resource.
     */
    readonly userPoolId: string;
    /**
     * The Domain of the UserPoolDomain resource.
     */
    readonly domain: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolGroup.
 *
 * @stability experimental
 */
export interface IUserPoolGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolGroup resource.
     */
    readonly userPoolGroupRef: UserPoolGroupReference;
}
/**
 * A reference to a UserPoolGroup resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolGroupReference {
    /**
     * The UserPoolId of the UserPoolGroup resource.
     */
    readonly userPoolId: string;
    /**
     * The GroupName of the UserPoolGroup resource.
     */
    readonly groupName: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolIdentityProvider.
 *
 * @stability experimental
 */
export interface IUserPoolIdentityProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolIdentityProvider resource.
     */
    readonly userPoolIdentityProviderRef: UserPoolIdentityProviderReference;
}
/**
 * A reference to a UserPoolIdentityProvider resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolIdentityProviderReference {
    /**
     * The UserPoolId of the UserPoolIdentityProvider resource.
     */
    readonly userPoolId: string;
    /**
     * The ProviderName of the UserPoolIdentityProvider resource.
     */
    readonly providerName: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolResourceServer.
 *
 * @stability experimental
 */
export interface IUserPoolResourceServerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolResourceServer resource.
     */
    readonly userPoolResourceServerRef: UserPoolResourceServerReference;
}
/**
 * A reference to a UserPoolResourceServer resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolResourceServerReference {
    /**
     * The UserPoolId of the UserPoolResourceServer resource.
     */
    readonly userPoolId: string;
    /**
     * The Identifier of the UserPoolResourceServer resource.
     */
    readonly identifier: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolRiskConfigurationAttachment.
 *
 * @stability experimental
 */
export interface IUserPoolRiskConfigurationAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolRiskConfigurationAttachment resource.
     */
    readonly userPoolRiskConfigurationAttachmentRef: UserPoolRiskConfigurationAttachmentReference;
}
/**
 * A reference to a UserPoolRiskConfigurationAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolRiskConfigurationAttachmentReference {
    /**
     * The UserPoolId of the UserPoolRiskConfigurationAttachment resource.
     */
    readonly userPoolId: string;
    /**
     * The ClientId of the UserPoolRiskConfigurationAttachment resource.
     */
    readonly clientId: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolUICustomizationAttachment.
 *
 * @stability experimental
 */
export interface IUserPoolUICustomizationAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolUICustomizationAttachment resource.
     */
    readonly userPoolUiCustomizationAttachmentRef: UserPoolUICustomizationAttachmentReference;
}
/**
 * A reference to a UserPoolUICustomizationAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolUICustomizationAttachmentReference {
    /**
     * The UserPoolId of the UserPoolUICustomizationAttachment resource.
     */
    readonly userPoolId: string;
    /**
     * The ClientId of the UserPoolUICustomizationAttachment resource.
     */
    readonly clientId: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolUser.
 *
 * @stability experimental
 */
export interface IUserPoolUserRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolUser resource.
     */
    readonly userPoolUserRef: UserPoolUserReference;
}
/**
 * A reference to a UserPoolUser resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolUserReference {
    /**
     * The UserPoolId of the UserPoolUser resource.
     */
    readonly userPoolId: string;
    /**
     * The Username of the UserPoolUser resource.
     */
    readonly username: string;
}
/**
 * Indicates that this resource can be referenced as a UserPoolUserToGroupAttachment.
 *
 * @stability experimental
 */
export interface IUserPoolUserToGroupAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserPoolUserToGroupAttachment resource.
     */
    readonly userPoolUserToGroupAttachmentRef: UserPoolUserToGroupAttachmentReference;
}
/**
 * A reference to a UserPoolUserToGroupAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface UserPoolUserToGroupAttachmentReference {
    /**
     * The UserPoolId of the UserPoolUserToGroupAttachment resource.
     */
    readonly userPoolId: string;
    /**
     * The GroupName of the UserPoolUserToGroupAttachment resource.
     */
    readonly groupName: string;
    /**
     * The Username of the UserPoolUserToGroupAttachment resource.
     */
    readonly username: string;
}
/**
 * Indicates that this resource can be referenced as a LogDeliveryConfiguration.
 *
 * @stability experimental
 */
export interface ILogDeliveryConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LogDeliveryConfiguration resource.
     */
    readonly logDeliveryConfigurationRef: LogDeliveryConfigurationReference;
}
/**
 * A reference to a LogDeliveryConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface LogDeliveryConfigurationReference {
    /**
     * The Id of the LogDeliveryConfiguration resource.
     */
    readonly logDeliveryConfigurationId: string;
}
/**
 * Indicates that this resource can be referenced as a ManagedLoginBranding.
 *
 * @stability experimental
 */
export interface IManagedLoginBrandingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ManagedLoginBranding resource.
     */
    readonly managedLoginBrandingRef: ManagedLoginBrandingReference;
}
/**
 * A reference to a ManagedLoginBranding resource.
 *
 * @struct
 * @stability external
 */
export interface ManagedLoginBrandingReference {
    /**
     * The UserPoolId of the ManagedLoginBranding resource.
     */
    readonly userPoolId: string;
    /**
     * The ManagedLoginBrandingId of the ManagedLoginBranding resource.
     */
    readonly managedLoginBrandingId: string;
}
/**
 * Indicates that this resource can be referenced as a Terms.
 *
 * @stability experimental
 */
export interface ITermsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Terms resource.
     */
    readonly termsRef: TermsReference;
}
/**
 * A reference to a Terms resource.
 *
 * @struct
 * @stability external
 */
export interface TermsReference {
    /**
     * The UserPoolId of the Terms resource.
     */
    readonly userPoolId: string;
    /**
     * The TermsId of the Terms resource.
     */
    readonly termsId: string;
}
