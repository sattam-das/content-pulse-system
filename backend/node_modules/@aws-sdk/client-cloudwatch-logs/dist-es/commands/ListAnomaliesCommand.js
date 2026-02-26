import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnomalies$ } from "../schemas/schemas_0";
export { $Command };
export class ListAnomaliesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "ListAnomalies", {})
    .n("CloudWatchLogsClient", "ListAnomaliesCommand")
    .sc(ListAnomalies$)
    .build() {
}
