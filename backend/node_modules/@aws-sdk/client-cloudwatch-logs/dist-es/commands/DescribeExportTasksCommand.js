import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeExportTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DescribeExportTasks", {})
    .n("CloudWatchLogsClient", "DescribeExportTasksCommand")
    .sc(DescribeExportTasks$)
    .build() {
}
