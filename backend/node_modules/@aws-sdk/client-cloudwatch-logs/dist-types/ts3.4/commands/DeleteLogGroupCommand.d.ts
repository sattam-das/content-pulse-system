import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { DeleteLogGroupRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteLogGroupCommandInput extends DeleteLogGroupRequest {}
export interface DeleteLogGroupCommandOutput extends __MetadataBearer {}
declare const DeleteLogGroupCommand_base: {
  new (
    input: DeleteLogGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLogGroupCommandInput,
    DeleteLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLogGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLogGroupCommandInput,
    DeleteLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLogGroupCommand extends DeleteLogGroupCommand_base {
  protected static __types: {
    api: {
      input: DeleteLogGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogGroupCommandInput;
      output: DeleteLogGroupCommandOutput;
    };
  };
}
