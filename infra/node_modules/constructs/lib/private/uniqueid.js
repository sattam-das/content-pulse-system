"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressOf = addressOf;
const crypto = require("crypto");
/**
 * Resources with this ID are complete hidden from the logical ID calculation.
 */
const HIDDEN_ID = 'Default';
/**
 * Calculates the construct uid based on path components.
 *
 * Components named `Default` (case sensitive) are excluded from uid calculation
 * to allow tree refactorings.
 *
 * @param components path components
 */
function addressOf(components) {
    const hash = crypto.createHash('sha1');
    for (const c of components) {
        // skip components called "Default" to enable refactorings
        if (c === HIDDEN_ID) {
            continue;
        }
        hash.update(c);
        hash.update('\n');
    }
    // prefix with "c8" so to ensure it starts with non-digit.
    return 'c8' + hash.digest('hex');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpdmF0ZS91bmlxdWVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBLDhCQVlDO0FBM0JELGlDQUFpQztBQUVqQzs7R0FFRztBQUNILE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUU1Qjs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLFVBQW9CO0lBQzVDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsS0FBSyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMzQiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxTQUFTO1FBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsMERBQTBEO0lBQzFELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG4vKipcbiAqIFJlc291cmNlcyB3aXRoIHRoaXMgSUQgYXJlIGNvbXBsZXRlIGhpZGRlbiBmcm9tIHRoZSBsb2dpY2FsIElEIGNhbGN1bGF0aW9uLlxuICovXG5jb25zdCBISURERU5fSUQgPSAnRGVmYXVsdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29uc3RydWN0IHVpZCBiYXNlZCBvbiBwYXRoIGNvbXBvbmVudHMuXG4gKlxuICogQ29tcG9uZW50cyBuYW1lZCBgRGVmYXVsdGAgKGNhc2Ugc2Vuc2l0aXZlKSBhcmUgZXhjbHVkZWQgZnJvbSB1aWQgY2FsY3VsYXRpb25cbiAqIHRvIGFsbG93IHRyZWUgcmVmYWN0b3JpbmdzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRzIHBhdGggY29tcG9uZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkcmVzc09mKGNvbXBvbmVudHM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMScpO1xuICBmb3IgKGNvbnN0IGMgb2YgY29tcG9uZW50cykge1xuICAgIC8vIHNraXAgY29tcG9uZW50cyBjYWxsZWQgXCJEZWZhdWx0XCIgdG8gZW5hYmxlIHJlZmFjdG9yaW5nc1xuICAgIGlmIChjID09PSBISURERU5fSUQpIHsgY29udGludWU7IH1cblxuICAgIGhhc2gudXBkYXRlKGMpO1xuICAgIGhhc2gudXBkYXRlKCdcXG4nKTtcbiAgfVxuXG4gIC8vIHByZWZpeCB3aXRoIFwiYzhcIiBzbyB0byBlbnN1cmUgaXQgc3RhcnRzIHdpdGggbm9uLWRpZ2l0LlxuICByZXR1cm4gJ2M4JyArIGhhc2guZGlnZXN0KCdoZXgnKTtcbn1cbiJdfQ==