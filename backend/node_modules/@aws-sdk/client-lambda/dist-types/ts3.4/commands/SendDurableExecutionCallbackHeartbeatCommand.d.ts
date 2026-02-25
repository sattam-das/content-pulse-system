import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  SendDurableExecutionCallbackHeartbeatRequest,
  SendDurableExecutionCallbackHeartbeatResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface SendDurableExecutionCallbackHeartbeatCommandInput
  extends SendDurableExecutionCallbackHeartbeatRequest {}
export interface SendDurableExecutionCallbackHeartbeatCommandOutput
  extends SendDurableExecutionCallbackHeartbeatResponse,
    __MetadataBearer {}
declare const SendDurableExecutionCallbackHeartbeatCommand_base: {
  new (
    input: SendDurableExecutionCallbackHeartbeatCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackHeartbeatCommandInput,
    SendDurableExecutionCallbackHeartbeatCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: SendDurableExecutionCallbackHeartbeatCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackHeartbeatCommandInput,
    SendDurableExecutionCallbackHeartbeatCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SendDurableExecutionCallbackHeartbeatCommand extends SendDurableExecutionCallbackHeartbeatCommand_base {
  protected static __types: {
    api: {
      input: SendDurableExecutionCallbackHeartbeatRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackHeartbeatCommandInput;
      output: SendDurableExecutionCallbackHeartbeatCommandOutput;
    };
  };
}
