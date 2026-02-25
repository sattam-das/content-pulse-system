import { type EventType, type ErrorDetails } from './schema';
import type { ITelemetrySink } from './sink/sink-interface';
import type { Context } from '../../api/context';
import type { CliIoHost } from '../io-host/cli-io-host';
export interface TelemetrySessionProps {
    readonly ioHost: CliIoHost;
    readonly client: ITelemetrySink;
    readonly arguments: any;
    readonly context: Context;
}
export interface TelemetryEvent {
    readonly eventType: EventType;
    readonly duration: number;
    readonly error?: ErrorDetails;
}
export declare class TelemetrySession {
    private readonly props;
    private ioHost;
    private client;
    private _sessionInfo?;
    private span?;
    private count;
    constructor(props: TelemetrySessionProps);
    begin(): Promise<void>;
    attachRegion(region: string): Promise<void>;
    /**
     * When the command is complete, so is the CliIoHost. Ends the span of the entire CliIoHost
     * and notifies with an optional error message in the data.
     */
    end(error?: ErrorDetails): Promise<void>;
    emit(event: TelemetryEvent): Promise<void>;
    private get sessionInfo();
}
