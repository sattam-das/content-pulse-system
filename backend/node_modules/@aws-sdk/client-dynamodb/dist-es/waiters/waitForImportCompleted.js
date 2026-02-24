import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeImportCommand } from "../commands/DescribeImportCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeImportCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "COMPLETED") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "FAILED") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ImportTableDescription.ImportStatus;
            };
            if (returnComparator() === "CANCELLED") {
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
export const waitForImportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilImportCompleted = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
