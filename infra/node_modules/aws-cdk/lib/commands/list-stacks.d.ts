import type { StackDetails } from '@aws-cdk/toolkit-lib';
import type { CdkToolkit } from '../cli/cdk-toolkit';
/**
 * Options for List Stacks
 */
export interface ListStacksOptions {
    /**
     * Stacks to list
     *
     * @default - All stacks are listed
     */
    readonly selectors: string[];
}
/**
 * List Stacks
 *
 * @param toolkit - cdk toolkit
 * @param options - list stacks options
 * @returns StackDetails[]
 */
export declare function listStacks(toolkit: CdkToolkit, options: ListStacksOptions): Promise<StackDetails[]>;
