import type { Paginator } from "@smithy/types";
import { DescribeConfigurationTemplatesCommandInput, DescribeConfigurationTemplatesCommandOutput } from "../commands/DescribeConfigurationTemplatesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeConfigurationTemplates: (config: CloudWatchLogsPaginationConfiguration, input: DescribeConfigurationTemplatesCommandInput, ...rest: any[]) => Paginator<DescribeConfigurationTemplatesCommandOutput>;
