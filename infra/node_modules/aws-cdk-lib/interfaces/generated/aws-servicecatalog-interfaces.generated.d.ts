import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AcceptedPortfolioShare.
 *
 * @stability experimental
 */
export interface IAcceptedPortfolioShareRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AcceptedPortfolioShare resource.
     */
    readonly acceptedPortfolioShareRef: AcceptedPortfolioShareReference;
}
/**
 * A reference to a AcceptedPortfolioShare resource.
 *
 * @struct
 * @stability external
 */
export interface AcceptedPortfolioShareReference {
    /**
     * The Id of the AcceptedPortfolioShare resource.
     */
    readonly acceptedPortfolioShareId: string;
}
/**
 * Indicates that this resource can be referenced as a CloudFormationProduct.
 *
 * @stability experimental
 */
export interface ICloudFormationProductRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudFormationProduct resource.
     */
    readonly cloudFormationProductRef: CloudFormationProductReference;
}
/**
 * A reference to a CloudFormationProduct resource.
 *
 * @struct
 * @stability external
 */
export interface CloudFormationProductReference {
    /**
     * The Id of the CloudFormationProduct resource.
     */
    readonly cloudFormationProductId: string;
}
/**
 * Indicates that this resource can be referenced as a CloudFormationProvisionedProduct.
 *
 * @stability experimental
 */
export interface ICloudFormationProvisionedProductRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CloudFormationProvisionedProduct resource.
     */
    readonly cloudFormationProvisionedProductRef: CloudFormationProvisionedProductReference;
}
/**
 * A reference to a CloudFormationProvisionedProduct resource.
 *
 * @struct
 * @stability external
 */
export interface CloudFormationProvisionedProductReference {
    /**
     * The ProvisionedProductId of the CloudFormationProvisionedProduct resource.
     */
    readonly provisionedProductId: string;
}
/**
 * Indicates that this resource can be referenced as a LaunchNotificationConstraint.
 *
 * @stability experimental
 */
export interface ILaunchNotificationConstraintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchNotificationConstraint resource.
     */
    readonly launchNotificationConstraintRef: LaunchNotificationConstraintReference;
}
/**
 * A reference to a LaunchNotificationConstraint resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchNotificationConstraintReference {
    /**
     * The Id of the LaunchNotificationConstraint resource.
     */
    readonly launchNotificationConstraintId: string;
}
/**
 * Indicates that this resource can be referenced as a LaunchRoleConstraint.
 *
 * @stability experimental
 */
export interface ILaunchRoleConstraintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchRoleConstraint resource.
     */
    readonly launchRoleConstraintRef: LaunchRoleConstraintReference;
}
/**
 * A reference to a LaunchRoleConstraint resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchRoleConstraintReference {
    /**
     * The Id of the LaunchRoleConstraint resource.
     */
    readonly launchRoleConstraintId: string;
}
/**
 * Indicates that this resource can be referenced as a LaunchTemplateConstraint.
 *
 * @stability experimental
 */
export interface ILaunchTemplateConstraintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchTemplateConstraint resource.
     */
    readonly launchTemplateConstraintRef: LaunchTemplateConstraintReference;
}
/**
 * A reference to a LaunchTemplateConstraint resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchTemplateConstraintReference {
    /**
     * The Id of the LaunchTemplateConstraint resource.
     */
    readonly launchTemplateConstraintId: string;
}
/**
 * Indicates that this resource can be referenced as a Portfolio.
 *
 * @stability experimental
 */
export interface IPortfolioRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Portfolio resource.
     */
    readonly portfolioRef: PortfolioReference;
}
/**
 * A reference to a Portfolio resource.
 *
 * @struct
 * @stability external
 */
export interface PortfolioReference {
    /**
     * The Id of the Portfolio resource.
     */
    readonly portfolioId: string;
}
/**
 * Indicates that this resource can be referenced as a PortfolioPrincipalAssociation.
 *
 * @stability experimental
 */
export interface IPortfolioPrincipalAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PortfolioPrincipalAssociation resource.
     */
    readonly portfolioPrincipalAssociationRef: PortfolioPrincipalAssociationReference;
}
/**
 * A reference to a PortfolioPrincipalAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface PortfolioPrincipalAssociationReference {
    /**
     * The PortfolioId of the PortfolioPrincipalAssociation resource.
     */
    readonly portfolioId: string;
    /**
     * The PrincipalARN of the PortfolioPrincipalAssociation resource.
     */
    readonly principalArn: string;
}
/**
 * Indicates that this resource can be referenced as a PortfolioProductAssociation.
 *
 * @stability experimental
 */
