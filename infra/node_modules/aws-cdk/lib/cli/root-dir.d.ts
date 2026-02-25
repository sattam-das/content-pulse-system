/**
 * From the current file, find the directory that contains the CLI's package.json
 *
 * Can't use `__dirname` in production code, as the CLI will get bundled as it's
 * released and `__dirname` will refer to a different location in the `.ts` form
 * as it will in the final executing form.
 */
export declare function cliRootDir(): string;
export declare function cliRootDir(fail: true): string;
export declare function cliRootDir(fail: false): string | undefined;
