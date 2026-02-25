"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shell = shell;
const child_process = require("child_process");
const toolkit_lib_1 = require("@aws-cdk/toolkit-lib");
const chalk = require("chalk");
/**
 * OS helpers
 *
 * Shell function which both prints to stdout and collects the output into a
 * string.
 */
async function shell(ioHelper, command) {
    const commandLine = renderCommandLine(command);
    await ioHelper.defaults.debug(`Executing ${chalk.blue(commandLine)}`);
    const child = child_process.spawn(command[0], renderArguments(command.slice(1)), {
        // Need this for Windows where we want .cmd and .bat to be found as well.
        shell: true,
        stdio: ['ignore', 'pipe', 'inherit'],
    });
    return new Promise((resolve, reject) => {
        const stdout = new Array();
        // Both write to stdout and collect
        child.stdout.on('data', chunk => {
            process.stdout.write(chunk);
            stdout.push(chunk);
        });
        child.once('error', reject);
        child.once('exit', code => {
            if (code === 0) {
                resolve(Buffer.from(stdout).toString('utf-8'));
            }
            else {
                reject(new toolkit_lib_1.ToolkitError(`${commandLine} exited with error code ${code}`));
            }
        });
    });
}
function renderCommandLine(cmd) {
    return renderArguments(cmd).join(' ');
}
/**
 * Render the arguments to include escape characters for each platform.
 */
function renderArguments(cmd) {
    if (process.platform !== 'win32') {
        return doRender(cmd, hasAnyChars(' ', '\\', '!', '"', "'", '&', '$'), posixEscape);
    }
    else {
        return doRender(cmd, hasAnyChars(' ', '"', '&', '^', '%'), windowsEscape);
    }
}
/**
 * Render a UNIX command line
 */
function doRender(cmd, needsEscaping, doEscape) {
    return cmd.map(x => needsEscaping(x) ? doEscape(x) : x);
}
/**
 * Return a predicate that checks if a string has any of the indicated chars in it
 */
function hasAnyChars(...chars) {
    return (str) => {
        return chars.some(c => str.indexOf(c) !== -1);
    };
}
/**
 * Escape a shell argument for POSIX shells
 *
 * Wrapping in single quotes and escaping single quotes inside will do it for us.
 */
function posixEscape(x) {
    // Turn ' -> '"'"'
    x = x.replace(/'/g, "'\"'\"'");
    return `'${x}'`;
}
/**
 * Escape a shell argument for cmd.exe
 *
 * This is how to do it right, but I'm not following everything:
 *
 * https://blogs.msdn.microsoft.com/twistylittlepassagesallalike/2011/04/23/everyone-quotes-command-line-arguments-the-wrong-way/
 */
