import { Paginator } from "@smithy/types";
import {
  ListAggregateLogGroupSummariesCommandInput,
  ListAggregateLogGroupSummariesCommandOutput,
} from "../commands/ListAggregateLogGroupSummariesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateListAggregateLogGroupSummaries: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListAggregateLogGroupSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListAggregateLogGroupSummariesCommandOutput>;
