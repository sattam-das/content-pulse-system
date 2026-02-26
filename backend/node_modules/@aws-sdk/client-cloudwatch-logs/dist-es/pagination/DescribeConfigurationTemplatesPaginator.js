import { createPaginator } from "@smithy/core";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { DescribeConfigurationTemplatesCommand, } from "../commands/DescribeConfigurationTemplatesCommand";
export const paginateDescribeConfigurationTemplates = createPaginator(CloudWatchLogsClient, DescribeConfigurationTemplatesCommand, "nextToken", "nextToken", "limit");
