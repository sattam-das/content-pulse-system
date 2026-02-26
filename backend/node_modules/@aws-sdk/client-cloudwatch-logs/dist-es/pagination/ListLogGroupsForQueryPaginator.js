import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { ListLogGroupsForQueryCommand, } from "../commands/ListLogGroupsForQueryCommand";
export const paginateListLogGroupsForQuery = createPaginator(CloudWatchLogsClient, ListLogGroupsForQueryCommand, "nextToken", "nextToken", "maxResults");
