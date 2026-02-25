export declare const ThrottleReason: {
  readonly CallerRateLimitExceeded: "CallerRateLimitExceeded";
  readonly ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded";
  readonly ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded";
  readonly FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded";
  readonly ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded";
  readonly ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded";
};
export type ThrottleReason =
  (typeof ThrottleReason)[keyof typeof ThrottleReason];
export declare const FunctionUrlAuthType: {
  readonly AWS_IAM: "AWS_IAM";
  readonly NONE: "NONE";
};
export type FunctionUrlAuthType =
  (typeof FunctionUrlAuthType)[keyof typeof FunctionUrlAuthType];
export declare const KafkaSchemaRegistryAuthType: {
  readonly BASIC_AUTH: "BASIC_AUTH";
  readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
  readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
};
export type KafkaSchemaRegistryAuthType =
  (typeof KafkaSchemaRegistryAuthType)[keyof typeof KafkaSchemaRegistryAuthType];
export declare const SchemaRegistryEventRecordFormat: {
  readonly JSON: "JSON";
  readonly SOURCE: "SOURCE";
};
export type SchemaRegistryEventRecordFormat =
  (typeof SchemaRegistryEventRecordFormat)[keyof typeof SchemaRegistryEventRecordFormat];
export declare const KafkaSchemaValidationAttribute: {
  readonly KEY: "KEY";
  readonly VALUE: "VALUE";
};
export type KafkaSchemaValidationAttribute =
  (typeof KafkaSchemaValidationAttribute)[keyof typeof KafkaSchemaValidationAttribute];
export declare const ApplicationLogLevel: {
  readonly Debug: "DEBUG";
  readonly Error: "ERROR";
  readonly Fatal: "FATAL";
  readonly Info: "INFO";
  readonly Trace: "TRACE";
  readonly Warn: "WARN";
};
export type ApplicationLogLevel =
  (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];
export declare const Architecture: {
  readonly arm64: "arm64";
  readonly x86_64: "x86_64";
};
export type Architecture = (typeof Architecture)[keyof typeof Architecture];
export declare const CapacityProviderScalingMode: {
  readonly Auto: "Auto";
  readonly Manual: "Manual";
};
export type CapacityProviderScalingMode =
  (typeof CapacityProviderScalingMode)[keyof typeof CapacityProviderScalingMode];
export declare const CapacityProviderPredefinedMetricType: {
  readonly LambdaCapacityProviderAverageCPUUtilization: "LambdaCapacityProviderAverageCPUUtilization";
};
export type CapacityProviderPredefinedMetricType =
  (typeof CapacityProviderPredefinedMetricType)[keyof typeof CapacityProviderPredefinedMetricType];
export declare const CapacityProviderState: {
  readonly Active: "Active";
  readonly Deleting: "Deleting";
  readonly Failed: "Failed";
  readonly Pending: "Pending";
};
export type CapacityProviderState =
  (typeof CapacityProviderState)[keyof typeof CapacityProviderState];
export declare const State: {
  readonly Active: "Active";
  readonly ActiveNonInvocable: "ActiveNonInvocable";
  readonly Deactivated: "Deactivated";
  readonly Deactivating: "Deactivating";
  readonly Deleting: "Deleting";
  readonly Failed: "Failed";
  readonly Inactive: "Inactive";
  readonly Pending: "Pending";
};
export type State = (typeof State)[keyof typeof State];
export declare const OperationAction: {
  readonly CANCEL: "CANCEL";
  readonly FAIL: "FAIL";
  readonly RETRY: "RETRY";
  readonly START: "START";
  readonly SUCCEED: "SUCCEED";
};
export type OperationAction =
  (typeof OperationAction)[keyof typeof OperationAction];
export declare const OperationType: {
  readonly CALLBACK: "CALLBACK";
  readonly CHAINED_INVOKE: "CHAINED_INVOKE";
  readonly CONTEXT: "CONTEXT";
  readonly EXECUTION: "EXECUTION";
  readonly STEP: "STEP";
  readonly WAIT: "WAIT";
};
export type OperationType = (typeof OperationType)[keyof typeof OperationType];
export declare const OperationStatus: {
  readonly CANCELLED: "CANCELLED";
  readonly FAILED: "FAILED";
  readonly PENDING: "PENDING";
  readonly READY: "READY";
  readonly STARTED: "STARTED";
  readonly STOPPED: "STOPPED";
  readonly SUCCEEDED: "SUCCEEDED";
  readonly TIMED_OUT: "TIMED_OUT";
};
export type OperationStatus =
  (typeof OperationStatus)[keyof typeof OperationStatus];
