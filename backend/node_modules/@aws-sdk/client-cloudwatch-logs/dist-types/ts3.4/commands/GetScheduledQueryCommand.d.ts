import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetScheduledQueryRequest,
  GetScheduledQueryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetScheduledQueryCommandInput
  extends GetScheduledQueryRequest {}
export interface GetScheduledQueryCommandOutput
  extends GetScheduledQueryResponse,
    __MetadataBearer {}
declare const GetScheduledQueryCommand_base: {
  new (
    input: GetScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetScheduledQueryCommandInput,
    GetScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetScheduledQueryCommandInput,
    GetScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetScheduledQueryCommand extends GetScheduledQueryCommand_base {
  protected static __types: {
    api: {
      input: GetScheduledQueryRequest;
      output: GetScheduledQueryResponse;
    };
    sdk: {
      input: GetScheduledQueryCommandInput;
      output: GetScheduledQueryCommandOutput;
    };
  };
}
