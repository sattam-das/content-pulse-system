import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListLogGroupsRequest,
  ListLogGroupsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListLogGroupsCommandInput extends ListLogGroupsRequest {}
export interface ListLogGroupsCommandOutput
  extends ListLogGroupsResponse,
    __MetadataBearer {}
declare const ListLogGroupsCommand_base: {
  new (
    input: ListLogGroupsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListLogGroupsCommandInput,
    ListLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListLogGroupsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListLogGroupsCommandInput,
    ListLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListLogGroupsCommand extends ListLogGroupsCommand_base {
  protected static __types: {
    api: {
      input: ListLogGroupsRequest;
      output: ListLogGroupsResponse;
    };
    sdk: {
      input: ListLogGroupsCommandInput;
      output: ListLogGroupsCommandOutput;
    };
  };
}
