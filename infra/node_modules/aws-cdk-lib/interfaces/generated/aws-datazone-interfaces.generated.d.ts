import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Connection.
 *
 * @stability experimental
 */
export interface IConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connection resource.
     */
    readonly connectionRef: ConnectionReference;
}
/**
 * A reference to a Connection resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectionReference {
    /**
     * The DomainId of the Connection resource.
     */
    readonly domainId: string;
    /**
     * The ConnectionId of the Connection resource.
     */
    readonly connectionId: string;
}
/**
 * Indicates that this resource can be referenced as a DataSource.
 *
 * @stability experimental
 */
export interface IDataSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataSource resource.
     */
    readonly dataSourceRef: DataSourceReference;
}
/**
 * A reference to a DataSource resource.
 *
 * @struct
 * @stability external
 */
export interface DataSourceReference {
    /**
     * The DomainId of the DataSource resource.
     */
    readonly domainId: string;
    /**
     * The Id of the DataSource resource.
     */
    readonly dataSourceId: string;
}
/**
 * Indicates that this resource can be referenced as a Domain.
 *
 * @stability experimental
 */
export interface IDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Domain resource.
     */
    readonly domainRef: DomainReference;
}
/**
 * A reference to a Domain resource.
 *
 * @struct
 * @stability external
 */
export interface DomainReference {
    /**
     * The Id of the Domain resource.
     */
    readonly domainId: string;
    /**
     * The ARN of the Domain resource.
     */
    readonly domainArn: string;
}
/**
 * Indicates that this resource can be referenced as a DomainUnit.
 *
 * @stability experimental
 */
export interface IDomainUnitRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainUnit resource.
     */
    readonly domainUnitRef: DomainUnitReference;
}
/**
 * A reference to a DomainUnit resource.
 *
 * @struct
 * @stability external
 */
export interface DomainUnitReference {
    /**
     * The DomainId of the DomainUnit resource.
     */
    readonly domainId: string;
    /**
     * The Id of the DomainUnit resource.
     */
    readonly domainUnitId: string;
}
/**
 * Indicates that this resource can be referenced as a Environment.
 *
 * @stability experimental
 */
export interface IEnvironmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Environment resource.
     */
    readonly environmentRef: EnvironmentReference;
}
/**
 * A reference to a Environment resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentReference {
    /**
     * The DomainId of the Environment resource.
     */
    readonly domainId: string;
    /**
     * The Id of the Environment resource.
     */
    readonly environmentId: string;
}
/**
 * Indicates that this resource can be referenced as a EnvironmentActions.
 *
 * @stability experimental
 */
export interface IEnvironmentActionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentActions resource.
     */
    readonly environmentActionsRef: EnvironmentActionsReference;
}
/**
 * A reference to a EnvironmentActions resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentActionsReference {
    /**
     * The DomainId of the EnvironmentActions resource.
     */
    readonly domainId: string;
    /**
     * The EnvironmentId of the EnvironmentActions resource.
     */
    readonly environmentId: string;
    /**
     * The Id of the EnvironmentActions resource.
     */
    readonly environmentActionsId: string;
}
/**
 * Indicates that this resource can be referenced as a EnvironmentBlueprintConfiguration.
 *
 * @stability experimental
 */
export interface IEnvironmentBlueprintConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentBlueprintConfiguration resource.
     */
    readonly environmentBlueprintConfigurationRef: EnvironmentBlueprintConfigurationReference;
}
/**
 * A reference to a EnvironmentBlueprintConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentBlueprintConfigurationReference {
    /**
     * The DomainId of the EnvironmentBlueprintConfiguration resource.
     */
    readonly domainId: string;
    /**
     * The EnvironmentBlueprintId of the EnvironmentBlueprintConfiguration resource.
     */
    readonly environmentBlueprintId: string;
}
/**
 * Indicates that this resource can be referenced as a EnvironmentProfile.
 *
 * @stability experimental
 */
export interface IEnvironmentProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnvironmentProfile resource.
     */
    readonly environmentProfileRef: EnvironmentProfileReference;
}
/**
 * A reference to a EnvironmentProfile resource.
 *
 * @struct
 * @stability external
 */
export interface EnvironmentProfileReference {
    /**
     * The DomainId of the EnvironmentProfile resource.
     */
    readonly domainId: string;
    /**
     * The Id of the EnvironmentProfile resource.
     */
    readonly environmentProfileId: string;
}
/**
 * Indicates that this resource can be referenced as a FormType.
 *
 * @stability experimental
 */
export interface IFormTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FormType resource.
     */
    readonly formTypeRef: FormTypeReference;
}
/**
 * A reference to a FormType resource.
 *
 * @struct
 * @stability external
 */
