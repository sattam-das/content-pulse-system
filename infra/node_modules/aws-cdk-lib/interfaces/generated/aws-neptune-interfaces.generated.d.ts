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
     * The DBClusterIdentifier of the DBCluster resource.
     */
    readonly dbClusterIdentifier: string;
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
     * The Name of the DBClusterParameterGroup resource.
     */
    readonly dbClusterParameterGroupName: string;
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
     * The DBInstanceIdentifier of the DBInstance resource.
     */
    readonly dbInstanceIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a DBParameterGroup.
 *
 * @stability experimental
 */
export interface IDBParameterGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBParameterGroup resource.
     */
    readonly dbParameterGroupRef: DBParameterGroupReference;
}
/**
 * A reference to a DBParameterGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBParameterGroupReference {
    /**
     * The Name of the DBParameterGroup resource.
     */
    readonly dbParameterGroupName: string;
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
     * The DBSubnetGroupName of the DBSubnetGroup resource.
     */
    readonly dbSubnetGroupName: string;
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
     * The SubscriptionName of the EventSubscription resource.
     */
    readonly subscriptionName: string;
}
