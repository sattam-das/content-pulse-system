import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  PutDataProtectionPolicyRequest,
  PutDataProtectionPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutDataProtectionPolicyCommandInput
  extends PutDataProtectionPolicyRequest {}
export interface PutDataProtectionPolicyCommandOutput
  extends PutDataProtectionPolicyResponse,
    __MetadataBearer {}
declare const PutDataProtectionPolicyCommand_base: {
  new (
    input: PutDataProtectionPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDataProtectionPolicyCommandInput,
    PutDataProtectionPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutDataProtectionPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDataProtectionPolicyCommandInput,
    PutDataProtectionPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutDataProtectionPolicyCommand extends PutDataProtectionPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutDataProtectionPolicyRequest;
      output: PutDataProtectionPolicyResponse;
    };
    sdk: {
      input: PutDataProtectionPolicyCommandInput;
      output: PutDataProtectionPolicyCommandOutput;
    };
  };
}
