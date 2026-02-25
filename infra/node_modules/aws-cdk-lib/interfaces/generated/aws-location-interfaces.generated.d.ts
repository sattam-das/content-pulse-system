import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a GeofenceCollection.
 *
 * @stability experimental
 */
export interface IGeofenceCollectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GeofenceCollection resource.
     */
    readonly geofenceCollectionRef: GeofenceCollectionReference;
}
/**
 * A reference to a GeofenceCollection resource.
 *
 * @struct
 * @stability external
 */
export interface GeofenceCollectionReference {
    /**
     * The CollectionName of the GeofenceCollection resource.
     */
    readonly collectionName: string;
    /**
     * The ARN of the GeofenceCollection resource.
     */
    readonly geofenceCollectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Map.
 *
 * @stability experimental
 */
export interface IMapRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Map resource.
     */
    readonly mapRef: MapReference;
}
/**
 * A reference to a Map resource.
 *
 * @struct
 * @stability external
 */
export interface MapReference {
    /**
     * The MapName of the Map resource.
     */
    readonly mapName: string;
    /**
     * The ARN of the Map resource.
     */
    readonly mapArn: string;
}
/**
 * Indicates that this resource can be referenced as a PlaceIndex.
 *
 * @stability experimental
 */
export interface IPlaceIndexRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PlaceIndex resource.
     */
    readonly placeIndexRef: PlaceIndexReference;
}
/**
 * A reference to a PlaceIndex resource.
 *
 * @struct
 * @stability external
 */
export interface PlaceIndexReference {
    /**
     * The IndexName of the PlaceIndex resource.
     */
    readonly indexName: string;
    /**
     * The ARN of the PlaceIndex resource.
     */
    readonly placeIndexArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouteCalculator.
 *
 * @stability experimental
 */
export interface IRouteCalculatorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteCalculator resource.
     */
    readonly routeCalculatorRef: RouteCalculatorReference;
}
/**
 * A reference to a RouteCalculator resource.
 *
 * @struct
 * @stability external
 */
export interface RouteCalculatorReference {
    /**
     * The CalculatorName of the RouteCalculator resource.
     */
    readonly calculatorName: string;
    /**
     * The ARN of the RouteCalculator resource.
     */
    readonly routeCalculatorArn: string;
}
/**
 * Indicates that this resource can be referenced as a Tracker.
 *
 * @stability experimental
 */
export interface ITrackerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Tracker resource.
     */
    readonly trackerRef: TrackerReference;
}
/**
 * A reference to a Tracker resource.
 *
 * @struct
 * @stability external
 */
export interface TrackerReference {
    /**
     * The TrackerName of the Tracker resource.
     */
    readonly trackerName: string;
    /**
     * The ARN of the Tracker resource.
     */
    readonly trackerArn: string;
}
/**
 * Indicates that this resource can be referenced as a TrackerConsumer.
 *
 * @stability experimental
 */
export interface ITrackerConsumerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrackerConsumer resource.
     */
    readonly trackerConsumerRef: TrackerConsumerReference;
}
/**
 * A reference to a TrackerConsumer resource.
 *
 * @struct
 * @stability external
 */
export interface TrackerConsumerReference {
    /**
     * The TrackerName of the TrackerConsumer resource.
     */
    readonly trackerName: string;
    /**
     * The ConsumerArn of the TrackerConsumer resource.
     */
    readonly consumerArn: string;
}
/**
 * Indicates that this resource can be referenced as a APIKey.
 *
 * @stability experimental
 */
export interface IAPIKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a APIKey resource.
     */
    readonly apiKeyRef: APIKeyReference;
}
/**
 * A reference to a APIKey resource.
 *
 * @struct
 * @stability external
 */
export interface APIKeyReference {
    /**
     * The KeyName of the APIKey resource.
     */
    readonly keyName: string;
    /**
     * The ARN of the APIKey resource.
     */
    readonly apiKeyArn: string;
}