function windowsEscape(x) {
    // First surround by double quotes, ignore the part about backslashes
    x = `"${x}"`;
    // Now escape all special characters
    const shellMeta = new Set(['"', '&', '^', '%']);
    return x.split('').map(c => shellMeta.has(x) ? '^' + c : c).join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLHNCQTRCQztBQXZDRCwrQ0FBK0M7QUFDL0Msc0RBQW9EO0FBQ3BELCtCQUErQjtBQUcvQjs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxLQUFLLENBQUMsUUFBa0IsRUFBRSxPQUFpQjtJQUMvRCxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEUsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMvRSx5RUFBeUU7UUFDekUsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQUNyQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFFaEMsbUNBQW1DO1FBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLDBCQUFZLENBQUMsR0FBRyxXQUFXLDJCQUEyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxHQUFhO0lBQ3RDLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxHQUFhO0lBQ3BDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUUsQ0FBQztBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsUUFBUSxDQUFDLEdBQWEsRUFBRSxhQUFxQyxFQUFFLFFBQStCO0lBQ3JHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxHQUFHLEtBQWU7SUFDckMsT0FBTyxDQUFDLEdBQVcsRUFBRSxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDNUIsa0JBQWtCO0lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDOUIscUVBQXFFO0lBQ3JFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2Isb0NBQW9DO0lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgVG9vbGtpdEVycm9yIH0gZnJvbSAnQGF3cy1jZGsvdG9vbGtpdC1saWInO1xuaW1wb3J0ICogYXMgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHR5cGUgeyBJb0hlbHBlciB9IGZyb20gJy4uLy4uL2FwaS1wcml2YXRlJztcblxuLyoqXG4gKiBPUyBoZWxwZXJzXG4gKlxuICogU2hlbGwgZnVuY3Rpb24gd2hpY2ggYm90aCBwcmludHMgdG8gc3Rkb3V0IGFuZCBjb2xsZWN0cyB0aGUgb3V0cHV0IGludG8gYVxuICogc3RyaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hlbGwoaW9IZWxwZXI6IElvSGVscGVyLCBjb21tYW5kOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGNvbW1hbmRMaW5lID0gcmVuZGVyQ29tbWFuZExpbmUoY29tbWFuZCk7XG4gIGF3YWl0IGlvSGVscGVyLmRlZmF1bHRzLmRlYnVnKGBFeGVjdXRpbmcgJHtjaGFsay5ibHVlKGNvbW1hbmRMaW5lKX1gKTtcbiAgY29uc3QgY2hpbGQgPSBjaGlsZF9wcm9jZXNzLnNwYXduKGNvbW1hbmRbMF0sIHJlbmRlckFyZ3VtZW50cyhjb21tYW5kLnNsaWNlKDEpKSwge1xuICAgIC8vIE5lZWQgdGhpcyBmb3IgV2luZG93cyB3aGVyZSB3ZSB3YW50IC5jbWQgYW5kIC5iYXQgdG8gYmUgZm91bmQgYXMgd2VsbC5cbiAgICBzaGVsbDogdHJ1ZSxcbiAgICBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10sXG4gIH0pO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzdGRvdXQgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgLy8gQm90aCB3cml0ZSB0byBzdGRvdXQgYW5kIGNvbGxlY3RcbiAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCBjaHVuayA9PiB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShjaHVuayk7XG4gICAgICBzdGRvdXQucHVzaChjaHVuayk7XG4gICAgfSk7XG5cbiAgICBjaGlsZC5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG5cbiAgICBjaGlsZC5vbmNlKCdleGl0JywgY29kZSA9PiB7XG4gICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKEJ1ZmZlci5mcm9tKHN0ZG91dCkudG9TdHJpbmcoJ3V0Zi04JykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUb29sa2l0RXJyb3IoYCR7Y29tbWFuZExpbmV9IGV4aXRlZCB3aXRoIGVycm9yIGNvZGUgJHtjb2RlfWApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbW1hbmRMaW5lKGNtZDogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHJlbmRlckFyZ3VtZW50cyhjbWQpLmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGFyZ3VtZW50cyB0byBpbmNsdWRlIGVzY2FwZSBjaGFyYWN0ZXJzIGZvciBlYWNoIHBsYXRmb3JtLlxuICovXG5mdW5jdGlvbiByZW5kZXJBcmd1bWVudHMoY21kOiBzdHJpbmdbXSkge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuICAgIHJldHVybiBkb1JlbmRlcihjbWQsIGhhc0FueUNoYXJzKCcgJywgJ1xcXFwnLCAnIScsICdcIicsIFwiJ1wiLCAnJicsICckJyksIHBvc2l4RXNjYXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG9SZW5kZXIoY21kLCBoYXNBbnlDaGFycygnICcsICdcIicsICcmJywgJ14nLCAnJScpLCB3aW5kb3dzRXNjYXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbmRlciBhIFVOSVggY29tbWFuZCBsaW5lXG4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKGNtZDogc3RyaW5nW10sIG5lZWRzRXNjYXBpbmc6ICh4OiBzdHJpbmcpID0+IGJvb2xlYW4sIGRvRXNjYXBlOiAoeDogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBjbWQubWFwKHggPT4gbmVlZHNFc2NhcGluZyh4KSA/IGRvRXNjYXBlKHgpIDogeCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcHJlZGljYXRlIHRoYXQgY2hlY2tzIGlmIGEgc3RyaW5nIGhhcyBhbnkgb2YgdGhlIGluZGljYXRlZCBjaGFycyBpbiBpdFxuICovXG5mdW5jdGlvbiBoYXNBbnlDaGFycyguLi5jaGFyczogc3RyaW5nW10pOiAoeDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjaGFycy5zb21lKGMgPT4gc3RyLmluZGV4T2YoYykgIT09IC0xKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzaGVsbCBhcmd1bWVudCBmb3IgUE9TSVggc2hlbGxzXG4gKlxuICogV3JhcHBpbmcgaW4gc2luZ2xlIHF1b3RlcyBhbmQgZXNjYXBpbmcgc2luZ2xlIHF1b3RlcyBpbnNpZGUgd2lsbCBkbyBpdCBmb3IgdXMuXG4gKi9cbmZ1bmN0aW9uIHBvc2l4RXNjYXBlKHg6IHN0cmluZykge1xuICAvLyBUdXJuICcgLT4gJ1wiJ1wiJ1xuICB4ID0geC5yZXBsYWNlKC8nL2csIFwiJ1xcXCInXFxcIidcIik7XG4gIHJldHVybiBgJyR7eH0nYDtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzaGVsbCBhcmd1bWVudCBmb3IgY21kLmV4ZVxuICpcbiAqIFRoaXMgaXMgaG93IHRvIGRvIGl0IHJpZ2h0LCBidXQgSSdtIG5vdCBmb2xsb3dpbmcgZXZlcnl0aGluZzpcbiAqXG4gKiBodHRwczovL2Jsb2dzLm1zZG4ubWljcm9zb2Z0LmNvbS90d2lzdHlsaXR0bGVwYXNzYWdlc2FsbGFsaWtlLzIwMTEvMDQvMjMvZXZlcnlvbmUtcXVvdGVzLWNvbW1hbmQtbGluZS1hcmd1bWVudHMtdGhlLXdyb25nLXdheS9cbiAqL1xuZnVuY3Rpb24gd2luZG93c0VzY2FwZSh4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBGaXJzdCBzdXJyb3VuZCBieSBkb3VibGUgcXVvdGVzLCBpZ25vcmUgdGhlIHBhcnQgYWJvdXQgYmFja3NsYXNoZXNcbiAgeCA9IGBcIiR7eH1cImA7XG4gIC8vIE5vdyBlc2NhcGUgYWxsIHNwZWNpYWwgY2hhcmFjdGVyc1xuICBjb25zdCBzaGVsbE1ldGEgPSBuZXcgU2V0PHN0cmluZz4oWydcIicsICcmJywgJ14nLCAnJSddKTtcbiAgcmV0dXJuIHguc3BsaXQoJycpLm1hcChjID0+IHNoZWxsTWV0YS5oYXMoeCkgPyAnXicgKyBjIDogYykuam9pbignJyk7XG59XG4iXX0=