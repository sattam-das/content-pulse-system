export { isCI } from '../util/ci';
/**
 * yargs middleware to negate an option if a negative alias is provided
 * E.g. `-R` will imply `--rollback=false`
 *
 * @param optionToNegate - The name of the option to negate, e.g. `rollback`
 * @param negativeAlias - The alias that should negate the option, e.g. `R`
 * @returns a middleware function that can be passed to yargs
 */
export declare function yargsNegativeAlias<T extends {
    [x in S | L]: boolean | undefined;
}, S extends string, L extends string>(negativeAlias: S, optionToNegate: L): (argv: T) => T;
/**
 * Returns the current version of the CLI
 * @returns the current version of the CLI
 */
export declare function cliVersion(): string;
/**
 * Returns the default browser command for the current platform
 * @returns the default browser command for the current platform
 */
export declare function browserForPlatform(): string;
