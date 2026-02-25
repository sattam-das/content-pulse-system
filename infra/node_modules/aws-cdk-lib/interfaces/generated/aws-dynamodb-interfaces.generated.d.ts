import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a GlobalTable.
 *
 * @stability experimental
 */
export interface IGlobalTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GlobalTable resource.
     */
    readonly globalTableRef: GlobalTableReference;
}
/**
 * A reference to a GlobalTable resource.
 *
 * @struct
 * @stability external
 */
export interface GlobalTableReference {
    /**
     * The TableName of the GlobalTable resource.
     */
    readonly tableName: string;
    /**
     * The ARN of the GlobalTable resource.
     */
    readonly globalTableArn: string;
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
     * The TableName of the Table resource.
     */
    readonly tableName: string;
    /**
     * The ARN of the Table resource.
     */
    readonly tableArn: string;
}
