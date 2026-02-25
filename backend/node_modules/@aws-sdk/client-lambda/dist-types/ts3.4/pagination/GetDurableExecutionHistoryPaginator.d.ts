import { Paginator } from "@smithy/types";
import {
  GetDurableExecutionHistoryCommandInput,
  GetDurableExecutionHistoryCommandOutput,
} from "../commands/GetDurableExecutionHistoryCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
export declare const paginateGetDurableExecutionHistory: (
  config: LambdaPaginationConfiguration,
  input: GetDurableExecutionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetDurableExecutionHistoryCommandOutput>;
