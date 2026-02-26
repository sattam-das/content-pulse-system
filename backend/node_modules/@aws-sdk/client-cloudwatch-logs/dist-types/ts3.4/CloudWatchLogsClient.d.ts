import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@smithy/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
} from "@smithy/eventstream-serde-config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@smithy/middleware-endpoint";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";
import {
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
} from "./auth/httpAuthSchemeProvider";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | AssociateKmsKeyCommandInput
  | AssociateSourceToS3TableIntegrationCommandInput
  | CancelExportTaskCommandInput
  | CancelImportTaskCommandInput
  | CreateDeliveryCommandInput
  | CreateExportTaskCommandInput
  | CreateImportTaskCommandInput
  | CreateLogAnomalyDetectorCommandInput
  | CreateLogGroupCommandInput
  | CreateLogStreamCommandInput
  | CreateScheduledQueryCommandInput
  | DeleteAccountPolicyCommandInput
  | DeleteDataProtectionPolicyCommandInput
  | DeleteDeliveryCommandInput
  | DeleteDeliveryDestinationCommandInput
  | DeleteDeliveryDestinationPolicyCommandInput
  | DeleteDeliverySourceCommandInput
  | DeleteDestinationCommandInput
  | DeleteIndexPolicyCommandInput
  | DeleteIntegrationCommandInput
  | DeleteLogAnomalyDetectorCommandInput
  | DeleteLogGroupCommandInput
  | DeleteLogStreamCommandInput
  | DeleteMetricFilterCommandInput
  | DeleteQueryDefinitionCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRetentionPolicyCommandInput
  | DeleteScheduledQueryCommandInput
  | DeleteSubscriptionFilterCommandInput
  | DeleteTransformerCommandInput
  | DescribeAccountPoliciesCommandInput
  | DescribeConfigurationTemplatesCommandInput
  | DescribeDeliveriesCommandInput
  | DescribeDeliveryDestinationsCommandInput
  | DescribeDeliverySourcesCommandInput
  | DescribeDestinationsCommandInput
  | DescribeExportTasksCommandInput
  | DescribeFieldIndexesCommandInput
  | DescribeImportTaskBatchesCommandInput
  | DescribeImportTasksCommandInput
  | DescribeIndexPoliciesCommandInput
  | DescribeLogGroupsCommandInput
  | DescribeLogStreamsCommandInput
  | DescribeMetricFiltersCommandInput
  | DescribeQueriesCommandInput
  | DescribeQueryDefinitionsCommandInput
  | DescribeResourcePoliciesCommandInput
  | DescribeSubscriptionFiltersCommandInput
  | DisassociateKmsKeyCommandInput
  | DisassociateSourceFromS3TableIntegrationCommandInput
  | FilterLogEventsCommandInput
  | GetDataProtectionPolicyCommandInput
  | GetDeliveryCommandInput
  | GetDeliveryDestinationCommandInput
  | GetDeliveryDestinationPolicyCommandInput
  | GetDeliverySourceCommandInput
  | GetIntegrationCommandInput
  | GetLogAnomalyDetectorCommandInput
  | GetLogEventsCommandInput
  | GetLogFieldsCommandInput
  | GetLogGroupFieldsCommandInput
  | GetLogObjectCommandInput
  | GetLogRecordCommandInput
  | GetQueryResultsCommandInput
  | GetScheduledQueryCommandInput
  | GetScheduledQueryHistoryCommandInput
  | GetTransformerCommandInput
  | ListAggregateLogGroupSummariesCommandInput
  | ListAnomaliesCommandInput
  | ListIntegrationsCommandInput
  | ListLogAnomalyDetectorsCommandInput
  | ListLogGroupsCommandInput
  | ListLogGroupsForQueryCommandInput
  | ListScheduledQueriesCommandInput
  | ListSourcesForS3TableIntegrationCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsLogGroupCommandInput
  | PutAccountPolicyCommandInput
  | PutDataProtectionPolicyCommandInput
  | PutDeliveryDestinationCommandInput
  | PutDeliveryDestinationPolicyCommandInput
  | PutDeliverySourceCommandInput
  | PutDestinationCommandInput
  | PutDestinationPolicyCommandInput
  | PutIndexPolicyCommandInput
  | PutIntegrationCommandInput
  | PutLogEventsCommandInput
  | PutLogGroupDeletionProtectionCommandInput
  | PutMetricFilterCommandInput
  | PutQueryDefinitionCommandInput
  | PutResourcePolicyCommandInput
  | PutRetentionPolicyCommandInput
  | PutSubscriptionFilterCommandInput
  | PutTransformerCommandInput
  | StartLiveTailCommandInput
  | StartQueryCommandInput
  | StopQueryCommandInput
  | TagLogGroupCommandInput
  | TagResourceCommandInput
  | TestMetricFilterCommandInput
  | TestTransformerCommandInput
  | UntagLogGroupCommandInput
  | UntagResourceCommandInput
  | UpdateAnomalyCommandInput
  | UpdateDeliveryConfigurationCommandInput
  | UpdateLogAnomalyDetectorCommandInput
  | UpdateScheduledQueryCommandInput;
