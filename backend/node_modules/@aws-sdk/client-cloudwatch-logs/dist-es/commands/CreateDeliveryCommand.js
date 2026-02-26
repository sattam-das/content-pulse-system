import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDelivery$ } from "../schemas/schemas_0";
export { $Command };
export class CreateDeliveryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "CreateDelivery", {})
    .n("CloudWatchLogsClient", "CreateDeliveryCommand")
    .sc(CreateDelivery$)
    .build() {
}
