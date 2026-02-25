import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  GetFunctionScalingConfigRequest,
  GetFunctionScalingConfigResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetFunctionScalingConfigCommandInput
  extends GetFunctionScalingConfigRequest {}
export interface GetFunctionScalingConfigCommandOutput
  extends GetFunctionScalingConfigResponse,
    __MetadataBearer {}
declare const GetFunctionScalingConfigCommand_base: {
  new (
    input: GetFunctionScalingConfigCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetFunctionScalingConfigCommandInput,
    GetFunctionScalingConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetFunctionScalingConfigCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetFunctionScalingConfigCommandInput,
    GetFunctionScalingConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetFunctionScalingConfigCommand extends GetFunctionScalingConfigCommand_base {
  protected static __types: {
    api: {
      input: GetFunctionScalingConfigRequest;
      output: GetFunctionScalingConfigResponse;
    };
    sdk: {
      input: GetFunctionScalingConfigCommandInput;
      output: GetFunctionScalingConfigCommandOutput;
    };
  };
}
