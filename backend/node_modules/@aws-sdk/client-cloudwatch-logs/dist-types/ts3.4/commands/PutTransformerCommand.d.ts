import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutTransformerRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutTransformerCommandInput extends PutTransformerRequest {}
export interface PutTransformerCommandOutput extends __MetadataBearer {}
declare const PutTransformerCommand_base: {
  new (
    input: PutTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutTransformerCommandInput,
    PutTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutTransformerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutTransformerCommandInput,
    PutTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutTransformerCommand extends PutTransformerCommand_base {
  protected static __types: {
    api: {
      input: PutTransformerRequest;
      output: {};
    };
    sdk: {
      input: PutTransformerCommandInput;
      output: PutTransformerCommandOutput;
    };
  };
}
