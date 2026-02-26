import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeLogGroupsRequest,
  DescribeLogGroupsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeLogGroupsCommandInput
  extends DescribeLogGroupsRequest {}
export interface DescribeLogGroupsCommandOutput
  extends DescribeLogGroupsResponse,
    __MetadataBearer {}
declare const DescribeLogGroupsCommand_base: {
  new (
    input: DescribeLogGroupsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeLogGroupsCommandInput,
    DescribeLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeLogGroupsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeLogGroupsCommandInput,
    DescribeLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeLogGroupsCommand extends DescribeLogGroupsCommand_base {
  protected static __types: {
    api: {
      input: DescribeLogGroupsRequest;
      output: DescribeLogGroupsResponse;
    };
    sdk: {
      input: DescribeLogGroupsCommandInput;
      output: DescribeLogGroupsCommandOutput;
    };
  };
}
