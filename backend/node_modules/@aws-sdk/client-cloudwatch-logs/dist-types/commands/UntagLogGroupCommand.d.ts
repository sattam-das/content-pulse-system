import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import type { UntagLogGroupRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagLogGroupCommand}.
 */
export interface UntagLogGroupCommandInput extends UntagLogGroupRequest {
}
/**
 * @public
 *
 * The output of {@link UntagLogGroupCommand}.
 */
export interface UntagLogGroupCommandOutput extends __MetadataBearer {
}
declare const UntagLogGroupCommand_base: {
    new (input: UntagLogGroupCommandInput): import("@smithy/smithy-client").CommandImpl<UntagLogGroupCommandInput, UntagLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: UntagLogGroupCommandInput): import("@smithy/smithy-client").CommandImpl<UntagLogGroupCommandInput, UntagLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <important>
 *             <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use
 *           <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p>
 *          </important>
 *          <p>Removes the specified tags from the specified log group.</p>
 *          <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 *          <p>When using IAM policies to control tag management for CloudWatch Logs log groups, the
 *       condition keys <code>aws:Resource/key-name</code> and <code>aws:TagKeys</code> cannot be used
 *       to restrict which tags users can assign. </p>
 *
 * @deprecated Please use the generic tagging API UntagResource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UntagLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UntagLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UntagLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 *   tags: [ // TagList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagLogGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagLogGroupCommandInput - {@link UntagLogGroupCommandInput}
 * @returns {@link UntagLogGroupCommandOutput}
 * @see {@link UntagLogGroupCommandInput} for command's `input` shape.
 * @see {@link UntagLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export declare class UntagLogGroupCommand extends UntagLogGroupCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: UntagLogGroupRequest;
            output: {};
        };
        sdk: {
            input: UntagLogGroupCommandInput;
            output: UntagLogGroupCommandOutput;
        };
    };
}
