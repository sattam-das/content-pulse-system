import { Duration } from '../../core';
/**
 * Schedule for EventBridge Scheduler
 */
export declare class Schedule {
    /**
     * The Schedule expression
     */
    readonly expressionString: string;
    /**
     * Construct a one-time schedule from a Date.
     */
    static oneTime(time: Date): Schedule;
    /**
     * Construct a rate-based schedule from an interval.
     *
     * The minimum interval is 1 minute.
     */
    static rate(duration: Duration): Schedule;
    /**
     * Create a cron-based schedule from a set of cron fields
     */
    static cron(options: CronOptions): Schedule;
    private constructor();
}
/**
 * Options to configure a cron expression
 *
 * All fields are strings so you can use complex expressions. Absence of
 * a field implies '*' or '?', whichever one is appropriate.
 *
 * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html
 */
export interface CronOptions {
    /**
     * The minute to run this rule at
     *
     * @default - Every minute
     */
    readonly minute?: string;
    /**
     * The hour to run this rule at
     *
     * @default - Every hour
     */
    readonly hour?: string;
    /**
     * The day of the month to run this rule at
     *
     * @default - Every day of the month
     */
    readonly day?: string;
    /**
     * The month to run this rule at
     *
     * @default - Every month
     */
    readonly month?: string;
    /**
     * The day of the week to run this rule at
     *
     * @default - Whichever day of the week that `day` falls on
     */
    readonly weekDay?: string;
    /**
     * The year to run this rule at
     *
     * @default - Every year
     */
    readonly year?: string;
}
