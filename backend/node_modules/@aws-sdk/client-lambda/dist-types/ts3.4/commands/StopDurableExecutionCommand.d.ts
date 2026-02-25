import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  StopDurableExecutionRequest,
  StopDurableExecutionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface StopDurableExecutionCommandInput
  extends StopDurableExecutionRequest {}
export interface StopDurableExecutionCommandOutput
  extends StopDurableExecutionResponse,
    __MetadataBearer {}
declare const StopDurableExecutionCommand_base: {
  new (
    input: StopDurableExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StopDurableExecutionCommandInput,
    StopDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: StopDurableExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StopDurableExecutionCommandInput,
    StopDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StopDurableExecutionCommand extends StopDurableExecutionCommand_base {
  protected static __types: {
    api: {
      input: StopDurableExecutionRequest;
      output: StopDurableExecutionResponse;
    };
    sdk: {
      input: StopDurableExecutionCommandInput;
      output: StopDurableExecutionCommandOutput;
    };
  };
}
