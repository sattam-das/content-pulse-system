import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { GetDeliveryRequest, GetDeliveryResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDeliveryCommandInput extends GetDeliveryRequest {}
export interface GetDeliveryCommandOutput
  extends GetDeliveryResponse,
    __MetadataBearer {}
declare const GetDeliveryCommand_base: {
  new (
    input: GetDeliveryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDeliveryCommandInput,
    GetDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDeliveryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDeliveryCommandInput,
    GetDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDeliveryCommand extends GetDeliveryCommand_base {
  protected static __types: {
    api: {
      input: GetDeliveryRequest;
      output: GetDeliveryResponse;
    };
    sdk: {
      input: GetDeliveryCommandInput;
      output: GetDeliveryCommandOutput;
    };
  };
}
