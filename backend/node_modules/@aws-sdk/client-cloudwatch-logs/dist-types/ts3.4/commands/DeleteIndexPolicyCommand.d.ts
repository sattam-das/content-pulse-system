import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DeleteIndexPolicyRequest,
  DeleteIndexPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteIndexPolicyCommandInput
  extends DeleteIndexPolicyRequest {}
export interface DeleteIndexPolicyCommandOutput
  extends DeleteIndexPolicyResponse,
    __MetadataBearer {}
declare const DeleteIndexPolicyCommand_base: {
  new (
    input: DeleteIndexPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIndexPolicyCommandInput,
    DeleteIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteIndexPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIndexPolicyCommandInput,
    DeleteIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteIndexPolicyCommand extends DeleteIndexPolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteIndexPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteIndexPolicyCommandInput;
      output: DeleteIndexPolicyCommandOutput;
    };
  };
}
