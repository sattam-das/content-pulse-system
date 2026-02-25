import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Discoverer.
 *
 * @stability experimental
 */
export interface IDiscovererRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Discoverer resource.
     */
    readonly discovererRef: DiscovererReference;
}
/**
 * A reference to a Discoverer resource.
 *
 * @struct
 * @stability external
 */
export interface DiscovererReference {
    /**
     * The DiscovererArn of the Discoverer resource.
     */
    readonly discovererArn: string;
}
/**
 * Indicates that this resource can be referenced as a Registry.
 *
 * @stability experimental
 */
export interface IRegistryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Registry resource.
     */
    readonly registryRef: RegistryReference;
}
/**
 * A reference to a Registry resource.
 *
 * @struct
 * @stability external
 */
export interface RegistryReference {
    /**
     * The RegistryArn of the Registry resource.
     */
    readonly registryArn: string;
}
/**
 * Indicates that this resource can be referenced as a RegistryPolicy.
 *
 * @stability experimental
 */
export interface IRegistryPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RegistryPolicy resource.
     */
    readonly registryPolicyRef: RegistryPolicyReference;
}
/**
 * A reference to a RegistryPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface RegistryPolicyReference {
    /**
     * The RegistryName of the RegistryPolicy resource.
     */
    readonly registryName: string;
}
/**
 * Indicates that this resource can be referenced as a Schema.
 *
 * @stability experimental
 */
export interface ISchemaRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Schema resource.
     */
    readonly schemaRef: SchemaReference;
}
/**
 * A reference to a Schema resource.
 *
 * @struct
 * @stability external
 */
export interface SchemaReference {
    /**
     * The SchemaArn of the Schema resource.
     */
    readonly schemaArn: string;
}
