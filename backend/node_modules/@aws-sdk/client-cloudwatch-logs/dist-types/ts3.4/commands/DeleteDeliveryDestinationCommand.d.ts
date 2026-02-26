import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { DeleteDeliveryDestinationRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteDeliveryDestinationCommandInput
  extends DeleteDeliveryDestinationRequest {}
export interface DeleteDeliveryDestinationCommandOutput
  extends __MetadataBearer {}
declare const DeleteDeliveryDestinationCommand_base: {
  new (
    input: DeleteDeliveryDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDeliveryDestinationCommandInput,
    DeleteDeliveryDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteDeliveryDestinationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDeliveryDestinationCommandInput,
    DeleteDeliveryDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteDeliveryDestinationCommand extends DeleteDeliveryDestinationCommand_base {
  protected static __types: {
    api: {
      input: DeleteDeliveryDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryDestinationCommandInput;
      output: DeleteDeliveryDestinationCommandOutput;
    };
  };
}
