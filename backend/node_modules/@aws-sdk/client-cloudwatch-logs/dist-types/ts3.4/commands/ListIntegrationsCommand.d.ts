import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListIntegrationsRequest,
  ListIntegrationsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListIntegrationsCommandInput extends ListIntegrationsRequest {}
export interface ListIntegrationsCommandOutput
  extends ListIntegrationsResponse,
    __MetadataBearer {}
declare const ListIntegrationsCommand_base: {
  new (
    input: ListIntegrationsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListIntegrationsCommandInput,
    ListIntegrationsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListIntegrationsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListIntegrationsCommandInput,
    ListIntegrationsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListIntegrationsCommand extends ListIntegrationsCommand_base {
  protected static __types: {
    api: {
      input: ListIntegrationsRequest;
      output: ListIntegrationsResponse;
    };
    sdk: {
      input: ListIntegrationsCommandInput;
      output: ListIntegrationsCommandOutput;
    };
  };
}