export interface FormTypeReference {
    /**
     * The DomainIdentifier of the FormType resource.
     */
    readonly domainIdentifier: string;
    /**
     * The FormTypeIdentifier of the FormType resource.
     */
    readonly formTypeIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a GroupProfile.
 *
 * @stability experimental
 */
export interface IGroupProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GroupProfile resource.
     */
    readonly groupProfileRef: GroupProfileReference;
}
/**
 * A reference to a GroupProfile resource.
 *
 * @struct
 * @stability external
 */
export interface GroupProfileReference {
    /**
     * The DomainId of the GroupProfile resource.
     */
    readonly domainId: string;
    /**
     * The Id of the GroupProfile resource.
     */
    readonly groupProfileId: string;
}
/**
 * Indicates that this resource can be referenced as a Owner.
 *
 * @stability experimental
 */
export interface IOwnerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Owner resource.
     */
    readonly ownerRef: OwnerReference;
}
/**
 * A reference to a Owner resource.
 *
 * @struct
 * @stability external
 */
export interface OwnerReference {
    /**
     * The DomainIdentifier of the Owner resource.
     */
    readonly domainIdentifier: string;
    /**
     * The EntityType of the Owner resource.
     */
    readonly entityType: string;
    /**
     * The EntityIdentifier of the Owner resource.
     */
    readonly entityIdentifier: string;
    /**
     * The OwnerType of the Owner resource.
     */
    readonly ownerType: string;
    /**
     * The OwnerIdentifier of the Owner resource.
     */
    readonly ownerIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a PolicyGrant.
 *
 * @stability experimental
 */
export interface IPolicyGrantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PolicyGrant resource.
     */
    readonly policyGrantRef: PolicyGrantReference;
}
/**
 * A reference to a PolicyGrant resource.
 *
 * @struct
 * @stability external
 */
export interface PolicyGrantReference {
    /**
     * The DomainIdentifier of the PolicyGrant resource.
     */
    readonly domainIdentifier: string;
    /**
     * The GrantId of the PolicyGrant resource.
     */
    readonly grantId: string;
    /**
     * The EntityIdentifier of the PolicyGrant resource.
     */
    readonly entityIdentifier: string;
    /**
     * The EntityType of the PolicyGrant resource.
     */
    readonly entityType: string;
    /**
     * The PolicyType of the PolicyGrant resource.
     */
    readonly policyType: string;
}
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The DomainId of the Project resource.
     */
    readonly domainId: string;
    /**
     * The Id of the Project resource.
     */
    readonly projectId: string;
}
/**
 * Indicates that this resource can be referenced as a ProjectMembership.
 *
 * @stability experimental
 */
export interface IProjectMembershipRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProjectMembership resource.
     */
    readonly projectMembershipRef: ProjectMembershipReference;
}
/**
 * A reference to a ProjectMembership resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectMembershipReference {
    /**
     * The DomainIdentifier of the ProjectMembership resource.
     */
    readonly domainIdentifier: string;
    /**
     * The MemberIdentifier of the ProjectMembership resource.
     */
    readonly memberIdentifier: string;
    /**
     * The MemberIdentifierType of the ProjectMembership resource.
     */
    readonly memberIdentifierType: string;
    /**
     * The ProjectIdentifier of the ProjectMembership resource.
     */
    readonly projectIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a ProjectProfile.
 *
 * @stability experimental
 */
export interface IProjectProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProjectProfile resource.
     */
    readonly projectProfileRef: ProjectProfileReference;
}
/**
 * A reference to a ProjectProfile resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectProfileReference {
    /**
     * The DomainIdentifier of the ProjectProfile resource.
     */
    readonly domainIdentifier: string;
    /**
     * The Identifier of the ProjectProfile resource.
     */
    readonly identifier: string;
}
/**
 * Indicates that this resource can be referenced as a SubscriptionTarget.
 *
 * @stability experimental
 */
export interface ISubscriptionTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubscriptionTarget resource.
     */
    readonly subscriptionTargetRef: SubscriptionTargetReference;
}
/**
 * A reference to a SubscriptionTarget resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriptionTargetReference {
    /**
     * The DomainId of the SubscriptionTarget resource.
     */
    readonly domainId: string;
    /**
     * The EnvironmentId of the SubscriptionTarget resource.
     */
    readonly environmentId: string;
    /**
     * The Id of the SubscriptionTarget resource.
     */
    readonly subscriptionTargetId: string;
}
/**
 * Indicates that this resource can be referenced as a UserProfile.
 *
 * @stability experimental
 */
export interface IUserProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UserProfile resource.
     */
    readonly userProfileRef: UserProfileReference;
}
/**
 * A reference to a UserProfile resource.
 *
 * @struct
 * @stability external
 */
export interface UserProfileReference {
    /**
     * The DomainId of the UserProfile resource.
     */
    readonly domainId: string;
    /**
     * The Id of the UserProfile resource.
     */
    readonly userProfileId: string;
}
