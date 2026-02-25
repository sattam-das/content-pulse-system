import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The Id of the Application resource.
     */
    readonly applicationId: string;
    /**
     * The ARN of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a AttributeGroup.
 *
 * @stability experimental
 */
export interface IAttributeGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AttributeGroup resource.
     */
    readonly attributeGroupRef: AttributeGroupReference;
}
/**
 * A reference to a AttributeGroup resource.
 *
 * @struct
 * @stability external
 */
export interface AttributeGroupReference {
    /**
     * The Id of the AttributeGroup resource.
     */
    readonly attributeGroupId: string;
    /**
     * The ARN of the AttributeGroup resource.
     */
    readonly attributeGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a AttributeGroupAssociation.
 *
 * @stability experimental
 */
export interface IAttributeGroupAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AttributeGroupAssociation resource.
     */
    readonly attributeGroupAssociationRef: AttributeGroupAssociationReference;
}
/**
 * A reference to a AttributeGroupAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface AttributeGroupAssociationReference {
    /**
     * The ApplicationArn of the AttributeGroupAssociation resource.
     */
    readonly applicationArn: string;
    /**
     * The AttributeGroupArn of the AttributeGroupAssociation resource.
     */
    readonly attributeGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceAssociation.
 *
 * @stability experimental
 */
export interface IResourceAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceAssociation resource.
     */
    readonly resourceAssociationRef: ResourceAssociationReference;
}
/**
 * A reference to a ResourceAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceAssociationReference {
    /**
     * The ApplicationArn of the ResourceAssociation resource.
     */
    readonly applicationArn: string;
    /**
     * The ResourceArn of the ResourceAssociation resource.
     */
    readonly resourceArn: string;
    /**
     * The ResourceType of the ResourceAssociation resource.
     */
    readonly resourceType: string;
}
