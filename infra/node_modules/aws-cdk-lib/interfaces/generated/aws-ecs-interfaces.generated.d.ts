import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CapacityProvider.
 *
 * @stability experimental
 */
export interface ICapacityProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityProvider resource.
     */
    readonly capacityProviderRef: CapacityProviderReference;
}
/**
 * A reference to a CapacityProvider resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityProviderReference {
    /**
     * The Name of the CapacityProvider resource.
     */
    readonly capacityProviderName: string;
}
/**
 * Indicates that this resource can be referenced as a Cluster.
 *
 * @stability experimental
 */
export interface IClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cluster resource.
     */
    readonly clusterRef: ClusterReference;
}
/**
 * A reference to a Cluster resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterReference {
    /**
     * The ClusterName of the Cluster resource.
     */
    readonly clusterName: string;
    /**
     * The ARN of the Cluster resource.
     */
    readonly clusterArn: string;
}
/**
 * Indicates that this resource can be referenced as a ClusterCapacityProviderAssociations.
 *
 * @stability experimental
 */
export interface IClusterCapacityProviderAssociationsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClusterCapacityProviderAssociations resource.
     */
    readonly clusterCapacityProviderAssociationsRef: ClusterCapacityProviderAssociationsReference;
}
/**
 * A reference to a ClusterCapacityProviderAssociations resource.
 *
 * @struct
 * @stability external
 */
export interface ClusterCapacityProviderAssociationsReference {
    /**
     * The Cluster of the ClusterCapacityProviderAssociations resource.
     */
    readonly cluster: string;
}
/**
 * Indicates that this resource can be referenced as a PrimaryTaskSet.
 *
 * @stability experimental
 */
export interface IPrimaryTaskSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrimaryTaskSet resource.
     */
    readonly primaryTaskSetRef: PrimaryTaskSetReference;
}
/**
 * A reference to a PrimaryTaskSet resource.
 *
 * @struct
 * @stability external
 */
export interface PrimaryTaskSetReference {
    /**
     * The Cluster of the PrimaryTaskSet resource.
     */
    readonly cluster: string;
    /**
     * The Service of the PrimaryTaskSet resource.
     */
    readonly service: string;
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
     * The ServiceArn of the Service resource.
     */
    readonly serviceArn: string;
}
/**
 * Indicates that this resource can be referenced as a TaskDefinition.
 *
 * @stability experimental
 */
export interface ITaskDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TaskDefinition resource.
     */
    readonly taskDefinitionRef: TaskDefinitionReference;
}
/**
 * A reference to a TaskDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface TaskDefinitionReference {
    /**
     * The TaskDefinitionArn of the TaskDefinition resource.
     */
    readonly taskDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a TaskSet.
 *
 * @stability experimental
 */
export interface ITaskSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TaskSet resource.
     */
    readonly taskSetRef: TaskSetReference;
}
/**
 * A reference to a TaskSet resource.
 *
 * @struct
 * @stability external
 */
export interface TaskSetReference {
    /**
     * The Cluster of the TaskSet resource.
     */
    readonly cluster: string;
    /**
     * The Service of the TaskSet resource.
     */
    readonly service: string;
    /**
     * The Id of the TaskSet resource.
     */
    readonly taskSetId: string;
}
/**
 * Indicates that this resource can be referenced as a ExpressGatewayService.
 *
 * @stability experimental
 */
export interface IExpressGatewayServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ExpressGatewayService resource.
     */
    readonly expressGatewayServiceRef: ExpressGatewayServiceReference;
}
/**
 * A reference to a ExpressGatewayService resource.
 *
 * @struct
 * @stability external
 */
export interface ExpressGatewayServiceReference {
    /**
     * The ServiceArn of the ExpressGatewayService resource.
     */
    readonly serviceArn: string;
}
