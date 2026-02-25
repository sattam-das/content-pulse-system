'use strict';

var middlewareHostHeader = require('@aws-sdk/middleware-host-header');
var middlewareLogger = require('@aws-sdk/middleware-logger');
var middlewareRecursionDetection = require('@aws-sdk/middleware-recursion-detection');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');
var configResolver = require('@smithy/config-resolver');
var core = require('@smithy/core');
var schema = require('@smithy/core/schema');
var eventstreamSerdeConfigResolver = require('@smithy/eventstream-serde-config-resolver');
var middlewareContentLength = require('@smithy/middleware-content-length');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var middlewareRetry = require('@smithy/middleware-retry');
var smithyClient = require('@smithy/smithy-client');
var httpAuthSchemeProvider = require('./auth/httpAuthSchemeProvider');
var runtimeConfig = require('./runtimeConfig');
var regionConfigResolver = require('@aws-sdk/region-config-resolver');
var protocolHttp = require('@smithy/protocol-http');
var schemas_0 = require('./schemas/schemas_0');
var utilWaiter = require('@smithy/util-waiter');
var errors = require('./models/errors');
var LambdaServiceException = require('./models/LambdaServiceException');

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "lambda",
    });
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

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

class LambdaClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = eventstreamSerdeConfigResolver.resolveEventStreamSerdeConfig(_config_6);
        const _config_8 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_7);
        const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
        this.config = _config_9;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultLambdaHttpAuthSchemeParametersProvider,
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

class AddLayerVersionPermissionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "AddLayerVersionPermission", {})
    .n("LambdaClient", "AddLayerVersionPermissionCommand")
    .sc(schemas_0.AddLayerVersionPermission$)
    .build() {
}

class AddPermissionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "AddPermission", {})
    .n("LambdaClient", "AddPermissionCommand")
    .sc(schemas_0.AddPermission$)
    .build() {
}

class CheckpointDurableExecutionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CheckpointDurableExecution", {})
    .n("LambdaClient", "CheckpointDurableExecutionCommand")
    .sc(schemas_0.CheckpointDurableExecution$)
    .build() {
}

class CreateAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateAlias", {})
    .n("LambdaClient", "CreateAliasCommand")
    .sc(schemas_0.CreateAlias$)
    .build() {
}

class CreateCapacityProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateCapacityProvider", {})
    .n("LambdaClient", "CreateCapacityProviderCommand")
    .sc(schemas_0.CreateCapacityProvider$)
    .build() {
}

class CreateCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateCodeSigningConfig", {})
    .n("LambdaClient", "CreateCodeSigningConfigCommand")
    .sc(schemas_0.CreateCodeSigningConfig$)
    .build() {
}

class CreateEventSourceMappingCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateEventSourceMapping", {})
    .n("LambdaClient", "CreateEventSourceMappingCommand")
    .sc(schemas_0.CreateEventSourceMapping$)
    .build() {
}

class CreateFunctionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateFunction", {})
    .n("LambdaClient", "CreateFunctionCommand")
    .sc(schemas_0.CreateFunction$)
    .build() {
}

class CreateFunctionUrlConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "CreateFunctionUrlConfig", {})
    .n("LambdaClient", "CreateFunctionUrlConfigCommand")
    .sc(schemas_0.CreateFunctionUrlConfig$)
    .build() {
}

class DeleteAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteAlias", {})
    .n("LambdaClient", "DeleteAliasCommand")
    .sc(schemas_0.DeleteAlias$)
    .build() {
}

class DeleteCapacityProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteCapacityProvider", {})
    .n("LambdaClient", "DeleteCapacityProviderCommand")
    .sc(schemas_0.DeleteCapacityProvider$)
    .build() {
}

class DeleteCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteCodeSigningConfig", {})
    .n("LambdaClient", "DeleteCodeSigningConfigCommand")
    .sc(schemas_0.DeleteCodeSigningConfig$)
    .build() {
}

class DeleteEventSourceMappingCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteEventSourceMapping", {})
    .n("LambdaClient", "DeleteEventSourceMappingCommand")
    .sc(schemas_0.DeleteEventSourceMapping$)
    .build() {
}

class DeleteFunctionCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunctionCodeSigningConfig", {})
    .n("LambdaClient", "DeleteFunctionCodeSigningConfigCommand")
    .sc(schemas_0.DeleteFunctionCodeSigningConfig$)
    .build() {
}

class DeleteFunctionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunction", {})
    .n("LambdaClient", "DeleteFunctionCommand")
    .sc(schemas_0.DeleteFunction$)
    .build() {
}

class DeleteFunctionConcurrencyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunctionConcurrency", {})
    .n("LambdaClient", "DeleteFunctionConcurrencyCommand")
    .sc(schemas_0.DeleteFunctionConcurrency$)
    .build() {
}

class DeleteFunctionEventInvokeConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunctionEventInvokeConfig", {})
    .n("LambdaClient", "DeleteFunctionEventInvokeConfigCommand")
    .sc(schemas_0.DeleteFunctionEventInvokeConfig$)
    .build() {
}

class DeleteFunctionUrlConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteFunctionUrlConfig", {})
    .n("LambdaClient", "DeleteFunctionUrlConfigCommand")
    .sc(schemas_0.DeleteFunctionUrlConfig$)
    .build() {
}

class DeleteLayerVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteLayerVersion", {})
    .n("LambdaClient", "DeleteLayerVersionCommand")
    .sc(schemas_0.DeleteLayerVersion$)
    .build() {
}

class DeleteProvisionedConcurrencyConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "DeleteProvisionedConcurrencyConfig", {})
    .n("LambdaClient", "DeleteProvisionedConcurrencyConfigCommand")
    .sc(schemas_0.DeleteProvisionedConcurrencyConfig$)
    .build() {
}

class GetAccountSettingsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetAccountSettings", {})
    .n("LambdaClient", "GetAccountSettingsCommand")
    .sc(schemas_0.GetAccountSettings$)
    .build() {
}

class GetAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetAlias", {})
    .n("LambdaClient", "GetAliasCommand")
    .sc(schemas_0.GetAlias$)
    .build() {
}

class GetCapacityProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetCapacityProvider", {})
    .n("LambdaClient", "GetCapacityProviderCommand")
    .sc(schemas_0.GetCapacityProvider$)
    .build() {
}

class GetCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetCodeSigningConfig", {})
    .n("LambdaClient", "GetCodeSigningConfigCommand")
    .sc(schemas_0.GetCodeSigningConfig$)
    .build() {
}

class GetDurableExecutionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetDurableExecution", {})
    .n("LambdaClient", "GetDurableExecutionCommand")
    .sc(schemas_0.GetDurableExecution$)
    .build() {
}

class GetDurableExecutionHistoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetDurableExecutionHistory", {})
    .n("LambdaClient", "GetDurableExecutionHistoryCommand")
    .sc(schemas_0.GetDurableExecutionHistory$)
    .build() {
}

class GetDurableExecutionStateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetDurableExecutionState", {})
    .n("LambdaClient", "GetDurableExecutionStateCommand")
    .sc(schemas_0.GetDurableExecutionState$)
    .build() {
}

class GetEventSourceMappingCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetEventSourceMapping", {})
    .n("LambdaClient", "GetEventSourceMappingCommand")
    .sc(schemas_0.GetEventSourceMapping$)
    .build() {
}

class GetFunctionCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionCodeSigningConfig", {})
    .n("LambdaClient", "GetFunctionCodeSigningConfigCommand")
    .sc(schemas_0.GetFunctionCodeSigningConfig$)
    .build() {
}

class GetFunctionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunction", {})
    .n("LambdaClient", "GetFunctionCommand")
    .sc(schemas_0.GetFunction$)
    .build() {
}

class GetFunctionConcurrencyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionConcurrency", {})
    .n("LambdaClient", "GetFunctionConcurrencyCommand")
    .sc(schemas_0.GetFunctionConcurrency$)
    .build() {
}

class GetFunctionConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionConfiguration", {})
    .n("LambdaClient", "GetFunctionConfigurationCommand")
    .sc(schemas_0.GetFunctionConfiguration$)
    .build() {
}

class GetFunctionEventInvokeConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionEventInvokeConfig", {})
    .n("LambdaClient", "GetFunctionEventInvokeConfigCommand")
    .sc(schemas_0.GetFunctionEventInvokeConfig$)
    .build() {
}

class GetFunctionRecursionConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionRecursionConfig", {})
    .n("LambdaClient", "GetFunctionRecursionConfigCommand")
    .sc(schemas_0.GetFunctionRecursionConfig$)
    .build() {
}

class GetFunctionScalingConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionScalingConfig", {})
    .n("LambdaClient", "GetFunctionScalingConfigCommand")
    .sc(schemas_0.GetFunctionScalingConfig$)
    .build() {
}

class GetFunctionUrlConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetFunctionUrlConfig", {})
    .n("LambdaClient", "GetFunctionUrlConfigCommand")
    .sc(schemas_0.GetFunctionUrlConfig$)
    .build() {
}

class GetLayerVersionByArnCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetLayerVersionByArn", {})
    .n("LambdaClient", "GetLayerVersionByArnCommand")
    .sc(schemas_0.GetLayerVersionByArn$)
    .build() {
}

class GetLayerVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetLayerVersion", {})
    .n("LambdaClient", "GetLayerVersionCommand")
    .sc(schemas_0.GetLayerVersion$)
    .build() {
}

class GetLayerVersionPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetLayerVersionPolicy", {})
    .n("LambdaClient", "GetLayerVersionPolicyCommand")
    .sc(schemas_0.GetLayerVersionPolicy$)
    .build() {
}

class GetPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetPolicy", {})
    .n("LambdaClient", "GetPolicyCommand")
    .sc(schemas_0.GetPolicy$)
    .build() {
}

class GetProvisionedConcurrencyConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetProvisionedConcurrencyConfig", {})
    .n("LambdaClient", "GetProvisionedConcurrencyConfigCommand")
    .sc(schemas_0.GetProvisionedConcurrencyConfig$)
    .build() {
}

class GetRuntimeManagementConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "GetRuntimeManagementConfig", {})
    .n("LambdaClient", "GetRuntimeManagementConfigCommand")
    .sc(schemas_0.GetRuntimeManagementConfig$)
    .build() {
}

class InvokeAsyncCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "InvokeAsync", {})
    .n("LambdaClient", "InvokeAsyncCommand")
    .sc(schemas_0.InvokeAsync$)
    .build() {
}

class InvokeCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "Invoke", {})
    .n("LambdaClient", "InvokeCommand")
    .sc(schemas_0.Invoke$)
    .build() {
}

class InvokeWithResponseStreamCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "InvokeWithResponseStream", {
    eventStream: {
        output: true,
    },
})
    .n("LambdaClient", "InvokeWithResponseStreamCommand")
    .sc(schemas_0.InvokeWithResponseStream$)
    .build() {
}

class ListAliasesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListAliases", {})
    .n("LambdaClient", "ListAliasesCommand")
    .sc(schemas_0.ListAliases$)
    .build() {
}

class ListCapacityProvidersCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListCapacityProviders", {})
    .n("LambdaClient", "ListCapacityProvidersCommand")
    .sc(schemas_0.ListCapacityProviders$)
    .build() {
}

class ListCodeSigningConfigsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListCodeSigningConfigs", {})
    .n("LambdaClient", "ListCodeSigningConfigsCommand")
    .sc(schemas_0.ListCodeSigningConfigs$)
    .build() {
}

class ListDurableExecutionsByFunctionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListDurableExecutionsByFunction", {})
    .n("LambdaClient", "ListDurableExecutionsByFunctionCommand")
    .sc(schemas_0.ListDurableExecutionsByFunction$)
    .build() {
}

class ListEventSourceMappingsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListEventSourceMappings", {})
    .n("LambdaClient", "ListEventSourceMappingsCommand")
    .sc(schemas_0.ListEventSourceMappings$)
    .build() {
}

class ListFunctionEventInvokeConfigsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListFunctionEventInvokeConfigs", {})
    .n("LambdaClient", "ListFunctionEventInvokeConfigsCommand")
    .sc(schemas_0.ListFunctionEventInvokeConfigs$)
    .build() {
}

class ListFunctionsByCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListFunctionsByCodeSigningConfig", {})
    .n("LambdaClient", "ListFunctionsByCodeSigningConfigCommand")
    .sc(schemas_0.ListFunctionsByCodeSigningConfig$)
    .build() {
}

class ListFunctionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListFunctions", {})
    .n("LambdaClient", "ListFunctionsCommand")
    .sc(schemas_0.ListFunctions$)
    .build() {
}

class ListFunctionUrlConfigsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListFunctionUrlConfigs", {})
    .n("LambdaClient", "ListFunctionUrlConfigsCommand")
    .sc(schemas_0.ListFunctionUrlConfigs$)
    .build() {
}

class ListFunctionVersionsByCapacityProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListFunctionVersionsByCapacityProvider", {})
    .n("LambdaClient", "ListFunctionVersionsByCapacityProviderCommand")
    .sc(schemas_0.ListFunctionVersionsByCapacityProvider$)
    .build() {
}

class ListLayersCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListLayers", {})
    .n("LambdaClient", "ListLayersCommand")
    .sc(schemas_0.ListLayers$)
    .build() {
}

class ListLayerVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListLayerVersions", {})
    .n("LambdaClient", "ListLayerVersionsCommand")
    .sc(schemas_0.ListLayerVersions$)
    .build() {
}

class ListProvisionedConcurrencyConfigsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListProvisionedConcurrencyConfigs", {})
    .n("LambdaClient", "ListProvisionedConcurrencyConfigsCommand")
    .sc(schemas_0.ListProvisionedConcurrencyConfigs$)
    .build() {
}

class ListTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListTags", {})
    .n("LambdaClient", "ListTagsCommand")
    .sc(schemas_0.ListTags$)
    .build() {
}

class ListVersionsByFunctionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "ListVersionsByFunction", {})
    .n("LambdaClient", "ListVersionsByFunctionCommand")
    .sc(schemas_0.ListVersionsByFunction$)
    .build() {
}

class PublishLayerVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PublishLayerVersion", {})
    .n("LambdaClient", "PublishLayerVersionCommand")
    .sc(schemas_0.PublishLayerVersion$)
    .build() {
}

class PublishVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PublishVersion", {})
    .n("LambdaClient", "PublishVersionCommand")
    .sc(schemas_0.PublishVersion$)
    .build() {
}

class PutFunctionCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionCodeSigningConfig", {})
    .n("LambdaClient", "PutFunctionCodeSigningConfigCommand")
    .sc(schemas_0.PutFunctionCodeSigningConfig$)
    .build() {
}

class PutFunctionConcurrencyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionConcurrency", {})
    .n("LambdaClient", "PutFunctionConcurrencyCommand")
    .sc(schemas_0.PutFunctionConcurrency$)
    .build() {
}

class PutFunctionEventInvokeConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionEventInvokeConfig", {})
    .n("LambdaClient", "PutFunctionEventInvokeConfigCommand")
    .sc(schemas_0.PutFunctionEventInvokeConfig$)
    .build() {
}

class PutFunctionRecursionConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionRecursionConfig", {})
    .n("LambdaClient", "PutFunctionRecursionConfigCommand")
    .sc(schemas_0.PutFunctionRecursionConfig$)
    .build() {
}

class PutFunctionScalingConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutFunctionScalingConfig", {})
    .n("LambdaClient", "PutFunctionScalingConfigCommand")
    .sc(schemas_0.PutFunctionScalingConfig$)
    .build() {
}

class PutProvisionedConcurrencyConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutProvisionedConcurrencyConfig", {})
    .n("LambdaClient", "PutProvisionedConcurrencyConfigCommand")
    .sc(schemas_0.PutProvisionedConcurrencyConfig$)
    .build() {
}

class PutRuntimeManagementConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "PutRuntimeManagementConfig", {})
    .n("LambdaClient", "PutRuntimeManagementConfigCommand")
    .sc(schemas_0.PutRuntimeManagementConfig$)
    .build() {
}

class RemoveLayerVersionPermissionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "RemoveLayerVersionPermission", {})
    .n("LambdaClient", "RemoveLayerVersionPermissionCommand")
    .sc(schemas_0.RemoveLayerVersionPermission$)
    .build() {
}

class RemovePermissionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "RemovePermission", {})
    .n("LambdaClient", "RemovePermissionCommand")
    .sc(schemas_0.RemovePermission$)
    .build() {
}

class SendDurableExecutionCallbackFailureCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "SendDurableExecutionCallbackFailure", {})
    .n("LambdaClient", "SendDurableExecutionCallbackFailureCommand")
    .sc(schemas_0.SendDurableExecutionCallbackFailure$)
    .build() {
}

class SendDurableExecutionCallbackHeartbeatCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "SendDurableExecutionCallbackHeartbeat", {})
    .n("LambdaClient", "SendDurableExecutionCallbackHeartbeatCommand")
    .sc(schemas_0.SendDurableExecutionCallbackHeartbeat$)
    .build() {
}

class SendDurableExecutionCallbackSuccessCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "SendDurableExecutionCallbackSuccess", {})
    .n("LambdaClient", "SendDurableExecutionCallbackSuccessCommand")
    .sc(schemas_0.SendDurableExecutionCallbackSuccess$)
    .build() {
}

class StopDurableExecutionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "StopDurableExecution", {})
    .n("LambdaClient", "StopDurableExecutionCommand")
    .sc(schemas_0.StopDurableExecution$)
    .build() {
}

class TagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "TagResource", {})
    .n("LambdaClient", "TagResourceCommand")
    .sc(schemas_0.TagResource$)
    .build() {
}

class UntagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UntagResource", {})
    .n("LambdaClient", "UntagResourceCommand")
    .sc(schemas_0.UntagResource$)
    .build() {
}

class UpdateAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateAlias", {})
    .n("LambdaClient", "UpdateAliasCommand")
    .sc(schemas_0.UpdateAlias$)
    .build() {
}

class UpdateCapacityProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateCapacityProvider", {})
    .n("LambdaClient", "UpdateCapacityProviderCommand")
    .sc(schemas_0.UpdateCapacityProvider$)
    .build() {
}

class UpdateCodeSigningConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateCodeSigningConfig", {})
    .n("LambdaClient", "UpdateCodeSigningConfigCommand")
    .sc(schemas_0.UpdateCodeSigningConfig$)
    .build() {
}

class UpdateEventSourceMappingCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateEventSourceMapping", {})
    .n("LambdaClient", "UpdateEventSourceMappingCommand")
    .sc(schemas_0.UpdateEventSourceMapping$)
    .build() {
}

class UpdateFunctionCodeCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateFunctionCode", {})
    .n("LambdaClient", "UpdateFunctionCodeCommand")
    .sc(schemas_0.UpdateFunctionCode$)
    .build() {
}

class UpdateFunctionConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateFunctionConfiguration", {})
    .n("LambdaClient", "UpdateFunctionConfigurationCommand")
    .sc(schemas_0.UpdateFunctionConfiguration$)
    .build() {
}

class UpdateFunctionEventInvokeConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateFunctionEventInvokeConfig", {})
    .n("LambdaClient", "UpdateFunctionEventInvokeConfigCommand")
    .sc(schemas_0.UpdateFunctionEventInvokeConfig$)
    .build() {
}

class UpdateFunctionUrlConfigCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSGirApiService", "UpdateFunctionUrlConfig", {})
    .n("LambdaClient", "UpdateFunctionUrlConfigCommand")
    .sc(schemas_0.UpdateFunctionUrlConfig$)
    .build() {
}

const paginateGetDurableExecutionHistory = core.createPaginator(LambdaClient, GetDurableExecutionHistoryCommand, "Marker", "NextMarker", "MaxItems");

const paginateGetDurableExecutionState = core.createPaginator(LambdaClient, GetDurableExecutionStateCommand, "Marker", "NextMarker", "MaxItems");

const paginateListAliases = core.createPaginator(LambdaClient, ListAliasesCommand, "Marker", "NextMarker", "MaxItems");

const paginateListCapacityProviders = core.createPaginator(LambdaClient, ListCapacityProvidersCommand, "Marker", "NextMarker", "MaxItems");

const paginateListCodeSigningConfigs = core.createPaginator(LambdaClient, ListCodeSigningConfigsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListDurableExecutionsByFunction = core.createPaginator(LambdaClient, ListDurableExecutionsByFunctionCommand, "Marker", "NextMarker", "MaxItems");

const paginateListEventSourceMappings = core.createPaginator(LambdaClient, ListEventSourceMappingsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListFunctionEventInvokeConfigs = core.createPaginator(LambdaClient, ListFunctionEventInvokeConfigsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListFunctionsByCodeSigningConfig = core.createPaginator(LambdaClient, ListFunctionsByCodeSigningConfigCommand, "Marker", "NextMarker", "MaxItems");

const paginateListFunctions = core.createPaginator(LambdaClient, ListFunctionsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListFunctionUrlConfigs = core.createPaginator(LambdaClient, ListFunctionUrlConfigsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListFunctionVersionsByCapacityProvider = core.createPaginator(LambdaClient, ListFunctionVersionsByCapacityProviderCommand, "Marker", "NextMarker", "MaxItems");

const paginateListLayers = core.createPaginator(LambdaClient, ListLayersCommand, "Marker", "NextMarker", "MaxItems");

const paginateListLayerVersions = core.createPaginator(LambdaClient, ListLayerVersionsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListProvisionedConcurrencyConfigs = core.createPaginator(LambdaClient, ListProvisionedConcurrencyConfigsCommand, "Marker", "NextMarker", "MaxItems");

const paginateListVersionsByFunction = core.createPaginator(LambdaClient, ListVersionsByFunctionCommand, "Marker", "NextMarker", "MaxItems");

const checkState$5 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionConfigurationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Active") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Failed") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Pending") {
                return { state: utilWaiter.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForFunctionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 300 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$5);
};
const waitUntilFunctionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 300 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$5);
    return utilWaiter.checkExceptions(result);
};

const checkState$4 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Configuration.State;
            };
            if (returnComparator() === "Active") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.State;
            };
            if (returnComparator() === "Failed") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.State;
            };
            if (returnComparator() === "Pending") {
                return { state: utilWaiter.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForFunctionActiveV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 300 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$4);
};
const waitUntilFunctionActiveV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 300 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$4);
    return utilWaiter.checkExceptions(result);
};

const checkState$3 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 20 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
};
const waitUntilFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 20 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
    return utilWaiter.checkExceptions(result);
};

const checkState$2 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionConfigurationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "Successful") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "Failed") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "InProgress") {
                return { state: utilWaiter.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForFunctionUpdated = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 300 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
};
const waitUntilFunctionUpdated = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 300 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
    return utilWaiter.checkExceptions(result);
};

const checkState$1 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "Successful") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "Failed") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "InProgress") {
                return { state: utilWaiter.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForFunctionUpdatedV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 300 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
};
const waitUntilFunctionUpdatedV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 300 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
    return utilWaiter.checkExceptions(result);
};

