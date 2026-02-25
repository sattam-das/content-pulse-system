import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CustomDBEngineVersion.
 *
 * @stability experimental
 */
export interface ICustomDBEngineVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomDBEngineVersion resource.
     */
    readonly customDbEngineVersionRef: CustomDBEngineVersionReference;
}
/**
 * A reference to a CustomDBEngineVersion resource.
 *
 * @struct
 * @stability external
 */
export interface CustomDBEngineVersionReference {
    /**
     * The Engine of the CustomDBEngineVersion resource.
     */
    readonly engine: string;
    /**
     * The EngineVersion of the CustomDBEngineVersion resource.
     */
    readonly engineVersion: string;
}
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
    /**
     * The ARN of the DBCluster resource.
     */
    readonly dbClusterArn: string;
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
     * The DBClusterParameterGroupName of the DBClusterParameterGroup resource.
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
    /**
     * The ARN of the DBInstance resource.
     */
    readonly dbInstanceArn: string;
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
     * The DBParameterGroupName of the DBParameterGroup resource.
     */
    readonly dbParameterGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a DBProxy.
 *
 * @stability experimental
 */
export interface IDBProxyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBProxy resource.
     */
    readonly dbProxyRef: DBProxyReference;
}
/**
 * A reference to a DBProxy resource.
 *
 * @struct
 * @stability external
 */
export interface DBProxyReference {
    /**
     * The DBProxyName of the DBProxy resource.
     */
    readonly dbProxyName: string;
    /**
     * The ARN of the DBProxy resource.
     */
    readonly dbProxyArn: string;
}
/**
 * Indicates that this resource can be referenced as a DBProxyEndpoint.
 *
 * @stability experimental
 */
export interface IDBProxyEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBProxyEndpoint resource.
     */
    readonly dbProxyEndpointRef: DBProxyEndpointReference;
}
/**
 * A reference to a DBProxyEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface DBProxyEndpointReference {
    /**
     * The DBProxyEndpointName of the DBProxyEndpoint resource.
     */
    readonly dbProxyEndpointName: string;
    /**
     * The ARN of the DBProxyEndpoint resource.
     */
    readonly dbProxyEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a DBProxyTargetGroup.
 *
 * @stability experimental
 */
export interface IDBProxyTargetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBProxyTargetGroup resource.
     */
    readonly dbProxyTargetGroupRef: DBProxyTargetGroupReference;
}
/**
 * A reference to a DBProxyTargetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBProxyTargetGroupReference {
    /**
     * The TargetGroupArn of the DBProxyTargetGroup resource.
     */
    readonly targetGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a DBSecurityGroup.
 *
 * @stability experimental
 */
export interface IDBSecurityGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBSecurityGroup resource.
     */
    readonly dbSecurityGroupRef: DBSecurityGroupReference;
}
/**
 * A reference to a DBSecurityGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBSecurityGroupReference {
    /**
     * The Id of the DBSecurityGroup resource.
     */
    readonly dbSecurityGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a DBSecurityGroupIngress.
 *
 * @stability experimental
 */
export interface IDBSecurityGroupIngressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBSecurityGroupIngress resource.
     */
    readonly dbSecurityGroupIngressRef: DBSecurityGroupIngressReference;
}
/**
 * A reference to a DBSecurityGroupIngress resource.
 *
 * @struct
 * @stability external
 */
export interface DBSecurityGroupIngressReference {
    /**
     * The Id of the DBSecurityGroupIngress resource.
     */
    readonly dbSecurityGroupIngressId: string;
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
}
/**
 * Indicates that this resource can be referenced as a OptionGroup.
 *
 * @stability experimental
 */
export interface IOptionGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OptionGroup resource.
     */
    readonly optionGroupRef: OptionGroupReference;
}
/**
 * A reference to a OptionGroup resource.
 *
 * @struct
 * @stability external
 */
export interface OptionGroupReference {
    /**
     * The OptionGroupName of the OptionGroup resource.
     */
    readonly optionGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a DBShardGroup.
 *
 * @stability experimental
 */
export interface IDBShardGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DBShardGroup resource.
     */
    readonly dbShardGroupRef: DBShardGroupReference;
}
/**
 * A reference to a DBShardGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DBShardGroupReference {
    /**
     * The DBShardGroupIdentifier of the DBShardGroup resource.
     */
    readonly dbShardGroupIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a Integration.
 *
 * @stability experimental
 */
export interface IIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Integration resource.
     */
    readonly integrationRef: IntegrationReference;
}
/**
 * A reference to a Integration resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationReference {
    /**
     * The IntegrationArn of the Integration resource.
     */
    readonly integrationArn: string;
}
