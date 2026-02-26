import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { ListAggregateLogGroupSummariesCommand, } from "../commands/ListAggregateLogGroupSummariesCommand";
export const paginateListAggregateLogGroupSummaries = createPaginator(CloudWatchLogsClient, ListAggregateLogGroupSummariesCommand, "nextToken", "nextToken", "limit");
