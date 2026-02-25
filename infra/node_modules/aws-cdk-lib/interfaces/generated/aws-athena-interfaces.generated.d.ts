import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CapacityReservation.
 *
 * @stability experimental
 */
export interface ICapacityReservationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityReservation resource.
     */
    readonly capacityReservationRef: CapacityReservationReference;
}
/**
 * A reference to a CapacityReservation resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityReservationReference {
    /**
     * The Arn of the CapacityReservation resource.
     */
    readonly capacityReservationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataCatalog.
 *
 * @stability experimental
 */
export interface IDataCatalogRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataCatalog resource.
     */
    readonly dataCatalogRef: DataCatalogReference;
}
/**
 * A reference to a DataCatalog resource.
 *
 * @struct
 * @stability external
 */
export interface DataCatalogReference {
    /**
     * The Name of the DataCatalog resource.
     */
    readonly dataCatalogName: string;
}
/**
 * Indicates that this resource can be referenced as a NamedQuery.
 *
 * @stability experimental
 */
export interface INamedQueryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NamedQuery resource.
     */
    readonly namedQueryRef: NamedQueryReference;
}
/**
 * A reference to a NamedQuery resource.
 *
 * @struct
 * @stability external
 */
export interface NamedQueryReference {
    /**
     * The NamedQueryId of the NamedQuery resource.
     */
    readonly namedQueryId: string;
}
/**
 * Indicates that this resource can be referenced as a PreparedStatement.
 *
 * @stability experimental
 */
export interface IPreparedStatementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PreparedStatement resource.
     */
    readonly preparedStatementRef: PreparedStatementReference;
}
/**
 * A reference to a PreparedStatement resource.
 *
 * @struct
 * @stability external
 */
export interface PreparedStatementReference {
    /**
     * The StatementName of the PreparedStatement resource.
     */
    readonly statementName: string;
    /**
     * The WorkGroup of the PreparedStatement resource.
     */
    readonly workGroup: string;
}
/**
 * Indicates that this resource can be referenced as a WorkGroup.
 *
 * @stability experimental
 */
export interface IWorkGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkGroup resource.
     */
    readonly workGroupRef: WorkGroupReference;
}
/**
 * A reference to a WorkGroup resource.
 *
 * @struct
 * @stability external
 */
export interface WorkGroupReference {
    /**
     * The Name of the WorkGroup resource.
     */
    readonly workGroupName: string;
}
