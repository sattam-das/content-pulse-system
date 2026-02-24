import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeExportCommandInput } from "../commands/DescribeExportCommand";
import { DynamoDBClient } from "../DynamoDBClient";
/**
 *
 *  @deprecated Use waitUntilExportCompleted instead. waitForExportCompleted does not throw error in non-success cases.
 */
export declare const waitForExportCompleted: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeExportCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeExportCommand for polling.
 */
export declare const waitUntilExportCompleted: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeExportCommandInput) => Promise<WaiterResult>;
