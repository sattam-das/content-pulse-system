import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeConfigurationTemplatesRequest,
  DescribeConfigurationTemplatesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeConfigurationTemplatesCommandInput
  extends DescribeConfigurationTemplatesRequest {}
export interface DescribeConfigurationTemplatesCommandOutput
  extends DescribeConfigurationTemplatesResponse,
    __MetadataBearer {}
declare const DescribeConfigurationTemplatesCommand_base: {
  new (
    input: DescribeConfigurationTemplatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeConfigurationTemplatesCommandInput,
    DescribeConfigurationTemplatesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeConfigurationTemplatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeConfigurationTemplatesCommandInput,
    DescribeConfigurationTemplatesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeConfigurationTemplatesCommand extends DescribeConfigurationTemplatesCommand_base {
  protected static __types: {
    api: {
      input: DescribeConfigurationTemplatesRequest;
      output: DescribeConfigurationTemplatesResponse;
    };
    sdk: {
      input: DescribeConfigurationTemplatesCommandInput;
      output: DescribeConfigurationTemplatesCommandOutput;
    };
  };
}
