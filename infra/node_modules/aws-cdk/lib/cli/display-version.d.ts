import type { IoHelper } from '../api-private';
export declare class VersionCheckTTL {
    static timestampFilePath(): string;
    private readonly file;
    private readonly ttlSecs;
    constructor(file?: string, ttlSecs?: number);
    hasExpired(): Promise<boolean>;
    update(latestVersion?: string): Promise<void>;
}
export declare function getVersionMessages(currentVersion: string, cacheFile: VersionCheckTTL): Promise<string[]>;
export declare function displayVersionMessage(ioHelper: IoHelper, currentVersion?: string, versionCheckCache?: VersionCheckTTL): Promise<void>;
