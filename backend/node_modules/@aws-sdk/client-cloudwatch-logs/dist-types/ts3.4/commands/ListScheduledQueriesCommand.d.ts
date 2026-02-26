import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListScheduledQueriesRequest,
  ListScheduledQueriesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListScheduledQueriesCommandInput
  extends ListScheduledQueriesRequest {}
export interface ListScheduledQueriesCommandOutput
  extends ListScheduledQueriesResponse,
    __MetadataBearer {}
declare const ListScheduledQueriesCommand_base: {
  new (
    input: ListScheduledQueriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListScheduledQueriesCommandInput,
    ListScheduledQueriesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListScheduledQueriesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListScheduledQueriesCommandInput,
    ListScheduledQueriesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListScheduledQueriesCommand extends ListScheduledQueriesCommand_base {
  protected static __types: {
    api: {
      input: ListScheduledQueriesRequest;
      output: ListScheduledQueriesResponse;
    };
    sdk: {
      input: ListScheduledQueriesCommandInput;
      output: ListScheduledQueriesCommandOutput;
    };
  };
}
