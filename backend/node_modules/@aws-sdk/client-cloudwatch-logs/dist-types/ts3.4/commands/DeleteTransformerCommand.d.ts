import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { DeleteTransformerRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteTransformerCommandInput
  extends DeleteTransformerRequest {}
export interface DeleteTransformerCommandOutput extends __MetadataBearer {}
declare const DeleteTransformerCommand_base: {
  new (
    input: DeleteTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransformerCommandInput,
    DeleteTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransformerCommandInput,
    DeleteTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteTransformerCommand extends DeleteTransformerCommand_base {
  protected static __types: {
    api: {
      input: DeleteTransformerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTransformerCommandInput;
      output: DeleteTransformerCommandOutput;
    };
  };
}
