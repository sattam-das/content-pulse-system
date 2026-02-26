import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  CancelImportTaskRequest,
  CancelImportTaskResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CancelImportTaskCommandInput extends CancelImportTaskRequest {}
export interface CancelImportTaskCommandOutput
  extends CancelImportTaskResponse,
    __MetadataBearer {}
declare const CancelImportTaskCommand_base: {
  new (
    input: CancelImportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelImportTaskCommandInput,
    CancelImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CancelImportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelImportTaskCommandInput,
    CancelImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CancelImportTaskCommand extends CancelImportTaskCommand_base {
  protected static __types: {
    api: {
      input: CancelImportTaskRequest;
      output: CancelImportTaskResponse;
    };
    sdk: {
      input: CancelImportTaskCommandInput;
      output: CancelImportTaskCommandOutput;
    };
  };
}
