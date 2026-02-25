import { IntegrationPattern } from '../../../aws-stepfunctions';
/**
 * Verifies that a validation pattern is supported for a service integration
 *
 */
export declare function validatePatternSupported(integrationPattern: IntegrationPattern, supportedPatterns: IntegrationPattern[]): void;
export declare function integrationResourceArn(service: string, api: string, integrationPattern?: IntegrationPattern): string;
/**
 * Determines if the indicated string is an encoded JSON path or JSONata expression
 */
export declare function isJsonPathOrJsonataExpression(value: string): boolean;
