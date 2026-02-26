import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeImportTaskBatchesRequest,
  DescribeImportTaskBatchesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeImportTaskBatchesCommandInput
  extends DescribeImportTaskBatchesRequest {}
export interface DescribeImportTaskBatchesCommandOutput
  extends DescribeImportTaskBatchesResponse,
    __MetadataBearer {}
declare const DescribeImportTaskBatchesCommand_base: {
  new (
    input: DescribeImportTaskBatchesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImportTaskBatchesCommandInput,
    DescribeImportTaskBatchesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeImportTaskBatchesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImportTaskBatchesCommandInput,
    DescribeImportTaskBatchesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeImportTaskBatchesCommand extends DescribeImportTaskBatchesCommand_base {
  protected static __types: {
    api: {
      input: DescribeImportTaskBatchesRequest;
      output: DescribeImportTaskBatchesResponse;
    };
    sdk: {
      input: DescribeImportTaskBatchesCommandInput;
      output: DescribeImportTaskBatchesCommandOutput;
    };
  };
}
