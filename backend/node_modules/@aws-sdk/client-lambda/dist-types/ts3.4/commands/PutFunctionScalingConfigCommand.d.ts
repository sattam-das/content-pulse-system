import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  PutFunctionScalingConfigRequest,
  PutFunctionScalingConfigResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutFunctionScalingConfigCommandInput
  extends PutFunctionScalingConfigRequest {}
export interface PutFunctionScalingConfigCommandOutput
  extends PutFunctionScalingConfigResponse,
    __MetadataBearer {}
declare const PutFunctionScalingConfigCommand_base: {
  new (
    input: PutFunctionScalingConfigCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutFunctionScalingConfigCommandInput,
    PutFunctionScalingConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutFunctionScalingConfigCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutFunctionScalingConfigCommandInput,
    PutFunctionScalingConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutFunctionScalingConfigCommand extends PutFunctionScalingConfigCommand_base {
  protected static __types: {
    api: {
      input: PutFunctionScalingConfigRequest;
      output: PutFunctionScalingConfigResponse;
    };
    sdk: {
      input: PutFunctionScalingConfigCommandInput;
      output: PutFunctionScalingConfigCommandOutput;
    };
  };
}
