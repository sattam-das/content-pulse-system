'use strict';

var accountIdEndpoint = require('@aws-sdk/core/account-id-endpoint');
var middlewareEndpointDiscovery = require('@aws-sdk/middleware-endpoint-discovery');
var middlewareHostHeader = require('@aws-sdk/middleware-host-header');
var middlewareLogger = require('@aws-sdk/middleware-logger');
var middlewareRecursionDetection = require('@aws-sdk/middleware-recursion-detection');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');
var configResolver = require('@smithy/config-resolver');
var core = require('@smithy/core');
var schema = require('@smithy/core/schema');
var middlewareContentLength = require('@smithy/middleware-content-length');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var middlewareRetry = require('@smithy/middleware-retry');
var smithyClient = require('@smithy/smithy-client');
var httpAuthSchemeProvider = require('./auth/httpAuthSchemeProvider');
var schemas_0 = require('./schemas/schemas_0');
var runtimeConfig = require('./runtimeConfig');
var regionConfigResolver = require('@aws-sdk/region-config-resolver');
var protocolHttp = require('@smithy/protocol-http');
var utilWaiter = require('@smithy/util-waiter');
var errors = require('./models/errors');
var DynamoDBServiceException = require('./models/DynamoDBServiceException');

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "dynamodb",
    });
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    AccountId: { type: "builtInParams", name: "accountId" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    AccountIdEndpointMode: { type: "builtInParams", name: "accountIdEndpointMode" },
};

class DescribeEndpointsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeEndpoints", {})
    .n("DynamoDBClient", "DescribeEndpointsCommand")
    .sc(schemas_0.DescribeEndpoints$)
    .build() {
}

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig), smithyClient.getDefaultExtensionConfiguration(runtimeConfig), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

class DynamoDBClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = accountIdEndpoint.resolveAccountIdEndpointModeConfig(_config_1);
        const _config_3 = middlewareUserAgent.resolveUserAgentConfig(_config_2);
        const _config_4 = middlewareRetry.resolveRetryConfig(_config_3);
        const _config_5 = configResolver.resolveRegionConfig(_config_4);
        const _config_6 = middlewareHostHeader.resolveHostHeaderConfig(_config_5);
        const _config_7 = middlewareEndpoint.resolveEndpointConfig(_config_6);
        const _config_8 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_7);
        const _config_9 = middlewareEndpointDiscovery.resolveEndpointDiscoveryConfig(_config_8, { endpointDiscoveryCommandCtor: DescribeEndpointsCommand });
        const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
        this.config = _config_10;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultDynamoDBHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
            }),
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class BatchExecuteStatementCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "BatchExecuteStatement", {})
    .n("DynamoDBClient", "BatchExecuteStatementCommand")
    .sc(schemas_0.BatchExecuteStatement$)
    .build() {
}

class BatchGetItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArnList: { type: "operationContextParams", get: (input) => Object.keys(input?.RequestItems ?? {}) },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "BatchGetItem", {})
    .n("DynamoDBClient", "BatchGetItemCommand")
    .sc(schemas_0.BatchGetItem$)
    .build() {
}

class BatchWriteItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArnList: { type: "operationContextParams", get: (input) => Object.keys(input?.RequestItems ?? {}) },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "BatchWriteItem", {})
    .n("DynamoDBClient", "BatchWriteItemCommand")
    .sc(schemas_0.BatchWriteItem$)
    .build() {
}

class CreateBackupCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "CreateBackup", {})
    .n("DynamoDBClient", "CreateBackupCommand")
    .sc(schemas_0.CreateBackup$)
    .build() {
}

class CreateGlobalTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "GlobalTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "CreateGlobalTable", {})
    .n("DynamoDBClient", "CreateGlobalTableCommand")
    .sc(schemas_0.CreateGlobalTable$)
    .build() {
}

class CreateTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "CreateTable", {})
    .n("DynamoDBClient", "CreateTableCommand")
    .sc(schemas_0.CreateTable$)
    .build() {
}

class DeleteBackupCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "BackupArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DeleteBackup", {})
    .n("DynamoDBClient", "DeleteBackupCommand")
    .sc(schemas_0.DeleteBackup$)
    .build() {
}

class DeleteItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DeleteItem", {})
    .n("DynamoDBClient", "DeleteItemCommand")
    .sc(schemas_0.DeleteItem$)
    .build() {
}

class DeleteResourcePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DeleteResourcePolicy", {})
    .n("DynamoDBClient", "DeleteResourcePolicyCommand")
    .sc(schemas_0.DeleteResourcePolicy$)
    .build() {
}

class DeleteTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DeleteTable", {})
    .n("DynamoDBClient", "DeleteTableCommand")
    .sc(schemas_0.DeleteTable$)
    .build() {
}

class DescribeBackupCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "BackupArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeBackup", {})
    .n("DynamoDBClient", "DescribeBackupCommand")
    .sc(schemas_0.DescribeBackup$)
    .build() {
}

class DescribeContinuousBackupsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeContinuousBackups", {})
    .n("DynamoDBClient", "DescribeContinuousBackupsCommand")
    .sc(schemas_0.DescribeContinuousBackups$)
    .build() {
}

class DescribeContributorInsightsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeContributorInsights", {})
    .n("DynamoDBClient", "DescribeContributorInsightsCommand")
    .sc(schemas_0.DescribeContributorInsights$)
    .build() {
}

class DescribeExportCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ExportArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeExport", {})
    .n("DynamoDBClient", "DescribeExportCommand")
    .sc(schemas_0.DescribeExport$)
    .build() {
}

class DescribeGlobalTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "GlobalTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeGlobalTable", {})
    .n("DynamoDBClient", "DescribeGlobalTableCommand")
    .sc(schemas_0.DescribeGlobalTable$)
    .build() {
}

class DescribeGlobalTableSettingsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "GlobalTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeGlobalTableSettings", {})
    .n("DynamoDBClient", "DescribeGlobalTableSettingsCommand")
    .sc(schemas_0.DescribeGlobalTableSettings$)
    .build() {
}

class DescribeImportCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ImportArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeImport", {})
    .n("DynamoDBClient", "DescribeImportCommand")
    .sc(schemas_0.DescribeImport$)
    .build() {
}

class DescribeKinesisStreamingDestinationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeKinesisStreamingDestination", {})
    .n("DynamoDBClient", "DescribeKinesisStreamingDestinationCommand")
    .sc(schemas_0.DescribeKinesisStreamingDestination$)
    .build() {
}

class DescribeLimitsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeLimits", {})
    .n("DynamoDBClient", "DescribeLimitsCommand")
    .sc(schemas_0.DescribeLimits$)
    .build() {
}

class DescribeTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeTable", {})
    .n("DynamoDBClient", "DescribeTableCommand")
    .sc(schemas_0.DescribeTable$)
    .build() {
}

class DescribeTableReplicaAutoScalingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeTableReplicaAutoScaling", {})
    .n("DynamoDBClient", "DescribeTableReplicaAutoScalingCommand")
    .sc(schemas_0.DescribeTableReplicaAutoScaling$)
    .build() {
}

class DescribeTimeToLiveCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DescribeTimeToLive", {})
    .n("DynamoDBClient", "DescribeTimeToLiveCommand")
    .sc(schemas_0.DescribeTimeToLive$)
    .build() {
}

class DisableKinesisStreamingDestinationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "DisableKinesisStreamingDestination", {})
    .n("DynamoDBClient", "DisableKinesisStreamingDestinationCommand")
    .sc(schemas_0.DisableKinesisStreamingDestination$)
    .build() {
}

class EnableKinesisStreamingDestinationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "EnableKinesisStreamingDestination", {})
    .n("DynamoDBClient", "EnableKinesisStreamingDestinationCommand")
    .sc(schemas_0.EnableKinesisStreamingDestination$)
    .build() {
}

class ExecuteStatementCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ExecuteStatement", {})
    .n("DynamoDBClient", "ExecuteStatementCommand")
    .sc(schemas_0.ExecuteStatement$)
    .build() {
}

class ExecuteTransactionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ExecuteTransaction", {})
    .n("DynamoDBClient", "ExecuteTransactionCommand")
    .sc(schemas_0.ExecuteTransaction$)
    .build() {
}

class ExportTableToPointInTimeCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ExportTableToPointInTime", {})
    .n("DynamoDBClient", "ExportTableToPointInTimeCommand")
    .sc(schemas_0.ExportTableToPointInTime$)
    .build() {
}

class GetItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "GetItem", {})
    .n("DynamoDBClient", "GetItemCommand")
    .sc(schemas_0.GetItem$)
    .build() {
}

class GetResourcePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "GetResourcePolicy", {})
    .n("DynamoDBClient", "GetResourcePolicyCommand")
    .sc(schemas_0.GetResourcePolicy$)
    .build() {
}

class ImportTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "operationContextParams", get: (input) => input?.TableCreationParameters?.TableName },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ImportTable", {})
    .n("DynamoDBClient", "ImportTableCommand")
    .sc(schemas_0.ImportTable$)
    .build() {
}

class ListBackupsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListBackups", {})
    .n("DynamoDBClient", "ListBackupsCommand")
    .sc(schemas_0.ListBackups$)
    .build() {
}

class ListContributorInsightsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListContributorInsights", {})
    .n("DynamoDBClient", "ListContributorInsightsCommand")
    .sc(schemas_0.ListContributorInsights$)
    .build() {
}

class ListExportsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListExports", {})
    .n("DynamoDBClient", "ListExportsCommand")
    .sc(schemas_0.ListExports$)
    .build() {
}

class ListGlobalTablesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListGlobalTables", {})
    .n("DynamoDBClient", "ListGlobalTablesCommand")
    .sc(schemas_0.ListGlobalTables$)
    .build() {
}

class ListImportsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListImports", {})
    .n("DynamoDBClient", "ListImportsCommand")
    .sc(schemas_0.ListImports$)
    .build() {
}

class ListTablesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListTables", {})
    .n("DynamoDBClient", "ListTablesCommand")
    .sc(schemas_0.ListTables$)
    .build() {
}

class ListTagsOfResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "ListTagsOfResource", {})
    .n("DynamoDBClient", "ListTagsOfResourceCommand")
    .sc(schemas_0.ListTagsOfResource$)
    .build() {
}

class PutItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "PutItem", {})
    .n("DynamoDBClient", "PutItemCommand")
    .sc(schemas_0.PutItem$)
    .build() {
}

class PutResourcePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "PutResourcePolicy", {})
    .n("DynamoDBClient", "PutResourcePolicyCommand")
    .sc(schemas_0.PutResourcePolicy$)
    .build() {
}

class QueryCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "Query", {})
    .n("DynamoDBClient", "QueryCommand")
    .sc(schemas_0.Query$)
    .build() {
}

class RestoreTableFromBackupCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TargetTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "RestoreTableFromBackup", {})
    .n("DynamoDBClient", "RestoreTableFromBackupCommand")
    .sc(schemas_0.RestoreTableFromBackup$)
    .build() {
}

class RestoreTableToPointInTimeCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TargetTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "RestoreTableToPointInTime", {})
    .n("DynamoDBClient", "RestoreTableToPointInTimeCommand")
    .sc(schemas_0.RestoreTableToPointInTime$)
    .build() {
}

class ScanCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "Scan", {})
    .n("DynamoDBClient", "ScanCommand")
    .sc(schemas_0.Scan$)
    .build() {
}

class TagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "TagResource", {})
    .n("DynamoDBClient", "TagResourceCommand")
    .sc(schemas_0.TagResource$)
    .build() {
}

class TransactGetItemsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArnList: { type: "operationContextParams", get: (input) => input?.TransactItems?.map((obj) => obj?.Get?.TableName) },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "TransactGetItems", {})
    .n("DynamoDBClient", "TransactGetItemsCommand")
    .sc(schemas_0.TransactGetItems$)
    .build() {
}

class TransactWriteItemsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArnList: { type: "operationContextParams", get: (input) => input?.TransactItems?.map((obj) => [obj?.ConditionCheck?.TableName, obj?.Put?.TableName, obj?.Delete?.TableName, obj?.Update?.TableName].filter((i) => i)).flat() },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "TransactWriteItems", {})
    .n("DynamoDBClient", "TransactWriteItemsCommand")
    .sc(schemas_0.TransactWriteItems$)
    .build() {
}

class UntagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UntagResource", {})
    .n("DynamoDBClient", "UntagResourceCommand")
    .sc(schemas_0.UntagResource$)
    .build() {
}

class UpdateContinuousBackupsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateContinuousBackups", {})
    .n("DynamoDBClient", "UpdateContinuousBackupsCommand")
    .sc(schemas_0.UpdateContinuousBackups$)
    .build() {
}

class UpdateContributorInsightsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateContributorInsights", {})
    .n("DynamoDBClient", "UpdateContributorInsightsCommand")
    .sc(schemas_0.UpdateContributorInsights$)
    .build() {
}

class UpdateGlobalTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "GlobalTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateGlobalTable", {})
    .n("DynamoDBClient", "UpdateGlobalTableCommand")
    .sc(schemas_0.UpdateGlobalTable$)
    .build() {
}

class UpdateGlobalTableSettingsCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "GlobalTableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateGlobalTableSettings", {})
    .n("DynamoDBClient", "UpdateGlobalTableSettingsCommand")
    .sc(schemas_0.UpdateGlobalTableSettings$)
    .build() {
}

class UpdateItemCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateItem", {})
    .n("DynamoDBClient", "UpdateItemCommand")
    .sc(schemas_0.UpdateItem$)
    .build() {
}

class UpdateKinesisStreamingDestinationCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateKinesisStreamingDestination", {})
    .n("DynamoDBClient", "UpdateKinesisStreamingDestinationCommand")
    .sc(schemas_0.UpdateKinesisStreamingDestination$)
    .build() {
}

class UpdateTableCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateTable", {})
    .n("DynamoDBClient", "UpdateTableCommand")
    .sc(schemas_0.UpdateTable$)
    .build() {
}

class UpdateTableReplicaAutoScalingCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateTableReplicaAutoScaling", {})
    .n("DynamoDBClient", "UpdateTableReplicaAutoScalingCommand")
    .sc(schemas_0.UpdateTableReplicaAutoScaling$)
    .build() {
}

class UpdateTimeToLiveCommand extends smithyClient.Command
    .classBuilder()
    .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
})
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("DynamoDB_20120810", "UpdateTimeToLive", {})
    .n("DynamoDBClient", "UpdateTimeToLiveCommand")
    .sc(schemas_0.UpdateTimeToLive$)
    .build() {
}

const paginateListContributorInsights = core.createPaginator(DynamoDBClient, ListContributorInsightsCommand, "NextToken", "NextToken", "MaxResults");

const paginateListExports = core.createPaginator(DynamoDBClient, ListExportsCommand, "NextToken", "NextToken", "MaxResults");

const paginateListImports = core.createPaginator(DynamoDBClient, ListImportsCommand, "NextToken", "NextToken", "PageSize");

const paginateListTables = core.createPaginator(DynamoDBClient, ListTablesCommand, "ExclusiveStartTableName", "LastEvaluatedTableName", "Limit");

const paginateQuery = core.createPaginator(DynamoDBClient, QueryCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

const paginateScan = core.createPaginator(DynamoDBClient, ScanCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

const checkState$5 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeContributorInsightsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ContributorInsightsStatus;
            };
            if (returnComparator() === "ENABLED") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ContributorInsightsStatus;
            };
            if (returnComparator() === "FAILED") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForContributorInsightsEnabled = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$5);
};
const waitUntilContributorInsightsEnabled = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$5);
    return utilWaiter.checkExceptions(result);
};

const checkState$4 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeExportCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ExportDescription.ExportStatus;
            };
            if (returnComparator() === "COMPLETED") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ExportDescription.ExportStatus;
            };
            if (returnComparator() === "FAILED") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForExportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$4);
};
const waitUntilExportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$4);
    return utilWaiter.checkExceptions(result);
};

const checkState$3 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeImportCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "COMPLETED") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "FAILED") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "CANCELLED") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForImportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
};
const waitUntilImportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
    return utilWaiter.checkExceptions(result);
};

const checkState$2 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeKinesisStreamingDestinationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.KinesisDataStreamDestinations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.DestinationStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "ACTIVE") {
                    return { state: utilWaiter.WaiterState.SUCCESS, reason };
                }
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let filterRes_2 = result.KinesisDataStreamDestinations.filter((element_1) => {
                    return (((element_1.DestinationStatus == "DISABLED") || (element_1.DestinationStatus == "ENABLE_FAILED")) && ((element_1.DestinationStatus == "ENABLE_FAILED") || (element_1.DestinationStatus == "DISABLED")));
                });
                return ((result.KinesisDataStreamDestinations.length > 0) && (filterRes_2.length == result.KinesisDataStreamDestinations.length));
            };
            if (returnComparator() == true) {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForKinesisStreamingDestinationActive = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
};
const waitUntilKinesisStreamingDestinationActive = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
    return utilWaiter.checkExceptions(result);
};

