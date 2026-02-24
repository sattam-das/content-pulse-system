import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeContributorInsightsCommand, } from "../commands/DescribeContributorInsightsCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeContributorInsightsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ContributorInsightsStatus;
            };
            if (returnComparator() === "ENABLED") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ContributorInsightsStatus;
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
export const waitForContributorInsightsEnabled = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilContributorInsightsEnabled = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
