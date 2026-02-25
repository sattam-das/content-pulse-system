import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Certificate.
 *
 * @stability experimental
 */
export interface ICertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Certificate resource.
     */
    readonly certificateRef: CertificateReference;
}
/**
 * A reference to a Certificate resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateReference {
    /**
     * The Id of the Certificate resource.
     */
    readonly certificateId: string;
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
     * The Id of the Endpoint resource.
     */
    readonly endpointId: string;
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
 * Indicates that this resource can be referenced as a ReplicationConfig.
 *
 * @stability experimental
 */
export interface IReplicationConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationConfig resource.
     */
    readonly replicationConfigRef: ReplicationConfigReference;
}
/**
 * A reference to a ReplicationConfig resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationConfigReference {
    /**
     * The ReplicationConfigArn of the ReplicationConfig resource.
     */
    readonly replicationConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicationInstance.
 *
 * @stability experimental
 */
export interface IReplicationInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationInstance resource.
     */
    readonly replicationInstanceRef: ReplicationInstanceReference;
}
/**
 * A reference to a ReplicationInstance resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationInstanceReference {
    /**
     * The Id of the ReplicationInstance resource.
     */
    readonly replicationInstanceId: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicationSubnetGroup.
 *
 * @stability experimental
 */
export interface IReplicationSubnetGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationSubnetGroup resource.
     */
    readonly replicationSubnetGroupRef: ReplicationSubnetGroupReference;
}
/**
 * A reference to a ReplicationSubnetGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationSubnetGroupReference {
    /**
     * The Id of the ReplicationSubnetGroup resource.
     */
    readonly replicationSubnetGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a ReplicationTask.
 *
 * @stability experimental
 */
export interface IReplicationTaskRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReplicationTask resource.
     */
    readonly replicationTaskRef: ReplicationTaskReference;
}
/**
 * A reference to a ReplicationTask resource.
 *
 * @struct
 * @stability external
 */
export interface ReplicationTaskReference {
    /**
     * The Id of the ReplicationTask resource.
     */
    readonly replicationTaskId: string;
}
/**
 * Indicates that this resource can be referenced as a DataMigration.
 *
 * @stability experimental
 */
export interface IDataMigrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataMigration resource.
     */
    readonly dataMigrationRef: DataMigrationReference;
}
/**
 * A reference to a DataMigration resource.
 *
 * @struct
 * @stability external
 */
export interface DataMigrationReference {
    /**
     * The DataMigrationArn of the DataMigration resource.
     */
    readonly dataMigrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataProvider.
 *
 * @stability experimental
 */
export interface IDataProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataProvider resource.
     */
    readonly dataProviderRef: DataProviderReference;
}
/**
 * A reference to a DataProvider resource.
 *
 * @struct
 * @stability external
 */
export interface DataProviderReference {
    /**
     * The DataProviderArn of the DataProvider resource.
     */
    readonly dataProviderArn: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceProfile.
 *
 * @stability experimental
 */
export interface IInstanceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceProfile resource.
     */
    readonly instanceProfileRef: InstanceProfileReference;
}
/**
 * A reference to a InstanceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceProfileReference {
    /**
     * The InstanceProfileArn of the InstanceProfile resource.
     */
    readonly instanceProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a MigrationProject.
 *
 * @stability experimental
 */
export interface IMigrationProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MigrationProject resource.
     */
    readonly migrationProjectRef: MigrationProjectReference;
}
/**
 * A reference to a MigrationProject resource.
 *
 * @struct
 * @stability external
 */
export interface MigrationProjectReference {
    /**
     * The MigrationProjectArn of the MigrationProject resource.
     */
    readonly migrationProjectArn: string;
}
