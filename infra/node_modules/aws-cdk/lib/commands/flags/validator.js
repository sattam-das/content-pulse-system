"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagValidator = void 0;
class FlagValidator {
    constructor(ioHelper) {
        this.ioHelper = ioHelper;
    }
    /** Shows error message when CDK version is incompatible with flags command */
    async showIncompatibleVersionError() {
        await this.ioHelper.defaults.error('The \'cdk flags\' command is not compatible with the AWS CDK library used by your application. Please upgrade to 2.212.0 or above.');
    }
    /** Validates all parameters and returns true if valid, false if any validation fails */
    async validateParams(params) {
        const validations = [
            () => this.validateFlagNameAndAll(params),
            () => this.validateSetRequirement(params),
            () => this.validateValueRequirement(params),
            () => this.validateMutuallyExclusive(params),
            () => this.validateUnconfiguredUsage(params),
            () => this.validateSetWithFlags(params),
        ];
        for (const validation of validations) {
            const isValid = await validation();
            if (!isValid)
                return false;
        }
        return true;
    }
    /** Validates that --all and specific flag names are not used together */
    async validateFlagNameAndAll(params) {
        if (params.FLAGNAME && params.all) {
            await this.ioHelper.defaults.error('Error: Cannot use both --all and a specific flag name. Please use either --all to show all flags or specify a single flag name.');
            return false;
        }
        return true;
    }
    /** Validates that modification options require --set flag */
    async validateSetRequirement(params) {
        if ((params.value || params.recommended || params.default || params.unconfigured) && !params.set) {
            await this.ioHelper.defaults.error('Error: This option can only be used with --set.');
            return false;
        }
        return true;
    }
    /** Validates that --value requires a specific flag name */
    async validateValueRequirement(params) {
        if (params.value && !params.FLAGNAME) {
            await this.ioHelper.defaults.error('Error: --value requires a specific flag name. Please specify a flag name when providing a value.');
            return false;
        }
        return true;
    }
    /** Validates that mutually exclusive options are not used together */
    async validateMutuallyExclusive(params) {
        if (params.recommended && params.default) {
            await this.ioHelper.defaults.error('Error: Cannot use both --recommended and --default. Please choose one option.');
            return false;
        }
        if (params.unconfigured && params.all) {
            await this.ioHelper.defaults.error('Error: Cannot use both --unconfigured and --all. Please choose one option.');
            return false;
        }
        return true;
    }
    /** Validates that --unconfigured is not used with specific flag names */
    async validateUnconfiguredUsage(params) {
        if (params.unconfigured && params.FLAGNAME) {
            await this.ioHelper.defaults.error('Error: Cannot use --unconfigured with a specific flag name. --unconfigured works with multiple flags.');
            return false;
        }
        return true;
    }
    /** Validates that --set operations have required accompanying options */
    async validateSetWithFlags(params) {
        if (params.set && params.FLAGNAME && !params.value) {
            await this.ioHelper.defaults.error('Error: When setting a specific flag, you must provide a --value.');
            return false;
        }
        if (params.set && params.all && !params.recommended && !params.default) {
            await this.ioHelper.defaults.error('Error: When using --set with --all, you must specify either --recommended or --default.');
            return false;
        }
        if (params.set && params.unconfigured && !params.recommended && !params.default) {
            await this.ioHelper.defaults.error('Error: When using --set with --unconfigured, you must specify either --recommended or --default.');
            return false;
        }
        if (params.set && !params.all && !params.unconfigured && !params.FLAGNAME) {
            await this.ioHelper.defaults.error('Error: When using --set, you must specify either --all, --unconfigured, or provide a specific flag name.');
            return false;
        }
        return true;
    }
}
exports.FlagValidator = FlagValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsYUFBYTtJQUN4QixZQUE2QixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQy9DLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsS0FBSyxDQUFDLDRCQUE0QjtRQUNoQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxvSUFBb0ksQ0FBQyxDQUFDO0lBQzNLLENBQUM7SUFFRCx3RkFBd0Y7SUFDeEYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUE0QjtRQUMvQyxNQUFNLFdBQVcsR0FBRztZQUNsQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1lBQ3pDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7WUFDekMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztZQUMzQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDO1lBQzVDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7WUFDNUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztTQUN4QyxDQUFDO1FBRUYsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNyQyxNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5RUFBeUU7SUFDakUsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQTRCO1FBQy9ELElB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Q0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hGLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtHQUFrRyxDQUFDLENBQUM7WUFDdkksT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsMEdBQTBHLENBQUMsQ0FBQztZQUMvSSxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQWhHRCxzQ0FnR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsYWdPcGVyYXRpb25zUGFyYW1zIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IElvSGVscGVyIH0gZnJvbSAnLi4vLi4vYXBpLXByaXZhdGUnO1xuXG5leHBvcnQgY2xhc3MgRmxhZ1ZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW9IZWxwZXI6IElvSGVscGVyKSB7XG4gIH1cblxuICAvKiogU2hvd3MgZXJyb3IgbWVzc2FnZSB3aGVuIENESyB2ZXJzaW9uIGlzIGluY29tcGF0aWJsZSB3aXRoIGZsYWdzIGNvbW1hbmQgKi9cbiAgYXN5bmMgc2hvd0luY29tcGF0aWJsZVZlcnNpb25FcnJvcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmVycm9yKCdUaGUgXFwnY2RrIGZsYWdzXFwnIGNvbW1hbmQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgQVdTIENESyBsaWJyYXJ5IHVzZWQgYnkgeW91ciBhcHBsaWNhdGlvbi4gUGxlYXNlIHVwZ3JhZGUgdG8gMi4yMTIuMCBvciBhYm92ZS4nKTtcbiAgfVxuXG4gIC8qKiBWYWxpZGF0ZXMgYWxsIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdHJ1ZSBpZiB2YWxpZCwgZmFsc2UgaWYgYW55IHZhbGlkYXRpb24gZmFpbHMgKi9cbiAgYXN5bmMgdmFsaWRhdGVQYXJhbXMocGFyYW1zOiBGbGFnT3BlcmF0aW9uc1BhcmFtcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZUZsYWdOYW1lQW5kQWxsKHBhcmFtcyksXG4gICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlU2V0UmVxdWlyZW1lbnQocGFyYW1zKSxcbiAgICAgICgpID0+IHRoaXMudmFsaWRhdGVWYWx1ZVJlcXVpcmVtZW50KHBhcmFtcyksXG4gICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlTXV0dWFsbHlFeGNsdXNpdmUocGFyYW1zKSxcbiAgICAgICgpID0+IHRoaXMudmFsaWRhdGVVbmNvbmZpZ3VyZWRVc2FnZShwYXJhbXMpLFxuICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZVNldFdpdGhGbGFncyhwYXJhbXMpLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2YWxpZGF0aW9uKCk7XG4gICAgICBpZiAoIWlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIHRoYXQgLS1hbGwgYW5kIHNwZWNpZmljIGZsYWcgbmFtZXMgYXJlIG5vdCB1c2VkIHRvZ2V0aGVyICovXG4gIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVGbGFnTmFtZUFuZEFsbChwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHBhcmFtcy5GTEFHTkFNRSAmJiBwYXJhbXMuYWxsKSB7XG4gICAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmVycm9yKCdFcnJvcjogQ2Fubm90IHVzZSBib3RoIC0tYWxsIGFuZCBhIHNwZWNpZmljIGZsYWcgbmFtZS4gUGxlYXNlIHVzZSBlaXRoZXIgLS1hbGwgdG8gc2hvdyBhbGwgZmxhZ3Mgb3Igc3BlY2lmeSBhIHNpbmdsZSBmbGFnIG5hbWUuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqIFZhbGlkYXRlcyB0aGF0IG1vZGlmaWNhdGlvbiBvcHRpb25zIHJlcXVpcmUgLS1zZXQgZmxhZyAqL1xuICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU2V0UmVxdWlyZW1lbnQocGFyYW1zOiBGbGFnT3BlcmF0aW9uc1BhcmFtcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgocGFyYW1zLnZhbHVlIHx8IHBhcmFtcy5yZWNvbW1lbmRlZCB8fCBwYXJhbXMuZGVmYXVsdCB8fCBwYXJhbXMudW5jb25maWd1cmVkKSAmJiAhcGFyYW1zLnNldCkge1xuICAgICAgYXdhaXQgdGhpcy5pb0hlbHBlci5kZWZhdWx0cy5lcnJvcignRXJyb3I6IFRoaXMgb3B0aW9uIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCAtLXNldC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIHRoYXQgLS12YWx1ZSByZXF1aXJlcyBhIHNwZWNpZmljIGZsYWcgbmFtZSAqL1xuICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlVmFsdWVSZXF1aXJlbWVudChwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHBhcmFtcy52YWx1ZSAmJiAhcGFyYW1zLkZMQUdOQU1FKSB7XG4gICAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmVycm9yKCdFcnJvcjogLS12YWx1ZSByZXF1aXJlcyBhIHNwZWNpZmljIGZsYWcgbmFtZS4gUGxlYXNlIHNwZWNpZnkgYSBmbGFnIG5hbWUgd2hlbiBwcm92aWRpbmcgYSB2YWx1ZS4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIHRoYXQgbXV0dWFsbHkgZXhjbHVzaXZlIG9wdGlvbnMgYXJlIG5vdCB1c2VkIHRvZ2V0aGVyICovXG4gIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVNdXR1YWxseUV4Y2x1c2l2ZShwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHBhcmFtcy5yZWNvbW1lbmRlZCAmJiBwYXJhbXMuZGVmYXVsdCkge1xuICAgICAgYXdhaXQgdGhpcy5pb0hlbHBlci5kZWZhdWx0cy5lcnJvcignRXJyb3I6IENhbm5vdCB1c2UgYm90aCAtLXJlY29tbWVuZGVkIGFuZCAtLWRlZmF1bHQuIFBsZWFzZSBjaG9vc2Ugb25lIG9wdGlvbi4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy51bmNvbmZpZ3VyZWQgJiYgcGFyYW1zLmFsbCkge1xuICAgICAgYXdhaXQgdGhpcy5pb0hlbHBlci5kZWZhdWx0cy5lcnJvcignRXJyb3I6IENhbm5vdCB1c2UgYm90aCAtLXVuY29uZmlndXJlZCBhbmQgLS1hbGwuIFBsZWFzZSBjaG9vc2Ugb25lIG9wdGlvbi4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIHRoYXQgLS11bmNvbmZpZ3VyZWQgaXMgbm90IHVzZWQgd2l0aCBzcGVjaWZpYyBmbGFnIG5hbWVzICovXG4gIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVVbmNvbmZpZ3VyZWRVc2FnZShwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHBhcmFtcy51bmNvbmZpZ3VyZWQgJiYgcGFyYW1zLkZMQUdOQU1FKSB7XG4gICAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmVycm9yKCdFcnJvcjogQ2Fubm90IHVzZSAtLXVuY29uZmlndXJlZCB3aXRoIGEgc3BlY2lmaWMgZmxhZyBuYW1lLiAtLXVuY29uZmlndXJlZCB3b3JrcyB3aXRoIG11bHRpcGxlIGZsYWdzLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBWYWxpZGF0ZXMgdGhhdCAtLXNldCBvcGVyYXRpb25zIGhhdmUgcmVxdWlyZWQgYWNjb21wYW55aW5nIG9wdGlvbnMgKi9cbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVNldFdpdGhGbGFncyhwYXJhbXM6IEZsYWdPcGVyYXRpb25zUGFyYW1zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHBhcmFtcy5zZXQgJiYgcGFyYW1zLkZMQUdOQU1FICYmICFwYXJhbXMudmFsdWUpIHtcbiAgICAgIGF3YWl0IHRoaXMuaW9IZWxwZXIuZGVmYXVsdHMuZXJyb3IoJ0Vycm9yOiBXaGVuIHNldHRpbmcgYSBzcGVjaWZpYyBmbGFnLCB5b3UgbXVzdCBwcm92aWRlIGEgLS12YWx1ZS4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zZXQgJiYgcGFyYW1zLmFsbCAmJiAhcGFyYW1zLnJlY29tbWVuZGVkICYmICFwYXJhbXMuZGVmYXVsdCkge1xuICAgICAgYXdhaXQgdGhpcy5pb0hlbHBlci5kZWZhdWx0cy5lcnJvcignRXJyb3I6IFdoZW4gdXNpbmcgLS1zZXQgd2l0aCAtLWFsbCwgeW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgLS1yZWNvbW1lbmRlZCBvciAtLWRlZmF1bHQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2V0ICYmIHBhcmFtcy51bmNvbmZpZ3VyZWQgJiYgIXBhcmFtcy5yZWNvbW1lbmRlZCAmJiAhcGFyYW1zLmRlZmF1bHQpIHtcbiAgICAgIGF3YWl0IHRoaXMuaW9IZWxwZXIuZGVmYXVsdHMuZXJyb3IoJ0Vycm9yOiBXaGVuIHVzaW5nIC0tc2V0IHdpdGggLS11bmNvbmZpZ3VyZWQsIHlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIC0tcmVjb21tZW5kZWQgb3IgLS1kZWZhdWx0LicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNldCAmJiAhcGFyYW1zLmFsbCAmJiAhcGFyYW1zLnVuY29uZmlndXJlZCAmJiAhcGFyYW1zLkZMQUdOQU1FKSB7XG4gICAgICBhd2FpdCB0aGlzLmlvSGVscGVyLmRlZmF1bHRzLmVycm9yKCdFcnJvcjogV2hlbiB1c2luZyAtLXNldCwgeW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgLS1hbGwsIC0tdW5jb25maWd1cmVkLCBvciBwcm92aWRlIGEgc3BlY2lmaWMgZmxhZyBuYW1lLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19