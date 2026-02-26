import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRetentionPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class PutRetentionPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "PutRetentionPolicy", {})
    .n("CloudWatchLogsClient", "PutRetentionPolicyCommand")
    .sc(PutRetentionPolicy$)
    .build() {
}
