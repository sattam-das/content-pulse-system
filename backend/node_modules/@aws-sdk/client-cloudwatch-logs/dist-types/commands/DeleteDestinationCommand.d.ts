import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import type { DeleteDestinationRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDestinationCommand}.
 */
export interface DeleteDestinationCommandInput extends DeleteDestinationRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteDestinationCommand}.
 */
export interface DeleteDestinationCommandOutput extends __MetadataBearer {
}
declare const DeleteDestinationCommand_base: {
    new (input: DeleteDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteDestinationCommandInput, DeleteDestinationCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteDestinationCommandInput, DeleteDestinationCommandOutput, CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified destination, and eventually disables all the subscription filters
 *       that publish to it. This operation does not delete the physical resource encapsulated by the
 *       destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDestinationRequest
 *   destinationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDestinationCommandInput - {@link DeleteDestinationCommandInput}
 * @returns {@link DeleteDestinationCommandOutput}
 * @see {@link DeleteDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export declare class DeleteDestinationCommand extends DeleteDestinationCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteDestinationRequest;
            output: {};
        };
        sdk: {
            input: DeleteDestinationCommandInput;
            output: DeleteDestinationCommandOutput;
        };
    };
}
