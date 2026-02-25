import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Analysis.
 *
 * @stability experimental
 */
export interface IAnalysisRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Analysis resource.
     */
    readonly analysisRef: AnalysisReference;
}
/**
 * A reference to a Analysis resource.
 *
 * @struct
 * @stability external
 */
export interface AnalysisReference {
    /**
     * The AnalysisId of the Analysis resource.
     */
    readonly analysisId: string;
    /**
     * The AwsAccountId of the Analysis resource.
     */
    readonly awsAccountId: string;
    /**
     * The ARN of the Analysis resource.
     */
    readonly analysisArn: string;
}
/**
 * Indicates that this resource can be referenced as a Dashboard.
 *
 * @stability experimental
 */
export interface IDashboardRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dashboard resource.
     */
    readonly dashboardRef: DashboardReference;
}
/**
 * A reference to a Dashboard resource.
 *
 * @struct
 * @stability external
 */
export interface DashboardReference {
    /**
     * The AwsAccountId of the Dashboard resource.
     */
    readonly awsAccountId: string;
    /**
     * The DashboardId of the Dashboard resource.
     */
    readonly dashboardId: string;
    /**
     * The ARN of the Dashboard resource.
     */
    readonly dashboardArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataSet.
 *
 * @stability experimental
 */
export interface IDataSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataSet resource.
     */
    readonly dataSetRef: DataSetReference;
}
/**
 * A reference to a DataSet resource.
 *
 * @struct
 * @stability external
 */
export interface DataSetReference {
    /**
     * The AwsAccountId of the DataSet resource.
     */
    readonly awsAccountId: string;
    /**
     * The DataSetId of the DataSet resource.
     */
    readonly dataSetId: string;
    /**
     * The ARN of the DataSet resource.
     */
    readonly dataSetArn: string;
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
     * The AwsAccountId of the DataSource resource.
     */
    readonly awsAccountId: string;
    /**
     * The DataSourceId of the DataSource resource.
     */
    readonly dataSourceId: string;
    /**
     * The ARN of the DataSource resource.
     */
    readonly dataSourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a RefreshSchedule.
 *
 * @stability experimental
 */
export interface IRefreshScheduleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RefreshSchedule resource.
     */
    readonly refreshScheduleRef: RefreshScheduleReference;
}
/**
 * A reference to a RefreshSchedule resource.
 *
 * @struct
 * @stability external
 */
export interface RefreshScheduleReference {
    /**
     * The AwsAccountId of the RefreshSchedule resource.
     */
    readonly awsAccountId: string;
    /**
     * The DataSetId of the RefreshSchedule resource.
     */
    readonly dataSetId: string;
    /**
     * The Schedule/ScheduleId of the RefreshSchedule resource.
     */
    readonly scheduleId: string;
    /**
     * The ARN of the RefreshSchedule resource.
     */
    readonly refreshScheduleArn: string;
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
     * The AwsAccountId of the Template resource.
     */
    readonly awsAccountId: string;
    /**
     * The TemplateId of the Template resource.
     */
    readonly templateId: string;
    /**
     * The ARN of the Template resource.
     */
    readonly templateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Theme.
 *
 * @stability experimental
 */
export interface IThemeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Theme resource.
     */
    readonly themeRef: ThemeReference;
}
/**
 * A reference to a Theme resource.
 *
 * @struct
 * @stability external
 */
export interface ThemeReference {
    /**
     * The ThemeId of the Theme resource.
     */
    readonly themeId: string;
    /**
     * The AwsAccountId of the Theme resource.
     */
    readonly awsAccountId: string;
    /**
     * The ARN of the Theme resource.
     */
    readonly themeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Topic.
 *
 * @stability experimental
 */
export interface ITopicRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Topic resource.
     */
    readonly topicRef: TopicReference;
}
/**
 * A reference to a Topic resource.
 *
 * @struct
 * @stability external
 */
export interface TopicReference {
    /**
     * The AwsAccountId of the Topic resource.
     */
    readonly awsAccountId: string;
    /**
     * The TopicId of the Topic resource.
     */
    readonly topicId: string;
    /**
     * The ARN of the Topic resource.
     */
    readonly topicArn: string;
}
/**
 * Indicates that this resource can be referenced as a VPCConnection.
 *
 * @stability experimental
 */
export interface IVPCConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCConnection resource.
     */
    readonly vpcConnectionRef: VPCConnectionReference;
}
/**
 * A reference to a VPCConnection resource.
 *
 * @struct
 * @stability external
 */
export interface VPCConnectionReference {
    /**
     * The AwsAccountId of the VPCConnection resource.
     */
    readonly awsAccountId: string;
    /**
     * The VPCConnectionId of the VPCConnection resource.
     */
    readonly vpcConnectionId: string;
    /**
     * The ARN of the VPCConnection resource.
     */
    readonly vpcConnectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ActionConnector.
 *
 * @stability experimental
 */
export interface IActionConnectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ActionConnector resource.
     */
    readonly actionConnectorRef: ActionConnectorReference;
}
/**
 * A reference to a ActionConnector resource.
 *
 * @struct
 * @stability external
 */
export interface ActionConnectorReference {
    /**
     * The ActionConnectorId of the ActionConnector resource.
     */
    readonly actionConnectorId: string;
    /**
     * The AwsAccountId of the ActionConnector resource.
     */
    readonly awsAccountId: string;
    /**
     * The ARN of the ActionConnector resource.
     */
    readonly actionConnectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomPermissions.
 *
 * @stability experimental
 */
export interface ICustomPermissionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomPermissions resource.
     */
    readonly customPermissionsRef: CustomPermissionsReference;
}
/**
 * A reference to a CustomPermissions resource.
 *
 * @struct
 * @stability external
 */
export interface CustomPermissionsReference {
    /**
     * The AwsAccountId of the CustomPermissions resource.
     */
    readonly awsAccountId: string;
    /**
     * The CustomPermissionsName of the CustomPermissions resource.
     */
    readonly customPermissionsName: string;
    /**
     * The ARN of the CustomPermissions resource.
     */
    readonly customPermissionsArn: string;
}
/**
 * Indicates that this resource can be referenced as a Folder.
 *
 * @stability experimental
 */
export interface IFolderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Folder resource.
     */
    readonly folderRef: FolderReference;
}
/**
 * A reference to a Folder resource.
 *
 * @struct
 * @stability external
 */
export interface FolderReference {
    /**
     * The AwsAccountId of the Folder resource.
     */
    readonly awsAccountId: string;
    /**
     * The FolderId of the Folder resource.
     */
    readonly folderId: string;
    /**
     * The ARN of the Folder resource.
     */
    readonly folderArn: string;
}
