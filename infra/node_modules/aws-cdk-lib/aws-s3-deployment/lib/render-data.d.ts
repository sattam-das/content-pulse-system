export interface Content {
    readonly text: string;
    readonly markers: Record<string, any>;
}
/**
 * Renders the given string data as deployable content with markers substituted
 * for all tokens.
 *
 * @param data The input data
 * @returns The markered text (`text`) and a map that maps marker names to their
 * values (`markers`).
 */
export declare function renderData(data: string): Content;
