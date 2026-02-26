import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import type { PutDestinationPolicyRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDestinationPolicyCommand}.
 */
export interface PutDestinationPolicyCommandInput extends PutDestinationPolicyRequest {
}
/**
 * @public
 *
 * The output of {@link PutDestinationPolicyCommand}.
 */
export interface PutDestinationPolicyCommandOutput extends __MetadataBearer {
}
declare const PutDestinationPolicyCommand_base: {
    new (input: PutDestinationPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: PutDestinationPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Creates or updates an access policy associated with an existing destination. An access
 *       policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM
 *         policy document</a> that is used to authorize claims to register a subscription filter
 *       against a given destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDestinationPolicyRequest
 *   destinationName: "STRING_VALUE", // required
 *   accessPolicy: "STRING_VALUE", // required
 *   forceUpdate: true || false,
 * };
 * const command = new PutDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDestinationPolicyCommandInput - {@link PutDestinationPolicyCommandInput}
 * @returns {@link PutDestinationPolicyCommandOutput}
 * @see {@link PutDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export declare class PutDestinationPolicyCommand extends PutDestinationPolicyCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutDestinationPolicyRequest;
            output: {};
        };
        sdk: {
            input: PutDestinationPolicyCommandInput;
            output: PutDestinationPolicyCommandOutput;
        };
    };
}
