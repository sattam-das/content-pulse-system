import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutDestinationPolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutDestinationPolicyCommandInput
  extends PutDestinationPolicyRequest {}
export interface PutDestinationPolicyCommandOutput extends __MetadataBearer {}
declare const PutDestinationPolicyCommand_base: {
  new (
    input: PutDestinationPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDestinationPolicyCommandInput,
    PutDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutDestinationPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDestinationPolicyCommandInput,
    PutDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutDestinationPolicyCommand extends PutDestinationPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutDestinationPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutDestinationPolicyCommandInput;
      output: PutDestinationPolicyCommandOutput;
    };
  };
}
