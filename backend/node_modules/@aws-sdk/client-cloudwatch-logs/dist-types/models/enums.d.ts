/**
 * @public
 * @enum
 */
export declare const PolicyType: {
    readonly DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY";
    readonly FIELD_INDEX_POLICY: "FIELD_INDEX_POLICY";
    readonly METRIC_EXTRACTION_POLICY: "METRIC_EXTRACTION_POLICY";
    readonly SUBSCRIPTION_FILTER_POLICY: "SUBSCRIPTION_FILTER_POLICY";
    readonly TRANSFORMER_POLICY: "TRANSFORMER_POLICY";
};
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
/**
 * @public
 * @enum
 */
export declare const Scope: {
    readonly ALL: "ALL";
};
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];
/**
 * @public
 * @enum
 */
export declare const ActionStatus: {
    readonly CLIENT_ERROR: "CLIENT_ERROR";
    readonly COMPLETE: "COMPLETE";
    readonly FAILED: "FAILED";
    readonly IN_PROGRESS: "IN_PROGRESS";
};
/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];
/**
 * @public
 * @enum
 */
export declare const State: {
    readonly Active: "Active";
    readonly Baseline: "Baseline";
    readonly Suppressed: "Suppressed";
};
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];
/**
 * @public
 * @enum
 */
export declare const AnomalyDetectorStatus: {
    readonly ANALYZING: "ANALYZING";
    readonly DELETED: "DELETED";
    readonly FAILED: "FAILED";
    readonly INITIALIZING: "INITIALIZING";
    readonly PAUSED: "PAUSED";
    readonly TRAINING: "TRAINING";
};
/**
 * @public
 */
export type AnomalyDetectorStatus = (typeof AnomalyDetectorStatus)[keyof typeof AnomalyDetectorStatus];
/**
 * @public
 * @enum
 */
export declare const EvaluationFrequency: {
    readonly FIFTEEN_MIN: "FIFTEEN_MIN";
    readonly FIVE_MIN: "FIVE_MIN";
    readonly ONE_HOUR: "ONE_HOUR";
    readonly ONE_MIN: "ONE_MIN";
    readonly TEN_MIN: "TEN_MIN";
    readonly THIRTY_MIN: "THIRTY_MIN";
};
/**
 * @public
 */
export type EvaluationFrequency = (typeof EvaluationFrequency)[keyof typeof EvaluationFrequency];
/**
 * @public
 * @enum
 */
export declare const ImportStatus: {
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly IN_PROGRESS: "IN_PROGRESS";
};
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];
/**
 * @public
 * @enum
 */
export declare const OutputFormat: {
    readonly JSON: "json";
    readonly PARQUET: "parquet";
    readonly PLAIN: "plain";
    readonly RAW: "raw";
    readonly W3C: "w3c";
};
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];
/**
 * @public
 * @enum
 */
export declare const DeliveryDestinationType: {
    readonly CWL: "CWL";
    readonly FH: "FH";
    readonly S3: "S3";
    readonly XRAY: "XRAY";
};
/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];
/**
 * @public
 * @enum
 */
export declare const LogGroupClass: {
    readonly DELIVERY: "DELIVERY";
    readonly INFREQUENT_ACCESS: "INFREQUENT_ACCESS";
    readonly STANDARD: "STANDARD";
};
/**
 * @public
 */
export type LogGroupClass = (typeof LogGroupClass)[keyof typeof LogGroupClass];
/**
 * @public
 * @enum
 */
export declare const QueryLanguage: {
    readonly CWLI: "CWLI";
    readonly PPL: "PPL";
    readonly SQL: "SQL";
};
/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];
/**
 * @public
 * @enum
 */
