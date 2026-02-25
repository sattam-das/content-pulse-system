import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a LogAnomalyDetectionIntegration.
 *
 * @stability experimental
 */
export interface ILogAnomalyDetectionIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LogAnomalyDetectionIntegration resource.
     */
    readonly logAnomalyDetectionIntegrationRef: LogAnomalyDetectionIntegrationReference;
}
/**
 * A reference to a LogAnomalyDetectionIntegration resource.
 *
 * @struct
 * @stability external
 */
export interface LogAnomalyDetectionIntegrationReference {
    /**
     * The AccountId of the LogAnomalyDetectionIntegration resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a NotificationChannel.
 *
 * @stability experimental
 */
export interface INotificationChannelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NotificationChannel resource.
     */
    readonly notificationChannelRef: NotificationChannelReference;
}
/**
 * A reference to a NotificationChannel resource.
 *
 * @struct
 * @stability external
 */
export interface NotificationChannelReference {
    /**
     * The Id of the NotificationChannel resource.
     */
    readonly notificationChannelId: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceCollection.
 *
 * @stability experimental
 */
export interface IResourceCollectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceCollection resource.
     */
    readonly resourceCollectionRef: ResourceCollectionReference;
}
/**
 * A reference to a ResourceCollection resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceCollectionReference {
    /**
     * The ResourceCollectionType of the ResourceCollection resource.
     */
    readonly resourceCollectionType: string;
}
