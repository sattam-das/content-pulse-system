"use strict";
// This is a barrel export file, of all known symbols that are imported by users from the `aws-cdk` package.
// Importing these symbols was never officially supported, but here we are.
// In order to preserver backwards-compatibly for these users, we re-export and preserve them as explicit subpath exports.
// See https://github.com/aws/aws-cdk/pull/33021 for more information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCaseFirstCharacter = exports.deepMerge = exports.contentHash = exports.leftPad = exports.partition = exports.numberFromBool = exports.isEmpty = exports.isArray = exports.ifDefined = exports.flatten = exports.deepClone = exports.describe = exports.command = exports.aliases = exports.availableInitTemplates = exports.RequireApproval = exports.versionNumber = exports.formatAsBanner = exports.rootDir = exports.exec = exports.cli = exports.execProgram = exports.CloudExecutable = exports.Bootstrapper = exports.Settings = exports.PluginHost = exports.deployStack = exports.Deployments = exports.CfnEvaluationException = exports.PROJECT_CONTEXT = exports.Configuration = exports.Command = void 0;
// Legacy Code Copies
__exportStar(require("./logging"), exports);
__exportStar(require("./aws-auth"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return configuration_1.Command; } });
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return configuration_1.Configuration; } });
Object.defineProperty(exports, "PROJECT_CONTEXT", { enumerable: true, get: function () { return configuration_1.PROJECT_CONTEXT; } });
// API
var cloudformation_1 = require("../api/cloudformation");
Object.defineProperty(exports, "CfnEvaluationException", { enumerable: true, get: function () { return cloudformation_1.CfnEvaluationException; } });
var deployments_1 = require("../api/deployments");
Object.defineProperty(exports, "Deployments", { enumerable: true, get: function () { return deployments_1.Deployments; } });
var api_private_1 = require("../api-private");
Object.defineProperty(exports, "deployStack", { enumerable: true, get: function () { return api_private_1.deployStack; } });
var plugin_1 = require("../api/plugin");
Object.defineProperty(exports, "PluginHost", { enumerable: true, get: function () { return plugin_1.PluginHost; } });
var settings_1 = require("../api/settings");
Object.defineProperty(exports, "Settings", { enumerable: true, get: function () { return settings_1.Settings; } });
var bootstrap_1 = require("../api/bootstrap");
Object.defineProperty(exports, "Bootstrapper", { enumerable: true, get: function () { return bootstrap_1.Bootstrapper; } });
// CLI
var cxapp_1 = require("../cxapp");
Object.defineProperty(exports, "CloudExecutable", { enumerable: true, get: function () { return cxapp_1.CloudExecutable; } });
Object.defineProperty(exports, "execProgram", { enumerable: true, get: function () { return cxapp_1.execProgram; } });
var cli_1 = require("../cli/cli");
Object.defineProperty(exports, "cli", { enumerable: true, get: function () { return cli_1.cli; } });
Object.defineProperty(exports, "exec", { enumerable: true, get: function () { return cli_1.exec; } });
var root_dir_1 = require("../cli/root-dir");
Object.defineProperty(exports, "rootDir", { enumerable: true, get: function () { return root_dir_1.cliRootDir; } });
var console_formatters_1 = require("../cli/util/console-formatters");
Object.defineProperty(exports, "formatAsBanner", { enumerable: true, get: function () { return console_formatters_1.formatAsBanner; } });
var version_1 = require("../cli/version");
Object.defineProperty(exports, "versionNumber", { enumerable: true, get: function () { return version_1.versionNumber; } });
// Commands
var cloud_assembly_schema_1 = require("@aws-cdk/cloud-assembly-schema");
Object.defineProperty(exports, "RequireApproval", { enumerable: true, get: function () { return cloud_assembly_schema_1.RequireApproval; } });
var init_1 = require("../commands/init");
Object.defineProperty(exports, "availableInitTemplates", { enumerable: true, get: function () { return init_1.availableInitTemplates; } });
var docs_1 = require("../commands/docs");
Object.defineProperty(exports, "aliases", { enumerable: true, get: function () { return docs_1.aliases; } });
Object.defineProperty(exports, "command", { enumerable: true, get: function () { return docs_1.command; } });
Object.defineProperty(exports, "describe", { enumerable: true, get: function () { return docs_1.describe; } });
// util
var util_1 = require("../util");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return util_1.deepClone; } });
Object.defineProperty(exports, "flatten", { enumerable: true, get: function () { return util_1.flatten; } });
Object.defineProperty(exports, "ifDefined", { enumerable: true, get: function () { return util_1.ifDefined; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return util_1.isArray; } });
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return util_1.isEmpty; } });
Object.defineProperty(exports, "numberFromBool", { enumerable: true, get: function () { return util_1.numberFromBool; } });
Object.defineProperty(exports, "partition", { enumerable: true, get: function () { return util_1.partition; } });
Object.defineProperty(exports, "leftPad", { enumerable: true, get: function () { return util_1.padLeft; } });
Object.defineProperty(exports, "contentHash", { enumerable: true, get: function () { return util_1.contentHash; } });
Object.defineProperty(exports, "deepMerge", { enumerable: true, get: function () { return util_1.deepMerge; } });
Object.defineProperty(exports, "lowerCaseFirstCharacter", { enumerable: true, get: function () { return util_1.lowerCaseFirstCharacter; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEdBQTRHO0FBQzVHLDJFQUEyRTtBQUMzRSwwSEFBMEg7QUFDMUgsc0VBQXNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RSxxQkFBcUI7QUFDckIsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQixpREFBMEU7QUFBakUsd0dBQUEsT0FBTyxPQUFBO0FBQUUsOEdBQUEsYUFBYSxPQUFBO0FBQUUsZ0hBQUEsZUFBZSxPQUFBO0FBRWhELE1BQU07QUFDTix3REFBK0Q7QUFBdEQsd0hBQUEsc0JBQXNCLE9BQUE7QUFDL0Isa0RBQWlEO0FBQXhDLDBHQUFBLFdBQVcsT0FBQTtBQUNwQiw4Q0FBNkM7QUFBcEMsMEdBQUEsV0FBVyxPQUFBO0FBQ3BCLHdDQUEyQztBQUFsQyxvR0FBQSxVQUFVLE9BQUE7QUFDbkIsNENBQTJDO0FBQWxDLG9HQUFBLFFBQVEsT0FBQTtBQUNqQiw4Q0FBZ0Q7QUFBdkMseUdBQUEsWUFBWSxPQUFBO0FBRXJCLE1BQU07QUFDTixrQ0FBd0Q7QUFBL0Msd0dBQUEsZUFBZSxPQUFBO0FBQUUsb0dBQUEsV0FBVyxPQUFBO0FBQ3JDLGtDQUF1QztBQUE5QiwwRkFBQSxHQUFHLE9BQUE7QUFBRSwyRkFBQSxJQUFJLE9BQUE7QUFDbEIsNENBQXdEO0FBQS9DLG1HQUFBLFVBQVUsT0FBVztBQUM5QixxRUFBZ0U7QUFBdkQsb0hBQUEsY0FBYyxPQUFBO0FBQ3ZCLDBDQUErQztBQUF0Qyx3R0FBQSxhQUFhLE9BQUE7QUFFdEIsV0FBVztBQUNYLHdFQUFpRTtBQUF4RCx3SEFBQSxlQUFlLE9BQUE7QUFDeEIseUNBQTBEO0FBQWpELDhHQUFBLHNCQUFzQixPQUFBO0FBQy9CLHlDQUE4RDtBQUFyRCwrRkFBQSxPQUFPLE9BQUE7QUFBRSwrRkFBQSxPQUFPLE9BQUE7QUFBRSxnR0FBQSxRQUFRLE9BQUE7QUFFbkMsT0FBTztBQUNQLGdDQUEwSztBQUFqSyxpR0FBQSxTQUFTLE9BQUE7QUFBRSwrRkFBQSxPQUFPLE9BQUE7QUFBRSxpR0FBQSxTQUFTLE9BQUE7QUFBRSwrRkFBQSxPQUFPLE9BQUE7QUFBRSwrRkFBQSxPQUFPLE9BQUE7QUFBRSxzR0FBQSxjQUFjLE9BQUE7QUFBRSxpR0FBQSxTQUFTLE9BQUE7QUFBRSwrRkFBQSxPQUFPLE9BQVc7QUFBRSxtR0FBQSxXQUFXLE9BQUE7QUFBRSxpR0FBQSxTQUFTLE9BQUE7QUFBRSwrR0FBQSx1QkFBdUIsT0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYSBiYXJyZWwgZXhwb3J0IGZpbGUsIG9mIGFsbCBrbm93biBzeW1ib2xzIHRoYXQgYXJlIGltcG9ydGVkIGJ5IHVzZXJzIGZyb20gdGhlIGBhd3MtY2RrYCBwYWNrYWdlLlxuLy8gSW1wb3J0aW5nIHRoZXNlIHN5bWJvbHMgd2FzIG5ldmVyIG9mZmljaWFsbHkgc3VwcG9ydGVkLCBidXQgaGVyZSB3ZSBhcmUuXG4vLyBJbiBvcmRlciB0byBwcmVzZXJ2ZXIgYmFja3dhcmRzLWNvbXBhdGlibHkgZm9yIHRoZXNlIHVzZXJzLCB3ZSByZS1leHBvcnQgYW5kIHByZXNlcnZlIHRoZW0gYXMgZXhwbGljaXQgc3VicGF0aCBleHBvcnRzLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hd3MvYXdzLWNkay9wdWxsLzMzMDIxIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4vLyBMZWdhY3kgVHlwZSBDb3BpZXNcbmV4cG9ydCB0eXBlICogZnJvbSAnLi90eXBlcyc7XG5cbi8vIExlZ2FjeSBDb2RlIENvcGllc1xuZXhwb3J0ICogZnJvbSAnLi9sb2dnaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vYXdzLWF1dGgnO1xuZXhwb3J0IHsgQ29tbWFuZCwgQ29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05URVhUIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcblxuLy8gQVBJXG5leHBvcnQgeyBDZm5FdmFsdWF0aW9uRXhjZXB0aW9uIH0gZnJvbSAnLi4vYXBpL2Nsb3VkZm9ybWF0aW9uJztcbmV4cG9ydCB7IERlcGxveW1lbnRzIH0gZnJvbSAnLi4vYXBpL2RlcGxveW1lbnRzJztcbmV4cG9ydCB7IGRlcGxveVN0YWNrIH0gZnJvbSAnLi4vYXBpLXByaXZhdGUnO1xuZXhwb3J0IHsgUGx1Z2luSG9zdCB9IGZyb20gJy4uL2FwaS9wbHVnaW4nO1xuZXhwb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi9hcGkvc2V0dGluZ3MnO1xuZXhwb3J0IHsgQm9vdHN0cmFwcGVyIH0gZnJvbSAnLi4vYXBpL2Jvb3RzdHJhcCc7XG5cbi8vIENMSVxuZXhwb3J0IHsgQ2xvdWRFeGVjdXRhYmxlLCBleGVjUHJvZ3JhbSB9IGZyb20gJy4uL2N4YXBwJztcbmV4cG9ydCB7IGNsaSwgZXhlYyB9IGZyb20gJy4uL2NsaS9jbGknO1xuZXhwb3J0IHsgY2xpUm9vdERpciBhcyByb290RGlyIH0gZnJvbSAnLi4vY2xpL3Jvb3QtZGlyJztcbmV4cG9ydCB7IGZvcm1hdEFzQmFubmVyIH0gZnJvbSAnLi4vY2xpL3V0aWwvY29uc29sZS1mb3JtYXR0ZXJzJztcbmV4cG9ydCB7IHZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9jbGkvdmVyc2lvbic7XG5cbi8vIENvbW1hbmRzXG5leHBvcnQgeyBSZXF1aXJlQXBwcm92YWwgfSBmcm9tICdAYXdzLWNkay9jbG91ZC1hc3NlbWJseS1zY2hlbWEnO1xuZXhwb3J0IHsgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcyB9IGZyb20gJy4uL2NvbW1hbmRzL2luaXQnO1xuZXhwb3J0IHsgYWxpYXNlcywgY29tbWFuZCwgZGVzY3JpYmUgfSBmcm9tICcuLi9jb21tYW5kcy9kb2NzJztcblxuLy8gdXRpbFxuZXhwb3J0IHsgZGVlcENsb25lLCBmbGF0dGVuLCBpZkRlZmluZWQsIGlzQXJyYXksIGlzRW1wdHksIG51bWJlckZyb21Cb29sLCBwYXJ0aXRpb24sIHBhZExlZnQgYXMgbGVmdFBhZCwgY29udGVudEhhc2gsIGRlZXBNZXJnZSwgbG93ZXJDYXNlRmlyc3RDaGFyYWN0ZXIgfSBmcm9tICcuLi91dGlsJztcbiJdfQ==