import { Context } from '../api/context';
import { Settings } from '../api/settings';
import type { IoHelper } from '../api-private';
export declare const PROJECT_CONFIG = "cdk.json";
export { PROJECT_CONTEXT } from '../api/context';
export declare const USER_DEFAULTS = "~/.cdk.json";
export declare enum Command {
    LS = "ls",
    LIST = "list",
    DIFF = "diff",
    BOOTSTRAP = "bootstrap",
    DEPLOY = "deploy",
    DESTROY = "destroy",
    SYNTHESIZE = "synthesize",
    SYNTH = "synth",
    METADATA = "metadata",
    INIT = "init",
    VERSION = "version",
    WATCH = "watch",
    GC = "gc",
    FLAGS = "flags",
    ROLLBACK = "rollback",
    IMPORT = "import",
    ACKNOWLEDGE = "acknowledge",
    ACK = "ack",
    NOTICES = "notices",
    MIGRATE = "migrate",
    CONTEXT = "context",
    DOCS = "docs",
    DOC = "doc",
    DOCTOR = "doctor",
    REFACTOR = "refactor",
    DRIFT = "drift",
    CLI_TELEMETRY = "cli-telemetry"
}
export type Arguments = {
    readonly _: [Command, ...string[]];
    readonly exclusively?: boolean;
    readonly STACKS?: string[];
    readonly lookups?: boolean;
    readonly [name: string]: unknown;
};
export interface ConfigurationProps {
    /**
     * Configuration passed via command line arguments
     *
     * @default - Nothing passed
     */
    readonly commandLineArguments?: Arguments;
    /**
     * Whether or not to use context from `.cdk.json` in user home directory
     *
     * @default true
     */
    readonly readUserContext?: boolean;
}
/**
 * All sources of settings combined
 */
export declare class Configuration {
    /**
     * Creates user configuration from commandLineArguments
     */
    static fromArgs(ioHelper: IoHelper, args?: Arguments): Promise<Configuration>;
    /**
     * Creates user configuration from commandLineArguments and loads
     */
    static fromArgsAndFiles(ioHelper: IoHelper, props?: ConfigurationProps): Promise<Configuration>;
    settings: Settings;
    context: Context;
    readonly defaultConfig: Settings;
    private readonly commandLineArguments;
    private readonly commandLineContext;
    private _projectConfig?;
    private _projectContext?;
    private loaded;
    private ioHelper;
    private constructor();
    private get projectConfig();
    get projectContext(): Settings;
    /**
     * Load all config
     */
    private loadConfigFiles;
    /**
     * Save the project context
     */
    saveContext(): Promise<this>;
}
/**
 * Parse CLI arguments into Settings
 *
 * CLI arguments in must be accessed in the CLI code via
 * `configuration.settings.get(['argName'])` instead of via `args.argName`.
 *
 * The advantage is that they can be configured via `cdk.json` and
 * `$HOME/.cdk.json`. Arguments not listed below and accessed via this object
 * can only be specified on the command line.
 *
 * @param argv - the received CLI arguments.
 * @returns a new Settings object.
 */
export declare function commandLineArgumentsToSettings(ioHelper: IoHelper, argv: Arguments): Promise<Settings>;
