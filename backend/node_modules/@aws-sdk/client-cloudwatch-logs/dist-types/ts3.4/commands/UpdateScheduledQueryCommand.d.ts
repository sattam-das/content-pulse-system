import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  UpdateScheduledQueryRequest,
  UpdateScheduledQueryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateScheduledQueryCommandInput
  extends UpdateScheduledQueryRequest {}
export interface UpdateScheduledQueryCommandOutput
  extends UpdateScheduledQueryResponse,
    __MetadataBearer {}
declare const UpdateScheduledQueryCommand_base: {
  new (
    input: UpdateScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateScheduledQueryCommandInput,
    UpdateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateScheduledQueryCommandInput,
    UpdateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateScheduledQueryCommand extends UpdateScheduledQueryCommand_base {
  protected static __types: {
    api: {
      input: UpdateScheduledQueryRequest;
      output: UpdateScheduledQueryResponse;
    };
    sdk: {
      input: UpdateScheduledQueryCommandInput;
      output: UpdateScheduledQueryCommandOutput;
    };
  };
}
