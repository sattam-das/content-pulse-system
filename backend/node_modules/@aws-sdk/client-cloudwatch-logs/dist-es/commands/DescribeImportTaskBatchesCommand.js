import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImportTaskBatches$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeImportTaskBatchesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DescribeImportTaskBatches", {})
    .n("CloudWatchLogsClient", "DescribeImportTaskBatchesCommand")
    .sc(DescribeImportTaskBatches$)
    .build() {
}
