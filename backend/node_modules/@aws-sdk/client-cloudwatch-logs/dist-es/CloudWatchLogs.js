import { createAggregatedClient } from "@smithy/smithy-client";
import { CloudWatchLogsClient } from "./CloudWatchLogsClient";
import { AssociateKmsKeyCommand, } from "./commands/AssociateKmsKeyCommand";
import { AssociateSourceToS3TableIntegrationCommand, } from "./commands/AssociateSourceToS3TableIntegrationCommand";
import { CancelExportTaskCommand, } from "./commands/CancelExportTaskCommand";
import { CancelImportTaskCommand, } from "./commands/CancelImportTaskCommand";
import { CreateDeliveryCommand, } from "./commands/CreateDeliveryCommand";
import { CreateExportTaskCommand, } from "./commands/CreateExportTaskCommand";
import { CreateImportTaskCommand, } from "./commands/CreateImportTaskCommand";
import { CreateLogAnomalyDetectorCommand, } from "./commands/CreateLogAnomalyDetectorCommand";
import { CreateLogGroupCommand, } from "./commands/CreateLogGroupCommand";
import { CreateLogStreamCommand, } from "./commands/CreateLogStreamCommand";
import { CreateScheduledQueryCommand, } from "./commands/CreateScheduledQueryCommand";
import { DeleteAccountPolicyCommand, } from "./commands/DeleteAccountPolicyCommand";
import { DeleteDataProtectionPolicyCommand, } from "./commands/DeleteDataProtectionPolicyCommand";
import { DeleteDeliveryCommand, } from "./commands/DeleteDeliveryCommand";
import { DeleteDeliveryDestinationCommand, } from "./commands/DeleteDeliveryDestinationCommand";
import { DeleteDeliveryDestinationPolicyCommand, } from "./commands/DeleteDeliveryDestinationPolicyCommand";
import { DeleteDeliverySourceCommand, } from "./commands/DeleteDeliverySourceCommand";
import { DeleteDestinationCommand, } from "./commands/DeleteDestinationCommand";
import { DeleteIndexPolicyCommand, } from "./commands/DeleteIndexPolicyCommand";
import { DeleteIntegrationCommand, } from "./commands/DeleteIntegrationCommand";
import { DeleteLogAnomalyDetectorCommand, } from "./commands/DeleteLogAnomalyDetectorCommand";
import { DeleteLogGroupCommand, } from "./commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommand, } from "./commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommand, } from "./commands/DeleteMetricFilterCommand";
import { DeleteQueryDefinitionCommand, } from "./commands/DeleteQueryDefinitionCommand";
import { DeleteResourcePolicyCommand, } from "./commands/DeleteResourcePolicyCommand";
import { DeleteRetentionPolicyCommand, } from "./commands/DeleteRetentionPolicyCommand";
import { DeleteScheduledQueryCommand, } from "./commands/DeleteScheduledQueryCommand";
import { DeleteSubscriptionFilterCommand, } from "./commands/DeleteSubscriptionFilterCommand";
import { DeleteTransformerCommand, } from "./commands/DeleteTransformerCommand";
import { DescribeAccountPoliciesCommand, } from "./commands/DescribeAccountPoliciesCommand";
import { DescribeConfigurationTemplatesCommand, } from "./commands/DescribeConfigurationTemplatesCommand";
import { DescribeDeliveriesCommand, } from "./commands/DescribeDeliveriesCommand";
import { DescribeDeliveryDestinationsCommand, } from "./commands/DescribeDeliveryDestinationsCommand";
import { DescribeDeliverySourcesCommand, } from "./commands/DescribeDeliverySourcesCommand";
import { DescribeDestinationsCommand, } from "./commands/DescribeDestinationsCommand";
import { DescribeExportTasksCommand, } from "./commands/DescribeExportTasksCommand";
import { DescribeFieldIndexesCommand, } from "./commands/DescribeFieldIndexesCommand";
import { DescribeImportTaskBatchesCommand, } from "./commands/DescribeImportTaskBatchesCommand";
import { DescribeImportTasksCommand, } from "./commands/DescribeImportTasksCommand";
import { DescribeIndexPoliciesCommand, } from "./commands/DescribeIndexPoliciesCommand";
import { DescribeLogGroupsCommand, } from "./commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommand, } from "./commands/DescribeLogStreamsCommand";
import { DescribeMetricFiltersCommand, } from "./commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommand, } from "./commands/DescribeQueriesCommand";
import { DescribeQueryDefinitionsCommand, } from "./commands/DescribeQueryDefinitionsCommand";
import { DescribeResourcePoliciesCommand, } from "./commands/DescribeResourcePoliciesCommand";
import { DescribeSubscriptionFiltersCommand, } from "./commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommand, } from "./commands/DisassociateKmsKeyCommand";
import { DisassociateSourceFromS3TableIntegrationCommand, } from "./commands/DisassociateSourceFromS3TableIntegrationCommand";
import { FilterLogEventsCommand, } from "./commands/FilterLogEventsCommand";
import { GetDataProtectionPolicyCommand, } from "./commands/GetDataProtectionPolicyCommand";
import { GetDeliveryCommand } from "./commands/GetDeliveryCommand";
import { GetDeliveryDestinationCommand, } from "./commands/GetDeliveryDestinationCommand";
import { GetDeliveryDestinationPolicyCommand, } from "./commands/GetDeliveryDestinationPolicyCommand";
import { GetDeliverySourceCommand, } from "./commands/GetDeliverySourceCommand";
import { GetIntegrationCommand, } from "./commands/GetIntegrationCommand";
import { GetLogAnomalyDetectorCommand, } from "./commands/GetLogAnomalyDetectorCommand";
import { GetLogEventsCommand, } from "./commands/GetLogEventsCommand";
import { GetLogFieldsCommand, } from "./commands/GetLogFieldsCommand";
import { GetLogGroupFieldsCommand, } from "./commands/GetLogGroupFieldsCommand";
import { GetLogObjectCommand, } from "./commands/GetLogObjectCommand";
import { GetLogRecordCommand, } from "./commands/GetLogRecordCommand";
import { GetQueryResultsCommand, } from "./commands/GetQueryResultsCommand";
import { GetScheduledQueryCommand, } from "./commands/GetScheduledQueryCommand";
import { GetScheduledQueryHistoryCommand, } from "./commands/GetScheduledQueryHistoryCommand";
import { GetTransformerCommand, } from "./commands/GetTransformerCommand";
import { ListAggregateLogGroupSummariesCommand, } from "./commands/ListAggregateLogGroupSummariesCommand";
import { ListAnomaliesCommand, } from "./commands/ListAnomaliesCommand";
import { ListIntegrationsCommand, } from "./commands/ListIntegrationsCommand";
import { ListLogAnomalyDetectorsCommand, } from "./commands/ListLogAnomalyDetectorsCommand";
import { ListLogGroupsCommand, } from "./commands/ListLogGroupsCommand";
import { ListLogGroupsForQueryCommand, } from "./commands/ListLogGroupsForQueryCommand";
import { ListScheduledQueriesCommand, } from "./commands/ListScheduledQueriesCommand";
import { ListSourcesForS3TableIntegrationCommand, } from "./commands/ListSourcesForS3TableIntegrationCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTagsLogGroupCommand, } from "./commands/ListTagsLogGroupCommand";
import { PutAccountPolicyCommand, } from "./commands/PutAccountPolicyCommand";
import { PutDataProtectionPolicyCommand, } from "./commands/PutDataProtectionPolicyCommand";
import { PutDeliveryDestinationCommand, } from "./commands/PutDeliveryDestinationCommand";
import { PutDeliveryDestinationPolicyCommand, } from "./commands/PutDeliveryDestinationPolicyCommand";
import { PutDeliverySourceCommand, } from "./commands/PutDeliverySourceCommand";
import { PutDestinationCommand, } from "./commands/PutDestinationCommand";
import { PutDestinationPolicyCommand, } from "./commands/PutDestinationPolicyCommand";
import { PutIndexPolicyCommand, } from "./commands/PutIndexPolicyCommand";
import { PutIntegrationCommand, } from "./commands/PutIntegrationCommand";
import { PutLogEventsCommand, } from "./commands/PutLogEventsCommand";
import { PutLogGroupDeletionProtectionCommand, } from "./commands/PutLogGroupDeletionProtectionCommand";
import { PutMetricFilterCommand, } from "./commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommand, } from "./commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommand, } from "./commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommand, } from "./commands/PutRetentionPolicyCommand";
import { PutSubscriptionFilterCommand, } from "./commands/PutSubscriptionFilterCommand";
import { PutTransformerCommand, } from "./commands/PutTransformerCommand";
import { StartLiveTailCommand, } from "./commands/StartLiveTailCommand";
import { StartQueryCommand } from "./commands/StartQueryCommand";
import { StopQueryCommand } from "./commands/StopQueryCommand";
import { TagLogGroupCommand } from "./commands/TagLogGroupCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestMetricFilterCommand, } from "./commands/TestMetricFilterCommand";
import { TestTransformerCommand, } from "./commands/TestTransformerCommand";
import { UntagLogGroupCommand, } from "./commands/UntagLogGroupCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAnomalyCommand, } from "./commands/UpdateAnomalyCommand";
import { UpdateDeliveryConfigurationCommand, } from "./commands/UpdateDeliveryConfigurationCommand";
import { UpdateLogAnomalyDetectorCommand, } from "./commands/UpdateLogAnomalyDetectorCommand";
import { UpdateScheduledQueryCommand, } from "./commands/UpdateScheduledQueryCommand";
import { paginateDescribeConfigurationTemplates } from "./pagination/DescribeConfigurationTemplatesPaginator";
import { paginateDescribeDeliveries } from "./pagination/DescribeDeliveriesPaginator";
import { paginateDescribeDeliveryDestinations } from "./pagination/DescribeDeliveryDestinationsPaginator";
import { paginateDescribeDeliverySources } from "./pagination/DescribeDeliverySourcesPaginator";
import { paginateDescribeDestinations } from "./pagination/DescribeDestinationsPaginator";
import { paginateDescribeLogGroups } from "./pagination/DescribeLogGroupsPaginator";
import { paginateDescribeLogStreams } from "./pagination/DescribeLogStreamsPaginator";
import { paginateDescribeMetricFilters } from "./pagination/DescribeMetricFiltersPaginator";
import { paginateDescribeSubscriptionFilters } from "./pagination/DescribeSubscriptionFiltersPaginator";
import { paginateFilterLogEvents } from "./pagination/FilterLogEventsPaginator";
import { paginateGetLogEvents } from "./pagination/GetLogEventsPaginator";
import { paginateGetScheduledQueryHistory } from "./pagination/GetScheduledQueryHistoryPaginator";
import { paginateListAggregateLogGroupSummaries } from "./pagination/ListAggregateLogGroupSummariesPaginator";
import { paginateListAnomalies } from "./pagination/ListAnomaliesPaginator";
import { paginateListLogAnomalyDetectors } from "./pagination/ListLogAnomalyDetectorsPaginator";
import { paginateListLogGroupsForQuery } from "./pagination/ListLogGroupsForQueryPaginator";
import { paginateListScheduledQueries } from "./pagination/ListScheduledQueriesPaginator";
import { paginateListSourcesForS3TableIntegration } from "./pagination/ListSourcesForS3TableIntegrationPaginator";
const commands = {
    AssociateKmsKeyCommand,
    AssociateSourceToS3TableIntegrationCommand,
    CancelExportTaskCommand,
    CancelImportTaskCommand,
    CreateDeliveryCommand,
    CreateExportTaskCommand,
    CreateImportTaskCommand,
    CreateLogAnomalyDetectorCommand,
    CreateLogGroupCommand,
    CreateLogStreamCommand,
    CreateScheduledQueryCommand,
    DeleteAccountPolicyCommand,
    DeleteDataProtectionPolicyCommand,
    DeleteDeliveryCommand,
    DeleteDeliveryDestinationCommand,
    DeleteDeliveryDestinationPolicyCommand,
    DeleteDeliverySourceCommand,
    DeleteDestinationCommand,
    DeleteIndexPolicyCommand,
    DeleteIntegrationCommand,
    DeleteLogAnomalyDetectorCommand,
    DeleteLogGroupCommand,
    DeleteLogStreamCommand,
    DeleteMetricFilterCommand,
    DeleteQueryDefinitionCommand,
    DeleteResourcePolicyCommand,
    DeleteRetentionPolicyCommand,
    DeleteScheduledQueryCommand,
    DeleteSubscriptionFilterCommand,
    DeleteTransformerCommand,
    DescribeAccountPoliciesCommand,
    DescribeConfigurationTemplatesCommand,
    DescribeDeliveriesCommand,
    DescribeDeliveryDestinationsCommand,
    DescribeDeliverySourcesCommand,
    DescribeDestinationsCommand,
    DescribeExportTasksCommand,
    DescribeFieldIndexesCommand,
    DescribeImportTaskBatchesCommand,
    DescribeImportTasksCommand,
    DescribeIndexPoliciesCommand,
    DescribeLogGroupsCommand,
    DescribeLogStreamsCommand,
    DescribeMetricFiltersCommand,
    DescribeQueriesCommand,
    DescribeQueryDefinitionsCommand,
    DescribeResourcePoliciesCommand,
    DescribeSubscriptionFiltersCommand,
    DisassociateKmsKeyCommand,
    DisassociateSourceFromS3TableIntegrationCommand,
    FilterLogEventsCommand,
    GetDataProtectionPolicyCommand,
    GetDeliveryCommand,
    GetDeliveryDestinationCommand,
    GetDeliveryDestinationPolicyCommand,
    GetDeliverySourceCommand,
    GetIntegrationCommand,
    GetLogAnomalyDetectorCommand,
    GetLogEventsCommand,
    GetLogFieldsCommand,
    GetLogGroupFieldsCommand,
    GetLogObjectCommand,
    GetLogRecordCommand,
    GetQueryResultsCommand,
    GetScheduledQueryCommand,
    GetScheduledQueryHistoryCommand,
    GetTransformerCommand,
    ListAggregateLogGroupSummariesCommand,
    ListAnomaliesCommand,
    ListIntegrationsCommand,
    ListLogAnomalyDetectorsCommand,
    ListLogGroupsCommand,
    ListLogGroupsForQueryCommand,
    ListScheduledQueriesCommand,
    ListSourcesForS3TableIntegrationCommand,
    ListTagsForResourceCommand,
    ListTagsLogGroupCommand,
    PutAccountPolicyCommand,
    PutDataProtectionPolicyCommand,
    PutDeliveryDestinationCommand,
    PutDeliveryDestinationPolicyCommand,
    PutDeliverySourceCommand,
    PutDestinationCommand,
    PutDestinationPolicyCommand,
    PutIndexPolicyCommand,
    PutIntegrationCommand,
    PutLogEventsCommand,
    PutLogGroupDeletionProtectionCommand,
    PutMetricFilterCommand,
    PutQueryDefinitionCommand,
    PutResourcePolicyCommand,
    PutRetentionPolicyCommand,
    PutSubscriptionFilterCommand,
    PutTransformerCommand,
    StartLiveTailCommand,
    StartQueryCommand,
    StopQueryCommand,
    TagLogGroupCommand,
    TagResourceCommand,
    TestMetricFilterCommand,
    TestTransformerCommand,
    UntagLogGroupCommand,
    UntagResourceCommand,
    UpdateAnomalyCommand,
    UpdateDeliveryConfigurationCommand,
    UpdateLogAnomalyDetectorCommand,
    UpdateScheduledQueryCommand,
};
const paginators = {
    paginateDescribeConfigurationTemplates,
    paginateDescribeDeliveries,
    paginateDescribeDeliveryDestinations,
    paginateDescribeDeliverySources,
    paginateDescribeDestinations,
    paginateDescribeLogGroups,
    paginateDescribeLogStreams,
    paginateDescribeMetricFilters,
    paginateDescribeSubscriptionFilters,
    paginateFilterLogEvents,
    paginateGetLogEvents,
    paginateGetScheduledQueryHistory,
    paginateListAggregateLogGroupSummaries,
    paginateListAnomalies,
    paginateListLogAnomalyDetectors,
    paginateListLogGroupsForQuery,
    paginateListScheduledQueries,
    paginateListSourcesForS3TableIntegration,
};
export class CloudWatchLogs extends CloudWatchLogsClient {
}
createAggregatedClient(commands, CloudWatchLogs, { paginators });
