import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogAnomalyDetectors$ } from "../schemas/schemas_0";
export { $Command };
export class ListLogAnomalyDetectorsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "ListLogAnomalyDetectors", {})
    .n("CloudWatchLogsClient", "ListLogAnomalyDetectorsCommand")
    .sc(ListLogAnomalyDetectors$)
    .build() {
}
