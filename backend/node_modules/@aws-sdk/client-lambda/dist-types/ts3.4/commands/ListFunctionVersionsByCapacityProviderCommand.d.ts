import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  ListFunctionVersionsByCapacityProviderRequest,
  ListFunctionVersionsByCapacityProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListFunctionVersionsByCapacityProviderCommandInput
  extends ListFunctionVersionsByCapacityProviderRequest {}
export interface ListFunctionVersionsByCapacityProviderCommandOutput
  extends ListFunctionVersionsByCapacityProviderResponse,
    __MetadataBearer {}
declare const ListFunctionVersionsByCapacityProviderCommand_base: {
  new (
    input: ListFunctionVersionsByCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListFunctionVersionsByCapacityProviderCommandInput,
    ListFunctionVersionsByCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListFunctionVersionsByCapacityProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListFunctionVersionsByCapacityProviderCommandInput,
    ListFunctionVersionsByCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListFunctionVersionsByCapacityProviderCommand extends ListFunctionVersionsByCapacityProviderCommand_base {
  protected static __types: {
    api: {
      input: ListFunctionVersionsByCapacityProviderRequest;
      output: ListFunctionVersionsByCapacityProviderResponse;
    };
    sdk: {
      input: ListFunctionVersionsByCapacityProviderCommandInput;
      output: ListFunctionVersionsByCapacityProviderCommandOutput;
    };
  };
}
