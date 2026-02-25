import type { IIoHost } from '@aws-cdk/toolkit-lib';
import type { TelemetrySchema } from '../schema';
import type { ITelemetrySink } from './sink-interface';
/**
 * Properties for the StdoutTelemetryClient
 */
export interface IoHostTelemetrySinkProps {
    /**
     * Where messages are going to be sent
     */
    readonly ioHost: IIoHost;
}
/**
 * A telemetry client that collects events and flushes them to stdout.
 */
export declare class IoHostTelemetrySink implements ITelemetrySink {
    private ioHelper;
    /**
     * Create a new StdoutTelemetryClient
     */
    constructor(props: IoHostTelemetrySinkProps);
    /**
     * Emit an event
     */
    emit(event: TelemetrySchema): Promise<void>;
    flush(): Promise<void>;
}
