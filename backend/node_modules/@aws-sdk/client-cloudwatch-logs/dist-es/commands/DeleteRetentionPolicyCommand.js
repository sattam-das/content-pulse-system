import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRetentionPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteRetentionPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DeleteRetentionPolicy", {})
    .n("CloudWatchLogsClient", "DeleteRetentionPolicyCommand")
    .sc(DeleteRetentionPolicy$)
    .build() {
}
