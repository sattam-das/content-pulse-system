import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  CreateExportTaskRequest,
  CreateExportTaskResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateExportTaskCommandInput extends CreateExportTaskRequest {}
export interface CreateExportTaskCommandOutput
  extends CreateExportTaskResponse,
    __MetadataBearer {}
declare const CreateExportTaskCommand_base: {
  new (
    input: CreateExportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateExportTaskCommandInput,
    CreateExportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateExportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateExportTaskCommandInput,
    CreateExportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateExportTaskCommand extends CreateExportTaskCommand_base {
  protected static __types: {
    api: {
      input: CreateExportTaskRequest;
      output: CreateExportTaskResponse;
    };
    sdk: {
      input: CreateExportTaskCommandInput;
      output: CreateExportTaskCommandOutput;
    };
  };
}
