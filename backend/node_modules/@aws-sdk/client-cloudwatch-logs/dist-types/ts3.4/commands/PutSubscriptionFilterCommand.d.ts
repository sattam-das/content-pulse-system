import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutSubscriptionFilterRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutSubscriptionFilterCommandInput
  extends PutSubscriptionFilterRequest {}
export interface PutSubscriptionFilterCommandOutput extends __MetadataBearer {}
declare const PutSubscriptionFilterCommand_base: {
  new (
    input: PutSubscriptionFilterCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutSubscriptionFilterCommandInput,
    PutSubscriptionFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutSubscriptionFilterCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutSubscriptionFilterCommandInput,
    PutSubscriptionFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutSubscriptionFilterCommand extends PutSubscriptionFilterCommand_base {
  protected static __types: {
    api: {
      input: PutSubscriptionFilterRequest;
      output: {};
    };
    sdk: {
      input: PutSubscriptionFilterCommandInput;
      output: PutSubscriptionFilterCommandOutput;
    };
  };
}