const checkState$1 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeTableCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Table.TableStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
};
const waitUntilTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
    return utilWaiter.checkExceptions(result);
};

const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeTableCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: utilWaiter.WaiterState.SUCCESS, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return utilWaiter.checkExceptions(result);
};

const commands = {
    BatchExecuteStatementCommand,
    BatchGetItemCommand,
    BatchWriteItemCommand,
    CreateBackupCommand,
    CreateGlobalTableCommand,
    CreateTableCommand,
    DeleteBackupCommand,
    DeleteItemCommand,
    DeleteResourcePolicyCommand,
    DeleteTableCommand,
    DescribeBackupCommand,
    DescribeContinuousBackupsCommand,
    DescribeContributorInsightsCommand,
    DescribeEndpointsCommand,
    DescribeExportCommand,
    DescribeGlobalTableCommand,
    DescribeGlobalTableSettingsCommand,
    DescribeImportCommand,
    DescribeKinesisStreamingDestinationCommand,
    DescribeLimitsCommand,
    DescribeTableCommand,
    DescribeTableReplicaAutoScalingCommand,
    DescribeTimeToLiveCommand,
    DisableKinesisStreamingDestinationCommand,
    EnableKinesisStreamingDestinationCommand,
    ExecuteStatementCommand,
    ExecuteTransactionCommand,
    ExportTableToPointInTimeCommand,
    GetItemCommand,
    GetResourcePolicyCommand,
    ImportTableCommand,
    ListBackupsCommand,
    ListContributorInsightsCommand,
    ListExportsCommand,
    ListGlobalTablesCommand,
    ListImportsCommand,
    ListTablesCommand,
    ListTagsOfResourceCommand,
    PutItemCommand,
    PutResourcePolicyCommand,
    QueryCommand,
    RestoreTableFromBackupCommand,
    RestoreTableToPointInTimeCommand,
    ScanCommand,
    TagResourceCommand,
    TransactGetItemsCommand,
    TransactWriteItemsCommand,
    UntagResourceCommand,
    UpdateContinuousBackupsCommand,
    UpdateContributorInsightsCommand,
    UpdateGlobalTableCommand,
    UpdateGlobalTableSettingsCommand,
    UpdateItemCommand,
    UpdateKinesisStreamingDestinationCommand,
    UpdateTableCommand,
    UpdateTableReplicaAutoScalingCommand,
    UpdateTimeToLiveCommand,
};
const paginators = {
    paginateListContributorInsights,
    paginateListExports,
    paginateListImports,
    paginateListTables,
    paginateQuery,
    paginateScan,
};
const waiters = {
    waitUntilContributorInsightsEnabled,
    waitUntilExportCompleted,
    waitUntilImportCompleted,
    waitUntilKinesisStreamingDestinationActive,
    waitUntilTableExists,
    waitUntilTableNotExists,
};
class DynamoDB extends DynamoDBClient {
}
smithyClient.createAggregatedClient(commands, DynamoDB, { paginators, waiters });

