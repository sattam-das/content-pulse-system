import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DisassociateSourceFromS3TableIntegrationRequest,
  DisassociateSourceFromS3TableIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DisassociateSourceFromS3TableIntegrationCommandInput
  extends DisassociateSourceFromS3TableIntegrationRequest {}
export interface DisassociateSourceFromS3TableIntegrationCommandOutput
  extends DisassociateSourceFromS3TableIntegrationResponse,
    __MetadataBearer {}
declare const DisassociateSourceFromS3TableIntegrationCommand_base: {
  new (
    input: DisassociateSourceFromS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisassociateSourceFromS3TableIntegrationCommandInput,
    DisassociateSourceFromS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DisassociateSourceFromS3TableIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisassociateSourceFromS3TableIntegrationCommandInput,
    DisassociateSourceFromS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisassociateSourceFromS3TableIntegrationCommand extends DisassociateSourceFromS3TableIntegrationCommand_base {
  protected static __types: {
    api: {
      input: DisassociateSourceFromS3TableIntegrationRequest;
      output: DisassociateSourceFromS3TableIntegrationResponse;
    };
    sdk: {
      input: DisassociateSourceFromS3TableIntegrationCommandInput;
      output: DisassociateSourceFromS3TableIntegrationCommandOutput;
    };
  };
}
