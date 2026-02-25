"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_LANGUAGES = void 0;
exports.getLanguageAlias = getLanguageAlias;
exports.getLanguageFromAlias = getLanguageFromAlias;
exports.getLanguageExtensions = getLanguageExtensions;
exports.SUPPORTED_LANGUAGES = [
    { name: 'csharp', alias: 'cs', extensions: ['.cs'] },
    { name: 'fsharp', alias: 'fs', extensions: ['.fs'] },
    { name: 'go', alias: 'go', extensions: ['.go'] },
    { name: 'java', alias: 'java', extensions: ['.java'] },
    { name: 'javascript', alias: 'js', extensions: ['.js'] },
    { name: 'python', alias: 'py', extensions: ['.py'] },
    { name: 'typescript', alias: 'ts', extensions: ['.ts', '.js'] },
];
/**
 * get the language alias from the language name or alias
 *
 * @example
 * getLanguageAlias('typescript') // returns 'ts'
 * getLanguageAlias('python') // returns 'py'
 */
function getLanguageAlias(language) {
    return exports.SUPPORTED_LANGUAGES.find((l) => l.name === language || l.alias === language)?.alias;
}
/**
 * get the language name from the language alias or name
 *
 * @example
 * getLanguageFromAlias('ts') // returns 'typescript'
 * getLanguageFromAlias('py') // returns 'python'
 */
function getLanguageFromAlias(alias) {
    return exports.SUPPORTED_LANGUAGES.find((l) => l.alias === alias || l.name === alias)?.name;
}
/**
 * get the file extensions for a given language name or alias
 *
 * @example
 * getLanguageExtensions('typescript') // returns ['.ts', '.js']
 * getLanguageExtensions('python') // returns ['.py']
 */
function getLanguageExtensions(language) {
    return exports.SUPPORTED_LANGUAGES.find((l) => l.name === language || l.alias === language)?.extensions ?? [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5ndWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF1QkEsNENBRUM7QUFTRCxvREFFQztBQVNELHNEQUVDO0FBekNZLFFBQUEsbUJBQW1CLEdBQW1CO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtDQUNoRSxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsUUFBZ0I7SUFDL0MsT0FBTywyQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQzdGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixvQkFBb0IsQ0FBQyxLQUFhO0lBQ2hELE9BQU8sMkJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztBQUN0RixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsUUFBZ0I7SUFDcEQsT0FBTywyQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUN4RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGV4dGVuc2lvbnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0xBTkdVQUdFUzogTGFuZ3VhZ2VJbmZvW10gPSBbXG4gIHsgbmFtZTogJ2NzaGFycCcsIGFsaWFzOiAnY3MnLCBleHRlbnNpb25zOiBbJy5jcyddIH0sXG4gIHsgbmFtZTogJ2ZzaGFycCcsIGFsaWFzOiAnZnMnLCBleHRlbnNpb25zOiBbJy5mcyddIH0sXG4gIHsgbmFtZTogJ2dvJywgYWxpYXM6ICdnbycsIGV4dGVuc2lvbnM6IFsnLmdvJ10gfSxcbiAgeyBuYW1lOiAnamF2YScsIGFsaWFzOiAnamF2YScsIGV4dGVuc2lvbnM6IFsnLmphdmEnXSB9LFxuICB7IG5hbWU6ICdqYXZhc2NyaXB0JywgYWxpYXM6ICdqcycsIGV4dGVuc2lvbnM6IFsnLmpzJ10gfSxcbiAgeyBuYW1lOiAncHl0aG9uJywgYWxpYXM6ICdweScsIGV4dGVuc2lvbnM6IFsnLnB5J10gfSxcbiAgeyBuYW1lOiAndHlwZXNjcmlwdCcsIGFsaWFzOiAndHMnLCBleHRlbnNpb25zOiBbJy50cycsICcuanMnXSB9LFxuXTtcblxuLyoqXG4gKiBnZXQgdGhlIGxhbmd1YWdlIGFsaWFzIGZyb20gdGhlIGxhbmd1YWdlIG5hbWUgb3IgYWxpYXNcbiAqXG4gKiBAZXhhbXBsZVxuICogZ2V0TGFuZ3VhZ2VBbGlhcygndHlwZXNjcmlwdCcpIC8vIHJldHVybnMgJ3RzJ1xuICogZ2V0TGFuZ3VhZ2VBbGlhcygncHl0aG9uJykgLy8gcmV0dXJucyAncHknXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZUFsaWFzKGxhbmd1YWdlOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1VQUE9SVEVEX0xBTkdVQUdFUy5maW5kKChsKSA9PiBsLm5hbWUgPT09IGxhbmd1YWdlIHx8IGwuYWxpYXMgPT09IGxhbmd1YWdlKT8uYWxpYXM7XG59XG5cbi8qKlxuICogZ2V0IHRoZSBsYW5ndWFnZSBuYW1lIGZyb20gdGhlIGxhbmd1YWdlIGFsaWFzIG9yIG5hbWVcbiAqXG4gKiBAZXhhbXBsZVxuICogZ2V0TGFuZ3VhZ2VGcm9tQWxpYXMoJ3RzJykgLy8gcmV0dXJucyAndHlwZXNjcmlwdCdcbiAqIGdldExhbmd1YWdlRnJvbUFsaWFzKCdweScpIC8vIHJldHVybnMgJ3B5dGhvbidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlRnJvbUFsaWFzKGFsaWFzOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1VQUE9SVEVEX0xBTkdVQUdFUy5maW5kKChsKSA9PiBsLmFsaWFzID09PSBhbGlhcyB8fCBsLm5hbWUgPT09IGFsaWFzKT8ubmFtZTtcbn1cblxuLyoqXG4gKiBnZXQgdGhlIGZpbGUgZXh0ZW5zaW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZSBuYW1lIG9yIGFsaWFzXG4gKlxuICogQGV4YW1wbGVcbiAqIGdldExhbmd1YWdlRXh0ZW5zaW9ucygndHlwZXNjcmlwdCcpIC8vIHJldHVybnMgWycudHMnLCAnLmpzJ11cbiAqIGdldExhbmd1YWdlRXh0ZW5zaW9ucygncHl0aG9uJykgLy8gcmV0dXJucyBbJy5weSddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZUV4dGVuc2lvbnMobGFuZ3VhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFNVUFBPUlRFRF9MQU5HVUFHRVMuZmluZCgobCkgPT4gbC5uYW1lID09PSBsYW5ndWFnZSB8fCBsLmFsaWFzID09PSBsYW5ndWFnZSk/LmV4dGVuc2lvbnMgPz8gW107XG59XG4iXX0=