"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeCommandLineArguments = sanitizeCommandLineArguments;
exports.sanitizeContext = sanitizeContext;
const feature_flags_1 = require("./feature-flags");
/**
 * argv is the output of yargs
 */
function sanitizeCommandLineArguments(argv) {
    // Get the configuration of the arguments
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const config = require('../cli-type-registry.json');
    const command = argv._[0];
    const path = [command];
    const parameters = {};
    const globalOptions = Object.keys(config.globalOptions);
    const commandOptions = Object.keys(config.commands[command]?.options ?? {});
    const commandArg = config.commands[command]?.arg;
    for (const argName of Object.keys(argv)) {
        if (argName === commandArg?.name) {
            if (commandArg.variadic) {
                for (let i = 0; i < argv[argName].length; i++) {
                    path.push(`$${argName}_${i + 1}`);
                }
            }
            else {
                path.push(`$${argName}`);
            }
        }
        // Continue if the arg name is not a global option or command option
        // arg name comes from yargs and could be an alias; we trust that the "normal"
        // name has the same information and that is what we want to record
        if (argv[argName] === undefined || (!globalOptions.includes(argName) && !commandOptions.includes(argName))) {
            continue;
        }
        if (isNumberOrBoolean(argv[argName]) || isKnownEnumValue(argName, argv[argName], command, config)) {
            parameters[argName] = argv[argName];
        }
        else {
            parameters[argName] = '<redacted>';
        }
    }
    return {
        path,
        parameters,
    };
}
function sanitizeContext(context) {
    const sanitizedContext = {};
    for (const [flag, value] of Object.entries(context.all)) {
        // Skip if flag is not in the FeatureFlags enum
        if (!isFeatureFlag(flag)) {
            continue;
        }
        // Falsy options include boolean false, string 'false'
        // All other inputs evaluate to true
        const sanitizedValue = isBoolean(value) ? value : (value !== 'false');
        sanitizedContext[flag] = sanitizedValue;
    }
    return sanitizedContext;
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isNumberOrBoolean(value) {
    return typeof value === 'number' || isBoolean(value);
}
function isKnownEnumValue(name, value, command, config) {
    const propertyDefiniton = config.globalOptions[name] ?? config.commands[command]?.options[name];
    if (propertyDefiniton.type === 'string') {
        // Even if the property has choices, only record if the value is a valid choice
        return propertyDefiniton.choices?.includes(value);
    }
    return false;
}
function isFeatureFlag(flag) {
    return Object.values(feature_flags_1.FeatureFlag).includes(flag);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxvRUF5Q0M7QUFFRCwwQ0FjQztBQS9ERCxtREFBOEM7QUFHOUM7O0dBRUc7QUFDSCxTQUFnQiw0QkFBNEIsQ0FBQyxJQUFTO0lBQ3BELHlDQUF5QztJQUV6QyxpRUFBaUU7SUFDakUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDcEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLElBQUksR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sVUFBVSxHQUE4QixFQUFFLENBQUM7SUFFakQsTUFBTSxhQUFhLEdBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsTUFBTSxjQUFjLEdBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRixNQUFNLFVBQVUsR0FBbUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUM7SUFFakcsS0FBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUks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bmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL2FwaS9jb250ZXh0JztcblxuLyoqXG4gKiBhcmd2IGlzIHRoZSBvdXRwdXQgb2YgeWFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplQ29tbWFuZExpbmVBcmd1bWVudHMoYXJndjogYW55KTogeyBwYXRoOiBzdHJpbmdbXTsgcGFyYW1ldGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9IHtcbiAgLy8gR2V0IHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBhcmd1bWVudHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jbGktdHlwZS1yZWdpc3RyeS5qc29uJyk7XG4gIGNvbnN0IGNvbW1hbmQgPSBhcmd2Ll9bMF07XG4gIGNvbnN0IHBhdGg6IHN0cmluZ1tdID0gW2NvbW1hbmRdO1xuICBjb25zdCBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgY29uc3QgZ2xvYmFsT3B0aW9uczogYW55W10gPSBPYmplY3Qua2V5cyhjb25maWcuZ2xvYmFsT3B0aW9ucyk7XG4gIGNvbnN0IGNvbW1hbmRPcHRpb25zOiBhbnlbXSA9IE9iamVjdC5rZXlzKGNvbmZpZy5jb21tYW5kc1tjb21tYW5kXT8ub3B0aW9ucyA/PyB7fSk7XG4gIGNvbnN0IGNvbW1hbmRBcmc6IHsgbmFtZTogc3RyaW5nOyB2YXJpYWRpYzogc3RyaW5nIH0gfCB1bmRlZmluZWQgPSBjb25maWcuY29tbWFuZHNbY29tbWFuZF0/LmFyZztcblxuICBmb3IgKGNvbnN0IGFyZ05hbWUgb2YgT2JqZWN0LmtleXMoYXJndikpIHtcbiAgICBpZiAoYXJnTmFtZSA9PT0gY29tbWFuZEFyZz8ubmFtZSkge1xuICAgICAgaWYgKGNvbW1hbmRBcmcudmFyaWFkaWMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd2W2FyZ05hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKGAkJHthcmdOYW1lfV8ke2krMX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGAkJHthcmdOYW1lfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnRpbnVlIGlmIHRoZSBhcmcgbmFtZSBpcyBub3QgYSBnbG9iYWwgb3B0aW9uIG9yIGNvbW1hbmQgb3B0aW9uXG4gICAgLy8gYXJnIG5hbWUgY29tZXMgZnJvbSB5YXJncyBhbmQgY291bGQgYmUgYW4gYWxpYXM7IHdlIHRydXN0IHRoYXQgdGhlIFwibm9ybWFsXCJcbiAgICAvLyBuYW1lIGhhcyB0aGUgc2FtZSBpbmZvcm1hdGlvbiBhbmQgdGhhdCBpcyB3aGF0IHdlIHdhbnQgdG8gcmVjb3JkXG4gICAgaWYgKGFyZ3ZbYXJnTmFtZV0gPT09IHVuZGVmaW5lZCB8fCAoIWdsb2JhbE9wdGlvbnMuaW5jbHVkZXMoYXJnTmFtZSkgJiYgIWNvbW1hbmRPcHRpb25zLmluY2x1ZGVzKGFyZ05hbWUpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpc051bWJlck9yQm9vbGVhbihhcmd2W2FyZ05hbWVdKSB8fCBpc0tub3duRW51bVZhbHVlKGFyZ05hbWUsIGFyZ3ZbYXJnTmFtZV0sIGNvbW1hbmQsIGNvbmZpZykpIHtcbiAgICAgIHBhcmFtZXRlcnNbYXJnTmFtZV0gPSBhcmd2W2FyZ05hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbWV0ZXJzW2FyZ05hbWVdID0gJzxyZWRhY3RlZD4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aCxcbiAgICBwYXJhbWV0ZXJzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVDb250ZXh0KGNvbnRleHQ6IENvbnRleHQpIHtcbiAgY29uc3Qgc2FuaXRpemVkQ29udGV4dDogeyBbSyBpbiBGZWF0dXJlRmxhZ106IGJvb2xlYW4gfSA9IHt9IGFzIHsgW0sgaW4gRmVhdHVyZUZsYWddOiBib29sZWFuIH07XG4gIGZvciAoY29uc3QgW2ZsYWcsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0LmFsbCkpIHtcbiAgICAvLyBTa2lwIGlmIGZsYWcgaXMgbm90IGluIHRoZSBGZWF0dXJlRmxhZ3MgZW51bVxuICAgIGlmICghaXNGZWF0dXJlRmxhZyhmbGFnKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gRmFsc3kgb3B0aW9ucyBpbmNsdWRlIGJvb2xlYW4gZmFsc2UsIHN0cmluZyAnZmFsc2UnXG4gICAgLy8gQWxsIG90aGVyIGlucHV0cyBldmFsdWF0ZSB0byB0cnVlXG4gICAgY29uc3Qgc2FuaXRpemVkVmFsdWU6IGJvb2xlYW4gPSBpc0Jvb2xlYW4odmFsdWUpID8gdmFsdWUgOiAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgIHNhbml0aXplZENvbnRleHRbZmxhZ10gPSBzYW5pdGl6ZWRWYWx1ZTtcbiAgfVxuICByZXR1cm4gc2FuaXRpemVkQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlck9yQm9vbGVhbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IGlzQm9vbGVhbih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzS25vd25FbnVtVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBjb21tYW5kOiBzdHJpbmcsIGNvbmZpZzogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IHByb3BlcnR5RGVmaW5pdG9uID0gY29uZmlnLmdsb2JhbE9wdGlvbnNbbmFtZV0gPz8gY29uZmlnLmNvbW1hbmRzW2NvbW1hbmRdPy5vcHRpb25zW25hbWVdO1xuICBpZiAocHJvcGVydHlEZWZpbml0b24udHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBFdmVuIGlmIHRoZSBwcm9wZXJ0eSBoYXMgY2hvaWNlcywgb25seSByZWNvcmQgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgY2hvaWNlXG4gICAgcmV0dXJuIHByb3BlcnR5RGVmaW5pdG9uLmNob2ljZXM/LmluY2x1ZGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRmVhdHVyZUZsYWcoZmxhZzogc3RyaW5nKTogZmxhZyBpcyBGZWF0dXJlRmxhZyB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKEZlYXR1cmVGbGFnKS5pbmNsdWRlcyhmbGFnIGFzIEZlYXR1cmVGbGFnKTtcbn1cbiJdfQ==