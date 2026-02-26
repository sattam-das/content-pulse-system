import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { DeleteLogAnomalyDetectorRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteLogAnomalyDetectorCommandInput
  extends DeleteLogAnomalyDetectorRequest {}
export interface DeleteLogAnomalyDetectorCommandOutput
  extends __MetadataBearer {}
declare const DeleteLogAnomalyDetectorCommand_base: {
  new (
    input: DeleteLogAnomalyDetectorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLogAnomalyDetectorCommandInput,
    DeleteLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLogAnomalyDetectorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLogAnomalyDetectorCommandInput,
    DeleteLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLogAnomalyDetectorCommand extends DeleteLogAnomalyDetectorCommand_base {
  protected static __types: {
    api: {
      input: DeleteLogAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogAnomalyDetectorCommandInput;
      output: DeleteLogAnomalyDetectorCommandOutput;
    };
  };
}
