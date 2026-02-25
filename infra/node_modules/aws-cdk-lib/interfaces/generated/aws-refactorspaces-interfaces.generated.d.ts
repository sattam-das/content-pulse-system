import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The EnvironmentIdentifier of the Application resource.
     */
    readonly environmentIdentifier: string;
    /**
     * The ApplicationIdentifier of the Application resource.
     */
    readonly applicationIdentifier: string;
    /**
     * The ARN of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Environment.
 *
 * @stability experimental
 */
export interface IEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Environment resource.
     */
    readonly environmentRef: EnvironmentReference;
}
/**
 * A reference to a Environment resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentReference {
    /**
     * The EnvironmentIdentifier of the Environment resource.
     */
    readonly environmentIdentifier: string;
    /**
     * The ARN of the Environment resource.
     */
    readonly environmentArn: string;
}
/**
 * Indicates that this resource can be referenced as a Route.
 *
 * @stability experimental
 */
export interface IRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Route resource.
     */
    readonly routeRef: RouteReference;
}
/**
 * A reference to a Route resource.
 *
 * @struct
 * @stability external
 */
export interface RouteReference {
    /**
     * The EnvironmentIdentifier of the Route resource.
     */
    readonly environmentIdentifier: string;
    /**
     * The ApplicationIdentifier of the Route resource.
     */
    readonly applicationIdentifier: string;
    /**
     * The RouteIdentifier of the Route resource.
     */
    readonly routeIdentifier: string;
    /**
     * The ARN of the Route resource.
     */
    readonly routeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Service.
 *
 * @stability experimental
 */
export interface IServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Service resource.
     */
    readonly serviceRef: ServiceReference;
}
/**
 * A reference to a Service resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceReference {
    /**
     * The EnvironmentIdentifier of the Service resource.
     */
    readonly environmentIdentifier: string;
    /**
     * The ApplicationIdentifier of the Service resource.
     */
    readonly applicationIdentifier: string;
    /**
     * The ServiceIdentifier of the Service resource.
     */
    readonly serviceIdentifier: string;
    /**
     * The ARN of the Service resource.
     */
    readonly serviceArn: string;
}
