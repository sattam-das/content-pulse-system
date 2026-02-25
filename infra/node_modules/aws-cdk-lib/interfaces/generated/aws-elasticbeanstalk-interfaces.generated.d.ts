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
     * The ApplicationName of the Application resource.
     */
    readonly applicationName: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationVersion.
 *
 * @stability experimental
 */
export interface IApplicationVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationVersion resource.
     */
    readonly applicationVersionRef: ApplicationVersionReference;
}
/**
 * A reference to a ApplicationVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationVersionReference {
    /**
     * The ApplicationName of the ApplicationVersion resource.
     */
    readonly applicationName: string;
    /**
     * The Id of the ApplicationVersion resource.
     */
    readonly applicationVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationTemplate.
 *
 * @stability experimental
 */
export interface IConfigurationTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationTemplate resource.
     */
    readonly configurationTemplateRef: ConfigurationTemplateReference;
}
/**
 * A reference to a ConfigurationTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationTemplateReference {
    /**
     * The ApplicationName of the ConfigurationTemplate resource.
     */
    readonly applicationName: string;
    /**
     * The TemplateName of the ConfigurationTemplate resource.
     */
    readonly templateName: string;
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
     * The EnvironmentName of the Environment resource.
     */
    readonly environmentName: string;
}
