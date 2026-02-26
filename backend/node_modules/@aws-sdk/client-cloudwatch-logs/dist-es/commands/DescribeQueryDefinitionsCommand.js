import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQueryDefinitions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeQueryDefinitionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DescribeQueryDefinitions", {})
    .n("CloudWatchLogsClient", "DescribeQueryDefinitionsCommand")
    .sc(DescribeQueryDefinitions$)
    .build() {
}
