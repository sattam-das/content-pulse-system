import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeExportCommand } from "../commands/DescribeExportCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeExportCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ExportDescription.ExportStatus;
            };
            if (returnComparator() === "COMPLETED") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ExportDescription.ExportStatus;
            };
            if (returnComparator() === "FAILED") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForExportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilExportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
