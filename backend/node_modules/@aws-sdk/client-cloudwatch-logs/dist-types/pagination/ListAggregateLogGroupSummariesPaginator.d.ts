import type { Paginator } from "@smithy/types";
import { ListAggregateLogGroupSummariesCommandInput, ListAggregateLogGroupSummariesCommandOutput } from "../commands/ListAggregateLogGroupSummariesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAggregateLogGroupSummaries: (config: CloudWatchLogsPaginationConfiguration, input: ListAggregateLogGroupSummariesCommandInput, ...rest: any[]) => Paginator<ListAggregateLogGroupSummariesCommandOutput>;