const ApproximateCreationDateTimePrecision = {
    MICROSECOND: "MICROSECOND",
    MILLISECOND: "MILLISECOND",
};
const AttributeAction = {
    ADD: "ADD",
    DELETE: "DELETE",
    PUT: "PUT",
};
const ScalarAttributeType = {
    B: "B",
    N: "N",
    S: "S",
};
const BackupStatus = {
    AVAILABLE: "AVAILABLE",
    CREATING: "CREATING",
    DELETED: "DELETED",
};
const BackupType = {
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const BillingMode = {
    PAY_PER_REQUEST: "PAY_PER_REQUEST",
    PROVISIONED: "PROVISIONED",
};
const KeyType = {
    HASH: "HASH",
    RANGE: "RANGE",
};
const ProjectionType = {
    ALL: "ALL",
    INCLUDE: "INCLUDE",
    KEYS_ONLY: "KEYS_ONLY",
};
const SSEType = {
    AES256: "AES256",
    KMS: "KMS",
};
const SSEStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    UPDATING: "UPDATING",
};
const StreamViewType = {
    KEYS_ONLY: "KEYS_ONLY",
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
    OLD_IMAGE: "OLD_IMAGE",
};
const TimeToLiveStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
};
const BackupTypeFilter = {
    ALL: "ALL",
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const ReturnConsumedCapacity = {
    INDEXES: "INDEXES",
    NONE: "NONE",
    TOTAL: "TOTAL",
};
const ReturnValuesOnConditionCheckFailure = {
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
};
const BatchStatementErrorCodeEnum = {
    AccessDenied: "AccessDenied",
    ConditionalCheckFailed: "ConditionalCheckFailed",
    DuplicateItem: "DuplicateItem",
    InternalServerError: "InternalServerError",
    ItemCollectionSizeLimitExceeded: "ItemCollectionSizeLimitExceeded",
    ProvisionedThroughputExceeded: "ProvisionedThroughputExceeded",
    RequestLimitExceeded: "RequestLimitExceeded",
    ResourceNotFound: "ResourceNotFound",
    ThrottlingError: "ThrottlingError",
    TransactionConflict: "TransactionConflict",
    ValidationError: "ValidationError",
};
const ReturnItemCollectionMetrics = {
    NONE: "NONE",
    SIZE: "SIZE",
};
const ComparisonOperator = {
    BEGINS_WITH: "BEGINS_WITH",
    BETWEEN: "BETWEEN",
    CONTAINS: "CONTAINS",
    EQ: "EQ",
    GE: "GE",
    GT: "GT",
    IN: "IN",
    LE: "LE",
    LT: "LT",
    NE: "NE",
    NOT_CONTAINS: "NOT_CONTAINS",
    NOT_NULL: "NOT_NULL",
    NULL: "NULL",
};
const ConditionalOperator = {
    AND: "AND",
    OR: "OR",
};
const ContinuousBackupsStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const PointInTimeRecoveryStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const ContributorInsightsAction = {
    DISABLE: "DISABLE",
    ENABLE: "ENABLE",
};
const ContributorInsightsMode = {
    ACCESSED_AND_THROTTLED_KEYS: "ACCESSED_AND_THROTTLED_KEYS",
    THROTTLED_KEYS: "THROTTLED_KEYS",
};
const ContributorInsightsStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    FAILED: "FAILED",
};
const GlobalTableStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const IndexStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const GlobalTableSettingsReplicationMode = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
    ENABLED_WITH_OVERRIDES: "ENABLED_WITH_OVERRIDES",
};
const ReplicaStatus = {
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED",
    ARCHIVING: "ARCHIVING",
    CREATING: "CREATING",
    CREATION_FAILED: "CREATION_FAILED",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    REGION_DISABLED: "REGION_DISABLED",
    REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED",
    UPDATING: "UPDATING",
};
const TableClass = {
    STANDARD: "STANDARD",
    STANDARD_INFREQUENT_ACCESS: "STANDARD_INFREQUENT_ACCESS",
};
const TableStatus = {
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED",
    ARCHIVING: "ARCHIVING",
    CREATING: "CREATING",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED",
    UPDATING: "UPDATING",
};
const WitnessStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
};
const MultiRegionConsistency = {
    EVENTUAL: "EVENTUAL",
    STRONG: "STRONG",
};
const ReturnValue = {
    ALL_NEW: "ALL_NEW",
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
    UPDATED_NEW: "UPDATED_NEW",
    UPDATED_OLD: "UPDATED_OLD",
};
const ExportFormat = {
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
const ExportStatus = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const ExportType = {
    FULL_EXPORT: "FULL_EXPORT",
    INCREMENTAL_EXPORT: "INCREMENTAL_EXPORT",
};
const ExportViewType = {
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
};
const S3SseAlgorithm = {
    AES256: "AES256",
    KMS: "KMS",
};
const ImportStatus = {
    CANCELLED: "CANCELLED",
    CANCELLING: "CANCELLING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const InputCompressionType = {
    GZIP: "GZIP",
    NONE: "NONE",
    ZSTD: "ZSTD",
};
const InputFormat = {
    CSV: "CSV",
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
const DestinationStatus = {
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLE_FAILED: "ENABLE_FAILED",
    ENABLING: "ENABLING",
    UPDATING: "UPDATING",
};
const Select = {
    ALL_ATTRIBUTES: "ALL_ATTRIBUTES",
    ALL_PROJECTED_ATTRIBUTES: "ALL_PROJECTED_ATTRIBUTES",
    COUNT: "COUNT",
    SPECIFIC_ATTRIBUTES: "SPECIFIC_ATTRIBUTES",
};

exports.$Command = smithyClient.Command;
exports.__Client = smithyClient.Client;
exports.DynamoDBServiceException = DynamoDBServiceException.DynamoDBServiceException;
exports.ApproximateCreationDateTimePrecision = ApproximateCreationDateTimePrecision;
exports.AttributeAction = AttributeAction;
exports.BackupStatus = BackupStatus;
exports.BackupType = BackupType;
exports.BackupTypeFilter = BackupTypeFilter;
exports.BatchExecuteStatementCommand = BatchExecuteStatementCommand;
exports.BatchGetItemCommand = BatchGetItemCommand;
exports.BatchStatementErrorCodeEnum = BatchStatementErrorCodeEnum;
exports.BatchWriteItemCommand = BatchWriteItemCommand;
exports.BillingMode = BillingMode;
exports.ComparisonOperator = ComparisonOperator;
exports.ConditionalOperator = ConditionalOperator;
exports.ContinuousBackupsStatus = ContinuousBackupsStatus;
exports.ContributorInsightsAction = ContributorInsightsAction;
exports.ContributorInsightsMode = ContributorInsightsMode;
exports.ContributorInsightsStatus = ContributorInsightsStatus;
exports.CreateBackupCommand = CreateBackupCommand;
exports.CreateGlobalTableCommand = CreateGlobalTableCommand;
exports.CreateTableCommand = CreateTableCommand;
exports.DeleteBackupCommand = DeleteBackupCommand;
exports.DeleteItemCommand = DeleteItemCommand;
exports.DeleteResourcePolicyCommand = DeleteResourcePolicyCommand;
exports.DeleteTableCommand = DeleteTableCommand;
exports.DescribeBackupCommand = DescribeBackupCommand;
exports.DescribeContinuousBackupsCommand = DescribeContinuousBackupsCommand;
exports.DescribeContributorInsightsCommand = DescribeContributorInsightsCommand;
exports.DescribeEndpointsCommand = DescribeEndpointsCommand;
exports.DescribeExportCommand = DescribeExportCommand;
exports.DescribeGlobalTableCommand = DescribeGlobalTableCommand;
exports.DescribeGlobalTableSettingsCommand = DescribeGlobalTableSettingsCommand;
exports.DescribeImportCommand = DescribeImportCommand;
exports.DescribeKinesisStreamingDestinationCommand = DescribeKinesisStreamingDestinationCommand;
exports.DescribeLimitsCommand = DescribeLimitsCommand;
exports.DescribeTableCommand = DescribeTableCommand;
exports.DescribeTableReplicaAutoScalingCommand = DescribeTableReplicaAutoScalingCommand;
exports.DescribeTimeToLiveCommand = DescribeTimeToLiveCommand;
exports.DestinationStatus = DestinationStatus;
exports.DisableKinesisStreamingDestinationCommand = DisableKinesisStreamingDestinationCommand;
exports.DynamoDB = DynamoDB;
exports.DynamoDBClient = DynamoDBClient;
exports.EnableKinesisStreamingDestinationCommand = EnableKinesisStreamingDestinationCommand;
exports.ExecuteStatementCommand = ExecuteStatementCommand;
exports.ExecuteTransactionCommand = ExecuteTransactionCommand;
exports.ExportFormat = ExportFormat;
exports.ExportStatus = ExportStatus;
exports.ExportTableToPointInTimeCommand = ExportTableToPointInTimeCommand;
exports.ExportType = ExportType;
exports.ExportViewType = ExportViewType;
exports.GetItemCommand = GetItemCommand;
exports.GetResourcePolicyCommand = GetResourcePolicyCommand;
exports.GlobalTableSettingsReplicationMode = GlobalTableSettingsReplicationMode;
exports.GlobalTableStatus = GlobalTableStatus;
exports.ImportStatus = ImportStatus;
exports.ImportTableCommand = ImportTableCommand;
exports.IndexStatus = IndexStatus;
exports.InputCompressionType = InputCompressionType;
exports.InputFormat = InputFormat;
exports.KeyType = KeyType;
exports.ListBackupsCommand = ListBackupsCommand;
exports.ListContributorInsightsCommand = ListContributorInsightsCommand;
exports.ListExportsCommand = ListExportsCommand;
exports.ListGlobalTablesCommand = ListGlobalTablesCommand;
exports.ListImportsCommand = ListImportsCommand;
exports.ListTablesCommand = ListTablesCommand;
exports.ListTagsOfResourceCommand = ListTagsOfResourceCommand;
exports.MultiRegionConsistency = MultiRegionConsistency;
exports.PointInTimeRecoveryStatus = PointInTimeRecoveryStatus;
exports.ProjectionType = ProjectionType;
exports.PutItemCommand = PutItemCommand;
exports.PutResourcePolicyCommand = PutResourcePolicyCommand;
exports.QueryCommand = QueryCommand;
exports.ReplicaStatus = ReplicaStatus;
exports.RestoreTableFromBackupCommand = RestoreTableFromBackupCommand;
exports.RestoreTableToPointInTimeCommand = RestoreTableToPointInTimeCommand;
exports.ReturnConsumedCapacity = ReturnConsumedCapacity;
exports.ReturnItemCollectionMetrics = ReturnItemCollectionMetrics;
exports.ReturnValue = ReturnValue;
exports.ReturnValuesOnConditionCheckFailure = ReturnValuesOnConditionCheckFailure;
exports.S3SseAlgorithm = S3SseAlgorithm;
exports.SSEStatus = SSEStatus;
exports.SSEType = SSEType;
exports.ScalarAttributeType = ScalarAttributeType;
exports.ScanCommand = ScanCommand;
exports.Select = Select;
exports.StreamViewType = StreamViewType;
exports.TableClass = TableClass;
exports.TableStatus = TableStatus;
exports.TagResourceCommand = TagResourceCommand;
exports.TimeToLiveStatus = TimeToLiveStatus;
exports.TransactGetItemsCommand = TransactGetItemsCommand;
exports.TransactWriteItemsCommand = TransactWriteItemsCommand;
exports.UntagResourceCommand = UntagResourceCommand;
exports.UpdateContinuousBackupsCommand = UpdateContinuousBackupsCommand;
exports.UpdateContributorInsightsCommand = UpdateContributorInsightsCommand;
exports.UpdateGlobalTableCommand = UpdateGlobalTableCommand;
exports.UpdateGlobalTableSettingsCommand = UpdateGlobalTableSettingsCommand;
exports.UpdateItemCommand = UpdateItemCommand;
exports.UpdateKinesisStreamingDestinationCommand = UpdateKinesisStreamingDestinationCommand;
exports.UpdateTableCommand = UpdateTableCommand;
exports.UpdateTableReplicaAutoScalingCommand = UpdateTableReplicaAutoScalingCommand;
exports.UpdateTimeToLiveCommand = UpdateTimeToLiveCommand;
exports.WitnessStatus = WitnessStatus;
exports.paginateListContributorInsights = paginateListContributorInsights;
exports.paginateListExports = paginateListExports;
exports.paginateListImports = paginateListImports;
exports.paginateListTables = paginateListTables;
exports.paginateQuery = paginateQuery;
exports.paginateScan = paginateScan;
exports.waitForContributorInsightsEnabled = waitForContributorInsightsEnabled;
exports.waitForExportCompleted = waitForExportCompleted;
exports.waitForImportCompleted = waitForImportCompleted;
exports.waitForKinesisStreamingDestinationActive = waitForKinesisStreamingDestinationActive;
exports.waitForTableExists = waitForTableExists;
exports.waitForTableNotExists = waitForTableNotExists;
exports.waitUntilContributorInsightsEnabled = waitUntilContributorInsightsEnabled;
exports.waitUntilExportCompleted = waitUntilExportCompleted;
exports.waitUntilImportCompleted = waitUntilImportCompleted;
exports.waitUntilKinesisStreamingDestinationActive = waitUntilKinesisStreamingDestinationActive;
exports.waitUntilTableExists = waitUntilTableExists;
exports.waitUntilTableNotExists = waitUntilTableNotExists;
Object.prototype.hasOwnProperty.call(schemas_0, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: schemas_0['__proto__']
    });

Object.keys(schemas_0).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
});
Object.prototype.hasOwnProperty.call(errors, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: errors['__proto__']
    });

Object.keys(errors).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
});
