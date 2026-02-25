import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ApprovedOrigin.
 *
 * @stability experimental
 */
export interface IApprovedOriginRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApprovedOrigin resource.
     */
    readonly approvedOriginRef: ApprovedOriginReference;
}
/**
 * A reference to a ApprovedOrigin resource.
 *
 * @struct
 * @stability external
 */
export interface ApprovedOriginReference {
    /**
     * The InstanceId of the ApprovedOrigin resource.
     */
    readonly instanceId: string;
    /**
     * The Origin of the ApprovedOrigin resource.
     */
    readonly origin: string;
}
/**
 * Indicates that this resource can be referenced as a ContactFlow.
 *
 * @stability experimental
 */
export interface IContactFlowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContactFlow resource.
     */
    readonly contactFlowRef: ContactFlowReference;
}
/**
 * A reference to a ContactFlow resource.
 *
 * @struct
 * @stability external
 */
export interface ContactFlowReference {
    /**
     * The ContactFlowArn of the ContactFlow resource.
     */
    readonly contactFlowArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContactFlowModule.
 *
 * @stability experimental
 */
export interface IContactFlowModuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContactFlowModule resource.
     */
    readonly contactFlowModuleRef: ContactFlowModuleReference;
}
/**
 * A reference to a ContactFlowModule resource.
 *
 * @struct
 * @stability external
 */
export interface ContactFlowModuleReference {
    /**
     * The ContactFlowModuleArn of the ContactFlowModule resource.
     */
    readonly contactFlowModuleArn: string;
}
/**
 * Indicates that this resource can be referenced as a EvaluationForm.
 *
 * @stability experimental
 */
export interface IEvaluationFormRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EvaluationForm resource.
     */
    readonly evaluationFormRef: EvaluationFormReference;
}
/**
 * A reference to a EvaluationForm resource.
 *
 * @struct
 * @stability external
 */
export interface EvaluationFormReference {
    /**
     * The EvaluationFormArn of the EvaluationForm resource.
     */
    readonly evaluationFormArn: string;
}
/**
 * Indicates that this resource can be referenced as a HoursOfOperation.
 *
 * @stability experimental
 */
export interface IHoursOfOperationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HoursOfOperation resource.
     */
    readonly hoursOfOperationRef: HoursOfOperationReference;
}
/**
 * A reference to a HoursOfOperation resource.
 *
 * @struct
 * @stability external
 */
export interface HoursOfOperationReference {
    /**
     * The HoursOfOperationArn of the HoursOfOperation resource.
     */
    readonly hoursOfOperationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Instance.
 *
 * @stability experimental
 */
export interface IInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Instance resource.
     */
    readonly instanceRef: InstanceReference;
}
/**
 * A reference to a Instance resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceReference {
    /**
     * The Arn of the Instance resource.
     */
    readonly instanceArn: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceStorageConfig.
 *
 * @stability experimental
 */
export interface IInstanceStorageConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceStorageConfig resource.
     */
    readonly instanceStorageConfigRef: InstanceStorageConfigReference;
}
/**
 * A reference to a InstanceStorageConfig resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceStorageConfigReference {
    /**
     * The InstanceArn of the InstanceStorageConfig resource.
     */
    readonly instanceArn: string;
    /**
     * The AssociationId of the InstanceStorageConfig resource.
     */
    readonly associationId: string;
    /**
     * The ResourceType of the InstanceStorageConfig resource.
     */
    readonly resourceType: string;
}
/**
 * Indicates that this resource can be referenced as a IntegrationAssociation.
 *
 * @stability experimental
 */
export interface IIntegrationAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IntegrationAssociation resource.
     */
    readonly integrationAssociationRef: IntegrationAssociationReference;
}
/**
 * A reference to a IntegrationAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationAssociationReference {
    /**
     * The InstanceId of the IntegrationAssociation resource.
     */
    readonly instanceId: string;
    /**
     * The IntegrationType of the IntegrationAssociation resource.
     */
    readonly integrationType: string;
    /**
     * The IntegrationArn of the IntegrationAssociation resource.
     */
    readonly integrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a PhoneNumber.
 *
 * @stability experimental
 */
export interface IPhoneNumberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PhoneNumber resource.
     */
    readonly phoneNumberRef: PhoneNumberReference;
}
/**
 * A reference to a PhoneNumber resource.
 *
 * @struct
 * @stability external
 */
export interface PhoneNumberReference {
    /**
     * The PhoneNumberArn of the PhoneNumber resource.
     */
    readonly phoneNumberArn: string;
}
/**
 * Indicates that this resource can be referenced as a Prompt.
 *
 * @stability experimental
 */
export interface IPromptRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Prompt resource.
     */
    readonly promptRef: PromptReference;
}
/**
 * A reference to a Prompt resource.
 *
 * @struct
 * @stability external
 */