export interface IPortfolioProductAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PortfolioProductAssociation resource.
     */
    readonly portfolioProductAssociationRef: PortfolioProductAssociationReference;
}
/**
 * A reference to a PortfolioProductAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface PortfolioProductAssociationReference {
    /**
     * The PortfolioId of the PortfolioProductAssociation resource.
     */
    readonly portfolioId: string;
    /**
     * The ProductId of the PortfolioProductAssociation resource.
     */
    readonly productId: string;
}
/**
 * Indicates that this resource can be referenced as a PortfolioShare.
 *
 * @stability experimental
 */
export interface IPortfolioShareRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PortfolioShare resource.
     */
    readonly portfolioShareRef: PortfolioShareReference;
}
/**
 * A reference to a PortfolioShare resource.
 *
 * @struct
 * @stability external
 */
export interface PortfolioShareReference {
    /**
     * The PortfolioId of the PortfolioShare resource.
     */
    readonly portfolioId: string;
    /**
     * The AccountId of the PortfolioShare resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceUpdateConstraint.
 *
 * @stability experimental
 */
export interface IResourceUpdateConstraintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceUpdateConstraint resource.
     */
    readonly resourceUpdateConstraintRef: ResourceUpdateConstraintReference;
}
/**
 * A reference to a ResourceUpdateConstraint resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceUpdateConstraintReference {
    /**
     * The Id of the ResourceUpdateConstraint resource.
     */
    readonly resourceUpdateConstraintId: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceAction.
 *
 * @stability experimental
 */
export interface IServiceActionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceAction resource.
     */
    readonly serviceActionRef: ServiceActionReference;
}
/**
 * A reference to a ServiceAction resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceActionReference {
    /**
     * The Id of the ServiceAction resource.
     */
    readonly serviceActionId: string;
}
/**
 * Indicates that this resource can be referenced as a ServiceActionAssociation.
 *
 * @stability experimental
 */
export interface IServiceActionAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ServiceActionAssociation resource.
     */
    readonly serviceActionAssociationRef: ServiceActionAssociationReference;
}
/**
 * A reference to a ServiceActionAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceActionAssociationReference {
    /**
     * The ProductId of the ServiceActionAssociation resource.
     */
    readonly productId: string;
    /**
     * The ProvisioningArtifactId of the ServiceActionAssociation resource.
     */
    readonly provisioningArtifactId: string;
    /**
     * The ServiceActionId of the ServiceActionAssociation resource.
     */
    readonly serviceActionId: string;
}
/**
 * Indicates that this resource can be referenced as a StackSetConstraint.
 *
 * @stability experimental
 */
export interface IStackSetConstraintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StackSetConstraint resource.
     */
    readonly stackSetConstraintRef: StackSetConstraintReference;
}
/**
 * A reference to a StackSetConstraint resource.
 *
 * @struct
 * @stability external
 */
export interface StackSetConstraintReference {
    /**
     * The Id of the StackSetConstraint resource.
     */
    readonly stackSetConstraintId: string;
}
/**
 * Indicates that this resource can be referenced as a TagOption.
 *
 * @stability experimental
 */
export interface ITagOptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TagOption resource.
     */
    readonly tagOptionRef: TagOptionReference;
}
/**
 * A reference to a TagOption resource.
 *
 * @struct
 * @stability external
 */
export interface TagOptionReference {
    /**
     * The Id of the TagOption resource.
     */
    readonly tagOptionId: string;
}
/**
 * Indicates that this resource can be referenced as a TagOptionAssociation.
 *
 * @stability experimental
 */
export interface ITagOptionAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TagOptionAssociation resource.
     */
    readonly tagOptionAssociationRef: TagOptionAssociationReference;
}
/**
 * A reference to a TagOptionAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface TagOptionAssociationReference {
    /**
     * The TagOptionId of the TagOptionAssociation resource.
     */
    readonly tagOptionId: string;
    /**
     * The ResourceId of the TagOptionAssociation resource.
     */
    readonly resourceId: string;
}
