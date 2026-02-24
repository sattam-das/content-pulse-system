"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const core_1 = require("@aws-sdk/core");
const protocols_1 = require("@aws-sdk/core/protocols");
const dynamodb_codec_1 = require("@aws-sdk/dynamodb-codec");
const smithy_client_1 = require("@smithy/smithy-client");
const url_parser_1 = require("@smithy/url-parser");
const util_base64_1 = require("@smithy/util-base64");
const util_utf8_1 = require("@smithy/util-utf8");
const httpAuthSchemeProvider_1 = require("./auth/httpAuthSchemeProvider");
const endpointResolver_1 = require("./endpoint/endpointResolver");
const schemas_0_1 = require("./schemas/schemas_0");
const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2012-08-10",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultDynamoDBHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new core_1.AwsSdkSigV4Signer(),
            },
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        protocol: config?.protocol ?? protocols_1.AwsJson1_0Protocol,
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.dynamodb",
            errorTypeRegistries: schemas_0_1.errorTypeRegistries,
            xmlNamespace: "http://dynamodb.amazonaws.com/doc/2012-08-10/",
            version: "2012-08-10",
            serviceTarget: "DynamoDB_20120810",
            jsonCodec: new dynamodb_codec_1.DynamoDBJsonCodec(),
        },
        serviceId: config?.serviceId ?? "DynamoDB",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
