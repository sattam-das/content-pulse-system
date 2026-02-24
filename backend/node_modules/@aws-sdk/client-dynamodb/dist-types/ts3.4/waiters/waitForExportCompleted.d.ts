import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeExportCommandInput } from "../commands/DescribeExportCommand";
import { DynamoDBClient } from "../DynamoDBClient";
export declare const waitForExportCompleted: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeExportCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilExportCompleted: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeExportCommandInput
) => Promise<WaiterResult>;
