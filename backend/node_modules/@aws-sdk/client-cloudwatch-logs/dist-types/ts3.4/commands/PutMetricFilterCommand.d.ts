import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutMetricFilterRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutMetricFilterCommandInput extends PutMetricFilterRequest {}
export interface PutMetricFilterCommandOutput extends __MetadataBearer {}
declare const PutMetricFilterCommand_base: {
  new (
    input: PutMetricFilterCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutMetricFilterCommandInput,
    PutMetricFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutMetricFilterCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutMetricFilterCommandInput,
    PutMetricFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutMetricFilterCommand extends PutMetricFilterCommand_base {
  protected static __types: {
    api: {
      input: PutMetricFilterRequest;
      output: {};
    };
    sdk: {
      input: PutMetricFilterCommandInput;
      output: PutMetricFilterCommandOutput;
    };
  };
}
