import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The ApplicationId of the Application resource.
     */
    readonly applicationId: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationProfile.
 *
 * @stability experimental
 */
export interface IConfigurationProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationProfile resource.
     */
    readonly configurationProfileRef: ConfigurationProfileReference;
}
/**
 * A reference to a ConfigurationProfile resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationProfileReference {
    /**
     * The ApplicationId of the ConfigurationProfile resource.
     */
    readonly applicationId: string;
    /**
     * The ConfigurationProfileId of the ConfigurationProfile resource.
     */
    readonly configurationProfileId: string;
}
/**
 * Indicates that this resource can be referenced as a Deployment.
 *
 * @stability experimental
 */
export interface IDeploymentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Deployment resource.
     */
    readonly deploymentRef: DeploymentReference;
}
/**
 * A reference to a Deployment resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentReference {
    /**
     * The ApplicationId of the Deployment resource.
     */
    readonly applicationId: string;
    /**
     * The EnvironmentId of the Deployment resource.
     */
    readonly environmentId: string;
    /**
     * The DeploymentNumber of the Deployment resource.
     */
    readonly deploymentNumber: string;
}
/**
 * Indicates that this resource can be referenced as a DeploymentStrategy.
 *
 * @stability experimental
 */
export interface IDeploymentStrategyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeploymentStrategy resource.
     */
    readonly deploymentStrategyRef: DeploymentStrategyReference;
}
/**
 * A reference to a DeploymentStrategy resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentStrategyReference {
    /**
     * The Id of the DeploymentStrategy resource.
     */
    readonly deploymentStrategyId: string;
}
/**
 * Indicates that this resource can be referenced as a Environment.
 *
 * @stability experimental
 */
export interface IEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Environment resource.
     */
    readonly environmentRef: EnvironmentReference;
}
/**
 * A reference to a Environment resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentReference {
    /**
     * The ApplicationId of the Environment resource.
     */
    readonly applicationId: string;
    /**
     * The EnvironmentId of the Environment resource.
     */
    readonly environmentId: string;
}
/**
 * Indicates that this resource can be referenced as a Extension.
 *
 * @stability experimental
 */
export interface IExtensionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Extension resource.
     */
    readonly extensionRef: ExtensionReference;
}
/**
 * A reference to a Extension resource.
 *
 * @struct
 * @stability external
 */
export interface ExtensionReference {
    /**
     * The Id of the Extension resource.
     */
    readonly extensionId: string;
    /**
     * The ARN of the Extension resource.
     */
    readonly extensionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ExtensionAssociation.
 *
 * @stability experimental
 */
export interface IExtensionAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ExtensionAssociation resource.
     */
    readonly extensionAssociationRef: ExtensionAssociationReference;
}
/**
 * A reference to a ExtensionAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ExtensionAssociationReference {
    /**
     * The Id of the ExtensionAssociation resource.
     */
    readonly extensionAssociationId: string;
    /**
     * The ARN of the ExtensionAssociation resource.
     */
    readonly extensionAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a HostedConfigurationVersion.
 *
 * @stability experimental
 */
export interface IHostedConfigurationVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HostedConfigurationVersion resource.
     */
    readonly hostedConfigurationVersionRef: HostedConfigurationVersionReference;
}
/**
 * A reference to a HostedConfigurationVersion resource.
 *
 * @struct
 * @stability external
 */
export interface HostedConfigurationVersionReference {
    /**
     * The ApplicationId of the HostedConfigurationVersion resource.
     */
    readonly applicationId: string;
    /**
     * The ConfigurationProfileId of the HostedConfigurationVersion resource.
     */
    readonly configurationProfileId: string;
    /**
     * The VersionNumber of the HostedConfigurationVersion resource.
     */
    readonly versionNumber: string;
}
