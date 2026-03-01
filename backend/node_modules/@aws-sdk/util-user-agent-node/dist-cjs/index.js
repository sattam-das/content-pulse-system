'use strict';

var node_os = require('node:os');
var node_process = require('node:process');
var promises = require('node:fs/promises');
var node_path = require('node:path');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (node_process.versions[runtime]) {
            return [`md/${runtime}`, node_process.versions[runtime]];
        }
    }
    return ["md/nodejs", node_process.versions.node];
};

const getTypeScriptPackageJsonPath = (dirname = "") => {
    let nodeModulesPath;
    const normalizedPath = node_path.normalize(dirname);
    const parts = normalizedPath.split(node_path.sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    if (nodeModulesIndex !== -1) {
        nodeModulesPath = parts.slice(0, nodeModulesIndex).join(node_path.sep);
    }
    else {
        nodeModulesPath = dirname;
    }
    return node_path.join(nodeModulesPath, "node_modules", "typescript", "package.json");
};

let tscVersion;
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    try {
        const packageJson = await promises.readFile(getTypeScriptPackageJsonPath(__dirname), "utf-8");
        const { version } = JSON.parse(packageJson);
        if (typeof version !== "string") {
            tscVersion = null;
            return undefined;
        }
        tscVersion = version;
        return ["md/tsc", tscVersion];
    }
    catch {
        tscVersion = null;
    }
};

const crtAvailability = {
    isCrtAvailable: false,
};

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
    const runtimeUserAgentPair = getRuntimeUserAgentPair();
    return async (config) => {
        const sections = [
            ["aws-sdk-js", clientVersion],
            ["ua", "2.1"],
            [`os/${node_os.platform()}`, node_os.release()],
            ["lang/js"],
            runtimeUserAgentPair,
        ];
        const typescriptUserAgentPair = await getTypeScriptUserAgentPair();
        if (typescriptUserAgentPair) {
            sections.push(typescriptUserAgentPair);
        }
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
            sections.push(crtAvailable);
        }
        if (serviceId) {
            sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (node_process.env.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${node_process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
    };
};
const defaultUserAgent = createDefaultUserAgentProvider;

const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk_ua_app_id";
const UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
const NODE_APP_ID_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
    default: middlewareUserAgent.DEFAULT_UA_APP_ID,
};

exports.NODE_APP_ID_CONFIG_OPTIONS = NODE_APP_ID_CONFIG_OPTIONS;
exports.UA_APP_ID_ENV_NAME = UA_APP_ID_ENV_NAME;
exports.UA_APP_ID_INI_NAME = UA_APP_ID_INI_NAME;
exports.createDefaultUserAgentProvider = createDefaultUserAgentProvider;
exports.crtAvailability = crtAvailability;
exports.defaultUserAgent = defaultUserAgent;
