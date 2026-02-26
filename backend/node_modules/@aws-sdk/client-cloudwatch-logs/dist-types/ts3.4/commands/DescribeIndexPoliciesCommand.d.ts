import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeIndexPoliciesRequest,
  DescribeIndexPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeIndexPoliciesCommandInput
  extends DescribeIndexPoliciesRequest {}
export interface DescribeIndexPoliciesCommandOutput
  extends DescribeIndexPoliciesResponse,
    __MetadataBearer {}
declare const DescribeIndexPoliciesCommand_base: {
  new (
    input: DescribeIndexPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIndexPoliciesCommandInput,
    DescribeIndexPoliciesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeIndexPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIndexPoliciesCommandInput,
    DescribeIndexPoliciesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeIndexPoliciesCommand extends DescribeIndexPoliciesCommand_base {
  protected static __types: {
    api: {
      input: DescribeIndexPoliciesRequest;
      output: DescribeIndexPoliciesResponse;
    };
    sdk: {
      input: DescribeIndexPoliciesCommandInput;
      output: DescribeIndexPoliciesCommandOutput;
    };
  };
}
