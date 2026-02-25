import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ACL.
 *
 * @stability experimental
 */
export interface IACLRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ACL resource.
     */
    readonly aclRef: ACLReference;
}
/**
 * A reference to a ACL resource.
 *
 * @struct
 * @stability external
 */
export interface ACLReference {
    /**
     * The ACLName of the ACL resource.
     */
    readonly aclName: string;
    /**
     * The ARN of the ACL resource.
     */
    readonly aclArn: string;
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
     * The ParameterGroupName of the ParameterGroup resource.
     */
    readonly parameterGroupName: string;
    /**
     * The ARN of the ParameterGroup resource.
     */
    readonly parameterGroupArn: string;
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
     * The SubnetGroupName of the SubnetGroup resource.
     */
    readonly subnetGroupName: string;
    /**
     * The ARN of the SubnetGroup resource.
     */
    readonly subnetGroupArn: string;
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
 * Indicates that this resource can be referenced as a MultiRegionCluster.
 *
 * @stability experimental
 */
export interface IMultiRegionClusterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MultiRegionCluster resource.
     */
    readonly multiRegionClusterRef: MultiRegionClusterReference;
}
/**
 * A reference to a MultiRegionCluster resource.
 *
 * @struct
 * @stability external
 */
export interface MultiRegionClusterReference {
    /**
     * The MultiRegionClusterName of the MultiRegionCluster resource.
     */
    readonly multiRegionClusterName: string;
    /**
     * The ARN of the MultiRegionCluster resource.
     */
    readonly multiRegionClusterArn: string;
}
