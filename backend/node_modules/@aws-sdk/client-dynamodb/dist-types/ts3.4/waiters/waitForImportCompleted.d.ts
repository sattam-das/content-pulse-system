import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeImportCommandInput } from "../commands/DescribeImportCommand";
import { DynamoDBClient } from "../DynamoDBClient";
export declare const waitForImportCompleted: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeImportCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilImportCompleted: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeImportCommandInput
) => Promise<WaiterResult>;
