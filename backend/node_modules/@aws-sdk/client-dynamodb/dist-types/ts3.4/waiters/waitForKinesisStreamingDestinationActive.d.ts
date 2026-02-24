import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeKinesisStreamingDestinationCommandInput } from "../commands/DescribeKinesisStreamingDestinationCommand";
import { DynamoDBClient } from "../DynamoDBClient";
export declare const waitForKinesisStreamingDestinationActive: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeKinesisStreamingDestinationCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilKinesisStreamingDestinationActive: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeKinesisStreamingDestinationCommandInput
) => Promise<WaiterResult>;
