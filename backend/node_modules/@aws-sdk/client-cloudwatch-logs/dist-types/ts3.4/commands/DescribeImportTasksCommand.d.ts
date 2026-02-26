import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeImportTasksCommandInput
  extends DescribeImportTasksRequest {}
export interface DescribeImportTasksCommandOutput
  extends DescribeImportTasksResponse,
    __MetadataBearer {}
declare const DescribeImportTasksCommand_base: {
  new (
    input: DescribeImportTasksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImportTasksCommandInput,
    DescribeImportTasksCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeImportTasksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImportTasksCommandInput,
    DescribeImportTasksCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeImportTasksCommand extends DescribeImportTasksCommand_base {
  protected static __types: {
    api: {
      input: DescribeImportTasksRequest;
      output: DescribeImportTasksResponse;
    };
    sdk: {
      input: DescribeImportTasksCommandInput;
      output: DescribeImportTasksCommandOutput;
    };
  };
}
