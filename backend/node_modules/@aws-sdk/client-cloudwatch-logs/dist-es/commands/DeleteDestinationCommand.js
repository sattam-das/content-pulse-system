import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDestination$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteDestinationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DeleteDestination", {})
    .n("CloudWatchLogsClient", "DeleteDestinationCommand")
    .sc(DeleteDestination$)
    .build() {
}
