import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { CancelExportTaskRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CancelExportTaskCommandInput extends CancelExportTaskRequest {}
export interface CancelExportTaskCommandOutput extends __MetadataBearer {}
declare const CancelExportTaskCommand_base: {
  new (
    input: CancelExportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelExportTaskCommandInput,
    CancelExportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CancelExportTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelExportTaskCommandInput,
    CancelExportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CancelExportTaskCommand extends CancelExportTaskCommand_base {
  protected static __types: {
    api: {
      input: CancelExportTaskRequest;
      output: {};
    };
    sdk: {
      input: CancelExportTaskCommandInput;
      output: CancelExportTaskCommandOutput;
    };
  };
}
