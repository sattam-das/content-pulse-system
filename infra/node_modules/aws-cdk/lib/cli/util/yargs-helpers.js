"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCI = void 0;
exports.yargsNegativeAlias = yargsNegativeAlias;
exports.cliVersion = cliVersion;
exports.browserForPlatform = browserForPlatform;
const version_1 = require("../version");
var ci_1 = require("../util/ci");
Object.defineProperty(exports, "isCI", { enumerable: true, get: function () { return ci_1.isCI; } });
/**
 * yargs middleware to negate an option if a negative alias is provided
 * E.g. `-R` will imply `--rollback=false`
 *
 * @param optionToNegate - The name of the option to negate, e.g. `rollback`
 * @param negativeAlias - The alias that should negate the option, e.g. `R`
 * @returns a middleware function that can be passed to yargs
 */
function yargsNegativeAlias(negativeAlias, optionToNegate) {
    return (argv) => {
        // if R in argv && argv[R]
        // then argv[rollback] = false
        if (negativeAlias in argv && argv[negativeAlias]) {
            argv[optionToNegate] = false;
        }
        return argv;
    };
}
/**
 * Returns the current version of the CLI
 * @returns the current version of the CLI
 */
function cliVersion() {
    return (0, version_1.versionWithBuild)();
}
/**
 * Returns the default browser command for the current platform
 * @returns the default browser command for the current platform
 */
function browserForPlatform() {
    switch (process.platform) {
        case 'darwin':
            return 'open %u';
        case 'win32':
            return 'start %u';
        default:
            return 'xdg-open %u';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFyZ3MtaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInlhcmdzLWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsZ0RBWUM7QUFNRCxnQ0FFQztBQU1ELGdEQVNDO0FBL0NELHdDQUE4QztBQUU5QyxpQ0FBa0M7QUFBekIsMEZBQUEsSUFBSSxPQUFBO0FBRWI7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLGtCQUFrQixDQUNoQyxhQUFnQixFQUNoQixjQUFpQjtJQUVqQixPQUFPLENBQUMsSUFBTyxFQUFFLEVBQUU7UUFDakIsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLElBQUEsMEJBQWdCLEdBQUUsQ0FBQztBQUM1QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0Isa0JBQWtCO0lBQ2hDLFFBQVEsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLEtBQUssUUFBUTtZQUNYLE9BQU8sU0FBUyxDQUFDO1FBQ25CLEtBQUssT0FBTztZQUNWLE9BQU8sVUFBVSxDQUFDO1FBQ3BCO1lBQ0UsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uV2l0aEJ1aWxkIH0gZnJvbSAnLi4vdmVyc2lvbic7XG5cbmV4cG9ydCB7IGlzQ0kgfSBmcm9tICcuLi91dGlsL2NpJztcblxuLyoqXG4gKiB5YXJncyBtaWRkbGV3YXJlIHRvIG5lZ2F0ZSBhbiBvcHRpb24gaWYgYSBuZWdhdGl2ZSBhbGlhcyBpcyBwcm92aWRlZFxuICogRS5nLiBgLVJgIHdpbGwgaW1wbHkgYC0tcm9sbGJhY2s9ZmFsc2VgXG4gKlxuICogQHBhcmFtIG9wdGlvblRvTmVnYXRlIC0gVGhlIG5hbWUgb2YgdGhlIG9wdGlvbiB0byBuZWdhdGUsIGUuZy4gYHJvbGxiYWNrYFxuICogQHBhcmFtIG5lZ2F0aXZlQWxpYXMgLSBUaGUgYWxpYXMgdGhhdCBzaG91bGQgbmVnYXRlIHRoZSBvcHRpb24sIGUuZy4gYFJgXG4gKiBAcmV0dXJucyBhIG1pZGRsZXdhcmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHlhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB5YXJnc05lZ2F0aXZlQWxpYXM8VCBleHRlbmRzIHsgW3ggaW4gUyB8IExdOiBib29sZWFuIHwgdW5kZWZpbmVkIH0sIFMgZXh0ZW5kcyBzdHJpbmcsIEwgZXh0ZW5kcyBzdHJpbmc+KFxuICBuZWdhdGl2ZUFsaWFzOiBTLFxuICBvcHRpb25Ub05lZ2F0ZTogTCxcbik6IChhcmd2OiBUKSA9PiBUIHtcbiAgcmV0dXJuIChhcmd2OiBUKSA9PiB7XG4gICAgLy8gaWYgUiBpbiBhcmd2ICYmIGFyZ3ZbUl1cbiAgICAvLyB0aGVuIGFyZ3Zbcm9sbGJhY2tdID0gZmFsc2VcbiAgICBpZiAobmVnYXRpdmVBbGlhcyBpbiBhcmd2ICYmIGFyZ3ZbbmVnYXRpdmVBbGlhc10pIHtcbiAgICAgIChhcmd2IGFzIGFueSlbb3B0aW9uVG9OZWdhdGVdID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBhcmd2O1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgQ0xJXG4gKiBAcmV0dXJucyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBDTElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZlcnNpb25XaXRoQnVpbGQoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGJyb3dzZXIgY29tbWFuZCBmb3IgdGhlIGN1cnJlbnQgcGxhdGZvcm1cbiAqIEByZXR1cm5zIHRoZSBkZWZhdWx0IGJyb3dzZXIgY29tbWFuZCBmb3IgdGhlIGN1cnJlbnQgcGxhdGZvcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJGb3JQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcbiAgICBjYXNlICdkYXJ3aW4nOlxuICAgICAgcmV0dXJuICdvcGVuICV1JztcbiAgICBjYXNlICd3aW4zMic6XG4gICAgICByZXR1cm4gJ3N0YXJ0ICV1JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICd4ZGctb3BlbiAldSc7XG4gIH1cbn1cbiJdfQ==