export declare const CodeSigningPolicy: {
  readonly Enforce: "Enforce";
  readonly Warn: "Warn";
};
export type CodeSigningPolicy =
  (typeof CodeSigningPolicy)[keyof typeof CodeSigningPolicy];
export declare const FullDocument: {
  readonly Default: "Default";
  readonly UpdateLookup: "UpdateLookup";
};
export type FullDocument = (typeof FullDocument)[keyof typeof FullDocument];
export declare const FunctionResponseType: {
  readonly ReportBatchItemFailures: "ReportBatchItemFailures";
};
export type FunctionResponseType =
  (typeof FunctionResponseType)[keyof typeof FunctionResponseType];
export declare const EventSourceMappingSystemLogLevel: {
  readonly Debug: "DEBUG";
  readonly Info: "INFO";
  readonly Warn: "WARN";
};
export type EventSourceMappingSystemLogLevel =
  (typeof EventSourceMappingSystemLogLevel)[keyof typeof EventSourceMappingSystemLogLevel];
export declare const EventSourceMappingMetric: {
  readonly ErrorCount: "ErrorCount";
  readonly EventCount: "EventCount";
  readonly KafkaMetrics: "KafkaMetrics";
};
export type EventSourceMappingMetric =
  (typeof EventSourceMappingMetric)[keyof typeof EventSourceMappingMetric];
export declare const EndPointType: {
  readonly KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS";
};
export type EndPointType = (typeof EndPointType)[keyof typeof EndPointType];
export declare const SourceAccessType: {
  readonly BASIC_AUTH: "BASIC_AUTH";
  readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
  readonly SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH";
  readonly SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH";
  readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
  readonly VIRTUAL_HOST: "VIRTUAL_HOST";
  readonly VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP";
  readonly VPC_SUBNET: "VPC_SUBNET";
};
export type SourceAccessType =
  (typeof SourceAccessType)[keyof typeof SourceAccessType];
export declare const EventSourcePosition: {
  readonly AT_TIMESTAMP: "AT_TIMESTAMP";
  readonly LATEST: "LATEST";
  readonly TRIM_HORIZON: "TRIM_HORIZON";
};
export type EventSourcePosition =
  (typeof EventSourcePosition)[keyof typeof EventSourcePosition];
export declare const LogFormat: {
  readonly Json: "JSON";
  readonly Text: "Text";
};
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];
export declare const SystemLogLevel: {
  readonly Debug: "DEBUG";
  readonly Info: "INFO";
  readonly Warn: "WARN";
};
export type SystemLogLevel =
  (typeof SystemLogLevel)[keyof typeof SystemLogLevel];
export declare const PackageType: {
  readonly Image: "Image";
  readonly Zip: "Zip";
};
export type PackageType = (typeof PackageType)[keyof typeof PackageType];
export declare const FunctionVersionLatestPublished: {
  readonly LATEST_PUBLISHED: "LATEST_PUBLISHED";
};
export type FunctionVersionLatestPublished =
  (typeof FunctionVersionLatestPublished)[keyof typeof FunctionVersionLatestPublished];
export declare const Runtime: {
  readonly dotnet10: "dotnet10";
  readonly dotnet6: "dotnet6";
  readonly dotnet8: "dotnet8";
  readonly dotnetcore10: "dotnetcore1.0";
  readonly dotnetcore20: "dotnetcore2.0";
  readonly dotnetcore21: "dotnetcore2.1";
  readonly dotnetcore31: "dotnetcore3.1";
  readonly go1x: "go1.x";
  readonly java11: "java11";
  readonly java17: "java17";
  readonly java21: "java21";
  readonly java25: "java25";
  readonly java8: "java8";
  readonly java8al2: "java8.al2";
  readonly nodejs: "nodejs";
  readonly nodejs10x: "nodejs10.x";
  readonly nodejs12x: "nodejs12.x";
  readonly nodejs14x: "nodejs14.x";
  readonly nodejs16x: "nodejs16.x";
  readonly nodejs18x: "nodejs18.x";
  readonly nodejs20x: "nodejs20.x";
  readonly nodejs22x: "nodejs22.x";
  readonly nodejs24x: "nodejs24.x";
  readonly nodejs43: "nodejs4.3";
  readonly nodejs43edge: "nodejs4.3-edge";
  readonly nodejs610: "nodejs6.10";
  readonly nodejs810: "nodejs8.10";
  readonly provided: "provided";
  readonly providedal2: "provided.al2";
  readonly providedal2023: "provided.al2023";
  readonly python27: "python2.7";
  readonly python310: "python3.10";
  readonly python311: "python3.11";
  readonly python312: "python3.12";
  readonly python313: "python3.13";
  readonly python314: "python3.14";
  readonly python36: "python3.6";
  readonly python37: "python3.7";
  readonly python38: "python3.8";
  readonly python39: "python3.9";
  readonly ruby25: "ruby2.5";
  readonly ruby27: "ruby2.7";
  readonly ruby32: "ruby3.2";
  readonly ruby33: "ruby3.3";
  readonly ruby34: "ruby3.4";
};
export type Runtime = (typeof Runtime)[keyof typeof Runtime];
export declare const SnapStartApplyOn: {
  readonly None: "None";
  readonly PublishedVersions: "PublishedVersions";
};
export type SnapStartApplyOn =
  (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];
