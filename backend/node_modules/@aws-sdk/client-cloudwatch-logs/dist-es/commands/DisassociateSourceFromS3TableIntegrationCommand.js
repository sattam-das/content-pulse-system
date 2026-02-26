import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSourceFromS3TableIntegration$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateSourceFromS3TableIntegrationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("Logs_20140328", "DisassociateSourceFromS3TableIntegration", {})
    .n("CloudWatchLogsClient", "DisassociateSourceFromS3TableIntegrationCommand")
    .sc(DisassociateSourceFromS3TableIntegration$)
    .build() {
}
