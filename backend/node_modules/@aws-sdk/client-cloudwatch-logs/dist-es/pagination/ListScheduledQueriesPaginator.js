import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { ListScheduledQueriesCommand, } from "../commands/ListScheduledQueriesCommand";
export const paginateListScheduledQueries = createPaginator(CloudWatchLogsClient, ListScheduledQueriesCommand, "nextToken", "nextToken", "maxResults");
