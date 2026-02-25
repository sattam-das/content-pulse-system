import type { IConstruct } from 'constructs';
import type { AssertionError } from '../../assertions/lib/private/error';
import type { CloudAssemblyError } from '../../cx-api/lib/private/error';
/**
 * Helper to check if an error is of a certain type.
 */
export declare class Errors {
    /**
     * Test whether the given errors is a ConstructionError.
     *
     * A ConstructionError is a generic error that will be thrown during the App construction or synthesis.
     * To check for more specific errors, use the respective methods.
     */
    static isConstructError(x: any): x is ConstructError;
    /**
     * Test whether the given error is a ValidationError.
     *
     * A ValidationError is thrown when input props are failing to pass the rules of the construct.
     * It usually means the underlying CloudFormation resource(s) would not deploy with a given configuration.
     */
    static isValidationError(x: any): x is ValidationError;
    /**
     * Test whether the given error is a AssertionError.
     *
     * An AssertionError is thrown when an assertion fails.
     */
    static isAssertionError(x: any): x is AssertionError;
    /**
     * Test whether the given error is a CloudAssemblyError.
     *
     * A CloudAssemblyError is thrown for unexpected problems with the synthesized assembly.
     */
    static isCloudAssemblyError(x: any): x is CloudAssemblyError;
    /**
     * Test whether the given error is an ExecutionError.
     *
     * An ExecutionError is thrown if an externally executed script or code failed.
     */
    static isExecutionError(x: any): x is ExecutionError;
    /**
     * Test whether the given error is an AssumptionError.
     *
     * An AssumptionError is thrown when a construct made an assumption somewhere that doesn't hold true.
     * This error always indicates a bug in the construct.
     */
    static isAssumptionError(x: any): x is AssumptionError;
}
interface ConstructInfo {
    readonly fqn: string;
    readonly version: string;
}
/**
 * Generic, abstract error class used for errors thrown from the users app during construction or synth.
 */
declare abstract class ConstructError extends Error {
    #private;
    /**
     * The time the error was thrown.
     */
    get time(): string;
    /**
     * The level. Always `'error'`.
     */
    get level(): 'error';
    /**
     * The type of the error.
     */
    abstract get type(): string;
    /**
     * The path of the construct this error is thrown from, if available.
     */
    get constructPath(): string | undefined;
    /**
     * Information on the construct this error is thrown from, if available.
     */
    get constructInfo(): ConstructInfo | undefined;
    constructor(msg: string, scope?: IConstruct, name?: string);
    /**
     * Helper message to clean-up the stack and amend with construct information.
     */
    private constructStack;
}
/**
 * A ValidationError should be used when input props fail to pass the validation rules of a construct
 * or class or late binding. The error indicates that the underlying CloudFormation resource(s) would
 * not deploy with a given configuration, or that some other prerequisites are not met.
 *
 * A ValidationError is always attached to a Construct scope. To a user, the error will present with additional
 * information on the construct that caused the validation to fail.
 *
 * @internal
 */
export declare class ValidationError extends ConstructError {
    get type(): 'validation';
    constructor(msg: string, scope: IConstruct);
}
/**
 * An UnscopedValidationError is a ValidationError that is not attached to a specific construct.
 * This can be used to report validation errors that are thrown when no construct scope is available.
 * The common use case here are data classes that assert on props, but are not constructs itself.
 *
 * To a User, these errors still present themselves as a "ValidationError".
 * However they do not contain any information about the location in the construct tree.
 *
 * @internal
 */
export declare class UnscopedValidationError extends ConstructError {
    get type(): 'validation';
    constructor(msg: string);
}
/**
 * Some construct code made an assumption somewhere that doesn't hold true
 *
 * This error always indicates a bug in the construct.
 *
 * @internal
 */
export declare class AssumptionError extends ConstructError {
    get type(): 'assumption';
    constructor(msg: string);
}
/**
 * A CDK app may execute external code or shell scripts. If such an execution fails, an ExecutionError is thrown.
 * The output log and error message will provide more details on the actual failure.
 *
 * @internal
 */
export declare class ExecutionError extends ConstructError {
    get type(): 'exec';
    constructor(msg: string);
}
export {};
