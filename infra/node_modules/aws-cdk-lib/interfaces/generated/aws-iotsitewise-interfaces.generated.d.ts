import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AccessPolicy.
 *
 * @stability experimental
 */
export interface IAccessPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AccessPolicy resource.
     */
    readonly accessPolicyRef: AccessPolicyReference;
}
/**
 * A reference to a AccessPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface AccessPolicyReference {
    /**
     * The AccessPolicyId of the AccessPolicy resource.
     */
    readonly accessPolicyId: string;
    /**
     * The ARN of the AccessPolicy resource.
     */
    readonly accessPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a Asset.
 *
 * @stability experimental
 */
export interface IAssetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Asset resource.
     */
    readonly assetRef: AssetReference;
}
/**
 * A reference to a Asset resource.
 *
 * @struct
 * @stability external
 */
export interface AssetReference {
    /**
     * The AssetId of the Asset resource.
     */
    readonly assetId: string;
    /**
     * The ARN of the Asset resource.
     */
    readonly assetArn: string;
}
/**
 * Indicates that this resource can be referenced as a AssetModel.
 *
 * @stability experimental
 */
export interface IAssetModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AssetModel resource.
     */
    readonly assetModelRef: AssetModelReference;
}
/**
 * A reference to a AssetModel resource.
 *
 * @struct
 * @stability external
 */
export interface AssetModelReference {
    /**
     * The AssetModelId of the AssetModel resource.
     */
    readonly assetModelId: string;
    /**
     * The ARN of the AssetModel resource.
     */
    readonly assetModelArn: string;
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
     * The DashboardId of the Dashboard resource.
     */
    readonly dashboardId: string;
    /**
     * The ARN of the Dashboard resource.
     */
    readonly dashboardArn: string;
}
/**
 * Indicates that this resource can be referenced as a Gateway.
 *
 * @stability experimental
 */
export interface IGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Gateway resource.
     */
    readonly gatewayRef: GatewayReference;
}
/**
 * A reference to a Gateway resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayReference {
    /**
     * The GatewayId of the Gateway resource.
     */
    readonly gatewayId: string;
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
     * The PortalId of the Portal resource.
     */
    readonly portalId: string;
    /**
     * The ARN of the Portal resource.
     */
    readonly portalArn: string;
}
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The ProjectId of the Project resource.
     */
    readonly projectId: string;
    /**
     * The ARN of the Project resource.
     */
    readonly projectArn: string;
}
/**
 * Indicates that this resource can be referenced as a ComputationModel.
 *
 * @stability experimental
 */
export interface IComputationModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ComputationModel resource.
     */
    readonly computationModelRef: ComputationModelReference;
}
/**
 * A reference to a ComputationModel resource.
 *
 * @struct
 * @stability external
 */
export interface ComputationModelReference {
    /**
     * The ComputationModelId of the ComputationModel resource.
     */
    readonly computationModelId: string;
    /**
     * The ARN of the ComputationModel resource.
     */
    readonly computationModelArn: string;
}
/**
 * Indicates that this resource can be referenced as a Dataset.
 *
 * @stability experimental
 */
export interface IDatasetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Dataset resource.
     */
    readonly datasetRef: DatasetReference;
}
/**
 * A reference to a Dataset resource.
 *
 * @struct
 * @stability external
 */
export interface DatasetReference {
    /**
     * The DatasetId of the Dataset resource.
     */
    readonly datasetId: string;
    /**
     * The ARN of the Dataset resource.
     */
    readonly datasetArn: string;
}
