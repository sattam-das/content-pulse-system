import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSourceToS3TableIntegration$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateSourceToS3TableIntegrationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "AssociateSourceToS3TableIntegration", {})
    .n("CloudWatchLogsClient", "AssociateSourceToS3TableIntegrationCommand")
    .sc(AssociateSourceToS3TableIntegration$)
    .build() {
}