export declare const ScheduledQueryState: {
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type ScheduledQueryState = (typeof ScheduledQueryState)[keyof typeof ScheduledQueryState];
/**
 * @public
 * @enum
 */
export declare const DataProtectionStatus: {
    readonly ACTIVATED: "ACTIVATED";
    readonly ARCHIVED: "ARCHIVED";
    readonly DELETED: "DELETED";
    readonly DISABLED: "DISABLED";
};
/**
 * @public
 */
export type DataProtectionStatus = (typeof DataProtectionStatus)[keyof typeof DataProtectionStatus];
/**
 * @public
 * @enum
 */
export declare const ExportTaskStatusCode: {
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly PENDING: "PENDING";
    readonly PENDING_CANCEL: "PENDING_CANCEL";
    readonly RUNNING: "RUNNING";
};
/**
 * @public
 */
export type ExportTaskStatusCode = (typeof ExportTaskStatusCode)[keyof typeof ExportTaskStatusCode];
/**
 * @public
 * @enum
 */
export declare const IndexType: {
    readonly FACET: "FACET";
    readonly FIELD_INDEX: "FIELD_INDEX";
};
/**
 * @public
 */
export type IndexType = (typeof IndexType)[keyof typeof IndexType];
/**
 * @public
 * @enum
 */
export declare const IndexSource: {
    readonly ACCOUNT: "ACCOUNT";
    readonly LOG_GROUP: "LOG_GROUP";
};
/**
 * @public
 */
export type IndexSource = (typeof IndexSource)[keyof typeof IndexSource];
/**
 * @public
 * @enum
 */
export declare const InheritedProperty: {
    readonly ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION";
};
/**
 * @public
 */
export type InheritedProperty = (typeof InheritedProperty)[keyof typeof InheritedProperty];
/**
 * @public
 * @enum
 */
export declare const OrderBy: {
    readonly LastEventTime: "LastEventTime";
    readonly LogStreamName: "LogStreamName";
};
/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];
/**
 * @public
 * @enum
 */
export declare const StandardUnit: {
    readonly Bits: "Bits";
    readonly BitsSecond: "Bits/Second";
    readonly Bytes: "Bytes";
    readonly BytesSecond: "Bytes/Second";
    readonly Count: "Count";
    readonly CountSecond: "Count/Second";
    readonly Gigabits: "Gigabits";
    readonly GigabitsSecond: "Gigabits/Second";
    readonly Gigabytes: "Gigabytes";
    readonly GigabytesSecond: "Gigabytes/Second";
    readonly Kilobits: "Kilobits";
    readonly KilobitsSecond: "Kilobits/Second";
    readonly Kilobytes: "Kilobytes";
    readonly KilobytesSecond: "Kilobytes/Second";
    readonly Megabits: "Megabits";
    readonly MegabitsSecond: "Megabits/Second";
    readonly Megabytes: "Megabytes";
    readonly MegabytesSecond: "Megabytes/Second";
    readonly Microseconds: "Microseconds";
    readonly Milliseconds: "Milliseconds";
    readonly None: "None";
    readonly Percent: "Percent";
    readonly Seconds: "Seconds";
    readonly Terabits: "Terabits";
    readonly TerabitsSecond: "Terabits/Second";
    readonly Terabytes: "Terabytes";
    readonly TerabytesSecond: "Terabytes/Second";
};
/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];
/**
 * @public
 * @enum
 */
export declare const QueryStatus: {
    readonly Cancelled: "Cancelled";
    readonly Complete: "Complete";
    readonly Failed: "Failed";
    readonly Running: "Running";
    readonly Scheduled: "Scheduled";
    readonly Timeout: "Timeout";
    readonly Unknown: "Unknown";
};
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];
/**
 * @public
 * @enum
 */
export declare const PolicyScope: {
    readonly ACCOUNT: "ACCOUNT";
    readonly RESOURCE: "RESOURCE";
};
/**
 * @public
 */
export type PolicyScope = (typeof PolicyScope)[keyof typeof PolicyScope];
/**
 * @public
 * @enum
 */
export declare const Distribution: {
    readonly ByLogStream: "ByLogStream";
    readonly Random: "Random";
};
/**
 * @public
 */
export type Distribution = (typeof Distribution)[keyof typeof Distribution];
/**
 * @public
 * @enum
 */
export declare const EntityRejectionErrorType: {
    readonly ENTITY_SIZE_TOO_LARGE: "EntitySizeTooLarge";
    readonly INVALID_ATTRIBUTES: "InvalidAttributes";
    readonly INVALID_ENTITY: "InvalidEntity";
    readonly INVALID_KEY_ATTRIBUTE: "InvalidKeyAttributes";
    readonly INVALID_TYPE_VALUE: "InvalidTypeValue";
    readonly MISSING_REQUIRED_FIELDS: "MissingRequiredFields";
    readonly UNSUPPORTED_LOG_GROUP_TYPE: "UnsupportedLogGroupType";
};
/**
 * @public
 */
export type EntityRejectionErrorType = (typeof EntityRejectionErrorType)[keyof typeof EntityRejectionErrorType];
/**
 * @public
 * @enum
 */
