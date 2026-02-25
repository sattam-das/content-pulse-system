import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DataCellsFilter.
 *
 * @stability experimental
 */
export interface IDataCellsFilterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataCellsFilter resource.
     */
    readonly dataCellsFilterRef: DataCellsFilterReference;
}
/**
 * A reference to a DataCellsFilter resource.
 *
 * @struct
 * @stability external
 */
export interface DataCellsFilterReference {
    /**
     * The TableCatalogId of the DataCellsFilter resource.
     */
    readonly tableCatalogId: string;
    /**
     * The DatabaseName of the DataCellsFilter resource.
     */
    readonly databaseName: string;
    /**
     * The TableName of the DataCellsFilter resource.
     */
    readonly tableName: string;
    /**
     * The Name of the DataCellsFilter resource.
     */
    readonly dataCellsFilterName: string;
}
/**
 * Indicates that this resource can be referenced as a DataLakeSettings.
 *
 * @stability experimental
 */
export interface IDataLakeSettingsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataLakeSettings resource.
     */
    readonly dataLakeSettingsRef: DataLakeSettingsReference;
}
/**
 * A reference to a DataLakeSettings resource.
 *
 * @struct
 * @stability external
 */
export interface DataLakeSettingsReference {
    /**
     * The Id of the DataLakeSettings resource.
     */
    readonly dataLakeSettingsId: string;
}
/**
 * Indicates that this resource can be referenced as a Permissions.
 *
 * @stability experimental
 */
export interface IPermissionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Permissions resource.
     */
    readonly permissionsRef: PermissionsReference;
}
/**
 * A reference to a Permissions resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionsReference {
    /**
     * The Id of the Permissions resource.
     */
    readonly permissionsId: string;
}
/**
 * Indicates that this resource can be referenced as a PrincipalPermissions.
 *
 * @stability experimental
 */
export interface IPrincipalPermissionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrincipalPermissions resource.
     */
    readonly principalPermissionsRef: PrincipalPermissionsReference;
}
/**
 * A reference to a PrincipalPermissions resource.
 *
 * @struct
 * @stability external
 */
export interface PrincipalPermissionsReference {
    /**
     * The PrincipalIdentifier of the PrincipalPermissions resource.
     */
    readonly principalIdentifier: string;
    /**
     * The ResourceIdentifier of the PrincipalPermissions resource.
     */
    readonly resourceIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a Resource.
 *
 * @stability experimental
 */
export interface IResourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Resource resource.
     */
    readonly resourceRef: ResourceReference;
}
/**
 * A reference to a Resource resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceReference {
    /**
     * The Id of the Resource resource.
     */
    readonly resourceId: string;
}
/**
 * Indicates that this resource can be referenced as a Tag.
 *
 * @stability experimental
 */
export interface ITagRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Tag resource.
     */
    readonly tagRef: TagReference;
}
/**
 * A reference to a Tag resource.
 *
 * @struct
 * @stability external
 */
export interface TagReference {
    /**
     * The TagKey of the Tag resource.
     */
    readonly tagKey: string;
}
/**
 * Indicates that this resource can be referenced as a TagAssociation.
 *
 * @stability experimental
 */
export interface ITagAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TagAssociation resource.
     */
    readonly tagAssociationRef: TagAssociationReference;
}
/**
 * A reference to a TagAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface TagAssociationReference {
    /**
     * The ResourceIdentifier of the TagAssociation resource.
     */
    readonly resourceIdentifier: string;
    /**
     * The TagsIdentifier of the TagAssociation resource.
     */
    readonly tagsIdentifier: string;
}
