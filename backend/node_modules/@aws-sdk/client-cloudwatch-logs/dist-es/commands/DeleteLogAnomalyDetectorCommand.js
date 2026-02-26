import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLogAnomalyDetector$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLogAnomalyDetectorCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DeleteLogAnomalyDetector", {})
    .n("CloudWatchLogsClient", "DeleteLogAnomalyDetectorCommand")
    .sc(DeleteLogAnomalyDetector$)
    .build() {
}
