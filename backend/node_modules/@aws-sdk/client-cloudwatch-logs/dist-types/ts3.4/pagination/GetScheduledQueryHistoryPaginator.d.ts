import { Paginator } from "@smithy/types";
import {
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput,
} from "../commands/GetScheduledQueryHistoryCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateGetScheduledQueryHistory: (
  config: CloudWatchLogsPaginationConfiguration,
  input: GetScheduledQueryHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetScheduledQueryHistoryCommandOutput>;
