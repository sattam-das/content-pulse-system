import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  GetDurableExecutionHistoryRequest,
  GetDurableExecutionHistoryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDurableExecutionHistoryCommandInput
  extends GetDurableExecutionHistoryRequest {}
export interface GetDurableExecutionHistoryCommandOutput
  extends GetDurableExecutionHistoryResponse,
    __MetadataBearer {}
declare const GetDurableExecutionHistoryCommand_base: {
  new (
    input: GetDurableExecutionHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionHistoryCommandInput,
    GetDurableExecutionHistoryCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDurableExecutionHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDurableExecutionHistoryCommandInput,
    GetDurableExecutionHistoryCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDurableExecutionHistoryCommand extends GetDurableExecutionHistoryCommand_base {
  protected static __types: {
    api: {
      input: GetDurableExecutionHistoryRequest;
      output: GetDurableExecutionHistoryResponse;
    };
    sdk: {
      input: GetDurableExecutionHistoryCommandInput;
      output: GetDurableExecutionHistoryCommandOutput;
    };
  };
}
