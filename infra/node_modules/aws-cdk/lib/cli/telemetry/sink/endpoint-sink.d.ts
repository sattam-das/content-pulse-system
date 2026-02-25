import type { Agent } from 'https';
import type { IIoHost } from '../../io-host';
import type { TelemetrySchema } from '../schema';
import type { ITelemetrySink } from './sink-interface';
/**
 * Properties for the Endpoint Telemetry Client
 */
export interface EndpointTelemetrySinkProps {
    /**
     * The external endpoint to hit
     */
    readonly endpoint: string;
    /**
     * Where messages are going to be sent
     */
    readonly ioHost: IIoHost;
    /**
     * The agent responsible for making the network requests.
     *
     * Use this to set up a proxy connection.
     *
     * @default - Uses the shared global node agent
     */
    readonly agent?: Agent;
}
/**
 * The telemetry client that hits an external endpoint.
 */
export declare class EndpointTelemetrySink implements ITelemetrySink {
    private events;
    private endpoint;
    private ioHelper;
    private agent?;
    constructor(props: EndpointTelemetrySinkProps);
    /**
     * Add an event to the collection.
     */
    emit(event: TelemetrySchema): Promise<void>;
    flush(): Promise<void>;
    /**
     * Returns true if telemetry successfully posted, false otherwise.
     */
    private https;
}
