import type { FeatureFlag } from '@aws-cdk/toolkit-lib';
import type { FlagOperations } from './operations';
import { type FlagOperationsParams } from './types';
export declare class InteractiveHandler {
    private readonly flags;
    private readonly flagOperations;
    constructor(flags: FeatureFlag[], flagOperations: FlagOperations);
    /** Displays flags that have differences between user and recommended values */
    private displayFlagsWithDifferences;
    /** Checks if user value matches recommended value */
    private isUserValueEqualToRecommended;
    /** Main interactive mode handler that shows menu and processes user selection */
    handleInteractiveMode(): Promise<FlagOperationsParams | null>;
    /** Handles the specific flag selection flow with flag and value prompts */
    private handleSpecificFlagSelection;
}
