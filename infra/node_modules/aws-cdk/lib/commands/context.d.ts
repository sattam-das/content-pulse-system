import type { Context } from '../api/context';
import type { IoHelper } from '../api-private';
/**
 * Options for the context command
 */
export interface ContextOptions {
    /**
     * The context object sourced from all context locations
     */
    readonly context: Context;
    /**
     * The context key (or its index) to reset
     *
     * @default undefined
     */
    readonly reset?: string;
    /**
     * Ignore missing key error
     *
     * @default false
     */
    readonly force?: boolean;
    /**
     * Clear all context
     *
     * @default false
     */
    readonly clear?: boolean;
    /**
     * Use JSON output instead of YAML when templates are printed to STDOUT
     *
     * @default false
     */
    readonly json?: boolean;
    /**
     * IoHelper for messaging.
     */
    readonly ioHelper: IoHelper;
}
export declare function contextHandler(options: ContextOptions): Promise<number>;
