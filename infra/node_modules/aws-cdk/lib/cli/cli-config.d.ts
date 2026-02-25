import { CliHelpers, type CliConfig } from '@aws-cdk/user-input-gen';
export declare const YARGS_HELPERS: CliHelpers;
/**
 * Source of truth for all CDK CLI commands. `user-input-gen` translates this into:
 *
 * - the `yargs` definition in `lib/parse-command-line-arguments.ts`.
 * - the `UserInput` type in `lib/user-input.ts`.
 * - the `convertXxxToUserInput` functions in `lib/convert-to-user-input.ts`.
 */
export declare function makeConfig(): Promise<CliConfig>;
