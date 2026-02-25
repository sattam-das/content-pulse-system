import type { AwsCredentialIdentityProvider, Logger, NodeHttpHandlerOptions } from '@smithy/types';
import { SdkProvider as SdkProviderCurrentVersion } from '../api/aws-auth';
/**
 * @deprecated
 */
export declare function cached<A extends object, B>(obj: A, sym: symbol, fn: () => B): B;
/**
 * @deprecated
 */
export interface ContextProviderPlugin {
    getValue(args: {
        [key: string]: any;
    }): Promise<any>;
}
/**
 * An AWS account
 * @deprecated
 */
export interface Account {
    readonly accountId: string;
    readonly partition: string;
}
/**
 * Enable tracing in the CDK
 *
 * @deprecated cannot be enabled from outside the CDK
 */
export declare function enableTracing(_enabled: boolean): void;
/**
 * Options for individual SDKs
 * @deprecated
 */
interface SdkHttpOptions {
    /**
     * Proxy address to use
     *
     * @default No proxy
     */
    readonly proxyAddress?: string;
    /**
     * A path to a certificate bundle that contains a cert to be trusted.
     *
     * @default No certificate bundle
     */
    readonly caBundlePath?: string;
}
/**
 * Options for the default SDK provider
 * @deprecated
 */
interface SdkProviderOptions {
    /**
     * Profile to read from ~/.aws
     *
     * @default - No profile
     */
    readonly profile?: string;
    /**
     * HTTP options for SDK
     */
    readonly httpOptions?: SdkHttpOptions;
    /**
     * The logger for sdk calls.
     */
    readonly logger?: Logger;
}
/**
 * @deprecated
 */
export declare class SdkProvider {
    static withAwsCliCompatibleDefaults(options?: SdkProviderOptions): Promise<SdkProviderCurrentVersion>;
    constructor(defaultCredentialProvider: AwsCredentialIdentityProvider, defaultRegion: string, requestHandler?: NodeHttpHandlerOptions, logger?: Logger);
}
export {};
