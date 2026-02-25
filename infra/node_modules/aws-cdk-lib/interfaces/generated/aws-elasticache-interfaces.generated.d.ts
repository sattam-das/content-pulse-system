import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CacheCluster.
 *
 * @stability experimental
 */
export interface ICacheClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CacheCluster resource.
     */
    readonly cacheClusterRef: CacheClusterReference;
}
/**
 * A reference to a CacheCluster resource.
 *
 * @struct
 * @stability external
 */
export interface CacheClusterReference {
    /**
     * The ClusterName of the CacheCluster resource.
     */
    readonly clusterName: string;
}
/**
 * Indicates that this resource can be referenced as a GlobalReplicationGroup.
 *
 * @stability experimental
 */
export interface IGlobalReplicationGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GlobalReplicationGroup resource.
     */
    readonly globalReplicationGroupRef: GlobalReplicationGroupReference;
}
/**
 * A reference to a GlobalReplicationGroup resource.
 *
 * @struct
 * @stability external
 */
export interface GlobalReplicationGroupReference {
    /**
     * The GlobalReplicationGroupId of the GlobalReplicationGroup resource.
     */
    readonly globalReplicationGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a ParameterGroup.
 *
 * @stability experimental
 */
export interface IParameterGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ParameterGroup resource.
     */
    readonly parameterGroupRef: ParameterGroupReference;
}
/**
 * A reference to a ParameterGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ParameterGroupReference {
    /**
     * The CacheParameterGroupName of the ParameterGroup resource.
     */
    readonly cacheParameterGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicationGroup.
 *
 * @stability experimental
 */
export interface IReplicationGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationGroup resource.
     */
    readonly replicationGroupRef: ReplicationGroupReference;
}
/**
 * A reference to a ReplicationGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationGroupReference {
    /**
     * The ReplicationGroupId of the ReplicationGroup resource.
     */
    readonly replicationGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroup.
 *
 * @stability experimental
 */
export interface ISecurityGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroup resource.
     */
    readonly securityGroupRef: SecurityGroupReference;
}
/**
 * A reference to a SecurityGroup resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupReference {
    /**
     * The Id of the SecurityGroup resource.
     */
    readonly securityGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroupIngress.
 *
 * @stability experimental
 */
export interface ISecurityGroupIngressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroupIngress resource.
     */
    readonly securityGroupIngressRef: SecurityGroupIngressReference;
}
/**
 * A reference to a SecurityGroupIngress resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupIngressReference {
    /**
     * The Id of the SecurityGroupIngress resource.
     */
    readonly securityGroupIngressId: string;
}
/**
 * Indicates that this resource can be referenced as a SubnetGroup.
 *
 * @stability experimental
 */
export interface ISubnetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubnetGroup resource.
     */
    readonly subnetGroupRef: SubnetGroupReference;
}
/**
 * A reference to a SubnetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface SubnetGroupReference {
    /**
     * The CacheSubnetGroupName of the SubnetGroup resource.
     */
    readonly cacheSubnetGroupName: string;
}
/**
 * Indicates that this resource can be referenced as a User.
 *
 * @stability experimental
 */
export interface IUserRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a User resource.
     */
    readonly userRef: UserReference;
}
/**
 * A reference to a User resource.
 *
 * @struct
 * @stability external
 */
export interface UserReference {
    /**
     * The UserName of the User resource.
     */
    readonly userName: string;
    /**
     * The ARN of the User resource.
     */
    readonly userArn: string;
}
/**
 * Indicates that this resource can be referenced as a UserGroup.
 *
 * @stability experimental
 */
export interface IUserGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserGroup resource.
     */
    readonly userGroupRef: UserGroupReference;
}
/**
 * A reference to a UserGroup resource.
 *
 * @struct
 * @stability external
 */
export interface UserGroupReference {
    /**
     * The UserGroupId of the UserGroup resource.
     */
    readonly userGroupId: string;
    /**
     * The ARN of the UserGroup resource.
     */
    readonly userGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ServerlessCache.
 *
 * @stability experimental
 */
export interface IServerlessCacheRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServerlessCache resource.
     */
    readonly serverlessCacheRef: ServerlessCacheReference;
}
/**
 * A reference to a ServerlessCache resource.
 *
 * @struct
 * @stability external
 */
export interface ServerlessCacheReference {
    /**
     * The ServerlessCacheName of the ServerlessCache resource.
     */
    readonly serverlessCacheName: string;
    /**
     * The ARN of the ServerlessCache resource.
     */
    readonly serverlessCacheArn: string;
}
