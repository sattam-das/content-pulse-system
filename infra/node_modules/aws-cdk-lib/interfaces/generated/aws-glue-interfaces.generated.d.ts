import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Classifier.
 *
 * @stability experimental
 */
export interface IClassifierRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Classifier resource.
     */
    readonly classifierRef: ClassifierReference;
}
/**
 * A reference to a Classifier resource.
 *
 * @struct
 * @stability external
 */
export interface ClassifierReference {
    /**
     * The Id of the Classifier resource.
     */
    readonly classifierId: string;
}
/**
 * Indicates that this resource can be referenced as a Connection.
 *
 * @stability experimental
 */
export interface IConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connection resource.
     */
    readonly connectionRef: ConnectionReference;
}
/**
 * A reference to a Connection resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionReference {
    /**
     * The Id of the Connection resource.
     */
    readonly connectionId: string;
}
/**
 * Indicates that this resource can be referenced as a Crawler.
 *
 * @stability experimental
 */
export interface ICrawlerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Crawler resource.
     */
    readonly crawlerRef: CrawlerReference;
}
/**
 * A reference to a Crawler resource.
 *
 * @struct
 * @stability external
 */
export interface CrawlerReference {
    /**
     * The Name of the Crawler resource.
     */
    readonly crawlerName: string;
}
/**
 * Indicates that this resource can be referenced as a DataCatalogEncryptionSettings.
 *
 * @stability experimental
 */
export interface IDataCatalogEncryptionSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataCatalogEncryptionSettings resource.
     */
    readonly dataCatalogEncryptionSettingsRef: DataCatalogEncryptionSettingsReference;
}
/**
 * A reference to a DataCatalogEncryptionSettings resource.
 *
 * @struct
 * @stability external
 */
export interface DataCatalogEncryptionSettingsReference {
    /**
     * The Id of the DataCatalogEncryptionSettings resource.
     */
    readonly dataCatalogEncryptionSettingsId: string;
}
/**
 * Indicates that this resource can be referenced as a DataQualityRuleset.
 *
 * @stability experimental
 */
export interface IDataQualityRulesetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataQualityRuleset resource.
     */
    readonly dataQualityRulesetRef: DataQualityRulesetReference;
}
/**
 * A reference to a DataQualityRuleset resource.
 *
 * @struct
 * @stability external
 */
export interface DataQualityRulesetReference {
    /**
     * The Id of the DataQualityRuleset resource.
     */
    readonly dataQualityRulesetId: string;
}
/**
 * Indicates that this resource can be referenced as a Database.
 *
 * @stability experimental
 */
export interface IDatabaseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Database resource.
     */
    readonly databaseRef: DatabaseReference;
}
/**
 * A reference to a Database resource.
 *
 * @struct
 * @stability external
 */
export interface DatabaseReference {
    /**
     * The DatabaseName of the Database resource.
     */
    readonly databaseName: string;
}
/**
 * Indicates that this resource can be referenced as a DevEndpoint.
 *
 * @stability experimental
 */
export interface IDevEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DevEndpoint resource.
     */
    readonly devEndpointRef: DevEndpointReference;
}
/**
 * A reference to a DevEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface DevEndpointReference {
    /**
     * The EndpointName of the DevEndpoint resource.
     */
    readonly endpointName: string;
}
/**
 * Indicates that this resource can be referenced as a Job.
 *
 * @stability experimental
 */
export interface IJobRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Job resource.
     */
    readonly jobRef: JobReference;
}
/**
 * A reference to a Job resource.
 *
 * @struct
 * @stability external
 */
export interface JobReference {
    /**
     * The Name of the Job resource.
     */
    readonly jobName: string;
}
/**
 * Indicates that this resource can be referenced as a MLTransform.
 *
 * @stability experimental
 */
export interface IMLTransformRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MLTransform resource.
     */
    readonly mlTransformRef: MLTransformReference;
}
/**
 * A reference to a MLTransform resource.
 *
 * @struct
 * @stability external
 */
export interface MLTransformReference {
    /**
     * The Id of the MLTransform resource.
     */
    readonly mlTransformId: string;
}
/**
 * Indicates that this resource can be referenced as a Partition.
 *
 * @stability experimental
 */
export interface IPartitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Partition resource.
     */
    readonly partitionRef: PartitionReference;
}
/**
 * A reference to a Partition resource.
 *
 * @struct
 * @stability external
 */
export interface PartitionReference {
    /**
     * The Id of the Partition resource.
     */
    readonly partitionId: string;
}
/**
 * Indicates that this resource can be referenced as a Registry.
 *
 * @stability experimental
 */
export interface IRegistryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Registry resource.
     */
    readonly registryRef: RegistryReference;
}
/**
 * A reference to a Registry resource.
 *
 * @struct
 * @stability external
 */
export interface RegistryReference {
    /**
     * The Arn of the Registry resource.
     */
    readonly registryArn: string;
}
/**
 * Indicates that this resource can be referenced as a Schema.
 *
 * @stability experimental
 */
export interface ISchemaRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Schema resource.
     */
    readonly schemaRef: SchemaReference;
}
/**
 * A reference to a Schema resource.
 *
 * @struct
 * @stability external
 */
export interface SchemaReference {
    /**
     * The Arn of the Schema resource.
     */
    readonly schemaArn: string;
}
/**
 * Indicates that this resource can be referenced as a SchemaVersion.
 *
 * @stability experimental
 */
export interface ISchemaVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SchemaVersion resource.
     */
    readonly schemaVersionRef: SchemaVersionReference;
}
/**
 * A reference to a SchemaVersion resource.
 *
 * @struct
 * @stability external
 */
export interface SchemaVersionReference {
    /**
     * The VersionId of the SchemaVersion resource.
     */
    readonly versionId: string;
}
/**
 * Indicates that this resource can be referenced as a SchemaVersionMetadata.
 *
 * @stability experimental
 */
export interface ISchemaVersionMetadataRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SchemaVersionMetadata resource.
     */
    readonly schemaVersionMetadataRef: SchemaVersionMetadataReference;
}
/**
 * A reference to a SchemaVersionMetadata resource.
 *
 * @struct
 * @stability external
 */
export interface SchemaVersionMetadataReference {
    /**
     * The SchemaVersionId of the SchemaVersionMetadata resource.
     */
    readonly schemaVersionId: string;
    /**
     * The Key of the SchemaVersionMetadata resource.
     */
    readonly key: string;
    /**
     * The Value of the SchemaVersionMetadata resource.
     */
    readonly value: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityConfiguration.
 *
 * @stability experimental
 */
export interface ISecurityConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityConfiguration resource.
     */
    readonly securityConfigurationRef: SecurityConfigurationReference;
}
/**
 * A reference to a SecurityConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityConfigurationReference {
    /**
     * The Id of the SecurityConfiguration resource.
     */
    readonly securityConfigurationId: string;
}
/**
 * Indicates that this resource can be referenced as a Table.
 *
 * @stability experimental
 */
export interface ITableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Table resource.
     */
    readonly tableRef: TableReference;
}
/**
 * A reference to a Table resource.
 *
 * @struct
 * @stability external
 */
export interface TableReference {
    /**
     * The Id of the Table resource.
     */
    readonly tableId: string;
}
/**
 * Indicates that this resource can be referenced as a Trigger.
 *
 * @stability experimental
 */
export interface ITriggerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Trigger resource.
     */
    readonly triggerRef: TriggerReference;
}
/**
 * A reference to a Trigger resource.
 *
 * @struct
 * @stability external
 */
export interface TriggerReference {
    /**
     * The Name of the Trigger resource.
     */
    readonly triggerName: string;
}
/**
 * Indicates that this resource can be referenced as a Workflow.
 *
 * @stability experimental
 */
export interface IWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workflow resource.
     */
    readonly workflowRef: WorkflowReference;
}
/**
 * A reference to a Workflow resource.
 *
 * @struct
 * @stability external
 */
export interface WorkflowReference {
    /**
     * The Name of the Workflow resource.
     */
    readonly workflowName: string;
}
/**
 * Indicates that this resource can be referenced as a CustomEntityType.
 *
 * @stability experimental
 */
export interface ICustomEntityTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomEntityType resource.
     */
    readonly customEntityTypeRef: CustomEntityTypeReference;
}
/**
 * A reference to a CustomEntityType resource.
 *
 * @struct
 * @stability external
 */
export interface CustomEntityTypeReference {
    /**
     * The Id of the CustomEntityType resource.
     */
    readonly customEntityTypeId: string;
}
/**
 * Indicates that this resource can be referenced as a IdentityCenterConfiguration.
 *
 * @stability experimental
 */
export interface IIdentityCenterConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdentityCenterConfiguration resource.
     */
    readonly identityCenterConfigurationRef: IdentityCenterConfigurationReference;
}
/**
 * A reference to a IdentityCenterConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityCenterConfigurationReference {
    /**
     * The AccountId of the IdentityCenterConfiguration resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a Integration.
 *
 * @stability experimental
 */
export interface IIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Integration resource.
     */
    readonly integrationRef: IntegrationReference;
}
/**
 * A reference to a Integration resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationReference {
    /**
     * The IntegrationArn of the Integration resource.
     */
    readonly integrationArn: string;
    /**
     * The IntegrationName of the Integration resource.
     */
    readonly integrationName: string;
}
/**
 * Indicates that this resource can be referenced as a IntegrationResourceProperty.
 *
 * @stability experimental
 */
export interface IIntegrationResourcePropertyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IntegrationResourceProperty resource.
     */
    readonly integrationResourcePropertyRef: IntegrationResourcePropertyReference;
}
/**
 * A reference to a IntegrationResourceProperty resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationResourcePropertyReference {
    /**
     * The ResourceArn of the IntegrationResourceProperty resource.
     */
    readonly resourceArn: string;
    /**
     * The ResourcePropertyArn of the IntegrationResourceProperty resource.
     */
    readonly resourcePropertyArn: string;
}
/**
 * Indicates that this resource can be referenced as a TableOptimizer.
 *
 * @stability experimental
 */
export interface ITableOptimizerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TableOptimizer resource.
     */
    readonly tableOptimizerRef: TableOptimizerReference;
}
/**
 * A reference to a TableOptimizer resource.
 *
 * @struct
 * @stability external
 */
export interface TableOptimizerReference {
    /**
     * The Id of the TableOptimizer resource.
     */
    readonly tableOptimizerId: string;
}
/**
 * Indicates that this resource can be referenced as a UsageProfile.
 *
 * @stability experimental
 */
export interface IUsageProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UsageProfile resource.
     */
    readonly usageProfileRef: UsageProfileReference;
}
/**
 * A reference to a UsageProfile resource.
 *
 * @struct
 * @stability external
 */
export interface UsageProfileReference {
    /**
     * The Name of the UsageProfile resource.
     */
    readonly usageProfileName: string;
}
