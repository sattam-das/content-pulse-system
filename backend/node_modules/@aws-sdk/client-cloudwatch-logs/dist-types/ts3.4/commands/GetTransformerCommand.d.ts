import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetTransformerRequest,
  GetTransformerResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetTransformerCommandInput extends GetTransformerRequest {}
export interface GetTransformerCommandOutput
  extends GetTransformerResponse,
    __MetadataBearer {}
declare const GetTransformerCommand_base: {
  new (
    input: GetTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTransformerCommandInput,
    GetTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTransformerCommandInput,
    GetTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetTransformerCommand extends GetTransformerCommand_base {
  protected static __types: {
    api: {
      input: GetTransformerRequest;
      output: GetTransformerResponse;
    };
    sdk: {
      input: GetTransformerCommandInput;
      output: GetTransformerCommandOutput;
    };
  };
}
