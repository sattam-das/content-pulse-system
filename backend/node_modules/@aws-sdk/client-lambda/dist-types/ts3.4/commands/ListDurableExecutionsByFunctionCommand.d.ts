import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  ListDurableExecutionsByFunctionRequest,
  ListDurableExecutionsByFunctionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListDurableExecutionsByFunctionCommandInput
  extends ListDurableExecutionsByFunctionRequest {}
export interface ListDurableExecutionsByFunctionCommandOutput
  extends ListDurableExecutionsByFunctionResponse,
    __MetadataBearer {}
declare const ListDurableExecutionsByFunctionCommand_base: {
  new (
    input: ListDurableExecutionsByFunctionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDurableExecutionsByFunctionCommandInput,
    ListDurableExecutionsByFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListDurableExecutionsByFunctionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDurableExecutionsByFunctionCommandInput,
    ListDurableExecutionsByFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDurableExecutionsByFunctionCommand extends ListDurableExecutionsByFunctionCommand_base {
  protected static __types: {
    api: {
      input: ListDurableExecutionsByFunctionRequest;
      output: ListDurableExecutionsByFunctionResponse;
    };
    sdk: {
      input: ListDurableExecutionsByFunctionCommandInput;
      output: ListDurableExecutionsByFunctionCommandOutput;
    };
  };
}
