import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  ListCapacityProvidersRequest,
  ListCapacityProvidersResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListCapacityProvidersCommandInput
  extends ListCapacityProvidersRequest {}
export interface ListCapacityProvidersCommandOutput
  extends ListCapacityProvidersResponse,
    __MetadataBearer {}
declare const ListCapacityProvidersCommand_base: {
  new (
    input: ListCapacityProvidersCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListCapacityProvidersCommandInput,
    ListCapacityProvidersCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListCapacityProvidersCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListCapacityProvidersCommandInput,
    ListCapacityProvidersCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListCapacityProvidersCommand extends ListCapacityProvidersCommand_base {
  protected static __types: {
    api: {
      input: ListCapacityProvidersRequest;
      output: ListCapacityProvidersResponse;
    };
    sdk: {
      input: ListCapacityProvidersCommandInput;
      output: ListCapacityProvidersCommandOutput;
    };
  };
}
