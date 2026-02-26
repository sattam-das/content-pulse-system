import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UntagLogGroup$ } from "../schemas/schemas_0";
export { $Command };
export class UntagLogGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "UntagLogGroup", {})
    .n("CloudWatchLogsClient", "UntagLogGroupCommand")
    .sc(UntagLogGroup$)
    .build() {
}
