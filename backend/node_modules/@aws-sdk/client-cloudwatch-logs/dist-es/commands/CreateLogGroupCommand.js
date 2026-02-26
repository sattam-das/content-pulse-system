import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLogGroup$ } from "../schemas/schemas_0";
export { $Command };
export class CreateLogGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "CreateLogGroup", {})
    .n("CloudWatchLogsClient", "CreateLogGroupCommand")
    .sc(CreateLogGroup$)
    .build() {
}
