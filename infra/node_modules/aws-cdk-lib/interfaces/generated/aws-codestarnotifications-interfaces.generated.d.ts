import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a NotificationRule.
 *
 * @stability experimental
 */
export interface INotificationRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotificationRule resource.
     */
    readonly notificationRuleRef: NotificationRuleReference;
}
/**
 * A reference to a NotificationRule resource.
 *
 * @struct
 * @stability external
 */
export interface NotificationRuleReference {
    /**
     * The Arn of the NotificationRule resource.
     */
    readonly notificationRuleArn: string;
}
