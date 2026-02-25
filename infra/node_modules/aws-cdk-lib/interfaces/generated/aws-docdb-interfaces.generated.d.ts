import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DBCluster.
 *
 * @stability experimental
 */
export interface IDBClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBCluster resource.
     */
    readonly dbClusterRef: DBClusterReference;
}
/**
 * A reference to a DBCluster resource.
 *
 * @struct
 * @stability external
 */
export interface DBClusterReference {
    /**
     * The Id of the DBCluster resource.
     */
    readonly dbClusterId: string;
}
/**
 * Indicates that this resource can be referenced as a DBClusterParameterGroup.
 *
 * @stability experimental
 */
export interface IDBClusterParameterGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBClusterParameterGroup resource.
     */
    readonly dbClusterParameterGroupRef: DBClusterParameterGroupReference;
}
/**
 * A reference to a DBClusterParameterGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBClusterParameterGroupReference {
    /**
     * The Id of the DBClusterParameterGroup resource.
     */
    readonly dbClusterParameterGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a DBInstance.
 *
 * @stability experimental
 */
export interface IDBInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBInstance resource.
     */
    readonly dbInstanceRef: DBInstanceReference;
}
/**
 * A reference to a DBInstance resource.
 *
 * @struct
 * @stability external
 */
export interface DBInstanceReference {
    /**
     * The Id of the DBInstance resource.
     */
    readonly dbInstanceId: string;
}
/**
 * Indicates that this resource can be referenced as a DBSubnetGroup.
 *
 * @stability experimental
 */
export interface IDBSubnetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBSubnetGroup resource.
     */
    readonly dbSubnetGroupRef: DBSubnetGroupReference;
}
/**
 * A reference to a DBSubnetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBSubnetGroupReference {
    /**
     * The Id of the DBSubnetGroup resource.
     */
    readonly dbSubnetGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a EventSubscription.
 *
 * @stability experimental
 */
export interface IEventSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventSubscription resource.
     */
    readonly eventSubscriptionRef: EventSubscriptionReference;
}
/**
 * A reference to a EventSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface EventSubscriptionReference {
    /**
     * The Id of the EventSubscription resource.
     */
    readonly eventSubscriptionId: string;
}
/**
 * Indicates that this resource can be referenced as a GlobalCluster.
 *
 * @stability experimental
 */
export interface IGlobalClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GlobalCluster resource.
     */
    readonly globalClusterRef: GlobalClusterReference;
}
/**
 * A reference to a GlobalCluster resource.
 *
 * @struct
 * @stability external
 */
export interface GlobalClusterReference {
    /**
     * The GlobalClusterIdentifier of the GlobalCluster resource.
     */
    readonly globalClusterIdentifier: string;
    /**
     * The ARN of the GlobalCluster resource.
     */
    readonly globalClusterArn: string;
}
