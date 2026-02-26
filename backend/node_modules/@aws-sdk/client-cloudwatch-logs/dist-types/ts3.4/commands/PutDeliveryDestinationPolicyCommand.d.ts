import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  PutDeliveryDestinationPolicyRequest,
  PutDeliveryDestinationPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutDeliveryDestinationPolicyCommandInput
  extends PutDeliveryDestinationPolicyRequest {}
export interface PutDeliveryDestinationPolicyCommandOutput
  extends PutDeliveryDestinationPolicyResponse,
    __MetadataBearer {}
declare const PutDeliveryDestinationPolicyCommand_base: {
  new (
    input: PutDeliveryDestinationPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDeliveryDestinationPolicyCommandInput,
    PutDeliveryDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutDeliveryDestinationPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutDeliveryDestinationPolicyCommandInput,
    PutDeliveryDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutDeliveryDestinationPolicyCommand extends PutDeliveryDestinationPolicyCommand_base {
  protected static __types: {
    api: {
      input: PutDeliveryDestinationPolicyRequest;
      output: PutDeliveryDestinationPolicyResponse;
    };
    sdk: {
      input: PutDeliveryDestinationPolicyCommandInput;
      output: PutDeliveryDestinationPolicyCommandOutput;
    };
  };
}