export interface PromptReference {
    /**
     * The PromptArn of the Prompt resource.
     */
    readonly promptArn: string;
}
/**
 * Indicates that this resource can be referenced as a Queue.
 *
 * @stability experimental
 */
export interface IQueueRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Queue resource.
     */
    readonly queueRef: QueueReference;
}
/**
 * A reference to a Queue resource.
 *
 * @struct
 * @stability external
 */
export interface QueueReference {
    /**
     * The QueueArn of the Queue resource.
     */
    readonly queueArn: string;
}
/**
 * Indicates that this resource can be referenced as a QuickConnect.
 *
 * @stability experimental
 */
export interface IQuickConnectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QuickConnect resource.
     */
    readonly quickConnectRef: QuickConnectReference;
}
/**
 * A reference to a QuickConnect resource.
 *
 * @struct
 * @stability external
 */
export interface QuickConnectReference {
    /**
     * The QuickConnectArn of the QuickConnect resource.
     */
    readonly quickConnectArn: string;
}
/**
 * Indicates that this resource can be referenced as a RoutingProfile.
 *
 * @stability experimental
 */
export interface IRoutingProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RoutingProfile resource.
     */
    readonly routingProfileRef: RoutingProfileReference;
}
/**
 * A reference to a RoutingProfile resource.
 *
 * @struct
 * @stability external
 */
export interface RoutingProfileReference {
    /**
     * The RoutingProfileArn of the RoutingProfile resource.
     */
    readonly routingProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Rule.
 *
 * @stability experimental
 */
export interface IRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Rule resource.
     */
    readonly ruleRef: RuleReference;
}
/**
 * A reference to a Rule resource.
 *
 * @struct
 * @stability external
 */
export interface RuleReference {
    /**
     * The RuleArn of the Rule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityKey.
 *
 * @stability experimental
 */
export interface ISecurityKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityKey resource.
     */
    readonly securityKeyRef: SecurityKeyReference;
}
/**
 * A reference to a SecurityKey resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityKeyReference {
    /**
     * The InstanceId of the SecurityKey resource.
     */
    readonly instanceId: string;
    /**
     * The AssociationId of the SecurityKey resource.
     */
    readonly associationId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityProfile.
 *
 * @stability experimental
 */
export interface ISecurityProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityProfile resource.
     */
    readonly securityProfileRef: SecurityProfileReference;
}
/**
 * A reference to a SecurityProfile resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityProfileReference {
    /**
     * The SecurityProfileArn of the SecurityProfile resource.
     */
    readonly securityProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a TaskTemplate.
 *
 * @stability experimental
 */
export interface ITaskTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TaskTemplate resource.
     */
    readonly taskTemplateRef: TaskTemplateReference;
}
/**
 * A reference to a TaskTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface TaskTemplateReference {
    /**
     * The Arn of the TaskTemplate resource.
     */
    readonly taskTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a TrafficDistributionGroup.
 *
 * @stability experimental
 */
export interface ITrafficDistributionGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrafficDistributionGroup resource.
     */
    readonly trafficDistributionGroupRef: TrafficDistributionGroupReference;
}
/**
 * A reference to a TrafficDistributionGroup resource.
 *
 * @struct
 * @stability external
 */
export interface TrafficDistributionGroupReference {
    /**
     * The TrafficDistributionGroupArn of the TrafficDistributionGroup resource.
     */
    readonly trafficDistributionGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a User.
 *
 * @stability experimental
 */
export interface IUserRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a User resource.
     */
    readonly userRef: UserReference;
}
/**
 * A reference to a User resource.
 *
 * @struct
 * @stability external
 */
export interface UserReference {
    /**
     * The UserArn of the User resource.
     */
    readonly userArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserHierarchyGroup.
 *
 * @stability experimental
 */
export interface IUserHierarchyGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserHierarchyGroup resource.
     */
    readonly userHierarchyGroupRef: UserHierarchyGroupReference;
}
/**
 * A reference to a UserHierarchyGroup resource.
 *
 * @struct
 * @stability external
 */
export interface UserHierarchyGroupReference {
    /**
     * The UserHierarchyGroupArn of the UserHierarchyGroup resource.
     */
    readonly userHierarchyGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a View.
 *
 * @stability experimental
 */
export interface IViewRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a View resource.
     */
    readonly viewRef: ViewReference;
}
/**
 * A reference to a View resource.
 *
 * @struct
 * @stability external
 */
export interface ViewReference {
    /**
     * The ViewArn of the View resource.
     */
    readonly viewArn: string;
}
/**
 * Indicates that this resource can be referenced as a ViewVersion.
 *
 * @stability experimental
 */
export interface IViewVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ViewVersion resource.
     */
    readonly viewVersionRef: ViewVersionReference;
}
/**
 * A reference to a ViewVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ViewVersionReference {
    /**
     * The ViewVersionArn of the ViewVersion resource.
     */
    readonly viewVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a AgentStatus.
 *
 * @stability experimental
 */
