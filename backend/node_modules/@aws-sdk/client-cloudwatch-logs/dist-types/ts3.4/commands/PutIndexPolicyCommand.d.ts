import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  PutIndexPolicyRequest,
  PutIndexPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutIndexPolicyCommandInput extends PutIndexPolicyRequest {}
export interface PutIndexPolicyCommandOutput
  extends PutIndexPolicyResponse,
    __MetadataBearer {}
declare const PutIndexPolicyCommand_base: {
  new (
    input: PutIndexPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutIndexPolicyCommandInput,
    PutIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutIndexPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutIndexPolicyCommandInput,
    PutIndexPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutIndexPolicyCommand extends PutIndexPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutIndexPolicyRequest;
      output: PutIndexPolicyResponse;
    };
    sdk: {
      input: PutIndexPolicyCommandInput;
      output: PutIndexPolicyCommandOutput;
    };
  };
}
