import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteIntegrationCommandInput
  extends DeleteIntegrationRequest {}
export interface DeleteIntegrationCommandOutput
  extends DeleteIntegrationResponse,
    __MetadataBearer {}
declare const DeleteIntegrationCommand_base: {
  new (
    input: DeleteIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIntegrationCommandInput,
    DeleteIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteIntegrationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIntegrationCommandInput,
    DeleteIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteIntegrationCommand extends DeleteIntegrationCommand_base {
  protected static __types: {
    api: {
      input: DeleteIntegrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationCommandInput;
      output: DeleteIntegrationCommandOutput;
    };
  };
}
