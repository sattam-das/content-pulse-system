import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  TestTransformerRequest,
  TestTransformerResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface TestTransformerCommandInput extends TestTransformerRequest {}
export interface TestTransformerCommandOutput
  extends TestTransformerResponse,
    __MetadataBearer {}
declare const TestTransformerCommand_base: {
  new (
    input: TestTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TestTransformerCommandInput,
    TestTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: TestTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TestTransformerCommandInput,
    TestTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TestTransformerCommand extends TestTransformerCommand_base {
  protected static __types: {
    api: {
      input: TestTransformerRequest;
      output: TestTransformerResponse;
    };
    sdk: {
      input: TestTransformerCommandInput;
      output: TestTransformerCommandOutput;
    };
  };
}