export interface IAgentStatusRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AgentStatus resource.
     */
    readonly agentStatusRef: AgentStatusReference;
}
/**
 * A reference to a AgentStatus resource.
 *
 * @struct
 * @stability external
 */
export interface AgentStatusReference {
    /**
     * The AgentStatusArn of the AgentStatus resource.
     */
    readonly agentStatusArn: string;
}
/**
 * Indicates that this resource can be referenced as a ContactFlowVersion.
 *
 * @stability experimental
 */
export interface IContactFlowVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContactFlowVersion resource.
     */
    readonly contactFlowVersionRef: ContactFlowVersionReference;
}
/**
 * A reference to a ContactFlowVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ContactFlowVersionReference {
    /**
     * The ContactFlowVersionARN of the ContactFlowVersion resource.
     */
    readonly contactFlowVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataTable.
 *
 * @stability experimental
 */
export interface IDataTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataTable resource.
     */
    readonly dataTableRef: DataTableReference;
}
/**
 * A reference to a DataTable resource.
 *
 * @struct
 * @stability external
 */
export interface DataTableReference {
    /**
     * The InstanceArn of the DataTable resource.
     */
    readonly instanceArn: string;
    /**
     * The Arn of the DataTable resource.
     */
    readonly dataTableArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataTableAttribute.
 *
 * @stability experimental
 */
export interface IDataTableAttributeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataTableAttribute resource.
     */
    readonly dataTableAttributeRef: DataTableAttributeReference;
}
/**
 * A reference to a DataTableAttribute resource.
 *
 * @struct
 * @stability external
 */
export interface DataTableAttributeReference {
    /**
     * The InstanceArn of the DataTableAttribute resource.
     */
    readonly instanceArn: string;
    /**
     * The DataTableArn of the DataTableAttribute resource.
     */
    readonly dataTableArn: string;
    /**
     * The AttributeId of the DataTableAttribute resource.
     */
    readonly attributeId: string;
}
/**
 * Indicates that this resource can be referenced as a DataTableRecord.
 *
 * @stability experimental
 */
export interface IDataTableRecordRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataTableRecord resource.
     */
    readonly dataTableRecordRef: DataTableRecordReference;
}
/**
 * A reference to a DataTableRecord resource.
 *
 * @struct
 * @stability external
 */
export interface DataTableRecordReference {
    /**
     * The InstanceArn of the DataTableRecord resource.
     */
    readonly instanceArn: string;
    /**
     * The DataTableArn of the DataTableRecord resource.
     */
    readonly dataTableArn: string;
    /**
     * The RecordId of the DataTableRecord resource.
     */
    readonly recordId: string;
}
/**
 * Indicates that this resource can be referenced as a EmailAddress.
 *
 * @stability experimental
 */
export interface IEmailAddressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EmailAddress resource.
     */
    readonly emailAddressRef: EmailAddressReference;
}
/**
 * A reference to a EmailAddress resource.
 *
 * @struct
 * @stability external
 */
export interface EmailAddressReference {
    /**
     * The EmailAddressArn of the EmailAddress resource.
     */
    readonly emailAddressArn: string;
}
/**
 * Indicates that this resource can be referenced as a PredefinedAttribute.
 *
 * @stability experimental
 */
export interface IPredefinedAttributeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PredefinedAttribute resource.
     */
    readonly predefinedAttributeRef: PredefinedAttributeReference;
}
/**
 * A reference to a PredefinedAttribute resource.
 *
 * @struct
 * @stability external
 */
export interface PredefinedAttributeReference {
    /**
     * The InstanceArn of the PredefinedAttribute resource.
     */
    readonly instanceArn: string;
    /**
     * The Name of the PredefinedAttribute resource.
     */
    readonly predefinedAttributeName: string;
}
/**
 * Indicates that this resource can be referenced as a UserHierarchyStructure.
 *
 * @stability experimental
 */
export interface IUserHierarchyStructureRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserHierarchyStructure resource.
     */
    readonly userHierarchyStructureRef: UserHierarchyStructureReference;
}
/**
 * A reference to a UserHierarchyStructure resource.
 *
 * @struct
 * @stability external
 */
export interface UserHierarchyStructureReference {
    /**
     * The UserHierarchyStructureArn of the UserHierarchyStructure resource.
     */
    readonly userHierarchyStructureArn: string;
}
/**
 * Indicates that this resource can be referenced as a Workspace.
 *
 * @stability experimental
 */
export interface IWorkspaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workspace resource.
     */
    readonly workspaceRef: WorkspaceReference;
}
/**
 * A reference to a Workspace resource.
 *
 * @struct
 * @stability external
 */
export interface WorkspaceReference {
    /**
     * The Arn of the Workspace resource.
     */
    readonly workspaceArn: string;
}
