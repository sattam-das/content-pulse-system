import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AwsLogSource.
 *
 * @stability experimental
 */
export interface IAwsLogSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AwsLogSource resource.
     */
    readonly awsLogSourceRef: AwsLogSourceReference;
}
/**
 * A reference to a AwsLogSource resource.
 *
 * @struct
 * @stability external
 */
export interface AwsLogSourceReference {
    /**
     * The SourceName of the AwsLogSource resource.
     */
    readonly sourceName: string;
    /**
     * The SourceVersion of the AwsLogSource resource.
     */
    readonly sourceVersion: string;
}
/**
 * Indicates that this resource can be referenced as a DataLake.
 *
 * @stability experimental
 */
export interface IDataLakeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataLake resource.
     */
    readonly dataLakeRef: DataLakeReference;
}
/**
 * A reference to a DataLake resource.
 *
 * @struct
 * @stability external
 */
export interface DataLakeReference {
    /**
     * The Arn of the DataLake resource.
     */
    readonly dataLakeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Subscriber.
 *
 * @stability experimental
 */
export interface ISubscriberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Subscriber resource.
     */
    readonly subscriberRef: SubscriberReference;
}
/**
 * A reference to a Subscriber resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriberReference {
    /**
     * The SubscriberArn of the Subscriber resource.
     */
    readonly subscriberArn: string;
}
/**
 * Indicates that this resource can be referenced as a SubscriberNotification.
 *
 * @stability experimental
 */
export interface ISubscriberNotificationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubscriberNotification resource.
     */
    readonly subscriberNotificationRef: SubscriberNotificationReference;
}
/**
 * A reference to a SubscriberNotification resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriberNotificationReference {
    /**
     * The SubscriberArn of the SubscriberNotification resource.
     */
    readonly subscriberArn: string;
}
