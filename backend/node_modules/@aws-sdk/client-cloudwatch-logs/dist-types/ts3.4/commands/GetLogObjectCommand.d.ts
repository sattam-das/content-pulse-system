import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { GetLogObjectRequest, GetLogObjectResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetLogObjectCommandInput extends GetLogObjectRequest {}
export interface GetLogObjectCommandOutput
  extends GetLogObjectResponse,
    __MetadataBearer {}
declare const GetLogObjectCommand_base: {
  new (
    input: GetLogObjectCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogObjectCommandInput,
    GetLogObjectCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetLogObjectCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLogObjectCommandInput,
    GetLogObjectCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetLogObjectCommand extends GetLogObjectCommand_base {
  protected static __types: {
    api: {
      input: GetLogObjectRequest;
      output: GetLogObjectResponse;
    };
    sdk: {
      input: GetLogObjectCommandInput;
      output: GetLogObjectCommandOutput;
    };
  };
}
