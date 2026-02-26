import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLogAnomalyDetector$ } from "../schemas/schemas_0";
export { $Command };
export class CreateLogAnomalyDetectorCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "CreateLogAnomalyDetector", {})
    .n("CloudWatchLogsClient", "CreateLogAnomalyDetectorCommand")
    .sc(CreateLogAnomalyDetector$)
    .build() {
}
