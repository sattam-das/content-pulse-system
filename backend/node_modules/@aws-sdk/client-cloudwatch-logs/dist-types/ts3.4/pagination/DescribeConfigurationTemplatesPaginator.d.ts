import { Paginator } from "@smithy/types";
import {
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "../commands/DescribeConfigurationTemplatesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeConfigurationTemplates: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigurationTemplatesCommandOutput>;
