import {
  ActionStatus,
  AnomalyDetectorStatus,
  DataProtectionStatus,
  DeliveryDestinationType,
  Distribution,
  EntityRejectionErrorType,
  EvaluationFrequency,
  EventSource,
  ExecutionStatus,
  ExportTaskStatusCode,
  FlattenedElement,
  ImportStatus,
  IndexSource,
  IndexType,
  InheritedProperty,
  IntegrationStatus,
  IntegrationType,
  ListAggregateLogGroupSummariesGroupBy,
  LogGroupClass,
  OCSFVersion,
  OpenSearchResourceStatusType,
  OrderBy,
  OutputFormat,
  PolicyScope,
  PolicyType,
  QueryLanguage,
  QueryStatus,
  S3TableIntegrationSourceStatus,
  ScheduledQueryDestinationType,
  ScheduledQueryState,
  Scope,
  StandardUnit,
  State,
  SuppressionState,
  SuppressionType,
  SuppressionUnit,
  Type,
} from "./enums";
import {
  InternalStreamingException,
  SessionStreamingException,
  SessionTimeoutException,
} from "./errors";
export interface AccountPolicy {
  policyName?: string | undefined;
  policyDocument?: string | undefined;
  lastUpdatedTime?: number | undefined;
  policyType?: PolicyType | undefined;
  scope?: Scope | undefined;
  selectionCriteria?: string | undefined;
  accountId?: string | undefined;
}
export interface AddKeyEntry {
  key: string | undefined;
  value: string | undefined;
  overwriteIfExists?: boolean | undefined;
}
export interface AddKeys {
  entries: AddKeyEntry[] | undefined;
}
export interface GroupingIdentifier {
  key?: string | undefined;
  value?: string | undefined;
}
export interface AggregateLogGroupSummary {
  logGroupCount?: number | undefined;
  groupingIdentifiers?: GroupingIdentifier[] | undefined;
}
export interface RecordField {
  name?: string | undefined;
  mandatory?: boolean | undefined;
}
export interface LogEvent {
  timestamp?: number | undefined;
  message?: string | undefined;
}
export interface PatternToken {
  dynamicTokenPosition?: number | undefined;
  isDynamic?: boolean | undefined;
  tokenString?: string | undefined;
  enumerations?: Record<string, number> | undefined;
  inferredTokenName?: string | undefined;
}
export interface Anomaly {
  anomalyId: string | undefined;
  patternId: string | undefined;
  anomalyDetectorArn: string | undefined;
  patternString: string | undefined;
  patternRegex?: string | undefined;
  priority?: string | undefined;
  firstSeen: number | undefined;
  lastSeen: number | undefined;
  description: string | undefined;
  active: boolean | undefined;
  state: State | undefined;
  histogram: Record<string, number> | undefined;
  logSamples: LogEvent[] | undefined;
  patternTokens: PatternToken[] | undefined;
  logGroupArnList: string[] | undefined;
  suppressed?: boolean | undefined;
  suppressedDate?: number | undefined;
  suppressedUntil?: number | undefined;
  isPatternLevelSuppression?: boolean | undefined;
}
export interface AnomalyDetector {
  anomalyDetectorArn?: string | undefined;
  detectorName?: string | undefined;
  logGroupArnList?: string[] | undefined;
  evaluationFrequency?: EvaluationFrequency | undefined;
  filterPattern?: string | undefined;
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;
  kmsKeyId?: string | undefined;
  creationTimeStamp?: number | undefined;
  lastModifiedTimeStamp?: number | undefined;
  anomalyVisibilityTime?: number | undefined;
}
export interface AssociateKmsKeyRequest {
  logGroupName?: string | undefined;
  kmsKeyId: string | undefined;
  resourceIdentifier?: string | undefined;
}
export interface DataSource {
  name: string | undefined;
  type?: string | undefined;
}
export interface AssociateSourceToS3TableIntegrationRequest {
  integrationArn: string | undefined;
  dataSource: DataSource | undefined;
}
export interface AssociateSourceToS3TableIntegrationResponse {
  identifier?: string | undefined;
}
export interface CancelExportTaskRequest {
  taskId: string | undefined;
}
export interface CancelImportTaskRequest {
  importId: string | undefined;
}
export interface ImportStatistics {
  bytesImported?: number | undefined;
}
export interface CancelImportTaskResponse {
  importId?: string | undefined;
  importStatistics?: ImportStatistics | undefined;
  importStatus?: ImportStatus | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface S3DeliveryConfiguration {
  suffixPath?: string | undefined;
  enableHiveCompatiblePath?: boolean | undefined;
}
export interface ConfigurationTemplateDeliveryConfigValues {
  recordFields?: string[] | undefined;
  fieldDelimiter?: string | undefined;
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}
export interface ConfigurationTemplate {
  service?: string | undefined;
  logType?: string | undefined;
  resourceType?: string | undefined;
  deliveryDestinationType?: DeliveryDestinationType | undefined;
  defaultDeliveryConfigValues?:
    | ConfigurationTemplateDeliveryConfigValues
    | undefined;
  allowedFields?: RecordField[] | undefined;
  allowedOutputFormats?: OutputFormat[] | undefined;
  allowedActionForAllowVendedLogsDeliveryForResource?: string | undefined;
  allowedFieldDelimiters?: string[] | undefined;
  allowedSuffixPathFields?: string[] | undefined;
}
export interface CopyValueEntry {
  source: string | undefined;
  target: string | undefined;
  overwriteIfExists?: boolean | undefined;
}
export interface CopyValue {
  entries: CopyValueEntry[] | undefined;
}
export interface CreateDeliveryRequest {
  deliverySourceName: string | undefined;
  deliveryDestinationArn: string | undefined;
  recordFields?: string[] | undefined;
  fieldDelimiter?: string | undefined;
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
  tags?: Record<string, string> | undefined;
}
export interface Delivery {
  id?: string | undefined;
  arn?: string | undefined;
  deliverySourceName?: string | undefined;
  deliveryDestinationArn?: string | undefined;
  deliveryDestinationType?: DeliveryDestinationType | undefined;
  recordFields?: string[] | undefined;
  fieldDelimiter?: string | undefined;
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
  tags?: Record<string, string> | undefined;
}
export interface CreateDeliveryResponse {
  delivery?: Delivery | undefined;
}
export interface CreateExportTaskRequest {
  taskName?: string | undefined;
  logGroupName: string | undefined;
  logStreamNamePrefix?: string | undefined;
  from: number | undefined;
  to: number | undefined;
  destination: string | undefined;
  destinationPrefix?: string | undefined;
}
export interface CreateExportTaskResponse {
  taskId?: string | undefined;
}
export interface ImportFilter {
  startEventTime?: number | undefined;
  endEventTime?: number | undefined;
}
export interface CreateImportTaskRequest {
  importSourceArn: string | undefined;
  importRoleArn: string | undefined;
  importFilter?: ImportFilter | undefined;
}
export interface CreateImportTaskResponse {
  importId?: string | undefined;
  importDestinationArn?: string | undefined;
  creationTime?: number | undefined;
}
export interface CreateLogAnomalyDetectorRequest {
  logGroupArnList: string[] | undefined;
  detectorName?: string | undefined;
  evaluationFrequency?: EvaluationFrequency | undefined;
  filterPattern?: string | undefined;
  kmsKeyId?: string | undefined;
  anomalyVisibilityTime?: number | undefined;
  tags?: Record<string, string> | undefined;
}
export interface CreateLogAnomalyDetectorResponse {
  anomalyDetectorArn?: string | undefined;
}
export interface CreateLogGroupRequest {
  logGroupName: string | undefined;
  kmsKeyId?: string | undefined;
  tags?: Record<string, string> | undefined;
  logGroupClass?: LogGroupClass | undefined;
  deletionProtectionEnabled?: boolean | undefined;
}
export interface CreateLogStreamRequest {
  logGroupName: string | undefined;
  logStreamName: string | undefined;
}
export interface S3Configuration {
  destinationIdentifier: string | undefined;
  roleArn: string | undefined;
}
export interface DestinationConfiguration {
  s3Configuration: S3Configuration | undefined;
}
export interface CreateScheduledQueryRequest {
  name: string | undefined;
  description?: string | undefined;
  queryLanguage: QueryLanguage | undefined;
  queryString: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn: string | undefined;
  state?: ScheduledQueryState | undefined;
  tags?: Record<string, string> | undefined;
}
export interface CreateScheduledQueryResponse {
  scheduledQueryArn?: string | undefined;
  state?: ScheduledQueryState | undefined;
}
export interface CSV {
  quoteCharacter?: string | undefined;
  delimiter?: string | undefined;
  columns?: string[] | undefined;
  source?: string | undefined;
}
export interface DataSourceFilter {
  name: string | undefined;
  type?: string | undefined;
}
export interface DateTimeConverter {
  source: string | undefined;
  target: string | undefined;
  targetFormat?: string | undefined;
  matchPatterns: string[] | undefined;
  sourceTimezone?: string | undefined;
  targetTimezone?: string | undefined;
  locale?: string | undefined;
}
export interface DeleteAccountPolicyRequest {
  policyName: string | undefined;
  policyType: PolicyType | undefined;
}
export interface DeleteDataProtectionPolicyRequest {
  logGroupIdentifier: string | undefined;
}
export interface DeleteDeliveryRequest {
  id: string | undefined;
}
export interface DeleteDeliveryDestinationRequest {
  name: string | undefined;
}
export interface DeleteDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string | undefined;
}
export interface DeleteDeliverySourceRequest {
  name: string | undefined;
}
export interface DeleteDestinationRequest {
  destinationName: string | undefined;
}
export interface DeleteIndexPolicyRequest {
  logGroupIdentifier: string | undefined;
}
export interface DeleteIndexPolicyResponse {}
export interface DeleteIntegrationRequest {
  integrationName: string | undefined;
  force?: boolean | undefined;
}
export interface DeleteIntegrationResponse {}
export interface DeleteKeys {
  withKeys: string[] | undefined;
}
export interface DeleteLogAnomalyDetectorRequest {
  anomalyDetectorArn: string | undefined;
}
export interface DeleteLogGroupRequest {
  logGroupName: string | undefined;
}
export interface DeleteLogStreamRequest {
  logGroupName: string | undefined;
  logStreamName: string | undefined;
}
export interface DeleteMetricFilterRequest {
  logGroupName: string | undefined;
  filterName: string | undefined;
}
export interface DeleteQueryDefinitionRequest {
  queryDefinitionId: string | undefined;
}
export interface DeleteQueryDefinitionResponse {
  success?: boolean | undefined;
}
export interface DeleteResourcePolicyRequest {
  policyName?: string | undefined;
  resourceArn?: string | undefined;
  expectedRevisionId?: string | undefined;
}
export interface DeleteRetentionPolicyRequest {
  logGroupName: string | undefined;
}
export interface DeleteScheduledQueryRequest {
  identifier: string | undefined;
}
export interface DeleteScheduledQueryResponse {}
export interface DeleteSubscriptionFilterRequest {
  logGroupName: string | undefined;
  filterName: string | undefined;
}
export interface DeleteTransformerRequest {
  logGroupIdentifier: string | undefined;
}
export interface DeliveryDestinationConfiguration {
  destinationResourceArn: string | undefined;
}
export interface DeliveryDestination {
  name?: string | undefined;
  arn?: string | undefined;
  deliveryDestinationType?: DeliveryDestinationType | undefined;
  outputFormat?: OutputFormat | undefined;
  deliveryDestinationConfiguration?:
    | DeliveryDestinationConfiguration
    | undefined;
  tags?: Record<string, string> | undefined;
}
export interface DeliverySource {
  name?: string | undefined;
  arn?: string | undefined;
  resourceArns?: string[] | undefined;
  service?: string | undefined;
  logType?: string | undefined;
  tags?: Record<string, string> | undefined;
}
export interface DescribeAccountPoliciesRequest {
  policyType: PolicyType | undefined;
  policyName?: string | undefined;
  accountIdentifiers?: string[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeAccountPoliciesResponse {
  accountPolicies?: AccountPolicy[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeConfigurationTemplatesRequest {
  service?: string | undefined;
  logTypes?: string[] | undefined;
  resourceTypes?: string[] | undefined;
  deliveryDestinationTypes?: DeliveryDestinationType[] | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface DescribeConfigurationTemplatesResponse {
  configurationTemplates?: ConfigurationTemplate[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeDeliveriesRequest {
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface DescribeDeliveriesResponse {
  deliveries?: Delivery[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeDeliveryDestinationsRequest {
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface DescribeDeliveryDestinationsResponse {
  deliveryDestinations?: DeliveryDestination[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeDeliverySourcesRequest {
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface DescribeDeliverySourcesResponse {
  deliverySources?: DeliverySource[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeDestinationsRequest {
  DestinationNamePrefix?: string | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface Destination {
  destinationName?: string | undefined;
  targetArn?: string | undefined;
  roleArn?: string | undefined;
  accessPolicy?: string | undefined;
  arn?: string | undefined;
  creationTime?: number | undefined;
}
export interface DescribeDestinationsResponse {
  destinations?: Destination[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeExportTasksRequest {
  taskId?: string | undefined;
  statusCode?: ExportTaskStatusCode | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface ExportTaskExecutionInfo {
  creationTime?: number | undefined;
  completionTime?: number | undefined;
}
export interface ExportTaskStatus {
  code?: ExportTaskStatusCode | undefined;
  message?: string | undefined;
}
export interface ExportTask {
  taskId?: string | undefined;
  taskName?: string | undefined;
  logGroupName?: string | undefined;
  from?: number | undefined;
  to?: number | undefined;
  destination?: string | undefined;
  destinationPrefix?: string | undefined;
  status?: ExportTaskStatus | undefined;
  executionInfo?: ExportTaskExecutionInfo | undefined;
}
export interface DescribeExportTasksResponse {
  exportTasks?: ExportTask[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeFieldIndexesRequest {
  logGroupIdentifiers: string[] | undefined;
  nextToken?: string | undefined;
}
export interface FieldIndex {
  logGroupIdentifier?: string | undefined;
  fieldIndexName?: string | undefined;
  lastScanTime?: number | undefined;
  firstEventTime?: number | undefined;
  lastEventTime?: number | undefined;
  type?: IndexType | undefined;
}
export interface DescribeFieldIndexesResponse {
  fieldIndexes?: FieldIndex[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeImportTaskBatchesRequest {
  importId: string | undefined;
  batchImportStatus?: ImportStatus[] | undefined;
  limit?: number | undefined;
  nextToken?: string | undefined;
}
export interface ImportBatch {
  batchId: string | undefined;
  status: ImportStatus | undefined;
  errorMessage?: string | undefined;
}
export interface DescribeImportTaskBatchesResponse {
  importSourceArn?: string | undefined;
  importId?: string | undefined;
  importBatches?: ImportBatch[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeImportTasksRequest {
  importId?: string | undefined;
  importStatus?: ImportStatus | undefined;
  importSourceArn?: string | undefined;
  limit?: number | undefined;
  nextToken?: string | undefined;
}
export interface Import {
  importId?: string | undefined;
  importSourceArn?: string | undefined;
  importStatus?: ImportStatus | undefined;
  importDestinationArn?: string | undefined;
  importStatistics?: ImportStatistics | undefined;
  importFilter?: ImportFilter | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
  errorMessage?: string | undefined;
}
export interface DescribeImportTasksResponse {
  imports?: Import[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeIndexPoliciesRequest {
  logGroupIdentifiers: string[] | undefined;
  nextToken?: string | undefined;
}
export interface IndexPolicy {
  logGroupIdentifier?: string | undefined;
  lastUpdateTime?: number | undefined;
  policyDocument?: string | undefined;
  policyName?: string | undefined;
  source?: IndexSource | undefined;
}
export interface DescribeIndexPoliciesResponse {
  indexPolicies?: IndexPolicy[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeLogGroupsRequest {
  accountIdentifiers?: string[] | undefined;
  logGroupNamePrefix?: string | undefined;
  logGroupNamePattern?: string | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
  includeLinkedAccounts?: boolean | undefined;
  logGroupClass?: LogGroupClass | undefined;
  logGroupIdentifiers?: string[] | undefined;
}
export interface LogGroup {
  logGroupName?: string | undefined;
  creationTime?: number | undefined;
  retentionInDays?: number | undefined;
  metricFilterCount?: number | undefined;
  arn?: string | undefined;
  storedBytes?: number | undefined;
  kmsKeyId?: string | undefined;
  dataProtectionStatus?: DataProtectionStatus | undefined;
  inheritedProperties?: InheritedProperty[] | undefined;
  logGroupClass?: LogGroupClass | undefined;
  logGroupArn?: string | undefined;
  deletionProtectionEnabled?: boolean | undefined;
}
export interface DescribeLogGroupsResponse {
  logGroups?: LogGroup[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeLogStreamsRequest {
  logGroupName?: string | undefined;
  logGroupIdentifier?: string | undefined;
  logStreamNamePrefix?: string | undefined;
  orderBy?: OrderBy | undefined;
  descending?: boolean | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface LogStream {
  logStreamName?: string | undefined;
  creationTime?: number | undefined;
  firstEventTimestamp?: number | undefined;
  lastEventTimestamp?: number | undefined;
  lastIngestionTime?: number | undefined;
  uploadSequenceToken?: string | undefined;
  arn?: string | undefined;
  storedBytes?: number | undefined;
}
export interface DescribeLogStreamsResponse {
  logStreams?: LogStream[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeMetricFiltersRequest {
  logGroupName?: string | undefined;
  filterNamePrefix?: string | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
  metricName?: string | undefined;
  metricNamespace?: string | undefined;
}
export interface MetricTransformation {
  metricName: string | undefined;
  metricNamespace: string | undefined;
  metricValue: string | undefined;
  defaultValue?: number | undefined;
  dimensions?: Record<string, string> | undefined;
  unit?: StandardUnit | undefined;
}
export interface MetricFilter {
  filterName?: string | undefined;
  filterPattern?: string | undefined;
  metricTransformations?: MetricTransformation[] | undefined;
  creationTime?: number | undefined;
  logGroupName?: string | undefined;
  applyOnTransformedLogs?: boolean | undefined;
  fieldSelectionCriteria?: string | undefined;
  emitSystemFieldDimensions?: string[] | undefined;
}
export interface DescribeMetricFiltersResponse {
  metricFilters?: MetricFilter[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeQueriesRequest {
  logGroupName?: string | undefined;
  status?: QueryStatus | undefined;
  maxResults?: number | undefined;
  nextToken?: string | undefined;
  queryLanguage?: QueryLanguage | undefined;
}
export interface QueryInfo {
  queryLanguage?: QueryLanguage | undefined;
  queryId?: string | undefined;
  queryString?: string | undefined;
  status?: QueryStatus | undefined;
  createTime?: number | undefined;
  logGroupName?: string | undefined;
}
export interface DescribeQueriesResponse {
  queries?: QueryInfo[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeQueryDefinitionsRequest {
  queryLanguage?: QueryLanguage | undefined;
  queryDefinitionNamePrefix?: string | undefined;
  maxResults?: number | undefined;
  nextToken?: string | undefined;
}
export interface QueryDefinition {
  queryLanguage?: QueryLanguage | undefined;
  queryDefinitionId?: string | undefined;
  name?: string | undefined;
  queryString?: string | undefined;
  lastModified?: number | undefined;
  logGroupNames?: string[] | undefined;
}
export interface DescribeQueryDefinitionsResponse {
  queryDefinitions?: QueryDefinition[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeResourcePoliciesRequest {
  nextToken?: string | undefined;
  limit?: number | undefined;
  resourceArn?: string | undefined;
  policyScope?: PolicyScope | undefined;
}
export interface ResourcePolicy {
  policyName?: string | undefined;
  policyDocument?: string | undefined;
  lastUpdatedTime?: number | undefined;
  policyScope?: PolicyScope | undefined;
  resourceArn?: string | undefined;
  revisionId?: string | undefined;
}
export interface DescribeResourcePoliciesResponse {
  resourcePolicies?: ResourcePolicy[] | undefined;
  nextToken?: string | undefined;
}
export interface DescribeSubscriptionFiltersRequest {
  logGroupName: string | undefined;
  filterNamePrefix?: string | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface SubscriptionFilter {
  filterName?: string | undefined;
  logGroupName?: string | undefined;
  filterPattern?: string | undefined;
  destinationArn?: string | undefined;
  roleArn?: string | undefined;
  distribution?: Distribution | undefined;
  applyOnTransformedLogs?: boolean | undefined;
  creationTime?: number | undefined;
  fieldSelectionCriteria?: string | undefined;
  emitSystemFields?: string[] | undefined;
}
export interface DescribeSubscriptionFiltersResponse {
  subscriptionFilters?: SubscriptionFilter[] | undefined;
  nextToken?: string | undefined;
}
export interface DisassociateKmsKeyRequest {
  logGroupName?: string | undefined;
  resourceIdentifier?: string | undefined;
}
export interface DisassociateSourceFromS3TableIntegrationRequest {
  identifier: string | undefined;
}
export interface DisassociateSourceFromS3TableIntegrationResponse {
  identifier?: string | undefined;
}
export interface Entity {
  keyAttributes?: Record<string, string> | undefined;
  attributes?: Record<string, string> | undefined;
}
export interface FieldsData {
  data?: Uint8Array | undefined;
}
export interface FilteredLogEvent {
  logStreamName?: string | undefined;
  timestamp?: number | undefined;
  message?: string | undefined;
  ingestionTime?: number | undefined;
  eventId?: string | undefined;
}
export interface FilterLogEventsRequest {
  logGroupName?: string | undefined;
  logGroupIdentifier?: string | undefined;
  logStreamNames?: string[] | undefined;
  logStreamNamePrefix?: string | undefined;
  startTime?: number | undefined;
  endTime?: number | undefined;
  filterPattern?: string | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
  interleaved?: boolean | undefined;
  unmask?: boolean | undefined;
}
export interface SearchedLogStream {
  logStreamName?: string | undefined;
  searchedCompletely?: boolean | undefined;
}
export interface FilterLogEventsResponse {
  events?: FilteredLogEvent[] | undefined;
  searchedLogStreams?: SearchedLogStream[] | undefined;
  nextToken?: string | undefined;
}
export interface GetDataProtectionPolicyRequest {
  logGroupIdentifier: string | undefined;
}
export interface GetDataProtectionPolicyResponse {
  logGroupIdentifier?: string | undefined;
  policyDocument?: string | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface GetDeliveryRequest {
  id: string | undefined;
}
export interface GetDeliveryResponse {
  delivery?: Delivery | undefined;
}
export interface GetDeliveryDestinationRequest {
  name: string | undefined;
}
export interface GetDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination | undefined;
}
export interface GetDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string | undefined;
}
export interface Policy {
  deliveryDestinationPolicy?: string | undefined;
}
export interface GetDeliveryDestinationPolicyResponse {
  policy?: Policy | undefined;
}
export interface GetDeliverySourceRequest {
  name: string | undefined;
}
export interface GetDeliverySourceResponse {
  deliverySource?: DeliverySource | undefined;
}
export interface GetIntegrationRequest {
  integrationName: string | undefined;
}
export interface OpenSearchResourceStatus {
  status?: OpenSearchResourceStatusType | undefined;
  statusMessage?: string | undefined;
}
export interface OpenSearchDataAccessPolicy {
  policyName?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchApplication {
  applicationEndpoint?: string | undefined;
  applicationArn?: string | undefined;
  applicationId?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchCollection {
  collectionEndpoint?: string | undefined;
  collectionArn?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchDataSource {
  dataSourceName?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchEncryptionPolicy {
  policyName?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchLifecyclePolicy {
  policyName?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchNetworkPolicy {
  policyName?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchWorkspace {
  workspaceId?: string | undefined;
  status?: OpenSearchResourceStatus | undefined;
}
export interface OpenSearchIntegrationDetails {
  dataSource?: OpenSearchDataSource | undefined;
  application?: OpenSearchApplication | undefined;
  collection?: OpenSearchCollection | undefined;
  workspace?: OpenSearchWorkspace | undefined;
  encryptionPolicy?: OpenSearchEncryptionPolicy | undefined;
  networkPolicy?: OpenSearchNetworkPolicy | undefined;
  accessPolicy?: OpenSearchDataAccessPolicy | undefined;
  lifecyclePolicy?: OpenSearchLifecyclePolicy | undefined;
}
export type IntegrationDetails =
  | IntegrationDetails.OpenSearchIntegrationDetailsMember
  | IntegrationDetails.$UnknownMember;
export declare namespace IntegrationDetails {
  interface OpenSearchIntegrationDetailsMember {
    openSearchIntegrationDetails: OpenSearchIntegrationDetails;
    $unknown?: never;
  }
  interface $UnknownMember {
    openSearchIntegrationDetails?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    openSearchIntegrationDetails: (value: OpenSearchIntegrationDetails) => T;
    _: (name: string, value: any) => T;
  }
}
export interface GetIntegrationResponse {
  integrationName?: string | undefined;
  integrationType?: IntegrationType | undefined;
  integrationStatus?: IntegrationStatus | undefined;
  integrationDetails?: IntegrationDetails | undefined;
}
export interface GetLogAnomalyDetectorRequest {
  anomalyDetectorArn: string | undefined;
}
export interface GetLogAnomalyDetectorResponse {
  detectorName?: string | undefined;
  logGroupArnList?: string[] | undefined;
  evaluationFrequency?: EvaluationFrequency | undefined;
  filterPattern?: string | undefined;
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;
  kmsKeyId?: string | undefined;
  creationTimeStamp?: number | undefined;
  lastModifiedTimeStamp?: number | undefined;
  anomalyVisibilityTime?: number | undefined;
}
export interface GetLogEventsRequest {
  logGroupName?: string | undefined;
  logGroupIdentifier?: string | undefined;
  logStreamName: string | undefined;
  startTime?: number | undefined;
  endTime?: number | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
  startFromHead?: boolean | undefined;
  unmask?: boolean | undefined;
}
export interface OutputLogEvent {
  timestamp?: number | undefined;
  message?: string | undefined;
  ingestionTime?: number | undefined;
}
export interface GetLogEventsResponse {
  events?: OutputLogEvent[] | undefined;
  nextForwardToken?: string | undefined;
  nextBackwardToken?: string | undefined;
}
export interface GetLogFieldsRequest {
  dataSourceName: string | undefined;
  dataSourceType: string | undefined;
}
export interface GetLogGroupFieldsRequest {
  logGroupName?: string | undefined;
  time?: number | undefined;
  logGroupIdentifier?: string | undefined;
}
export interface LogGroupField {
  name?: string | undefined;
  percent?: number | undefined;
}
export interface GetLogGroupFieldsResponse {
  logGroupFields?: LogGroupField[] | undefined;
}
export interface GetLogObjectRequest {
  unmask?: boolean | undefined;
  logObjectPointer: string | undefined;
}
export type GetLogObjectResponseStream =
  | GetLogObjectResponseStream.InternalStreamingExceptionMember
  | GetLogObjectResponseStream.FieldsMember
  | GetLogObjectResponseStream.$UnknownMember;
export declare namespace GetLogObjectResponseStream {
  interface FieldsMember {
    fields: FieldsData;
    InternalStreamingException?: never;
    $unknown?: never;
  }
  interface InternalStreamingExceptionMember {
    fields?: never;
    InternalStreamingException: InternalStreamingException;
    $unknown?: never;
  }
  interface $UnknownMember {
    fields?: never;
    InternalStreamingException?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    fields: (value: FieldsData) => T;
    InternalStreamingException: (value: InternalStreamingException) => T;
    _: (name: string, value: any) => T;
  }
}
export interface GetLogObjectResponse {
  fieldStream?: AsyncIterable<GetLogObjectResponseStream> | undefined;
}
export interface GetLogRecordRequest {
  logRecordPointer: string | undefined;
  unmask?: boolean | undefined;
}
export interface GetLogRecordResponse {
  logRecord?: Record<string, string> | undefined;
}
export interface GetQueryResultsRequest {
  queryId: string | undefined;
}
export interface ResultField {
  field?: string | undefined;
  value?: string | undefined;
}
export interface QueryStatistics {
  recordsMatched?: number | undefined;
  recordsScanned?: number | undefined;
  estimatedRecordsSkipped?: number | undefined;
  bytesScanned?: number | undefined;
  estimatedBytesSkipped?: number | undefined;
  logGroupsScanned?: number | undefined;
}
export interface GetQueryResultsResponse {
  queryLanguage?: QueryLanguage | undefined;
  results?: ResultField[][] | undefined;
  statistics?: QueryStatistics | undefined;
  status?: QueryStatus | undefined;
  encryptionKey?: string | undefined;
}
export interface GetScheduledQueryRequest {
  identifier: string | undefined;
}
export interface GetScheduledQueryResponse {
  scheduledQueryArn?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  queryLanguage?: QueryLanguage | undefined;
  queryString?: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression?: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  state?: ScheduledQueryState | undefined;
  lastTriggeredTime?: number | undefined;
  lastExecutionStatus?: ExecutionStatus | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn?: string | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface GetScheduledQueryHistoryRequest {
  identifier: string | undefined;
  startTime: number | undefined;
  endTime: number | undefined;
  executionStatuses?: ExecutionStatus[] | undefined;
  maxResults?: number | undefined;
  nextToken?: string | undefined;
}
export interface ScheduledQueryDestination {
  destinationType?: ScheduledQueryDestinationType | undefined;
  destinationIdentifier?: string | undefined;
  status?: ActionStatus | undefined;
  processedIdentifier?: string | undefined;
  errorMessage?: string | undefined;
}
export interface TriggerHistoryRecord {
  queryId?: string | undefined;
  executionStatus?: ExecutionStatus | undefined;
  triggeredTimestamp?: number | undefined;
  errorMessage?: string | undefined;
  destinations?: ScheduledQueryDestination[] | undefined;
}
export interface GetScheduledQueryHistoryResponse {
  name?: string | undefined;
  scheduledQueryArn?: string | undefined;
  triggerHistory?: TriggerHistoryRecord[] | undefined;
  nextToken?: string | undefined;
}
export interface GetTransformerRequest {
  logGroupIdentifier: string | undefined;
}
export interface Grok {
  source?: string | undefined;
  match: string | undefined;
}
export interface ListToMap {
  source: string | undefined;
  key: string | undefined;
  valueKey?: string | undefined;
  target?: string | undefined;
  flatten?: boolean | undefined;
  flattenedElement?: FlattenedElement | undefined;
}
export interface LowerCaseString {
  withKeys: string[] | undefined;
}
export interface MoveKeyEntry {
  source: string | undefined;
  target: string | undefined;
  overwriteIfExists?: boolean | undefined;
}
export interface MoveKeys {
  entries: MoveKeyEntry[] | undefined;
}
export interface ParseCloudfront {
  source?: string | undefined;
}
export interface ParseJSON {
  source?: string | undefined;
  destination?: string | undefined;
}
export interface ParseKeyValue {
  source?: string | undefined;
  destination?: string | undefined;
  fieldDelimiter?: string | undefined;
  keyValueDelimiter?: string | undefined;
  keyPrefix?: string | undefined;
  nonMatchValue?: string | undefined;
  overwriteIfExists?: boolean | undefined;
}
export interface ParsePostgres {
  source?: string | undefined;
}
export interface ParseRoute53 {
  source?: string | undefined;
}
export interface ParseToOCSF {
  source?: string | undefined;
  eventSource: EventSource | undefined;
  ocsfVersion: OCSFVersion | undefined;
  mappingVersion?: string | undefined;
}
export interface ParseVPC {
  source?: string | undefined;
}
export interface ParseWAF {
  source?: string | undefined;
}
export interface RenameKeyEntry {
  key: string | undefined;
  renameTo: string | undefined;
  overwriteIfExists?: boolean | undefined;
}
export interface RenameKeys {
  entries: RenameKeyEntry[] | undefined;
}
export interface SplitStringEntry {
  source: string | undefined;
  delimiter: string | undefined;
}
export interface SplitString {
  entries: SplitStringEntry[] | undefined;
}
export interface SubstituteStringEntry {
  source: string | undefined;
  from: string | undefined;
  to: string | undefined;
}
export interface SubstituteString {
  entries: SubstituteStringEntry[] | undefined;
}
export interface TrimString {
  withKeys: string[] | undefined;
}
export interface TypeConverterEntry {
  key: string | undefined;
  type: Type | undefined;
}
export interface TypeConverter {
  entries: TypeConverterEntry[] | undefined;
}
export interface UpperCaseString {
  withKeys: string[] | undefined;
}
export interface Processor {
  addKeys?: AddKeys | undefined;
  copyValue?: CopyValue | undefined;
  csv?: CSV | undefined;
  dateTimeConverter?: DateTimeConverter | undefined;
  deleteKeys?: DeleteKeys | undefined;
  grok?: Grok | undefined;
  listToMap?: ListToMap | undefined;
  lowerCaseString?: LowerCaseString | undefined;
  moveKeys?: MoveKeys | undefined;
  parseCloudfront?: ParseCloudfront | undefined;
  parseJSON?: ParseJSON | undefined;
  parseKeyValue?: ParseKeyValue | undefined;
  parseRoute53?: ParseRoute53 | undefined;
  parseToOCSF?: ParseToOCSF | undefined;
  parsePostgres?: ParsePostgres | undefined;
  parseVPC?: ParseVPC | undefined;
  parseWAF?: ParseWAF | undefined;
  renameKeys?: RenameKeys | undefined;
  splitString?: SplitString | undefined;
  substituteString?: SubstituteString | undefined;
  trimString?: TrimString | undefined;
  typeConverter?: TypeConverter | undefined;
  upperCaseString?: UpperCaseString | undefined;
}
export interface GetTransformerResponse {
  logGroupIdentifier?: string | undefined;
  creationTime?: number | undefined;
  lastModifiedTime?: number | undefined;
  transformerConfig?: Processor[] | undefined;
}
export interface InputLogEvent {
  timestamp: number | undefined;
  message: string | undefined;
}
export interface IntegrationSummary {
  integrationName?: string | undefined;
  integrationType?: IntegrationType | undefined;
  integrationStatus?: IntegrationStatus | undefined;
}
export interface ListAggregateLogGroupSummariesRequest {
  accountIdentifiers?: string[] | undefined;
  includeLinkedAccounts?: boolean | undefined;
  logGroupClass?: LogGroupClass | undefined;
  logGroupNamePattern?: string | undefined;
  dataSources?: DataSourceFilter[] | undefined;
  groupBy: ListAggregateLogGroupSummariesGroupBy | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
}
export interface ListAggregateLogGroupSummariesResponse {
  aggregateLogGroupSummaries?: AggregateLogGroupSummary[] | undefined;
  nextToken?: string | undefined;
}
export interface ListAnomaliesRequest {
  anomalyDetectorArn?: string | undefined;
  suppressionState?: SuppressionState | undefined;
  limit?: number | undefined;
  nextToken?: string | undefined;
}
export interface ListAnomaliesResponse {
  anomalies?: Anomaly[] | undefined;
  nextToken?: string | undefined;
}
export interface ListIntegrationsRequest {
  integrationNamePrefix?: string | undefined;
  integrationType?: IntegrationType | undefined;
  integrationStatus?: IntegrationStatus | undefined;
}
export interface ListIntegrationsResponse {
  integrationSummaries?: IntegrationSummary[] | undefined;
}
export interface ListLogAnomalyDetectorsRequest {
  filterLogGroupArn?: string | undefined;
  limit?: number | undefined;
  nextToken?: string | undefined;
}
export interface ListLogAnomalyDetectorsResponse {
  anomalyDetectors?: AnomalyDetector[] | undefined;
  nextToken?: string | undefined;
}
export interface ListLogGroupsRequest {
  logGroupNamePattern?: string | undefined;
  logGroupClass?: LogGroupClass | undefined;
  includeLinkedAccounts?: boolean | undefined;
  accountIdentifiers?: string[] | undefined;
  nextToken?: string | undefined;
  limit?: number | undefined;
  dataSources?: DataSourceFilter[] | undefined;
  fieldIndexNames?: string[] | undefined;
}
export interface LogGroupSummary {
  logGroupName?: string | undefined;
  logGroupArn?: string | undefined;
  logGroupClass?: LogGroupClass | undefined;
}
export interface ListLogGroupsResponse {
  logGroups?: LogGroupSummary[] | undefined;
  nextToken?: string | undefined;
}
export interface ListLogGroupsForQueryRequest {
  queryId: string | undefined;
  nextToken?: string | undefined;
  maxResults?: number | undefined;
}
export interface ListLogGroupsForQueryResponse {
  logGroupIdentifiers?: string[] | undefined;
  nextToken?: string | undefined;
}
export interface ListScheduledQueriesRequest {
  maxResults?: number | undefined;
  nextToken?: string | undefined;
  state?: ScheduledQueryState | undefined;
}
export interface ScheduledQuerySummary {
  scheduledQueryArn?: string | undefined;
  name?: string | undefined;
  state?: ScheduledQueryState | undefined;
  lastTriggeredTime?: number | undefined;
  lastExecutionStatus?: ExecutionStatus | undefined;
  scheduleExpression?: string | undefined;
  timezone?: string | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface ListScheduledQueriesResponse {
  nextToken?: string | undefined;
  scheduledQueries?: ScheduledQuerySummary[] | undefined;
}
export interface ListSourcesForS3TableIntegrationRequest {
  integrationArn: string | undefined;
  maxResults?: number | undefined;
  nextToken?: string | undefined;
}
export interface S3TableIntegrationSource {
  identifier?: string | undefined;
  dataSource?: DataSource | undefined;
  status?: S3TableIntegrationSourceStatus | undefined;
  statusReason?: string | undefined;
  createdTimeStamp?: number | undefined;
}
export interface ListSourcesForS3TableIntegrationResponse {
  sources?: S3TableIntegrationSource[] | undefined;
  nextToken?: string | undefined;
}
export interface ListTagsForResourceRequest {
  resourceArn: string | undefined;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string> | undefined;
}
export interface ListTagsLogGroupRequest {
  logGroupName: string | undefined;
}
export interface ListTagsLogGroupResponse {
  tags?: Record<string, string> | undefined;
}
export interface LiveTailSessionLogEvent {
  logStreamName?: string | undefined;
  logGroupIdentifier?: string | undefined;
  message?: string | undefined;
  timestamp?: number | undefined;
  ingestionTime?: number | undefined;
}
export interface LiveTailSessionMetadata {
  sampled?: boolean | undefined;
}
export interface LiveTailSessionStart {
  requestId?: string | undefined;
  sessionId?: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  logStreamNames?: string[] | undefined;
  logStreamNamePrefixes?: string[] | undefined;
  logEventFilterPattern?: string | undefined;
}
export interface LiveTailSessionUpdate {
  sessionMetadata?: LiveTailSessionMetadata | undefined;
  sessionResults?: LiveTailSessionLogEvent[] | undefined;
}
export interface PutAccountPolicyRequest {
  policyName: string | undefined;
  policyDocument: string | undefined;
  policyType: PolicyType | undefined;
  scope?: Scope | undefined;
  selectionCriteria?: string | undefined;
}
export interface PutAccountPolicyResponse {
  accountPolicy?: AccountPolicy | undefined;
}
export interface PutDataProtectionPolicyRequest {
  logGroupIdentifier: string | undefined;
  policyDocument: string | undefined;
}
export interface PutDataProtectionPolicyResponse {
  logGroupIdentifier?: string | undefined;
  policyDocument?: string | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface PutDeliveryDestinationRequest {
  name: string | undefined;
  outputFormat?: OutputFormat | undefined;
  deliveryDestinationConfiguration?:
    | DeliveryDestinationConfiguration
    | undefined;
  deliveryDestinationType?: DeliveryDestinationType | undefined;
  tags?: Record<string, string> | undefined;
}
export interface PutDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination | undefined;
}
export interface PutDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string | undefined;
  deliveryDestinationPolicy: string | undefined;
}
export interface PutDeliveryDestinationPolicyResponse {
  policy?: Policy | undefined;
}
export interface PutDeliverySourceRequest {
  name: string | undefined;
  resourceArn: string | undefined;
  logType: string | undefined;
  tags?: Record<string, string> | undefined;
}
export interface PutDeliverySourceResponse {
  deliverySource?: DeliverySource | undefined;
}
export interface PutDestinationRequest {
  destinationName: string | undefined;
  targetArn: string | undefined;
  roleArn: string | undefined;
  tags?: Record<string, string> | undefined;
}
export interface PutDestinationResponse {
  destination?: Destination | undefined;
}
export interface PutDestinationPolicyRequest {
  destinationName: string | undefined;
  accessPolicy: string | undefined;
  forceUpdate?: boolean | undefined;
}
export interface PutIndexPolicyRequest {
  logGroupIdentifier: string | undefined;
  policyDocument: string | undefined;
}
export interface PutIndexPolicyResponse {
  indexPolicy?: IndexPolicy | undefined;
}
export interface OpenSearchResourceConfig {
  kmsKeyArn?: string | undefined;
  dataSourceRoleArn: string | undefined;
  dashboardViewerPrincipals: string[] | undefined;
  applicationArn?: string | undefined;
  retentionDays: number | undefined;
}
export type ResourceConfig =
  | ResourceConfig.OpenSearchResourceConfigMember
  | ResourceConfig.$UnknownMember;
export declare namespace ResourceConfig {
  interface OpenSearchResourceConfigMember {
    openSearchResourceConfig: OpenSearchResourceConfig;
    $unknown?: never;
  }
  interface $UnknownMember {
    openSearchResourceConfig?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    openSearchResourceConfig: (value: OpenSearchResourceConfig) => T;
    _: (name: string, value: any) => T;
  }
}
export interface PutIntegrationRequest {
  integrationName: string | undefined;
  resourceConfig: ResourceConfig | undefined;
  integrationType: IntegrationType | undefined;
}
export interface PutIntegrationResponse {
  integrationName?: string | undefined;
  integrationStatus?: IntegrationStatus | undefined;
}
export interface PutLogEventsRequest {
  logGroupName: string | undefined;
  logStreamName: string | undefined;
  logEvents: InputLogEvent[] | undefined;
  sequenceToken?: string | undefined;
  entity?: Entity | undefined;
}
export interface RejectedEntityInfo {
  errorType: EntityRejectionErrorType | undefined;
}
export interface RejectedLogEventsInfo {
  tooNewLogEventStartIndex?: number | undefined;
  tooOldLogEventEndIndex?: number | undefined;
  expiredLogEventEndIndex?: number | undefined;
}
export interface PutLogEventsResponse {
  nextSequenceToken?: string | undefined;
  rejectedLogEventsInfo?: RejectedLogEventsInfo | undefined;
  rejectedEntityInfo?: RejectedEntityInfo | undefined;
}
export interface PutLogGroupDeletionProtectionRequest {
  logGroupIdentifier: string | undefined;
  deletionProtectionEnabled: boolean | undefined;
}
export interface PutMetricFilterRequest {
  logGroupName: string | undefined;
  filterName: string | undefined;
  filterPattern: string | undefined;
  metricTransformations: MetricTransformation[] | undefined;
  applyOnTransformedLogs?: boolean | undefined;
  fieldSelectionCriteria?: string | undefined;
  emitSystemFieldDimensions?: string[] | undefined;
}
export interface PutQueryDefinitionRequest {
  queryLanguage?: QueryLanguage | undefined;
  name: string | undefined;
  queryDefinitionId?: string | undefined;
  logGroupNames?: string[] | undefined;
  queryString: string | undefined;
  clientToken?: string | undefined;
}
export interface PutQueryDefinitionResponse {
  queryDefinitionId?: string | undefined;
}
export interface PutResourcePolicyRequest {
  policyName?: string | undefined;
  policyDocument?: string | undefined;
  resourceArn?: string | undefined;
  expectedRevisionId?: string | undefined;
}
export interface PutResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy | undefined;
  revisionId?: string | undefined;
}
export interface PutRetentionPolicyRequest {
  logGroupName: string | undefined;
  retentionInDays: number | undefined;
}
export interface PutSubscriptionFilterRequest {
  logGroupName: string | undefined;
  filterName: string | undefined;
  filterPattern: string | undefined;
  destinationArn: string | undefined;
  roleArn?: string | undefined;
  distribution?: Distribution | undefined;
  applyOnTransformedLogs?: boolean | undefined;
  fieldSelectionCriteria?: string | undefined;
  emitSystemFields?: string[] | undefined;
}
export interface PutTransformerRequest {
  logGroupIdentifier: string | undefined;
  transformerConfig: Processor[] | undefined;
}
export interface StartLiveTailRequest {
  logGroupIdentifiers: string[] | undefined;
  logStreamNames?: string[] | undefined;
  logStreamNamePrefixes?: string[] | undefined;
  logEventFilterPattern?: string | undefined;
}
export type StartLiveTailResponseStream =
  | StartLiveTailResponseStream.SessionStreamingExceptionMember
  | StartLiveTailResponseStream.SessionTimeoutExceptionMember
  | StartLiveTailResponseStream.SessionStartMember
  | StartLiveTailResponseStream.SessionUpdateMember
  | StartLiveTailResponseStream.$UnknownMember;
export declare namespace StartLiveTailResponseStream {
  interface SessionStartMember {
    sessionStart: LiveTailSessionStart;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }
  interface SessionUpdateMember {
    sessionStart?: never;
    sessionUpdate: LiveTailSessionUpdate;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }
  interface SessionTimeoutExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException: SessionTimeoutException;
    SessionStreamingException?: never;
    $unknown?: never;
  }
  interface SessionStreamingExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException: SessionStreamingException;
    $unknown?: never;
  }
  interface $UnknownMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    sessionStart: (value: LiveTailSessionStart) => T;
    sessionUpdate: (value: LiveTailSessionUpdate) => T;
    SessionTimeoutException: (value: SessionTimeoutException) => T;
    SessionStreamingException: (value: SessionStreamingException) => T;
    _: (name: string, value: any) => T;
  }
}
export interface StartLiveTailResponse {
  responseStream?: AsyncIterable<StartLiveTailResponseStream> | undefined;
}
export interface QueryCompileErrorLocation {
  startCharOffset?: number | undefined;
  endCharOffset?: number | undefined;
}
export interface QueryCompileError {
  location?: QueryCompileErrorLocation | undefined;
  message?: string | undefined;
}
export interface StartQueryRequest {
  queryLanguage?: QueryLanguage | undefined;
  logGroupName?: string | undefined;
  logGroupNames?: string[] | undefined;
  logGroupIdentifiers?: string[] | undefined;
  startTime: number | undefined;
  endTime: number | undefined;
  queryString: string | undefined;
  limit?: number | undefined;
}
export interface StartQueryResponse {
  queryId?: string | undefined;
}
export interface StopQueryRequest {
  queryId: string | undefined;
}
export interface StopQueryResponse {
  success?: boolean | undefined;
}
export interface TagLogGroupRequest {
  logGroupName: string | undefined;
  tags: Record<string, string> | undefined;
}
export interface TagResourceRequest {
  resourceArn: string | undefined;
  tags: Record<string, string> | undefined;
}
export interface TestMetricFilterRequest {
  filterPattern: string | undefined;
  logEventMessages: string[] | undefined;
}
export interface MetricFilterMatchRecord {
  eventNumber?: number | undefined;
  eventMessage?: string | undefined;
  extractedValues?: Record<string, string> | undefined;
}
export interface TestMetricFilterResponse {
  matches?: MetricFilterMatchRecord[] | undefined;
}
export interface TestTransformerRequest {
  transformerConfig: Processor[] | undefined;
  logEventMessages: string[] | undefined;
}
export interface TransformedLogRecord {
  eventNumber?: number | undefined;
  eventMessage?: string | undefined;
  transformedEventMessage?: string | undefined;
}
export interface TestTransformerResponse {
  transformedLogs?: TransformedLogRecord[] | undefined;
}
export interface UntagLogGroupRequest {
  logGroupName: string | undefined;
  tags: string[] | undefined;
}
export interface UntagResourceRequest {
  resourceArn: string | undefined;
  tagKeys: string[] | undefined;
}
export interface SuppressionPeriod {
  value?: number | undefined;
  suppressionUnit?: SuppressionUnit | undefined;
}
export interface UpdateAnomalyRequest {
  anomalyId?: string | undefined;
  patternId?: string | undefined;
  anomalyDetectorArn: string | undefined;
  suppressionType?: SuppressionType | undefined;
  suppressionPeriod?: SuppressionPeriod | undefined;
  baseline?: boolean | undefined;
}
export interface UpdateDeliveryConfigurationRequest {
  id: string | undefined;
  recordFields?: string[] | undefined;
  fieldDelimiter?: string | undefined;
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}
export interface UpdateDeliveryConfigurationResponse {}
export interface UpdateLogAnomalyDetectorRequest {
  anomalyDetectorArn: string | undefined;
  evaluationFrequency?: EvaluationFrequency | undefined;
  filterPattern?: string | undefined;
  anomalyVisibilityTime?: number | undefined;
  enabled: boolean | undefined;
}
export interface UpdateScheduledQueryRequest {
  identifier: string | undefined;
  description?: string | undefined;
  queryLanguage: QueryLanguage | undefined;
  queryString: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn: string | undefined;
  state?: ScheduledQueryState | undefined;
}
export interface UpdateScheduledQueryResponse {
  scheduledQueryArn?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  queryLanguage?: QueryLanguage | undefined;
  queryString?: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression?: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  state?: ScheduledQueryState | undefined;
  lastTriggeredTime?: number | undefined;
  lastExecutionStatus?: ExecutionStatus | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn?: string | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface LogFieldType {
  type?: string | undefined;
  element?: LogFieldType | undefined;
  fields?: LogFieldsListItem[] | undefined;
}
export interface LogFieldsListItem {
  logFieldName?: string | undefined;
  logFieldType?: LogFieldType | undefined;
}
export interface GetLogFieldsResponse {
  logFields?: LogFieldsListItem[] | undefined;
}
