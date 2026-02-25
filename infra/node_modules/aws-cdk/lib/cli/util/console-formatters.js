"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAsBanner = formatAsBanner;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stripAnsi = require('strip-ansi');
/**
 * Returns a set of strings when printed on the console produces a banner msg. The message is in the following format -
 * ********************
 * *** msg line x   ***
 * *** msg line xyz ***
 * ********************
 *
 * Spec:
 * - The width of every line is equal, dictated by the longest message string
 * - The first and last lines are '*'s for the full length of the line
 * - Each line in between is prepended with '*** ' and appended with ' ***'
 * - The text is indented left, i.e. whitespace is right-padded when the length is shorter than the longest.
 *
 * @param msgs - array of strings containing the message lines to be printed in the banner. Returns empty string if array
 * is empty.
 * @returns array of strings containing the message formatted as a banner
 */
function formatAsBanner(msgs) {
    const printLen = (str) => stripAnsi(str).length;
    if (msgs.length === 0) {
        return [];
    }
    const leftPad = '*** ';
    const rightPad = ' ***';
    const bannerWidth = printLen(leftPad) + printLen(rightPad) +
        msgs.reduce((acc, msg) => Math.max(acc, printLen(msg)), 0);
    const bannerLines = [];
    bannerLines.push('*'.repeat(bannerWidth));
    // Improvement: If any 'msg' is wider than the terminal width, wrap message across lines.
    msgs.forEach((msg) => {
        const padding = ' '.repeat(bannerWidth - (printLen(msg) + printLen(leftPad) + printLen(rightPad)));
        bannerLines.push(''.concat(leftPad, msg, padding, rightPad));
    });
    bannerLines.push('*'.repeat(bannerWidth));
    return bannerLines;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1mb3JtYXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc29sZS1mb3JtYXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBb0JBLHdDQXVCQztBQTNDRCxpRUFBaUU7QUFDakUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXhDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLElBQWM7SUFDM0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN2QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDeEIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTdELE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUNqQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUxQyx5RkFBeUY7SUFDekYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ25CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5cbi8qKlxuICogUmV0dXJucyBhIHNldCBvZiBzdHJpbmdzIHdoZW4gcHJpbnRlZCBvbiB0aGUgY29uc29sZSBwcm9kdWNlcyBhIGJhbm5lciBtc2cuIFRoZSBtZXNzYWdlIGlzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0IC1cbiAqICoqKioqKioqKioqKioqKioqKioqXG4gKiAqKiogbXNnIGxpbmUgeCAgICoqKlxuICogKioqIG1zZyBsaW5lIHh5eiAqKipcbiAqICoqKioqKioqKioqKioqKioqKioqXG4gKlxuICogU3BlYzpcbiAqIC0gVGhlIHdpZHRoIG9mIGV2ZXJ5IGxpbmUgaXMgZXF1YWwsIGRpY3RhdGVkIGJ5IHRoZSBsb25nZXN0IG1lc3NhZ2Ugc3RyaW5nXG4gKiAtIFRoZSBmaXJzdCBhbmQgbGFzdCBsaW5lcyBhcmUgJyoncyBmb3IgdGhlIGZ1bGwgbGVuZ3RoIG9mIHRoZSBsaW5lXG4gKiAtIEVhY2ggbGluZSBpbiBiZXR3ZWVuIGlzIHByZXBlbmRlZCB3aXRoICcqKiogJyBhbmQgYXBwZW5kZWQgd2l0aCAnICoqKidcbiAqIC0gVGhlIHRleHQgaXMgaW5kZW50ZWQgbGVmdCwgaS5lLiB3aGl0ZXNwYWNlIGlzIHJpZ2h0LXBhZGRlZCB3aGVuIHRoZSBsZW5ndGggaXMgc2hvcnRlciB0aGFuIHRoZSBsb25nZXN0LlxuICpcbiAqIEBwYXJhbSBtc2dzIC0gYXJyYXkgb2Ygc3RyaW5ncyBjb250YWluaW5nIHRoZSBtZXNzYWdlIGxpbmVzIHRvIGJlIHByaW50ZWQgaW4gdGhlIGJhbm5lci4gUmV0dXJucyBlbXB0eSBzdHJpbmcgaWYgYXJyYXlcbiAqIGlzIGVtcHR5LlxuICogQHJldHVybnMgYXJyYXkgb2Ygc3RyaW5ncyBjb250YWluaW5nIHRoZSBtZXNzYWdlIGZvcm1hdHRlZCBhcyBhIGJhbm5lclxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QXNCYW5uZXIobXNnczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHByaW50TGVuID0gKHN0cjogc3RyaW5nKSA9PiBzdHJpcEFuc2koc3RyKS5sZW5ndGg7XG5cbiAgaWYgKG1zZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVmdFBhZCA9ICcqKiogJztcbiAgY29uc3QgcmlnaHRQYWQgPSAnICoqKic7XG4gIGNvbnN0IGJhbm5lcldpZHRoID0gcHJpbnRMZW4obGVmdFBhZCkgKyBwcmludExlbihyaWdodFBhZCkgK1xuICAgIG1zZ3MucmVkdWNlKChhY2MsIG1zZykgPT4gTWF0aC5tYXgoYWNjLCBwcmludExlbihtc2cpKSwgMCk7XG5cbiAgY29uc3QgYmFubmVyTGluZXM6IHN0cmluZ1tdID0gW107XG4gIGJhbm5lckxpbmVzLnB1c2goJyonLnJlcGVhdChiYW5uZXJXaWR0aCkpO1xuXG4gIC8vIEltcHJvdmVtZW50OiBJZiBhbnkgJ21zZycgaXMgd2lkZXIgdGhhbiB0aGUgdGVybWluYWwgd2lkdGgsIHdyYXAgbWVzc2FnZSBhY3Jvc3MgbGluZXMuXG4gIG1zZ3MuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgY29uc3QgcGFkZGluZyA9ICcgJy5yZXBlYXQoYmFubmVyV2lkdGggLSAocHJpbnRMZW4obXNnKSArIHByaW50TGVuKGxlZnRQYWQpICsgcHJpbnRMZW4ocmlnaHRQYWQpKSk7XG4gICAgYmFubmVyTGluZXMucHVzaCgnJy5jb25jYXQobGVmdFBhZCwgbXNnLCBwYWRkaW5nLCByaWdodFBhZCkpO1xuICB9KTtcblxuICBiYW5uZXJMaW5lcy5wdXNoKCcqJy5yZXBlYXQoYmFubmVyV2lkdGgpKTtcbiAgcmV0dXJuIGJhbm5lckxpbmVzO1xufVxuIl19