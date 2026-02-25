import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
} from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  SendDurableExecutionCallbackSuccessResponse,
  SendDurableExecutionCallbackSuccessRequest,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export type SendDurableExecutionCallbackSuccessCommandInputType = Pick<
  SendDurableExecutionCallbackSuccessRequest,
  Exclude<keyof SendDurableExecutionCallbackSuccessRequest, "Result">
> & {
  Result?: BlobPayloadInputTypes;
};
export interface SendDurableExecutionCallbackSuccessCommandInput
  extends SendDurableExecutionCallbackSuccessCommandInputType {}
export interface SendDurableExecutionCallbackSuccessCommandOutput
  extends SendDurableExecutionCallbackSuccessResponse,
    __MetadataBearer {}
declare const SendDurableExecutionCallbackSuccessCommand_base: {
  new (
    input: SendDurableExecutionCallbackSuccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackSuccessCommandInput,
    SendDurableExecutionCallbackSuccessCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: SendDurableExecutionCallbackSuccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendDurableExecutionCallbackSuccessCommandInput,
    SendDurableExecutionCallbackSuccessCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SendDurableExecutionCallbackSuccessCommand extends SendDurableExecutionCallbackSuccessCommand_base {
  protected static __types: {
    api: {
      input: SendDurableExecutionCallbackSuccessRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackSuccessCommandInput;
      output: SendDurableExecutionCallbackSuccessCommandOutput;
    };
  };
}
