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
 * Indicates that this resource can be referenced as a ApplicationCloudWatchLoggingOption.
 *
 * @stability experimental
 */
export interface IApplicationCloudWatchLoggingOptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationCloudWatchLoggingOption resource.
     */
    readonly applicationCloudWatchLoggingOptionRef: ApplicationCloudWatchLoggingOptionReference;
}
/**
 * A reference to a ApplicationCloudWatchLoggingOption resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationCloudWatchLoggingOptionReference {
    /**
     * The Id of the ApplicationCloudWatchLoggingOption resource.
     */
    readonly applicationCloudWatchLoggingOptionId: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationOutput.
 *
 * @stability experimental
 */
export interface IApplicationOutputRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationOutput resource.
     */
    readonly applicationOutputRef: ApplicationOutputReference;
}
/**
 * A reference to a ApplicationOutput resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationOutputReference {
    /**
     * The Id of the ApplicationOutput resource.
     */
    readonly applicationOutputId: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationReferenceDataSource.
 *
 * @stability experimental
 */
export interface IApplicationReferenceDataSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationReferenceDataSource resource.
     */
    readonly applicationReferenceDataSourceRef: ApplicationReferenceDataSourceReference;
}
/**
 * A reference to a ApplicationReferenceDataSource resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReferenceDataSourceReference {
    /**
     * The Id of the ApplicationReferenceDataSource resource.
     */
    readonly applicationReferenceDataSourceId: string;
}
