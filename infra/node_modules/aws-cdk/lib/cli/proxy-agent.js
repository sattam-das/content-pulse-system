"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyAgentProvider = void 0;
const fs = require("fs-extra");
const proxy_agent_1 = require("proxy-agent");
class ProxyAgentProvider {
    constructor(ioHelper) {
        this.ioHelper = ioHelper;
    }
    async create(options) {
        // Force it to use the proxy provided through the command line.
        // Otherwise, let the ProxyAgent auto-detect the proxy using environment variables.
        const getProxyForUrl = options.proxyAddress != null
            ? () => Promise.resolve(options.proxyAddress)
            : undefined;
        return new proxy_agent_1.ProxyAgent({
            ca: await this.tryGetCACert(options.caBundlePath),
            getProxyForUrl,
        });
    }
    async tryGetCACert(bundlePath) {
        const path = bundlePath || this.caBundlePathFromEnvironment();
        if (path) {
            await this.ioHelper.defaults.debug(`Using CA bundle path: ${path}`);
            try {
                if (!fs.pathExistsSync(path)) {
                    return undefined;
                }
                return fs.readFileSync(path, { encoding: 'utf-8' });
            }
            catch (e) {
                await this.ioHelper.defaults.debug(String(e));
                return undefined;
            }
        }
        return undefined;
    }
    /**
     * Find and return a CA certificate bundle path to be passed into the SDK.
     */
    caBundlePathFromEnvironment() {
        if (process.env.aws_ca_bundle) {
            return process.env.aws_ca_bundle;
        }
        if (process.env.AWS_CA_BUNDLE) {
            return process.env.AWS_CA_BUNDLE;
        }
        return undefined;
    }
}
exports.ProxyAgentProvider = ProxyAgentProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHktYWdlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm94eS1hZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDL0IsNkNBQXlDO0FBc0J6QyxNQUFhLGtCQUFrQjtJQUc3QixZQUFtQixRQUFrQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUEwQjtRQUM1QywrREFBK0Q7UUFDL0QsbUZBQW1GO1FBQ25GLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUNqRCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBYSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFZCxPQUFPLElBQUksd0JBQVUsQ0FBQztZQUNwQixFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDakQsY0FBYztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQW1CO1FBQzVDLE1BQU0sSUFBSSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMseUJBQXlCLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDO2dCQUNILElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQzdCLE9BQU8sU0FBUyxDQUFDO2dCQUNuQixDQUFDO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBQUMsT0FBTyxDQUFNLEVBQUUsQ0FBQztnQkFDaEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sU0FBUyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkJBQTJCO1FBQ2pDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDOUIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBakRELGdEQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IFByb3h5QWdlbnQgfSBmcm9tICdwcm94eS1hZ2VudCc7XG5pbXBvcnQgdHlwZSB7IElvSGVscGVyIH0gZnJvbSAnLi4vYXBpLXByaXZhdGUnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHByb3h5LWFnZW50IFNES3NcbiAqL1xuaW50ZXJmYWNlIFByb3h5QWdlbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFByb3h5IGFkZHJlc3MgdG8gdXNlXG4gICAqXG4gICAqIEBkZWZhdWx0IE5vIHByb3h5XG4gICAqL1xuICByZWFkb25seSBwcm94eUFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgcGF0aCB0byBhIGNlcnRpZmljYXRlIGJ1bmRsZSB0aGF0IGNvbnRhaW5zIGEgY2VydCB0byBiZSB0cnVzdGVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCBObyBjZXJ0aWZpY2F0ZSBidW5kbGVcbiAgICovXG4gIHJlYWRvbmx5IGNhQnVuZGxlUGF0aD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFByb3h5QWdlbnRQcm92aWRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW9IZWxwZXI6IElvSGVscGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihpb0hlbHBlcjogSW9IZWxwZXIpIHtcbiAgICB0aGlzLmlvSGVscGVyID0gaW9IZWxwZXI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IFByb3h5QWdlbnRPcHRpb25zKSB7XG4gICAgLy8gRm9yY2UgaXQgdG8gdXNlIHRoZSBwcm94eSBwcm92aWRlZCB0aHJvdWdoIHRoZSBjb21tYW5kIGxpbmUuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXQgdGhlIFByb3h5QWdlbnQgYXV0by1kZXRlY3QgdGhlIHByb3h5IHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICBjb25zdCBnZXRQcm94eUZvclVybCA9IG9wdGlvbnMucHJveHlBZGRyZXNzICE9IG51bGxcbiAgICAgID8gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKG9wdGlvbnMucHJveHlBZGRyZXNzISlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIG5ldyBQcm94eUFnZW50KHtcbiAgICAgIGNhOiBhd2FpdCB0aGlzLnRyeUdldENBQ2VydChvcHRpb25zLmNhQnVuZGxlUGF0aCksXG4gICAgICBnZXRQcm94eUZvclVybCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdHJ5R2V0Q0FDZXJ0KGJ1bmRsZVBhdGg/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXRoID0gYnVuZGxlUGF0aCB8fCB0aGlzLmNhQnVuZGxlUGF0aEZyb21FbnZpcm9ubWVudCgpO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmRlYnVnKGBVc2luZyBDQSBidW5kbGUgcGF0aDogJHtwYXRofWApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmcy5wYXRoRXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW9IZWxwZXIuZGVmYXVsdHMuZGVidWcoU3RyaW5nKGUpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuZCByZXR1cm4gYSBDQSBjZXJ0aWZpY2F0ZSBidW5kbGUgcGF0aCB0byBiZSBwYXNzZWQgaW50byB0aGUgU0RLLlxuICAgKi9cbiAgcHJpdmF0ZSBjYUJ1bmRsZVBhdGhGcm9tRW52aXJvbm1lbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuYXdzX2NhX2J1bmRsZSkge1xuICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LmF3c19jYV9idW5kbGU7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5BV1NfQ0FfQlVORExFKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuQVdTX0NBX0JVTkRMRTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19