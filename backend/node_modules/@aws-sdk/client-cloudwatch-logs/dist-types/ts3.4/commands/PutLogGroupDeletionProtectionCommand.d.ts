import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutLogGroupDeletionProtectionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutLogGroupDeletionProtectionCommandInput
  extends PutLogGroupDeletionProtectionRequest {}
export interface PutLogGroupDeletionProtectionCommandOutput
  extends __MetadataBearer {}
declare const PutLogGroupDeletionProtectionCommand_base: {
  new (
    input: PutLogGroupDeletionProtectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutLogGroupDeletionProtectionCommandInput,
    PutLogGroupDeletionProtectionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutLogGroupDeletionProtectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutLogGroupDeletionProtectionCommandInput,
    PutLogGroupDeletionProtectionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutLogGroupDeletionProtectionCommand extends PutLogGroupDeletionProtectionCommand_base {
  protected static __types: {
    api: {
      input: PutLogGroupDeletionProtectionRequest;
      output: {};
    };
    sdk: {
      input: PutLogGroupDeletionProtectionCommandInput;
      output: PutLogGroupDeletionProtectionCommandOutput;
    };
  };
}
