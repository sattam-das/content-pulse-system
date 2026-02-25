import type { InteractiveHandler } from './interactive-handler';
import type { FlagOperations } from './operations.ts';
import type { FlagOperationsParams } from './types';
import type { FlagValidator } from './validator';
export declare class FlagOperationRouter {
    private readonly validator;
    private readonly interactiveHandler;
    private readonly flagOperations;
    constructor(validator: FlagValidator, interactiveHandler: InteractiveHandler, flagOperations: FlagOperations);
    /** Routes flag operations to appropriate handlers based on parameters */
    route(params: FlagOperationsParams): Promise<void>;
    /** Handles flag setting operations, routing to single or multiple flag methods */
    private handleSetOperations;
    /** Manages interactive mode */
    private handleInteractiveMode;
    /** Shows help message when no specific options are provided */
    private showHelpMessage;
}
