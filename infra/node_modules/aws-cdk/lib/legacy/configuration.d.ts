import { Context } from '../api/context';
import { Settings } from '../api/settings';
export declare const PROJECT_CONTEXT = "cdk.context.json";
/**
 * @deprecated
 */
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
type Arguments = {
    readonly _: [Command, ...string[]];
    readonly exclusively?: boolean;
    readonly STACKS?: string[];
    readonly lookups?: boolean;
    readonly [name: string]: unknown;
};
interface ConfigurationProps {
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
 * @deprecated
 */
export declare class Configuration {
    private readonly props;
    settings: Settings;
    context: Context;
    readonly defaultConfig: Settings;
    private readonly commandLineArguments;
    private readonly commandLineContext;
    private _projectConfig?;
    private _projectContext?;
    private loaded;
    constructor(props?: ConfigurationProps);
    private get projectConfig();
    get projectContext(): Settings;
    /**
     * Load all config
     */
    load(): Promise<this>;
    /**
     * Save the project context
     */
    saveContext(): Promise<this>;
}
export {};
