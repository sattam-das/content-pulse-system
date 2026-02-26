import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetScheduledQueryHistoryRequest,
  GetScheduledQueryHistoryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetScheduledQueryHistoryCommandInput
  extends GetScheduledQueryHistoryRequest {}
export interface GetScheduledQueryHistoryCommandOutput
  extends GetScheduledQueryHistoryResponse,
    __MetadataBearer {}
declare const GetScheduledQueryHistoryCommand_base: {
  new (
    input: GetScheduledQueryHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetScheduledQueryHistoryCommandInput,
    GetScheduledQueryHistoryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetScheduledQueryHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetScheduledQueryHistoryCommandInput,
    GetScheduledQueryHistoryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetScheduledQueryHistoryCommand extends GetScheduledQueryHistoryCommand_base {
  protected static __types: {
    api: {
      input: GetScheduledQueryHistoryRequest;
      output: GetScheduledQueryHistoryResponse;
    };
    sdk: {
      input: GetScheduledQueryHistoryCommandInput;
      output: GetScheduledQueryHistoryCommandOutput;
    };
  };
}
