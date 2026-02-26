import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListAggregateLogGroupSummariesRequest,
  ListAggregateLogGroupSummariesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAggregateLogGroupSummariesCommandInput
  extends ListAggregateLogGroupSummariesRequest {}
export interface ListAggregateLogGroupSummariesCommandOutput
  extends ListAggregateLogGroupSummariesResponse,
    __MetadataBearer {}
declare const ListAggregateLogGroupSummariesCommand_base: {
  new (
    input: ListAggregateLogGroupSummariesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAggregateLogGroupSummariesCommandInput,
    ListAggregateLogGroupSummariesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListAggregateLogGroupSummariesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAggregateLogGroupSummariesCommandInput,
    ListAggregateLogGroupSummariesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAggregateLogGroupSummariesCommand extends ListAggregateLogGroupSummariesCommand_base {
  protected static __types: {
    api: {
      input: ListAggregateLogGroupSummariesRequest;
      output: ListAggregateLogGroupSummariesResponse;
    };
    sdk: {
      input: ListAggregateLogGroupSummariesCommandInput;
      output: ListAggregateLogGroupSummariesCommandOutput;
    };
  };
}
