import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeFieldIndexesRequest,
  DescribeFieldIndexesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeFieldIndexesCommandInput
  extends DescribeFieldIndexesRequest {}
export interface DescribeFieldIndexesCommandOutput
  extends DescribeFieldIndexesResponse,
    __MetadataBearer {}
declare const DescribeFieldIndexesCommand_base: {
  new (
    input: DescribeFieldIndexesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeFieldIndexesCommandInput,
    DescribeFieldIndexesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeFieldIndexesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeFieldIndexesCommandInput,
    DescribeFieldIndexesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeFieldIndexesCommand extends DescribeFieldIndexesCommand_base {
  protected static __types: {
    api: {
      input: DescribeFieldIndexesRequest;
      output: DescribeFieldIndexesResponse;
    };
    sdk: {
      input: DescribeFieldIndexesCommandInput;
      output: DescribeFieldIndexesCommandOutput;
    };
  };
}
