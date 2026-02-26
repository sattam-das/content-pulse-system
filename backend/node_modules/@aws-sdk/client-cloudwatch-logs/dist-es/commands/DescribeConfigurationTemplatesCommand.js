import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationTemplates$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeConfigurationTemplatesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DescribeConfigurationTemplates", {})
    .n("CloudWatchLogsClient", "DescribeConfigurationTemplatesCommand")
    .sc(DescribeConfigurationTemplates$)
    .build() {
}
