/**
 * A CloudAssemblyError is thrown for issues with the synthesized CloudAssembly.
 *
 * These are typically exceptions that are unexpected for end-users,
 * and should only occur during abnormal operation, e.g. when the synthesis
 * didn't fully complete.
 *
 * @internal
 */
export declare class CloudAssemblyError extends Error {
    #private;
    /**
     * The time the error was thrown.
     */
    get time(): string;
    get type(): 'assembly';
    constructor(msg: string);
}
