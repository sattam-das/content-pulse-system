import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  CreateScheduledQueryRequest,
  CreateScheduledQueryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateScheduledQueryCommandInput
  extends CreateScheduledQueryRequest {}
export interface CreateScheduledQueryCommandOutput
  extends CreateScheduledQueryResponse,
    __MetadataBearer {}
declare const CreateScheduledQueryCommand_base: {
  new (
    input: CreateScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateScheduledQueryCommandInput,
    CreateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateScheduledQueryCommandInput,
    CreateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateScheduledQueryCommand extends CreateScheduledQueryCommand_base {
  protected static __types: {
    api: {
      input: CreateScheduledQueryRequest;
      output: CreateScheduledQueryResponse;
    };
    sdk: {
      input: CreateScheduledQueryCommandInput;
      output: CreateScheduledQueryCommandOutput;
    };
  };
}
