import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { GetLogFieldsRequest, GetLogFieldsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetLogFieldsCommandInput extends GetLogFieldsRequest {}
export interface GetLogFieldsCommandOutput
  extends GetLogFieldsResponse,
    __MetadataBearer {}
declare const GetLogFieldsCommand_base: {
  new (
    input: GetLogFieldsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogFieldsCommandInput,
    GetLogFieldsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetLogFieldsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogFieldsCommandInput,
    GetLogFieldsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetLogFieldsCommand extends GetLogFieldsCommand_base {
  protected static __types: {
    api: {
      input: GetLogFieldsRequest;
      output: GetLogFieldsResponse;
    };
    sdk: {
      input: GetLogFieldsCommandInput;
      output: GetLogFieldsCommandOutput;
    };
  };
}
