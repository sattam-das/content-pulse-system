import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  AssociateSourceToS3TableIntegrationRequest,
  AssociateSourceToS3TableIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AssociateSourceToS3TableIntegrationCommandInput
  extends AssociateSourceToS3TableIntegrationRequest {}
export interface AssociateSourceToS3TableIntegrationCommandOutput
  extends AssociateSourceToS3TableIntegrationResponse,
    __MetadataBearer {}
declare const AssociateSourceToS3TableIntegrationCommand_base: {
  new (
    input: AssociateSourceToS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AssociateSourceToS3TableIntegrationCommandInput,
    AssociateSourceToS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: AssociateSourceToS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AssociateSourceToS3TableIntegrationCommandInput,
    AssociateSourceToS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AssociateSourceToS3TableIntegrationCommand extends AssociateSourceToS3TableIntegrationCommand_base {
  protected static __types: {
    api: {
      input: AssociateSourceToS3TableIntegrationRequest;
      output: AssociateSourceToS3TableIntegrationResponse;
    };
    sdk: {
      input: AssociateSourceToS3TableIntegrationCommandInput;
      output: AssociateSourceToS3TableIntegrationCommandOutput;
    };
  };
}
