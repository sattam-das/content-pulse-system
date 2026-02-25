import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Keyspace.
 *
 * @stability experimental
 */
export interface IKeyspaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Keyspace resource.
     */
    readonly keyspaceRef: KeyspaceReference;
}
/**
 * A reference to a Keyspace resource.
 *
 * @struct
 * @stability external
 */
export interface KeyspaceReference {
    /**
     * The KeyspaceName of the Keyspace resource.
     */
    readonly keyspaceName: string;
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
     * The KeyspaceName of the Table resource.
     */
    readonly keyspaceName: string;
    /**
     * The TableName of the Table resource.
     */
    readonly tableName: string;
}
/**
 * Indicates that this resource can be referenced as a Type.
 *
 * @stability experimental
 */
export interface ITypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Type resource.
     */
    readonly typeRef: TypeReference;
}
/**
 * A reference to a Type resource.
 *
 * @struct
 * @stability external
 */
export interface TypeReference {
    /**
     * The KeyspaceName of the Type resource.
     */
    readonly keyspaceName: string;
    /**
     * The TypeName of the Type resource.
     */
    readonly typeName: string;
}
