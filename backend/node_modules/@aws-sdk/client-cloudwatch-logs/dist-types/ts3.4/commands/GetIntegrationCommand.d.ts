import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetIntegrationRequest,
  GetIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
export interface GetIntegrationCommandOutput
  extends GetIntegrationResponse,
    __MetadataBearer {}
declare const GetIntegrationCommand_base: {
  new (
    input: GetIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIntegrationCommandInput,
    GetIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIntegrationCommandInput,
    GetIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIntegrationCommand extends GetIntegrationCommand_base {
  protected static __types: {
    api: {
      input: GetIntegrationRequest;
      output: GetIntegrationResponse;
    };
    sdk: {
      input: GetIntegrationCommandInput;
      output: GetIntegrationCommandOutput;
    };
  };
}
