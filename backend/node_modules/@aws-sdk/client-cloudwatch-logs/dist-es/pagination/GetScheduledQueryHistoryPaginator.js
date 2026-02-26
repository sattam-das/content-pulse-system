import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { GetScheduledQueryHistoryCommand, } from "../commands/GetScheduledQueryHistoryCommand";
export const paginateGetScheduledQueryHistory = createPaginator(CloudWatchLogsClient, GetScheduledQueryHistoryCommand, "nextToken", "nextToken", "maxResults");
