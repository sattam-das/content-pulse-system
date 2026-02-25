"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCI = isCI;
/**
 * Returns true if the current process is running in a CI environment
 * @returns true if the current process is running in a CI environment
 */
function isCI() {
    return process.env.CI !== undefined && process.env.CI !== 'false' && process.env.CI !== '0';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG9CQUVDO0FBTkQ7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSTtJQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQzlGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBwcm9jZXNzIGlzIHJ1bm5pbmcgaW4gYSBDSSBlbnZpcm9ubWVudFxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBwcm9jZXNzIGlzIHJ1bm5pbmcgaW4gYSBDSSBlbnZpcm9ubWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDSSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkNJICE9PSB1bmRlZmluZWQgJiYgcHJvY2Vzcy5lbnYuQ0kgIT09ICdmYWxzZScgJiYgcHJvY2Vzcy5lbnYuQ0kgIT09ICcwJztcbn1cbiJdfQ==