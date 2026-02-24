import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeKinesisStreamingDestinationCommand, } from "../commands/DescribeKinesisStreamingDestinationCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeKinesisStreamingDestinationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.KinesisDataStreamDestinations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.DestinationStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "ACTIVE") {
                    return { state: WaiterState.SUCCESS, reason };
                }
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                let filterRes_2 = result.KinesisDataStreamDestinations.filter((element_1) => {
                    return (((element_1.DestinationStatus == "DISABLED") || (element_1.DestinationStatus == "ENABLE_FAILED")) && ((element_1.DestinationStatus == "ENABLE_FAILED") || (element_1.DestinationStatus == "DISABLED")));
                });
                return ((result.KinesisDataStreamDestinations.length > 0) && (filterRes_2.length == result.KinesisDataStreamDestinations.length));
            };
            if (returnComparator() == true) {
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
export const waitForKinesisStreamingDestinationActive = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilKinesisStreamingDestinationActive = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
