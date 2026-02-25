import { ProxyAgent } from 'proxy-agent';
import type { IoHelper } from '../api-private';
/**
 * Options for proxy-agent SDKs
 */
interface ProxyAgentOptions {
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
export declare class ProxyAgentProvider {
    private readonly ioHelper;
    constructor(ioHelper: IoHelper);
    create(options: ProxyAgentOptions): Promise<ProxyAgent>;
    private tryGetCACert;
    /**
     * Find and return a CA certificate bundle path to be passed into the SDK.
     */
    private caBundlePathFromEnvironment;
}
export {};
