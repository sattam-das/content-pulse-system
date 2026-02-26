import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { CreateLogGroupRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateLogGroupCommandInput extends CreateLogGroupRequest {}
export interface CreateLogGroupCommandOutput extends __MetadataBearer {}
declare const CreateLogGroupCommand_base: {
  new (
    input: CreateLogGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLogGroupCommandInput,
    CreateLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateLogGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLogGroupCommandInput,
    CreateLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateLogGroupCommand extends CreateLogGroupCommand_base {
  protected static __types: {
    api: {
      input: CreateLogGroupRequest;
      output: {};
    };
    sdk: {
      input: CreateLogGroupCommandInput;
      output: CreateLogGroupCommandOutput;
    };
  };
}
