import { Paginator } from "@smithy/types";
import {
  ListSourcesForS3TableIntegrationCommandInput,
  ListSourcesForS3TableIntegrationCommandOutput,
} from "../commands/ListSourcesForS3TableIntegrationCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateListSourcesForS3TableIntegration: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListSourcesForS3TableIntegrationCommandInput,
  ...rest: any[]
) => Paginator<ListSourcesForS3TableIntegrationCommandOutput>;
