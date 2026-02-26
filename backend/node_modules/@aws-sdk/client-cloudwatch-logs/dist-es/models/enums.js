export const PolicyType = {
    DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY",
    FIELD_INDEX_POLICY: "FIELD_INDEX_POLICY",
    METRIC_EXTRACTION_POLICY: "METRIC_EXTRACTION_POLICY",
    SUBSCRIPTION_FILTER_POLICY: "SUBSCRIPTION_FILTER_POLICY",
    TRANSFORMER_POLICY: "TRANSFORMER_POLICY",
};
export const Scope = {
    ALL: "ALL",
};
export const ActionStatus = {
    CLIENT_ERROR: "CLIENT_ERROR",
    COMPLETE: "COMPLETE",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
export const State = {
    Active: "Active",
    Baseline: "Baseline",
    Suppressed: "Suppressed",
};
export const AnomalyDetectorStatus = {
    ANALYZING: "ANALYZING",
    DELETED: "DELETED",
    FAILED: "FAILED",
    INITIALIZING: "INITIALIZING",
    PAUSED: "PAUSED",
    TRAINING: "TRAINING",
};
export const EvaluationFrequency = {
    FIFTEEN_MIN: "FIFTEEN_MIN",
    FIVE_MIN: "FIVE_MIN",
    ONE_HOUR: "ONE_HOUR",
    ONE_MIN: "ONE_MIN",
    TEN_MIN: "TEN_MIN",
    THIRTY_MIN: "THIRTY_MIN",
};
export const ImportStatus = {
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
export const OutputFormat = {
    JSON: "json",
    PARQUET: "parquet",
    PLAIN: "plain",
    RAW: "raw",
    W3C: "w3c",
};
export const DeliveryDestinationType = {
    CWL: "CWL",
    FH: "FH",
    S3: "S3",
    XRAY: "XRAY",
};
export const LogGroupClass = {
    DELIVERY: "DELIVERY",
    INFREQUENT_ACCESS: "INFREQUENT_ACCESS",
    STANDARD: "STANDARD",
};
export const QueryLanguage = {
    CWLI: "CWLI",
    PPL: "PPL",
    SQL: "SQL",
};
export const ScheduledQueryState = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
export const DataProtectionStatus = {
    ACTIVATED: "ACTIVATED",
    ARCHIVED: "ARCHIVED",
    DELETED: "DELETED",
    DISABLED: "DISABLED",
};
export const ExportTaskStatusCode = {
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    PENDING_CANCEL: "PENDING_CANCEL",
    RUNNING: "RUNNING",
};
export const IndexType = {
    FACET: "FACET",
    FIELD_INDEX: "FIELD_INDEX",
};
export const IndexSource = {
    ACCOUNT: "ACCOUNT",
    LOG_GROUP: "LOG_GROUP",
};
export const InheritedProperty = {
    ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION",
};
export const OrderBy = {
    LastEventTime: "LastEventTime",
    LogStreamName: "LogStreamName",
};
export const StandardUnit = {
    Bits: "Bits",
    BitsSecond: "Bits/Second",
    Bytes: "Bytes",
    BytesSecond: "Bytes/Second",
    Count: "Count",
    CountSecond: "Count/Second",
    Gigabits: "Gigabits",
    GigabitsSecond: "Gigabits/Second",
    Gigabytes: "Gigabytes",
    GigabytesSecond: "Gigabytes/Second",
    Kilobits: "Kilobits",
    KilobitsSecond: "Kilobits/Second",
    Kilobytes: "Kilobytes",
    KilobytesSecond: "Kilobytes/Second",
    Megabits: "Megabits",
    MegabitsSecond: "Megabits/Second",
    Megabytes: "Megabytes",
    MegabytesSecond: "Megabytes/Second",
    Microseconds: "Microseconds",
    Milliseconds: "Milliseconds",
    None: "None",
    Percent: "Percent",
    Seconds: "Seconds",
    Terabits: "Terabits",
    TerabitsSecond: "Terabits/Second",
    Terabytes: "Terabytes",
    TerabytesSecond: "Terabytes/Second",
};
export const QueryStatus = {
    Cancelled: "Cancelled",
    Complete: "Complete",
    Failed: "Failed",
    Running: "Running",
    Scheduled: "Scheduled",
    Timeout: "Timeout",
    Unknown: "Unknown",
};
export const PolicyScope = {
    ACCOUNT: "ACCOUNT",
    RESOURCE: "RESOURCE",
};
export const Distribution = {
    ByLogStream: "ByLogStream",
    Random: "Random",
};
export const EntityRejectionErrorType = {
    ENTITY_SIZE_TOO_LARGE: "EntitySizeTooLarge",
    INVALID_ATTRIBUTES: "InvalidAttributes",
    INVALID_ENTITY: "InvalidEntity",
    INVALID_KEY_ATTRIBUTE: "InvalidKeyAttributes",
    INVALID_TYPE_VALUE: "InvalidTypeValue",
    MISSING_REQUIRED_FIELDS: "MissingRequiredFields",
    UNSUPPORTED_LOG_GROUP_TYPE: "UnsupportedLogGroupType",
};
export const EventSource = {
    AWSWAF: "AWSWAF",
    CLOUD_TRAIL: "CloudTrail",
    EKS_AUDIT: "EKSAudit",
    ROUTE53_RESOLVER: "Route53Resolver",
    VPC_FLOW: "VPCFlow",
};
export const ExecutionStatus = {
    Complete: "Complete",
    Failed: "Failed",
    InvalidQuery: "InvalidQuery",
    Running: "Running",
    Timeout: "Timeout",
};
export const FlattenedElement = {
    FIRST: "first",
    LAST: "last",
};
export const OpenSearchResourceStatusType = {
    ACTIVE: "ACTIVE",
    ERROR: "ERROR",
    NOT_FOUND: "NOT_FOUND",
};
export const IntegrationStatus = {
    ACTIVE: "ACTIVE",
    FAILED: "FAILED",
    PROVISIONING: "PROVISIONING",
};
export const IntegrationType = {
    OPENSEARCH: "OPENSEARCH",
};
export const ScheduledQueryDestinationType = {
    S3: "S3",
};
export const OCSFVersion = {
    V1_1: "V1.1",
    V1_5: "V1.5",
};
export const Type = {
    BOOLEAN: "boolean",
    DOUBLE: "double",
    INTEGER: "integer",
    STRING: "string",
};
export const ListAggregateLogGroupSummariesGroupBy = {
    DATA_SOURCE_NAME_AND_TYPE: "DATA_SOURCE_NAME_AND_TYPE",
    DATA_SOURCE_NAME_TYPE_AND_FORMAT: "DATA_SOURCE_NAME_TYPE_AND_FORMAT",
};
export const SuppressionState = {
    SUPPRESSED: "SUPPRESSED",
    UNSUPPRESSED: "UNSUPPRESSED",
};
export const S3TableIntegrationSourceStatus = {
    ACTIVE: "ACTIVE",
    DATA_SOURCE_DELETE_IN_PROGRESS: "DATA_SOURCE_DELETE_IN_PROGRESS",
    FAILED: "FAILED",
    UNHEALTHY: "UNHEALTHY",
};
export const SuppressionUnit = {
    HOURS: "HOURS",
    MINUTES: "MINUTES",
    SECONDS: "SECONDS",
};
export const SuppressionType = {
    INFINITE: "INFINITE",
    LIMITED: "LIMITED",
};
