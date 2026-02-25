import type { IoHelper } from '../api-private';
export declare function checkForPlatformWarnings(ioHelper: IoHelper): Promise<void>;
export declare function isVersionBetween(version: string, lower: string, upper: string): boolean;
