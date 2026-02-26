import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DeleteQueryDefinitionRequest,
  DeleteQueryDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteQueryDefinitionCommandInput
  extends DeleteQueryDefinitionRequest {}
export interface DeleteQueryDefinitionCommandOutput
  extends DeleteQueryDefinitionResponse,
    __MetadataBearer {}
declare const DeleteQueryDefinitionCommand_base: {
  new (
    input: DeleteQueryDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteQueryDefinitionCommandInput,
    DeleteQueryDefinitionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteQueryDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteQueryDefinitionCommandInput,
    DeleteQueryDefinitionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteQueryDefinitionCommand extends DeleteQueryDefinitionCommand_base {
  protected static __types: {
    api: {
      input: DeleteQueryDefinitionRequest;
      output: DeleteQueryDefinitionResponse;
    };
    sdk: {
      input: DeleteQueryDefinitionCommandInput;
      output: DeleteQueryDefinitionCommandOutput;
    };
  };
}
