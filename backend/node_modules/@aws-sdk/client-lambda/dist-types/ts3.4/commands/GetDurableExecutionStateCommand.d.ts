import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  GetDurableExecutionStateRequest,
  GetDurableExecutionStateResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDurableExecutionStateCommandInput
  extends GetDurableExecutionStateRequest {}
export interface GetDurableExecutionStateCommandOutput
  extends GetDurableExecutionStateResponse,
    __MetadataBearer {}
declare const GetDurableExecutionStateCommand_base: {
  new (
    input: GetDurableExecutionStateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionStateCommandInput,
    GetDurableExecutionStateCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDurableExecutionStateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionStateCommandInput,
    GetDurableExecutionStateCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDurableExecutionStateCommand extends GetDurableExecutionStateCommand_base {
  protected static __types: {
    api: {
      input: GetDurableExecutionStateRequest;
      output: GetDurableExecutionStateResponse;
    };
    sdk: {
      input: GetDurableExecutionStateCommandInput;
      output: GetDurableExecutionStateCommandOutput;
    };
  };
}
