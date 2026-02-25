import type { IoHelper } from '../../api-private';
/**
 * OS helpers
 *
 * Shell function which both prints to stdout and collects the output into a
 * string.
 */
export declare function shell(ioHelper: IoHelper, command: string[]): Promise<string>;
