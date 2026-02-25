import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  GetCapacityProviderRequest,
  GetCapacityProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetCapacityProviderCommandInput
  extends GetCapacityProviderRequest {}
export interface GetCapacityProviderCommandOutput
  extends GetCapacityProviderResponse,
    __MetadataBearer {}
declare const GetCapacityProviderCommand_base: {
  new (
    input: GetCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityProviderCommandInput,
    GetCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityProviderCommandInput,
    GetCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCapacityProviderCommand extends GetCapacityProviderCommand_base {
  protected static __types: {
    api: {
      input: GetCapacityProviderRequest;
      output: GetCapacityProviderResponse;
    };
    sdk: {
      input: GetCapacityProviderCommandInput;
      output: GetCapacityProviderCommandOutput;
    };
  };
}
