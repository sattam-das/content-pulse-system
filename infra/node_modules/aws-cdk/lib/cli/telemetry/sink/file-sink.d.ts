import { type IIoHost } from '@aws-cdk/toolkit-lib';
import type { TelemetrySchema } from '../schema';
import type { ITelemetrySink } from './sink-interface';
/**
 * Properties for the FileTelemetryClient
 */
export interface FileTelemetrySinkProps {
    /**
     * Where messages are going to be sent
     */
    readonly ioHost: IIoHost;
    /**
     * The local file to log telemetry data to.
     */
    readonly logFilePath: string;
}
/**
 * A telemetry client that collects events writes them to a file
 */
export declare class FileTelemetrySink implements ITelemetrySink {
    private ioHelper;
    private logFilePath;
    /**
     * Create a new FileTelemetryClient
     */
    constructor(props: FileTelemetrySinkProps);
    /**
     * Emit an event.
     */
    emit(event: TelemetrySchema): Promise<void>;
    flush(): Promise<void>;
}