export declare const TenantIsolationMode: {
  readonly PER_TENANT: "PER_TENANT";
};
export type TenantIsolationMode =
  (typeof TenantIsolationMode)[keyof typeof TenantIsolationMode];
export declare const TracingMode: {
  readonly Active: "Active";
  readonly PassThrough: "PassThrough";
};
export type TracingMode = (typeof TracingMode)[keyof typeof TracingMode];
export declare const LastUpdateStatus: {
  readonly Failed: "Failed";
  readonly InProgress: "InProgress";
  readonly Successful: "Successful";
};
export type LastUpdateStatus =
  (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];
export declare const LastUpdateStatusReasonCode: {
  readonly CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded";
  readonly DisabledKMSKey: "DisabledKMSKey";
  readonly DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl";
  readonly EC2RequestLimitExceeded: "EC2RequestLimitExceeded";
  readonly EFSIOError: "EFSIOError";
  readonly EFSMountConnectivityError: "EFSMountConnectivityError";
  readonly EFSMountFailure: "EFSMountFailure";
  readonly EFSMountTimeout: "EFSMountTimeout";
  readonly EniLimitExceeded: "EniLimitExceeded";
  readonly FunctionError: "FunctionError";
  readonly FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError";
  readonly FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted";
  readonly FunctionErrorInitTimeout: "FunctionError.InitTimeout";
  readonly FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint";
  readonly FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory";
  readonly FunctionErrorPermissionDenied: "FunctionError.PermissionDenied";
  readonly FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError";
  readonly FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions";
  readonly ImageAccessDenied: "ImageAccessDenied";
  readonly ImageDeleted: "ImageDeleted";
  readonly InsufficientCapacity: "InsufficientCapacity";
  readonly InsufficientRolePermissions: "InsufficientRolePermissions";
  readonly InternalError: "InternalError";
  readonly InvalidConfiguration: "InvalidConfiguration";
  readonly InvalidImage: "InvalidImage";
  readonly InvalidRuntime: "InvalidRuntime";
  readonly InvalidSecurityGroup: "InvalidSecurityGroup";
  readonly InvalidStateKMSKey: "InvalidStateKMSKey";
  readonly InvalidSubnet: "InvalidSubnet";
  readonly InvalidZipFileException: "InvalidZipFileException";
  readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
  readonly KMSKeyNotFound: "KMSKeyNotFound";
  readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
  readonly VcpuLimitExceeded: "VcpuLimitExceeded";
};
export type LastUpdateStatusReasonCode =
  (typeof LastUpdateStatusReasonCode)[keyof typeof LastUpdateStatusReasonCode];
export declare const SnapStartOptimizationStatus: {
  readonly Off: "Off";
  readonly On: "On";
};
export type SnapStartOptimizationStatus =
  (typeof SnapStartOptimizationStatus)[keyof typeof SnapStartOptimizationStatus];
export declare const StateReasonCode: {
  readonly CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded";
  readonly Creating: "Creating";
  readonly DisabledKMSKey: "DisabledKMSKey";
  readonly DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl";
  readonly DrainingDurableExecutions: "DrainingDurableExecutions";
  readonly EC2RequestLimitExceeded: "EC2RequestLimitExceeded";
  readonly EFSIOError: "EFSIOError";
  readonly EFSMountConnectivityError: "EFSMountConnectivityError";
  readonly EFSMountFailure: "EFSMountFailure";
  readonly EFSMountTimeout: "EFSMountTimeout";
  readonly EniLimitExceeded: "EniLimitExceeded";
  readonly FunctionError: "FunctionError";
  readonly FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError";
  readonly FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted";
  readonly FunctionErrorInitTimeout: "FunctionError.InitTimeout";
  readonly FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint";
  readonly FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory";
  readonly FunctionErrorPermissionDenied: "FunctionError.PermissionDenied";
  readonly FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError";
  readonly FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions";
  readonly Idle: "Idle";
  readonly ImageAccessDenied: "ImageAccessDenied";
  readonly ImageDeleted: "ImageDeleted";
  readonly InsufficientCapacity: "InsufficientCapacity";
  readonly InsufficientRolePermissions: "InsufficientRolePermissions";
  readonly InternalError: "InternalError";
  readonly InvalidConfiguration: "InvalidConfiguration";
  readonly InvalidImage: "InvalidImage";
  readonly InvalidRuntime: "InvalidRuntime";
  readonly InvalidSecurityGroup: "InvalidSecurityGroup";
  readonly InvalidStateKMSKey: "InvalidStateKMSKey";
  readonly InvalidSubnet: "InvalidSubnet";
  readonly InvalidZipFileException: "InvalidZipFileException";
  readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
  readonly KMSKeyNotFound: "KMSKeyNotFound";
  readonly Restoring: "Restoring";
  readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
  readonly VcpuLimitExceeded: "VcpuLimitExceeded";
};
export type StateReasonCode =
  (typeof StateReasonCode)[keyof typeof StateReasonCode];
