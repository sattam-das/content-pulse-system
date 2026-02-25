/**
 * An AssertionError is thrown from the assertions module when an assertion fails.
 * Assertion errors are directly connected to an assertion a user wrote.
 *
 * Not all errors from the assertions module are automatically AssertionErrors.
 * When a pre-condition is incorrect (e.g. disallowed use of a matcher),
 * throwing an UnscopedValidationError is more appropriate.
 *
 * @internal
 */
export declare class AssertionError extends Error {
    #private;
    /**
     * The time the error was thrown.
     */
    get time(): string;
    get type(): 'assertion';
    constructor(msg: string);
}
