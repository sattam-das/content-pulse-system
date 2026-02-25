import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Database.
 *
 * @stability experimental
 */
export interface IDatabaseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Database resource.
     */
    readonly databaseRef: DatabaseReference;
}
/**
 * A reference to a Database resource.
 *
 * @struct
 * @stability external
 */
export interface DatabaseReference {
    /**
     * The DatabaseName of the Database resource.
     */
    readonly databaseName: string;
    /**
     * The ARN of the Database resource.
     */
    readonly databaseArn: string;
}
/**
 * Indicates that this resource can be referenced as a ScheduledQuery.
 *
 * @stability experimental
 */
export interface IScheduledQueryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ScheduledQuery resource.
     */
    readonly scheduledQueryRef: ScheduledQueryReference;
}
/**
 * A reference to a ScheduledQuery resource.
 *
 * @struct
 * @stability external
 */
export interface ScheduledQueryReference {
    /**
     * The Arn of the ScheduledQuery resource.
     */
    readonly scheduledQueryArn: string;
}
/**
 * Indicates that this resource can be referenced as a Table.
 *
 * @stability experimental
 */
export interface ITableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Table resource.
     */
    readonly tableRef: TableReference;
}
/**
 * A reference to a Table resource.
 *
 * @struct
 * @stability external
 */
export interface TableReference {
    /**
     * The DatabaseName of the Table resource.
     */
    readonly databaseName: string;
    /**
     * The TableName of the Table resource.
     */
    readonly tableName: string;
    /**
     * The ARN of the Table resource.
     */
    readonly tableArn: string;
}
/**
 * Indicates that this resource can be referenced as a InfluxDBInstance.
 *
 * @stability experimental
 */
export interface IInfluxDBInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InfluxDBInstance resource.
     */
    readonly influxDbInstanceRef: InfluxDBInstanceReference;
}
/**
 * A reference to a InfluxDBInstance resource.
 *
 * @struct
 * @stability external
 */
export interface InfluxDBInstanceReference {
    /**
     * The Id of the InfluxDBInstance resource.
     */
    readonly influxDbInstanceId: string;
    /**
     * The ARN of the InfluxDBInstance resource.
     */
    readonly influxDbInstanceArn: string;
}