export declare const InvokeMode: {
  readonly BUFFERED: "BUFFERED";
  readonly RESPONSE_STREAM: "RESPONSE_STREAM";
};
export type InvokeMode = (typeof InvokeMode)[keyof typeof InvokeMode];
export declare const RecursiveLoop: {
  readonly Allow: "Allow";
  readonly Terminate: "Terminate";
};
export type RecursiveLoop = (typeof RecursiveLoop)[keyof typeof RecursiveLoop];
export declare const UpdateRuntimeOn: {
  readonly Auto: "Auto";
  readonly FunctionUpdate: "FunctionUpdate";
  readonly Manual: "Manual";
};
export type UpdateRuntimeOn =
  (typeof UpdateRuntimeOn)[keyof typeof UpdateRuntimeOn];
export declare const InvocationType: {
  readonly DryRun: "DryRun";
  readonly Event: "Event";
  readonly RequestResponse: "RequestResponse";
};
export type InvocationType =
  (typeof InvocationType)[keyof typeof InvocationType];
export declare const LogType: {
  readonly None: "None";
  readonly Tail: "Tail";
};
export type LogType = (typeof LogType)[keyof typeof LogType];
export declare const ResponseStreamingInvocationType: {
  readonly DryRun: "DryRun";
  readonly RequestResponse: "RequestResponse";
};
export type ResponseStreamingInvocationType =
  (typeof ResponseStreamingInvocationType)[keyof typeof ResponseStreamingInvocationType];
export declare const FunctionVersion: {
  readonly ALL: "ALL";
};
export type FunctionVersion =
  (typeof FunctionVersion)[keyof typeof FunctionVersion];
export declare const ProvisionedConcurrencyStatusEnum: {
  readonly FAILED: "FAILED";
  readonly IN_PROGRESS: "IN_PROGRESS";
  readonly READY: "READY";
};
export type ProvisionedConcurrencyStatusEnum =
  (typeof ProvisionedConcurrencyStatusEnum)[keyof typeof ProvisionedConcurrencyStatusEnum];
export declare const ExecutionStatus: {
  readonly FAILED: "FAILED";
  readonly RUNNING: "RUNNING";
  readonly STOPPED: "STOPPED";
  readonly SUCCEEDED: "SUCCEEDED";
  readonly TIMED_OUT: "TIMED_OUT";
};
export type ExecutionStatus =
  (typeof ExecutionStatus)[keyof typeof ExecutionStatus];
export declare const EventType: {
  readonly CallbackFailed: "CallbackFailed";
  readonly CallbackStarted: "CallbackStarted";
  readonly CallbackSucceeded: "CallbackSucceeded";
  readonly CallbackTimedOut: "CallbackTimedOut";
  readonly ChainedInvokeFailed: "ChainedInvokeFailed";
  readonly ChainedInvokeStarted: "ChainedInvokeStarted";
  readonly ChainedInvokeStopped: "ChainedInvokeStopped";
  readonly ChainedInvokeSucceeded: "ChainedInvokeSucceeded";
  readonly ChainedInvokeTimedOut: "ChainedInvokeTimedOut";
  readonly ContextFailed: "ContextFailed";
  readonly ContextStarted: "ContextStarted";
  readonly ContextSucceeded: "ContextSucceeded";
  readonly ExecutionFailed: "ExecutionFailed";
  readonly ExecutionStarted: "ExecutionStarted";
  readonly ExecutionStopped: "ExecutionStopped";
  readonly ExecutionSucceeded: "ExecutionSucceeded";
  readonly ExecutionTimedOut: "ExecutionTimedOut";
  readonly InvocationCompleted: "InvocationCompleted";
  readonly StepFailed: "StepFailed";
  readonly StepStarted: "StepStarted";
  readonly StepSucceeded: "StepSucceeded";
  readonly WaitCancelled: "WaitCancelled";
  readonly WaitStarted: "WaitStarted";
  readonly WaitSucceeded: "WaitSucceeded";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
