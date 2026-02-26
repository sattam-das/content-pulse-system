import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  CreateImportTaskRequest,
  CreateImportTaskResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateImportTaskCommandInput extends CreateImportTaskRequest {}
export interface CreateImportTaskCommandOutput
  extends CreateImportTaskResponse,
    __MetadataBearer {}
declare const CreateImportTaskCommand_base: {
  new (
    input: CreateImportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateImportTaskCommandInput,
    CreateImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateImportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateImportTaskCommandInput,
    CreateImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateImportTaskCommand extends CreateImportTaskCommand_base {
  protected static __types: {
    api: {
      input: CreateImportTaskRequest;
      output: CreateImportTaskResponse;
    };
    sdk: {
      input: CreateImportTaskCommandInput;
      output: CreateImportTaskCommandOutput;
    };
  };
}
