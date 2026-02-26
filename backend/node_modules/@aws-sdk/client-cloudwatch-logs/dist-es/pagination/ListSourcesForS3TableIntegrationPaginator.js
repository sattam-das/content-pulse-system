import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { ListSourcesForS3TableIntegrationCommand, } from "../commands/ListSourcesForS3TableIntegrationCommand";
export const paginateListSourcesForS3TableIntegration = createPaginator(CloudWatchLogsClient, ListSourcesForS3TableIntegrationCommand, "nextToken", "nextToken", "maxResults");
