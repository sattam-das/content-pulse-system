"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLayerVersionPermissionResponse$ = exports.AddLayerVersionPermissionRequest$ = exports.AccountUsage$ = exports.AccountLimit$ = exports.errorTypeRegistries = exports.UnsupportedMediaTypeException$ = exports.TooManyRequestsException$ = exports.SubnetIPAddressLimitReachedException$ = exports.SnapStartTimeoutException$ = exports.SnapStartNotReadyException$ = exports.SnapStartException$ = exports.ServiceException$ = exports.SerializedRequestEntityTooLargeException$ = exports.ResourceNotReadyException$ = exports.ResourceNotFoundException$ = exports.ResourceInUseException$ = exports.ResourceConflictException$ = exports.RequestTooLargeException$ = exports.RecursiveInvocationException$ = exports.ProvisionedConcurrencyConfigNotFoundException$ = exports.PreconditionFailedException$ = exports.PolicyLengthExceededException$ = exports.NoPublishedVersionException$ = exports.KMSNotFoundException$ = exports.KMSInvalidStateException$ = exports.KMSDisabledException$ = exports.KMSAccessDeniedException$ = exports.InvalidZipFileException$ = exports.InvalidSubnetIDException$ = exports.InvalidSecurityGroupIDException$ = exports.InvalidRuntimeException$ = exports.InvalidRequestContentException$ = exports.InvalidParameterValueException$ = exports.InvalidCodeSignatureException$ = exports.FunctionVersionsPerCapacityProviderLimitExceededException$ = exports.ENILimitReachedException$ = exports.EFSMountTimeoutException$ = exports.EFSMountFailureException$ = exports.EFSMountConnectivityException$ = exports.EFSIOException$ = exports.EC2UnexpectedException$ = exports.EC2ThrottledException$ = exports.EC2AccessDeniedException$ = exports.DurableExecutionAlreadyStartedException$ = exports.CodeVerificationFailedException$ = exports.CodeStorageExceededException$ = exports.CodeSigningConfigNotFoundException$ = exports.CapacityProviderLimitExceededException$ = exports.CallbackTimeoutException$ = exports.LambdaServiceException$ = void 0;
exports.DeleteCodeSigningConfigRequest$ = exports.DeleteCapacityProviderResponse$ = exports.DeleteCapacityProviderRequest$ = exports.DeleteAliasRequest$ = exports.DeadLetterConfig$ = exports.CreateFunctionUrlConfigResponse$ = exports.CreateFunctionUrlConfigRequest$ = exports.CreateFunctionRequest$ = exports.CreateEventSourceMappingRequest$ = exports.CreateCodeSigningConfigResponse$ = exports.CreateCodeSigningConfigRequest$ = exports.CreateCapacityProviderResponse$ = exports.CreateCapacityProviderRequest$ = exports.CreateAliasRequest$ = exports.Cors$ = exports.ContextSucceededDetails$ = exports.ContextStartedDetails$ = exports.ContextOptions$ = exports.ContextFailedDetails$ = exports.ContextDetails$ = exports.Concurrency$ = exports.CodeSigningPolicies$ = exports.CodeSigningConfig$ = exports.CheckpointUpdatedExecutionState$ = exports.CheckpointDurableExecutionResponse$ = exports.CheckpointDurableExecutionRequest$ = exports.ChainedInvokeTimedOutDetails$ = exports.ChainedInvokeSucceededDetails$ = exports.ChainedInvokeStoppedDetails$ = exports.ChainedInvokeStartedDetails$ = exports.ChainedInvokeOptions$ = exports.ChainedInvokeFailedDetails$ = exports.ChainedInvokeDetails$ = exports.CapacityProviderVpcConfig$ = exports.CapacityProviderScalingConfig$ = exports.CapacityProviderPermissionsConfig$ = exports.CapacityProviderConfig$ = exports.CapacityProvider$ = exports.CallbackTimedOutDetails$ = exports.CallbackSucceededDetails$ = exports.CallbackStartedDetails$ = exports.CallbackOptions$ = exports.CallbackFailedDetails$ = exports.CallbackDetails$ = exports.AmazonManagedKafkaEventSourceConfig$ = exports.AllowedPublishers$ = exports.AliasRoutingConfiguration$ = exports.AliasConfiguration$ = exports.AddPermissionResponse$ = exports.AddPermissionRequest$ = void 0;
exports.GetCodeSigningConfigResponse$ = exports.GetCodeSigningConfigRequest$ = exports.GetCapacityProviderResponse$ = exports.GetCapacityProviderRequest$ = exports.GetAliasRequest$ = exports.GetAccountSettingsResponse$ = exports.GetAccountSettingsRequest$ = exports.FunctionVersionsByCapacityProviderListItem$ = exports.FunctionUrlConfig$ = exports.FunctionScalingConfig$ = exports.FunctionEventInvokeConfig$ = exports.FunctionConfiguration$ = exports.FunctionCodeLocation$ = exports.FunctionCode$ = exports.FilterCriteriaError$ = exports.FilterCriteria$ = exports.Filter$ = exports.FileSystemConfig$ = exports.ExecutionTimedOutDetails$ = exports.ExecutionSucceededDetails$ = exports.ExecutionStoppedDetails$ = exports.ExecutionStartedDetails$ = exports.ExecutionFailedDetails$ = exports.ExecutionDetails$ = exports.Execution$ = exports.EventSourceMappingMetricsConfig$ = exports.EventSourceMappingLoggingConfig$ = exports.EventSourceMappingConfiguration$ = exports.EventResult$ = exports.EventInput$ = exports.EventError$ = exports.Event$ = exports.ErrorObject$ = exports.EphemeralStorage$ = exports.EnvironmentResponse$ = exports.EnvironmentError$ = exports.Environment$ = exports.DurableConfig$ = exports.DocumentDBEventSourceConfig$ = exports.DestinationConfig$ = exports.DeleteProvisionedConcurrencyConfigRequest$ = exports.DeleteLayerVersionRequest$ = exports.DeleteFunctionUrlConfigRequest$ = exports.DeleteFunctionResponse$ = exports.DeleteFunctionRequest$ = exports.DeleteFunctionEventInvokeConfigRequest$ = exports.DeleteFunctionConcurrencyRequest$ = exports.DeleteFunctionCodeSigningConfigRequest$ = exports.DeleteEventSourceMappingRequest$ = exports.DeleteCodeSigningConfigResponse$ = void 0;
exports.Layer$ = exports.LambdaManagedInstancesCapacityProviderConfig$ = exports.KafkaSchemaValidationConfig$ = exports.KafkaSchemaRegistryConfig$ = exports.KafkaSchemaRegistryAccessConfig$ = exports.InvokeWithResponseStreamResponse$ = exports.InvokeWithResponseStreamRequest$ = exports.InvokeWithResponseStreamCompleteEvent$ = exports.InvokeResponseStreamUpdate$ = exports.InvokeAsyncResponse$ = exports.InvokeAsyncRequest$ = exports.InvocationResponse$ = exports.InvocationRequest$ = exports.InvocationCompletedDetails$ = exports.InstanceRequirements$ = exports.ImageConfigResponse$ = exports.ImageConfigError$ = exports.ImageConfig$ = exports.GetRuntimeManagementConfigResponse$ = exports.GetRuntimeManagementConfigRequest$ = exports.GetProvisionedConcurrencyConfigResponse$ = exports.GetProvisionedConcurrencyConfigRequest$ = exports.GetPolicyResponse$ = exports.GetPolicyRequest$ = exports.GetLayerVersionResponse$ = exports.GetLayerVersionRequest$ = exports.GetLayerVersionPolicyResponse$ = exports.GetLayerVersionPolicyRequest$ = exports.GetLayerVersionByArnRequest$ = exports.GetFunctionUrlConfigResponse$ = exports.GetFunctionUrlConfigRequest$ = exports.GetFunctionScalingConfigResponse$ = exports.GetFunctionScalingConfigRequest$ = exports.GetFunctionResponse$ = exports.GetFunctionRequest$ = exports.GetFunctionRecursionConfigResponse$ = exports.GetFunctionRecursionConfigRequest$ = exports.GetFunctionEventInvokeConfigRequest$ = exports.GetFunctionConfigurationRequest$ = exports.GetFunctionConcurrencyResponse$ = exports.GetFunctionConcurrencyRequest$ = exports.GetFunctionCodeSigningConfigResponse$ = exports.GetFunctionCodeSigningConfigRequest$ = exports.GetEventSourceMappingRequest$ = exports.GetDurableExecutionStateResponse$ = exports.GetDurableExecutionStateRequest$ = exports.GetDurableExecutionResponse$ = exports.GetDurableExecutionRequest$ = exports.GetDurableExecutionHistoryResponse$ = exports.GetDurableExecutionHistoryRequest$ = void 0;
exports.PutFunctionRecursionConfigResponse$ = exports.PutFunctionRecursionConfigRequest$ = exports.PutFunctionEventInvokeConfigRequest$ = exports.PutFunctionConcurrencyRequest$ = exports.PutFunctionCodeSigningConfigResponse$ = exports.PutFunctionCodeSigningConfigRequest$ = exports.PublishVersionRequest$ = exports.PublishLayerVersionResponse$ = exports.PublishLayerVersionRequest$ = exports.ProvisionedPollerConfig$ = exports.ProvisionedConcurrencyConfigListItem$ = exports.OperationUpdate$ = exports.Operation$ = exports.OnSuccess$ = exports.OnFailure$ = exports.LoggingConfig$ = exports.ListVersionsByFunctionResponse$ = exports.ListVersionsByFunctionRequest$ = exports.ListTagsResponse$ = exports.ListTagsRequest$ = exports.ListProvisionedConcurrencyConfigsResponse$ = exports.ListProvisionedConcurrencyConfigsRequest$ = exports.ListLayerVersionsResponse$ = exports.ListLayerVersionsRequest$ = exports.ListLayersResponse$ = exports.ListLayersRequest$ = exports.ListFunctionVersionsByCapacityProviderResponse$ = exports.ListFunctionVersionsByCapacityProviderRequest$ = exports.ListFunctionUrlConfigsResponse$ = exports.ListFunctionUrlConfigsRequest$ = exports.ListFunctionsResponse$ = exports.ListFunctionsRequest$ = exports.ListFunctionsByCodeSigningConfigResponse$ = exports.ListFunctionsByCodeSigningConfigRequest$ = exports.ListFunctionEventInvokeConfigsResponse$ = exports.ListFunctionEventInvokeConfigsRequest$ = exports.ListEventSourceMappingsResponse$ = exports.ListEventSourceMappingsRequest$ = exports.ListDurableExecutionsByFunctionResponse$ = exports.ListDurableExecutionsByFunctionRequest$ = exports.ListCodeSigningConfigsResponse$ = exports.ListCodeSigningConfigsRequest$ = exports.ListCapacityProvidersResponse$ = exports.ListCapacityProvidersRequest$ = exports.ListAliasesResponse$ = exports.ListAliasesRequest$ = exports.LayerVersionsListItem$ = exports.LayerVersionContentOutput$ = exports.LayerVersionContentInput$ = exports.LayersListItem$ = void 0;
exports.VpcConfig$ = exports.UpdateFunctionUrlConfigResponse$ = exports.UpdateFunctionUrlConfigRequest$ = exports.UpdateFunctionEventInvokeConfigRequest$ = exports.UpdateFunctionConfigurationRequest$ = exports.UpdateFunctionCodeRequest$ = exports.UpdateEventSourceMappingRequest$ = exports.UpdateCodeSigningConfigResponse$ = exports.UpdateCodeSigningConfigRequest$ = exports.UpdateCapacityProviderResponse$ = exports.UpdateCapacityProviderRequest$ = exports.UpdateAliasRequest$ = exports.UntagResourceRequest$ = exports.TracingConfigResponse$ = exports.TracingConfig$ = exports.TraceHeader$ = exports.TenancyConfig$ = exports.TargetTrackingScalingPolicy$ = exports.TagsError$ = exports.TagResourceRequest$ = exports.StopDurableExecutionResponse$ = exports.StopDurableExecutionRequest$ = exports.StepSucceededDetails$ = exports.StepStartedDetails$ = exports.StepOptions$ = exports.StepFailedDetails$ = exports.StepDetails$ = exports.SourceAccessConfiguration$ = exports.SnapStartResponse$ = exports.SnapStart$ = exports.SendDurableExecutionCallbackSuccessResponse$ = exports.SendDurableExecutionCallbackSuccessRequest$ = exports.SendDurableExecutionCallbackHeartbeatResponse$ = exports.SendDurableExecutionCallbackHeartbeatRequest$ = exports.SendDurableExecutionCallbackFailureResponse$ = exports.SendDurableExecutionCallbackFailureRequest$ = exports.SelfManagedKafkaEventSourceConfig$ = exports.SelfManagedEventSource$ = exports.ScalingConfig$ = exports.RuntimeVersionError$ = exports.RuntimeVersionConfig$ = exports.RetryDetails$ = exports.RemovePermissionRequest$ = exports.RemoveLayerVersionPermissionRequest$ = exports.PutRuntimeManagementConfigResponse$ = exports.PutRuntimeManagementConfigRequest$ = exports.PutProvisionedConcurrencyConfigResponse$ = exports.PutProvisionedConcurrencyConfigRequest$ = exports.PutFunctionScalingConfigResponse$ = exports.PutFunctionScalingConfigRequest$ = void 0;
exports.Invoke$ = exports.GetRuntimeManagementConfig$ = exports.GetProvisionedConcurrencyConfig$ = exports.GetPolicy$ = exports.GetLayerVersionPolicy$ = exports.GetLayerVersionByArn$ = exports.GetLayerVersion$ = exports.GetFunctionUrlConfig$ = exports.GetFunctionScalingConfig$ = exports.GetFunctionRecursionConfig$ = exports.GetFunctionEventInvokeConfig$ = exports.GetFunctionConfiguration$ = exports.GetFunctionConcurrency$ = exports.GetFunctionCodeSigningConfig$ = exports.GetFunction$ = exports.GetEventSourceMapping$ = exports.GetDurableExecutionState$ = exports.GetDurableExecutionHistory$ = exports.GetDurableExecution$ = exports.GetCodeSigningConfig$ = exports.GetCapacityProvider$ = exports.GetAlias$ = exports.GetAccountSettings$ = exports.DeleteProvisionedConcurrencyConfig$ = exports.DeleteLayerVersion$ = exports.DeleteFunctionUrlConfig$ = exports.DeleteFunctionEventInvokeConfig$ = exports.DeleteFunctionConcurrency$ = exports.DeleteFunctionCodeSigningConfig$ = exports.DeleteFunction$ = exports.DeleteEventSourceMapping$ = exports.DeleteCodeSigningConfig$ = exports.DeleteCapacityProvider$ = exports.DeleteAlias$ = exports.CreateFunctionUrlConfig$ = exports.CreateFunction$ = exports.CreateEventSourceMapping$ = exports.CreateCodeSigningConfig$ = exports.CreateCapacityProvider$ = exports.CreateAlias$ = exports.CheckpointDurableExecution$ = exports.AddPermission$ = exports.AddLayerVersionPermission$ = exports.InvokeWithResponseStreamResponseEvent$ = exports.WaitSucceededDetails$ = exports.WaitStartedDetails$ = exports.WaitOptions$ = exports.WaitDetails$ = exports.WaitCancelledDetails$ = exports.VpcConfigResponse$ = void 0;
exports.UpdateFunctionUrlConfig$ = exports.UpdateFunctionEventInvokeConfig$ = exports.UpdateFunctionConfiguration$ = exports.UpdateFunctionCode$ = exports.UpdateEventSourceMapping$ = exports.UpdateCodeSigningConfig$ = exports.UpdateCapacityProvider$ = exports.UpdateAlias$ = exports.UntagResource$ = exports.TagResource$ = exports.StopDurableExecution$ = exports.SendDurableExecutionCallbackSuccess$ = exports.SendDurableExecutionCallbackHeartbeat$ = exports.SendDurableExecutionCallbackFailure$ = exports.RemovePermission$ = exports.RemoveLayerVersionPermission$ = exports.PutRuntimeManagementConfig$ = exports.PutProvisionedConcurrencyConfig$ = exports.PutFunctionScalingConfig$ = exports.PutFunctionRecursionConfig$ = exports.PutFunctionEventInvokeConfig$ = exports.PutFunctionConcurrency$ = exports.PutFunctionCodeSigningConfig$ = exports.PublishVersion$ = exports.PublishLayerVersion$ = exports.ListVersionsByFunction$ = exports.ListTags$ = exports.ListProvisionedConcurrencyConfigs$ = exports.ListLayerVersions$ = exports.ListLayers$ = exports.ListFunctionVersionsByCapacityProvider$ = exports.ListFunctionUrlConfigs$ = exports.ListFunctionsByCodeSigningConfig$ = exports.ListFunctions$ = exports.ListFunctionEventInvokeConfigs$ = exports.ListEventSourceMappings$ = exports.ListDurableExecutionsByFunction$ = exports.ListCodeSigningConfigs$ = exports.ListCapacityProviders$ = exports.ListAliases$ = exports.InvokeWithResponseStream$ = exports.InvokeAsync$ = void 0;
const _A = "Action";
const _AA = "AliasArn";
const _AC = "AliasConfiguration";
const _ACc = "AccessConfigs";
const _ACl = "AllowCredentials";
const _AFSC = "AppliedFunctionScalingConfig";
const _AH = "AllowHeaders";
const _AIT = "AllowedInstanceTypes";
const _AL = "AccountLimit";
const _ALL = "ApplicationLogLevel";
const _ALVP = "AddLayerVersionPermission";
const _ALVPR = "AddLayerVersionPermissionRequest";
const _ALVPRd = "AddLayerVersionPermissionResponse";
const _ALl = "AliasList";
const _AM = "AllowMethods";
const _AMKESC = "AmazonManagedKafkaEventSourceConfig";
const _AO = "AllowOrigins";
const _AOp = "ApplyOn";
const _AP = "AllowedPublishers";
const _APCE = "AvailableProvisionedConcurrentExecutions";
const _APCEl = "AllocatedProvisionedConcurrentExecutions";
const _APR = "AddPermissionRequest";
const _APRd = "AddPermissionResponse";
const _APd = "AddPermission";
const _ARC = "AliasRoutingConfiguration";
const _AT = "AuthType";
const _AU = "AccountUsage";
const _AVW = "AdditionalVersionWeights";
const _Al = "Aliases";
const _Ar = "Architectures";
const _Arn = "Arn";
const _At = "Attribute";
const _Att = "Attempt";
const _B = "Blob";
const _BBOFE = "BisectBatchOnFunctionError";
const _BOP = "BinaryOperationPayload";
const _BS = "BlobStream";
const _BSa = "BatchSize";
const _C = "Concurrency";
const _CA = "CompatibleArchitectures";
const _CAR = "CreateAliasRequest";
const _CAo = "CompatibleArchitecture";
const _CAr = "CreateAlias";
const _CAu = "CurrentAttempt";
const _CC = "ClientContext";
const _CCP = "CreateCapacityProvider";
const _CCPR = "CreateCapacityProviderRequest";
const _CCPRr = "CreateCapacityProviderResponse";
const _CCSC = "CreateCodeSigningConfig";
const _CCSCR = "CreateCodeSigningConfigRequest";
const _CCSCRr = "CreateCodeSigningConfigResponse";
const _CD = "CallbackDetails";
const _CDE = "CheckpointDurableExecution";
const _CDER = "CheckpointDurableExecutionRequest";
const _CDERh = "CheckpointDurableExecutionResponse";
const _CDo = "ContextDetails";
const _CDr = "CreatedDate";
const _CE = "ConcurrentExecutions";
const _CESM = "CreateEventSourceMapping";
const _CESMR = "CreateEventSourceMappingRequest";
const _CF = "CreateFunction";
const _CFD = "CallbackFailedDetails";
const _CFDo = "ContextFailedDetails";
const _CFR = "CreateFunctionRequest";
const _CFUC = "CreateFunctionUrlConfig";
const _CFUCR = "CreateFunctionUrlConfigRequest";
const _CFUCRr = "CreateFunctionUrlConfigResponse";
const _CGI = "ConsumerGroupId";
const _CI = "CallbackId";
const _CID = "ChainedInvokeDetails";
const _CIFD = "ChainedInvokeFailedDetails";
const _CIO = "ChainedInvokeOptions";
const _CISD = "ChainedInvokeStartedDetails";
const _CISDh = "ChainedInvokeStoppedDetails";
const _CISDha = "ChainedInvokeSucceededDetails";
const _CITOD = "ChainedInvokeTimedOutDetails";
const _CN = "CollectionName";
const _CO = "CallbackOptions";
const _COo = "ContextOptions";
const _CP = "CapacityProvider";
const _CPA = "CapacityProviderArn";
const _CPC = "CapacityProviderConfig";
const _CPL = "CapacityProvidersList";
const _CPLEE = "CapacityProviderLimitExceededException";
const _CPN = "CapacityProviderName";
const _CPORA = "CapacityProviderOperatorRoleArn";
const _CPPC = "CapacityProviderPermissionsConfig";
const _CPSC = "CapacityProviderScalingConfig";
const _CPSPL = "CapacityProviderScalingPoliciesList";
const _CPVC = "CapacityProviderVpcConfig";
const _CPa = "CapacityProviders";
const _CR = "CompatibleRuntimes";
const _CRo = "CompatibleRuntime";
const _CS = "CodeSize";
const _CSC = "CodeSigningConfig";
const _CSCA = "CodeSigningConfigArn";
const _CSCI = "CodeSigningConfigId";
const _CSCL = "CodeSigningConfigList";
const _CSCNFE = "CodeSigningConfigNotFoundException";
const _CSCo = "CodeSigningConfigs";
const _CSD = "CallbackStartedDetails";
const _CSDa = "CallbackSucceededDetails";
const _CSDo = "ContextStartedDetails";
const _CSDon = "ContextSucceededDetails";
const _CSEE = "CodeStorageExceededException";
const _CSP = "CodeSigningPolicies";
const _CSU = "CodeSizeUnzipped";
const _CSZ = "CodeSizeZipped";
const _CSo = "CodeSha256";
const _CSon = "ConfigSha256";
const _CT = "CheckpointToken";
const _CTE = "CallbackTimeoutException";
const _CTOD = "CallbackTimedOutDetails";
const _CT_ = "Content-Type";
const _CTl = "ClientToken";
const _CTr = "CreationTime";
const _CUES = "CheckpointUpdatedExecutionState";
const _CVFE = "CodeVerificationFailedException";
const _Co = "Cors";
const _Cod = "Code";
const _Com = "Command";
const _Con = "Configuration";
const _Cont = "Content";
const _D = "Description";
const _DA = "DeleteAlias";
const _DAR = "DeleteAliasRequest";
const _DC = "DestinationConfig";
const _DCP = "DeleteCapacityProvider";
const _DCPR = "DeleteCapacityProviderRequest";
const _DCPRe = "DeleteCapacityProviderResponse";
const _DCSC = "DeleteCodeSigningConfig";
const _DCSCR = "DeleteCodeSigningConfigRequest";
const _DCSCRe = "DeleteCodeSigningConfigResponse";
const _DCu = "DurableConfig";
const _DDBESC = "DocumentDBEventSourceConfig";
const _DE = "DurableExecutions";
const _DEA = "DurableExecutionArn";
const _DEASE = "DurableExecutionAlreadyStartedException";
const _DEN = "DurableExecutionName";
const _DESM = "DeleteEventSourceMapping";
const _DESMR = "DeleteEventSourceMappingRequest";
const _DF = "DeleteFunction";
const _DFC = "DeleteFunctionConcurrency";
const _DFCR = "DeleteFunctionConcurrencyRequest";
const _DFCSC = "DeleteFunctionCodeSigningConfig";
const _DFCSCR = "DeleteFunctionCodeSigningConfigRequest";
const _DFEIC = "DeleteFunctionEventInvokeConfig";
const _DFEICR = "DeleteFunctionEventInvokeConfigRequest";
const _DFR = "DeleteFunctionRequest";
const _DFRe = "DeleteFunctionResponse";
const _DFUC = "DeleteFunctionUrlConfig";
const _DFUCR = "DeleteFunctionUrlConfigRequest";
const _DLC = "DeadLetterConfig";
const _DLV = "DeleteLayerVersion";
const _DLVR = "DeleteLayerVersionRequest";
const _DN = "DatabaseName";
const _DPCC = "DeleteProvisionedConcurrencyConfig";
const _DPCCR = "DeleteProvisionedConcurrencyConfigRequest";
const _DR = "DryRun";
const _De = "Destination";
const _Du = "Duration";
const _E = "Error";
const _EC = "ErrorCode";
const _ECADE = "EC2AccessDeniedException";
const _ECEC = "EC2ErrorCode";
const _ECTE = "EC2ThrottledException";
const _ECUE = "EC2UnexpectedException";
const _ED = "ErrorData";
const _EDr = "ErrorDetails";
const _EDx = "ExecutionDetails";
const _EE = "EnvironmentError";
const _EEMGBPVC = "ExecutionEnvironmentMemoryGiBPerVCpu";
const _EEv = "EventError";
const _EFD = "ExecutionFailedDetails";
const _EFSIOE = "EFSIOException";
const _EFSMCE = "EFSMountConnectivityException";
const _EFSMFE = "EFSMountFailureException";
const _EFSMTE = "EFSMountTimeoutException";
const _EH = "ExposeHeaders";
const _EI = "EventId";
const _EIT = "ExcludedInstanceTypes";
const _EIv = "EventInput";
const _EM = "ErrorMessage";
const _ENILRE = "ENILimitReachedException";
const _EO = "ErrorObject";
const _EP = "EntryPoint";
const _ER = "EnvironmentResponse";
const _ERF = "EventRecordFormat";
const _ERv = "EventResult";
const _ES = "EphemeralStorage";
const _ESA = "EventSourceArn";
const _ESD = "ExecutionStartedDetails";
const _ESDx = "ExecutionSucceededDetails";
const _ESDxe = "ExecutionStoppedDetails";
const _ESM = "EventSourceMappings";
const _ESMA = "EventSourceMappingArn";
const _ESMC = "EventSourceMappingConfiguration";
const _ESML = "EventSourceMappingsList";
const _ESMLC = "EventSourceMappingLoggingConfig";
const _ESMMC = "EventSourceMappingMetricsConfig";
const _EST = "EventSourceToken";
const _ESv = "EventStream";
const _ET = "ErrorType";
const _ETOD = "ExecutionTimedOutDetails";
const _ETn = "EndTimestamp";
const _ETv = "EventType";
const _ETve = "EventTimestamp";
const _ETx = "ExecutionTimeout";
const _EV = "ExecutedVersion";
const _EVN = "EnvironmentVariableName";
const _EVV = "EnvironmentVariableValue";
const _EVn = "EnvironmentVariables";
const _En = "Enabled";
const _End = "Endpoints";
const _Env = "Environment";
const _Ev = "Event";
const _Eve = "Events";
const _Ex = "Execution";
const _F = "Filter";
const _FA = "FunctionArn";
const _FAu = "FunctionArns";
const _FC = "FunctionCount";
const _FCE = "FilterCriteriaError";
const _FCL = "FunctionCodeLocation";
const _FCi = "FilterCriteria";
const _FCu = "FunctionCode";
const _FCun = "FunctionConfiguration";
const _FD = "FullDocument";
const _FE = "FunctionError";
const _FEIC = "FunctionEventInvokeConfig";
const _FEICL = "FunctionEventInvokeConfigList";
const _FEICu = "FunctionEventInvokeConfigs";
const _FL = "FilterList";
const _FLu = "FunctionList";
const _FN = "FunctionName";
const _FRT = "FunctionResponseTypes";
const _FS = "FunctionState";
const _FSC = "FileSystemConfigs";
const _FSCL = "FileSystemConfigList";
const _FSCi = "FileSystemConfig";
const _FSCu = "FunctionScalingConfig";
const _FU = "FunctionUrl";
const _FUAT = "FunctionUrlAuthType";
const _FUC = "FunctionUrlConfig";
const _FUCL = "FunctionUrlConfigList";
const _FUCu = "FunctionUrlConfigs";
const _FV = "FunctionVersion";
const _FVBCPL = "FunctionVersionsByCapacityProviderList";
const _FVBCPLI = "FunctionVersionsByCapacityProviderListItem";
const _FVPCPLEE = "FunctionVersionsPerCapacityProviderLimitExceededException";
const _FVu = "FunctionVersions";
const _Fi = "Filters";
const _Fu = "Functions";
const _GA = "GetAlias";
const _GAR = "GetAliasRequest";
const _GAS = "GetAccountSettings";
const _GASR = "GetAccountSettingsRequest";
const _GASRe = "GetAccountSettingsResponse";
const _GCP = "GetCapacityProvider";
const _GCPR = "GetCapacityProviderRequest";
const _GCPRe = "GetCapacityProviderResponse";
const _GCSC = "GetCodeSigningConfig";
const _GCSCR = "GetCodeSigningConfigRequest";
const _GCSCRe = "GetCodeSigningConfigResponse";
const _GDE = "GetDurableExecution";
const _GDEH = "GetDurableExecutionHistory";
const _GDEHR = "GetDurableExecutionHistoryRequest";
const _GDEHRe = "GetDurableExecutionHistoryResponse";
const _GDER = "GetDurableExecutionRequest";
const _GDERe = "GetDurableExecutionResponse";
const _GDES = "GetDurableExecutionState";
const _GDESR = "GetDurableExecutionStateRequest";
const _GDESRe = "GetDurableExecutionStateResponse";
const _GESM = "GetEventSourceMapping";
const _GESMR = "GetEventSourceMappingRequest";
const _GF = "GetFunction";
const _GFC = "GetFunctionConcurrency";
const _GFCR = "GetFunctionConcurrencyRequest";
const _GFCRe = "GetFunctionConcurrencyResponse";
const _GFCRet = "GetFunctionConfigurationRequest";
const _GFCSC = "GetFunctionCodeSigningConfig";
const _GFCSCR = "GetFunctionCodeSigningConfigRequest";
const _GFCSCRe = "GetFunctionCodeSigningConfigResponse";
const _GFCe = "GetFunctionConfiguration";
const _GFEIC = "GetFunctionEventInvokeConfig";
const _GFEICR = "GetFunctionEventInvokeConfigRequest";
const _GFR = "GetFunctionRequest";
const _GFRC = "GetFunctionRecursionConfig";
const _GFRCR = "GetFunctionRecursionConfigRequest";
const _GFRCRe = "GetFunctionRecursionConfigResponse";
const _GFRe = "GetFunctionResponse";
const _GFSC = "GetFunctionScalingConfig";
const _GFSCR = "GetFunctionScalingConfigRequest";
const _GFSCRe = "GetFunctionScalingConfigResponse";
const _GFUC = "GetFunctionUrlConfig";
const _GFUCR = "GetFunctionUrlConfigRequest";
const _GFUCRe = "GetFunctionUrlConfigResponse";
const _GLV = "GetLayerVersion";
const _GLVBA = "GetLayerVersionByArn";
const _GLVBAR = "GetLayerVersionByArnRequest";
const _GLVP = "GetLayerVersionPolicy";
const _GLVPR = "GetLayerVersionPolicyRequest";
const _GLVPRe = "GetLayerVersionPolicyResponse";
const _GLVR = "GetLayerVersionRequest";
const _GLVRe = "GetLayerVersionResponse";
const _GP = "GetPolicy";
const _GPCC = "GetProvisionedConcurrencyConfig";
const _GPCCR = "GetProvisionedConcurrencyConfigRequest";
const _GPCCRe = "GetProvisionedConcurrencyConfigResponse";
const _GPR = "GetPolicyRequest";
const _GPRe = "GetPolicyResponse";
const _GRMC = "GetRuntimeManagementConfig";
const _GRMCR = "GetRuntimeManagementConfigRequest";
const _GRMCRe = "GetRuntimeManagementConfigResponse";
const _H = "Handler";
const _HT = "HeartbeatTimeout";
const _HTS = "HeartbeatTimeoutSeconds";
const _I = "Input";
const _IA = "InvokeArgs";
const _IAFDS = "Ipv6AllowedForDualStack";
const _IAR = "InvokeAsyncRequest";
const _IARn = "InvokeAsyncResponse";
const _IAn = "InvokeAsync";
const _IC = "ImageConfig";
const _ICD = "InvocationCompletedDetails";
const _ICE = "ImageConfigError";
const _ICR = "ImageConfigResponse";
const _ICSE = "InvalidCodeSignatureException";
const _ICn = "InvokeComplete";
const _IED = "IncludeExecutionData";
const _IM = "InvokeMode";
const _IP = "InputPayload";
const _IPVE = "InvalidParameterValueException";
const _IR = "InstanceRequirements";
const _IRCE = "InvalidRequestContentException";
const _IRE = "InvalidRuntimeException";
const _IRSU = "InvokeResponseStreamUpdate";
const _IRn = "InvocationRequest";
const _IRnv = "InvocationResponse";
const _ISGIDE = "InvalidSecurityGroupIDException";
const _ISIDE = "InvalidSubnetIDException";
const _IT = "InvocationType";
const _IU = "ImageUri";
const _IVFU = "InvokedViaFunctionUrl";
const _IWRS = "InvokeWithResponseStream";
const _IWRSCE = "InvokeWithResponseStreamCompleteEvent";
const _IWRSR = "InvokeWithResponseStreamRequest";
const _IWRSRE = "InvokeWithResponseStreamResponseEvent";
const _IWRSRn = "InvokeWithResponseStreamResponse";
const _IZFE = "InvalidZipFileException";
const _Id = "Id";
const _In = "Invoke";
const _KKA = "KmsKeyArn";
const _KMSADE = "KMSAccessDeniedException";
const _KMSDE = "KMSDisabledException";
const _KMSISE = "KMSInvalidStateException";
const _KMSKA = "KMSKeyArn";
const _KMSNFE = "KMSNotFoundException";
const _KSRAC = "KafkaSchemaRegistryAccessConfig";
const _KSRACL = "KafkaSchemaRegistryAccessConfigList";
const _KSRC = "KafkaSchemaRegistryConfig";
const _KSVC = "KafkaSchemaValidationConfig";
const _KSVCL = "KafkaSchemaValidationConfigList";
const _L = "Layers";
const _LA = "LayerArn";
const _LAR = "ListAliasesRequest";
const _LARi = "ListAliasesResponse";
const _LAi = "ListAliases";
const _LC = "LoggingConfig";
const _LCP = "ListCapacityProviders";
const _LCPR = "ListCapacityProvidersRequest";
const _LCPRi = "ListCapacityProvidersResponse";
const _LCSC = "ListCodeSigningConfigs";
const _LCSCR = "ListCodeSigningConfigsRequest";
const _LCSCRi = "ListCodeSigningConfigsResponse";
const _LDEBF = "ListDurableExecutionsByFunction";
const _LDEBFR = "ListDurableExecutionsByFunctionRequest";
const _LDEBFRi = "ListDurableExecutionsByFunctionResponse";
const _LESM = "ListEventSourceMappings";
const _LESMR = "ListEventSourceMappingsRequest";
const _LESMRi = "ListEventSourceMappingsResponse";
const _LF = "LogFormat";
const _LFBCSC = "ListFunctionsByCodeSigningConfig";
const _LFBCSCR = "ListFunctionsByCodeSigningConfigRequest";
const _LFBCSCRi = "ListFunctionsByCodeSigningConfigResponse";
const _LFEIC = "ListFunctionEventInvokeConfigs";
const _LFEICR = "ListFunctionEventInvokeConfigsRequest";
const _LFEICRi = "ListFunctionEventInvokeConfigsResponse";
const _LFR = "ListFunctionsRequest";
const _LFRi = "ListFunctionsResponse";
const _LFUC = "ListFunctionUrlConfigs";
const _LFUCR = "ListFunctionUrlConfigsRequest";
const _LFUCRi = "ListFunctionUrlConfigsResponse";
const _LFVBCP = "ListFunctionVersionsByCapacityProvider";
const _LFVBCPR = "ListFunctionVersionsByCapacityProviderRequest";
const _LFVBCPRi = "ListFunctionVersionsByCapacityProviderResponse";
const _LFi = "ListFunctions";
const _LG = "LogGroup";
const _LI = "LicenseInfo";
const _LL = "LayersList";
const _LLI = "LayersListItem";
const _LLR = "ListLayersRequest";
const _LLRi = "ListLayersResponse";
const _LLV = "ListLayerVersions";
const _LLVR = "ListLayerVersionsRequest";
const _LLVRi = "ListLayerVersionsResponse";
const _LLi = "ListLayers";
const _LM = "LastModified";
const _LMICPC = "LambdaManagedInstancesCapacityProviderConfig";
const _LMP = "LocalMountPath";
const _LMT = "LastModifiedTime";
const _LMV = "LatestMatchingVersion";
const _LN = "LayerName";
const _LPCC = "ListProvisionedConcurrencyConfigs";
const _LPCCR = "ListProvisionedConcurrencyConfigsRequest";
const _LPCCRi = "ListProvisionedConcurrencyConfigsResponse";
const _LPR = "LastProcessingResult";
const _LR = "LogResult";
const _LRL = "LayersReferenceList";
const _LT = "LogType";
const _LTR = "ListTagsRequest";
const _LTRi = "ListTagsResponse";
const _LTi = "ListTags";
const _LUS = "LastUpdateStatus";
const _LUSR = "LastUpdateStatusReason";
const _LUSRC = "LastUpdateStatusReasonCode";
const _LV = "LayerVersions";
const _LVA = "LayerVersionArn";
const _LVBF = "ListVersionsByFunction";
const _LVBFR = "ListVersionsByFunctionRequest";
const _LVBFRi = "ListVersionsByFunctionResponse";
const _LVCI = "LayerVersionContentInput";
const _LVCO = "LayerVersionContentOutput";
const _LVL = "LayerVersionsList";
const _LVLI = "LayerVersionsListItem";
const _La = "Layer";
const _Lo = "Location";
const _M = "Message";
const _MA = "MaxAge";
const _MAa = "MasterArn";
const _MBWIS = "MaximumBatchingWindowInSeconds";
const _MC = "MetricsConfig";
const _MCa = "MaximumConcurrency";
const _MEAIS = "MaximumEventAgeInSeconds";
const _MEE = "MinExecutionEnvironments";
const _MEEa = "MaxExecutionEnvironments";
const _MI = "MaxItems";
const _MP = "MinimumPollers";
const _MPa = "MaximumPollers";
const _MR = "MasterRegion";
const _MRA = "MaximumRetryAttempts";
const _MRAIS = "MaximumRecordAgeInSeconds";
const _MS = "MemorySize";
const _MVCC = "MaxVCpuCount";
const _Ma = "Marker";
const _Me = "Metrics";
const _Mo = "Mode";
const _N = "Name";
const _NADS = "NextAttemptDelaySeconds";
const _NAT = "NextAttemptTimestamp";
const _NES = "NewExecutionState";
const _NM = "NextMarker";
const _NPVE = "NoPublishedVersionException";
const _O = "Operations";
const _OF = "OnFailure";
const _OI = "OrganizationId";
const _OP = "OperationPayload";
const _OPu = "OutputPayload";
const _OS = "OnSuccess";
const _OSp = "OptimizationStatus";
const _OU = "OperationUpdate";
const _OUp = "OperationUpdates";
const _Op = "Operation";
const _P = "Principal";
const _PC = "PermissionsConfig";
const _PCC = "ProvisionedConcurrencyConfigs";
const _PCCL = "ProvisionedConcurrencyConfigList";
const _PCCLI = "ProvisionedConcurrencyConfigListItem";
const _PCCNFE = "ProvisionedConcurrencyConfigNotFoundException";
const _PCE = "ProvisionedConcurrentExecutions";
const _PCa = "PayloadChunk";
const _PEEMC = "PerExecutionEnvironmentMaxConcurrency";
const _PF = "ParallelizationFactor";
const _PFC = "PutFunctionConcurrency";
const _PFCR = "PutFunctionConcurrencyRequest";
const _PFCSC = "PutFunctionCodeSigningConfig";
const _PFCSCR = "PutFunctionCodeSigningConfigRequest";
const _PFCSCRu = "PutFunctionCodeSigningConfigResponse";
const _PFE = "PreconditionFailedException";
const _PFEIC = "PutFunctionEventInvokeConfig";
const _PFEICR = "PutFunctionEventInvokeConfigRequest";
const _PFRC = "PutFunctionRecursionConfig";
const _PFRCR = "PutFunctionRecursionConfigRequest";
const _PFRCRu = "PutFunctionRecursionConfigResponse";
const _PFSC = "PutFunctionScalingConfig";
const _PFSCR = "PutFunctionScalingConfigRequest";
const _PFSCRu = "PutFunctionScalingConfigResponse";
const _PGN = "PollerGroupName";
const _PI = "ParentId";
const _PLEE = "PolicyLengthExceededException";
const _PLV = "PublishLayerVersion";
const _PLVR = "PublishLayerVersionRequest";
const _PLVRu = "PublishLayerVersionResponse";
const _PMT = "PredefinedMetricType";
const _POID = "PrincipalOrgID";
const _PPC = "ProvisionedPollerConfig";
const _PPCC = "PutProvisionedConcurrencyConfig";
const _PPCCR = "PutProvisionedConcurrencyConfigRequest";
const _PPCCRu = "PutProvisionedConcurrencyConfigResponse";
const _PRMC = "PutRuntimeManagementConfig";
const _PRMCR = "PutRuntimeManagementConfigRequest";
const _PRMCRu = "PutRuntimeManagementConfigResponse";
const _PT = "PackageType";
const _PTu = "PublishTo";
const _PV = "PublishVersion";
const _PVR = "PublishVersionRequest";
const _Pa = "Payload";
const _Pat = "Pattern";
const _Po = "Policy";
const _Pu = "Publish";
const _Q = "Qualifier";
const _Qu = "Queues";
const _R = "Reason";
const _RA = "Retry-After";
const _RC = "RoutingConfig";
const _RCE = "ResourceConflictException";
const _RCEe = "ReservedConcurrentExecutions";
const _RCe = "ReplayChildren";
const _RD = "RetryDetails";
const _RFSC = "RequestedFunctionScalingConfig";
const _RI = "RevisionId";
const _RIE = "RecursiveInvocationException";
const _RIU = "ResolvedImageUri";
const _RIUE = "ResourceInUseException";
const _RIe = "RequestId";
const _RL = "RecursiveLoop";
const _RLVP = "RemoveLayerVersionPermission";
const _RLVPR = "RemoveLayerVersionPermissionRequest";
const _RNFE = "ResourceNotFoundException";
const _RNRE = "ResourceNotReadyException";
const _RO = "ReverseOrder";
const _RP = "RemovePermission";
const _RPCE = "RequestedProvisionedConcurrentExecutions";
const _RPID = "RetentionPeriodInDays";
const _RPR = "RemovePermissionRequest";
const _RSCT = "ResponseStreamContentType";
const _RT = "RepositoryType";
const _RTLE = "RequestTooLargeException";
const _RVA = "RuntimeVersionArn";
const _RVC = "RuntimeVersionConfig";
const _RVE = "RuntimeVersionError";
const _Re = "Result";
const _Res = "Resource";
const _Ro = "Role";
const _Ru = "Runtime";
const _S = "Statement";
const _SA = "SourceArn";
const _SAC = "SourceAccessConfigurations";
const _SACo = "SourceAccessConfiguration";
const _SAo = "SourceAccount";
const _SAt = "StartedAfter";
const _SB = "S3Bucket";
const _SBt = "StartedBefore";
const _SC = "ScalingConfig";
const _SCt = "StatusCode";
const _SD = "StepDetails";
const _SDE = "StopDurableExecution";
const _SDECF = "SendDurableExecutionCallbackFailure";
const _SDECFR = "SendDurableExecutionCallbackFailureRequest";
const _SDECFRe = "SendDurableExecutionCallbackFailureResponse";
const _SDECH = "SendDurableExecutionCallbackHeartbeat";
const _SDECHR = "SendDurableExecutionCallbackHeartbeatRequest";
const _SDECHRe = "SendDurableExecutionCallbackHeartbeatResponse";
const _SDECS = "SendDurableExecutionCallbackSuccess";
const _SDECSR = "SendDurableExecutionCallbackSuccessRequest";
const _SDECSRe = "SendDurableExecutionCallbackSuccessResponse";
const _SDER = "StopDurableExecutionRequest";
const _SDERt = "StopDurableExecutionResponse";
const _SE = "ServiceException";
const _SET = "ScheduledEndTimestamp";
const _SFD = "StepFailedDetails";
const _SGI = "SecurityGroupIds";
const _SI = "StatementId";
const _SIPALRE = "SubnetIPAddressLimitReachedException";
const _SIu = "SubnetIds";
const _SJA = "SigningJobArn";
const _SK = "S3Key";
const _SKMSKA = "SourceKMSKeyArn";
const _SLL = "SystemLogLevel";
const _SM = "ScalingMode";
const _SMES = "SelfManagedEventSource";
const _SMKESC = "SelfManagedKafkaEventSourceConfig";
const _SO = "StepOptions";
const _SOV = "S3ObjectVersion";
const _SP = "ScalingPolicies";
const _SPT = "StartingPositionTimestamp";
const _SPVA = "SigningProfileVersionArns";
const _SPVAi = "SigningProfileVersionArn";
const _SPt = "StartingPosition";
const _SR = "StateReason";
const _SRC = "SchemaRegistryConfig";
const _SRCt = "StateReasonCode";
const _SRETLE = "SerializedRequestEntityTooLargeException";
const _SRURI = "SchemaRegistryURI";
const _SRt = "StatusReason";
const _SS = "SensitiveString";
const _SSD = "StepStartedDetails";
const _SSDt = "StepSucceededDetails";
const _SSE = "SnapStartException";
const _SSNRE = "SnapStartNotReadyException";
const _SSR = "SnapStartResponse";
const _SSTE = "SnapStartTimeoutException";
const _SSn = "SnapStart";
const _ST = "StackTrace";
const _STE = "StackTraceEntry";
const _STEt = "StackTraceEntries";
const _STR = "StateTransitionReason";
const _STt = "StartTimestamp";
const _STto = "StopTimestamp";
const _STu = "SubType";
const _SVC = "SchemaValidationConfigs";
const _Si = "Size";
const _St = "State";
const _Sta = "Status";
const _Stat = "Statuses";
const _T = "Type";
const _TA = "TargetArn";
const _TC = "TracingConfig";
const _TCR = "TracingConfigResponse";
const _TCS = "TotalCodeSize";
const _TCe = "TenancyConfig";
const _TE = "TagsError";
const _TH = "TraceHeader";
const _TI = "TenantId";
const _TIM = "TenantIsolationMode";
const _TK = "TagKeys";
const _TMRE = "TooManyRequestsException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TS = "TimeoutSeconds";
const _TTSP = "TargetTrackingScalingPolicy";
const _TV = "TargetValue";
const _TWIS = "TumblingWindowInSeconds";
const _Ta = "Tags";
const _Ti = "Timeout";
const _To = "Topics";
const _Tr = "Truncated";
const _U = "Updates";
const _UA = "UpdateAlias";
const _UAOD = "UntrustedArtifactOnDeployment";
const _UAR = "UpdateAliasRequest";
const _UCE = "UnreservedConcurrentExecutions";
const _UCP = "UpdateCapacityProvider";
const _UCPR = "UpdateCapacityProviderRequest";
const _UCPRp = "UpdateCapacityProviderResponse";
const _UCSC = "UpdateCodeSigningConfig";
const _UCSCR = "UpdateCodeSigningConfigRequest";
const _UCSCRp = "UpdateCodeSigningConfigResponse";
const _UESM = "UpdateEventSourceMapping";
const _UESMR = "UpdateEventSourceMappingRequest";
const _UFC = "UpdateFunctionCode";
const _UFCR = "UpdateFunctionCodeRequest";
const _UFCRp = "UpdateFunctionConfigurationRequest";
const _UFCp = "UpdateFunctionConfiguration";
const _UFEIC = "UpdateFunctionEventInvokeConfig";
const _UFEICR = "UpdateFunctionEventInvokeConfigRequest";
const _UFUC = "UpdateFunctionUrlConfig";
const _UFUCR = "UpdateFunctionUrlConfigRequest";
const _UFUCRp = "UpdateFunctionUrlConfigResponse";
const _UMTE = "UnsupportedMediaTypeException";
const _UR = "UntagResource";
const _URI = "URI";
const _URO = "UpdateRuntimeOn";
const _URR = "UntagResourceRequest";
const _UUID = "UUID";
const _V = "Variables";
const _VC = "VpcConfig";
const _VCR = "VpcConfigResponse";
const _VI = "VpcId";
const _VN = "VersionNumber";
const _Ve = "Version";
const _Ver = "Versions";
const _WCD = "WaitCancelledDetails";
const _WD = "WorkingDirectory";
const _WDa = "WaitDetails";
const _WO = "WaitOptions";
const _WS = "WaitSeconds";
const _WSD = "WaitStartedDetails";
const _WSDa = "WaitSucceededDetails";
const _XACC = "X-Amz-Client-Context";
const _XADEA = "X-Amz-Durable-Execution-Arn";
const _XADEN = "X-Amz-Durable-Execution-Name";
const _XAEV = "X-Amz-Executed-Version";
const _XAFE = "X-Amz-Function-Error";
const _XAIT = "X-Amz-Invocation-Type";
const _XALR = "X-Amz-Log-Result";
const _XALT = "X-Amz-Log-Type";
const _XATI = "X-Amz-Tenant-Id";
const _XATIm = "XAmznTraceId";
const _ZF = "ZipFile";
const _c = "client";
const _e = "error";
const _eP = "eventPayload";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _rAS = "retryAfterSeconds";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.lambda";
const _se = "server";
const _st = "streaming";
const _tK = "tagKeys";
const n0 = "com.amazonaws.lambda";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const LambdaServiceException_1 = require("../models/LambdaServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.LambdaServiceException$ = [-3, _s, "LambdaServiceException", 0, [], []];
_s_registry.registerError(exports.LambdaServiceException$, LambdaServiceException_1.LambdaServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.CallbackTimeoutException$ = [-3, n0, _CTE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.CallbackTimeoutException$, errors_1.CallbackTimeoutException);
exports.CapacityProviderLimitExceededException$ = [-3, n0, _CPLEE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.CapacityProviderLimitExceededException$, errors_1.CapacityProviderLimitExceededException);
exports.CodeSigningConfigNotFoundException$ = [-3, n0, _CSCNFE,
    { [_e]: _c, [_hE]: 404 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.CodeSigningConfigNotFoundException$, errors_1.CodeSigningConfigNotFoundException);
exports.CodeStorageExceededException$ = [-3, n0, _CSEE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.CodeStorageExceededException$, errors_1.CodeStorageExceededException);
exports.CodeVerificationFailedException$ = [-3, n0, _CVFE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.CodeVerificationFailedException$, errors_1.CodeVerificationFailedException);
exports.DurableExecutionAlreadyStartedException$ = [-3, n0, _DEASE,
    { [_e]: _c, [_hE]: 409 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.DurableExecutionAlreadyStartedException$, errors_1.DurableExecutionAlreadyStartedException);
exports.EC2AccessDeniedException$ = [-3, n0, _ECADE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EC2AccessDeniedException$, errors_1.EC2AccessDeniedException);
exports.EC2ThrottledException$ = [-3, n0, _ECTE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EC2ThrottledException$, errors_1.EC2ThrottledException);
exports.EC2UnexpectedException$ = [-3, n0, _ECUE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M, _ECEC],
    [0, 0, 0]
];
n0_registry.registerError(exports.EC2UnexpectedException$, errors_1.EC2UnexpectedException);
exports.EFSIOException$ = [-3, n0, _EFSIOE,
    { [_e]: _c, [_hE]: 410 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EFSIOException$, errors_1.EFSIOException);
exports.EFSMountConnectivityException$ = [-3, n0, _EFSMCE,
    { [_e]: _c, [_hE]: 408 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EFSMountConnectivityException$, errors_1.EFSMountConnectivityException);
exports.EFSMountFailureException$ = [-3, n0, _EFSMFE,
    { [_e]: _c, [_hE]: 403 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EFSMountFailureException$, errors_1.EFSMountFailureException);
exports.EFSMountTimeoutException$ = [-3, n0, _EFSMTE,
    { [_e]: _c, [_hE]: 408 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.EFSMountTimeoutException$, errors_1.EFSMountTimeoutException);
exports.ENILimitReachedException$ = [-3, n0, _ENILRE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.ENILimitReachedException$, errors_1.ENILimitReachedException);
exports.FunctionVersionsPerCapacityProviderLimitExceededException$ = [-3, n0, _FVPCPLEE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.FunctionVersionsPerCapacityProviderLimitExceededException$, errors_1.FunctionVersionsPerCapacityProviderLimitExceededException);
exports.InvalidCodeSignatureException$ = [-3, n0, _ICSE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidCodeSignatureException$, errors_1.InvalidCodeSignatureException);
exports.InvalidParameterValueException$ = [-3, n0, _IPVE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.InvalidParameterValueException$, errors_1.InvalidParameterValueException);
exports.InvalidRequestContentException$ = [-3, n0, _IRCE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.InvalidRequestContentException$, errors_1.InvalidRequestContentException);
exports.InvalidRuntimeException$ = [-3, n0, _IRE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidRuntimeException$, errors_1.InvalidRuntimeException);
exports.InvalidSecurityGroupIDException$ = [-3, n0, _ISGIDE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidSecurityGroupIDException$, errors_1.InvalidSecurityGroupIDException);
exports.InvalidSubnetIDException$ = [-3, n0, _ISIDE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidSubnetIDException$, errors_1.InvalidSubnetIDException);
exports.InvalidZipFileException$ = [-3, n0, _IZFE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidZipFileException$, errors_1.InvalidZipFileException);
exports.KMSAccessDeniedException$ = [-3, n0, _KMSADE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.KMSAccessDeniedException$, errors_1.KMSAccessDeniedException);
exports.KMSDisabledException$ = [-3, n0, _KMSDE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.KMSDisabledException$, errors_1.KMSDisabledException);
exports.KMSInvalidStateException$ = [-3, n0, _KMSISE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.KMSInvalidStateException$, errors_1.KMSInvalidStateException);
exports.KMSNotFoundException$ = [-3, n0, _KMSNFE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.KMSNotFoundException$, errors_1.KMSNotFoundException);
exports.NoPublishedVersionException$ = [-3, n0, _NPVE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.NoPublishedVersionException$, errors_1.NoPublishedVersionException);
exports.PolicyLengthExceededException$ = [-3, n0, _PLEE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.PolicyLengthExceededException$, errors_1.PolicyLengthExceededException);
exports.PreconditionFailedException$ = [-3, n0, _PFE,
    { [_e]: _c, [_hE]: 412 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.PreconditionFailedException$, errors_1.PreconditionFailedException);
exports.ProvisionedConcurrencyConfigNotFoundException$ = [-3, n0, _PCCNFE,
    { [_e]: _c, [_hE]: 404 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.ProvisionedConcurrencyConfigNotFoundException$, errors_1.ProvisionedConcurrencyConfigNotFoundException);
exports.RecursiveInvocationException$ = [-3, n0, _RIE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.RecursiveInvocationException$, errors_1.RecursiveInvocationException);
exports.RequestTooLargeException$ = [-3, n0, _RTLE,
    { [_e]: _c, [_hE]: 413 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.RequestTooLargeException$, errors_1.RequestTooLargeException);
exports.ResourceConflictException$ = [-3, n0, _RCE,
    { [_e]: _c, [_hE]: 409 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.ResourceConflictException$, errors_1.ResourceConflictException);
exports.ResourceInUseException$ = [-3, n0, _RIUE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.ResourceInUseException$, errors_1.ResourceInUseException);
exports.ResourceNotFoundException$ = [-3, n0, _RNFE,
    { [_e]: _c, [_hE]: 404 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
exports.ResourceNotReadyException$ = [-3, n0, _RNRE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.ResourceNotReadyException$, errors_1.ResourceNotReadyException);
exports.SerializedRequestEntityTooLargeException$ = [-3, n0, _SRETLE,
    { [_e]: _c, [_hE]: 413 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.SerializedRequestEntityTooLargeException$, errors_1.SerializedRequestEntityTooLargeException);
exports.ServiceException$ = [-3, n0, _SE,
    { [_e]: _se, [_hE]: 500 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.ServiceException$, errors_1.ServiceException);
exports.SnapStartException$ = [-3, n0, _SSE,
    { [_e]: _c, [_hE]: 400 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.SnapStartException$, errors_1.SnapStartException);
exports.SnapStartNotReadyException$ = [-3, n0, _SSNRE,
    { [_e]: _c, [_hE]: 409 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.SnapStartNotReadyException$, errors_1.SnapStartNotReadyException);
exports.SnapStartTimeoutException$ = [-3, n0, _SSTE,
    { [_e]: _c, [_hE]: 408 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.SnapStartTimeoutException$, errors_1.SnapStartTimeoutException);
exports.SubnetIPAddressLimitReachedException$ = [-3, n0, _SIPALRE,
    { [_e]: _se, [_hE]: 502 },
    [_T, _M],
    [0, 0]
];
n0_registry.registerError(exports.SubnetIPAddressLimitReachedException$, errors_1.SubnetIPAddressLimitReachedException);
exports.TooManyRequestsException$ = [-3, n0, _TMRE,
    { [_e]: _c, [_hE]: 429 },
    [_rAS, _T, _m, _R],
    [[0, { [_hH]: _RA }], 0, 0, 0]
];
n0_registry.registerError(exports.TooManyRequestsException$, errors_1.TooManyRequestsException);
exports.UnsupportedMediaTypeException$ = [-3, n0, _UMTE,
    { [_e]: _c, [_hE]: 415 },
    [_T, _m],
    [0, 0]
];
n0_registry.registerError(exports.UnsupportedMediaTypeException$, errors_1.UnsupportedMediaTypeException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
var BinaryOperationPayload = [0, n0, _BOP, 8, 21];
var _Blob = [0, n0, _B, 8, 21];
var BlobStream = [0, n0, _BS, { [_st]: 1 }, 42];
var EnvironmentVariableName = [0, n0, _EVN, 8, 0];
var EnvironmentVariableValue = [0, n0, _EVV, 8, 0];
var ErrorData = [0, n0, _ED, 8, 0];
var ErrorMessage = [0, n0, _EM, 8, 0];
var ErrorType = [0, n0, _ET, 8, 0];
var InputPayload = [0, n0, _IP, 8, 0];
var OperationPayload = [0, n0, _OP, 8, 0];
var OutputPayload = [0, n0, _OPu, 8, 0];
var SensitiveString = [0, n0, _SS, 8, 0];
var StackTraceEntry = [0, n0, _STE, 8, 0];
exports.AccountLimit$ = [3, n0, _AL,
    0,
    [_TCS, _CSU, _CSZ, _CE, _UCE],
    [1, 1, 1, 1, 1]
];
exports.AccountUsage$ = [3, n0, _AU,
    0,
    [_TCS, _FC],
    [1, 1]
];
exports.AddLayerVersionPermissionRequest$ = [3, n0, _ALVPR,
    0,
    [_LN, _VN, _SI, _A, _P, _OI, _RI],
    [[0, 1], [1, 1], 0, 0, 0, 0, [0, { [_hQ]: _RI }]], 5
];
exports.AddLayerVersionPermissionResponse$ = [3, n0, _ALVPRd,
    0,
    [_S, _RI],
    [0, 0]
];
exports.AddPermissionRequest$ = [3, n0, _APR,
    0,
    [_FN, _SI, _A, _P, _SA, _SAo, _EST, _Q, _RI, _POID, _FUAT, _IVFU],
    [[0, 1], 0, 0, 0, 0, 0, 0, [0, { [_hQ]: _Q }], 0, 0, 0, 2], 4
];
exports.AddPermissionResponse$ = [3, n0, _APRd,
    0,
    [_S],
    [0]
];
exports.AliasConfiguration$ = [3, n0, _AC,
    0,
    [_AA, _N, _FV, _D, _RC, _RI],
    [0, 0, 0, 0, () => exports.AliasRoutingConfiguration$, 0]
];
exports.AliasRoutingConfiguration$ = [3, n0, _ARC,
    0,
    [_AVW],
    [128 | 1]
];
exports.AllowedPublishers$ = [3, n0, _AP,
    0,
    [_SPVA],
    [64 | 0], 1
];
exports.AmazonManagedKafkaEventSourceConfig$ = [3, n0, _AMKESC,
    0,
    [_CGI, _SRC],
    [0, () => exports.KafkaSchemaRegistryConfig$]
];
exports.CallbackDetails$ = [3, n0, _CD,
    0,
    [_CI, _Re, _E],
    [0, [() => OperationPayload, 0], [() => exports.ErrorObject$, 0]]
];
exports.CallbackFailedDetails$ = [3, n0, _CFD,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.CallbackOptions$ = [3, n0, _CO,
    0,
    [_TS, _HTS],
    [1, 1]
];
exports.CallbackStartedDetails$ = [3, n0, _CSD,
    0,
    [_CI, _HT, _Ti],
    [0, 1, 1], 1
];
exports.CallbackSucceededDetails$ = [3, n0, _CSDa,
    0,
    [_Re],
    [[() => exports.EventResult$, 0]], 1
];
exports.CallbackTimedOutDetails$ = [3, n0, _CTOD,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.CapacityProvider$ = [3, n0, _CP,
    0,
    [_CPA, _St, _VC, _PC, _IR, _CPSC, _KKA, _LM],
    [0, 0, () => exports.CapacityProviderVpcConfig$, () => exports.CapacityProviderPermissionsConfig$, () => exports.InstanceRequirements$, () => exports.CapacityProviderScalingConfig$, 0, 0], 4
];
exports.CapacityProviderConfig$ = [3, n0, _CPC,
    0,
    [_LMICPC],
    [() => exports.LambdaManagedInstancesCapacityProviderConfig$], 1
];
exports.CapacityProviderPermissionsConfig$ = [3, n0, _CPPC,
    0,
    [_CPORA],
    [0], 1
];
exports.CapacityProviderScalingConfig$ = [3, n0, _CPSC,
    0,
    [_MVCC, _SM, _SP],
    [1, 0, () => CapacityProviderScalingPoliciesList]
];
exports.CapacityProviderVpcConfig$ = [3, n0, _CPVC,
    0,
    [_SIu, _SGI],
    [64 | 0, 64 | 0], 2
];
exports.ChainedInvokeDetails$ = [3, n0, _CID,
    0,
    [_Re, _E],
    [[() => OperationPayload, 0], [() => exports.ErrorObject$, 0]]
];
exports.ChainedInvokeFailedDetails$ = [3, n0, _CIFD,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.ChainedInvokeOptions$ = [3, n0, _CIO,
    0,
    [_FN, _TI],
    [0, 0], 1
];
exports.ChainedInvokeStartedDetails$ = [3, n0, _CISD,
    0,
    [_FN, _TI, _I, _EV, _DEA],
    [0, 0, [() => exports.EventInput$, 0], 0, 0], 1
];
exports.ChainedInvokeStoppedDetails$ = [3, n0, _CISDh,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.ChainedInvokeSucceededDetails$ = [3, n0, _CISDha,
    0,
    [_Re],
    [[() => exports.EventResult$, 0]], 1
];
exports.ChainedInvokeTimedOutDetails$ = [3, n0, _CITOD,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.CheckpointDurableExecutionRequest$ = [3, n0, _CDER,
    0,
    [_DEA, _CT, _U, _CTl],
    [[0, 1], 0, [() => OperationUpdates, 0], [0, 4]], 2
];
exports.CheckpointDurableExecutionResponse$ = [3, n0, _CDERh,
    0,
    [_NES, _CT],
    [[() => exports.CheckpointUpdatedExecutionState$, 0], 0], 1
];
exports.CheckpointUpdatedExecutionState$ = [3, n0, _CUES,
    0,
    [_O, _NM],
    [[() => Operations, 0], 0]
];
exports.CodeSigningConfig$ = [3, n0, _CSC,
    0,
    [_CSCI, _CSCA, _AP, _CSP, _LM, _D],
    [0, 0, () => exports.AllowedPublishers$, () => exports.CodeSigningPolicies$, 0, 0], 5
];
exports.CodeSigningPolicies$ = [3, n0, _CSP,
    0,
    [_UAOD],
    [0]
];
exports.Concurrency$ = [3, n0, _C,
    0,
    [_RCEe],
    [1]
];
exports.ContextDetails$ = [3, n0, _CDo,
    0,
    [_RCe, _Re, _E],
    [2, [() => OperationPayload, 0], [() => exports.ErrorObject$, 0]]
];
exports.ContextFailedDetails$ = [3, n0, _CFDo,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.ContextOptions$ = [3, n0, _COo,
    0,
    [_RCe],
    [2]
];
exports.ContextStartedDetails$ = [3, n0, _CSDo,
    0,
    [],
    []
];
exports.ContextSucceededDetails$ = [3, n0, _CSDon,
    0,
    [_Re],
    [[() => exports.EventResult$, 0]], 1
];
exports.Cors$ = [3, n0, _Co,
    0,
    [_ACl, _AH, _AM, _AO, _EH, _MA],
    [2, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 1]
];
exports.CreateAliasRequest$ = [3, n0, _CAR,
    0,
    [_FN, _N, _FV, _D, _RC],
    [[0, 1], 0, 0, 0, () => exports.AliasRoutingConfiguration$], 3
];
exports.CreateCapacityProviderRequest$ = [3, n0, _CCPR,
    0,
    [_CPN, _VC, _PC, _IR, _CPSC, _KKA, _Ta],
    [0, () => exports.CapacityProviderVpcConfig$, () => exports.CapacityProviderPermissionsConfig$, () => exports.InstanceRequirements$, () => exports.CapacityProviderScalingConfig$, 0, 128 | 0], 3
];
exports.CreateCapacityProviderResponse$ = [3, n0, _CCPRr,
    0,
    [_CP],
    [() => exports.CapacityProvider$], 1
];
exports.CreateCodeSigningConfigRequest$ = [3, n0, _CCSCR,
    0,
    [_AP, _D, _CSP, _Ta],
    [() => exports.AllowedPublishers$, 0, () => exports.CodeSigningPolicies$, 128 | 0], 1
];
exports.CreateCodeSigningConfigResponse$ = [3, n0, _CCSCRr,
    0,
    [_CSC],
    [() => exports.CodeSigningConfig$], 1
];
exports.CreateEventSourceMappingRequest$ = [3, n0, _CESMR,
    0,
    [_FN, _ESA, _En, _BSa, _FCi, _MBWIS, _PF, _SPt, _SPT, _DC, _MRAIS, _BBOFE, _MRA, _Ta, _TWIS, _To, _Qu, _SAC, _SMES, _FRT, _AMKESC, _SMKESC, _SC, _DDBESC, _KMSKA, _MC, _LC, _PPC],
    [0, 0, 2, 1, () => exports.FilterCriteria$, 1, 1, 0, 4, () => exports.DestinationConfig$, 1, 2, 1, 128 | 0, 1, 64 | 0, 64 | 0, () => SourceAccessConfigurations, () => exports.SelfManagedEventSource$, 64 | 0, () => exports.AmazonManagedKafkaEventSourceConfig$, () => exports.SelfManagedKafkaEventSourceConfig$, () => exports.ScalingConfig$, () => exports.DocumentDBEventSourceConfig$, 0, () => exports.EventSourceMappingMetricsConfig$, () => exports.EventSourceMappingLoggingConfig$, () => exports.ProvisionedPollerConfig$], 1
];
exports.CreateFunctionRequest$ = [3, n0, _CFR,
    0,
    [_FN, _Ro, _Cod, _Ru, _H, _D, _Ti, _MS, _Pu, _VC, _PT, _DLC, _Env, _KMSKA, _TC, _Ta, _L, _FSC, _IC, _CSCA, _Ar, _ES, _SSn, _LC, _CPC, _PTu, _DCu, _TCe],
    [0, 0, [() => exports.FunctionCode$, 0], 0, 0, 0, 1, 1, 2, () => exports.VpcConfig$, 0, () => exports.DeadLetterConfig$, [() => exports.Environment$, 0], 0, () => exports.TracingConfig$, 128 | 0, 64 | 0, () => FileSystemConfigList, () => exports.ImageConfig$, 0, 64 | 0, () => exports.EphemeralStorage$, () => exports.SnapStart$, () => exports.LoggingConfig$, () => exports.CapacityProviderConfig$, 0, () => exports.DurableConfig$, () => exports.TenancyConfig$], 3
];
exports.CreateFunctionUrlConfigRequest$ = [3, n0, _CFUCR,
    0,
    [_FN, _AT, _Q, _Co, _IM],
    [[0, 1], 0, [0, { [_hQ]: _Q }], () => exports.Cors$, 0], 2
];
exports.CreateFunctionUrlConfigResponse$ = [3, n0, _CFUCRr,
    0,
    [_FU, _FA, _AT, _CTr, _Co, _IM],
    [0, 0, 0, 0, () => exports.Cors$, 0], 4
];
exports.DeadLetterConfig$ = [3, n0, _DLC,
    0,
    [_TA],
    [0]
];
exports.DeleteAliasRequest$ = [3, n0, _DAR,
    0,
    [_FN, _N],
    [[0, 1], [0, 1]], 2
];
exports.DeleteCapacityProviderRequest$ = [3, n0, _DCPR,
    0,
    [_CPN],
    [[0, 1]], 1
];
exports.DeleteCapacityProviderResponse$ = [3, n0, _DCPRe,
    0,
    [_CP],
    [() => exports.CapacityProvider$], 1
];
exports.DeleteCodeSigningConfigRequest$ = [3, n0, _DCSCR,
    0,
    [_CSCA],
    [[0, 1]], 1
];
exports.DeleteCodeSigningConfigResponse$ = [3, n0, _DCSCRe,
    0,
    [],
    []
];
exports.DeleteEventSourceMappingRequest$ = [3, n0, _DESMR,
    0,
    [_UUID],
    [[0, 1]], 1
];
exports.DeleteFunctionCodeSigningConfigRequest$ = [3, n0, _DFCSCR,
    0,
    [_FN],
    [[0, 1]], 1
];
exports.DeleteFunctionConcurrencyRequest$ = [3, n0, _DFCR,
    0,
    [_FN],
    [[0, 1]], 1
];
exports.DeleteFunctionEventInvokeConfigRequest$ = [3, n0, _DFEICR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.DeleteFunctionRequest$ = [3, n0, _DFR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.DeleteFunctionResponse$ = [3, n0, _DFRe,
    0,
    [_SCt],
    [[1, 32]]
];
exports.DeleteFunctionUrlConfigRequest$ = [3, n0, _DFUCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.DeleteLayerVersionRequest$ = [3, n0, _DLVR,
    0,
    [_LN, _VN],
    [[0, 1], [1, 1]], 2
];
exports.DeleteProvisionedConcurrencyConfigRequest$ = [3, n0, _DPCCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 2
];
exports.DestinationConfig$ = [3, n0, _DC,
    0,
    [_OS, _OF],
    [() => exports.OnSuccess$, () => exports.OnFailure$]
];
exports.DocumentDBEventSourceConfig$ = [3, n0, _DDBESC,
    0,
    [_DN, _CN, _FD],
    [0, 0, 0]
];
exports.DurableConfig$ = [3, n0, _DCu,
    0,
    [_RPID, _ETx],
    [1, 1]
];
exports.Environment$ = [3, n0, _Env,
    0,
    [_V],
    [[() => EnvironmentVariables, 0]]
];
exports.EnvironmentError$ = [3, n0, _EE,
    0,
    [_EC, _M],
    [0, [() => SensitiveString, 0]]
];
exports.EnvironmentResponse$ = [3, n0, _ER,
    0,
    [_V, _E],
    [[() => EnvironmentVariables, 0], [() => exports.EnvironmentError$, 0]]
];
exports.EphemeralStorage$ = [3, n0, _ES,
    0,
    [_Si],
    [1], 1
];
exports.ErrorObject$ = [3, n0, _EO,
    0,
    [_EM, _ET, _ED, _ST],
    [[() => ErrorMessage, 0], [() => ErrorType, 0], [() => ErrorData, 0], [() => StackTraceEntries, 0]]
];
exports.Event$ = [3, n0, _Ev,
    0,
    [_ETv, _STu, _EI, _Id, _N, _ETve, _PI, _ESD, _ESDx, _EFD, _ETOD, _ESDxe, _CSDo, _CSDon, _CFDo, _WSD, _WSDa, _WCD, _SSD, _SSDt, _SFD, _CISD, _CISDha, _CIFD, _CITOD, _CISDh, _CSD, _CSDa, _CFD, _CTOD, _ICD],
    [0, 0, 1, 0, 0, 4, 0, [() => exports.ExecutionStartedDetails$, 0], [() => exports.ExecutionSucceededDetails$, 0], [() => exports.ExecutionFailedDetails$, 0], [() => exports.ExecutionTimedOutDetails$, 0], [() => exports.ExecutionStoppedDetails$, 0], () => exports.ContextStartedDetails$, [() => exports.ContextSucceededDetails$, 0], [() => exports.ContextFailedDetails$, 0], () => exports.WaitStartedDetails$, () => exports.WaitSucceededDetails$, [() => exports.WaitCancelledDetails$, 0], () => exports.StepStartedDetails$, [() => exports.StepSucceededDetails$, 0], [() => exports.StepFailedDetails$, 0], [() => exports.ChainedInvokeStartedDetails$, 0], [() => exports.ChainedInvokeSucceededDetails$, 0], [() => exports.ChainedInvokeFailedDetails$, 0], [() => exports.ChainedInvokeTimedOutDetails$, 0], [() => exports.ChainedInvokeStoppedDetails$, 0], () => exports.CallbackStartedDetails$, [() => exports.CallbackSucceededDetails$, 0], [() => exports.CallbackFailedDetails$, 0], [() => exports.CallbackTimedOutDetails$, 0], [() => exports.InvocationCompletedDetails$, 0]]
];
exports.EventError$ = [3, n0, _EEv,
    0,
    [_Pa, _Tr],
    [[() => exports.ErrorObject$, 0], 2]
];
exports.EventInput$ = [3, n0, _EIv,
    0,
    [_Pa, _Tr],
    [[() => InputPayload, 0], 2]
];
exports.EventResult$ = [3, n0, _ERv,
    0,
    [_Pa, _Tr],
    [[() => OperationPayload, 0], 2]
];
exports.EventSourceMappingConfiguration$ = [3, n0, _ESMC,
    0,
    [_UUID, _SPt, _SPT, _BSa, _MBWIS, _PF, _ESA, _FCi, _FA, _LM, _LPR, _St, _STR, _DC, _To, _Qu, _SAC, _SMES, _MRAIS, _BBOFE, _MRA, _TWIS, _FRT, _AMKESC, _SMKESC, _SC, _DDBESC, _KMSKA, _FCE, _ESMA, _MC, _LC, _PPC],
    [0, 0, 4, 1, 1, 1, 0, () => exports.FilterCriteria$, 0, 4, 0, 0, 0, () => exports.DestinationConfig$, 64 | 0, 64 | 0, () => SourceAccessConfigurations, () => exports.SelfManagedEventSource$, 1, 2, 1, 1, 64 | 0, () => exports.AmazonManagedKafkaEventSourceConfig$, () => exports.SelfManagedKafkaEventSourceConfig$, () => exports.ScalingConfig$, () => exports.DocumentDBEventSourceConfig$, 0, () => exports.FilterCriteriaError$, 0, () => exports.EventSourceMappingMetricsConfig$, () => exports.EventSourceMappingLoggingConfig$, () => exports.ProvisionedPollerConfig$]
];
exports.EventSourceMappingLoggingConfig$ = [3, n0, _ESMLC,
    0,
    [_SLL],
    [0]
];
exports.EventSourceMappingMetricsConfig$ = [3, n0, _ESMMC,
    0,
    [_Me],
    [64 | 0]
];
exports.Execution$ = [3, n0, _Ex,
    0,
    [_DEA, _DEN, _FA, _Sta, _STt, _ETn],
    [0, 0, 0, 0, 4, 4], 5
];
exports.ExecutionDetails$ = [3, n0, _EDx,
    0,
    [_IP],
    [[() => InputPayload, 0]]
];
exports.ExecutionFailedDetails$ = [3, n0, _EFD,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.ExecutionStartedDetails$ = [3, n0, _ESD,
    0,
    [_I, _ETx],
    [[() => exports.EventInput$, 0], 1], 2
];
exports.ExecutionStoppedDetails$ = [3, n0, _ESDxe,
    0,
    [_E],
    [[() => exports.EventError$, 0]], 1
];
exports.ExecutionSucceededDetails$ = [3, n0, _ESDx,
    0,
    [_Re],
    [[() => exports.EventResult$, 0]], 1
];
exports.ExecutionTimedOutDetails$ = [3, n0, _ETOD,
    0,
    [_E],
    [[() => exports.EventError$, 0]]
];
exports.FileSystemConfig$ = [3, n0, _FSCi,
    0,
    [_Arn, _LMP],
    [0, 0], 2
];
exports.Filter$ = [3, n0, _F,
    0,
    [_Pat],
    [0]
];
exports.FilterCriteria$ = [3, n0, _FCi,
    0,
    [_Fi],
    [() => FilterList]
];
exports.FilterCriteriaError$ = [3, n0, _FCE,
    0,
    [_EC, _M],
    [0, 0]
];
exports.FunctionCode$ = [3, n0, _FCu,
    0,
    [_ZF, _SB, _SK, _SOV, _IU, _SKMSKA],
    [[() => _Blob, 0], 0, 0, 0, 0, 0]
];
exports.FunctionCodeLocation$ = [3, n0, _FCL,
    0,
    [_RT, _Lo, _IU, _RIU, _SKMSKA],
    [0, 0, 0, 0, 0]
];
exports.FunctionConfiguration$ = [3, n0, _FCun,
    0,
    [_FN, _FA, _Ru, _Ro, _H, _CS, _D, _Ti, _MS, _LM, _CSo, _Ve, _VC, _DLC, _Env, _KMSKA, _TC, _MAa, _RI, _L, _St, _SR, _SRCt, _LUS, _LUSR, _LUSRC, _FSC, _PT, _ICR, _SPVAi, _SJA, _Ar, _ES, _SSn, _RVC, _LC, _CPC, _CSon, _DCu, _TCe],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, () => exports.VpcConfigResponse$, () => exports.DeadLetterConfig$, [() => exports.EnvironmentResponse$, 0], 0, () => exports.TracingConfigResponse$, 0, 0, () => LayersReferenceList, 0, 0, 0, 0, 0, 0, () => FileSystemConfigList, 0, [() => exports.ImageConfigResponse$, 0], 0, 0, 64 | 0, () => exports.EphemeralStorage$, () => exports.SnapStartResponse$, [() => exports.RuntimeVersionConfig$, 0], () => exports.LoggingConfig$, () => exports.CapacityProviderConfig$, 0, () => exports.DurableConfig$, () => exports.TenancyConfig$]
];
exports.FunctionEventInvokeConfig$ = [3, n0, _FEIC,
    0,
    [_LM, _FA, _MRA, _MEAIS, _DC],
    [4, 0, 1, 1, () => exports.DestinationConfig$]
];
exports.FunctionScalingConfig$ = [3, n0, _FSCu,
    0,
    [_MEE, _MEEa],
    [1, 1]
];
exports.FunctionUrlConfig$ = [3, n0, _FUC,
    0,
    [_FU, _FA, _CTr, _LMT, _AT, _Co, _IM],
    [0, 0, 0, 0, 0, () => exports.Cors$, 0], 5
];
exports.FunctionVersionsByCapacityProviderListItem$ = [3, n0, _FVBCPLI,
    0,
    [_FA, _St],
    [0, 0], 2
];
exports.GetAccountSettingsRequest$ = [3, n0, _GASR,
    0,
    [],
    []
];
exports.GetAccountSettingsResponse$ = [3, n0, _GASRe,
    0,
    [_AL, _AU],
    [() => exports.AccountLimit$, () => exports.AccountUsage$]
];
exports.GetAliasRequest$ = [3, n0, _GAR,
    0,
    [_FN, _N],
    [[0, 1], [0, 1]], 2
];
exports.GetCapacityProviderRequest$ = [3, n0, _GCPR,
    0,
    [_CPN],
    [[0, 1]], 1
];
exports.GetCapacityProviderResponse$ = [3, n0, _GCPRe,
    0,
    [_CP],
    [() => exports.CapacityProvider$], 1
];
exports.GetCodeSigningConfigRequest$ = [3, n0, _GCSCR,
    0,
    [_CSCA],
    [[0, 1]], 1
];
exports.GetCodeSigningConfigResponse$ = [3, n0, _GCSCRe,
    0,
    [_CSC],
    [() => exports.CodeSigningConfig$], 1
];
exports.GetDurableExecutionHistoryRequest$ = [3, n0, _GDEHR,
    0,
    [_DEA, _IED, _MI, _Ma, _RO],
    [[0, 1], [2, { [_hQ]: _IED }], [1, { [_hQ]: _MI }], [0, { [_hQ]: _Ma }], [2, { [_hQ]: _RO }]], 1
];
exports.GetDurableExecutionHistoryResponse$ = [3, n0, _GDEHRe,
    0,
    [_Eve, _NM],
    [[() => Events, 0], 0], 1
];
exports.GetDurableExecutionRequest$ = [3, n0, _GDER,
    0,
    [_DEA],
    [[0, 1]], 1
];
exports.GetDurableExecutionResponse$ = [3, n0, _GDERe,
    0,
    [_DEA, _DEN, _FA, _STt, _Sta, _IP, _Re, _E, _ETn, _Ve, _TH],
    [0, 0, 0, 4, 0, [() => InputPayload, 0], [() => OutputPayload, 0], [() => exports.ErrorObject$, 0], 4, 0, () => exports.TraceHeader$], 5
];
exports.GetDurableExecutionStateRequest$ = [3, n0, _GDESR,
    0,
    [_DEA, _CT, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _CT }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 2
];
exports.GetDurableExecutionStateResponse$ = [3, n0, _GDESRe,
    0,
    [_O, _NM],
    [[() => Operations, 0], 0], 1
];
exports.GetEventSourceMappingRequest$ = [3, n0, _GESMR,
    0,
    [_UUID],
    [[0, 1]], 1
];
exports.GetFunctionCodeSigningConfigRequest$ = [3, n0, _GFCSCR,
    0,
    [_FN],
    [[0, 1]], 1
];
exports.GetFunctionCodeSigningConfigResponse$ = [3, n0, _GFCSCRe,
    0,
    [_CSCA, _FN],
    [0, 0], 2
];
exports.GetFunctionConcurrencyRequest$ = [3, n0, _GFCR,
    0,
    [_FN],
    [[0, 1]], 1
];
exports.GetFunctionConcurrencyResponse$ = [3, n0, _GFCRe,
    0,
    [_RCEe],
    [1]
];
exports.GetFunctionConfigurationRequest$ = [3, n0, _GFCRet,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetFunctionEventInvokeConfigRequest$ = [3, n0, _GFEICR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetFunctionRecursionConfigRequest$ = [3, n0, _GFRCR,
    0,
    [_FN],
    [[0, 1]], 1
];
exports.GetFunctionRecursionConfigResponse$ = [3, n0, _GFRCRe,
    0,
    [_RL],
    [0]
];
exports.GetFunctionRequest$ = [3, n0, _GFR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetFunctionResponse$ = [3, n0, _GFRe,
    0,
    [_Con, _Cod, _Ta, _TE, _C],
    [[() => exports.FunctionConfiguration$, 0], () => exports.FunctionCodeLocation$, 128 | 0, () => exports.TagsError$, () => exports.Concurrency$]
];
exports.GetFunctionScalingConfigRequest$ = [3, n0, _GFSCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 2
];
exports.GetFunctionScalingConfigResponse$ = [3, n0, _GFSCRe,
    0,
    [_FA, _AFSC, _RFSC],
    [0, () => exports.FunctionScalingConfig$, () => exports.FunctionScalingConfig$]
];
exports.GetFunctionUrlConfigRequest$ = [3, n0, _GFUCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetFunctionUrlConfigResponse$ = [3, n0, _GFUCRe,
    0,
    [_FU, _FA, _AT, _CTr, _LMT, _Co, _IM],
    [0, 0, 0, 0, 0, () => exports.Cors$, 0], 5
];
exports.GetLayerVersionByArnRequest$ = [3, n0, _GLVBAR,
    0,
    [_Arn],
    [[0, { [_hQ]: _Arn }]], 1
];
exports.GetLayerVersionPolicyRequest$ = [3, n0, _GLVPR,
    0,
    [_LN, _VN],
    [[0, 1], [1, 1]], 2
];
exports.GetLayerVersionPolicyResponse$ = [3, n0, _GLVPRe,
    0,
    [_Po, _RI],
    [0, 0]
];
exports.GetLayerVersionRequest$ = [3, n0, _GLVR,
    0,
    [_LN, _VN],
    [[0, 1], [1, 1]], 2
];
exports.GetLayerVersionResponse$ = [3, n0, _GLVRe,
    0,
    [_Cont, _LA, _LVA, _D, _CDr, _Ve, _CR, _LI, _CA],
    [() => exports.LayerVersionContentOutput$, 0, 0, 0, 0, 1, 64 | 0, 0, 64 | 0]
];
exports.GetPolicyRequest$ = [3, n0, _GPR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetPolicyResponse$ = [3, n0, _GPRe,
    0,
    [_Po, _RI],
    [0, 0]
];
exports.GetProvisionedConcurrencyConfigRequest$ = [3, n0, _GPCCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 2
];
exports.GetProvisionedConcurrencyConfigResponse$ = [3, n0, _GPCCRe,
    0,
    [_RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
    [1, 1, 1, 0, 0, 0]
];
exports.GetRuntimeManagementConfigRequest$ = [3, n0, _GRMCR,
    0,
    [_FN, _Q],
    [[0, 1], [0, { [_hQ]: _Q }]], 1
];
exports.GetRuntimeManagementConfigResponse$ = [3, n0, _GRMCRe,
    0,
    [_URO, _RVA, _FA],
    [0, 0, 0]
];
exports.ImageConfig$ = [3, n0, _IC,
    0,
    [_EP, _Com, _WD],
    [64 | 0, 64 | 0, 0]
];
exports.ImageConfigError$ = [3, n0, _ICE,
    0,
    [_EC, _M],
    [0, [() => SensitiveString, 0]]
];
exports.ImageConfigResponse$ = [3, n0, _ICR,
    0,
    [_IC, _E],
    [() => exports.ImageConfig$, [() => exports.ImageConfigError$, 0]]
];
exports.InstanceRequirements$ = [3, n0, _IR,
    0,
    [_Ar, _AIT, _EIT],
    [64 | 0, 64 | 0, 64 | 0]
];
exports.InvocationCompletedDetails$ = [3, n0, _ICD,
    0,
    [_STt, _ETn, _RIe, _E],
    [4, 4, 0, [() => exports.EventError$, 0]], 3
];
exports.InvocationRequest$ = [3, n0, _IRn,
    0,
    [_FN, _IT, _LT, _CC, _DEN, _Pa, _Q, _TI],
    [[0, 1], [0, { [_hH]: _XAIT }], [0, { [_hH]: _XALT }], [0, { [_hH]: _XACC }], [0, { [_hH]: _XADEN }], [() => _Blob, 16], [0, { [_hQ]: _Q }], [0, { [_hH]: _XATI }]], 1
];
exports.InvocationResponse$ = [3, n0, _IRnv,
    0,
    [_SCt, _FE, _LR, _Pa, _EV, _DEA],
    [[1, 32], [0, { [_hH]: _XAFE }], [0, { [_hH]: _XALR }], [() => _Blob, 16], [0, { [_hH]: _XAEV }], [0, { [_hH]: _XADEA }]]
];
exports.InvokeAsyncRequest$ = [3, n0, _IAR,
    0,
    [_FN, _IA],
    [[0, 1], [() => BlobStream, 16]], 2
];
exports.InvokeAsyncResponse$ = [3, n0, _IARn,
    0,
    [_Sta],
    [[1, 32]]
];
exports.InvokeResponseStreamUpdate$ = [3, n0, _IRSU,
    0,
    [_Pa],
    [[() => _Blob, { [_eP]: 1 }]]
];
exports.InvokeWithResponseStreamCompleteEvent$ = [3, n0, _IWRSCE,
    0,
    [_EC, _EDr, _LR],
    [0, 0, 0]
];
exports.InvokeWithResponseStreamRequest$ = [3, n0, _IWRSR,
    0,
    [_FN, _IT, _LT, _CC, _Q, _Pa, _TI],
    [[0, 1], [0, { [_hH]: _XAIT }], [0, { [_hH]: _XALT }], [0, { [_hH]: _XACC }], [0, { [_hQ]: _Q }], [() => _Blob, 16], [0, { [_hH]: _XATI }]], 1
];
exports.InvokeWithResponseStreamResponse$ = [3, n0, _IWRSRn,
    0,
    [_SCt, _EV, _ESv, _RSCT],
    [[1, 32], [0, { [_hH]: _XAEV }], [() => exports.InvokeWithResponseStreamResponseEvent$, 16], [0, { [_hH]: _CT_ }]]
];
exports.KafkaSchemaRegistryAccessConfig$ = [3, n0, _KSRAC,
    0,
    [_T, _URI],
    [0, 0]
];
exports.KafkaSchemaRegistryConfig$ = [3, n0, _KSRC,
    0,
    [_SRURI, _ERF, _ACc, _SVC],
    [0, 0, () => KafkaSchemaRegistryAccessConfigList, () => KafkaSchemaValidationConfigList]
];
exports.KafkaSchemaValidationConfig$ = [3, n0, _KSVC,
    0,
    [_At],
    [0]
];
exports.LambdaManagedInstancesCapacityProviderConfig$ = [3, n0, _LMICPC,
    0,
    [_CPA, _PEEMC, _EEMGBPVC],
    [0, 1, 1], 1
];
exports.Layer$ = [3, n0, _La,
    0,
    [_Arn, _CS, _SPVAi, _SJA],
    [0, 1, 0, 0]
];
exports.LayersListItem$ = [3, n0, _LLI,
    0,
    [_LN, _LA, _LMV],
    [0, 0, () => exports.LayerVersionsListItem$]
];
exports.LayerVersionContentInput$ = [3, n0, _LVCI,
    0,
    [_SB, _SK, _SOV, _ZF],
    [0, 0, 0, [() => _Blob, 0]]
];
exports.LayerVersionContentOutput$ = [3, n0, _LVCO,
    0,
    [_Lo, _CSo, _CS, _SPVAi, _SJA],
    [0, 0, 1, 0, 0]
];
exports.LayerVersionsListItem$ = [3, n0, _LVLI,
    0,
    [_LVA, _Ve, _D, _CDr, _CR, _LI, _CA],
    [0, 1, 0, 0, 64 | 0, 0, 64 | 0]
];
exports.ListAliasesRequest$ = [3, n0, _LAR,
    0,
    [_FN, _FV, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _FV }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListAliasesResponse$ = [3, n0, _LARi,
    0,
    [_NM, _Al],
    [0, () => AliasList]
];
exports.ListCapacityProvidersRequest$ = [3, n0, _LCPR,
    0,
    [_St, _Ma, _MI],
    [[0, { [_hQ]: _St }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]]
];
exports.ListCapacityProvidersResponse$ = [3, n0, _LCPRi,
    0,
    [_CPa, _NM],
    [() => CapacityProvidersList, 0], 1
];
exports.ListCodeSigningConfigsRequest$ = [3, n0, _LCSCR,
    0,
    [_Ma, _MI],
    [[0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]]
];
exports.ListCodeSigningConfigsResponse$ = [3, n0, _LCSCRi,
    0,
    [_NM, _CSCo],
    [0, () => CodeSigningConfigList]
];
exports.ListDurableExecutionsByFunctionRequest$ = [3, n0, _LDEBFR,
    0,
    [_FN, _Q, _DEN, _Stat, _SAt, _SBt, _RO, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Q }], [0, { [_hQ]: _DEN }], [64 | 0, { [_hQ]: _Stat }], [4, { [_hQ]: _SAt }], [4, { [_hQ]: _SBt }], [2, { [_hQ]: _RO }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListDurableExecutionsByFunctionResponse$ = [3, n0, _LDEBFRi,
    0,
    [_DE, _NM],
    [() => DurableExecutions, 0]
];
exports.ListEventSourceMappingsRequest$ = [3, n0, _LESMR,
    0,
    [_ESA, _FN, _Ma, _MI],
    [[0, { [_hQ]: _ESA }], [0, { [_hQ]: _FN }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]]
];
exports.ListEventSourceMappingsResponse$ = [3, n0, _LESMRi,
    0,
    [_NM, _ESM],
    [0, () => EventSourceMappingsList]
];
exports.ListFunctionEventInvokeConfigsRequest$ = [3, n0, _LFEICR,
    0,
    [_FN, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListFunctionEventInvokeConfigsResponse$ = [3, n0, _LFEICRi,
    0,
    [_FEICu, _NM],
    [() => FunctionEventInvokeConfigList, 0]
];
exports.ListFunctionsByCodeSigningConfigRequest$ = [3, n0, _LFBCSCR,
    0,
    [_CSCA, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListFunctionsByCodeSigningConfigResponse$ = [3, n0, _LFBCSCRi,
    0,
    [_NM, _FAu],
    [0, 64 | 0]
];
exports.ListFunctionsRequest$ = [3, n0, _LFR,
    0,
    [_MR, _FV, _Ma, _MI],
    [[0, { [_hQ]: _MR }], [0, { [_hQ]: _FV }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]]
];
exports.ListFunctionsResponse$ = [3, n0, _LFRi,
    0,
    [_NM, _Fu],
    [0, [() => FunctionList, 0]]
];
exports.ListFunctionUrlConfigsRequest$ = [3, n0, _LFUCR,
    0,
    [_FN, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListFunctionUrlConfigsResponse$ = [3, n0, _LFUCRi,
    0,
    [_FUCu, _NM],
    [() => FunctionUrlConfigList, 0], 1
];
exports.ListFunctionVersionsByCapacityProviderRequest$ = [3, n0, _LFVBCPR,
    0,
    [_CPN, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListFunctionVersionsByCapacityProviderResponse$ = [3, n0, _LFVBCPRi,
    0,
    [_CPA, _FVu, _NM],
    [0, () => FunctionVersionsByCapacityProviderList, 0], 2
];
exports.ListLayersRequest$ = [3, n0, _LLR,
    0,
    [_CRo, _Ma, _MI, _CAo],
    [[0, { [_hQ]: _CRo }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }], [0, { [_hQ]: _CAo }]]
];
exports.ListLayersResponse$ = [3, n0, _LLRi,
    0,
    [_NM, _L],
    [0, () => LayersList]
];
exports.ListLayerVersionsRequest$ = [3, n0, _LLVR,
    0,
    [_LN, _CRo, _Ma, _MI, _CAo],
    [[0, 1], [0, { [_hQ]: _CRo }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }], [0, { [_hQ]: _CAo }]], 1
];
exports.ListLayerVersionsResponse$ = [3, n0, _LLVRi,
    0,
    [_NM, _LV],
    [0, () => LayerVersionsList]
];
exports.ListProvisionedConcurrencyConfigsRequest$ = [3, n0, _LPCCR,
    0,
    [_FN, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListProvisionedConcurrencyConfigsResponse$ = [3, n0, _LPCCRi,
    0,
    [_PCC, _NM],
    [() => ProvisionedConcurrencyConfigList, 0]
];
exports.ListTagsRequest$ = [3, n0, _LTR,
    0,
    [_Res],
    [[0, 1]], 1
];
exports.ListTagsResponse$ = [3, n0, _LTRi,
    0,
    [_Ta],
    [128 | 0]
];
exports.ListVersionsByFunctionRequest$ = [3, n0, _LVBFR,
    0,
    [_FN, _Ma, _MI],
    [[0, 1], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]], 1
];
exports.ListVersionsByFunctionResponse$ = [3, n0, _LVBFRi,
    0,
    [_NM, _Ver],
    [0, [() => FunctionList, 0]]
];
exports.LoggingConfig$ = [3, n0, _LC,
    0,
    [_LF, _ALL, _SLL, _LG],
    [0, 0, 0, 0]
];
exports.OnFailure$ = [3, n0, _OF,
    0,
    [_De],
    [0]
];
exports.OnSuccess$ = [3, n0, _OS,
    0,
    [_De],
    [0]
];
exports.Operation$ = [3, n0, _Op,
    0,
    [_Id, _T, _STt, _Sta, _PI, _N, _STu, _ETn, _EDx, _CDo, _SD, _WDa, _CD, _CID],
    [0, 0, 4, 0, 0, 0, 0, 4, [() => exports.ExecutionDetails$, 0], [() => exports.ContextDetails$, 0], [() => exports.StepDetails$, 0], () => exports.WaitDetails$, [() => exports.CallbackDetails$, 0], [() => exports.ChainedInvokeDetails$, 0]], 4
];
exports.OperationUpdate$ = [3, n0, _OU,
    0,
    [_Id, _T, _A, _PI, _N, _STu, _Pa, _E, _COo, _SO, _WO, _CO, _CIO],
    [0, 0, 0, 0, 0, 0, [() => OperationPayload, 0], [() => exports.ErrorObject$, 0], () => exports.ContextOptions$, () => exports.StepOptions$, () => exports.WaitOptions$, () => exports.CallbackOptions$, () => exports.ChainedInvokeOptions$], 3
];
exports.ProvisionedConcurrencyConfigListItem$ = [3, n0, _PCCLI,
    0,
    [_FA, _RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
    [0, 1, 1, 1, 0, 0, 0]
];
exports.ProvisionedPollerConfig$ = [3, n0, _PPC,
    0,
    [_MP, _MPa, _PGN],
    [1, 1, 0]
];
exports.PublishLayerVersionRequest$ = [3, n0, _PLVR,
    0,
    [_LN, _Cont, _D, _CR, _LI, _CA],
    [[0, 1], [() => exports.LayerVersionContentInput$, 0], 0, 64 | 0, 0, 64 | 0], 2
];
exports.PublishLayerVersionResponse$ = [3, n0, _PLVRu,
    0,
    [_Cont, _LA, _LVA, _D, _CDr, _Ve, _CR, _LI, _CA],
    [() => exports.LayerVersionContentOutput$, 0, 0, 0, 0, 1, 64 | 0, 0, 64 | 0]
];
exports.PublishVersionRequest$ = [3, n0, _PVR,
    0,
    [_FN, _CSo, _D, _RI, _PTu],
    [[0, 1], 0, 0, 0, 0], 1
];
exports.PutFunctionCodeSigningConfigRequest$ = [3, n0, _PFCSCR,
    0,
    [_CSCA, _FN],
    [0, [0, 1]], 2
];
exports.PutFunctionCodeSigningConfigResponse$ = [3, n0, _PFCSCRu,
    0,
    [_CSCA, _FN],
    [0, 0], 2
];
exports.PutFunctionConcurrencyRequest$ = [3, n0, _PFCR,
    0,
    [_FN, _RCEe],
    [[0, 1], 1], 2
];
exports.PutFunctionEventInvokeConfigRequest$ = [3, n0, _PFEICR,
    0,
    [_FN, _Q, _MRA, _MEAIS, _DC],
    [[0, 1], [0, { [_hQ]: _Q }], 1, 1, () => exports.DestinationConfig$], 1
];
exports.PutFunctionRecursionConfigRequest$ = [3, n0, _PFRCR,
    0,
    [_FN, _RL],
    [[0, 1], 0], 2
];
exports.PutFunctionRecursionConfigResponse$ = [3, n0, _PFRCRu,
    0,
    [_RL],
    [0]
];
exports.PutFunctionScalingConfigRequest$ = [3, n0, _PFSCR,
    0,
    [_FN, _Q, _FSCu],
    [[0, 1], [0, { [_hQ]: _Q }], () => exports.FunctionScalingConfig$], 2
];
exports.PutFunctionScalingConfigResponse$ = [3, n0, _PFSCRu,
    0,
    [_FS],
    [0]
];
exports.PutProvisionedConcurrencyConfigRequest$ = [3, n0, _PPCCR,
    0,
    [_FN, _Q, _PCE],
    [[0, 1], [0, { [_hQ]: _Q }], 1], 3
];
exports.PutProvisionedConcurrencyConfigResponse$ = [3, n0, _PPCCRu,
    0,
    [_RPCE, _APCE, _APCEl, _Sta, _SRt, _LM],
    [1, 1, 1, 0, 0, 0]
];
exports.PutRuntimeManagementConfigRequest$ = [3, n0, _PRMCR,
    0,
    [_FN, _URO, _Q, _RVA],
    [[0, 1], 0, [0, { [_hQ]: _Q }], 0], 2
];
exports.PutRuntimeManagementConfigResponse$ = [3, n0, _PRMCRu,
    0,
    [_URO, _FA, _RVA],
    [0, 0, 0], 2
];
exports.RemoveLayerVersionPermissionRequest$ = [3, n0, _RLVPR,
    0,
    [_LN, _VN, _SI, _RI],
    [[0, 1], [1, 1], [0, 1], [0, { [_hQ]: _RI }]], 3
];
exports.RemovePermissionRequest$ = [3, n0, _RPR,
    0,
    [_FN, _SI, _Q, _RI],
    [[0, 1], [0, 1], [0, { [_hQ]: _Q }], [0, { [_hQ]: _RI }]], 2
];
exports.RetryDetails$ = [3, n0, _RD,
    0,
    [_CAu, _NADS],
    [1, 1]
];
exports.RuntimeVersionConfig$ = [3, n0, _RVC,
    0,
    [_RVA, _E],
    [0, [() => exports.RuntimeVersionError$, 0]]
];
exports.RuntimeVersionError$ = [3, n0, _RVE,
    0,
    [_EC, _M],
    [0, [() => SensitiveString, 0]]
];
exports.ScalingConfig$ = [3, n0, _SC,
    0,
    [_MCa],
    [1]
];
exports.SelfManagedEventSource$ = [3, n0, _SMES,
    0,
    [_End],
    [[2, n0, _End, 0, 0, 64 | 0]]
];
exports.SelfManagedKafkaEventSourceConfig$ = [3, n0, _SMKESC,
    0,
    [_CGI, _SRC],
    [0, () => exports.KafkaSchemaRegistryConfig$]
];
exports.SendDurableExecutionCallbackFailureRequest$ = [3, n0, _SDECFR,
    0,
    [_CI, _E],
    [[0, 1], [() => exports.ErrorObject$, 16]], 1
];
exports.SendDurableExecutionCallbackFailureResponse$ = [3, n0, _SDECFRe,
    0,
    [],
    []
];
exports.SendDurableExecutionCallbackHeartbeatRequest$ = [3, n0, _SDECHR,
    0,
    [_CI],
    [[0, 1]], 1
];
exports.SendDurableExecutionCallbackHeartbeatResponse$ = [3, n0, _SDECHRe,
    0,
    [],
    []
];
exports.SendDurableExecutionCallbackSuccessRequest$ = [3, n0, _SDECSR,
    0,
    [_CI, _Re],
    [[0, 1], [() => BinaryOperationPayload, 16]], 1
];
exports.SendDurableExecutionCallbackSuccessResponse$ = [3, n0, _SDECSRe,
    0,
    [],
    []
];
exports.SnapStart$ = [3, n0, _SSn,
    0,
    [_AOp],
    [0]
];
exports.SnapStartResponse$ = [3, n0, _SSR,
    0,
    [_AOp, _OSp],
    [0, 0]
];
exports.SourceAccessConfiguration$ = [3, n0, _SACo,
    0,
    [_T, _URI],
    [0, 0]
];
exports.StepDetails$ = [3, n0, _SD,
    0,
    [_Att, _NAT, _Re, _E],
    [1, 4, [() => OperationPayload, 0], [() => exports.ErrorObject$, 0]]
];
exports.StepFailedDetails$ = [3, n0, _SFD,
    0,
    [_E, _RD],
    [[() => exports.EventError$, 0], () => exports.RetryDetails$], 2
];
exports.StepOptions$ = [3, n0, _SO,
    0,
    [_NADS],
    [1]
];
exports.StepStartedDetails$ = [3, n0, _SSD,
    0,
    [],
    []
];
exports.StepSucceededDetails$ = [3, n0, _SSDt,
    0,
    [_Re, _RD],
    [[() => exports.EventResult$, 0], () => exports.RetryDetails$], 2
];
exports.StopDurableExecutionRequest$ = [3, n0, _SDER,
    0,
    [_DEA, _E],
    [[0, 1], [() => exports.ErrorObject$, 16]], 1
];
exports.StopDurableExecutionResponse$ = [3, n0, _SDERt,
    0,
    [_STto],
    [4], 1
];
exports.TagResourceRequest$ = [3, n0, _TRR,
    0,
    [_Res, _Ta],
    [[0, 1], 128 | 0], 2
];
exports.TagsError$ = [3, n0, _TE,
    0,
    [_EC, _M],
    [0, 0], 2
];
exports.TargetTrackingScalingPolicy$ = [3, n0, _TTSP,
    0,
    [_PMT, _TV],
    [0, 1], 2
];
exports.TenancyConfig$ = [3, n0, _TCe,
    0,
    [_TIM],
    [0], 1
];
exports.TraceHeader$ = [3, n0, _TH,
    0,
    [_XATIm],
    [0]
];
exports.TracingConfig$ = [3, n0, _TC,
    0,
    [_Mo],
    [0]
];
exports.TracingConfigResponse$ = [3, n0, _TCR,
    0,
    [_Mo],
    [0]
];
exports.UntagResourceRequest$ = [3, n0, _URR,
    0,
    [_Res, _TK],
    [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
exports.UpdateAliasRequest$ = [3, n0, _UAR,
    0,
    [_FN, _N, _FV, _D, _RC, _RI],
    [[0, 1], [0, 1], 0, 0, () => exports.AliasRoutingConfiguration$, 0], 2
];
exports.UpdateCapacityProviderRequest$ = [3, n0, _UCPR,
    0,
    [_CPN, _CPSC],
    [[0, 1], () => exports.CapacityProviderScalingConfig$], 1
];
exports.UpdateCapacityProviderResponse$ = [3, n0, _UCPRp,
    0,
    [_CP],
    [() => exports.CapacityProvider$], 1
];
exports.UpdateCodeSigningConfigRequest$ = [3, n0, _UCSCR,
    0,
    [_CSCA, _D, _AP, _CSP],
    [[0, 1], 0, () => exports.AllowedPublishers$, () => exports.CodeSigningPolicies$], 1
];
exports.UpdateCodeSigningConfigResponse$ = [3, n0, _UCSCRp,
    0,
    [_CSC],
    [() => exports.CodeSigningConfig$], 1
];
exports.UpdateEventSourceMappingRequest$ = [3, n0, _UESMR,
    0,
    [_UUID, _FN, _En, _BSa, _FCi, _MBWIS, _DC, _MRAIS, _BBOFE, _MRA, _PF, _SAC, _TWIS, _FRT, _SC, _AMKESC, _SMKESC, _DDBESC, _KMSKA, _MC, _LC, _PPC],
    [[0, 1], 0, 2, 1, () => exports.FilterCriteria$, 1, () => exports.DestinationConfig$, 1, 2, 1, 1, () => SourceAccessConfigurations, 1, 64 | 0, () => exports.ScalingConfig$, () => exports.AmazonManagedKafkaEventSourceConfig$, () => exports.SelfManagedKafkaEventSourceConfig$, () => exports.DocumentDBEventSourceConfig$, 0, () => exports.EventSourceMappingMetricsConfig$, () => exports.EventSourceMappingLoggingConfig$, () => exports.ProvisionedPollerConfig$], 1
];
exports.UpdateFunctionCodeRequest$ = [3, n0, _UFCR,
    0,
    [_FN, _ZF, _SB, _SK, _SOV, _IU, _Pu, _DR, _RI, _Ar, _SKMSKA, _PTu],
    [[0, 1], [() => _Blob, 0], 0, 0, 0, 0, 2, 2, 0, 64 | 0, 0, 0], 1
];
exports.UpdateFunctionConfigurationRequest$ = [3, n0, _UFCRp,
    0,
    [_FN, _Ro, _H, _D, _Ti, _MS, _VC, _Env, _Ru, _DLC, _KMSKA, _TC, _RI, _L, _FSC, _IC, _ES, _SSn, _LC, _CPC, _DCu],
    [[0, 1], 0, 0, 0, 1, 1, () => exports.VpcConfig$, [() => exports.Environment$, 0], 0, () => exports.DeadLetterConfig$, 0, () => exports.TracingConfig$, 0, 64 | 0, () => FileSystemConfigList, () => exports.ImageConfig$, () => exports.EphemeralStorage$, () => exports.SnapStart$, () => exports.LoggingConfig$, () => exports.CapacityProviderConfig$, () => exports.DurableConfig$], 1
];
exports.UpdateFunctionEventInvokeConfigRequest$ = [3, n0, _UFEICR,
    0,
    [_FN, _Q, _MRA, _MEAIS, _DC],
    [[0, 1], [0, { [_hQ]: _Q }], 1, 1, () => exports.DestinationConfig$], 1
];
exports.UpdateFunctionUrlConfigRequest$ = [3, n0, _UFUCR,
    0,
    [_FN, _Q, _AT, _Co, _IM],
    [[0, 1], [0, { [_hQ]: _Q }], 0, () => exports.Cors$, 0], 1
];
exports.UpdateFunctionUrlConfigResponse$ = [3, n0, _UFUCRp,
    0,
    [_FU, _FA, _AT, _CTr, _LMT, _Co, _IM],
    [0, 0, 0, 0, 0, () => exports.Cors$, 0], 5
];
exports.VpcConfig$ = [3, n0, _VC,
    0,
    [_SIu, _SGI, _IAFDS],
    [64 | 0, 64 | 0, 2]
];
exports.VpcConfigResponse$ = [3, n0, _VCR,
    0,
    [_SIu, _SGI, _VI, _IAFDS],
    [64 | 0, 64 | 0, 0, 2]
];
exports.WaitCancelledDetails$ = [3, n0, _WCD,
    0,
    [_E],
    [[() => exports.EventError$, 0]]
];
exports.WaitDetails$ = [3, n0, _WDa,
    0,
    [_SET],
    [4]
];
exports.WaitOptions$ = [3, n0, _WO,
    0,
    [_WS],
    [1]
];
exports.WaitStartedDetails$ = [3, n0, _WSD,
    0,
    [_Du, _SET],
    [1, 4], 2
];
exports.WaitSucceededDetails$ = [3, n0, _WSDa,
    0,
    [_Du],
    [1]
];
var __Unit = "unit";
var AliasList = [1, n0, _ALl,
    0, () => exports.AliasConfiguration$
];
var AllowMethodsList = 64 | 0;
var AllowOriginsList = 64 | 0;
var ArchitecturesList = 64 | 0;
var CapacityProviderScalingPoliciesList = [1, n0, _CPSPL,
    0, () => exports.TargetTrackingScalingPolicy$
];
var CapacityProviderSecurityGroupIds = 64 | 0;
var CapacityProvidersList = [1, n0, _CPL,
    0, () => exports.CapacityProvider$
];
var CapacityProviderSubnetIds = 64 | 0;
var CodeSigningConfigList = [1, n0, _CSCL,
    0, () => exports.CodeSigningConfig$
];
var CompatibleArchitectures = 64 | 0;
var CompatibleRuntimes = 64 | 0;
var DurableExecutions = [1, n0, _DE,
    0, () => exports.Execution$
];
var EndpointLists = 64 | 0;
var Events = [1, n0, _Eve,
    0, [() => exports.Event$,
        0]
];
var EventSourceMappingMetricList = 64 | 0;
var EventSourceMappingsList = [1, n0, _ESML,
    0, () => exports.EventSourceMappingConfiguration$
];
var ExecutionStatusList = 64 | 0;
var FileSystemConfigList = [1, n0, _FSCL,
    0, () => exports.FileSystemConfig$
];
var FilterList = [1, n0, _FL,
    0, () => exports.Filter$
];
var FunctionArnList = 64 | 0;
var FunctionEventInvokeConfigList = [1, n0, _FEICL,
    0, () => exports.FunctionEventInvokeConfig$
];
var FunctionList = [1, n0, _FLu,
    0, [() => exports.FunctionConfiguration$,
        0]
];
var FunctionResponseTypeList = 64 | 0;
var FunctionUrlConfigList = [1, n0, _FUCL,
    0, () => exports.FunctionUrlConfig$
];
var FunctionVersionsByCapacityProviderList = [1, n0, _FVBCPL,
    0, () => exports.FunctionVersionsByCapacityProviderListItem$
];
var HeadersList = 64 | 0;
var InstanceTypeSet = 64 | 0;
var KafkaSchemaRegistryAccessConfigList = [1, n0, _KSRACL,
    0, () => exports.KafkaSchemaRegistryAccessConfig$
];
var KafkaSchemaValidationConfigList = [1, n0, _KSVCL,
    0, () => exports.KafkaSchemaValidationConfig$
];
var LayerList = 64 | 0;
var LayersList = [1, n0, _LL,
    0, () => exports.LayersListItem$
];
var LayersReferenceList = [1, n0, _LRL,
    0, () => exports.Layer$
];
var LayerVersionsList = [1, n0, _LVL,
    0, () => exports.LayerVersionsListItem$
];
var Operations = [1, n0, _O,
    0, [() => exports.Operation$,
        0]
];
var OperationUpdates = [1, n0, _OUp,
    0, [() => exports.OperationUpdate$,
        0]
];
var ProvisionedConcurrencyConfigList = [1, n0, _PCCL,
    0, () => exports.ProvisionedConcurrencyConfigListItem$
];
var Queues = 64 | 0;
var SecurityGroupIds = 64 | 0;
var SigningProfileVersionArns = 64 | 0;
var SourceAccessConfigurations = [1, n0, _SAC,
    0, () => exports.SourceAccessConfiguration$
];
var StackTraceEntries = [1, n0, _STEt,
    0, [() => StackTraceEntry,
        0]
];
var StringList = 64 | 0;
var SubnetIds = 64 | 0;
var TagKeyList = 64 | 0;
var Topics = 64 | 0;
var AdditionalVersionWeights = 128 | 1;
var Endpoints = [2, n0, _End,
    0, 0, 64 | 0
];
var EnvironmentVariables = [2, n0, _EVn,
    8, [() => EnvironmentVariableName,
        0],
    [() => EnvironmentVariableValue,
        0]
];
var Tags = 128 | 0;
exports.InvokeWithResponseStreamResponseEvent$ = [4, n0, _IWRSRE,
    { [_st]: 1 },
    [_PCa, _ICn],
    [[() => exports.InvokeResponseStreamUpdate$, 0], () => exports.InvokeWithResponseStreamCompleteEvent$]
];
exports.AddLayerVersionPermission$ = [9, n0, _ALVP,
    { [_h]: ["POST", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", 201] }, () => exports.AddLayerVersionPermissionRequest$, () => exports.AddLayerVersionPermissionResponse$
];
exports.AddPermission$ = [9, n0, _APd,
    { [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/policy", 201] }, () => exports.AddPermissionRequest$, () => exports.AddPermissionResponse$
];
exports.CheckpointDurableExecution$ = [9, n0, _CDE,
    { [_h]: ["POST", "/2025-12-01/durable-executions/{DurableExecutionArn}/checkpoint", 200] }, () => exports.CheckpointDurableExecutionRequest$, () => exports.CheckpointDurableExecutionResponse$
];
exports.CreateAlias$ = [9, n0, _CAr,
    { [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/aliases", 201] }, () => exports.CreateAliasRequest$, () => exports.AliasConfiguration$
];
exports.CreateCapacityProvider$ = [9, n0, _CCP,
    { [_h]: ["POST", "/2025-11-30/capacity-providers", 202] }, () => exports.CreateCapacityProviderRequest$, () => exports.CreateCapacityProviderResponse$
];
exports.CreateCodeSigningConfig$ = [9, n0, _CCSC,
    { [_h]: ["POST", "/2020-04-22/code-signing-configs", 201] }, () => exports.CreateCodeSigningConfigRequest$, () => exports.CreateCodeSigningConfigResponse$
];
exports.CreateEventSourceMapping$ = [9, n0, _CESM,
    { [_h]: ["POST", "/2015-03-31/event-source-mappings", 202] }, () => exports.CreateEventSourceMappingRequest$, () => exports.EventSourceMappingConfiguration$
];
exports.CreateFunction$ = [9, n0, _CF,
    { [_h]: ["POST", "/2015-03-31/functions", 201] }, () => exports.CreateFunctionRequest$, () => exports.FunctionConfiguration$
];
exports.CreateFunctionUrlConfig$ = [9, n0, _CFUC,
    { [_h]: ["POST", "/2021-10-31/functions/{FunctionName}/url", 201] }, () => exports.CreateFunctionUrlConfigRequest$, () => exports.CreateFunctionUrlConfigResponse$
];
exports.DeleteAlias$ = [9, n0, _DA,
    { [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 204] }, () => exports.DeleteAliasRequest$, () => __Unit
];
exports.DeleteCapacityProvider$ = [9, n0, _DCP,
    { [_h]: ["DELETE", "/2025-11-30/capacity-providers/{CapacityProviderName}", 202] }, () => exports.DeleteCapacityProviderRequest$, () => exports.DeleteCapacityProviderResponse$
];
exports.DeleteCodeSigningConfig$ = [9, n0, _DCSC,
    { [_h]: ["DELETE", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 204] }, () => exports.DeleteCodeSigningConfigRequest$, () => exports.DeleteCodeSigningConfigResponse$
];
exports.DeleteEventSourceMapping$ = [9, n0, _DESM,
    { [_h]: ["DELETE", "/2015-03-31/event-source-mappings/{UUID}", 202] }, () => exports.DeleteEventSourceMappingRequest$, () => exports.EventSourceMappingConfiguration$
];
exports.DeleteFunction$ = [9, n0, _DF,
    { [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}", 200] }, () => exports.DeleteFunctionRequest$, () => exports.DeleteFunctionResponse$
];
exports.DeleteFunctionCodeSigningConfig$ = [9, n0, _DFCSC,
    { [_h]: ["DELETE", "/2020-06-30/functions/{FunctionName}/code-signing-config", 204] }, () => exports.DeleteFunctionCodeSigningConfigRequest$, () => __Unit
];
exports.DeleteFunctionConcurrency$ = [9, n0, _DFC,
    { [_h]: ["DELETE", "/2017-10-31/functions/{FunctionName}/concurrency", 204] }, () => exports.DeleteFunctionConcurrencyRequest$, () => __Unit
];
exports.DeleteFunctionEventInvokeConfig$ = [9, n0, _DFEIC,
    { [_h]: ["DELETE", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 204] }, () => exports.DeleteFunctionEventInvokeConfigRequest$, () => __Unit
];
exports.DeleteFunctionUrlConfig$ = [9, n0, _DFUC,
    { [_h]: ["DELETE", "/2021-10-31/functions/{FunctionName}/url", 204] }, () => exports.DeleteFunctionUrlConfigRequest$, () => __Unit
];
exports.DeleteLayerVersion$ = [9, n0, _DLV,
    { [_h]: ["DELETE", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", 204] }, () => exports.DeleteLayerVersionRequest$, () => __Unit
];
exports.DeleteProvisionedConcurrencyConfig$ = [9, n0, _DPCC,
    { [_h]: ["DELETE", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 204] }, () => exports.DeleteProvisionedConcurrencyConfigRequest$, () => __Unit
];
exports.GetAccountSettings$ = [9, n0, _GAS,
    { [_h]: ["GET", "/2016-08-19/account-settings", 200] }, () => exports.GetAccountSettingsRequest$, () => exports.GetAccountSettingsResponse$
];
exports.GetAlias$ = [9, n0, _GA,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 200] }, () => exports.GetAliasRequest$, () => exports.AliasConfiguration$
];
exports.GetCapacityProvider$ = [9, n0, _GCP,
    { [_h]: ["GET", "/2025-11-30/capacity-providers/{CapacityProviderName}", 200] }, () => exports.GetCapacityProviderRequest$, () => exports.GetCapacityProviderResponse$
];
exports.GetCodeSigningConfig$ = [9, n0, _GCSC,
    { [_h]: ["GET", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 200] }, () => exports.GetCodeSigningConfigRequest$, () => exports.GetCodeSigningConfigResponse$
];
exports.GetDurableExecution$ = [9, n0, _GDE,
    { [_h]: ["GET", "/2025-12-01/durable-executions/{DurableExecutionArn}", 200] }, () => exports.GetDurableExecutionRequest$, () => exports.GetDurableExecutionResponse$
];
exports.GetDurableExecutionHistory$ = [9, n0, _GDEH,
    { [_h]: ["GET", "/2025-12-01/durable-executions/{DurableExecutionArn}/history", 200] }, () => exports.GetDurableExecutionHistoryRequest$, () => exports.GetDurableExecutionHistoryResponse$
];
exports.GetDurableExecutionState$ = [9, n0, _GDES,
    { [_h]: ["GET", "/2025-12-01/durable-executions/{DurableExecutionArn}/state", 200] }, () => exports.GetDurableExecutionStateRequest$, () => exports.GetDurableExecutionStateResponse$
];
exports.GetEventSourceMapping$ = [9, n0, _GESM,
    { [_h]: ["GET", "/2015-03-31/event-source-mappings/{UUID}", 200] }, () => exports.GetEventSourceMappingRequest$, () => exports.EventSourceMappingConfiguration$
];
exports.GetFunction$ = [9, n0, _GF,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}", 200] }, () => exports.GetFunctionRequest$, () => exports.GetFunctionResponse$
];
exports.GetFunctionCodeSigningConfig$ = [9, n0, _GFCSC,
    { [_h]: ["GET", "/2020-06-30/functions/{FunctionName}/code-signing-config", 200] }, () => exports.GetFunctionCodeSigningConfigRequest$, () => exports.GetFunctionCodeSigningConfigResponse$
];
exports.GetFunctionConcurrency$ = [9, n0, _GFC,
    { [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/concurrency", 200] }, () => exports.GetFunctionConcurrencyRequest$, () => exports.GetFunctionConcurrencyResponse$
];
exports.GetFunctionConfiguration$ = [9, n0, _GFCe,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/configuration", 200] }, () => exports.GetFunctionConfigurationRequest$, () => exports.FunctionConfiguration$
];
exports.GetFunctionEventInvokeConfig$ = [9, n0, _GFEIC,
    { [_h]: ["GET", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200] }, () => exports.GetFunctionEventInvokeConfigRequest$, () => exports.FunctionEventInvokeConfig$
];
exports.GetFunctionRecursionConfig$ = [9, n0, _GFRC,
    { [_h]: ["GET", "/2024-08-31/functions/{FunctionName}/recursion-config", 200] }, () => exports.GetFunctionRecursionConfigRequest$, () => exports.GetFunctionRecursionConfigResponse$
];
exports.GetFunctionScalingConfig$ = [9, n0, _GFSC,
    { [_h]: ["GET", "/2025-11-30/functions/{FunctionName}/function-scaling-config", 200] }, () => exports.GetFunctionScalingConfigRequest$, () => exports.GetFunctionScalingConfigResponse$
];
exports.GetFunctionUrlConfig$ = [9, n0, _GFUC,
    { [_h]: ["GET", "/2021-10-31/functions/{FunctionName}/url", 200] }, () => exports.GetFunctionUrlConfigRequest$, () => exports.GetFunctionUrlConfigResponse$
];
exports.GetLayerVersion$ = [9, n0, _GLV,
    { [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", 200] }, () => exports.GetLayerVersionRequest$, () => exports.GetLayerVersionResponse$
];
exports.GetLayerVersionByArn$ = [9, n0, _GLVBA,
    { [_h]: ["GET", "/2018-10-31/layers?find=LayerVersion", 200] }, () => exports.GetLayerVersionByArnRequest$, () => exports.GetLayerVersionResponse$
];
exports.GetLayerVersionPolicy$ = [9, n0, _GLVP,
    { [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", 200] }, () => exports.GetLayerVersionPolicyRequest$, () => exports.GetLayerVersionPolicyResponse$
];
exports.GetPolicy$ = [9, n0, _GP,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/policy", 200] }, () => exports.GetPolicyRequest$, () => exports.GetPolicyResponse$
];
exports.GetProvisionedConcurrencyConfig$ = [9, n0, _GPCC,
    { [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 200] }, () => exports.GetProvisionedConcurrencyConfigRequest$, () => exports.GetProvisionedConcurrencyConfigResponse$
];
exports.GetRuntimeManagementConfig$ = [9, n0, _GRMC,
    { [_h]: ["GET", "/2021-07-20/functions/{FunctionName}/runtime-management-config", 200] }, () => exports.GetRuntimeManagementConfigRequest$, () => exports.GetRuntimeManagementConfigResponse$
];
exports.Invoke$ = [9, n0, _In,
    { [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/invocations", 200] }, () => exports.InvocationRequest$, () => exports.InvocationResponse$
];
exports.InvokeAsync$ = [9, n0, _IAn,
    { [_h]: ["POST", "/2014-11-13/functions/{FunctionName}/invoke-async", 202] }, () => exports.InvokeAsyncRequest$, () => exports.InvokeAsyncResponse$
];
exports.InvokeWithResponseStream$ = [9, n0, _IWRS,
    { [_h]: ["POST", "/2021-11-15/functions/{FunctionName}/response-streaming-invocations", 200] }, () => exports.InvokeWithResponseStreamRequest$, () => exports.InvokeWithResponseStreamResponse$
];
exports.ListAliases$ = [9, n0, _LAi,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/aliases", 200] }, () => exports.ListAliasesRequest$, () => exports.ListAliasesResponse$
];
exports.ListCapacityProviders$ = [9, n0, _LCP,
    { [_h]: ["GET", "/2025-11-30/capacity-providers", 200] }, () => exports.ListCapacityProvidersRequest$, () => exports.ListCapacityProvidersResponse$
];
exports.ListCodeSigningConfigs$ = [9, n0, _LCSC,
    { [_h]: ["GET", "/2020-04-22/code-signing-configs", 200] }, () => exports.ListCodeSigningConfigsRequest$, () => exports.ListCodeSigningConfigsResponse$
];
exports.ListDurableExecutionsByFunction$ = [9, n0, _LDEBF,
    { [_h]: ["GET", "/2025-12-01/functions/{FunctionName}/durable-executions", 200] }, () => exports.ListDurableExecutionsByFunctionRequest$, () => exports.ListDurableExecutionsByFunctionResponse$
];
exports.ListEventSourceMappings$ = [9, n0, _LESM,
    { [_h]: ["GET", "/2015-03-31/event-source-mappings", 200] }, () => exports.ListEventSourceMappingsRequest$, () => exports.ListEventSourceMappingsResponse$
];
exports.ListFunctionEventInvokeConfigs$ = [9, n0, _LFEIC,
    { [_h]: ["GET", "/2019-09-25/functions/{FunctionName}/event-invoke-config/list", 200] }, () => exports.ListFunctionEventInvokeConfigsRequest$, () => exports.ListFunctionEventInvokeConfigsResponse$
];
exports.ListFunctions$ = [9, n0, _LFi,
    { [_h]: ["GET", "/2015-03-31/functions", 200] }, () => exports.ListFunctionsRequest$, () => exports.ListFunctionsResponse$
];
exports.ListFunctionsByCodeSigningConfig$ = [9, n0, _LFBCSC,
    { [_h]: ["GET", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions", 200] }, () => exports.ListFunctionsByCodeSigningConfigRequest$, () => exports.ListFunctionsByCodeSigningConfigResponse$
];
exports.ListFunctionUrlConfigs$ = [9, n0, _LFUC,
    { [_h]: ["GET", "/2021-10-31/functions/{FunctionName}/urls", 200] }, () => exports.ListFunctionUrlConfigsRequest$, () => exports.ListFunctionUrlConfigsResponse$
];
exports.ListFunctionVersionsByCapacityProvider$ = [9, n0, _LFVBCP,
    { [_h]: ["GET", "/2025-11-30/capacity-providers/{CapacityProviderName}/function-versions", 200] }, () => exports.ListFunctionVersionsByCapacityProviderRequest$, () => exports.ListFunctionVersionsByCapacityProviderResponse$
];
exports.ListLayers$ = [9, n0, _LLi,
    { [_h]: ["GET", "/2018-10-31/layers", 200] }, () => exports.ListLayersRequest$, () => exports.ListLayersResponse$
];
exports.ListLayerVersions$ = [9, n0, _LLV,
    { [_h]: ["GET", "/2018-10-31/layers/{LayerName}/versions", 200] }, () => exports.ListLayerVersionsRequest$, () => exports.ListLayerVersionsResponse$
];
exports.ListProvisionedConcurrencyConfigs$ = [9, n0, _LPCC,
    { [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency?List=ALL", 200] }, () => exports.ListProvisionedConcurrencyConfigsRequest$, () => exports.ListProvisionedConcurrencyConfigsResponse$
];
exports.ListTags$ = [9, n0, _LTi,
    { [_h]: ["GET", "/2017-03-31/tags/{Resource}", 200] }, () => exports.ListTagsRequest$, () => exports.ListTagsResponse$
];
exports.ListVersionsByFunction$ = [9, n0, _LVBF,
    { [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/versions", 200] }, () => exports.ListVersionsByFunctionRequest$, () => exports.ListVersionsByFunctionResponse$
];
exports.PublishLayerVersion$ = [9, n0, _PLV,
    { [_h]: ["POST", "/2018-10-31/layers/{LayerName}/versions", 201] }, () => exports.PublishLayerVersionRequest$, () => exports.PublishLayerVersionResponse$
];
exports.PublishVersion$ = [9, n0, _PV,
    { [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/versions", 201] }, () => exports.PublishVersionRequest$, () => exports.FunctionConfiguration$
];
exports.PutFunctionCodeSigningConfig$ = [9, n0, _PFCSC,
    { [_h]: ["PUT", "/2020-06-30/functions/{FunctionName}/code-signing-config", 200] }, () => exports.PutFunctionCodeSigningConfigRequest$, () => exports.PutFunctionCodeSigningConfigResponse$
];
exports.PutFunctionConcurrency$ = [9, n0, _PFC,
    { [_h]: ["PUT", "/2017-10-31/functions/{FunctionName}/concurrency", 200] }, () => exports.PutFunctionConcurrencyRequest$, () => exports.Concurrency$
];
exports.PutFunctionEventInvokeConfig$ = [9, n0, _PFEIC,
    { [_h]: ["PUT", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200] }, () => exports.PutFunctionEventInvokeConfigRequest$, () => exports.FunctionEventInvokeConfig$
];
exports.PutFunctionRecursionConfig$ = [9, n0, _PFRC,
    { [_h]: ["PUT", "/2024-08-31/functions/{FunctionName}/recursion-config", 200] }, () => exports.PutFunctionRecursionConfigRequest$, () => exports.PutFunctionRecursionConfigResponse$
];
exports.PutFunctionScalingConfig$ = [9, n0, _PFSC,
    { [_h]: ["PUT", "/2025-11-30/functions/{FunctionName}/function-scaling-config", 202] }, () => exports.PutFunctionScalingConfigRequest$, () => exports.PutFunctionScalingConfigResponse$
];
exports.PutProvisionedConcurrencyConfig$ = [9, n0, _PPCC,
    { [_h]: ["PUT", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 202] }, () => exports.PutProvisionedConcurrencyConfigRequest$, () => exports.PutProvisionedConcurrencyConfigResponse$
];
exports.PutRuntimeManagementConfig$ = [9, n0, _PRMC,
    { [_h]: ["PUT", "/2021-07-20/functions/{FunctionName}/runtime-management-config", 200] }, () => exports.PutRuntimeManagementConfigRequest$, () => exports.PutRuntimeManagementConfigResponse$
];
exports.RemoveLayerVersionPermission$ = [9, n0, _RLVP,
    { [_h]: ["DELETE", "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}", 204] }, () => exports.RemoveLayerVersionPermissionRequest$, () => __Unit
];
exports.RemovePermission$ = [9, n0, _RP,
    { [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}/policy/{StatementId}", 204] }, () => exports.RemovePermissionRequest$, () => __Unit
];
exports.SendDurableExecutionCallbackFailure$ = [9, n0, _SDECF,
    { [_h]: ["POST", "/2025-12-01/durable-execution-callbacks/{CallbackId}/fail", 200] }, () => exports.SendDurableExecutionCallbackFailureRequest$, () => exports.SendDurableExecutionCallbackFailureResponse$
];
exports.SendDurableExecutionCallbackHeartbeat$ = [9, n0, _SDECH,
    { [_h]: ["POST", "/2025-12-01/durable-execution-callbacks/{CallbackId}/heartbeat", 200] }, () => exports.SendDurableExecutionCallbackHeartbeatRequest$, () => exports.SendDurableExecutionCallbackHeartbeatResponse$
];
exports.SendDurableExecutionCallbackSuccess$ = [9, n0, _SDECS,
    { [_h]: ["POST", "/2025-12-01/durable-execution-callbacks/{CallbackId}/succeed", 200] }, () => exports.SendDurableExecutionCallbackSuccessRequest$, () => exports.SendDurableExecutionCallbackSuccessResponse$
];
exports.StopDurableExecution$ = [9, n0, _SDE,
    { [_h]: ["POST", "/2025-12-01/durable-executions/{DurableExecutionArn}/stop", 200] }, () => exports.StopDurableExecutionRequest$, () => exports.StopDurableExecutionResponse$
];
exports.TagResource$ = [9, n0, _TR,
    { [_h]: ["POST", "/2017-03-31/tags/{Resource}", 204] }, () => exports.TagResourceRequest$, () => __Unit
];
exports.UntagResource$ = [9, n0, _UR,
    { [_h]: ["DELETE", "/2017-03-31/tags/{Resource}", 204] }, () => exports.UntagResourceRequest$, () => __Unit
];
exports.UpdateAlias$ = [9, n0, _UA,
    { [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 200] }, () => exports.UpdateAliasRequest$, () => exports.AliasConfiguration$
];
exports.UpdateCapacityProvider$ = [9, n0, _UCP,
    { [_h]: ["PUT", "/2025-11-30/capacity-providers/{CapacityProviderName}", 202] }, () => exports.UpdateCapacityProviderRequest$, () => exports.UpdateCapacityProviderResponse$
];
exports.UpdateCodeSigningConfig$ = [9, n0, _UCSC,
    { [_h]: ["PUT", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 200] }, () => exports.UpdateCodeSigningConfigRequest$, () => exports.UpdateCodeSigningConfigResponse$
];
exports.UpdateEventSourceMapping$ = [9, n0, _UESM,
    { [_h]: ["PUT", "/2015-03-31/event-source-mappings/{UUID}", 202] }, () => exports.UpdateEventSourceMappingRequest$, () => exports.EventSourceMappingConfiguration$
];
exports.UpdateFunctionCode$ = [9, n0, _UFC,
    { [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/code", 200] }, () => exports.UpdateFunctionCodeRequest$, () => exports.FunctionConfiguration$
];
exports.UpdateFunctionConfiguration$ = [9, n0, _UFCp,
    { [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/configuration", 200] }, () => exports.UpdateFunctionConfigurationRequest$, () => exports.FunctionConfiguration$
];
exports.UpdateFunctionEventInvokeConfig$ = [9, n0, _UFEIC,
    { [_h]: ["POST", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200] }, () => exports.UpdateFunctionEventInvokeConfigRequest$, () => exports.FunctionEventInvokeConfig$
];
exports.UpdateFunctionUrlConfig$ = [9, n0, _UFUC,
    { [_h]: ["PUT", "/2021-10-31/functions/{FunctionName}/url", 200] }, () => exports.UpdateFunctionUrlConfigRequest$, () => exports.UpdateFunctionUrlConfigResponse$
];
