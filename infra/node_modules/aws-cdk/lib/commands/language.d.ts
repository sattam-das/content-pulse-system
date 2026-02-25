export interface LanguageInfo {
    name: string;
    alias: string;
    extensions: string[];
}
export declare const SUPPORTED_LANGUAGES: LanguageInfo[];
/**
 * get the language alias from the language name or alias
 *
 * @example
 * getLanguageAlias('typescript') // returns 'ts'
 * getLanguageAlias('python') // returns 'py'
 */
export declare function getLanguageAlias(language: string): string | undefined;
/**
 * get the language name from the language alias or name
 *
 * @example
 * getLanguageFromAlias('ts') // returns 'typescript'
 * getLanguageFromAlias('py') // returns 'python'
 */
export declare function getLanguageFromAlias(alias: string): string | undefined;
/**
 * get the file extensions for a given language name or alias
 *
 * @example
 * getLanguageExtensions('typescript') // returns ['.ts', '.js']
 * getLanguageExtensions('python') // returns ['.py']
 */
export declare function getLanguageExtensions(language: string): string[];
