"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchExecuteStatementInput$ = exports.BackupSummary$ = exports.BackupDetails$ = exports.BackupDescription$ = exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate$ = exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription$ = exports.AutoScalingSettingsUpdate$ = exports.AutoScalingSettingsDescription$ = exports.AutoScalingPolicyUpdate$ = exports.AutoScalingPolicyDescription$ = exports.AttributeValueUpdate$ = exports.AttributeDefinition$ = exports.ArchivalSummary$ = exports.errorTypeRegistries = exports.TransactionInProgressException$ = exports.TransactionConflictException$ = exports.TransactionCanceledException$ = exports.ThrottlingException$ = exports.TableNotFoundException$ = exports.TableInUseException$ = exports.TableAlreadyExistsException$ = exports.ResourceNotFoundException$ = exports.ResourceInUseException$ = exports.RequestLimitExceeded$ = exports.ReplicatedWriteConflictException$ = exports.ReplicaNotFoundException$ = exports.ReplicaAlreadyExistsException$ = exports.ProvisionedThroughputExceededException$ = exports.PolicyNotFoundException$ = exports.PointInTimeRecoveryUnavailableException$ = exports.LimitExceededException$ = exports.ItemCollectionSizeLimitExceededException$ = exports.InvalidRestoreTimeException$ = exports.InvalidExportTimeException$ = exports.InvalidEndpointException$ = exports.InternalServerError$ = exports.IndexNotFoundException$ = exports.ImportNotFoundException$ = exports.ImportConflictException$ = exports.IdempotentParameterMismatchException$ = exports.GlobalTableNotFoundException$ = exports.GlobalTableAlreadyExistsException$ = exports.ExportNotFoundException$ = exports.ExportConflictException$ = exports.DuplicateItemException$ = exports.ContinuousBackupsUnavailableException$ = exports.ConditionalCheckFailedException$ = exports.BackupNotFoundException$ = exports.BackupInUseException$ = exports.DynamoDBServiceException$ = void 0;
exports.DescribeExportInput$ = exports.DescribeEndpointsResponse$ = exports.DescribeEndpointsRequest$ = exports.DescribeContributorInsightsOutput$ = exports.DescribeContributorInsightsInput$ = exports.DescribeContinuousBackupsOutput$ = exports.DescribeContinuousBackupsInput$ = exports.DescribeBackupOutput$ = exports.DescribeBackupInput$ = exports.DeleteTableOutput$ = exports.DeleteTableInput$ = exports.DeleteResourcePolicyOutput$ = exports.DeleteResourcePolicyInput$ = exports.DeleteRequest$ = exports.DeleteReplicationGroupMemberAction$ = exports.DeleteReplicaAction$ = exports.DeleteItemOutput$ = exports.DeleteItemInput$ = exports.DeleteGlobalTableWitnessGroupMemberAction$ = exports.DeleteGlobalSecondaryIndexAction$ = exports.DeleteBackupOutput$ = exports.DeleteBackupInput$ = exports.Delete$ = exports.CsvOptions$ = exports.CreateTableOutput$ = exports.CreateTableInput$ = exports.CreateReplicationGroupMemberAction$ = exports.CreateReplicaAction$ = exports.CreateGlobalTableWitnessGroupMemberAction$ = exports.CreateGlobalTableOutput$ = exports.CreateGlobalTableInput$ = exports.CreateGlobalSecondaryIndexAction$ = exports.CreateBackupOutput$ = exports.CreateBackupInput$ = exports.ContributorInsightsSummary$ = exports.ContinuousBackupsDescription$ = exports.ConsumedCapacity$ = exports.ConditionCheck$ = exports.Condition$ = exports.Capacity$ = exports.CancellationReason$ = exports.BillingModeSummary$ = exports.BatchWriteItemOutput$ = exports.BatchWriteItemInput$ = exports.BatchStatementResponse$ = exports.BatchStatementRequest$ = exports.BatchStatementError$ = exports.BatchGetItemOutput$ = exports.BatchGetItemInput$ = exports.BatchExecuteStatementOutput$ = void 0;
exports.IncrementalExportSpecification$ = exports.ImportTableOutput$ = exports.ImportTableInput$ = exports.ImportTableDescription$ = exports.ImportSummary$ = exports.GlobalTableWitnessGroupUpdate$ = exports.GlobalTableWitnessDescription$ = exports.GlobalTableGlobalSecondaryIndexSettingsUpdate$ = exports.GlobalTableDescription$ = exports.GlobalTable$ = exports.GlobalSecondaryIndexWarmThroughputDescription$ = exports.GlobalSecondaryIndexUpdate$ = exports.GlobalSecondaryIndexInfo$ = exports.GlobalSecondaryIndexDescription$ = exports.GlobalSecondaryIndexAutoScalingUpdate$ = exports.GlobalSecondaryIndex$ = exports.GetResourcePolicyOutput$ = exports.GetResourcePolicyInput$ = exports.GetItemOutput$ = exports.GetItemInput$ = exports.Get$ = exports.FailureException$ = exports.ExportTableToPointInTimeOutput$ = exports.ExportTableToPointInTimeInput$ = exports.ExportSummary$ = exports.ExportDescription$ = exports.ExpectedAttributeValue$ = exports.ExecuteTransactionOutput$ = exports.ExecuteTransactionInput$ = exports.ExecuteStatementOutput$ = exports.ExecuteStatementInput$ = exports.Endpoint$ = exports.EnableKinesisStreamingConfiguration$ = exports.DescribeTimeToLiveOutput$ = exports.DescribeTimeToLiveInput$ = exports.DescribeTableReplicaAutoScalingOutput$ = exports.DescribeTableReplicaAutoScalingInput$ = exports.DescribeTableOutput$ = exports.DescribeTableInput$ = exports.DescribeLimitsOutput$ = exports.DescribeLimitsInput$ = exports.DescribeKinesisStreamingDestinationOutput$ = exports.DescribeKinesisStreamingDestinationInput$ = exports.DescribeImportOutput$ = exports.DescribeImportInput$ = exports.DescribeGlobalTableSettingsOutput$ = exports.DescribeGlobalTableSettingsInput$ = exports.DescribeGlobalTableOutput$ = exports.DescribeGlobalTableInput$ = exports.DescribeExportOutput$ = void 0;
exports.ReplicaGlobalSecondaryIndexDescription$ = exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate$ = exports.ReplicaGlobalSecondaryIndexAutoScalingDescription$ = exports.ReplicaGlobalSecondaryIndex$ = exports.ReplicaDescription$ = exports.ReplicaAutoScalingUpdate$ = exports.ReplicaAutoScalingDescription$ = exports.Replica$ = exports.QueryOutput$ = exports.QueryInput$ = exports.PutResourcePolicyOutput$ = exports.PutResourcePolicyInput$ = exports.PutRequest$ = exports.PutItemOutput$ = exports.PutItemInput$ = exports.Put$ = exports.ProvisionedThroughputOverride$ = exports.ProvisionedThroughputDescription$ = exports.ProvisionedThroughput$ = exports.Projection$ = exports.PointInTimeRecoverySpecification$ = exports.PointInTimeRecoveryDescription$ = exports.ParameterizedStatement$ = exports.OnDemandThroughputOverride$ = exports.OnDemandThroughput$ = exports.LocalSecondaryIndexInfo$ = exports.LocalSecondaryIndexDescription$ = exports.LocalSecondaryIndex$ = exports.ListTagsOfResourceOutput$ = exports.ListTagsOfResourceInput$ = exports.ListTablesOutput$ = exports.ListTablesInput$ = exports.ListImportsOutput$ = exports.ListImportsInput$ = exports.ListGlobalTablesOutput$ = exports.ListGlobalTablesInput$ = exports.ListExportsOutput$ = exports.ListExportsInput$ = exports.ListContributorInsightsOutput$ = exports.ListContributorInsightsInput$ = exports.ListBackupsOutput$ = exports.ListBackupsInput$ = exports.KinesisStreamingDestinationOutput$ = exports.KinesisStreamingDestinationInput$ = exports.KinesisDataStreamDestination$ = exports.KeySchemaElement$ = exports.KeysAndAttributes$ = exports.ItemResponse$ = exports.ItemCollectionMetrics$ = exports.InputFormatOptions$ = void 0;
exports.UpdateKinesisStreamingDestinationInput$ = exports.UpdateKinesisStreamingConfiguration$ = exports.UpdateItemOutput$ = exports.UpdateItemInput$ = exports.UpdateGlobalTableSettingsOutput$ = exports.UpdateGlobalTableSettingsInput$ = exports.UpdateGlobalTableOutput$ = exports.UpdateGlobalTableInput$ = exports.UpdateGlobalSecondaryIndexAction$ = exports.UpdateContributorInsightsOutput$ = exports.UpdateContributorInsightsInput$ = exports.UpdateContinuousBackupsOutput$ = exports.UpdateContinuousBackupsInput$ = exports.Update$ = exports.UntagResourceInput$ = exports.TransactWriteItemsOutput$ = exports.TransactWriteItemsInput$ = exports.TransactWriteItem$ = exports.TransactGetItemsOutput$ = exports.TransactGetItemsInput$ = exports.TransactGetItem$ = exports.TimeToLiveSpecification$ = exports.TimeToLiveDescription$ = exports.ThrottlingReason$ = exports.TagResourceInput$ = exports.Tag$ = exports.TableWarmThroughputDescription$ = exports.TableDescription$ = exports.TableCreationParameters$ = exports.TableClassSummary$ = exports.TableAutoScalingDescription$ = exports.StreamSpecification$ = exports.SSESpecification$ = exports.SSEDescription$ = exports.SourceTableFeatureDetails$ = exports.SourceTableDetails$ = exports.ScanOutput$ = exports.ScanInput$ = exports.S3BucketSource$ = exports.RestoreTableToPointInTimeOutput$ = exports.RestoreTableToPointInTimeInput$ = exports.RestoreTableFromBackupOutput$ = exports.RestoreTableFromBackupInput$ = exports.RestoreSummary$ = exports.ReplicaUpdate$ = exports.ReplicationGroupUpdate$ = exports.ReplicaSettingsUpdate$ = exports.ReplicaSettingsDescription$ = exports.ReplicaGlobalSecondaryIndexSettingsUpdate$ = exports.ReplicaGlobalSecondaryIndexSettingsDescription$ = void 0;
exports.PutItem$ = exports.ListTagsOfResource$ = exports.ListTables$ = exports.ListImports$ = exports.ListGlobalTables$ = exports.ListExports$ = exports.ListContributorInsights$ = exports.ListBackups$ = exports.ImportTable$ = exports.GetResourcePolicy$ = exports.GetItem$ = exports.ExportTableToPointInTime$ = exports.ExecuteTransaction$ = exports.ExecuteStatement$ = exports.EnableKinesisStreamingDestination$ = exports.DisableKinesisStreamingDestination$ = exports.DescribeTimeToLive$ = exports.DescribeTableReplicaAutoScaling$ = exports.DescribeTable$ = exports.DescribeLimits$ = exports.DescribeKinesisStreamingDestination$ = exports.DescribeImport$ = exports.DescribeGlobalTableSettings$ = exports.DescribeGlobalTable$ = exports.DescribeExport$ = exports.DescribeEndpoints$ = exports.DescribeContributorInsights$ = exports.DescribeContinuousBackups$ = exports.DescribeBackup$ = exports.DeleteTable$ = exports.DeleteResourcePolicy$ = exports.DeleteItem$ = exports.DeleteBackup$ = exports.CreateTable$ = exports.CreateGlobalTable$ = exports.CreateBackup$ = exports.BatchWriteItem$ = exports.BatchGetItem$ = exports.BatchExecuteStatement$ = exports.AttributeValue$ = exports.WriteRequest$ = exports.WarmThroughput$ = exports.UpdateTimeToLiveOutput$ = exports.UpdateTimeToLiveInput$ = exports.UpdateTableReplicaAutoScalingOutput$ = exports.UpdateTableReplicaAutoScalingInput$ = exports.UpdateTableOutput$ = exports.UpdateTableInput$ = exports.UpdateReplicationGroupMemberAction$ = exports.UpdateKinesisStreamingDestinationOutput$ = void 0;
exports.UpdateTimeToLive$ = exports.UpdateTableReplicaAutoScaling$ = exports.UpdateTable$ = exports.UpdateKinesisStreamingDestination$ = exports.UpdateItem$ = exports.UpdateGlobalTableSettings$ = exports.UpdateGlobalTable$ = exports.UpdateContributorInsights$ = exports.UpdateContinuousBackups$ = exports.UntagResource$ = exports.TransactWriteItems$ = exports.TransactGetItems$ = exports.TagResource$ = exports.Scan$ = exports.RestoreTableToPointInTime$ = exports.RestoreTableFromBackup$ = exports.Query$ = exports.PutResourcePolicy$ = void 0;
const _A = "Action";
const _ABA = "ArchivalBackupArn";
const _ACDTP = "ApproximateCreationDateTimePrecision";
const _AD = "AttributeDefinition";
const _ADT = "ArchivalDateTime";
const _ADt = "AttributeDefinitions";
const _AM = "AttributeMap";
const _AMRCU = "AccountMaxReadCapacityUnits";
const _AMWCU = "AccountMaxWriteCapacityUnits";
const _AN = "AttributeName";
const _AR = "ArchivalReason";
const _AS = "ArchivalSummary";
const _ASD = "AutoScalingDisabled";
const _ASPD = "AutoScalingPolicyDescription";
const _ASPDL = "AutoScalingPolicyDescriptionList";
const _ASPU = "AutoScalingPolicyUpdate";
const _ASRA = "AutoScalingRoleArn";
const _ASSD = "AutoScalingSettingsDescription";
const _ASSU = "AutoScalingSettingsUpdate";
const _ASTTSPCD = "AutoScalingTargetTrackingScalingPolicyConfigurationDescription";
const _ASTTSPCU = "AutoScalingTargetTrackingScalingPolicyConfigurationUpdate";
const _AT = "AttributeType";
const _ATG = "AttributesToGet";
const _AU = "AttributeUpdates";
const _AV = "AttributeValue";
const _AVL = "AttributeValueList";
const _AVU = "AttributeValueUpdate";
const _Ad = "Address";
const _At = "Attributes";
const _B = "Backfilling";
const _BA = "BackupArn";
const _BCDT = "BackupCreationDateTime";
const _BD = "BackupDescription";
const _BDa = "BackupDetails";
const _BEDT = "BackupExpiryDateTime";
const _BES = "BatchExecuteStatement";
const _BESI = "BatchExecuteStatementInput";
const _BESO = "BatchExecuteStatementOutput";
const _BGI = "BatchGetItem";
const _BGII = "BatchGetItemInput";
const _BGIO = "BatchGetItemOutput";
const _BGRM = "BatchGetResponseMap";
const _BGRMa = "BatchGetRequestMap";
const _BIUE = "BackupInUseException";
const _BM = "BillingMode";
const _BMO = "BillingModeOverride";
const _BMS = "BillingModeSummary";
const _BN = "BackupName";
const _BNFE = "BackupNotFoundException";
const _BOOL = "BOOL";
const _BS = "BackupStatus";
const _BSB = "BackupSizeBytes";
const _BSBi = "BilledSizeBytes";
const _BSE = "BatchStatementError";
const _BSR = "BatchStatementRequest";
const _BSRa = "BatchStatementResponse";
const _BS_ = "BS";
const _BSa = "BackupSummary";
const _BSac = "BackupSummaries";
const _BT = "BackupType";
const _BWI = "BatchWriteItem";
const _BWII = "BatchWriteItemInput";
const _BWIO = "BatchWriteItemOutput";
const _BWIRM = "BatchWriteItemRequestMap";
const _B_ = "B";
const _C = "Code";
const _CB = "CreateBackup";
const _CBD = "ContinuousBackupsDescription";
const _CBI = "CreateBackupInput";
const _CBO = "CreateBackupOutput";
const _CBS = "ContinuousBackupsStatus";
const _CBUE = "ContinuousBackupsUnavailableException";
const _CC = "ConsumedCapacity";
const _CCFE = "ConditionalCheckFailedException";
const _CCM = "ConsumedCapacityMultiple";
const _CCo = "ConditionCheck";
const _CDT = "CreationDateTime";
const _CE = "ConditionExpression";
const _CGSIA = "CreateGlobalSecondaryIndexAction";
const _CGT = "CreateGlobalTable";
const _CGTI = "CreateGlobalTableInput";
const _CGTO = "CreateGlobalTableOutput";
const _CGTWGMA = "CreateGlobalTableWitnessGroupMemberAction";
const _CIA = "ContributorInsightsAction";
const _CIM = "ContributorInsightsMode";
const _CIRL = "ContributorInsightsRuleList";
const _CIS = "ContributorInsightsSummary";
const _CISo = "ContributorInsightsStatus";
const _CISon = "ContributorInsightsSummaries";
const _CO = "ComparisonOperator";
const _COo = "ConditionalOperator";
const _COs = "CsvOptions";
const _CPIM = "CachePeriodInMinutes";
const _CR = "CancellationReasons";
const _CRA = "CreateReplicaAction";
const _CRGMA = "CreateReplicationGroupMemberAction";
const _CRL = "CancellationReasonList";
const _CRSRA = "ConfirmRemoveSelfResourceAccess";
const _CRT = "ClientRequestToken";
const _CRa = "CancellationReason";
const _CRo = "ConsistentRead";
const _CT = "ClientToken";
const _CTI = "CreateTableInput";
const _CTO = "CreateTableOutput";
const _CTr = "CreateTable";
const _CU = "CapacityUnits";
const _CWLGA = "CloudWatchLogGroupArn";
const _Ca = "Capacity";
const _Co = "Condition";
const _Cou = "Count";
const _Cr = "Create";
const _Cs = "Csv";
const _D = "Delimiter";
const _DB = "DeleteBackup";
const _DBI = "DeleteBackupInput";
const _DBIe = "DescribeBackupInput";
const _DBO = "DeleteBackupOutput";
const _DBOe = "DescribeBackupOutput";
const _DBe = "DescribeBackup";
const _DCB = "DescribeContinuousBackups";
const _DCBI = "DescribeContinuousBackupsInput";
const _DCBO = "DescribeContinuousBackupsOutput";
const _DCI = "DescribeContributorInsights";
const _DCII = "DescribeContributorInsightsInput";
const _DCIO = "DescribeContributorInsightsOutput";
const _DE = "DescribeEndpoints";
const _DEI = "DescribeExportInput";
const _DEO = "DescribeExportOutput";
const _DER = "DescribeEndpointsRequest";
const _DERe = "DescribeEndpointsResponse";
const _DEe = "DescribeExport";
const _DGSIA = "DeleteGlobalSecondaryIndexAction";
const _DGT = "DescribeGlobalTable";
const _DGTI = "DescribeGlobalTableInput";
const _DGTO = "DescribeGlobalTableOutput";
const _DGTS = "DescribeGlobalTableSettings";
const _DGTSI = "DescribeGlobalTableSettingsInput";
const _DGTSO = "DescribeGlobalTableSettingsOutput";
const _DGTWGMA = "DeleteGlobalTableWitnessGroupMemberAction";
const _DI = "DeleteItem";
const _DIE = "DuplicateItemException";
const _DII = "DeleteItemInput";
const _DIIe = "DescribeImportInput";
const _DIO = "DeleteItemOutput";
const _DIOe = "DescribeImportOutput";
const _DIe = "DescribeImport";
const _DKSD = "DescribeKinesisStreamingDestination";
const _DKSDI = "DescribeKinesisStreamingDestinationInput";
const _DKSDO = "DescribeKinesisStreamingDestinationOutput";
const _DKSDi = "DisableKinesisStreamingDestination";
const _DL = "DescribeLimits";
const _DLI = "DescribeLimitsInput";
const _DLO = "DescribeLimitsOutput";
const _DPE = "DeletionProtectionEnabled";
const _DR = "DeleteRequest";
const _DRA = "DeleteReplicaAction";
const _DRGMA = "DeleteReplicationGroupMemberAction";
const _DRP = "DeleteResourcePolicy";
const _DRPI = "DeleteResourcePolicyInput";
const _DRPO = "DeleteResourcePolicyOutput";
const _DS = "DestinationStatus";
const _DSD = "DestinationStatusDescription";
const _DSI = "DisableScaleIn";
const _DT = "DeleteTable";
const _DTI = "DeleteTableInput";
const _DTIe = "DescribeTableInput";
const _DTO = "DeleteTableOutput";
const _DTOe = "DescribeTableOutput";
const _DTRAS = "DescribeTableReplicaAutoScaling";
const _DTRASI = "DescribeTableReplicaAutoScalingInput";
const _DTRASO = "DescribeTableReplicaAutoScalingOutput";
const _DTTL = "DescribeTimeToLive";
const _DTTLI = "DescribeTimeToLiveInput";
const _DTTLO = "DescribeTimeToLiveOutput";
const _DTe = "DescribeTable";
const _De = "Delete";
const _E = "Error";
const _EA = "ExportArn";
const _EAM = "ExpectedAttributeMap";
const _EAN = "ExpressionAttributeNames";
const _EAV = "ExpressionAttributeValues";
const _EAVM = "ExpressionAttributeValueMap";
const _EAVx = "ExpectedAttributeValue";
const _EC = "ErrorCount";
const _ECE = "ExportConflictException";
const _ED = "ExportDescription";
const _EDx = "ExceptionDescription";
const _EF = "ExportFormat";
const _EFT = "ExportFromTime";
const _EKSC = "EnableKinesisStreamingConfiguration";
const _EKSD = "EnableKinesisStreamingDestination";
const _EM = "ExportManifest";
const _EN = "ExceptionName";
const _ENFE = "ExportNotFoundException";
const _ERDT = "EarliestRestorableDateTime";
const _ERI = "ExpectedRevisionId";
const _ES = "ExportStatus";
const _ESBA = "ExclusiveStartBackupArn";
const _ESGTN = "ExclusiveStartGlobalTableName";
const _ESI = "ExecuteStatementInput";
const _ESK = "ExclusiveStartKey";
const _ESO = "ExecuteStatementOutput";
const _ESTN = "ExclusiveStartTableName";
const _ESx = "ExportSummary";
const _ESxe = "ExecuteStatement";
const _ESxp = "ExportSummaries";
const _ET = "EndTime";
const _ETI = "ExecuteTransactionInput";
const _ETO = "ExecuteTransactionOutput";
const _ETT = "ExportToTime";
const _ETTPIT = "ExportTableToPointInTime";
const _ETTPITI = "ExportTableToPointInTimeInput";
const _ETTPITO = "ExportTableToPointInTimeOutput";
const _ETx = "ExportTime";
const _ETxe = "ExecuteTransaction";
const _ETxp = "ExportType";
const _EVT = "ExportViewType";
const _En = "Endpoints";
const _Ena = "Enabled";
const _End = "Endpoint";
const _Ex = "Expected";
const _Exi = "Exists";
const _FC = "FailureCode";
const _FCM = "FilterConditionMap";
const _FE = "FailureException";
const _FEi = "FilterExpression";
const _FM = "FailureMessage";
const _G = "Get";
const _GI = "GetItem";
const _GII = "GetItemInput";
const _GIO = "GetItemOutput";
const _GRP = "GetResourcePolicy";
const _GRPI = "GetResourcePolicyInput";
const _GRPO = "GetResourcePolicyOutput";
const _GSI = "GlobalSecondaryIndexes";
const _GSIASU = "GlobalSecondaryIndexAutoScalingUpdate";
const _GSIASUL = "GlobalSecondaryIndexAutoScalingUpdateList";
const _GSID = "GlobalSecondaryIndexDescription";
const _GSIDL = "GlobalSecondaryIndexDescriptionList";
const _GSII = "GlobalSecondaryIndexInfo";
const _GSIL = "GlobalSecondaryIndexList";
const _GSIO = "GlobalSecondaryIndexOverride";
const _GSIU = "GlobalSecondaryIndexUpdate";
const _GSIUL = "GlobalSecondaryIndexUpdateList";
const _GSIUl = "GlobalSecondaryIndexUpdates";
const _GSIWTD = "GlobalSecondaryIndexWarmThroughputDescription";
const _GSIl = "GlobalSecondaryIndex";
const _GT = "GlobalTable";
const _GTA = "GlobalTableArn";
const _GTAEE = "GlobalTableAlreadyExistsException";
const _GTBM = "GlobalTableBillingMode";
const _GTD = "GlobalTableDescription";
const _GTGSISU = "GlobalTableGlobalSecondaryIndexSettingsUpdate";
const _GTGSISUL = "GlobalTableGlobalSecondaryIndexSettingsUpdateList";
const _GTL = "GlobalTableList";
const _GTN = "GlobalTableName";
const _GTNFE = "GlobalTableNotFoundException";
const _GTPWCASSU = "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate";
const _GTPWCU = "GlobalTableProvisionedWriteCapacityUnits";
const _GTS = "GlobalTableStatus";
const _GTSA = "GlobalTableSourceArn";
const _GTSRM = "GlobalTableSettingsReplicationMode";
const _GTV = "GlobalTableVersion";
const _GTW = "GlobalTableWitnesses";
const _GTWD = "GlobalTableWitnessDescription";
const _GTWDL = "GlobalTableWitnessDescriptionList";
const _GTWGU = "GlobalTableWitnessGroupUpdate";
const _GTWGUL = "GlobalTableWitnessGroupUpdateList";
const _GTWU = "GlobalTableWitnessUpdates";
const _GTl = "GlobalTables";
const _HL = "HeaderList";
const _I = "Item";
const _IA = "ImportArn";
const _IAn = "IndexArn";
const _IC = "ItemCount";
const _ICE = "ImportConflictException";
const _ICK = "ItemCollectionKey";
const _ICKAM = "ItemCollectionKeyAttributeMap";
const _ICM = "ItemCollectionMetrics";
const _ICMM = "ItemCollectionMetricsMultiple";
const _ICMPT = "ItemCollectionMetricsPerTable";
const _ICSLEE = "ItemCollectionSizeLimitExceededException";
const _ICT = "InputCompressionType";
const _IEDT = "InaccessibleEncryptionDateTime";
const _IEE = "InvalidEndpointException";
const _IES = "IncrementalExportSpecification";
const _IETE = "InvalidExportTimeException";
const _IF = "InputFormat";
const _IFO = "InputFormatOptions";
const _IIC = "ImportedItemCount";
const _IL = "ItemList";
const _IN = "IndexName";
const _INFE = "ImportNotFoundException";
const _INFEn = "IndexNotFoundException";
const _IPME = "IdempotentParameterMismatchException";
const _IR = "ItemResponse";
const _IRL = "ItemResponseList";
const _IRTE = "InvalidRestoreTimeException";
const _IS = "IndexStatus";
const _ISB = "IndexSizeBytes";
const _ISE = "InternalServerError";
const _ISL = "ImportSummaryList";
const _ISm = "ImportSummary";
const _ISmp = "ImportStatus";
const _IT = "ImportTable";
const _ITD = "ImportTableDescription";
const _ITI = "ImportTableInput";
const _ITO = "ImportTableOutput";
const _It = "Items";
const _K = "Key";
const _KAA = "KeysAndAttributes";
const _KC = "KeyConditions";
const _KCE = "KeyConditionExpression";
const _KDSD = "KinesisDataStreamDestinations";
const _KDSDi = "KinesisDataStreamDestination";
const _KL = "KeyList";
const _KMSMKA = "KMSMasterKeyArn";
const _KMSMKI = "KMSMasterKeyId";
const _KS = "KeySchema";
const _KSDI = "KinesisStreamingDestinationInput";
const _KSDO = "KinesisStreamingDestinationOutput";
const _KSE = "KeySchemaElement";
const _KT = "KeyType";
const _Ke = "Keys";
const _L = "Limit";
const _LAV = "ListAttributeValue";
const _LB = "ListBackups";
const _LBI = "ListBackupsInput";
const _LBO = "ListBackupsOutput";
const _LCI = "ListContributorInsights";
const _LCII = "ListContributorInsightsInput";
const _LCIO = "ListContributorInsightsOutput";
const _LDDT = "LastDecreaseDateTime";
const _LE = "ListExports";
const _LEBA = "LastEvaluatedBackupArn";
const _LEE = "LimitExceededException";
const _LEGTN = "LastEvaluatedGlobalTableName";
const _LEI = "ListExportsInput";
const _LEK = "LastEvaluatedKey";
const _LEO = "ListExportsOutput";
const _LETN = "LastEvaluatedTableName";
const _LGT = "ListGlobalTables";
const _LGTI = "ListGlobalTablesInput";
const _LGTO = "ListGlobalTablesOutput";
const _LI = "ListImports";
const _LIDT = "LastIncreaseDateTime";
const _LII = "ListImportsInput";
const _LIO = "ListImportsOutput";
const _LRDT = "LatestRestorableDateTime";
const _LSA = "LatestStreamArn";
const _LSI = "LocalSecondaryIndexes";
const _LSID = "LocalSecondaryIndexDescription";
const _LSIDL = "LocalSecondaryIndexDescriptionList";
const _LSII = "LocalSecondaryIndexInfo";
const _LSIL = "LocalSecondaryIndexList";
const _LSIO = "LocalSecondaryIndexOverride";
const _LSIo = "LocalSecondaryIndex";
const _LSL = "LatestStreamLabel";
const _LT = "ListTables";
const _LTI = "ListTablesInput";
const _LTO = "ListTablesOutput";
const _LTOR = "ListTagsOfResource";
const _LTORI = "ListTagsOfResourceInput";
const _LTORO = "ListTagsOfResourceOutput";
const _LUDT = "LastUpdateDateTime";
const _LUTPPRDT = "LastUpdateToPayPerRequestDateTime";
const _L_ = "L";
const _M = "Message";
const _MAV = "MapAttributeValue";
const _MR = "MaxResults";
const _MRC = "MultiRegionConsistency";
const _MRRU = "MaxReadRequestUnits";
const _MU = "MinimumUnits";
const _MUa = "MaximumUnits";
const _MWRU = "MaxWriteRequestUnits";
const _M_ = "M";
const _N = "N";
const _NKA = "NonKeyAttributes";
const _NODT = "NumberOfDecreasesToday";
const _NS = "NS";
const _NT = "NextToken";
const _NULL = "NULL";
const _ODT = "OnDemandThroughput";
const _ODTO = "OnDemandThroughputOverride";
const _P = "Parameters";
const _PE = "ProjectionExpression";
const _PI = "PutItem";
const _PIC = "ProcessedItemCount";
const _PII = "PutItemInput";
const _PIIAM = "PutItemInputAttributeMap";
const _PIO = "PutItemOutput";
const _PITRD = "PointInTimeRecoveryDescription";
const _PITRE = "PointInTimeRecoveryEnabled";
const _PITRS = "PointInTimeRecoveryStatus";
const _PITRSo = "PointInTimeRecoverySpecification";
const _PITRUE = "PointInTimeRecoveryUnavailableException";
const _PN = "PolicyName";
const _PNFE = "PolicyNotFoundException";
const _PQLBR = "PartiQLBatchRequest";
const _PQLBRa = "PartiQLBatchResponse";
const _PR = "PutRequest";
const _PRCASS = "ProvisionedReadCapacityAutoScalingSettings";
const _PRCASSU = "ProvisionedReadCapacityAutoScalingSettingsUpdate";
const _PRCASU = "ProvisionedReadCapacityAutoScalingUpdate";
const _PRCU = "ProvisionedReadCapacityUnits";
const _PRP = "PutResourcePolicy";
const _PRPI = "PutResourcePolicyInput";
const _PRPO = "PutResourcePolicyOutput";
const _PS = "PageSize";
const _PSB = "ProcessedSizeBytes";
const _PSP = "PreparedStatementParameters";
const _PSa = "ParameterizedStatement";
const _PSar = "ParameterizedStatements";
const _PT = "ProvisionedThroughput";
const _PTD = "ProvisionedThroughputDescription";
const _PTEE = "ProvisionedThroughputExceededException";
const _PTO = "ProvisionedThroughputOverride";
const _PTr = "ProjectionType";
const _PWCASS = "ProvisionedWriteCapacityAutoScalingSettings";
const _PWCASSU = "ProvisionedWriteCapacityAutoScalingSettingsUpdate";
const _PWCASU = "ProvisionedWriteCapacityAutoScalingUpdate";
const _PWCU = "ProvisionedWriteCapacityUnits";
const _Po = "Policy";
const _Pr = "Projection";
const _Pu = "Put";
const _Q = "Query";
const _QF = "QueryFilter";
const _QI = "QueryInput";
const _QO = "QueryOutput";
const _R = "Responses";
const _RA = "ResourceArn";
const _RAEE = "ReplicaAlreadyExistsException";
const _RASD = "ReplicaAutoScalingDescription";
const _RASDL = "ReplicaAutoScalingDescriptionList";
const _RASU = "ReplicaAutoScalingUpdate";
const _RASUL = "ReplicaAutoScalingUpdateList";
const _RBMS = "ReplicaBillingModeSummary";
const _RCC = "ReturnConsumedCapacity";
const _RCU = "ReadCapacityUnits";
const _RD = "ReplicaDescription";
const _RDL = "ReplicaDescriptionList";
const _RDT = "RestoreDateTime";
const _RG = "ReplicationGroup";
const _RGSI = "ReplicaGlobalSecondaryIndex";
const _RGSIASD = "ReplicaGlobalSecondaryIndexAutoScalingDescription";
const _RGSIASDL = "ReplicaGlobalSecondaryIndexAutoScalingDescriptionList";
const _RGSIASU = "ReplicaGlobalSecondaryIndexAutoScalingUpdate";
const _RGSIASUL = "ReplicaGlobalSecondaryIndexAutoScalingUpdateList";
const _RGSID = "ReplicaGlobalSecondaryIndexDescription";
const _RGSIDL = "ReplicaGlobalSecondaryIndexDescriptionList";
const _RGSIL = "ReplicaGlobalSecondaryIndexList";
const _RGSIS = "ReplicaGlobalSecondaryIndexSettings";
const _RGSISD = "ReplicaGlobalSecondaryIndexSettingsDescription";
const _RGSISDL = "ReplicaGlobalSecondaryIndexSettingsDescriptionList";
const _RGSISU = "ReplicaGlobalSecondaryIndexSettingsUpdate";
const _RGSISUL = "ReplicaGlobalSecondaryIndexSettingsUpdateList";
const _RGSIU = "ReplicaGlobalSecondaryIndexUpdates";
const _RGU = "ReplicationGroupUpdate";
const _RGUL = "ReplicationGroupUpdateList";
const _RI = "RequestItems";
const _RICM = "ReturnItemCollectionMetrics";
const _RIDT = "ReplicaInaccessibleDateTime";
const _RIP = "RestoreInProgress";
const _RIUE = "ResourceInUseException";
const _RIe = "RevisionId";
const _RL = "ReplicaList";
const _RLE = "RequestLimitExceeded";
const _RN = "RegionName";
const _RNFE = "ReplicaNotFoundException";
const _RNFEe = "ResourceNotFoundException";
const _RP = "ResourcePolicy";
const _RPID = "RecoveryPeriodInDays";
const _RPRCASS = "ReplicaProvisionedReadCapacityAutoScalingSettings";
const _RPRCASSU = "ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate";
const _RPRCASU = "ReplicaProvisionedReadCapacityAutoScalingUpdate";
const _RPRCU = "ReplicaProvisionedReadCapacityUnits";
const _RPWCASS = "ReplicaProvisionedWriteCapacityAutoScalingSettings";
const _RPWCU = "ReplicaProvisionedWriteCapacityUnits";
const _RS = "ReplicaSettings";
const _RSD = "ReplicaStatusDescription";
const _RSDL = "ReplicaSettingsDescriptionList";
const _RSDe = "ReplicaSettingsDescription";
const _RSPP = "ReplicaStatusPercentProgress";
const _RSU = "ReplicaSettingsUpdate";
const _RSUL = "ReplicaSettingsUpdateList";
const _RSe = "ReplicaStatus";
const _RSes = "RestoreSummary";
const _RTC = "ReplicaTableClass";
const _RTCS = "ReplicaTableClassSummary";
const _RTFB = "RestoreTableFromBackup";
const _RTFBI = "RestoreTableFromBackupInput";
const _RTFBO = "RestoreTableFromBackupOutput";
const _RTTPIT = "RestoreTableToPointInTime";
const _RTTPITI = "RestoreTableToPointInTimeInput";
const _RTTPITO = "RestoreTableToPointInTimeOutput";
const _RU = "ReplicaUpdate";
const _RUL = "ReplicaUpdateList";
const _RUPS = "ReadUnitsPerSecond";
const _RUe = "ReplicaUpdates";
const _RV = "ReturnValues";
const _RVOCCF = "ReturnValuesOnConditionCheckFailure";
const _RWCE = "ReplicatedWriteConflictException";
const _Re = "Replica";
const _Rep = "Replicas";
const _S = "Statements";
const _SA = "StreamArn";
const _SB = "S3Bucket";
const _SBA = "SourceBackupArn";
const _SBO = "S3BucketOwner";
const _SBS = "S3BucketSource";
const _SC = "ScannedCount";
const _SD = "StreamDescription";
const _SE = "StreamEnabled";
const _SERGB = "SizeEstimateRangeGB";
const _SF = "ScanFilter";
const _SI = "ScanInput";
const _SIC = "ScaleInCooldown";
const _SICM = "SecondaryIndexesCapacityMap";
const _SIF = "ScanIndexForward";
const _SKP = "S3KeyPrefix";
const _SO = "ScanOutput";
const _SOC = "ScaleOutCooldown";
const _SP = "ScalingPolicies";
const _SPU = "ScalingPolicyUpdate";
const _SPr = "S3Prefix";
const _SS = "StreamSpecification";
const _SSA = "S3SseAlgorithm";
const _SSED = "SSEDescription";
const _SSES = "SSESpecification";
const _SSESO = "SSESpecificationOverride";
const _SSET = "SSEType";
const _SSKKI = "S3SseKmsKeyId";
const _SS_ = "SS";
const _ST = "StartTime";
const _STA = "SourceTableArn";
const _STD = "SourceTableDetails";
const _STFD = "SourceTableFeatureDetails";
const _STN = "SourceTableName";
const _SVT = "StreamViewType";
const _S_ = "S";
const _Sc = "Scan";
const _Se = "Select";
const _Seg = "Segment";
const _St = "Statement";
const _Sta = "Status";
const _T = "Table";
const _TA = "TableArn";
const _TAEE = "TableAlreadyExistsException";
const _TASD = "TableAutoScalingDescription";
const _TC = "TableClass";
const _TCDT = "TableCreationDateTime";
const _TCE = "TransactionCanceledException";
const _TCEr = "TransactionConflictException";
const _TCO = "TableClassOverride";
const _TCP = "TableCreationParameters";
const _TCS = "TableClassSummary";
const _TD = "TableDescription";
const _TE = "ThrottlingException";
const _TGI = "TransactGetItem";
const _TGII = "TransactGetItemsInput";
const _TGIL = "TransactGetItemList";
const _TGIO = "TransactGetItemsOutput";
const _TGIr = "TransactGetItems";
const _TI = "TableId";
const _TIPE = "TransactionInProgressException";
const _TIUE = "TableInUseException";
const _TIr = "TransactItems";
const _TK = "TagKeys";
const _TL = "TagList";
const _TMRCU = "TableMaxReadCapacityUnits";
const _TMWCU = "TableMaxWriteCapacityUnits";
const _TN = "TableName";
const _TNFE = "TableNotFoundException";
const _TNa = "TableNames";
const _TR = "ThrottlingReasons";
const _TRI = "TagResourceInput";
const _TRL = "ThrottlingReasonList";
const _TRLB = "TimeRangeLowerBound";
const _TRUB = "TimeRangeUpperBound";
const _TRa = "TagResource";
const _TRh = "ThrottlingReason";
const _TS = "TransactStatements";
const _TSB = "TableSizeBytes";
const _TSa = "TableStatus";
const _TSo = "TotalSegments";
const _TTLD = "TimeToLiveDescription";
const _TTLS = "TimeToLiveStatus";
const _TTLSi = "TimeToLiveSpecification";
const _TTN = "TargetTableName";
const _TTSPC = "TargetTrackingScalingPolicyConfiguration";
const _TV = "TargetValue";
const _TWI = "TransactWriteItem";
const _TWII = "TransactWriteItemsInput";
const _TWIL = "TransactWriteItemList";
const _TWIO = "TransactWriteItemsOutput";
const _TWIr = "TransactWriteItems";
const _TWTD = "TableWarmThroughputDescription";
const _Ta = "Tags";
const _Tag = "Tag";
const _U = "Update";
const _UCB = "UpdateContinuousBackups";
const _UCBI = "UpdateContinuousBackupsInput";
const _UCBO = "UpdateContinuousBackupsOutput";
const _UCI = "UpdateContributorInsights";
const _UCII = "UpdateContributorInsightsInput";
const _UCIO = "UpdateContributorInsightsOutput";
const _UE = "UpdateExpression";
const _UGSIA = "UpdateGlobalSecondaryIndexAction";
const _UGT = "UpdateGlobalTable";
const _UGTI = "UpdateGlobalTableInput";
const _UGTO = "UpdateGlobalTableOutput";
const _UGTS = "UpdateGlobalTableSettings";
const _UGTSI = "UpdateGlobalTableSettingsInput";
const _UGTSO = "UpdateGlobalTableSettingsOutput";
const _UI = "UnprocessedItems";
const _UII = "UpdateItemInput";
const _UIO = "UpdateItemOutput";
const _UIp = "UpdateItem";
const _UK = "UnprocessedKeys";
const _UKSC = "UpdateKinesisStreamingConfiguration";
const _UKSD = "UpdateKinesisStreamingDestination";
const _UKSDI = "UpdateKinesisStreamingDestinationInput";
const _UKSDO = "UpdateKinesisStreamingDestinationOutput";
const _ULRT = "UseLatestRestorableTime";
const _UR = "UntagResource";
const _URGMA = "UpdateReplicationGroupMemberAction";
const _URI = "UntagResourceInput";
const _UT = "UpdateTable";
const _UTI = "UpdateTableInput";
const _UTO = "UpdateTableOutput";
const _UTRAS = "UpdateTableReplicaAutoScaling";
const _UTRASI = "UpdateTableReplicaAutoScalingInput";
const _UTRASO = "UpdateTableReplicaAutoScalingOutput";
const _UTTL = "UpdateTimeToLive";
const _UTTLI = "UpdateTimeToLiveInput";
const _UTTLO = "UpdateTimeToLiveOutput";
const _V = "Value";
const _WCU = "WriteCapacityUnits";
const _WR = "WriteRequest";
const _WRr = "WriteRequests";
const _WS = "WitnessStatus";
const _WT = "WarmThroughput";
const _WUPS = "WriteUnitsPerSecond";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _hH = "httpHeader";
const _m = "message";
const _r = "reason";
const _re = "resource";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.dynamodb";
const _se = "server";
const _tR = "throttlingReasons";
const _xacrsra = "x-amz-confirm-remove-self-resource-access";
const n0 = "com.amazonaws.dynamodb";
const schema_1 = require("@smithy/core/schema");
const DynamoDBServiceException_1 = require("../models/DynamoDBServiceException");
const errors_1 = require("../models/errors");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.DynamoDBServiceException$ = [-3, _s, "DynamoDBServiceException", 0, [], []];
_s_registry.registerError(exports.DynamoDBServiceException$, DynamoDBServiceException_1.DynamoDBServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.BackupInUseException$ = [-3, n0, _BIUE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.BackupInUseException$, errors_1.BackupInUseException);
exports.BackupNotFoundException$ = [-3, n0, _BNFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.BackupNotFoundException$, errors_1.BackupNotFoundException);
exports.ConditionalCheckFailedException$ = [-3, n0, _CCFE,
    { [_e]: _c },
    [_m, _I],
    [0, () => AttributeMap]
];
n0_registry.registerError(exports.ConditionalCheckFailedException$, errors_1.ConditionalCheckFailedException);
exports.ContinuousBackupsUnavailableException$ = [-3, n0, _CBUE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ContinuousBackupsUnavailableException$, errors_1.ContinuousBackupsUnavailableException);
exports.DuplicateItemException$ = [-3, n0, _DIE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.DuplicateItemException$, errors_1.DuplicateItemException);
exports.ExportConflictException$ = [-3, n0, _ECE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ExportConflictException$, errors_1.ExportConflictException);
exports.ExportNotFoundException$ = [-3, n0, _ENFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ExportNotFoundException$, errors_1.ExportNotFoundException);
exports.GlobalTableAlreadyExistsException$ = [-3, n0, _GTAEE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.GlobalTableAlreadyExistsException$, errors_1.GlobalTableAlreadyExistsException);
exports.GlobalTableNotFoundException$ = [-3, n0, _GTNFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.GlobalTableNotFoundException$, errors_1.GlobalTableNotFoundException);
exports.IdempotentParameterMismatchException$ = [-3, n0, _IPME,
    { [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.IdempotentParameterMismatchException$, errors_1.IdempotentParameterMismatchException);
exports.ImportConflictException$ = [-3, n0, _ICE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ImportConflictException$, errors_1.ImportConflictException);
exports.ImportNotFoundException$ = [-3, n0, _INFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ImportNotFoundException$, errors_1.ImportNotFoundException);
exports.IndexNotFoundException$ = [-3, n0, _INFEn,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.IndexNotFoundException$, errors_1.IndexNotFoundException);
exports.InternalServerError$ = [-3, n0, _ISE,
    { [_e]: _se },
    [_m],
    [0]
];
n0_registry.registerError(exports.InternalServerError$, errors_1.InternalServerError);
exports.InvalidEndpointException$ = [-3, n0, _IEE,
    { [_e]: _c, [_hE]: 421 },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidEndpointException$, errors_1.InvalidEndpointException);
exports.InvalidExportTimeException$ = [-3, n0, _IETE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidExportTimeException$, errors_1.InvalidExportTimeException);
exports.InvalidRestoreTimeException$ = [-3, n0, _IRTE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidRestoreTimeException$, errors_1.InvalidRestoreTimeException);
exports.ItemCollectionSizeLimitExceededException$ = [-3, n0, _ICSLEE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ItemCollectionSizeLimitExceededException$, errors_1.ItemCollectionSizeLimitExceededException);
exports.LimitExceededException$ = [-3, n0, _LEE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.LimitExceededException$, errors_1.LimitExceededException);
exports.PointInTimeRecoveryUnavailableException$ = [-3, n0, _PITRUE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.PointInTimeRecoveryUnavailableException$, errors_1.PointInTimeRecoveryUnavailableException);
exports.PolicyNotFoundException$ = [-3, n0, _PNFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.PolicyNotFoundException$, errors_1.PolicyNotFoundException);
exports.ProvisionedThroughputExceededException$ = [-3, n0, _PTEE,
    { [_e]: _c },
    [_m, _TR],
    [0, () => ThrottlingReasonList]
];
n0_registry.registerError(exports.ProvisionedThroughputExceededException$, errors_1.ProvisionedThroughputExceededException);
exports.ReplicaAlreadyExistsException$ = [-3, n0, _RAEE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ReplicaAlreadyExistsException$, errors_1.ReplicaAlreadyExistsException);
exports.ReplicaNotFoundException$ = [-3, n0, _RNFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ReplicaNotFoundException$, errors_1.ReplicaNotFoundException);
exports.ReplicatedWriteConflictException$ = [-3, n0, _RWCE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ReplicatedWriteConflictException$, errors_1.ReplicatedWriteConflictException);
exports.RequestLimitExceeded$ = [-3, n0, _RLE,
    { [_e]: _c },
    [_m, _TR],
    [0, () => ThrottlingReasonList]
];
n0_registry.registerError(exports.RequestLimitExceeded$, errors_1.RequestLimitExceeded);
exports.ResourceInUseException$ = [-3, n0, _RIUE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ResourceInUseException$, errors_1.ResourceInUseException);
exports.ResourceNotFoundException$ = [-3, n0, _RNFEe,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
exports.TableAlreadyExistsException$ = [-3, n0, _TAEE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.TableAlreadyExistsException$, errors_1.TableAlreadyExistsException);
exports.TableInUseException$ = [-3, n0, _TIUE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.TableInUseException$, errors_1.TableInUseException);
exports.TableNotFoundException$ = [-3, n0, _TNFE,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.TableNotFoundException$, errors_1.TableNotFoundException);
exports.ThrottlingException$ = [-3, n0, _TE,
    { [_aQE]: [`Throttling`, 400], [_e]: _c, [_hE]: 400 },
    [_m, _tR],
    [0, () => ThrottlingReasonList]
];
n0_registry.registerError(exports.ThrottlingException$, errors_1.ThrottlingException);
exports.TransactionCanceledException$ = [-3, n0, _TCE,
    { [_e]: _c },
    [_M, _CR],
    [0, () => CancellationReasonList]
];
n0_registry.registerError(exports.TransactionCanceledException$, errors_1.TransactionCanceledException);
exports.TransactionConflictException$ = [-3, n0, _TCEr,
    { [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.TransactionConflictException$, errors_1.TransactionConflictException);
exports.TransactionInProgressException$ = [-3, n0, _TIPE,
    { [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.TransactionInProgressException$, errors_1.TransactionInProgressException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
exports.ArchivalSummary$ = [3, n0, _AS,
    0,
    [_ADT, _AR, _ABA],
    [4, 0, 0]
];
exports.AttributeDefinition$ = [3, n0, _AD,
    0,
    [_AN, _AT],
    [0, 0], 2
];
exports.AttributeValueUpdate$ = [3, n0, _AVU,
    0,
    [_V, _A],
    [() => exports.AttributeValue$, 0]
];
exports.AutoScalingPolicyDescription$ = [3, n0, _ASPD,
    0,
    [_PN, _TTSPC],
    [0, () => exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription$]
];
exports.AutoScalingPolicyUpdate$ = [3, n0, _ASPU,
    0,
    [_TTSPC, _PN],
    [() => exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate$, 0], 1
];
exports.AutoScalingSettingsDescription$ = [3, n0, _ASSD,
    0,
    [_MU, _MUa, _ASD, _ASRA, _SP],
    [1, 1, 2, 0, () => AutoScalingPolicyDescriptionList]
];
exports.AutoScalingSettingsUpdate$ = [3, n0, _ASSU,
    0,
    [_MU, _MUa, _ASD, _ASRA, _SPU],
    [1, 1, 2, 0, () => exports.AutoScalingPolicyUpdate$]
];
exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription$ = [3, n0, _ASTTSPCD,
    0,
    [_TV, _DSI, _SIC, _SOC],
    [1, 2, 1, 1], 1
];
exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate$ = [3, n0, _ASTTSPCU,
    0,
    [_TV, _DSI, _SIC, _SOC],
    [1, 2, 1, 1], 1
];
exports.BackupDescription$ = [3, n0, _BD,
    0,
    [_BDa, _STD, _STFD],
    [() => exports.BackupDetails$, () => exports.SourceTableDetails$, () => exports.SourceTableFeatureDetails$]
];
exports.BackupDetails$ = [3, n0, _BDa,
    0,
    [_BA, _BN, _BS, _BT, _BCDT, _BSB, _BEDT],
    [0, 0, 0, 0, 4, 1, 4], 5
];
exports.BackupSummary$ = [3, n0, _BSa,
    0,
    [_TN, _TI, _TA, _BA, _BN, _BCDT, _BEDT, _BS, _BT, _BSB],
    [0, 0, 0, 0, 0, 4, 4, 0, 0, 1]
];
exports.BatchExecuteStatementInput$ = [3, n0, _BESI,
    0,
    [_S, _RCC],
    [() => PartiQLBatchRequest, 0], 1
];
exports.BatchExecuteStatementOutput$ = [3, n0, _BESO,
    0,
    [_R, _CC],
    [() => PartiQLBatchResponse, () => ConsumedCapacityMultiple]
];
exports.BatchGetItemInput$ = [3, n0, _BGII,
    0,
    [_RI, _RCC],
    [() => BatchGetRequestMap, 0], 1
];
exports.BatchGetItemOutput$ = [3, n0, _BGIO,
    0,
    [_R, _UK, _CC],
    [() => BatchGetResponseMap, () => BatchGetRequestMap, () => ConsumedCapacityMultiple]
];
exports.BatchStatementError$ = [3, n0, _BSE,
    0,
    [_C, _M, _I],
    [0, 0, () => AttributeMap]
];
exports.BatchStatementRequest$ = [3, n0, _BSR,
    0,
    [_St, _P, _CRo, _RVOCCF],
    [0, () => PreparedStatementParameters, 2, 0], 1
];
exports.BatchStatementResponse$ = [3, n0, _BSRa,
    0,
    [_E, _TN, _I],
    [() => exports.BatchStatementError$, 0, () => AttributeMap]
];
exports.BatchWriteItemInput$ = [3, n0, _BWII,
    0,
    [_RI, _RCC, _RICM],
    [() => BatchWriteItemRequestMap, 0, 0], 1
];
exports.BatchWriteItemOutput$ = [3, n0, _BWIO,
    0,
    [_UI, _ICM, _CC],
    [() => BatchWriteItemRequestMap, () => ItemCollectionMetricsPerTable, () => ConsumedCapacityMultiple]
];
exports.BillingModeSummary$ = [3, n0, _BMS,
    0,
    [_BM, _LUTPPRDT],
    [0, 4]
];
exports.CancellationReason$ = [3, n0, _CRa,
    0,
    [_I, _C, _M],
    [() => AttributeMap, 0, 0]
];
exports.Capacity$ = [3, n0, _Ca,
    0,
    [_RCU, _WCU, _CU],
    [1, 1, 1]
];
exports.Condition$ = [3, n0, _Co,
    0,
    [_CO, _AVL],
    [0, () => AttributeValueList], 1
];
exports.ConditionCheck$ = [3, n0, _CCo,
    0,
    [_K, _TN, _CE, _EAN, _EAV, _RVOCCF],
    [() => Key, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 3
];
exports.ConsumedCapacity$ = [3, n0, _CC,
    0,
    [_TN, _CU, _RCU, _WCU, _T, _LSI, _GSI],
    [0, 1, 1, 1, () => exports.Capacity$, () => SecondaryIndexesCapacityMap, () => SecondaryIndexesCapacityMap]
];
exports.ContinuousBackupsDescription$ = [3, n0, _CBD,
    0,
    [_CBS, _PITRD],
    [0, () => exports.PointInTimeRecoveryDescription$], 1
];
exports.ContributorInsightsSummary$ = [3, n0, _CIS,
    0,
    [_TN, _IN, _CISo, _CIM],
    [0, 0, 0, 0]
];
exports.CreateBackupInput$ = [3, n0, _CBI,
    0,
    [_TN, _BN],
    [0, 0], 2
];
exports.CreateBackupOutput$ = [3, n0, _CBO,
    0,
    [_BDa],
    [() => exports.BackupDetails$]
];
exports.CreateGlobalSecondaryIndexAction$ = [3, n0, _CGSIA,
    0,
    [_IN, _KS, _Pr, _PT, _ODT, _WT],
    [0, () => KeySchema, () => exports.Projection$, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.WarmThroughput$], 3
];
exports.CreateGlobalTableInput$ = [3, n0, _CGTI,
    0,
    [_GTN, _RG],
    [0, () => ReplicaList], 2
];
exports.CreateGlobalTableOutput$ = [3, n0, _CGTO,
    0,
    [_GTD],
    [() => exports.GlobalTableDescription$]
];
exports.CreateGlobalTableWitnessGroupMemberAction$ = [3, n0, _CGTWGMA,
    0,
    [_RN],
    [0], 1
];
exports.CreateReplicaAction$ = [3, n0, _CRA,
    0,
    [_RN],
    [0], 1
];
exports.CreateReplicationGroupMemberAction$ = [3, n0, _CRGMA,
    0,
    [_RN, _KMSMKI, _PTO, _ODTO, _GSI, _TCO],
    [0, 0, () => exports.ProvisionedThroughputOverride$, () => exports.OnDemandThroughputOverride$, () => ReplicaGlobalSecondaryIndexList, 0], 1
];
exports.CreateTableInput$ = [3, n0, _CTI,
    0,
    [_TN, _ADt, _KS, _LSI, _GSI, _BM, _PT, _SS, _SSES, _Ta, _TC, _DPE, _WT, _RP, _ODT, _GTSA, _GTSRM],
    [0, () => AttributeDefinitions, () => KeySchema, () => LocalSecondaryIndexList, () => GlobalSecondaryIndexList, 0, () => exports.ProvisionedThroughput$, () => exports.StreamSpecification$, () => exports.SSESpecification$, () => TagList, 0, 2, () => exports.WarmThroughput$, 0, () => exports.OnDemandThroughput$, 0, 0], 1
];
exports.CreateTableOutput$ = [3, n0, _CTO,
    0,
    [_TD],
    [() => exports.TableDescription$]
];
exports.CsvOptions$ = [3, n0, _COs,
    0,
    [_D, _HL],
    [0, 64 | 0]
];
exports.Delete$ = [3, n0, _De,
    0,
    [_K, _TN, _CE, _EAN, _EAV, _RVOCCF],
    [() => Key, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 2
];
exports.DeleteBackupInput$ = [3, n0, _DBI,
    0,
    [_BA],
    [0], 1
];
exports.DeleteBackupOutput$ = [3, n0, _DBO,
    0,
    [_BD],
    [() => exports.BackupDescription$]
];
exports.DeleteGlobalSecondaryIndexAction$ = [3, n0, _DGSIA,
    0,
    [_IN],
    [0], 1
];
exports.DeleteGlobalTableWitnessGroupMemberAction$ = [3, n0, _DGTWGMA,
    0,
    [_RN],
    [0], 1
];
exports.DeleteItemInput$ = [3, n0, _DII,
    0,
    [_TN, _K, _Ex, _COo, _RV, _RCC, _RICM, _CE, _EAN, _EAV, _RVOCCF],
    [0, () => Key, () => ExpectedAttributeMap, 0, 0, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 2
];
exports.DeleteItemOutput$ = [3, n0, _DIO,
    0,
    [_At, _CC, _ICM],
    [() => AttributeMap, () => exports.ConsumedCapacity$, () => exports.ItemCollectionMetrics$]
];
exports.DeleteReplicaAction$ = [3, n0, _DRA,
    0,
    [_RN],
    [0], 1
];
exports.DeleteReplicationGroupMemberAction$ = [3, n0, _DRGMA,
    0,
    [_RN],
    [0], 1
];
exports.DeleteRequest$ = [3, n0, _DR,
    0,
    [_K],
    [() => Key], 1
];
exports.DeleteResourcePolicyInput$ = [3, n0, _DRPI,
    0,
    [_RA, _ERI],
    [0, 0], 1
];
exports.DeleteResourcePolicyOutput$ = [3, n0, _DRPO,
    0,
    [_RIe],
    [0]
];
exports.DeleteTableInput$ = [3, n0, _DTI,
    0,
    [_TN],
    [0], 1
];
exports.DeleteTableOutput$ = [3, n0, _DTO,
    0,
    [_TD],
    [() => exports.TableDescription$]
];
exports.DescribeBackupInput$ = [3, n0, _DBIe,
    0,
    [_BA],
    [0], 1
];
exports.DescribeBackupOutput$ = [3, n0, _DBOe,
    0,
    [_BD],
    [() => exports.BackupDescription$]
];
exports.DescribeContinuousBackupsInput$ = [3, n0, _DCBI,
    0,
    [_TN],
    [0], 1
];
exports.DescribeContinuousBackupsOutput$ = [3, n0, _DCBO,
    0,
    [_CBD],
    [() => exports.ContinuousBackupsDescription$]
];
exports.DescribeContributorInsightsInput$ = [3, n0, _DCII,
    0,
    [_TN, _IN],
    [0, 0], 1
];
exports.DescribeContributorInsightsOutput$ = [3, n0, _DCIO,
    0,
    [_TN, _IN, _CIRL, _CISo, _LUDT, _FE, _CIM],
    [0, 0, 64 | 0, 0, 4, () => exports.FailureException$, 0]
];
exports.DescribeEndpointsRequest$ = [3, n0, _DER,
    0,
    [],
    []
];
exports.DescribeEndpointsResponse$ = [3, n0, _DERe,
    0,
    [_En],
    [() => Endpoints], 1
];
exports.DescribeExportInput$ = [3, n0, _DEI,
    0,
    [_EA],
    [0], 1
];
exports.DescribeExportOutput$ = [3, n0, _DEO,
    0,
    [_ED],
    [() => exports.ExportDescription$]
];
exports.DescribeGlobalTableInput$ = [3, n0, _DGTI,
    0,
    [_GTN],
    [0], 1
];
exports.DescribeGlobalTableOutput$ = [3, n0, _DGTO,
    0,
    [_GTD],
    [() => exports.GlobalTableDescription$]
];
exports.DescribeGlobalTableSettingsInput$ = [3, n0, _DGTSI,
    0,
    [_GTN],
    [0], 1
];
exports.DescribeGlobalTableSettingsOutput$ = [3, n0, _DGTSO,
    0,
    [_GTN, _RS],
    [0, () => ReplicaSettingsDescriptionList]
];
exports.DescribeImportInput$ = [3, n0, _DIIe,
    0,
    [_IA],
    [0], 1
];
exports.DescribeImportOutput$ = [3, n0, _DIOe,
    0,
    [_ITD],
    [() => exports.ImportTableDescription$], 1
];
exports.DescribeKinesisStreamingDestinationInput$ = [3, n0, _DKSDI,
    0,
    [_TN],
    [0], 1
];
exports.DescribeKinesisStreamingDestinationOutput$ = [3, n0, _DKSDO,
    0,
    [_TN, _KDSD],
    [0, () => KinesisDataStreamDestinations]
];
exports.DescribeLimitsInput$ = [3, n0, _DLI,
    0,
    [],
    []
];
exports.DescribeLimitsOutput$ = [3, n0, _DLO,
    0,
    [_AMRCU, _AMWCU, _TMRCU, _TMWCU],
    [1, 1, 1, 1]
];
exports.DescribeTableInput$ = [3, n0, _DTIe,
    0,
    [_TN],
    [0], 1
];
exports.DescribeTableOutput$ = [3, n0, _DTOe,
    0,
    [_T],
    [() => exports.TableDescription$]
];
exports.DescribeTableReplicaAutoScalingInput$ = [3, n0, _DTRASI,
    0,
    [_TN],
    [0], 1
];
exports.DescribeTableReplicaAutoScalingOutput$ = [3, n0, _DTRASO,
    0,
    [_TASD],
    [() => exports.TableAutoScalingDescription$]
];
exports.DescribeTimeToLiveInput$ = [3, n0, _DTTLI,
    0,
    [_TN],
    [0], 1
];
exports.DescribeTimeToLiveOutput$ = [3, n0, _DTTLO,
    0,
    [_TTLD],
    [() => exports.TimeToLiveDescription$]
];
exports.EnableKinesisStreamingConfiguration$ = [3, n0, _EKSC,
    0,
    [_ACDTP],
    [0]
];
exports.Endpoint$ = [3, n0, _End,
    0,
    [_Ad, _CPIM],
    [0, 1], 2
];
exports.ExecuteStatementInput$ = [3, n0, _ESI,
    0,
    [_St, _P, _CRo, _NT, _RCC, _L, _RVOCCF],
    [0, () => PreparedStatementParameters, 2, 0, 0, 1, 0], 1
];
exports.ExecuteStatementOutput$ = [3, n0, _ESO,
    0,
    [_It, _NT, _CC, _LEK],
    [() => ItemList, 0, () => exports.ConsumedCapacity$, () => Key]
];
exports.ExecuteTransactionInput$ = [3, n0, _ETI,
    0,
    [_TS, _CRT, _RCC],
    [() => ParameterizedStatements, [0, 4], 0], 1
];
exports.ExecuteTransactionOutput$ = [3, n0, _ETO,
    0,
    [_R, _CC],
    [() => ItemResponseList, () => ConsumedCapacityMultiple]
];
exports.ExpectedAttributeValue$ = [3, n0, _EAVx,
    0,
    [_V, _Exi, _CO, _AVL],
    [() => exports.AttributeValue$, 2, 0, () => AttributeValueList]
];
exports.ExportDescription$ = [3, n0, _ED,
    0,
    [_EA, _ES, _ST, _ET, _EM, _TA, _TI, _ETx, _CT, _SB, _SBO, _SPr, _SSA, _SSKKI, _FC, _FM, _EF, _BSBi, _IC, _ETxp, _IES],
    [0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, () => exports.IncrementalExportSpecification$]
];
exports.ExportSummary$ = [3, n0, _ESx,
    0,
    [_EA, _ES, _ETxp],
    [0, 0, 0]
];
exports.ExportTableToPointInTimeInput$ = [3, n0, _ETTPITI,
    0,
    [_TA, _SB, _ETx, _CT, _SBO, _SPr, _SSA, _SSKKI, _EF, _ETxp, _IES],
    [0, 0, 4, [0, 4], 0, 0, 0, 0, 0, 0, () => exports.IncrementalExportSpecification$], 2
];
exports.ExportTableToPointInTimeOutput$ = [3, n0, _ETTPITO,
    0,
    [_ED],
    [() => exports.ExportDescription$]
];
exports.FailureException$ = [3, n0, _FE,
    0,
    [_EN, _EDx],
    [0, 0]
];
exports.Get$ = [3, n0, _G,
    0,
    [_K, _TN, _PE, _EAN],
    [() => Key, 0, 0, 128 | 0], 2
];
exports.GetItemInput$ = [3, n0, _GII,
    0,
    [_TN, _K, _ATG, _CRo, _RCC, _PE, _EAN],
    [0, () => Key, 64 | 0, 2, 0, 0, 128 | 0], 2
];
exports.GetItemOutput$ = [3, n0, _GIO,
    0,
    [_I, _CC],
    [() => AttributeMap, () => exports.ConsumedCapacity$]
];
exports.GetResourcePolicyInput$ = [3, n0, _GRPI,
    0,
    [_RA],
    [0], 1
];
exports.GetResourcePolicyOutput$ = [3, n0, _GRPO,
    0,
    [_Po, _RIe],
    [0, 0]
];
exports.GlobalSecondaryIndex$ = [3, n0, _GSIl,
    0,
    [_IN, _KS, _Pr, _PT, _ODT, _WT],
    [0, () => KeySchema, () => exports.Projection$, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.WarmThroughput$], 3
];
exports.GlobalSecondaryIndexAutoScalingUpdate$ = [3, n0, _GSIASU,
    0,
    [_IN, _PWCASU],
    [0, () => exports.AutoScalingSettingsUpdate$]
];
exports.GlobalSecondaryIndexDescription$ = [3, n0, _GSID,
    0,
    [_IN, _KS, _Pr, _IS, _B, _PT, _ISB, _IC, _IAn, _ODT, _WT],
    [0, () => KeySchema, () => exports.Projection$, 0, 2, () => exports.ProvisionedThroughputDescription$, 1, 1, 0, () => exports.OnDemandThroughput$, () => exports.GlobalSecondaryIndexWarmThroughputDescription$]
];
exports.GlobalSecondaryIndexInfo$ = [3, n0, _GSII,
    0,
    [_IN, _KS, _Pr, _PT, _ODT],
    [0, () => KeySchema, () => exports.Projection$, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$]
];
exports.GlobalSecondaryIndexUpdate$ = [3, n0, _GSIU,
    0,
    [_U, _Cr, _De],
    [() => exports.UpdateGlobalSecondaryIndexAction$, () => exports.CreateGlobalSecondaryIndexAction$, () => exports.DeleteGlobalSecondaryIndexAction$]
];
exports.GlobalSecondaryIndexWarmThroughputDescription$ = [3, n0, _GSIWTD,
    0,
    [_RUPS, _WUPS, _Sta],
    [1, 1, 0]
];
exports.GlobalTable$ = [3, n0, _GT,
    0,
    [_GTN, _RG],
    [0, () => ReplicaList]
];
exports.GlobalTableDescription$ = [3, n0, _GTD,
    0,
    [_RG, _GTA, _CDT, _GTS, _GTN],
    [() => ReplicaDescriptionList, 0, 4, 0, 0]
];
exports.GlobalTableGlobalSecondaryIndexSettingsUpdate$ = [3, n0, _GTGSISU,
    0,
    [_IN, _PWCU, _PWCASSU],
    [0, 1, () => exports.AutoScalingSettingsUpdate$], 1
];
exports.GlobalTableWitnessDescription$ = [3, n0, _GTWD,
    0,
    [_RN, _WS],
    [0, 0]
];
exports.GlobalTableWitnessGroupUpdate$ = [3, n0, _GTWGU,
    0,
    [_Cr, _De],
    [() => exports.CreateGlobalTableWitnessGroupMemberAction$, () => exports.DeleteGlobalTableWitnessGroupMemberAction$]
];
exports.ImportSummary$ = [3, n0, _ISm,
    0,
    [_IA, _ISmp, _TA, _SBS, _CWLGA, _IF, _ST, _ET],
    [0, 0, 0, () => exports.S3BucketSource$, 0, 0, 4, 4]
];
exports.ImportTableDescription$ = [3, n0, _ITD,
    0,
    [_IA, _ISmp, _TA, _TI, _CT, _SBS, _EC, _CWLGA, _IF, _IFO, _ICT, _TCP, _ST, _ET, _PSB, _PIC, _IIC, _FC, _FM],
    [0, 0, 0, 0, 0, () => exports.S3BucketSource$, 1, 0, 0, () => exports.InputFormatOptions$, 0, () => exports.TableCreationParameters$, 4, 4, 1, 1, 1, 0, 0]
];
exports.ImportTableInput$ = [3, n0, _ITI,
    0,
    [_SBS, _IF, _TCP, _CT, _IFO, _ICT],
    [() => exports.S3BucketSource$, 0, () => exports.TableCreationParameters$, [0, 4], () => exports.InputFormatOptions$, 0], 3
];
exports.ImportTableOutput$ = [3, n0, _ITO,
    0,
    [_ITD],
    [() => exports.ImportTableDescription$], 1
];
exports.IncrementalExportSpecification$ = [3, n0, _IES,
    0,
    [_EFT, _ETT, _EVT],
    [4, 4, 0]
];
exports.InputFormatOptions$ = [3, n0, _IFO,
    0,
    [_Cs],
    [() => exports.CsvOptions$]
];
exports.ItemCollectionMetrics$ = [3, n0, _ICM,
    0,
    [_ICK, _SERGB],
    [() => ItemCollectionKeyAttributeMap, 64 | 1]
];
exports.ItemResponse$ = [3, n0, _IR,
    0,
    [_I],
    [() => AttributeMap]
];
exports.KeysAndAttributes$ = [3, n0, _KAA,
    0,
    [_Ke, _ATG, _CRo, _PE, _EAN],
    [() => KeyList, 64 | 0, 2, 0, 128 | 0], 1
];
exports.KeySchemaElement$ = [3, n0, _KSE,
    0,
    [_AN, _KT],
    [0, 0], 2
];
exports.KinesisDataStreamDestination$ = [3, n0, _KDSDi,
    0,
    [_SA, _DS, _DSD, _ACDTP],
    [0, 0, 0, 0]
];
exports.KinesisStreamingDestinationInput$ = [3, n0, _KSDI,
    0,
    [_TN, _SA, _EKSC],
    [0, 0, () => exports.EnableKinesisStreamingConfiguration$], 2
];
exports.KinesisStreamingDestinationOutput$ = [3, n0, _KSDO,
    0,
    [_TN, _SA, _DS, _EKSC],
    [0, 0, 0, () => exports.EnableKinesisStreamingConfiguration$]
];
exports.ListBackupsInput$ = [3, n0, _LBI,
    0,
    [_TN, _L, _TRLB, _TRUB, _ESBA, _BT],
    [0, 1, 4, 4, 0, 0]
];
exports.ListBackupsOutput$ = [3, n0, _LBO,
    0,
    [_BSac, _LEBA],
    [() => BackupSummaries, 0]
];
exports.ListContributorInsightsInput$ = [3, n0, _LCII,
    0,
    [_TN, _NT, _MR],
    [0, 0, 1]
];
exports.ListContributorInsightsOutput$ = [3, n0, _LCIO,
    0,
    [_CISon, _NT],
    [() => ContributorInsightsSummaries, 0]
];
exports.ListExportsInput$ = [3, n0, _LEI,
    0,
    [_TA, _MR, _NT],
    [0, 1, 0]
];
exports.ListExportsOutput$ = [3, n0, _LEO,
    0,
    [_ESxp, _NT],
    [() => ExportSummaries, 0]
];
exports.ListGlobalTablesInput$ = [3, n0, _LGTI,
    0,
    [_ESGTN, _L, _RN],
    [0, 1, 0]
];
exports.ListGlobalTablesOutput$ = [3, n0, _LGTO,
    0,
    [_GTl, _LEGTN],
    [() => GlobalTableList, 0]
];
exports.ListImportsInput$ = [3, n0, _LII,
    0,
    [_TA, _PS, _NT],
    [0, 1, 0]
];
exports.ListImportsOutput$ = [3, n0, _LIO,
    0,
    [_ISL, _NT],
    [() => ImportSummaryList, 0]
];
exports.ListTablesInput$ = [3, n0, _LTI,
    0,
    [_ESTN, _L],
    [0, 1]
];
exports.ListTablesOutput$ = [3, n0, _LTO,
    0,
    [_TNa, _LETN],
    [64 | 0, 0]
];
exports.ListTagsOfResourceInput$ = [3, n0, _LTORI,
    0,
    [_RA, _NT],
    [0, 0], 1
];
exports.ListTagsOfResourceOutput$ = [3, n0, _LTORO,
    0,
    [_Ta, _NT],
    [() => TagList, 0]
];
exports.LocalSecondaryIndex$ = [3, n0, _LSIo,
    0,
    [_IN, _KS, _Pr],
    [0, () => KeySchema, () => exports.Projection$], 3
];
exports.LocalSecondaryIndexDescription$ = [3, n0, _LSID,
    0,
    [_IN, _KS, _Pr, _ISB, _IC, _IAn],
    [0, () => KeySchema, () => exports.Projection$, 1, 1, 0]
];
exports.LocalSecondaryIndexInfo$ = [3, n0, _LSII,
    0,
    [_IN, _KS, _Pr],
    [0, () => KeySchema, () => exports.Projection$]
];
exports.OnDemandThroughput$ = [3, n0, _ODT,
    0,
    [_MRRU, _MWRU],
    [1, 1]
];
exports.OnDemandThroughputOverride$ = [3, n0, _ODTO,
    0,
    [_MRRU],
    [1]
];
exports.ParameterizedStatement$ = [3, n0, _PSa,
    0,
    [_St, _P, _RVOCCF],
    [0, () => PreparedStatementParameters, 0], 1
];
exports.PointInTimeRecoveryDescription$ = [3, n0, _PITRD,
    0,
    [_PITRS, _RPID, _ERDT, _LRDT],
    [0, 1, 4, 4]
];
exports.PointInTimeRecoverySpecification$ = [3, n0, _PITRSo,
    0,
    [_PITRE, _RPID],
    [2, 1], 1
];
exports.Projection$ = [3, n0, _Pr,
    0,
    [_PTr, _NKA],
    [0, 64 | 0]
];
exports.ProvisionedThroughput$ = [3, n0, _PT,
    0,
    [_RCU, _WCU],
    [1, 1], 2
];
exports.ProvisionedThroughputDescription$ = [3, n0, _PTD,
    0,
    [_LIDT, _LDDT, _NODT, _RCU, _WCU],
    [4, 4, 1, 1, 1]
];
exports.ProvisionedThroughputOverride$ = [3, n0, _PTO,
    0,
    [_RCU],
    [1]
];
exports.Put$ = [3, n0, _Pu,
    0,
    [_I, _TN, _CE, _EAN, _EAV, _RVOCCF],
    [() => PutItemInputAttributeMap, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 2
];
exports.PutItemInput$ = [3, n0, _PII,
    0,
    [_TN, _I, _Ex, _RV, _RCC, _RICM, _COo, _CE, _EAN, _EAV, _RVOCCF],
    [0, () => PutItemInputAttributeMap, () => ExpectedAttributeMap, 0, 0, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 2
];
exports.PutItemOutput$ = [3, n0, _PIO,
    0,
    [_At, _CC, _ICM],
    [() => AttributeMap, () => exports.ConsumedCapacity$, () => exports.ItemCollectionMetrics$]
];
exports.PutRequest$ = [3, n0, _PR,
    0,
    [_I],
    [() => PutItemInputAttributeMap], 1
];
exports.PutResourcePolicyInput$ = [3, n0, _PRPI,
    0,
    [_RA, _Po, _ERI, _CRSRA],
    [0, 0, 0, [2, { [_hH]: _xacrsra }]], 2
];
exports.PutResourcePolicyOutput$ = [3, n0, _PRPO,
    0,
    [_RIe],
    [0]
];
exports.QueryInput$ = [3, n0, _QI,
    0,
    [_TN, _IN, _Se, _ATG, _L, _CRo, _KC, _QF, _COo, _SIF, _ESK, _RCC, _PE, _FEi, _KCE, _EAN, _EAV],
    [0, 0, 0, 64 | 0, 1, 2, () => KeyConditions, () => FilterConditionMap, 0, 2, () => Key, 0, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap], 1
];
exports.QueryOutput$ = [3, n0, _QO,
    0,
    [_It, _Cou, _SC, _LEK, _CC],
    [() => ItemList, 1, 1, () => Key, () => exports.ConsumedCapacity$]
];
exports.Replica$ = [3, n0, _Re,
    0,
    [_RN],
    [0]
];
exports.ReplicaAutoScalingDescription$ = [3, n0, _RASD,
    0,
    [_RN, _GSI, _RPRCASS, _RPWCASS, _RSe],
    [0, () => ReplicaGlobalSecondaryIndexAutoScalingDescriptionList, () => exports.AutoScalingSettingsDescription$, () => exports.AutoScalingSettingsDescription$, 0]
];
exports.ReplicaAutoScalingUpdate$ = [3, n0, _RASU,
    0,
    [_RN, _RGSIU, _RPRCASU],
    [0, () => ReplicaGlobalSecondaryIndexAutoScalingUpdateList, () => exports.AutoScalingSettingsUpdate$], 1
];
exports.ReplicaDescription$ = [3, n0, _RD,
    0,
    [_RN, _RSe, _RSD, _RSPP, _KMSMKI, _PTO, _ODTO, _WT, _GSI, _RIDT, _RTCS, _GTSRM],
    [0, 0, 0, 0, 0, () => exports.ProvisionedThroughputOverride$, () => exports.OnDemandThroughputOverride$, () => exports.TableWarmThroughputDescription$, () => ReplicaGlobalSecondaryIndexDescriptionList, 4, () => exports.TableClassSummary$, 0]
];
exports.ReplicaGlobalSecondaryIndex$ = [3, n0, _RGSI,
    0,
    [_IN, _PTO, _ODTO],
    [0, () => exports.ProvisionedThroughputOverride$, () => exports.OnDemandThroughputOverride$], 1
];
exports.ReplicaGlobalSecondaryIndexAutoScalingDescription$ = [3, n0, _RGSIASD,
    0,
    [_IN, _IS, _PRCASS, _PWCASS],
    [0, 0, () => exports.AutoScalingSettingsDescription$, () => exports.AutoScalingSettingsDescription$]
];
exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate$ = [3, n0, _RGSIASU,
    0,
    [_IN, _PRCASU],
    [0, () => exports.AutoScalingSettingsUpdate$]
];
exports.ReplicaGlobalSecondaryIndexDescription$ = [3, n0, _RGSID,
    0,
    [_IN, _PTO, _ODTO, _WT],
    [0, () => exports.ProvisionedThroughputOverride$, () => exports.OnDemandThroughputOverride$, () => exports.GlobalSecondaryIndexWarmThroughputDescription$]
];
exports.ReplicaGlobalSecondaryIndexSettingsDescription$ = [3, n0, _RGSISD,
    0,
    [_IN, _IS, _PRCU, _PRCASS, _PWCU, _PWCASS],
    [0, 0, 1, () => exports.AutoScalingSettingsDescription$, 1, () => exports.AutoScalingSettingsDescription$], 1
];
exports.ReplicaGlobalSecondaryIndexSettingsUpdate$ = [3, n0, _RGSISU,
    0,
    [_IN, _PRCU, _PRCASSU],
    [0, 1, () => exports.AutoScalingSettingsUpdate$], 1
];
exports.ReplicaSettingsDescription$ = [3, n0, _RSDe,
    0,
    [_RN, _RSe, _RBMS, _RPRCU, _RPRCASS, _RPWCU, _RPWCASS, _RGSIS, _RTCS],
    [0, 0, () => exports.BillingModeSummary$, 1, () => exports.AutoScalingSettingsDescription$, 1, () => exports.AutoScalingSettingsDescription$, () => ReplicaGlobalSecondaryIndexSettingsDescriptionList, () => exports.TableClassSummary$], 1
];
exports.ReplicaSettingsUpdate$ = [3, n0, _RSU,
    0,
    [_RN, _RPRCU, _RPRCASSU, _RGSISU, _RTC],
    [0, 1, () => exports.AutoScalingSettingsUpdate$, () => ReplicaGlobalSecondaryIndexSettingsUpdateList, 0], 1
];
exports.ReplicationGroupUpdate$ = [3, n0, _RGU,
    0,
    [_Cr, _U, _De],
    [() => exports.CreateReplicationGroupMemberAction$, () => exports.UpdateReplicationGroupMemberAction$, () => exports.DeleteReplicationGroupMemberAction$]
];
exports.ReplicaUpdate$ = [3, n0, _RU,
    0,
    [_Cr, _De],
    [() => exports.CreateReplicaAction$, () => exports.DeleteReplicaAction$]
];
exports.RestoreSummary$ = [3, n0, _RSes,
    0,
    [_RDT, _RIP, _SBA, _STA],
    [4, 2, 0, 0], 2
];
exports.RestoreTableFromBackupInput$ = [3, n0, _RTFBI,
    0,
    [_TTN, _BA, _BMO, _GSIO, _LSIO, _PTO, _ODTO, _SSESO],
    [0, 0, 0, () => GlobalSecondaryIndexList, () => LocalSecondaryIndexList, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.SSESpecification$], 2
];
exports.RestoreTableFromBackupOutput$ = [3, n0, _RTFBO,
    0,
    [_TD],
    [() => exports.TableDescription$]
];
exports.RestoreTableToPointInTimeInput$ = [3, n0, _RTTPITI,
    0,
    [_TTN, _STA, _STN, _ULRT, _RDT, _BMO, _GSIO, _LSIO, _PTO, _ODTO, _SSESO],
    [0, 0, 0, 2, 4, 0, () => GlobalSecondaryIndexList, () => LocalSecondaryIndexList, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.SSESpecification$], 1
];
exports.RestoreTableToPointInTimeOutput$ = [3, n0, _RTTPITO,
    0,
    [_TD],
    [() => exports.TableDescription$]
];
exports.S3BucketSource$ = [3, n0, _SBS,
    0,
    [_SB, _SBO, _SKP],
    [0, 0, 0], 1
];
exports.ScanInput$ = [3, n0, _SI,
    0,
    [_TN, _IN, _ATG, _L, _Se, _SF, _COo, _ESK, _RCC, _TSo, _Seg, _PE, _FEi, _EAN, _EAV, _CRo],
    [0, 0, 64 | 0, 1, 0, () => FilterConditionMap, 0, () => Key, 0, 1, 1, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 2], 1
];
exports.ScanOutput$ = [3, n0, _SO,
    0,
    [_It, _Cou, _SC, _LEK, _CC],
    [() => ItemList, 1, 1, () => Key, () => exports.ConsumedCapacity$]
];
exports.SourceTableDetails$ = [3, n0, _STD,
    0,
    [_TN, _TI, _KS, _TCDT, _PT, _TA, _TSB, _ODT, _IC, _BM],
    [0, 0, () => KeySchema, 4, () => exports.ProvisionedThroughput$, 0, 1, () => exports.OnDemandThroughput$, 1, 0], 5
];
exports.SourceTableFeatureDetails$ = [3, n0, _STFD,
    0,
    [_LSI, _GSI, _SD, _TTLD, _SSED],
    [() => LocalSecondaryIndexes, () => GlobalSecondaryIndexes, () => exports.StreamSpecification$, () => exports.TimeToLiveDescription$, () => exports.SSEDescription$]
];
exports.SSEDescription$ = [3, n0, _SSED,
    0,
    [_Sta, _SSET, _KMSMKA, _IEDT],
    [0, 0, 0, 4]
];
exports.SSESpecification$ = [3, n0, _SSES,
    0,
    [_Ena, _SSET, _KMSMKI],
    [2, 0, 0]
];
exports.StreamSpecification$ = [3, n0, _SS,
    0,
    [_SE, _SVT],
    [2, 0], 1
];
exports.TableAutoScalingDescription$ = [3, n0, _TASD,
    0,
    [_TN, _TSa, _Rep],
    [0, 0, () => ReplicaAutoScalingDescriptionList]
];
exports.TableClassSummary$ = [3, n0, _TCS,
    0,
    [_TC, _LUDT],
    [0, 4]
];
exports.TableCreationParameters$ = [3, n0, _TCP,
    0,
    [_TN, _ADt, _KS, _BM, _PT, _ODT, _SSES, _GSI],
    [0, () => AttributeDefinitions, () => KeySchema, 0, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.SSESpecification$, () => GlobalSecondaryIndexList], 3
];
exports.TableDescription$ = [3, n0, _TD,
    0,
    [_ADt, _TN, _KS, _TSa, _CDT, _PT, _TSB, _IC, _TA, _TI, _BMS, _LSI, _GSI, _SS, _LSL, _LSA, _GTV, _Rep, _GTW, _GTSRM, _RSes, _SSED, _AS, _TCS, _DPE, _ODT, _WT, _MRC],
    [() => AttributeDefinitions, 0, () => KeySchema, 0, 4, () => exports.ProvisionedThroughputDescription$, 1, 1, 0, 0, () => exports.BillingModeSummary$, () => LocalSecondaryIndexDescriptionList, () => GlobalSecondaryIndexDescriptionList, () => exports.StreamSpecification$, 0, 0, 0, () => ReplicaDescriptionList, () => GlobalTableWitnessDescriptionList, 0, () => exports.RestoreSummary$, () => exports.SSEDescription$, () => exports.ArchivalSummary$, () => exports.TableClassSummary$, 2, () => exports.OnDemandThroughput$, () => exports.TableWarmThroughputDescription$, 0]
];
exports.TableWarmThroughputDescription$ = [3, n0, _TWTD,
    0,
    [_RUPS, _WUPS, _Sta],
    [1, 1, 0]
];
exports.Tag$ = [3, n0, _Tag,
    0,
    [_K, _V],
    [0, 0], 2
];
exports.TagResourceInput$ = [3, n0, _TRI,
    0,
    [_RA, _Ta],
    [0, () => TagList], 2
];
exports.ThrottlingReason$ = [3, n0, _TRh,
    0,
    [_r, _re],
    [0, 0]
];
exports.TimeToLiveDescription$ = [3, n0, _TTLD,
    0,
    [_TTLS, _AN],
    [0, 0]
];
exports.TimeToLiveSpecification$ = [3, n0, _TTLSi,
    0,
    [_Ena, _AN],
    [2, 0], 2
];
exports.TransactGetItem$ = [3, n0, _TGI,
    0,
    [_G],
    [() => exports.Get$], 1
];
exports.TransactGetItemsInput$ = [3, n0, _TGII,
    0,
    [_TIr, _RCC],
    [() => TransactGetItemList, 0], 1
];
exports.TransactGetItemsOutput$ = [3, n0, _TGIO,
    0,
    [_CC, _R],
    [() => ConsumedCapacityMultiple, () => ItemResponseList]
];
exports.TransactWriteItem$ = [3, n0, _TWI,
    0,
    [_CCo, _Pu, _De, _U],
    [() => exports.ConditionCheck$, () => exports.Put$, () => exports.Delete$, () => exports.Update$]
];
exports.TransactWriteItemsInput$ = [3, n0, _TWII,
    0,
    [_TIr, _RCC, _RICM, _CRT],
    [() => TransactWriteItemList, 0, 0, [0, 4]], 1
];
exports.TransactWriteItemsOutput$ = [3, n0, _TWIO,
    0,
    [_CC, _ICM],
    [() => ConsumedCapacityMultiple, () => ItemCollectionMetricsPerTable]
];
exports.UntagResourceInput$ = [3, n0, _URI,
    0,
    [_RA, _TK],
    [0, 64 | 0], 2
];
exports.Update$ = [3, n0, _U,
    0,
    [_K, _UE, _TN, _CE, _EAN, _EAV, _RVOCCF],
    [() => Key, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 3
];
exports.UpdateContinuousBackupsInput$ = [3, n0, _UCBI,
    0,
    [_TN, _PITRSo],
    [0, () => exports.PointInTimeRecoverySpecification$], 2
];
exports.UpdateContinuousBackupsOutput$ = [3, n0, _UCBO,
    0,
    [_CBD],
    [() => exports.ContinuousBackupsDescription$]
];
exports.UpdateContributorInsightsInput$ = [3, n0, _UCII,
    0,
    [_TN, _CIA, _IN, _CIM],
    [0, 0, 0, 0], 2
];
exports.UpdateContributorInsightsOutput$ = [3, n0, _UCIO,
    0,
    [_TN, _IN, _CISo, _CIM],
    [0, 0, 0, 0]
];
exports.UpdateGlobalSecondaryIndexAction$ = [3, n0, _UGSIA,
    0,
    [_IN, _PT, _ODT, _WT],
    [0, () => exports.ProvisionedThroughput$, () => exports.OnDemandThroughput$, () => exports.WarmThroughput$], 1
];
exports.UpdateGlobalTableInput$ = [3, n0, _UGTI,
    0,
    [_GTN, _RUe],
    [0, () => ReplicaUpdateList], 2
];
exports.UpdateGlobalTableOutput$ = [3, n0, _UGTO,
    0,
    [_GTD],
    [() => exports.GlobalTableDescription$]
];
exports.UpdateGlobalTableSettingsInput$ = [3, n0, _UGTSI,
    0,
    [_GTN, _GTBM, _GTPWCU, _GTPWCASSU, _GTGSISU, _RSU],
    [0, 0, 1, () => exports.AutoScalingSettingsUpdate$, () => GlobalTableGlobalSecondaryIndexSettingsUpdateList, () => ReplicaSettingsUpdateList], 1
];
exports.UpdateGlobalTableSettingsOutput$ = [3, n0, _UGTSO,
    0,
    [_GTN, _RS],
    [0, () => ReplicaSettingsDescriptionList]
];
exports.UpdateItemInput$ = [3, n0, _UII,
    0,
    [_TN, _K, _AU, _Ex, _COo, _RV, _RCC, _RICM, _UE, _CE, _EAN, _EAV, _RVOCCF],
    [0, () => Key, () => AttributeUpdates, () => ExpectedAttributeMap, 0, 0, 0, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0], 2
];
exports.UpdateItemOutput$ = [3, n0, _UIO,
    0,
    [_At, _CC, _ICM],
    [() => AttributeMap, () => exports.ConsumedCapacity$, () => exports.ItemCollectionMetrics$]
];
exports.UpdateKinesisStreamingConfiguration$ = [3, n0, _UKSC,
    0,
    [_ACDTP],
    [0]
];
exports.UpdateKinesisStreamingDestinationInput$ = [3, n0, _UKSDI,
    0,
    [_TN, _SA, _UKSC],
    [0, 0, () => exports.UpdateKinesisStreamingConfiguration$], 2
];
exports.UpdateKinesisStreamingDestinationOutput$ = [3, n0, _UKSDO,
    0,
    [_TN, _SA, _DS, _UKSC],
    [0, 0, 0, () => exports.UpdateKinesisStreamingConfiguration$]
];
exports.UpdateReplicationGroupMemberAction$ = [3, n0, _URGMA,
    0,
    [_RN, _KMSMKI, _PTO, _ODTO, _GSI, _TCO],
    [0, 0, () => exports.ProvisionedThroughputOverride$, () => exports.OnDemandThroughputOverride$, () => ReplicaGlobalSecondaryIndexList, 0], 1
];
exports.UpdateTableInput$ = [3, n0, _UTI,
    0,
    [_TN, _ADt, _BM, _PT, _GSIUl, _SS, _SSES, _RUe, _TC, _DPE, _MRC, _GTWU, _ODT, _WT, _GTSRM],
    [0, () => AttributeDefinitions, 0, () => exports.ProvisionedThroughput$, () => GlobalSecondaryIndexUpdateList, () => exports.StreamSpecification$, () => exports.SSESpecification$, () => ReplicationGroupUpdateList, 0, 2, 0, () => GlobalTableWitnessGroupUpdateList, () => exports.OnDemandThroughput$, () => exports.WarmThroughput$, 0], 1
];
exports.UpdateTableOutput$ = [3, n0, _UTO,
    0,
    [_TD],
    [() => exports.TableDescription$]
];
exports.UpdateTableReplicaAutoScalingInput$ = [3, n0, _UTRASI,
    0,
    [_TN, _GSIUl, _PWCASU, _RUe],
    [0, () => GlobalSecondaryIndexAutoScalingUpdateList, () => exports.AutoScalingSettingsUpdate$, () => ReplicaAutoScalingUpdateList], 1
];
exports.UpdateTableReplicaAutoScalingOutput$ = [3, n0, _UTRASO,
    0,
    [_TASD],
    [() => exports.TableAutoScalingDescription$]
];
exports.UpdateTimeToLiveInput$ = [3, n0, _UTTLI,
    0,
    [_TN, _TTLSi],
    [0, () => exports.TimeToLiveSpecification$], 2
];
exports.UpdateTimeToLiveOutput$ = [3, n0, _UTTLO,
    0,
    [_TTLSi],
    [() => exports.TimeToLiveSpecification$]
];
exports.WarmThroughput$ = [3, n0, _WT,
    0,
    [_RUPS, _WUPS],
    [1, 1]
];
exports.WriteRequest$ = [3, n0, _WR,
    0,
    [_PR, _DR],
    [() => exports.PutRequest$, () => exports.DeleteRequest$]
];
var __Unit = "unit";
var AttributeDefinitions = [1, n0, _ADt,
    0, () => exports.AttributeDefinition$
];
var AttributeNameList = 64 | 0;
var AttributeValueList = [1, n0, _AVL,
    0, () => exports.AttributeValue$
];
var AutoScalingPolicyDescriptionList = [1, n0, _ASPDL,
    0, () => exports.AutoScalingPolicyDescription$
];
var BackupSummaries = [1, n0, _BSac,
    0, () => exports.BackupSummary$
];
var BinarySetAttributeValue = 64 | 21;
var CancellationReasonList = [1, n0, _CRL,
    0, () => exports.CancellationReason$
];
var ConsumedCapacityMultiple = [1, n0, _CCM,
    0, () => exports.ConsumedCapacity$
];
var ContributorInsightsRuleList = 64 | 0;
var ContributorInsightsSummaries = [1, n0, _CISon,
    0, () => exports.ContributorInsightsSummary$
];
var CsvHeaderList = 64 | 0;
var Endpoints = [1, n0, _En,
    0, () => exports.Endpoint$
];
var ExportSummaries = [1, n0, _ESxp,
    0, () => exports.ExportSummary$
];
var GlobalSecondaryIndexAutoScalingUpdateList = [1, n0, _GSIASUL,
    0, () => exports.GlobalSecondaryIndexAutoScalingUpdate$
];
var GlobalSecondaryIndexDescriptionList = [1, n0, _GSIDL,
    0, () => exports.GlobalSecondaryIndexDescription$
];
var GlobalSecondaryIndexes = [1, n0, _GSI,
    0, () => exports.GlobalSecondaryIndexInfo$
];
var GlobalSecondaryIndexList = [1, n0, _GSIL,
    0, () => exports.GlobalSecondaryIndex$
];
var GlobalSecondaryIndexUpdateList = [1, n0, _GSIUL,
    0, () => exports.GlobalSecondaryIndexUpdate$
];
var GlobalTableGlobalSecondaryIndexSettingsUpdateList = [1, n0, _GTGSISUL,
    0, () => exports.GlobalTableGlobalSecondaryIndexSettingsUpdate$
];
var GlobalTableList = [1, n0, _GTL,
    0, () => exports.GlobalTable$
];
var GlobalTableWitnessDescriptionList = [1, n0, _GTWDL,
    0, () => exports.GlobalTableWitnessDescription$
];
var GlobalTableWitnessGroupUpdateList = [1, n0, _GTWGUL,
    0, () => exports.GlobalTableWitnessGroupUpdate$
];
var ImportSummaryList = [1, n0, _ISL,
    0, () => exports.ImportSummary$
];
var ItemCollectionMetricsMultiple = [1, n0, _ICMM,
    0, () => exports.ItemCollectionMetrics$
];
var ItemCollectionSizeEstimateRange = 64 | 1;
var ItemList = [1, n0, _IL,
    0, () => AttributeMap
];
var ItemResponseList = [1, n0, _IRL,
    0, () => exports.ItemResponse$
];
var KeyList = [1, n0, _KL,
    0, () => Key
];
var KeySchema = [1, n0, _KS,
    0, () => exports.KeySchemaElement$
];
var KinesisDataStreamDestinations = [1, n0, _KDSD,
    0, () => exports.KinesisDataStreamDestination$
];
var ListAttributeValue = [1, n0, _LAV,
    0, () => exports.AttributeValue$
];
var LocalSecondaryIndexDescriptionList = [1, n0, _LSIDL,
    0, () => exports.LocalSecondaryIndexDescription$
];
var LocalSecondaryIndexes = [1, n0, _LSI,
    0, () => exports.LocalSecondaryIndexInfo$
];
var LocalSecondaryIndexList = [1, n0, _LSIL,
    0, () => exports.LocalSecondaryIndex$
];
var NonKeyAttributeNameList = 64 | 0;
var NumberSetAttributeValue = 64 | 0;
var ParameterizedStatements = [1, n0, _PSar,
    0, () => exports.ParameterizedStatement$
];
var PartiQLBatchRequest = [1, n0, _PQLBR,
    0, () => exports.BatchStatementRequest$
];
var PartiQLBatchResponse = [1, n0, _PQLBRa,
    0, () => exports.BatchStatementResponse$
];
var PreparedStatementParameters = [1, n0, _PSP,
    0, () => exports.AttributeValue$
];
var ReplicaAutoScalingDescriptionList = [1, n0, _RASDL,
    0, () => exports.ReplicaAutoScalingDescription$
];
var ReplicaAutoScalingUpdateList = [1, n0, _RASUL,
    0, () => exports.ReplicaAutoScalingUpdate$
];
var ReplicaDescriptionList = [1, n0, _RDL,
    0, () => exports.ReplicaDescription$
];
var ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = [1, n0, _RGSIASDL,
    0, () => exports.ReplicaGlobalSecondaryIndexAutoScalingDescription$
];
var ReplicaGlobalSecondaryIndexAutoScalingUpdateList = [1, n0, _RGSIASUL,
    0, () => exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate$
];
var ReplicaGlobalSecondaryIndexDescriptionList = [1, n0, _RGSIDL,
    0, () => exports.ReplicaGlobalSecondaryIndexDescription$
];
var ReplicaGlobalSecondaryIndexList = [1, n0, _RGSIL,
    0, () => exports.ReplicaGlobalSecondaryIndex$
];
var ReplicaGlobalSecondaryIndexSettingsDescriptionList = [1, n0, _RGSISDL,
    0, () => exports.ReplicaGlobalSecondaryIndexSettingsDescription$
];
var ReplicaGlobalSecondaryIndexSettingsUpdateList = [1, n0, _RGSISUL,
    0, () => exports.ReplicaGlobalSecondaryIndexSettingsUpdate$
];
var ReplicaList = [1, n0, _RL,
    0, () => exports.Replica$
];
var ReplicaSettingsDescriptionList = [1, n0, _RSDL,
    0, () => exports.ReplicaSettingsDescription$
];
var ReplicaSettingsUpdateList = [1, n0, _RSUL,
    0, () => exports.ReplicaSettingsUpdate$
];
var ReplicationGroupUpdateList = [1, n0, _RGUL,
    0, () => exports.ReplicationGroupUpdate$
];
var ReplicaUpdateList = [1, n0, _RUL,
    0, () => exports.ReplicaUpdate$
];
var StringSetAttributeValue = 64 | 0;
var TableNameList = 64 | 0;
var TagKeyList = 64 | 0;
var TagList = [1, n0, _TL,
    0, () => exports.Tag$
];
var ThrottlingReasonList = [1, n0, _TRL,
    0, () => exports.ThrottlingReason$
];
var TransactGetItemList = [1, n0, _TGIL,
    0, () => exports.TransactGetItem$
];
var TransactWriteItemList = [1, n0, _TWIL,
    0, () => exports.TransactWriteItem$
];
var WriteRequests = [1, n0, _WRr,
    0, () => exports.WriteRequest$
];
var AttributeMap = [2, n0, _AM,
    0, 0, () => exports.AttributeValue$
];
var AttributeUpdates = [2, n0, _AU,
    0, 0, () => exports.AttributeValueUpdate$
];
var BatchGetRequestMap = [2, n0, _BGRMa,
    0, 0, () => exports.KeysAndAttributes$
];
var BatchGetResponseMap = [2, n0, _BGRM,
    0, 0, () => ItemList
];
var BatchWriteItemRequestMap = [2, n0, _BWIRM,
    0, 0, () => WriteRequests
];
var ExpectedAttributeMap = [2, n0, _EAM,
    0, 0, () => exports.ExpectedAttributeValue$
];
var ExpressionAttributeNameMap = 128 | 0;
var ExpressionAttributeValueMap = [2, n0, _EAVM,
    0, 0, () => exports.AttributeValue$
];
var FilterConditionMap = [2, n0, _FCM,
    0, 0, () => exports.Condition$
];
var ItemCollectionKeyAttributeMap = [2, n0, _ICKAM,
    0, 0, () => exports.AttributeValue$
];
var ItemCollectionMetricsPerTable = [2, n0, _ICMPT,
    0, 0, () => ItemCollectionMetricsMultiple
];
var Key = [2, n0, _K,
    0, 0, () => exports.AttributeValue$
];
var KeyConditions = [2, n0, _KC,
    0, 0, () => exports.Condition$
];
var MapAttributeValue = [2, n0, _MAV,
    0, 0, () => exports.AttributeValue$
];
var PutItemInputAttributeMap = [2, n0, _PIIAM,
    0, 0, () => exports.AttributeValue$
];
var SecondaryIndexesCapacityMap = [2, n0, _SICM,
    0, 0, () => exports.Capacity$
];
exports.AttributeValue$ = [4, n0, _AV,
    0,
    [_S_, _N, _B_, _SS_, _NS, _BS_, _M_, _L_, _NULL, _BOOL],
    [0, 0, 21, 64 | 0, 64 | 0, 64 | 21, () => MapAttributeValue, () => ListAttributeValue, 2, 2]
];
exports.BatchExecuteStatement$ = [9, n0, _BES,
    0, () => exports.BatchExecuteStatementInput$, () => exports.BatchExecuteStatementOutput$
];
exports.BatchGetItem$ = [9, n0, _BGI,
    0, () => exports.BatchGetItemInput$, () => exports.BatchGetItemOutput$
];
exports.BatchWriteItem$ = [9, n0, _BWI,
    0, () => exports.BatchWriteItemInput$, () => exports.BatchWriteItemOutput$
];
exports.CreateBackup$ = [9, n0, _CB,
    0, () => exports.CreateBackupInput$, () => exports.CreateBackupOutput$
];
exports.CreateGlobalTable$ = [9, n0, _CGT,
    0, () => exports.CreateGlobalTableInput$, () => exports.CreateGlobalTableOutput$
];
exports.CreateTable$ = [9, n0, _CTr,
    0, () => exports.CreateTableInput$, () => exports.CreateTableOutput$
];
exports.DeleteBackup$ = [9, n0, _DB,
    0, () => exports.DeleteBackupInput$, () => exports.DeleteBackupOutput$
];
exports.DeleteItem$ = [9, n0, _DI,
    0, () => exports.DeleteItemInput$, () => exports.DeleteItemOutput$
];
exports.DeleteResourcePolicy$ = [9, n0, _DRP,
    0, () => exports.DeleteResourcePolicyInput$, () => exports.DeleteResourcePolicyOutput$
];
exports.DeleteTable$ = [9, n0, _DT,
    0, () => exports.DeleteTableInput$, () => exports.DeleteTableOutput$
];
exports.DescribeBackup$ = [9, n0, _DBe,
    0, () => exports.DescribeBackupInput$, () => exports.DescribeBackupOutput$
];
exports.DescribeContinuousBackups$ = [9, n0, _DCB,
    0, () => exports.DescribeContinuousBackupsInput$, () => exports.DescribeContinuousBackupsOutput$
];
exports.DescribeContributorInsights$ = [9, n0, _DCI,
    0, () => exports.DescribeContributorInsightsInput$, () => exports.DescribeContributorInsightsOutput$
];
exports.DescribeEndpoints$ = [9, n0, _DE,
    0, () => exports.DescribeEndpointsRequest$, () => exports.DescribeEndpointsResponse$
];
exports.DescribeExport$ = [9, n0, _DEe,
    0, () => exports.DescribeExportInput$, () => exports.DescribeExportOutput$
];
exports.DescribeGlobalTable$ = [9, n0, _DGT,
    0, () => exports.DescribeGlobalTableInput$, () => exports.DescribeGlobalTableOutput$
];
exports.DescribeGlobalTableSettings$ = [9, n0, _DGTS,
    0, () => exports.DescribeGlobalTableSettingsInput$, () => exports.DescribeGlobalTableSettingsOutput$
];
exports.DescribeImport$ = [9, n0, _DIe,
    0, () => exports.DescribeImportInput$, () => exports.DescribeImportOutput$
];
exports.DescribeKinesisStreamingDestination$ = [9, n0, _DKSD,
    0, () => exports.DescribeKinesisStreamingDestinationInput$, () => exports.DescribeKinesisStreamingDestinationOutput$
];
exports.DescribeLimits$ = [9, n0, _DL,
    0, () => exports.DescribeLimitsInput$, () => exports.DescribeLimitsOutput$
];
exports.DescribeTable$ = [9, n0, _DTe,
    0, () => exports.DescribeTableInput$, () => exports.DescribeTableOutput$
];
exports.DescribeTableReplicaAutoScaling$ = [9, n0, _DTRAS,
    0, () => exports.DescribeTableReplicaAutoScalingInput$, () => exports.DescribeTableReplicaAutoScalingOutput$
];
exports.DescribeTimeToLive$ = [9, n0, _DTTL,
    0, () => exports.DescribeTimeToLiveInput$, () => exports.DescribeTimeToLiveOutput$
];
exports.DisableKinesisStreamingDestination$ = [9, n0, _DKSDi,
    0, () => exports.KinesisStreamingDestinationInput$, () => exports.KinesisStreamingDestinationOutput$
];
exports.EnableKinesisStreamingDestination$ = [9, n0, _EKSD,
    0, () => exports.KinesisStreamingDestinationInput$, () => exports.KinesisStreamingDestinationOutput$
];
exports.ExecuteStatement$ = [9, n0, _ESxe,
    0, () => exports.ExecuteStatementInput$, () => exports.ExecuteStatementOutput$
];
exports.ExecuteTransaction$ = [9, n0, _ETxe,
    0, () => exports.ExecuteTransactionInput$, () => exports.ExecuteTransactionOutput$
];
exports.ExportTableToPointInTime$ = [9, n0, _ETTPIT,
    0, () => exports.ExportTableToPointInTimeInput$, () => exports.ExportTableToPointInTimeOutput$
];
exports.GetItem$ = [9, n0, _GI,
    0, () => exports.GetItemInput$, () => exports.GetItemOutput$
];
exports.GetResourcePolicy$ = [9, n0, _GRP,
    0, () => exports.GetResourcePolicyInput$, () => exports.GetResourcePolicyOutput$
];
exports.ImportTable$ = [9, n0, _IT,
    0, () => exports.ImportTableInput$, () => exports.ImportTableOutput$
];
exports.ListBackups$ = [9, n0, _LB,
    0, () => exports.ListBackupsInput$, () => exports.ListBackupsOutput$
];
exports.ListContributorInsights$ = [9, n0, _LCI,
    0, () => exports.ListContributorInsightsInput$, () => exports.ListContributorInsightsOutput$
];
exports.ListExports$ = [9, n0, _LE,
    0, () => exports.ListExportsInput$, () => exports.ListExportsOutput$
];
exports.ListGlobalTables$ = [9, n0, _LGT,
    0, () => exports.ListGlobalTablesInput$, () => exports.ListGlobalTablesOutput$
];
exports.ListImports$ = [9, n0, _LI,
    0, () => exports.ListImportsInput$, () => exports.ListImportsOutput$
];
exports.ListTables$ = [9, n0, _LT,
    0, () => exports.ListTablesInput$, () => exports.ListTablesOutput$
];
exports.ListTagsOfResource$ = [9, n0, _LTOR,
    0, () => exports.ListTagsOfResourceInput$, () => exports.ListTagsOfResourceOutput$
];
exports.PutItem$ = [9, n0, _PI,
    0, () => exports.PutItemInput$, () => exports.PutItemOutput$
];
exports.PutResourcePolicy$ = [9, n0, _PRP,
    0, () => exports.PutResourcePolicyInput$, () => exports.PutResourcePolicyOutput$
];
exports.Query$ = [9, n0, _Q,
    0, () => exports.QueryInput$, () => exports.QueryOutput$
];
exports.RestoreTableFromBackup$ = [9, n0, _RTFB,
    0, () => exports.RestoreTableFromBackupInput$, () => exports.RestoreTableFromBackupOutput$
];
exports.RestoreTableToPointInTime$ = [9, n0, _RTTPIT,
    0, () => exports.RestoreTableToPointInTimeInput$, () => exports.RestoreTableToPointInTimeOutput$
];
exports.Scan$ = [9, n0, _Sc,
    0, () => exports.ScanInput$, () => exports.ScanOutput$
];
exports.TagResource$ = [9, n0, _TRa,
    0, () => exports.TagResourceInput$, () => __Unit
];
exports.TransactGetItems$ = [9, n0, _TGIr,
    0, () => exports.TransactGetItemsInput$, () => exports.TransactGetItemsOutput$
];
exports.TransactWriteItems$ = [9, n0, _TWIr,
    0, () => exports.TransactWriteItemsInput$, () => exports.TransactWriteItemsOutput$
];
exports.UntagResource$ = [9, n0, _UR,
    0, () => exports.UntagResourceInput$, () => __Unit
];
exports.UpdateContinuousBackups$ = [9, n0, _UCB,
    0, () => exports.UpdateContinuousBackupsInput$, () => exports.UpdateContinuousBackupsOutput$
];
exports.UpdateContributorInsights$ = [9, n0, _UCI,
    0, () => exports.UpdateContributorInsightsInput$, () => exports.UpdateContributorInsightsOutput$
];
exports.UpdateGlobalTable$ = [9, n0, _UGT,
    0, () => exports.UpdateGlobalTableInput$, () => exports.UpdateGlobalTableOutput$
];
exports.UpdateGlobalTableSettings$ = [9, n0, _UGTS,
    0, () => exports.UpdateGlobalTableSettingsInput$, () => exports.UpdateGlobalTableSettingsOutput$
];
exports.UpdateItem$ = [9, n0, _UIp,
    0, () => exports.UpdateItemInput$, () => exports.UpdateItemOutput$
];
exports.UpdateKinesisStreamingDestination$ = [9, n0, _UKSD,
    0, () => exports.UpdateKinesisStreamingDestinationInput$, () => exports.UpdateKinesisStreamingDestinationOutput$
];
exports.UpdateTable$ = [9, n0, _UT,
    0, () => exports.UpdateTableInput$, () => exports.UpdateTableOutput$
];
exports.UpdateTableReplicaAutoScaling$ = [9, n0, _UTRAS,
    0, () => exports.UpdateTableReplicaAutoScalingInput$, () => exports.UpdateTableReplicaAutoScalingOutput$
];
exports.UpdateTimeToLive$ = [9, n0, _UTTL,
    0, () => exports.UpdateTimeToLiveInput$, () => exports.UpdateTimeToLiveOutput$
];
