import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  UpdateDeliveryConfigurationRequest,
  UpdateDeliveryConfigurationResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateDeliveryConfigurationCommandInput
  extends UpdateDeliveryConfigurationRequest {}
export interface UpdateDeliveryConfigurationCommandOutput
  extends UpdateDeliveryConfigurationResponse,
    __MetadataBearer {}
declare const UpdateDeliveryConfigurationCommand_base: {
  new (
    input: UpdateDeliveryConfigurationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDeliveryConfigurationCommandInput,
    UpdateDeliveryConfigurationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateDeliveryConfigurationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDeliveryConfigurationCommandInput,
    UpdateDeliveryConfigurationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateDeliveryConfigurationCommand extends UpdateDeliveryConfigurationCommand_base {
  protected static __types: {
    api: {
      input: UpdateDeliveryConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateDeliveryConfigurationCommandInput;
      output: UpdateDeliveryConfigurationCommandOutput;
    };
  };
}
