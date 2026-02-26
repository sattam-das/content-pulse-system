import type { Paginator } from "@smithy/types";
import { ListLogGroupsForQueryCommandInput, ListLogGroupsForQueryCommandOutput } from "../commands/ListLogGroupsForQueryCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListLogGroupsForQuery: (config: CloudWatchLogsPaginationConfiguration, input: ListLogGroupsForQueryCommandInput, ...rest: any[]) => Paginator<ListLogGroupsForQueryCommandOutput>;
