import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListLogGroupsForQueryRequest,
  ListLogGroupsForQueryResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListLogGroupsForQueryCommandInput
  extends ListLogGroupsForQueryRequest {}
export interface ListLogGroupsForQueryCommandOutput
  extends ListLogGroupsForQueryResponse,
    __MetadataBearer {}
declare const ListLogGroupsForQueryCommand_base: {
  new (
    input: ListLogGroupsForQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListLogGroupsForQueryCommandInput,
    ListLogGroupsForQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListLogGroupsForQueryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListLogGroupsForQueryCommandInput,
    ListLogGroupsForQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListLogGroupsForQueryCommand extends ListLogGroupsForQueryCommand_base {
  protected static __types: {
    api: {
      input: ListLogGroupsForQueryRequest;
      output: ListLogGroupsForQueryResponse;
    };
    sdk: {
      input: ListLogGroupsForQueryCommandInput;
      output: ListLogGroupsForQueryCommandOutput;
    };
  };
}
