import { Paginator } from "@smithy/types";
import {
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "../commands/ListScheduledQueriesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateListScheduledQueries: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListScheduledQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledQueriesCommandOutput>;
