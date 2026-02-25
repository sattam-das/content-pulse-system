import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  SendDurableExecutionCallbackFailureRequest,
  SendDurableExecutionCallbackFailureResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface SendDurableExecutionCallbackFailureCommandInput
  extends SendDurableExecutionCallbackFailureRequest {}
export interface SendDurableExecutionCallbackFailureCommandOutput
  extends SendDurableExecutionCallbackFailureResponse,
    __MetadataBearer {}
declare const SendDurableExecutionCallbackFailureCommand_base: {
  new (
    input: SendDurableExecutionCallbackFailureCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackFailureCommandInput,
    SendDurableExecutionCallbackFailureCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: SendDurableExecutionCallbackFailureCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackFailureCommandInput,
    SendDurableExecutionCallbackFailureCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SendDurableExecutionCallbackFailureCommand extends SendDurableExecutionCallbackFailureCommand_base {
  protected static __types: {
    api: {
      input: SendDurableExecutionCallbackFailureRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackFailureCommandInput;
      output: SendDurableExecutionCallbackFailureCommandOutput;
    };
  };
}
