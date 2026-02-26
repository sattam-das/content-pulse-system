import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { AssociateKmsKeyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AssociateKmsKeyCommandInput extends AssociateKmsKeyRequest {}
export interface AssociateKmsKeyCommandOutput extends __MetadataBearer {}
declare const AssociateKmsKeyCommand_base: {
  new (
    input: AssociateKmsKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AssociateKmsKeyCommandInput,
    AssociateKmsKeyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: AssociateKmsKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AssociateKmsKeyCommandInput,
    AssociateKmsKeyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AssociateKmsKeyCommand extends AssociateKmsKeyCommand_base {
  protected static __types: {
    api: {
      input: AssociateKmsKeyRequest;
      output: {};
    };
    sdk: {
      input: AssociateKmsKeyCommandInput;
      output: AssociateKmsKeyCommandOutput;
    };
  };
}
