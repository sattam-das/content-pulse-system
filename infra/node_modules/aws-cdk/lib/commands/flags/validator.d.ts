import type { FlagOperationsParams } from './types';
import type { IoHelper } from '../../api-private';
export declare class FlagValidator {
    private readonly ioHelper;
    constructor(ioHelper: IoHelper);
    /** Shows error message when CDK version is incompatible with flags command */
    showIncompatibleVersionError(): Promise<void>;
    /** Validates all parameters and returns true if valid, false if any validation fails */
    validateParams(params: FlagOperationsParams): Promise<boolean>;
    /** Validates that --all and specific flag names are not used together */
    private validateFlagNameAndAll;
    /** Validates that modification options require --set flag */
    private validateSetRequirement;
    /** Validates that --value requires a specific flag name */
    private validateValueRequirement;
    /** Validates that mutually exclusive options are not used together */
    private validateMutuallyExclusive;
    /** Validates that --unconfigured is not used with specific flag names */
    private validateUnconfiguredUsage;
    /** Validates that --set operations have required accompanying options */
    private validateSetWithFlags;
}
