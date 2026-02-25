import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AppBlock.
 *
 * @stability experimental
 */
export interface IAppBlockRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AppBlock resource.
     */
    readonly appBlockRef: AppBlockReference;
}
/**
 * A reference to a AppBlock resource.
 *
 * @struct
 * @stability external
 */
export interface AppBlockReference {
    /**
     * The Arn of the AppBlock resource.
     */
    readonly appBlockArn: string;
}
/**
 * Indicates that this resource can be referenced as a AppBlockBuilder.
 *
 * @stability experimental
 */
export interface IAppBlockBuilderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AppBlockBuilder resource.
     */
    readonly appBlockBuilderRef: AppBlockBuilderReference;
}
/**
 * A reference to a AppBlockBuilder resource.
 *
 * @struct
 * @stability external
 */
export interface AppBlockBuilderReference {
    /**
     * The Name of the AppBlockBuilder resource.
     */
    readonly appBlockBuilderName: string;
    /**
     * The ARN of the AppBlockBuilder resource.
     */
    readonly appBlockBuilderArn: string;
}
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
     * The Arn of the Application resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationEntitlementAssociation.
 *
 * @stability experimental
 */
export interface IApplicationEntitlementAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationEntitlementAssociation resource.
     */
    readonly applicationEntitlementAssociationRef: ApplicationEntitlementAssociationReference;
}
/**
 * A reference to a ApplicationEntitlementAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationEntitlementAssociationReference {
    /**
     * The StackName of the ApplicationEntitlementAssociation resource.
     */
    readonly stackName: string;
    /**
     * The EntitlementName of the ApplicationEntitlementAssociation resource.
     */
    readonly entitlementName: string;
    /**
     * The ApplicationIdentifier of the ApplicationEntitlementAssociation resource.
     */
    readonly applicationIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationFleetAssociation.
 *
 * @stability experimental
 */
export interface IApplicationFleetAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationFleetAssociation resource.
     */
    readonly applicationFleetAssociationRef: ApplicationFleetAssociationReference;
}
/**
 * A reference to a ApplicationFleetAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationFleetAssociationReference {
    /**
     * The FleetName of the ApplicationFleetAssociation resource.
     */
    readonly fleetName: string;
    /**
     * The ApplicationArn of the ApplicationFleetAssociation resource.
     */
    readonly applicationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DirectoryConfig.
 *
 * @stability experimental
 */
export interface IDirectoryConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DirectoryConfig resource.
     */
    readonly directoryConfigRef: DirectoryConfigReference;
}
/**
 * A reference to a DirectoryConfig resource.
 *
 * @struct
 * @stability external
 */
export interface DirectoryConfigReference {
    /**
     * The DirectoryName of the DirectoryConfig resource.
     */
    readonly directoryName: string;
}
/**
 * Indicates that this resource can be referenced as a Entitlement.
 *
 * @stability experimental
 */
export interface IEntitlementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Entitlement resource.
     */
    readonly entitlementRef: EntitlementReference;
}
/**
 * A reference to a Entitlement resource.
 *
 * @struct
 * @stability external
 */
export interface EntitlementReference {
    /**
     * The StackName of the Entitlement resource.
     */
    readonly stackName: string;
    /**
     * The Name of the Entitlement resource.
     */
    readonly entitlementName: string;
}
/**
 * Indicates that this resource can be referenced as a Fleet.
 *
 * @stability experimental
 */
export interface IFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Fleet resource.
     */
    readonly fleetRef: FleetReference;
}
/**
 * A reference to a Fleet resource.
 *
 * @struct
 * @stability external
 */
export interface FleetReference {
    /**
     * The Id of the Fleet resource.
     */
    readonly fleetId: string;
}
/**
 * Indicates that this resource can be referenced as a ImageBuilder.
 *
 * @stability experimental
 */
export interface IImageBuilderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ImageBuilder resource.
     */
    readonly imageBuilderRef: ImageBuilderReference;
}
/**
 * A reference to a ImageBuilder resource.
 *
 * @struct
 * @stability external
 */
export interface ImageBuilderReference {
    /**
     * The Name of the ImageBuilder resource.
     */
    readonly imageBuilderName: string;
}
/**
 * Indicates that this resource can be referenced as a Stack.
 *
 * @stability experimental
 */
export interface IStackRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stack resource.
     */
    readonly stackRef: StackReference;
}
/**
 * A reference to a Stack resource.
 *
 * @struct
 * @stability external
 */
export interface StackReference {
    /**
     * The Id of the Stack resource.
     */
    readonly stackId: string;
}
/**
 * Indicates that this resource can be referenced as a StackFleetAssociation.
 *
 * @stability experimental
 */
export interface IStackFleetAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StackFleetAssociation resource.
     */
    readonly stackFleetAssociationRef: StackFleetAssociationReference;
}
/**
 * A reference to a StackFleetAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface StackFleetAssociationReference {
    /**
     * The Id of the StackFleetAssociation resource.
     */
    readonly stackFleetAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a StackUserAssociation.
 *
 * @stability experimental
 */
export interface IStackUserAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StackUserAssociation resource.
     */
    readonly stackUserAssociationRef: StackUserAssociationReference;
}
/**
 * A reference to a StackUserAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface StackUserAssociationReference {
    /**
     * The Id of the StackUserAssociation resource.
     */
    readonly stackUserAssociationId: string;
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
     * The Id of the User resource.
     */
    readonly userId: string;
}
