import { Paginator } from "@smithy/types";
import {
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "../commands/ListLogGroupsForQueryCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateListLogGroupsForQuery: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListLogGroupsForQueryCommandInput,
  ...rest: any[]
) => Paginator<ListLogGroupsForQueryCommandOutput>;
