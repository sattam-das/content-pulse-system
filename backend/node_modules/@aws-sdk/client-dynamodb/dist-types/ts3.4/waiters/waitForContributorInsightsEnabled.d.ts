import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeContributorInsightsCommandInput } from "../commands/DescribeContributorInsightsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
export declare const waitForContributorInsightsEnabled: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeContributorInsightsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilContributorInsightsEnabled: (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeContributorInsightsCommandInput
) => Promise<WaiterResult>;
