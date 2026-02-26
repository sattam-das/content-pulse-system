import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetLogAnomalyDetectorRequest,
  GetLogAnomalyDetectorResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetLogAnomalyDetectorCommandInput
  extends GetLogAnomalyDetectorRequest {}
export interface GetLogAnomalyDetectorCommandOutput
  extends GetLogAnomalyDetectorResponse,
    __MetadataBearer {}
declare const GetLogAnomalyDetectorCommand_base: {
  new (
    input: GetLogAnomalyDetectorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogAnomalyDetectorCommandInput,
    GetLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetLogAnomalyDetectorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogAnomalyDetectorCommandInput,
    GetLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetLogAnomalyDetectorCommand extends GetLogAnomalyDetectorCommand_base {
  protected static __types: {
    api: {
      input: GetLogAnomalyDetectorRequest;
      output: GetLogAnomalyDetectorResponse;
    };
    sdk: {
      input: GetLogAnomalyDetectorCommandInput;
      output: GetLogAnomalyDetectorCommandOutput;
    };
  };
}
