"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTelemetrySink = void 0;
const toolkit_lib_1 = require("@aws-cdk/toolkit-lib");
const fs = require("fs-extra");
const api_private_1 = require("../../../api-private");
/**
 * A telemetry client that collects events writes them to a file
 */
class FileTelemetrySink {
    /**
     * Create a new FileTelemetryClient
     */
    constructor(props) {
        this.ioHelper = api_private_1.IoHelper.fromActionAwareIoHost(props.ioHost);
        this.logFilePath = props.logFilePath;
        if (fs.existsSync(this.logFilePath)) {
            throw new toolkit_lib_1.ToolkitError(`Telemetry file already exists at ${this.logFilePath}`);
        }
        // Create the file
        fs.ensureFileSync(this.logFilePath);
        fs.writeJsonSync(this.logFilePath, []);
    }
    /**
     * Emit an event.
     */
    async emit(event) {
        try {
            const json = fs.readJsonSync(this.logFilePath);
            json.push(event);
            fs.writeJSONSync(this.logFilePath, json, { spaces: 2 });
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
exports.FileTelemetrySink = FileTelemetrySink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1zaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRTtBQUNsRSwrQkFBK0I7QUFDL0Isc0RBQWdEO0FBbUJoRDs7R0FFRztBQUNILE1BQWEsaUJBQWlCO0lBSTVCOztPQUVHO0lBQ0gsWUFBWSxLQUE2QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFRLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUVyQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDcEMsTUFBTSxJQUFJLDBCQUFZLENBQUMsb0NBQW9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFFRCxrQkFBa0I7UUFDbEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUFDLE9BQU8sQ0FBTSxFQUFFLENBQUM7WUFDaEIsK0NBQStDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUFyQ0QsOENBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9vbGtpdEVycm9yLCB0eXBlIElJb0hvc3QgfSBmcm9tICdAYXdzLWNkay90b29sa2l0LWxpYic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgeyBJb0hlbHBlciB9IGZyb20gJy4uLy4uLy4uL2FwaS1wcml2YXRlJztcbmltcG9ydCB0eXBlIHsgVGVsZW1ldHJ5U2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB0eXBlIHsgSVRlbGVtZXRyeVNpbmsgfSBmcm9tICcuL3NpbmstaW50ZXJmYWNlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciB0aGUgRmlsZVRlbGVtZXRyeUNsaWVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVUZWxlbWV0cnlTaW5rUHJvcHMge1xuICAvKipcbiAgICogV2hlcmUgbWVzc2FnZXMgYXJlIGdvaW5nIHRvIGJlIHNlbnRcbiAgICovXG4gIHJlYWRvbmx5IGlvSG9zdDogSUlvSG9zdDtcblxuICAvKipcbiAgICogVGhlIGxvY2FsIGZpbGUgdG8gbG9nIHRlbGVtZXRyeSBkYXRhIHRvLlxuICAgKi9cbiAgcmVhZG9ubHkgbG9nRmlsZVBhdGg6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHRlbGVtZXRyeSBjbGllbnQgdGhhdCBjb2xsZWN0cyBldmVudHMgd3JpdGVzIHRoZW0gdG8gYSBmaWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlVGVsZW1ldHJ5U2luayBpbXBsZW1lbnRzIElUZWxlbWV0cnlTaW5rIHtcbiAgcHJpdmF0ZSBpb0hlbHBlcjogSW9IZWxwZXI7XG4gIHByaXZhdGUgbG9nRmlsZVBhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEZpbGVUZWxlbWV0cnlDbGllbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBGaWxlVGVsZW1ldHJ5U2lua1Byb3BzKSB7XG4gICAgdGhpcy5pb0hlbHBlciA9IElvSGVscGVyLmZyb21BY3Rpb25Bd2FyZUlvSG9zdChwcm9wcy5pb0hvc3QpO1xuICAgIHRoaXMubG9nRmlsZVBhdGggPSBwcm9wcy5sb2dGaWxlUGF0aDtcblxuICAgIGlmIChmcy5leGlzdHNTeW5jKHRoaXMubG9nRmlsZVBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVG9vbGtpdEVycm9yKGBUZWxlbWV0cnkgZmlsZSBhbHJlYWR5IGV4aXN0cyBhdCAke3RoaXMubG9nRmlsZVBhdGh9YCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBmaWxlXG4gICAgZnMuZW5zdXJlRmlsZVN5bmModGhpcy5sb2dGaWxlUGF0aCk7XG4gICAgZnMud3JpdGVKc29uU3luYyh0aGlzLmxvZ0ZpbGVQYXRoLCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBlbWl0KGV2ZW50OiBUZWxlbWV0cnlTY2hlbWEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IGZzLnJlYWRKc29uU3luYyh0aGlzLmxvZ0ZpbGVQYXRoKTtcbiAgICAgIGpzb24ucHVzaChldmVudCk7XG4gICAgICBmcy53cml0ZUpTT05TeW5jKHRoaXMubG9nRmlsZVBhdGgsIGpzb24sIHsgc3BhY2VzOiAyIH0pO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgLy8gTmV2ZXIgdGhyb3cgZXJyb3JzLCBqdXN0IGxvZyB0aGVtIHZpYSBpb0hvc3RcbiAgICAgIGF3YWl0IHRoaXMuaW9IZWxwZXIuZGVmYXVsdHMudHJhY2UoYEZhaWxlZCB0byBhZGQgdGVsZW1ldHJ5IGV2ZW50OiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmx1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=