export type ServiceOutputTypes =
  | AssociateKmsKeyCommandOutput
  | AssociateSourceToS3TableIntegrationCommandOutput
  | CancelExportTaskCommandOutput
  | CancelImportTaskCommandOutput
  | CreateDeliveryCommandOutput
  | CreateExportTaskCommandOutput
  | CreateImportTaskCommandOutput
  | CreateLogAnomalyDetectorCommandOutput
  | CreateLogGroupCommandOutput
  | CreateLogStreamCommandOutput
  | CreateScheduledQueryCommandOutput
  | DeleteAccountPolicyCommandOutput
  | DeleteDataProtectionPolicyCommandOutput
  | DeleteDeliveryCommandOutput
  | DeleteDeliveryDestinationCommandOutput
  | DeleteDeliveryDestinationPolicyCommandOutput
  | DeleteDeliverySourceCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteIndexPolicyCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteLogAnomalyDetectorCommandOutput
  | DeleteLogGroupCommandOutput
  | DeleteLogStreamCommandOutput
  | DeleteMetricFilterCommandOutput
  | DeleteQueryDefinitionCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRetentionPolicyCommandOutput
  | DeleteScheduledQueryCommandOutput
  | DeleteSubscriptionFilterCommandOutput
  | DeleteTransformerCommandOutput
  | DescribeAccountPoliciesCommandOutput
  | DescribeConfigurationTemplatesCommandOutput
  | DescribeDeliveriesCommandOutput
  | DescribeDeliveryDestinationsCommandOutput
  | DescribeDeliverySourcesCommandOutput
  | DescribeDestinationsCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeFieldIndexesCommandOutput
  | DescribeImportTaskBatchesCommandOutput
  | DescribeImportTasksCommandOutput
  | DescribeIndexPoliciesCommandOutput
  | DescribeLogGroupsCommandOutput
  | DescribeLogStreamsCommandOutput
  | DescribeMetricFiltersCommandOutput
  | DescribeQueriesCommandOutput
  | DescribeQueryDefinitionsCommandOutput
  | DescribeResourcePoliciesCommandOutput
  | DescribeSubscriptionFiltersCommandOutput
  | DisassociateKmsKeyCommandOutput
  | DisassociateSourceFromS3TableIntegrationCommandOutput
  | FilterLogEventsCommandOutput
  | GetDataProtectionPolicyCommandOutput
  | GetDeliveryCommandOutput
  | GetDeliveryDestinationCommandOutput
  | GetDeliveryDestinationPolicyCommandOutput
  | GetDeliverySourceCommandOutput
  | GetIntegrationCommandOutput
  | GetLogAnomalyDetectorCommandOutput
  | GetLogEventsCommandOutput
  | GetLogFieldsCommandOutput
  | GetLogGroupFieldsCommandOutput
  | GetLogObjectCommandOutput
  | GetLogRecordCommandOutput
  | GetQueryResultsCommandOutput
  | GetScheduledQueryCommandOutput
  | GetScheduledQueryHistoryCommandOutput
  | GetTransformerCommandOutput
  | ListAggregateLogGroupSummariesCommandOutput
  | ListAnomaliesCommandOutput
  | ListIntegrationsCommandOutput
  | ListLogAnomalyDetectorsCommandOutput
  | ListLogGroupsCommandOutput
  | ListLogGroupsForQueryCommandOutput
  | ListScheduledQueriesCommandOutput
  | ListSourcesForS3TableIntegrationCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsLogGroupCommandOutput
  | PutAccountPolicyCommandOutput
  | PutDataProtectionPolicyCommandOutput
  | PutDeliveryDestinationCommandOutput
  | PutDeliveryDestinationPolicyCommandOutput
  | PutDeliverySourceCommandOutput
  | PutDestinationCommandOutput
  | PutDestinationPolicyCommandOutput
  | PutIndexPolicyCommandOutput
  | PutIntegrationCommandOutput
  | PutLogEventsCommandOutput
  | PutLogGroupDeletionProtectionCommandOutput
  | PutMetricFilterCommandOutput
  | PutQueryDefinitionCommandOutput
  | PutResourcePolicyCommandOutput
  | PutRetentionPolicyCommandOutput
  | PutSubscriptionFilterCommandOutput
  | PutTransformerCommandOutput
  | StartLiveTailCommandOutput
  | StartQueryCommandOutput
  | StopQueryCommandOutput
  | TagLogGroupCommandOutput
  | TagResourceCommandOutput
  | TestMetricFilterCommandOutput
  | TestTransformerCommandOutput
  | UntagLogGroupCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnomalyCommandOutput
  | UpdateDeliveryConfigurationCommandOutput
  | UpdateLogAnomalyDetectorCommandOutput
  | UpdateScheduledQueryCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandlerUserInput;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  profile?: string;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type CloudWatchLogsClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
export interface CloudWatchLogsClientConfig
  extends CloudWatchLogsClientConfigType {}
export type CloudWatchLogsClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RuntimeExtensionsConfig &
    UserAgentResolvedConfig &
    RetryResolvedConfig &
    RegionResolvedConfig &
    HostHeaderResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    EventStreamSerdeResolvedConfig &
    HttpAuthSchemeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface CloudWatchLogsClientResolvedConfig
  extends CloudWatchLogsClientResolvedConfigType {}
export declare class CloudWatchLogsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchLogsClientResolvedConfig
> {
  readonly config: CloudWatchLogsClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<CloudWatchLogsClientConfig>
  );
  destroy(): void;
}
