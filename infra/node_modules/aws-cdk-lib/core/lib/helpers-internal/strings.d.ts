/**
 * A string with variables in the form `${name}`.
 */
export declare class TemplateString {
    private readonly template;
    constructor(template: string);
    /**
     * Parses a template string with variables in the form of `${var}` and extracts the values from the input string.
     * Returns a record mapping variable names to their corresponding values.
     * @param input the input string to parse
     * @throws UnscopedValidationError if the input does not match the template
     */
    parse(input: string): Record<string, string>;
    /**
     * Returns the template interpolated with the attributes of an object passed as input.
     * Attributes that don't match any variable in the template are ignored, but all template
     * variables must be replaced.
     * @param variables an object where keys are the variable names, and values are the values to be replaced.
     */
    interpolate(variables: Record<string, string>): string;
}
