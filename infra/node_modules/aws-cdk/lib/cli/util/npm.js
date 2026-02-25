"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execNpmView = execNpmView;
const child_process_1 = require("child_process");
const util_1 = require("util");
const toolkit_lib_1 = require("@aws-cdk/toolkit-lib");
const exec = (0, util_1.promisify)(child_process_1.exec);
/* c8 ignore start */
async function execNpmView(currentVersion) {
    try {
        // eslint-disable-next-line @cdklabs/promiseall-no-unbounded-parallelism
        const [latestResult, currentResult] = await Promise.all([
            exec('npm view aws-cdk@latest version', { timeout: 3000 }),
            exec(`npm view aws-cdk@${currentVersion} name version deprecated --json`, { timeout: 3000 }),
        ]);
        if (latestResult.stderr && latestResult.stderr.trim().length > 0) {
            throw new toolkit_lib_1.ToolkitError(`npm view command for latest version failed: ${latestResult.stderr.trim()}`);
        }
        if (currentResult.stderr && currentResult.stderr.trim().length > 0) {
            throw new toolkit_lib_1.ToolkitError(`npm view command for current version failed: ${currentResult.stderr.trim()}`);
        }
        const latestVersion = latestResult.stdout;
        const currentInfo = JSON.parse(currentResult.stdout);
        return {
            latestVersion: latestVersion,
            deprecated: currentInfo.deprecated,
        };
    }
    catch (err) {
        throw err;
    }
}
/* c8 ignore stop */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esa0NBeUJDO0FBaENELGlEQUE4QztBQUM5QywrQkFBaUM7QUFDakMsc0RBQW9EO0FBRXBELE1BQU0sSUFBSSxHQUFHLElBQUEsZ0JBQVMsRUFBQyxvQkFBSyxDQUFDLENBQUM7QUFFOUIscUJBQXFCO0FBQ2QsS0FBSyxVQUFVLFdBQVcsQ0FBQyxjQUFzQjtJQUN0RCxJQUFJLENBQUM7UUFDSCx3RUFBd0U7UUFDeEUsTUFBTSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxvQkFBb0IsY0FBYyxpQ0FBaUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM3RixDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDakUsTUFBTSxJQUFJLDBCQUFZLENBQUMsK0NBQStDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7UUFDRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbkUsTUFBTSxJQUFJLDBCQUFZLENBQUMsZ0RBQWdELGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hHLENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJELE9BQU87WUFDTCxhQUFhLEVBQUUsYUFBYTtZQUM1QixVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFBQyxPQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxDQUFDO0lBQ1osQ0FBQztBQUNILENBQUM7QUFDRCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIGFzIF9leGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFRvb2xraXRFcnJvciB9IGZyb20gJ0Bhd3MtY2RrL3Rvb2xraXQtbGliJztcblxuY29uc3QgZXhlYyA9IHByb21pc2lmeShfZXhlYyk7XG5cbi8qIGM4IGlnbm9yZSBzdGFydCAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNOcG1WaWV3KGN1cnJlbnRWZXJzaW9uOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGNka2xhYnMvcHJvbWlzZWFsbC1uby11bmJvdW5kZWQtcGFyYWxsZWxpc21cbiAgICBjb25zdCBbbGF0ZXN0UmVzdWx0LCBjdXJyZW50UmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGV4ZWMoJ25wbSB2aWV3IGF3cy1jZGtAbGF0ZXN0IHZlcnNpb24nLCB7IHRpbWVvdXQ6IDMwMDAgfSksXG4gICAgICBleGVjKGBucG0gdmlldyBhd3MtY2RrQCR7Y3VycmVudFZlcnNpb259IG5hbWUgdmVyc2lvbiBkZXByZWNhdGVkIC0tanNvbmAsIHsgdGltZW91dDogMzAwMCB9KSxcbiAgICBdKTtcblxuICAgIGlmIChsYXRlc3RSZXN1bHQuc3RkZXJyICYmIGxhdGVzdFJlc3VsdC5zdGRlcnIudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBUb29sa2l0RXJyb3IoYG5wbSB2aWV3IGNvbW1hbmQgZm9yIGxhdGVzdCB2ZXJzaW9uIGZhaWxlZDogJHtsYXRlc3RSZXN1bHQuc3RkZXJyLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRSZXN1bHQuc3RkZXJyICYmIGN1cnJlbnRSZXN1bHQuc3RkZXJyLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgVG9vbGtpdEVycm9yKGBucG0gdmlldyBjb21tYW5kIGZvciBjdXJyZW50IHZlcnNpb24gZmFpbGVkOiAke2N1cnJlbnRSZXN1bHQuc3RkZXJyLnRyaW0oKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uID0gbGF0ZXN0UmVzdWx0LnN0ZG91dDtcbiAgICBjb25zdCBjdXJyZW50SW5mbyA9IEpTT04ucGFyc2UoY3VycmVudFJlc3VsdC5zdGRvdXQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdGVzdFZlcnNpb246IGxhdGVzdFZlcnNpb24sXG4gICAgICBkZXByZWNhdGVkOiBjdXJyZW50SW5mby5kZXByZWNhdGVkLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuLyogYzggaWdub3JlIHN0b3AgKi9cbiJdfQ==