const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionConfigurationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Active") {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Failed") {
                return { state: utilWaiter.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Pending") {
                return { state: utilWaiter.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForPublishedVersionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 1560 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilPublishedVersionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 1560 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return utilWaiter.checkExceptions(result);
};

const commands = {
    AddLayerVersionPermissionCommand,
    AddPermissionCommand,
    CheckpointDurableExecutionCommand,
    CreateAliasCommand,
    CreateCapacityProviderCommand,
    CreateCodeSigningConfigCommand,
    CreateEventSourceMappingCommand,
    CreateFunctionCommand,
    CreateFunctionUrlConfigCommand,
    DeleteAliasCommand,
    DeleteCapacityProviderCommand,
    DeleteCodeSigningConfigCommand,
    DeleteEventSourceMappingCommand,
    DeleteFunctionCommand,
    DeleteFunctionCodeSigningConfigCommand,
    DeleteFunctionConcurrencyCommand,
    DeleteFunctionEventInvokeConfigCommand,
    DeleteFunctionUrlConfigCommand,
    DeleteLayerVersionCommand,
    DeleteProvisionedConcurrencyConfigCommand,
    GetAccountSettingsCommand,
    GetAliasCommand,
    GetCapacityProviderCommand,
    GetCodeSigningConfigCommand,
    GetDurableExecutionCommand,
    GetDurableExecutionHistoryCommand,
    GetDurableExecutionStateCommand,
    GetEventSourceMappingCommand,
    GetFunctionCommand,
    GetFunctionCodeSigningConfigCommand,
    GetFunctionConcurrencyCommand,
    GetFunctionConfigurationCommand,
    GetFunctionEventInvokeConfigCommand,
    GetFunctionRecursionConfigCommand,
    GetFunctionScalingConfigCommand,
    GetFunctionUrlConfigCommand,
    GetLayerVersionCommand,
    GetLayerVersionByArnCommand,
    GetLayerVersionPolicyCommand,
    GetPolicyCommand,
    GetProvisionedConcurrencyConfigCommand,
    GetRuntimeManagementConfigCommand,
    InvokeCommand,
    InvokeAsyncCommand,
    InvokeWithResponseStreamCommand,
    ListAliasesCommand,
    ListCapacityProvidersCommand,
    ListCodeSigningConfigsCommand,
    ListDurableExecutionsByFunctionCommand,
    ListEventSourceMappingsCommand,
    ListFunctionEventInvokeConfigsCommand,
    ListFunctionsCommand,
    ListFunctionsByCodeSigningConfigCommand,
    ListFunctionUrlConfigsCommand,
    ListFunctionVersionsByCapacityProviderCommand,
    ListLayersCommand,
    ListLayerVersionsCommand,
    ListProvisionedConcurrencyConfigsCommand,
    ListTagsCommand,
    ListVersionsByFunctionCommand,
    PublishLayerVersionCommand,
    PublishVersionCommand,
    PutFunctionCodeSigningConfigCommand,
    PutFunctionConcurrencyCommand,
    PutFunctionEventInvokeConfigCommand,
    PutFunctionRecursionConfigCommand,
    PutFunctionScalingConfigCommand,
    PutProvisionedConcurrencyConfigCommand,
    PutRuntimeManagementConfigCommand,
    RemoveLayerVersionPermissionCommand,
    RemovePermissionCommand,
    SendDurableExecutionCallbackFailureCommand,
    SendDurableExecutionCallbackHeartbeatCommand,
    SendDurableExecutionCallbackSuccessCommand,
    StopDurableExecutionCommand,
    TagResourceCommand,
    UntagResourceCommand,
    UpdateAliasCommand,
    UpdateCapacityProviderCommand,
    UpdateCodeSigningConfigCommand,
    UpdateEventSourceMappingCommand,
    UpdateFunctionCodeCommand,
    UpdateFunctionConfigurationCommand,
    UpdateFunctionEventInvokeConfigCommand,
    UpdateFunctionUrlConfigCommand,
};
const paginators = {
    paginateGetDurableExecutionHistory,
    paginateGetDurableExecutionState,
    paginateListAliases,
    paginateListCapacityProviders,
    paginateListCodeSigningConfigs,
    paginateListDurableExecutionsByFunction,
    paginateListEventSourceMappings,
    paginateListFunctionEventInvokeConfigs,
    paginateListFunctions,
    paginateListFunctionsByCodeSigningConfig,
    paginateListFunctionUrlConfigs,
    paginateListFunctionVersionsByCapacityProvider,
    paginateListLayers,
    paginateListLayerVersions,
    paginateListProvisionedConcurrencyConfigs,
    paginateListVersionsByFunction,
};
const waiters = {
    waitUntilFunctionActiveV2,
    waitUntilFunctionExists,
    waitUntilFunctionUpdatedV2,
    waitUntilFunctionActive,
    waitUntilFunctionUpdated,
    waitUntilPublishedVersionActive,
};
class Lambda extends LambdaClient {
}
smithyClient.createAggregatedClient(commands, Lambda, { paginators, waiters });

const ThrottleReason = {
    CallerRateLimitExceeded: "CallerRateLimitExceeded",
    ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
    ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded",
    FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded",
    ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded",
    ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded",
};
const FunctionUrlAuthType = {
    AWS_IAM: "AWS_IAM",
    NONE: "NONE",
};
const KafkaSchemaRegistryAuthType = {
    BASIC_AUTH: "BASIC_AUTH",
    CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
    SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
};
const SchemaRegistryEventRecordFormat = {
    JSON: "JSON",
    SOURCE: "SOURCE",
};
const KafkaSchemaValidationAttribute = {
    KEY: "KEY",
    VALUE: "VALUE",
};
const ApplicationLogLevel = {
    Debug: "DEBUG",
    Error: "ERROR",
    Fatal: "FATAL",
    Info: "INFO",
    Trace: "TRACE",
    Warn: "WARN",
};
const Architecture = {
    arm64: "arm64",
    x86_64: "x86_64",
};
const CapacityProviderScalingMode = {
    Auto: "Auto",
    Manual: "Manual",
};
const CapacityProviderPredefinedMetricType = {
    LambdaCapacityProviderAverageCPUUtilization: "LambdaCapacityProviderAverageCPUUtilization",
};
const CapacityProviderState = {
    Active: "Active",
    Deleting: "Deleting",
    Failed: "Failed",
    Pending: "Pending",
};
const State = {
    Active: "Active",
    ActiveNonInvocable: "ActiveNonInvocable",
    Deactivated: "Deactivated",
    Deactivating: "Deactivating",
    Deleting: "Deleting",
    Failed: "Failed",
    Inactive: "Inactive",
    Pending: "Pending",
};
const OperationAction = {
    CANCEL: "CANCEL",
    FAIL: "FAIL",
    RETRY: "RETRY",
    START: "START",
    SUCCEED: "SUCCEED",
};
const OperationType = {
    CALLBACK: "CALLBACK",
    CHAINED_INVOKE: "CHAINED_INVOKE",
    CONTEXT: "CONTEXT",
    EXECUTION: "EXECUTION",
    STEP: "STEP",
    WAIT: "WAIT",
};
const OperationStatus = {
    CANCELLED: "CANCELLED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    READY: "READY",
    STARTED: "STARTED",
    STOPPED: "STOPPED",
    SUCCEEDED: "SUCCEEDED",
    TIMED_OUT: "TIMED_OUT",
};
const CodeSigningPolicy = {
    Enforce: "Enforce",
    Warn: "Warn",
};
const FullDocument = {
    Default: "Default",
    UpdateLookup: "UpdateLookup",
};
const FunctionResponseType = {
    ReportBatchItemFailures: "ReportBatchItemFailures",
};
const EventSourceMappingSystemLogLevel = {
    Debug: "DEBUG",
    Info: "INFO",
    Warn: "WARN",
};
const EventSourceMappingMetric = {
    ErrorCount: "ErrorCount",
    EventCount: "EventCount",
    KafkaMetrics: "KafkaMetrics",
};
const EndPointType = {
    KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
};
const SourceAccessType = {
    BASIC_AUTH: "BASIC_AUTH",
    CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
    SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH",
    SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH",
    SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
    VIRTUAL_HOST: "VIRTUAL_HOST",
    VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP",
    VPC_SUBNET: "VPC_SUBNET",
};
const EventSourcePosition = {
    AT_TIMESTAMP: "AT_TIMESTAMP",
    LATEST: "LATEST",
    TRIM_HORIZON: "TRIM_HORIZON",
};
const LogFormat = {
    Json: "JSON",
    Text: "Text",
};
const SystemLogLevel = {
    Debug: "DEBUG",
    Info: "INFO",
    Warn: "WARN",
};
const PackageType = {
    Image: "Image",
    Zip: "Zip",
};
const FunctionVersionLatestPublished = {
    LATEST_PUBLISHED: "LATEST_PUBLISHED",
};
const Runtime = {
    dotnet10: "dotnet10",
    dotnet6: "dotnet6",
    dotnet8: "dotnet8",
    dotnetcore10: "dotnetcore1.0",
    dotnetcore20: "dotnetcore2.0",
    dotnetcore21: "dotnetcore2.1",
    dotnetcore31: "dotnetcore3.1",
    go1x: "go1.x",
    java11: "java11",
    java17: "java17",
    java21: "java21",
    java25: "java25",
    java8: "java8",
    java8al2: "java8.al2",
    nodejs: "nodejs",
    nodejs10x: "nodejs10.x",
    nodejs12x: "nodejs12.x",
    nodejs14x: "nodejs14.x",
    nodejs16x: "nodejs16.x",
    nodejs18x: "nodejs18.x",
    nodejs20x: "nodejs20.x",
    nodejs22x: "nodejs22.x",
    nodejs24x: "nodejs24.x",
    nodejs43: "nodejs4.3",
    nodejs43edge: "nodejs4.3-edge",
    nodejs610: "nodejs6.10",
    nodejs810: "nodejs8.10",
    provided: "provided",
    providedal2: "provided.al2",
    providedal2023: "provided.al2023",
    python27: "python2.7",
    python310: "python3.10",
    python311: "python3.11",
    python312: "python3.12",
    python313: "python3.13",
    python314: "python3.14",
    python36: "python3.6",
    python37: "python3.7",
    python38: "python3.8",
    python39: "python3.9",
    ruby25: "ruby2.5",
    ruby27: "ruby2.7",
    ruby32: "ruby3.2",
    ruby33: "ruby3.3",
    ruby34: "ruby3.4",
};
const SnapStartApplyOn = {
    None: "None",
    PublishedVersions: "PublishedVersions",
};
const TenantIsolationMode = {
    PER_TENANT: "PER_TENANT",
};
const TracingMode = {
    Active: "Active",
    PassThrough: "PassThrough",
};
const LastUpdateStatus = {
    Failed: "Failed",
    InProgress: "InProgress",
    Successful: "Successful",
};
const LastUpdateStatusReasonCode = {
    CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded",
    DisabledKMSKey: "DisabledKMSKey",
    DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
    EC2RequestLimitExceeded: "EC2RequestLimitExceeded",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError",
    FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted",
    FunctionErrorInitTimeout: "FunctionError.InitTimeout",
    FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint",
    FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory",
    FunctionErrorPermissionDenied: "FunctionError.PermissionDenied",
    FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError",
    FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientCapacity: "InsufficientCapacity",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
    VcpuLimitExceeded: "VcpuLimitExceeded",
};
const SnapStartOptimizationStatus = {
    Off: "Off",
    On: "On",
};
const StateReasonCode = {
    CapacityProviderScalingLimitExceeded: "CapacityProviderScalingLimitExceeded",
    Creating: "Creating",
    DisabledKMSKey: "DisabledKMSKey",
    DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
    DrainingDurableExecutions: "DrainingDurableExecutions",
    EC2RequestLimitExceeded: "EC2RequestLimitExceeded",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    FunctionErrorExtensionInitError: "FunctionError.ExtensionInitError",
    FunctionErrorInitResourceExhausted: "FunctionError.InitResourceExhausted",
    FunctionErrorInitTimeout: "FunctionError.InitTimeout",
    FunctionErrorInvalidEntryPoint: "FunctionError.InvalidEntryPoint",
    FunctionErrorInvalidWorkingDirectory: "FunctionError.InvalidWorkingDirectory",
    FunctionErrorPermissionDenied: "FunctionError.PermissionDenied",
    FunctionErrorRuntimeInitError: "FunctionError.RuntimeInitError",
    FunctionErrorTooManyExtensions: "FunctionError.TooManyExtensions",
    Idle: "Idle",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientCapacity: "InsufficientCapacity",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    Restoring: "Restoring",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
    VcpuLimitExceeded: "VcpuLimitExceeded",
};
const InvokeMode = {
    BUFFERED: "BUFFERED",
    RESPONSE_STREAM: "RESPONSE_STREAM",
};
const RecursiveLoop = {
    Allow: "Allow",
    Terminate: "Terminate",
};
const UpdateRuntimeOn = {
    Auto: "Auto",
    FunctionUpdate: "FunctionUpdate",
    Manual: "Manual",
};
const InvocationType = {
    DryRun: "DryRun",
    Event: "Event",
    RequestResponse: "RequestResponse",
};
const LogType = {
    None: "None",
    Tail: "Tail",
};
const ResponseStreamingInvocationType = {
    DryRun: "DryRun",
    RequestResponse: "RequestResponse",
};
const FunctionVersion = {
    ALL: "ALL",
};
const ProvisionedConcurrencyStatusEnum = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    READY: "READY",
};
const ExecutionStatus = {
    FAILED: "FAILED",
    RUNNING: "RUNNING",
    STOPPED: "STOPPED",
    SUCCEEDED: "SUCCEEDED",
    TIMED_OUT: "TIMED_OUT",
};
const EventType = {
    CallbackFailed: "CallbackFailed",
    CallbackStarted: "CallbackStarted",
    CallbackSucceeded: "CallbackSucceeded",
    CallbackTimedOut: "CallbackTimedOut",
    ChainedInvokeFailed: "ChainedInvokeFailed",
    ChainedInvokeStarted: "ChainedInvokeStarted",
    ChainedInvokeStopped: "ChainedInvokeStopped",
    ChainedInvokeSucceeded: "ChainedInvokeSucceeded",
    ChainedInvokeTimedOut: "ChainedInvokeTimedOut",
    ContextFailed: "ContextFailed",
    ContextStarted: "ContextStarted",
    ContextSucceeded: "ContextSucceeded",
    ExecutionFailed: "ExecutionFailed",
    ExecutionStarted: "ExecutionStarted",
    ExecutionStopped: "ExecutionStopped",
    ExecutionSucceeded: "ExecutionSucceeded",
    ExecutionTimedOut: "ExecutionTimedOut",
    InvocationCompleted: "InvocationCompleted",
    StepFailed: "StepFailed",
    StepStarted: "StepStarted",
    StepSucceeded: "StepSucceeded",
    WaitCancelled: "WaitCancelled",
    WaitStarted: "WaitStarted",
    WaitSucceeded: "WaitSucceeded",
};

exports.$Command = smithyClient.Command;
exports.__Client = smithyClient.Client;
exports.LambdaServiceException = LambdaServiceException.LambdaServiceException;
exports.AddLayerVersionPermissionCommand = AddLayerVersionPermissionCommand;
exports.AddPermissionCommand = AddPermissionCommand;
exports.ApplicationLogLevel = ApplicationLogLevel;
exports.Architecture = Architecture;
exports.CapacityProviderPredefinedMetricType = CapacityProviderPredefinedMetricType;
exports.CapacityProviderScalingMode = CapacityProviderScalingMode;
exports.CapacityProviderState = CapacityProviderState;
exports.CheckpointDurableExecutionCommand = CheckpointDurableExecutionCommand;
exports.CodeSigningPolicy = CodeSigningPolicy;
exports.CreateAliasCommand = CreateAliasCommand;
exports.CreateCapacityProviderCommand = CreateCapacityProviderCommand;
exports.CreateCodeSigningConfigCommand = CreateCodeSigningConfigCommand;
exports.CreateEventSourceMappingCommand = CreateEventSourceMappingCommand;
exports.CreateFunctionCommand = CreateFunctionCommand;
exports.CreateFunctionUrlConfigCommand = CreateFunctionUrlConfigCommand;
exports.DeleteAliasCommand = DeleteAliasCommand;
exports.DeleteCapacityProviderCommand = DeleteCapacityProviderCommand;
exports.DeleteCodeSigningConfigCommand = DeleteCodeSigningConfigCommand;
exports.DeleteEventSourceMappingCommand = DeleteEventSourceMappingCommand;
exports.DeleteFunctionCodeSigningConfigCommand = DeleteFunctionCodeSigningConfigCommand;
exports.DeleteFunctionCommand = DeleteFunctionCommand;
exports.DeleteFunctionConcurrencyCommand = DeleteFunctionConcurrencyCommand;
exports.DeleteFunctionEventInvokeConfigCommand = DeleteFunctionEventInvokeConfigCommand;
exports.DeleteFunctionUrlConfigCommand = DeleteFunctionUrlConfigCommand;
exports.DeleteLayerVersionCommand = DeleteLayerVersionCommand;
exports.DeleteProvisionedConcurrencyConfigCommand = DeleteProvisionedConcurrencyConfigCommand;
exports.EndPointType = EndPointType;
exports.EventSourceMappingMetric = EventSourceMappingMetric;
exports.EventSourceMappingSystemLogLevel = EventSourceMappingSystemLogLevel;
exports.EventSourcePosition = EventSourcePosition;
exports.EventType = EventType;
exports.ExecutionStatus = ExecutionStatus;
exports.FullDocument = FullDocument;
exports.FunctionResponseType = FunctionResponseType;
exports.FunctionUrlAuthType = FunctionUrlAuthType;
exports.FunctionVersion = FunctionVersion;
exports.FunctionVersionLatestPublished = FunctionVersionLatestPublished;
exports.GetAccountSettingsCommand = GetAccountSettingsCommand;
exports.GetAliasCommand = GetAliasCommand;
exports.GetCapacityProviderCommand = GetCapacityProviderCommand;
exports.GetCodeSigningConfigCommand = GetCodeSigningConfigCommand;
exports.GetDurableExecutionCommand = GetDurableExecutionCommand;
exports.GetDurableExecutionHistoryCommand = GetDurableExecutionHistoryCommand;
exports.GetDurableExecutionStateCommand = GetDurableExecutionStateCommand;
exports.GetEventSourceMappingCommand = GetEventSourceMappingCommand;
exports.GetFunctionCodeSigningConfigCommand = GetFunctionCodeSigningConfigCommand;
exports.GetFunctionCommand = GetFunctionCommand;
exports.GetFunctionConcurrencyCommand = GetFunctionConcurrencyCommand;
exports.GetFunctionConfigurationCommand = GetFunctionConfigurationCommand;
exports.GetFunctionEventInvokeConfigCommand = GetFunctionEventInvokeConfigCommand;
exports.GetFunctionRecursionConfigCommand = GetFunctionRecursionConfigCommand;
exports.GetFunctionScalingConfigCommand = GetFunctionScalingConfigCommand;
exports.GetFunctionUrlConfigCommand = GetFunctionUrlConfigCommand;
exports.GetLayerVersionByArnCommand = GetLayerVersionByArnCommand;
exports.GetLayerVersionCommand = GetLayerVersionCommand;
exports.GetLayerVersionPolicyCommand = GetLayerVersionPolicyCommand;
exports.GetPolicyCommand = GetPolicyCommand;
exports.GetProvisionedConcurrencyConfigCommand = GetProvisionedConcurrencyConfigCommand;
exports.GetRuntimeManagementConfigCommand = GetRuntimeManagementConfigCommand;
exports.InvocationType = InvocationType;
exports.InvokeAsyncCommand = InvokeAsyncCommand;
exports.InvokeCommand = InvokeCommand;
exports.InvokeMode = InvokeMode;
exports.InvokeWithResponseStreamCommand = InvokeWithResponseStreamCommand;
exports.KafkaSchemaRegistryAuthType = KafkaSchemaRegistryAuthType;
exports.KafkaSchemaValidationAttribute = KafkaSchemaValidationAttribute;
exports.Lambda = Lambda;
exports.LambdaClient = LambdaClient;
exports.LastUpdateStatus = LastUpdateStatus;
exports.LastUpdateStatusReasonCode = LastUpdateStatusReasonCode;
exports.ListAliasesCommand = ListAliasesCommand;
exports.ListCapacityProvidersCommand = ListCapacityProvidersCommand;
exports.ListCodeSigningConfigsCommand = ListCodeSigningConfigsCommand;
exports.ListDurableExecutionsByFunctionCommand = ListDurableExecutionsByFunctionCommand;
exports.ListEventSourceMappingsCommand = ListEventSourceMappingsCommand;
exports.ListFunctionEventInvokeConfigsCommand = ListFunctionEventInvokeConfigsCommand;
exports.ListFunctionUrlConfigsCommand = ListFunctionUrlConfigsCommand;
exports.ListFunctionVersionsByCapacityProviderCommand = ListFunctionVersionsByCapacityProviderCommand;
exports.ListFunctionsByCodeSigningConfigCommand = ListFunctionsByCodeSigningConfigCommand;
exports.ListFunctionsCommand = ListFunctionsCommand;
exports.ListLayerVersionsCommand = ListLayerVersionsCommand;
exports.ListLayersCommand = ListLayersCommand;
exports.ListProvisionedConcurrencyConfigsCommand = ListProvisionedConcurrencyConfigsCommand;
exports.ListTagsCommand = ListTagsCommand;
exports.ListVersionsByFunctionCommand = ListVersionsByFunctionCommand;
exports.LogFormat = LogFormat;
exports.LogType = LogType;
exports.OperationAction = OperationAction;
exports.OperationStatus = OperationStatus;
exports.OperationType = OperationType;
exports.PackageType = PackageType;
exports.ProvisionedConcurrencyStatusEnum = ProvisionedConcurrencyStatusEnum;
exports.PublishLayerVersionCommand = PublishLayerVersionCommand;
exports.PublishVersionCommand = PublishVersionCommand;
exports.PutFunctionCodeSigningConfigCommand = PutFunctionCodeSigningConfigCommand;
exports.PutFunctionConcurrencyCommand = PutFunctionConcurrencyCommand;
exports.PutFunctionEventInvokeConfigCommand = PutFunctionEventInvokeConfigCommand;
exports.PutFunctionRecursionConfigCommand = PutFunctionRecursionConfigCommand;
exports.PutFunctionScalingConfigCommand = PutFunctionScalingConfigCommand;
exports.PutProvisionedConcurrencyConfigCommand = PutProvisionedConcurrencyConfigCommand;
exports.PutRuntimeManagementConfigCommand = PutRuntimeManagementConfigCommand;
exports.RecursiveLoop = RecursiveLoop;
exports.RemoveLayerVersionPermissionCommand = RemoveLayerVersionPermissionCommand;
exports.RemovePermissionCommand = RemovePermissionCommand;
exports.ResponseStreamingInvocationType = ResponseStreamingInvocationType;
exports.Runtime = Runtime;
exports.SchemaRegistryEventRecordFormat = SchemaRegistryEventRecordFormat;
exports.SendDurableExecutionCallbackFailureCommand = SendDurableExecutionCallbackFailureCommand;
exports.SendDurableExecutionCallbackHeartbeatCommand = SendDurableExecutionCallbackHeartbeatCommand;
exports.SendDurableExecutionCallbackSuccessCommand = SendDurableExecutionCallbackSuccessCommand;
exports.SnapStartApplyOn = SnapStartApplyOn;
exports.SnapStartOptimizationStatus = SnapStartOptimizationStatus;
exports.SourceAccessType = SourceAccessType;
exports.State = State;
exports.StateReasonCode = StateReasonCode;
exports.StopDurableExecutionCommand = StopDurableExecutionCommand;
exports.SystemLogLevel = SystemLogLevel;
exports.TagResourceCommand = TagResourceCommand;
exports.TenantIsolationMode = TenantIsolationMode;
exports.ThrottleReason = ThrottleReason;
exports.TracingMode = TracingMode;
exports.UntagResourceCommand = UntagResourceCommand;
exports.UpdateAliasCommand = UpdateAliasCommand;
exports.UpdateCapacityProviderCommand = UpdateCapacityProviderCommand;
exports.UpdateCodeSigningConfigCommand = UpdateCodeSigningConfigCommand;
exports.UpdateEventSourceMappingCommand = UpdateEventSourceMappingCommand;
exports.UpdateFunctionCodeCommand = UpdateFunctionCodeCommand;
exports.UpdateFunctionConfigurationCommand = UpdateFunctionConfigurationCommand;
exports.UpdateFunctionEventInvokeConfigCommand = UpdateFunctionEventInvokeConfigCommand;
exports.UpdateFunctionUrlConfigCommand = UpdateFunctionUrlConfigCommand;
exports.UpdateRuntimeOn = UpdateRuntimeOn;
exports.paginateGetDurableExecutionHistory = paginateGetDurableExecutionHistory;
exports.paginateGetDurableExecutionState = paginateGetDurableExecutionState;
exports.paginateListAliases = paginateListAliases;
exports.paginateListCapacityProviders = paginateListCapacityProviders;
exports.paginateListCodeSigningConfigs = paginateListCodeSigningConfigs;
exports.paginateListDurableExecutionsByFunction = paginateListDurableExecutionsByFunction;
exports.paginateListEventSourceMappings = paginateListEventSourceMappings;
exports.paginateListFunctionEventInvokeConfigs = paginateListFunctionEventInvokeConfigs;
exports.paginateListFunctionUrlConfigs = paginateListFunctionUrlConfigs;
exports.paginateListFunctionVersionsByCapacityProvider = paginateListFunctionVersionsByCapacityProvider;
exports.paginateListFunctions = paginateListFunctions;
exports.paginateListFunctionsByCodeSigningConfig = paginateListFunctionsByCodeSigningConfig;
exports.paginateListLayerVersions = paginateListLayerVersions;
exports.paginateListLayers = paginateListLayers;
exports.paginateListProvisionedConcurrencyConfigs = paginateListProvisionedConcurrencyConfigs;
exports.paginateListVersionsByFunction = paginateListVersionsByFunction;
exports.waitForFunctionActive = waitForFunctionActive;
exports.waitForFunctionActiveV2 = waitForFunctionActiveV2;
exports.waitForFunctionExists = waitForFunctionExists;
exports.waitForFunctionUpdated = waitForFunctionUpdated;
exports.waitForFunctionUpdatedV2 = waitForFunctionUpdatedV2;
exports.waitForPublishedVersionActive = waitForPublishedVersionActive;
exports.waitUntilFunctionActive = waitUntilFunctionActive;
exports.waitUntilFunctionActiveV2 = waitUntilFunctionActiveV2;
exports.waitUntilFunctionExists = waitUntilFunctionExists;
exports.waitUntilFunctionUpdated = waitUntilFunctionUpdated;
exports.waitUntilFunctionUpdatedV2 = waitUntilFunctionUpdatedV2;
exports.waitUntilPublishedVersionActive = waitUntilPublishedVersionActive;
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
