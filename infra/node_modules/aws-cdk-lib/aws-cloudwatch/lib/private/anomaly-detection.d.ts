import { ComparisonOperator } from '../alarm';
/**
 * Determine whether this operator is an anomaly detection operator.
 *
 * @param operator the comparison operator for the alarm.
 * @returns true if the operator is an anomaly detection operator, false otherwise.
 */
export declare function isAnomalyDetectionOperator(operator?: ComparisonOperator): boolean;
