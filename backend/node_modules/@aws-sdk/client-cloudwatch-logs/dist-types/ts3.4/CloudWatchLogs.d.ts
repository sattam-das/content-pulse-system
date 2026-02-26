import {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";
import { CloudWatchLogsClient } from "./CloudWatchLogsClient";
import {
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput,
} from "./commands/AssociateKmsKeyCommand";
import {
  AssociateSourceToS3TableIntegrationCommandInput,
  AssociateSourceToS3TableIntegrationCommandOutput,
} from "./commands/AssociateSourceToS3TableIntegrationCommand";
import {
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "./commands/CancelExportTaskCommand";
import {
  CancelImportTaskCommandInput,
  CancelImportTaskCommandOutput,
} from "./commands/CancelImportTaskCommand";
import {
  CreateDeliveryCommandInput,
  CreateDeliveryCommandOutput,
} from "./commands/CreateDeliveryCommand";
import {
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput,
} from "./commands/CreateExportTaskCommand";
import {
  CreateImportTaskCommandInput,
  CreateImportTaskCommandOutput,
} from "./commands/CreateImportTaskCommand";
import {
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
} from "./commands/CreateLogAnomalyDetectorCommand";
import {
  CreateLogGroupCommandInput,
  CreateLogGroupCommandOutput,
} from "./commands/CreateLogGroupCommand";
import {
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput,
} from "./commands/CreateLogStreamCommand";
import {
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import {
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "./commands/DeleteAccountPolicyCommand";
import {
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "./commands/DeleteDataProtectionPolicyCommand";
import {
  DeleteDeliveryCommandInput,
  DeleteDeliveryCommandOutput,
} from "./commands/DeleteDeliveryCommand";
import {
  DeleteDeliveryDestinationCommandInput,
  DeleteDeliveryDestinationCommandOutput,
} from "./commands/DeleteDeliveryDestinationCommand";
import {
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
} from "./commands/DeleteDeliveryDestinationPolicyCommand";
import {
  DeleteDeliverySourceCommandInput,
  DeleteDeliverySourceCommandOutput,
} from "./commands/DeleteDeliverySourceCommand";
import {
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import {
  DeleteIndexPolicyCommandInput,
  DeleteIndexPolicyCommandOutput,
} from "./commands/DeleteIndexPolicyCommand";
import {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteLogAnomalyDetectorCommandInput,
  DeleteLogAnomalyDetectorCommandOutput,
} from "./commands/DeleteLogAnomalyDetectorCommand";
import {
  DeleteLogGroupCommandInput,
  DeleteLogGroupCommandOutput,
} from "./commands/DeleteLogGroupCommand";
import {
  DeleteLogStreamCommandInput,
  DeleteLogStreamCommandOutput,
} from "./commands/DeleteLogStreamCommand";
import {
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput,
} from "./commands/DeleteMetricFilterCommand";
import {
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "./commands/DeleteQueryDefinitionCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import {
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "./commands/DeleteSubscriptionFilterCommand";
import {
  DeleteTransformerCommandInput,
  DeleteTransformerCommandOutput,
} from "./commands/DeleteTransformerCommand";
import {
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "./commands/DescribeAccountPoliciesCommand";
import {
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "./commands/DescribeConfigurationTemplatesCommand";
import {
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput,
} from "./commands/DescribeDeliveriesCommand";
import {
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "./commands/DescribeDeliveryDestinationsCommand";
import {
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "./commands/DescribeDeliverySourcesCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "./commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeFieldIndexesCommandInput,
  DescribeFieldIndexesCommandOutput,
} from "./commands/DescribeFieldIndexesCommand";
import {
  DescribeImportTaskBatchesCommandInput,
  DescribeImportTaskBatchesCommandOutput,
} from "./commands/DescribeImportTaskBatchesCommand";
import {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "./commands/DescribeImportTasksCommand";
import {
  DescribeIndexPoliciesCommandInput,
  DescribeIndexPoliciesCommandOutput,
} from "./commands/DescribeIndexPoliciesCommand";
import {
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
} from "./commands/DescribeLogGroupsCommand";
import {
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "./commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "./commands/DescribeMetricFiltersCommand";
import {
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput,
} from "./commands/DescribeQueriesCommand";
import {
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "./commands/DescribeQueryDefinitionsCommand";
import {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "./commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "./commands/DescribeSubscriptionFiltersCommand";
import {
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
} from "./commands/DisassociateKmsKeyCommand";
import {
  DisassociateSourceFromS3TableIntegrationCommandInput,
  DisassociateSourceFromS3TableIntegrationCommandOutput,
} from "./commands/DisassociateSourceFromS3TableIntegrationCommand";
import {
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
} from "./commands/FilterLogEventsCommand";
import {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import {
  GetDeliveryCommandInput,
  GetDeliveryCommandOutput,
} from "./commands/GetDeliveryCommand";
import {
  GetDeliveryDestinationCommandInput,
  GetDeliveryDestinationCommandOutput,
} from "./commands/GetDeliveryDestinationCommand";
import {
  GetDeliveryDestinationPolicyCommandInput,
  GetDeliveryDestinationPolicyCommandOutput,
} from "./commands/GetDeliveryDestinationPolicyCommand";
import {
  GetDeliverySourceCommandInput,
  GetDeliverySourceCommandOutput,
} from "./commands/GetDeliverySourceCommand";
import {
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import {
  GetLogAnomalyDetectorCommandInput,
  GetLogAnomalyDetectorCommandOutput,
} from "./commands/GetLogAnomalyDetectorCommand";
import {
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "./commands/GetLogEventsCommand";
import {
  GetLogFieldsCommandInput,
  GetLogFieldsCommandOutput,
} from "./commands/GetLogFieldsCommand";
import {
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
} from "./commands/GetLogGroupFieldsCommand";
import {
  GetLogObjectCommandInput,
  GetLogObjectCommandOutput,
} from "./commands/GetLogObjectCommand";
import {
  GetLogRecordCommandInput,
  GetLogRecordCommandOutput,
} from "./commands/GetLogRecordCommand";
import {
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "./commands/GetQueryResultsCommand";
import {
  GetScheduledQueryCommandInput,
  GetScheduledQueryCommandOutput,
} from "./commands/GetScheduledQueryCommand";
import {
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput,
} from "./commands/GetScheduledQueryHistoryCommand";
import {
  GetTransformerCommandInput,
  GetTransformerCommandOutput,
} from "./commands/GetTransformerCommand";
import {
  ListAggregateLogGroupSummariesCommandInput,
  ListAggregateLogGroupSummariesCommandOutput,
} from "./commands/ListAggregateLogGroupSummariesCommand";
import {
  ListAnomaliesCommandInput,
  ListAnomaliesCommandOutput,
} from "./commands/ListAnomaliesCommand";
import {
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "./commands/ListIntegrationsCommand";
import {
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "./commands/ListLogAnomalyDetectorsCommand";
import {
  ListLogGroupsCommandInput,
  ListLogGroupsCommandOutput,
} from "./commands/ListLogGroupsCommand";
import {
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "./commands/ListLogGroupsForQueryCommand";
import {
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import {
  ListSourcesForS3TableIntegrationCommandInput,
  ListSourcesForS3TableIntegrationCommandOutput,
} from "./commands/ListSourcesForS3TableIntegrationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput,
} from "./commands/ListTagsLogGroupCommand";
import {
  PutAccountPolicyCommandInput,
  PutAccountPolicyCommandOutput,
} from "./commands/PutAccountPolicyCommand";
import {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
} from "./commands/PutDeliveryDestinationCommand";
import {
  PutDeliveryDestinationPolicyCommandInput,
  PutDeliveryDestinationPolicyCommandOutput,
} from "./commands/PutDeliveryDestinationPolicyCommand";
import {
  PutDeliverySourceCommandInput,
  PutDeliverySourceCommandOutput,
} from "./commands/PutDeliverySourceCommand";
import {
  PutDestinationCommandInput,
  PutDestinationCommandOutput,
} from "./commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "./commands/PutDestinationPolicyCommand";
import {
  PutIndexPolicyCommandInput,
  PutIndexPolicyCommandOutput,
} from "./commands/PutIndexPolicyCommand";
import {
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
} from "./commands/PutLogEventsCommand";
import {
  PutLogGroupDeletionProtectionCommandInput,
  PutLogGroupDeletionProtectionCommandOutput,
} from "./commands/PutLogGroupDeletionProtectionCommand";
import {
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput,
} from "./commands/PutMetricFilterCommand";
import {
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
} from "./commands/PutQueryDefinitionCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "./commands/PutSubscriptionFilterCommand";
import {
  PutTransformerCommandInput,
  PutTransformerCommandOutput,
} from "./commands/PutTransformerCommand";
import {
  StartLiveTailCommandInput,
  StartLiveTailCommandOutput,
} from "./commands/StartLiveTailCommand";
import {
  StartQueryCommandInput,
  StartQueryCommandOutput,
} from "./commands/StartQueryCommand";
import {
  StopQueryCommandInput,
  StopQueryCommandOutput,
} from "./commands/StopQueryCommand";
import {
  TagLogGroupCommandInput,
  TagLogGroupCommandOutput,
} from "./commands/TagLogGroupCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  TestMetricFilterCommandInput,
  TestMetricFilterCommandOutput,
} from "./commands/TestMetricFilterCommand";
import {
  TestTransformerCommandInput,
  TestTransformerCommandOutput,
} from "./commands/TestTransformerCommand";
import {
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput,
} from "./commands/UntagLogGroupCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnomalyCommandInput,
  UpdateAnomalyCommandOutput,
} from "./commands/UpdateAnomalyCommand";
import {
  UpdateDeliveryConfigurationCommandInput,
  UpdateDeliveryConfigurationCommandOutput,
} from "./commands/UpdateDeliveryConfigurationCommand";
import {
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
} from "./commands/UpdateLogAnomalyDetectorCommand";
import {
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";
export interface CloudWatchLogs {
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateKmsKeyCommandOutput>;
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void
  ): void;
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateKmsKeyCommandOutput) => void
  ): void;
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSourceToS3TableIntegrationCommandOutput>;
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    cb: (
      err: any,
      data?: AssociateSourceToS3TableIntegrationCommandOutput
    ) => void
  ): void;
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AssociateSourceToS3TableIntegrationCommandOutput
    ) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImportTaskCommandOutput>;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  createDelivery(
    args: CreateDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliveryCommandOutput>;
  createDelivery(
    args: CreateDeliveryCommandInput,
    cb: (err: any, data?: CreateDeliveryCommandOutput) => void
  ): void;
  createDelivery(
    args: CreateDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliveryCommandOutput) => void
  ): void;
  createExportTask(
    args: CreateExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportTaskCommandOutput>;
  createExportTask(
    args: CreateExportTaskCommandInput,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;
  createExportTask(
    args: CreateExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportTaskCommandOutput) => void
  ): void;
  createImportTask(
    args: CreateImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImportTaskCommandOutput>;
  createImportTask(
    args: CreateImportTaskCommandInput,
    cb: (err: any, data?: CreateImportTaskCommandOutput) => void
  ): void;
  createImportTask(
    args: CreateImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImportTaskCommandOutput) => void
  ): void;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogAnomalyDetectorCommandOutput>;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogAnomalyDetectorCommandOutput) => void
  ): void;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogGroupCommandOutput>;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    cb: (err: any, data?: CreateLogGroupCommandOutput) => void
  ): void;
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogGroupCommandOutput) => void
  ): void;
  createLogStream(
    args: CreateLogStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogStreamCommandOutput>;
  createLogStream(
    args: CreateLogStreamCommandInput,
    cb: (err: any, data?: CreateLogStreamCommandOutput) => void
  ): void;
  createLogStream(
    args: CreateLogStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogStreamCommandOutput) => void
  ): void;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledQueryCommandOutput>;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPolicyCommandOutput>;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPolicyCommandOutput) => void
  ): void;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataProtectionPolicyCommandOutput>;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataProtectionPolicyCommandOutput) => void
  ): void;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryCommandOutput>;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    cb: (err: any, data?: DeleteDeliveryCommandOutput) => void
  ): void;
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryCommandOutput) => void
  ): void;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryDestinationCommandOutput>;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationCommandOutput) => void
  ): void;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliveryDestinationPolicyCommandOutput>;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeliverySourceCommandOutput>;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeliverySourceCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexPolicyCommandOutput>;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexPolicyCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogAnomalyDetectorCommandOutput>;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogAnomalyDetectorCommandOutput) => void
  ): void;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogGroupCommandOutput>;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    cb: (err: any, data?: DeleteLogGroupCommandOutput) => void
  ): void;
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogGroupCommandOutput) => void
  ): void;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogStreamCommandOutput>;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    cb: (err: any, data?: DeleteLogStreamCommandOutput) => void
  ): void;
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogStreamCommandOutput) => void
  ): void;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricFilterCommandOutput>;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricFilterCommandOutput) => void
  ): void;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueryDefinitionCommandOutput>;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueryDefinitionCommandOutput) => void
  ): void;
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionPolicyCommandOutput>;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledQueryCommandOutput>;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionFilterCommandOutput>;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionFilterCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransformerCommandOutput>;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountPoliciesCommandOutput>;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountPoliciesCommandOutput) => void
  ): void;
  describeConfigurationTemplates(): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationTemplatesCommandOutput>;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationTemplatesCommandOutput) => void
  ): void;
  describeDeliveries(): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveriesCommandOutput>;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveriesCommandOutput) => void
  ): void;
  describeDeliveryDestinations(): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliveryDestinationsCommandOutput>;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliveryDestinationsCommandOutput) => void
  ): void;
  describeDeliverySources(): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeliverySourcesCommandOutput>;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeliverySourcesCommandOutput) => void
  ): void;
  describeDestinations(): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDestinationsCommandOutput>;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDestinationsCommandOutput) => void
  ): void;
  describeExportTasks(): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFieldIndexesCommandOutput>;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFieldIndexesCommandOutput) => void
  ): void;
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportTaskBatchesCommandOutput>;
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    cb: (err: any, data?: DescribeImportTaskBatchesCommandOutput) => void
  ): void;
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportTaskBatchesCommandOutput) => void
  ): void;
  describeImportTasks(): Promise<DescribeImportTasksCommandOutput>;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportTasksCommandOutput>;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportTasksCommandOutput) => void
  ): void;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexPoliciesCommandOutput>;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexPoliciesCommandOutput) => void
  ): void;
  describeLogGroups(): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogGroupsCommandOutput>;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogGroupsCommandOutput) => void
  ): void;
  describeLogStreams(): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLogStreamsCommandOutput>;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLogStreamsCommandOutput) => void
  ): void;
  describeMetricFilters(): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricFiltersCommandOutput>;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricFiltersCommandOutput) => void
  ): void;
  describeQueries(): Promise<DescribeQueriesCommandOutput>;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueriesCommandOutput>;
  describeQueries(
    args: DescribeQueriesCommandInput,
    cb: (err: any, data?: DescribeQueriesCommandOutput) => void
  ): void;
  describeQueries(
    args: DescribeQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueriesCommandOutput) => void
  ): void;
  describeQueryDefinitions(): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueryDefinitionsCommandOutput>;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueryDefinitionsCommandOutput) => void
  ): void;
  describeResourcePolicies(): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePoliciesCommandOutput>;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePoliciesCommandOutput) => void
  ): void;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscriptionFiltersCommandOutput>;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscriptionFiltersCommandOutput) => void
  ): void;
  disassociateKmsKey(): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateKmsKeyCommandOutput>;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateKmsKeyCommandOutput) => void
  ): void;
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSourceFromS3TableIntegrationCommandOutput>;
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    cb: (
      err: any,
      data?: DisassociateSourceFromS3TableIntegrationCommandOutput
    ) => void
  ): void;
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisassociateSourceFromS3TableIntegrationCommandOutput
    ) => void
  ): void;
  filterLogEvents(): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FilterLogEventsCommandOutput>;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    cb: (err: any, data?: FilterLogEventsCommandOutput) => void
  ): void;
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FilterLogEventsCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDelivery(
    args: GetDeliveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliveryCommandOutput>;
  getDelivery(
    args: GetDeliveryCommandInput,
    cb: (err: any, data?: GetDeliveryCommandOutput) => void
  ): void;
  getDelivery(
    args: GetDeliveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryCommandOutput) => void
  ): void;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliveryDestinationCommandOutput>;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryDestinationCommandOutput) => void
  ): void;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliveryDestinationPolicyCommandOutput>;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverySourceCommandOutput>;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverySourceCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogAnomalyDetectorCommandOutput>;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogAnomalyDetectorCommandOutput) => void
  ): void;
  getLogEvents(
    args: GetLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogEventsCommandOutput>;
  getLogEvents(
    args: GetLogEventsCommandInput,
    cb: (err: any, data?: GetLogEventsCommandOutput) => void
  ): void;
  getLogEvents(
    args: GetLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogEventsCommandOutput) => void
  ): void;
  getLogFields(
    args: GetLogFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogFieldsCommandOutput>;
  getLogFields(
    args: GetLogFieldsCommandInput,
    cb: (err: any, data?: GetLogFieldsCommandOutput) => void
  ): void;
  getLogFields(
    args: GetLogFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogFieldsCommandOutput) => void
  ): void;
  getLogGroupFields(): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogGroupFieldsCommandOutput>;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogGroupFieldsCommandOutput) => void
  ): void;
  getLogObject(
    args: GetLogObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogObjectCommandOutput>;
  getLogObject(
    args: GetLogObjectCommandInput,
    cb: (err: any, data?: GetLogObjectCommandOutput) => void
  ): void;
  getLogObject(
    args: GetLogObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogObjectCommandOutput) => void
  ): void;
  getLogRecord(
    args: GetLogRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogRecordCommandOutput>;
  getLogRecord(
    args: GetLogRecordCommandInput,
    cb: (err: any, data?: GetLogRecordCommandOutput) => void
  ): void;
  getLogRecord(
    args: GetLogRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogRecordCommandOutput) => void
  ): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduledQueryCommandOutput>;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduledQueryCommandOutput) => void
  ): void;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduledQueryHistoryCommandOutput>;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduledQueryHistoryCommandOutput) => void
  ): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransformerCommandOutput>;
  getTransformer(
    args: GetTransformerCommandInput,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAggregateLogGroupSummariesCommandOutput>;
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    cb: (err: any, data?: ListAggregateLogGroupSummariesCommandOutput) => void
  ): void;
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAggregateLogGroupSummariesCommandOutput) => void
  ): void;
  listAnomalies(): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomaliesCommandOutput>;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    cb: (err: any, data?: ListAnomaliesCommandOutput) => void
  ): void;
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomaliesCommandOutput) => void
  ): void;
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listLogAnomalyDetectors(): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogAnomalyDetectorsCommandOutput>;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogAnomalyDetectorsCommandOutput) => void
  ): void;
  listLogGroups(): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogGroupsCommandOutput>;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    cb: (err: any, data?: ListLogGroupsCommandOutput) => void
  ): void;
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogGroupsCommandOutput) => void
  ): void;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogGroupsForQueryCommandOutput>;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogGroupsForQueryCommandOutput) => void
  ): void;
  listScheduledQueries(): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourcesForS3TableIntegrationCommandOutput>;
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    cb: (err: any, data?: ListSourcesForS3TableIntegrationCommandOutput) => void
  ): void;
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourcesForS3TableIntegrationCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsLogGroupCommandOutput>;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsLogGroupCommandOutput) => void
  ): void;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountPolicyCommandOutput>;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryDestinationCommandOutput>;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryDestinationCommandOutput) => void
  ): void;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliveryDestinationPolicyCommandOutput>;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliveryDestinationPolicyCommandOutput) => void
  ): void;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverySourceCommandOutput>;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverySourceCommandOutput) => void
  ): void;
  putDestination(
    args: PutDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDestinationCommandOutput>;
  putDestination(
    args: PutDestinationCommandInput,
    cb: (err: any, data?: PutDestinationCommandOutput) => void
  ): void;
  putDestination(
    args: PutDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDestinationCommandOutput) => void
  ): void;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDestinationPolicyCommandOutput>;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDestinationPolicyCommandOutput) => void
  ): void;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIndexPolicyCommandOutput>;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    cb: (err: any, data?: PutIndexPolicyCommandOutput) => void
  ): void;
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIndexPolicyCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putLogEvents(
    args: PutLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLogEventsCommandOutput>;
  putLogEvents(
    args: PutLogEventsCommandInput,
    cb: (err: any, data?: PutLogEventsCommandOutput) => void
  ): void;
  putLogEvents(
    args: PutLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLogEventsCommandOutput) => void
  ): void;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLogGroupDeletionProtectionCommandOutput>;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLogGroupDeletionProtectionCommandOutput) => void
  ): void;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricFilterCommandOutput>;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    cb: (err: any, data?: PutMetricFilterCommandOutput) => void
  ): void;
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricFilterCommandOutput) => void
  ): void;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutQueryDefinitionCommandOutput>;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutQueryDefinitionCommandOutput) => void
  ): void;
  putResourcePolicy(): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionPolicyCommandOutput>;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSubscriptionFilterCommandOutput>;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSubscriptionFilterCommandOutput) => void
  ): void;
  putTransformer(
    args: PutTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTransformerCommandOutput>;
  putTransformer(
    args: PutTransformerCommandInput,
    cb: (err: any, data?: PutTransformerCommandOutput) => void
  ): void;
  putTransformer(
    args: PutTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTransformerCommandOutput) => void
  ): void;
  startLiveTail(
    args: StartLiveTailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLiveTailCommandOutput>;
  startLiveTail(
    args: StartLiveTailCommandInput,
    cb: (err: any, data?: StartLiveTailCommandOutput) => void
  ): void;
  startLiveTail(
    args: StartLiveTailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLiveTailCommandOutput) => void
  ): void;
  startQuery(
    args: StartQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryCommandOutput>;
  startQuery(
    args: StartQueryCommandInput,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;
  startQuery(
    args: StartQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;
  stopQuery(
    args: StopQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopQueryCommandOutput>;
  stopQuery(
    args: StopQueryCommandInput,
    cb: (err: any, data?: StopQueryCommandOutput) => void
  ): void;
  stopQuery(
    args: StopQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQueryCommandOutput) => void
  ): void;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagLogGroupCommandOutput>;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    cb: (err: any, data?: TagLogGroupCommandOutput) => void
  ): void;
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagLogGroupCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestMetricFilterCommandOutput>;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestMetricFilterCommandOutput) => void
  ): void;
  testTransformer(
    args: TestTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestTransformerCommandOutput>;
  testTransformer(
    args: TestTransformerCommandInput,
    cb: (err: any, data?: TestTransformerCommandOutput) => void
  ): void;
  testTransformer(
    args: TestTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestTransformerCommandOutput) => void
  ): void;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagLogGroupCommandOutput>;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    cb: (err: any, data?: UntagLogGroupCommandOutput) => void
  ): void;
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagLogGroupCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalyCommandOutput>;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    cb: (err: any, data?: UpdateAnomalyCommandOutput) => void
  ): void;
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyCommandOutput) => void
  ): void;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeliveryConfigurationCommandOutput>;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeliveryConfigurationCommandOutput) => void
  ): void;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogAnomalyDetectorCommandOutput>;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogAnomalyDetectorCommandOutput) => void
  ): void;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledQueryCommandOutput>;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  paginateDescribeConfigurationTemplates(
    args?: DescribeConfigurationTemplatesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeConfigurationTemplatesCommandOutput>;
  paginateDescribeDeliveries(
    args?: DescribeDeliveriesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeDeliveriesCommandOutput>;
  paginateDescribeDeliveryDestinations(
    args?: DescribeDeliveryDestinationsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeDeliveryDestinationsCommandOutput>;
  paginateDescribeDeliverySources(
    args?: DescribeDeliverySourcesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeDeliverySourcesCommandOutput>;
  paginateDescribeDestinations(
    args?: DescribeDestinationsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeDestinationsCommandOutput>;
  paginateDescribeLogGroups(
    args?: DescribeLogGroupsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeLogGroupsCommandOutput>;
  paginateDescribeLogStreams(
    args?: DescribeLogStreamsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeLogStreamsCommandOutput>;
  paginateDescribeMetricFilters(
    args?: DescribeMetricFiltersCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeMetricFiltersCommandOutput>;
  paginateDescribeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<DescribeSubscriptionFiltersCommandOutput>;
  paginateFilterLogEvents(
    args?: FilterLogEventsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<FilterLogEventsCommandOutput>;
  paginateGetLogEvents(
    args: GetLogEventsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<GetLogEventsCommandOutput>;
  paginateGetScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<GetScheduledQueryHistoryCommandOutput>;
  paginateListAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListAggregateLogGroupSummariesCommandOutput>;
  paginateListAnomalies(
    args?: ListAnomaliesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListAnomaliesCommandOutput>;
  paginateListLogAnomalyDetectors(
    args?: ListLogAnomalyDetectorsCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListLogAnomalyDetectorsCommandOutput>;
  paginateListLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListLogGroupsForQueryCommandOutput>;
  paginateListScheduledQueries(
    args?: ListScheduledQueriesCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListScheduledQueriesCommandOutput>;
  paginateListSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    paginationConfig?: Pick<
      PaginationConfiguration,
      Exclude<keyof PaginationConfiguration, "client">
    >
  ): Paginator<ListSourcesForS3TableIntegrationCommandOutput>;
}
export declare class CloudWatchLogs
  extends CloudWatchLogsClient
  implements CloudWatchLogs {}
