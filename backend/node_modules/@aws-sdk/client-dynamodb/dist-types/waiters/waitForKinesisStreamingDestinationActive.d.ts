import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeKinesisStreamingDestinationCommandInput } from "../commands/DescribeKinesisStreamingDestinationCommand";
import { DynamoDBClient } from "../DynamoDBClient";
/**
 *
 *  @deprecated Use waitUntilKinesisStreamingDestinationActive instead. waitForKinesisStreamingDestinationActive does not throw error in non-success cases.
 */
export declare const waitForKinesisStreamingDestinationActive: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeKinesisStreamingDestinationCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeKinesisStreamingDestinationCommand for polling.
 */
export declare const waitUntilKinesisStreamingDestinationActive: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeKinesisStreamingDestinationCommandInput) => Promise<WaiterResult>;
