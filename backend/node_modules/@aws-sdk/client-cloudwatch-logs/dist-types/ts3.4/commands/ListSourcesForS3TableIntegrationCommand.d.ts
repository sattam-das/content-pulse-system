import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  ListSourcesForS3TableIntegrationRequest,
  ListSourcesForS3TableIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListSourcesForS3TableIntegrationCommandInput
  extends ListSourcesForS3TableIntegrationRequest {}
export interface ListSourcesForS3TableIntegrationCommandOutput
  extends ListSourcesForS3TableIntegrationResponse,
    __MetadataBearer {}
declare const ListSourcesForS3TableIntegrationCommand_base: {
  new (
    input: ListSourcesForS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSourcesForS3TableIntegrationCommandInput,
    ListSourcesForS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListSourcesForS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSourcesForS3TableIntegrationCommandInput,
    ListSourcesForS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListSourcesForS3TableIntegrationCommand extends ListSourcesForS3TableIntegrationCommand_base {
  protected static __types: {
    api: {
      input: ListSourcesForS3TableIntegrationRequest;
      output: ListSourcesForS3TableIntegrationResponse;
    };
    sdk: {
      input: ListSourcesForS3TableIntegrationCommandInput;
      output: ListSourcesForS3TableIntegrationCommandOutput;
    };
  };
}
