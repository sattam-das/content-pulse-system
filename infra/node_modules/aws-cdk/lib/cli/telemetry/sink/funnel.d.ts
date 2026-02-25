import type { TelemetrySchema } from '../schema';
import type { ITelemetrySink } from './sink-interface';
export interface FunnelProps {
    readonly sinks: ITelemetrySink[];
}
/**
 * A funnel is a combination of one or more sinks.
 * The sink functions are executed in parallel, and a maximum of 5
 * sinks are supported per funnel.
 */
export declare class Funnel {
    private readonly sinks;
    constructor(props: FunnelProps);
    emit(event: TelemetrySchema): Promise<void>;
    flush(): Promise<void>;
}
