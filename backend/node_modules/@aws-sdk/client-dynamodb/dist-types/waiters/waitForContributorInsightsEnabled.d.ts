import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeContributorInsightsCommandInput } from "../commands/DescribeContributorInsightsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
/**
 *
 *  @deprecated Use waitUntilContributorInsightsEnabled instead. waitForContributorInsightsEnabled does not throw error in non-success cases.
 */
export declare const waitForContributorInsightsEnabled: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeContributorInsightsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeContributorInsightsCommand for polling.
 */
export declare const waitUntilContributorInsightsEnabled: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeContributorInsightsCommandInput) => Promise<WaiterResult>;
