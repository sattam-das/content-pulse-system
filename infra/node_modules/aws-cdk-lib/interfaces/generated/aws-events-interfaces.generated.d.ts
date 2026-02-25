import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ApiDestination.
 *
 * @stability experimental
 */
export interface IApiDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApiDestination resource.
     */
    readonly apiDestinationRef: ApiDestinationReference;
}
/**
 * A reference to a ApiDestination resource.
 *
 * @struct
 * @stability external
 */
export interface ApiDestinationReference {
    /**
     * The Name of the ApiDestination resource.
     */
    readonly apiDestinationName: string;
    /**
     * The ARN of the ApiDestination resource.
     */
    readonly apiDestinationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Archive.
 *
 * @stability experimental
 */
export interface IArchiveRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Archive resource.
     */
    readonly archiveRef: ArchiveReference;
}
/**
 * A reference to a Archive resource.
 *
 * @struct
 * @stability external
 */
export interface ArchiveReference {
    /**
     * The ArchiveName of the Archive resource.
     */
    readonly archiveName: string;
    /**
     * The ARN of the Archive resource.
     */
    readonly archiveArn: string;
}
/**
 * Indicates that this resource can be referenced as a Connection.
 *
 * @stability experimental
 */
export interface IConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connection resource.
     */
    readonly connectionRef: ConnectionReference;
}
/**
 * A reference to a Connection resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionReference {
    /**
     * The Name of the Connection resource.
     */
    readonly connectionName: string;
    /**
     * The ARN of the Connection resource.
     */
    readonly connectionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Endpoint.
 *
 * @stability experimental
 */
export interface IEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Endpoint resource.
     */
    readonly endpointRef: EndpointReference;
}
/**
 * A reference to a Endpoint resource.
 *
 * @struct
 * @stability external
 */
export interface EndpointReference {
    /**
     * The Name of the Endpoint resource.
     */
    readonly endpointName: string;
    /**
     * The ARN of the Endpoint resource.
     */
    readonly endpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventBus.
 *
 * @stability experimental
 */
export interface IEventBusRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventBus resource.
     */
    readonly eventBusRef: EventBusReference;
}
/**
 * A reference to a EventBus resource.
 *
 * @struct
 * @stability external
 */
export interface EventBusReference {
    /**
     * The Name of the EventBus resource.
     */
    readonly eventBusName: string;
    /**
     * The ARN of the EventBus resource.
     */
    readonly eventBusArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventBusPolicy.
 *
 * @stability experimental
 */
export interface IEventBusPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventBusPolicy resource.
     */
    readonly eventBusPolicyRef: EventBusPolicyReference;
}
/**
 * A reference to a EventBusPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface EventBusPolicyReference {
    /**
     * The EventBusName of the EventBusPolicy resource.
     */
    readonly eventBusName: string;
    /**
     * The StatementId of the EventBusPolicy resource.
     */
    readonly statementId: string;
}
/**
 * Indicates that this resource can be referenced as a Rule.
 *
 * @stability experimental
 */
export interface IRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Rule resource.
     */
    readonly ruleRef: RuleReference;
}
/**
 * A reference to a Rule resource.
 *
 * @struct
 * @stability external
 */
export interface RuleReference {
    /**
     * The Arn of the Rule resource.
     */
    readonly ruleArn: string;
}
