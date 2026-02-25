import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  GetDurableExecutionRequest,
  GetDurableExecutionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDurableExecutionCommandInput
  extends GetDurableExecutionRequest {}
export interface GetDurableExecutionCommandOutput
  extends GetDurableExecutionResponse,
    __MetadataBearer {}
declare const GetDurableExecutionCommand_base: {
  new (
    input: GetDurableExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionCommandInput,
    GetDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDurableExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionCommandInput,
    GetDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDurableExecutionCommand extends GetDurableExecutionCommand_base {
  protected static __types: {
    api: {
      input: GetDurableExecutionRequest;
      output: GetDurableExecutionResponse;
    };
    sdk: {
      input: GetDurableExecutionCommandInput;
      output: GetDurableExecutionCommandOutput;
    };
  };
}