export declare const EventSource: {
    readonly AWSWAF: "AWSWAF";
    readonly CLOUD_TRAIL: "CloudTrail";
    readonly EKS_AUDIT: "EKSAudit";
    readonly ROUTE53_RESOLVER: "Route53Resolver";
    readonly VPC_FLOW: "VPCFlow";
};
/**
 * @public
 */
export type EventSource = (typeof EventSource)[keyof typeof EventSource];
/**
 * @public
 * @enum
 */
export declare const ExecutionStatus: {
    readonly Complete: "Complete";
    readonly Failed: "Failed";
    readonly InvalidQuery: "InvalidQuery";
    readonly Running: "Running";
    readonly Timeout: "Timeout";
};
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];
/**
 * @public
 * @enum
 */
export declare const FlattenedElement: {
    readonly FIRST: "first";
    readonly LAST: "last";
};
/**
 * @public
 */
export type FlattenedElement = (typeof FlattenedElement)[keyof typeof FlattenedElement];
/**
 * @public
 * @enum
 */
export declare const OpenSearchResourceStatusType: {
    readonly ACTIVE: "ACTIVE";
    readonly ERROR: "ERROR";
    readonly NOT_FOUND: "NOT_FOUND";
};
/**
 * @public
 */
export type OpenSearchResourceStatusType = (typeof OpenSearchResourceStatusType)[keyof typeof OpenSearchResourceStatusType];
/**
 * @public
 * @enum
 */
export declare const IntegrationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly FAILED: "FAILED";
    readonly PROVISIONING: "PROVISIONING";
};
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];
/**
 * @public
 * @enum
 */
export declare const IntegrationType: {
    readonly OPENSEARCH: "OPENSEARCH";
};
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];
/**
 * @public
 * @enum
 */
export declare const ScheduledQueryDestinationType: {
    readonly S3: "S3";
};
/**
 * @public
 */
export type ScheduledQueryDestinationType = (typeof ScheduledQueryDestinationType)[keyof typeof ScheduledQueryDestinationType];
/**
 * @public
 * @enum
 */
export declare const OCSFVersion: {
    readonly V1_1: "V1.1";
    readonly V1_5: "V1.5";
};
/**
 * @public
 */
export type OCSFVersion = (typeof OCSFVersion)[keyof typeof OCSFVersion];
/**
 * @public
 * @enum
 */
export declare const Type: {
    readonly BOOLEAN: "boolean";
    readonly DOUBLE: "double";
    readonly INTEGER: "integer";
    readonly STRING: "string";
};
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];
/**
 * @public
 * @enum
 */
export declare const ListAggregateLogGroupSummariesGroupBy: {
    readonly DATA_SOURCE_NAME_AND_TYPE: "DATA_SOURCE_NAME_AND_TYPE";
    readonly DATA_SOURCE_NAME_TYPE_AND_FORMAT: "DATA_SOURCE_NAME_TYPE_AND_FORMAT";
};
/**
 * @public
 */
export type ListAggregateLogGroupSummariesGroupBy = (typeof ListAggregateLogGroupSummariesGroupBy)[keyof typeof ListAggregateLogGroupSummariesGroupBy];
/**
 * @public
 * @enum
 */
export declare const SuppressionState: {
    readonly SUPPRESSED: "SUPPRESSED";
    readonly UNSUPPRESSED: "UNSUPPRESSED";
};
/**
 * @public
 */
export type SuppressionState = (typeof SuppressionState)[keyof typeof SuppressionState];
/**
 * @public
 * @enum
 */
export declare const S3TableIntegrationSourceStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DATA_SOURCE_DELETE_IN_PROGRESS: "DATA_SOURCE_DELETE_IN_PROGRESS";
    readonly FAILED: "FAILED";
    readonly UNHEALTHY: "UNHEALTHY";
};
/**
 * @public
 */
export type S3TableIntegrationSourceStatus = (typeof S3TableIntegrationSourceStatus)[keyof typeof S3TableIntegrationSourceStatus];
/**
 * @public
 * @enum
 */
export declare const SuppressionUnit: {
    readonly HOURS: "HOURS";
    readonly MINUTES: "MINUTES";
    readonly SECONDS: "SECONDS";
};
/**
 * @public
 */
export type SuppressionUnit = (typeof SuppressionUnit)[keyof typeof SuppressionUnit];
/**
 * @public
 * @enum
 */
export declare const SuppressionType: {
    readonly INFINITE: "INFINITE";
    readonly LIMITED: "LIMITED";
};
/**
 * @public
 */
export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];
