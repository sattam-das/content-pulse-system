import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Campaign.
 *
 * @stability experimental
 */
export interface ICampaignRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Campaign resource.
     */
    readonly campaignRef: CampaignReference;
}
/**
 * A reference to a Campaign resource.
 *
 * @struct
 * @stability external
 */
export interface CampaignReference {
    /**
     * The Arn of the Campaign resource.
     */
    readonly campaignArn: string;
}
