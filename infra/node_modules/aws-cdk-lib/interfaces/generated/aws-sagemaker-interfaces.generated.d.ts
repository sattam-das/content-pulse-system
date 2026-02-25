import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a App.
 *
 * @stability experimental
 */
export interface IAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a App resource.
     */
    readonly appRef: AppReference;
}
/**
 * A reference to a App resource.
 *
 * @struct
 * @stability external
 */
export interface AppReference {
    /**
     * The AppName of the App resource.
     */
    readonly appName: string;
    /**
     * The AppType of the App resource.
     */
    readonly appType: string;
    /**
     * The DomainId of the App resource.
     */
    readonly domainId: string;
    /**
     * The UserProfileName of the App resource.
     */
    readonly userProfileName: string;
    /**
     * The ARN of the App resource.
     */
    readonly appArn: string;
}
/**
 * Indicates that this resource can be referenced as a AppImageConfig.
 *
 * @stability experimental
 */
export interface IAppImageConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AppImageConfig resource.
     */
    readonly appImageConfigRef: AppImageConfigReference;
}
/**
 * A reference to a AppImageConfig resource.
 *
 * @struct
 * @stability external
 */
export interface AppImageConfigReference {
    /**
     * The AppImageConfigName of the AppImageConfig resource.
     */
    readonly appImageConfigName: string;
    /**
     * The ARN of the AppImageConfig resource.
     */
    readonly appImageConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a CodeRepository.
 *
 * @stability experimental
 */
export interface ICodeRepositoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CodeRepository resource.
     */
    readonly codeRepositoryRef: CodeRepositoryReference;
}
/**
 * A reference to a CodeRepository resource.
 *
 * @struct
 * @stability external
 */
export interface CodeRepositoryReference {
    /**
     * The Id of the CodeRepository resource.
     */
    readonly codeRepositoryId: string;
    /**
     * The CodeRepositoryName of the CodeRepository resource.
     */
    readonly codeRepositoryName: string;
}
/**
 * Indicates that this resource can be referenced as a DataQualityJobDefinition.
 *
 * @stability experimental
 */
export interface IDataQualityJobDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataQualityJobDefinition resource.
     */
    readonly dataQualityJobDefinitionRef: DataQualityJobDefinitionReference;
}
/**
 * A reference to a DataQualityJobDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface DataQualityJobDefinitionReference {
    /**
     * The JobDefinitionArn of the DataQualityJobDefinition resource.
     */
    readonly jobDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Device.
 *
 * @stability experimental
 */
export interface IDeviceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Device resource.
     */
    readonly deviceRef: DeviceReference;
}
/**
 * A reference to a Device resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceReference {
    /**
     * The DeviceFleetName of the Device resource.
     */
    readonly deviceFleetName: string;
}
/**
 * Indicates that this resource can be referenced as a DeviceFleet.
 *
 * @stability experimental
 */
export interface IDeviceFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeviceFleet resource.
     */
    readonly deviceFleetRef: DeviceFleetReference;
}
/**
 * A reference to a DeviceFleet resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceFleetReference {
    /**
     * The DeviceFleetName of the DeviceFleet resource.
     */
    readonly deviceFleetName: string;
}
/**
 * Indicates that this resource can be referenced as a Domain.
 *
 * @stability experimental
 */
export interface IDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Domain resource.
     */
    readonly domainRef: DomainReference;
}
/**
 * A reference to a Domain resource.
 *
 * @struct
 * @stability external
 */
export interface DomainReference {
    /**
     * The DomainId of the Domain resource.
     */
    readonly domainId: string;
    /**
     * The ARN of the Domain resource.
     */
    readonly domainArn: string;
}
/**
 * Indicates that this resource can be referenced as a Endpoint.
 *
 * @stability experimental
 */
export interface IEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Endpoint resource.
     */
    readonly endpointRef: EndpointReference;
}
/**
 * A reference to a Endpoint resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointReference {
    /**
     * The EndpointArn of the Endpoint resource.
     */
    readonly endpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a EndpointConfig.
 *
 * @stability experimental
 */
export interface IEndpointConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EndpointConfig resource.
     */
    readonly endpointConfigRef: EndpointConfigReference;
}
/**
 * A reference to a EndpointConfig resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointConfigReference {
    /**
     * The Id of the EndpointConfig resource.
     */
    readonly endpointConfigId: string;
    /**
     * The EndpointConfigName of the EndpointConfig resource.
     */
    readonly endpointConfigName: string;
}
/**
 * Indicates that this resource can be referenced as a FeatureGroup.
 *
 * @stability experimental
 */
export interface IFeatureGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FeatureGroup resource.
     */
    readonly featureGroupRef: FeatureGroupReference;
}
/**
 * A reference to a FeatureGroup resource.
 *
 * @struct
 * @stability external
 */
export interface FeatureGroupReference {
    /**
     * The FeatureGroupName of the FeatureGroup resource.
     */
    readonly featureGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a Image.
 *
 * @stability experimental
 */
export interface IImageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Image resource.
     */
    readonly imageRef: ImageReference;
}
/**
 * A reference to a Image resource.
 *
 * @struct
 * @stability external
 */
export interface ImageReference {
    /**
     * The ImageArn of the Image resource.
     */
    readonly imageArn: string;
}
/**
 * Indicates that this resource can be referenced as a ImageVersion.
 *
 * @stability experimental
 */
export interface IImageVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ImageVersion resource.
     */
    readonly imageVersionRef: ImageVersionReference;
}
/**
 * A reference to a ImageVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ImageVersionReference {
    /**
     * The ImageVersionArn of the ImageVersion resource.
     */
    readonly imageVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a InferenceExperiment.
 *
 * @stability experimental
 */
export interface IInferenceExperimentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InferenceExperiment resource.
     */
    readonly inferenceExperimentRef: InferenceExperimentReference;
}
/**
 * A reference to a InferenceExperiment resource.
 *
 * @struct
 * @stability external
 */
export interface InferenceExperimentReference {
    /**
     * The Name of the InferenceExperiment resource.
     */
    readonly inferenceExperimentName: string;
    /**
     * The ARN of the InferenceExperiment resource.
     */
    readonly inferenceExperimentArn: string;
}
/**
 * Indicates that this resource can be referenced as a Model.
 *
 * @stability experimental
 */
export interface IModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Model resource.
     */
    readonly modelRef: ModelReference;
}
/**
 * A reference to a Model resource.
 *
 * @struct
 * @stability external
 */
export interface ModelReference {
    /**
     * The Id of the Model resource.
     */
    readonly modelId: string;
    /**
     * The ModelName of the Model resource.
     */
    readonly modelName: string;
}
/**
 * Indicates that this resource can be referenced as a ModelBiasJobDefinition.
 *
 * @stability experimental
 */
export interface IModelBiasJobDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelBiasJobDefinition resource.
     */
    readonly modelBiasJobDefinitionRef: ModelBiasJobDefinitionReference;
}
/**
 * A reference to a ModelBiasJobDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ModelBiasJobDefinitionReference {
    /**
     * The JobDefinitionArn of the ModelBiasJobDefinition resource.
     */
    readonly jobDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelCard.
 *
 * @stability experimental
 */
export interface IModelCardRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelCard resource.
     */
    readonly modelCardRef: ModelCardReference;
}
/**
 * A reference to a ModelCard resource.
 *
 * @struct
 * @stability external
 */
export interface ModelCardReference {
    /**
     * The ModelCardName of the ModelCard resource.
     */
    readonly modelCardName: string;
    /**
     * The ARN of the ModelCard resource.
     */
    readonly modelCardArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelExplainabilityJobDefinition.
 *
 * @stability experimental
 */
export interface IModelExplainabilityJobDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelExplainabilityJobDefinition resource.
     */
    readonly modelExplainabilityJobDefinitionRef: ModelExplainabilityJobDefinitionReference;
}
/**
 * A reference to a ModelExplainabilityJobDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ModelExplainabilityJobDefinitionReference {
    /**
     * The JobDefinitionArn of the ModelExplainabilityJobDefinition resource.
     */
    readonly jobDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelPackage.
 *
 * @stability experimental
 */
export interface IModelPackageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelPackage resource.
     */
    readonly modelPackageRef: ModelPackageReference;
}
/**
 * A reference to a ModelPackage resource.
 *
 * @struct
 * @stability external
 */
export interface ModelPackageReference {
    /**
     * The ModelPackageArn of the ModelPackage resource.
     */
    readonly modelPackageArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelPackageGroup.
 *
 * @stability experimental
 */
export interface IModelPackageGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelPackageGroup resource.
     */
    readonly modelPackageGroupRef: ModelPackageGroupReference;
}
/**
 * A reference to a ModelPackageGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ModelPackageGroupReference {
    /**
     * The ModelPackageGroupArn of the ModelPackageGroup resource.
     */
    readonly modelPackageGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelQualityJobDefinition.
 *
 * @stability experimental
 */
export interface IModelQualityJobDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelQualityJobDefinition resource.
     */
    readonly modelQualityJobDefinitionRef: ModelQualityJobDefinitionReference;
}
/**
 * A reference to a ModelQualityJobDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ModelQualityJobDefinitionReference {
    /**
     * The JobDefinitionArn of the ModelQualityJobDefinition resource.
     */
    readonly jobDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a MonitoringSchedule.
 *
 * @stability experimental
 */
export interface IMonitoringScheduleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MonitoringSchedule resource.
     */
    readonly monitoringScheduleRef: MonitoringScheduleReference;
}
/**
 * A reference to a MonitoringSchedule resource.
 *
 * @struct
 * @stability external
 */
export interface MonitoringScheduleReference {
    /**
     * The MonitoringScheduleArn of the MonitoringSchedule resource.
     */
    readonly monitoringScheduleArn: string;
}
/**
 * Indicates that this resource can be referenced as a NotebookInstance.
 *
 * @stability experimental
 */
export interface INotebookInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotebookInstance resource.
     */
    readonly notebookInstanceRef: NotebookInstanceReference;
}
/**
 * A reference to a NotebookInstance resource.
 *
 * @struct
 * @stability external
 */
export interface NotebookInstanceReference {
    /**
     * The Id of the NotebookInstance resource.
     */
    readonly notebookInstanceId: string;
    /**
     * The NotebookInstanceName of the NotebookInstance resource.
     */
    readonly notebookInstanceName: string;
}
/**
 * Indicates that this resource can be referenced as a NotebookInstanceLifecycleConfig.
 *
 * @stability experimental
 */
export interface INotebookInstanceLifecycleConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotebookInstanceLifecycleConfig resource.
     */
    readonly notebookInstanceLifecycleConfigRef: NotebookInstanceLifecycleConfigReference;
}
/**
 * A reference to a NotebookInstanceLifecycleConfig resource.
 *
 * @struct
 * @stability external
 */
export interface NotebookInstanceLifecycleConfigReference {
    /**
     * The Id of the NotebookInstanceLifecycleConfig resource.
     */
    readonly notebookInstanceLifecycleConfigId: string;
    /**
     * The NotebookInstanceLifecycleConfigName of the NotebookInstanceLifecycleConfig resource.
     */
    readonly notebookInstanceLifecycleConfigName: string;
}
/**
 * Indicates that this resource can be referenced as a Pipeline.
 *
 * @stability experimental
 */
export interface IPipelineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pipeline resource.
     */
    readonly pipelineRef: PipelineReference;
}
/**
 * A reference to a Pipeline resource.
 *
 * @struct
 * @stability external
 */
export interface PipelineReference {
    /**
     * The PipelineName of the Pipeline resource.
     */
    readonly pipelineName: string;
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
     * The ProjectArn of the Project resource.
     */
    readonly projectArn: string;
}
/**
 * Indicates that this resource can be referenced as a Space.
 *
 * @stability experimental
 */
export interface ISpaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Space resource.
     */
    readonly spaceRef: SpaceReference;
}
/**
 * A reference to a Space resource.
 *
 * @struct
 * @stability external
 */
export interface SpaceReference {
    /**
     * The DomainId of the Space resource.
     */
    readonly domainId: string;
    /**
     * The SpaceName of the Space resource.
     */
    readonly spaceName: string;
    /**
     * The ARN of the Space resource.
     */
    readonly spaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserProfile.
 *
 * @stability experimental
 */
export interface IUserProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserProfile resource.
     */
    readonly userProfileRef: UserProfileReference;
}
/**
 * A reference to a UserProfile resource.
 *
 * @struct
 * @stability external
 */
export interface UserProfileReference {
    /**
     * The UserProfileName of the UserProfile resource.
     */
    readonly userProfileName: string;
    /**
     * The DomainId of the UserProfile resource.
     */
    readonly domainId: string;
    /**
     * The ARN of the UserProfile resource.
     */
    readonly userProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Workteam.
 *
 * @stability experimental
 */
export interface IWorkteamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workteam resource.
     */
    readonly workteamRef: WorkteamReference;
}
/**
 * A reference to a Workteam resource.
 *
 * @struct
 * @stability external
 */
export interface WorkteamReference {
    /**
     * The Id of the Workteam resource.
     */
    readonly workteamId: string;
    /**
     * The WorkteamName of the Workteam resource.
     */
    readonly workteamName: string;
}
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The ClusterArn of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a InferenceComponent.
 *
 * @stability experimental
 */
export interface IInferenceComponentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InferenceComponent resource.
     */
    readonly inferenceComponentRef: InferenceComponentReference;
}
/**
 * A reference to a InferenceComponent resource.
 *
 * @struct
 * @stability external
 */
export interface InferenceComponentReference {
    /**
     * The InferenceComponentArn of the InferenceComponent resource.
     */
    readonly inferenceComponentArn: string;
}
/**
 * Indicates that this resource can be referenced as a MlflowTrackingServer.
 *
 * @stability experimental
 */
export interface IMlflowTrackingServerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MlflowTrackingServer resource.
     */
    readonly mlflowTrackingServerRef: MlflowTrackingServerReference;
}
/**
 * A reference to a MlflowTrackingServer resource.
 *
 * @struct
 * @stability external
 */
export interface MlflowTrackingServerReference {
    /**
     * The TrackingServerName of the MlflowTrackingServer resource.
     */
    readonly trackingServerName: string;
}
/**
 * Indicates that this resource can be referenced as a PartnerApp.
 *
 * @stability experimental
 */
export interface IPartnerAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PartnerApp resource.
     */
    readonly partnerAppRef: PartnerAppReference;
}
/**
 * A reference to a PartnerApp resource.
 *
 * @struct
 * @stability external
 */
export interface PartnerAppReference {
    /**
     * The Arn of the PartnerApp resource.
     */
    readonly partnerAppArn: string;
}
/**
 * Indicates that this resource can be referenced as a ProcessingJob.
 *
 * @stability experimental
 */
export interface IProcessingJobRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProcessingJob resource.
     */
    readonly processingJobRef: ProcessingJobReference;
}
/**
 * A reference to a ProcessingJob resource.
 *
 * @struct
 * @stability external
 */
export interface ProcessingJobReference {
    /**
     * The ProcessingJobArn of the ProcessingJob resource.
     */
    readonly processingJobArn: string;
}
/**
 * Indicates that this resource can be referenced as a StudioLifecycleConfig.
 *
 * @stability experimental
 */
export interface IStudioLifecycleConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StudioLifecycleConfig resource.
     */
    readonly studioLifecycleConfigRef: StudioLifecycleConfigReference;
}
/**
 * A reference to a StudioLifecycleConfig resource.
 *
 * @struct
 * @stability external
 */
export interface StudioLifecycleConfigReference {
    /**
     * The StudioLifecycleConfigName of the StudioLifecycleConfig resource.
     */
    readonly studioLifecycleConfigName: string;
    /**
     * The ARN of the StudioLifecycleConfig resource.
     */
    readonly studioLifecycleConfigArn: string;
}
