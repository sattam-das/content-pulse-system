import type { IConstruct } from 'constructs';
import { Duration } from '../../../core';
export declare function calculateRetryPolicy(scope: IConstruct, props?: {
    totalTimeout?: Duration;
    queryInterval?: Duration;
}): {
    maxAttempts: number;
    interval: Duration;
    backoffRate: number;
};
