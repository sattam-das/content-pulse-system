interface CiSystem {
    /**
     * What's the name?
     */
    readonly name: string;
    /**
     * What environment variable indicates that we are running on this system?
     */
    readonly detectEnvVar: string;
    /**
     * Whether or not this CI system can be configured to fail on messages written to stderr
     *
     * With "can be configured", what we mean is that a checkbox or configuration
     * flag to enable this behavior comes out of the box with the CI system and (judgement
     * call), this flag is "commonly" used.
     *
     * Of course every CI system can be scripted to have this behavior, but that's
     * not what we mean.
     */
    readonly canBeConfiguredToFailOnStdErr: boolean;
}
export declare function detectCiSystem(): CiSystem | undefined;
/**
 * Return whether the CI system we're detecting is safe to write to stderr on
 *
 * Returns `undefined` if the current CI system cannot be recognized.
 */
export declare function ciSystemIsStdErrSafe(): boolean | undefined;
export {};
