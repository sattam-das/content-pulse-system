import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  PutIntegrationRequest,
  PutIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutIntegrationCommandInput extends PutIntegrationRequest {}
export interface PutIntegrationCommandOutput
  extends PutIntegrationResponse,
    __MetadataBearer {}
declare const PutIntegrationCommand_base: {
  new (
    input: PutIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutIntegrationCommandInput,
    PutIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutIntegrationCommandInput,
    PutIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutIntegrationCommand extends PutIntegrationCommand_base {
  protected static __types: {
    api: {
      input: PutIntegrationRequest;
      output: PutIntegrationResponse;
    };
    sdk: {
      input: PutIntegrationCommandInput;
      output: PutIntegrationCommandOutput;
    };
  };
}
