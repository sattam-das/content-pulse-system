import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeImportCommandInput } from "../commands/DescribeImportCommand";
import { DynamoDBClient } from "../DynamoDBClient";
/**
 *
 *  @deprecated Use waitUntilImportCompleted instead. waitForImportCompleted does not throw error in non-success cases.
 */
export declare const waitForImportCompleted: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeImportCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImportCommand for polling.
 */
export declare const waitUntilImportCompleted: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeImportCommandInput) => Promise<WaiterResult>;
