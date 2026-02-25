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
    /**
     * The ARN of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataAccessor.
 *
 * @stability experimental
 */
export interface IDataAccessorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataAccessor resource.
     */
    readonly dataAccessorRef: DataAccessorReference;
}
/**
 * A reference to a DataAccessor resource.
 *
 * @struct
 * @stability external
 */
export interface DataAccessorReference {
    /**
     * The ApplicationId of the DataAccessor resource.
     */
    readonly applicationId: string;
    /**
     * The DataAccessorId of the DataAccessor resource.
     */
    readonly dataAccessorId: string;
    /**
     * The ARN of the DataAccessor resource.
     */
    readonly dataAccessorArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataSource.
 *
 * @stability experimental
 */
export interface IDataSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataSource resource.
     */
    readonly dataSourceRef: DataSourceReference;
}
/**
 * A reference to a DataSource resource.
 *
 * @struct
 * @stability external
 */
export interface DataSourceReference {
    /**
     * The ApplicationId of the DataSource resource.
     */
    readonly applicationId: string;
    /**
     * The DataSourceId of the DataSource resource.
     */
    readonly dataSourceId: string;
    /**
     * The IndexId of the DataSource resource.
     */
    readonly indexId: string;
    /**
     * The ARN of the DataSource resource.
     */
    readonly dataSourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Index.
 *
 * @stability experimental
 */
export interface IIndexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Index resource.
     */
    readonly indexRef: IndexReference;
}
/**
 * A reference to a Index resource.
 *
 * @struct
 * @stability external
 */
export interface IndexReference {
    /**
     * The ApplicationId of the Index resource.
     */
    readonly applicationId: string;
    /**
     * The IndexId of the Index resource.
     */
    readonly indexId: string;
    /**
     * The ARN of the Index resource.
     */
    readonly indexArn: string;
}
/**
 * Indicates that this resource can be referenced as a Permission.
 *
 * @stability experimental
 */
export interface IPermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Permission resource.
     */
    readonly permissionRef: PermissionReference;
}
/**
 * A reference to a Permission resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionReference {
    /**
     * The ApplicationId of the Permission resource.
     */
    readonly applicationId: string;
    /**
     * The StatementId of the Permission resource.
     */
    readonly statementId: string;
}
/**
 * Indicates that this resource can be referenced as a Plugin.
 *
 * @stability experimental
 */
export interface IPluginRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Plugin resource.
     */
    readonly pluginRef: PluginReference;
}
/**
 * A reference to a Plugin resource.
 *
 * @struct
 * @stability external
 */
export interface PluginReference {
    /**
     * The ApplicationId of the Plugin resource.
     */
    readonly applicationId: string;
    /**
     * The PluginId of the Plugin resource.
     */
    readonly pluginId: string;
    /**
     * The ARN of the Plugin resource.
     */
    readonly pluginArn: string;
}
/**
 * Indicates that this resource can be referenced as a Retriever.
 *
 * @stability experimental
 */
export interface IRetrieverRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Retriever resource.
     */
    readonly retrieverRef: RetrieverReference;
}
/**
 * A reference to a Retriever resource.
 *
 * @struct
 * @stability external
 */
export interface RetrieverReference {
    /**
     * The ApplicationId of the Retriever resource.
     */
    readonly applicationId: string;
    /**
     * The RetrieverId of the Retriever resource.
     */
    readonly retrieverId: string;
    /**
     * The ARN of the Retriever resource.
     */
    readonly retrieverArn: string;
}
/**
 * Indicates that this resource can be referenced as a WebExperience.
 *
 * @stability experimental
 */
export interface IWebExperienceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WebExperience resource.
     */
    readonly webExperienceRef: WebExperienceReference;
}
/**
 * A reference to a WebExperience resource.
 *
 * @struct
 * @stability external
 */
export interface WebExperienceReference {
    /**
     * The ApplicationId of the WebExperience resource.
     */
    readonly applicationId: string;
    /**
     * The WebExperienceId of the WebExperience resource.
     */
    readonly webExperienceId: string;
    /**
     * The ARN of the WebExperience resource.
     */
    readonly webExperienceArn: string;
}
