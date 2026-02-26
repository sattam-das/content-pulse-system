import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DeleteScheduledQueryRequest,
  DeleteScheduledQueryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteScheduledQueryCommandInput
  extends DeleteScheduledQueryRequest {}
export interface DeleteScheduledQueryCommandOutput
  extends DeleteScheduledQueryResponse,
    __MetadataBearer {}
declare const DeleteScheduledQueryCommand_base: {
  new (
    input: DeleteScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteScheduledQueryCommandInput,
    DeleteScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteScheduledQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteScheduledQueryCommandInput,
    DeleteScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteScheduledQueryCommand extends DeleteScheduledQueryCommand_base {
  protected static __types: {
    api: {
      input: DeleteScheduledQueryRequest;
      output: {};
    };
    sdk: {
      input: DeleteScheduledQueryCommandInput;
      output: DeleteScheduledQueryCommandOutput;
    };
  };
}
