import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  UpdateCapacityProviderRequest,
  UpdateCapacityProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateCapacityProviderCommandInput
  extends UpdateCapacityProviderRequest {}
export interface UpdateCapacityProviderCommandOutput
  extends UpdateCapacityProviderResponse,
    __MetadataBearer {}
declare const UpdateCapacityProviderCommand_base: {
  new (
    input: UpdateCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateCapacityProviderCommandInput,
    UpdateCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateCapacityProviderCommandInput,
    UpdateCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateCapacityProviderCommand extends UpdateCapacityProviderCommand_base {
  protected static __types: {
    api: {
      input: UpdateCapacityProviderRequest;
      output: UpdateCapacityProviderResponse;
    };
    sdk: {
      input: UpdateCapacityProviderCommandInput;
      output: UpdateCapacityProviderCommandOutput;
    };
  };
}
