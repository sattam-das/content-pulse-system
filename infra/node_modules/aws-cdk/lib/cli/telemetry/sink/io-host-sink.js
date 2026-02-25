"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoHostTelemetrySink = void 0;
const api_private_1 = require("../../../api-private");
/**
 * A telemetry client that collects events and flushes them to stdout.
 */
class IoHostTelemetrySink {
    /**
     * Create a new StdoutTelemetryClient
     */
    constructor(props) {
        this.ioHelper = api_private_1.IoHelper.fromActionAwareIoHost(props.ioHost);
    }
    /**
     * Emit an event
     */
    async emit(event) {
        try {
            // Format the events as a JSON string with pretty printing
            const output = JSON.stringify(event, null, 2);
            // Write to IoHost
            await this.ioHelper.defaults.trace(`--- TELEMETRY EVENT ---\n${output}\n-----------------------\n`);
        }
        catch (e) {
            // Never throw errors, just log them via ioHost
            await this.ioHelper.defaults.trace(`Failed to add telemetry event: ${e.message}`);
        }
    }
    async flush() {
        return;
    }
}
exports.IoHostTelemetrySink = IoHostTelemetrySink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW8taG9zdC1zaW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW8taG9zdC1zaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNEQUFnRDtBQWNoRDs7R0FFRztBQUNILE1BQWEsbUJBQW1CO0lBRzlCOztPQUVHO0lBQ0gsWUFBWSxLQUErQjtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFRLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxDQUFDO1lBQ0gsMERBQTBEO1lBQzFELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5QyxrQkFBa0I7WUFDbEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLE1BQU0sNkJBQTZCLENBQUMsQ0FBQztRQUN0RyxDQUFDO1FBQUMsT0FBTyxDQUFNLEVBQUUsQ0FBQztZQUNoQiwrQ0FBK0M7WUFDL0MsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsT0FBTztJQUNULENBQUM7Q0FDRjtBQTdCRCxrREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElJb0hvc3QgfSBmcm9tICdAYXdzLWNkay90b29sa2l0LWxpYic7XG5pbXBvcnQgeyBJb0hlbHBlciB9IGZyb20gJy4uLy4uLy4uL2FwaS1wcml2YXRlJztcbmltcG9ydCB0eXBlIHsgVGVsZW1ldHJ5U2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB0eXBlIHsgSVRlbGVtZXRyeVNpbmsgfSBmcm9tICcuL3NpbmstaW50ZXJmYWNlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciB0aGUgU3Rkb3V0VGVsZW1ldHJ5Q2xpZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW9Ib3N0VGVsZW1ldHJ5U2lua1Byb3BzIHtcbiAgLyoqXG4gICAqIFdoZXJlIG1lc3NhZ2VzIGFyZSBnb2luZyB0byBiZSBzZW50XG4gICAqL1xuICByZWFkb25seSBpb0hvc3Q6IElJb0hvc3Q7XG59XG5cbi8qKlxuICogQSB0ZWxlbWV0cnkgY2xpZW50IHRoYXQgY29sbGVjdHMgZXZlbnRzIGFuZCBmbHVzaGVzIHRoZW0gdG8gc3Rkb3V0LlxuICovXG5leHBvcnQgY2xhc3MgSW9Ib3N0VGVsZW1ldHJ5U2luayBpbXBsZW1lbnRzIElUZWxlbWV0cnlTaW5rIHtcbiAgcHJpdmF0ZSBpb0hlbHBlcjogSW9IZWxwZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTdGRvdXRUZWxlbWV0cnlDbGllbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJb0hvc3RUZWxlbWV0cnlTaW5rUHJvcHMpIHtcbiAgICB0aGlzLmlvSGVscGVyID0gSW9IZWxwZXIuZnJvbUFjdGlvbkF3YXJlSW9Ib3N0KHByb3BzLmlvSG9zdCk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudFxuICAgKi9cbiAgcHVibGljIGFzeW5jIGVtaXQoZXZlbnQ6IFRlbGVtZXRyeVNjaGVtYSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3JtYXQgdGhlIGV2ZW50cyBhcyBhIEpTT04gc3RyaW5nIHdpdGggcHJldHR5IHByaW50aW5nXG4gICAgICBjb25zdCBvdXRwdXQgPSBKU09OLnN0cmluZ2lmeShldmVudCwgbnVsbCwgMik7XG5cbiAgICAgIC8vIFdyaXRlIHRvIElvSG9zdFxuICAgICAgYXdhaXQgdGhpcy5pb0hlbHBlci5kZWZhdWx0cy50cmFjZShgLS0tIFRFTEVNRVRSWSBFVkVOVCAtLS1cXG4ke291dHB1dH1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbmApO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgLy8gTmV2ZXIgdGhyb3cgZXJyb3JzLCBqdXN0IGxvZyB0aGVtIHZpYSBpb0hvc3RcbiAgICAgIGF3YWl0IHRoaXMuaW9IZWxwZXIuZGVmYXVsdHMudHJhY2UoYEZhaWxlZCB0byBhZGQgdGVsZW1ldHJ5IGV2ZW50OiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmx1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=