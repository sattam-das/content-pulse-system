import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AnalysisTemplate.
 *
 * @stability experimental
 */
export interface IAnalysisTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AnalysisTemplate resource.
     */
    readonly analysisTemplateRef: AnalysisTemplateReference;
}
/**
 * A reference to a AnalysisTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface AnalysisTemplateReference {
    /**
     * The AnalysisTemplateIdentifier of the AnalysisTemplate resource.
     */
    readonly analysisTemplateIdentifier: string;
    /**
     * The MembershipIdentifier of the AnalysisTemplate resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the AnalysisTemplate resource.
     */
    readonly analysisTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Collaboration.
 *
 * @stability experimental
 */
export interface ICollaborationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Collaboration resource.
     */
    readonly collaborationRef: CollaborationReference;
}
/**
 * A reference to a Collaboration resource.
 *
 * @struct
 * @stability external
 */
export interface CollaborationReference {
    /**
     * The CollaborationIdentifier of the Collaboration resource.
     */
    readonly collaborationIdentifier: string;
    /**
     * The ARN of the Collaboration resource.
     */
    readonly collaborationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfiguredTable.
 *
 * @stability experimental
 */
export interface IConfiguredTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfiguredTable resource.
     */
    readonly configuredTableRef: ConfiguredTableReference;
}
/**
 * A reference to a ConfiguredTable resource.
 *
 * @struct
 * @stability external
 */
export interface ConfiguredTableReference {
    /**
     * The ConfiguredTableIdentifier of the ConfiguredTable resource.
     */
    readonly configuredTableIdentifier: string;
    /**
     * The ARN of the ConfiguredTable resource.
     */
    readonly configuredTableArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfiguredTableAssociation.
 *
 * @stability experimental
 */
export interface IConfiguredTableAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfiguredTableAssociation resource.
     */
    readonly configuredTableAssociationRef: ConfiguredTableAssociationReference;
}
/**
 * A reference to a ConfiguredTableAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ConfiguredTableAssociationReference {
    /**
     * The ConfiguredTableAssociationIdentifier of the ConfiguredTableAssociation resource.
     */
    readonly configuredTableAssociationIdentifier: string;
    /**
     * The MembershipIdentifier of the ConfiguredTableAssociation resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the ConfiguredTableAssociation resource.
     */
    readonly configuredTableAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Membership.
 *
 * @stability experimental
 */
export interface IMembershipRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Membership resource.
     */
    readonly membershipRef: MembershipReference;
}
/**
 * A reference to a Membership resource.
 *
 * @struct
 * @stability external
 */
export interface MembershipReference {
    /**
     * The MembershipIdentifier of the Membership resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the Membership resource.
     */
    readonly membershipArn: string;
}
/**
 * Indicates that this resource can be referenced as a IdMappingTable.
 *
 * @stability experimental
 */
export interface IIdMappingTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdMappingTable resource.
     */
    readonly idMappingTableRef: IdMappingTableReference;
}
/**
 * A reference to a IdMappingTable resource.
 *
 * @struct
 * @stability external
 */
export interface IdMappingTableReference {
    /**
     * The IdMappingTableIdentifier of the IdMappingTable resource.
     */
    readonly idMappingTableIdentifier: string;
    /**
     * The MembershipIdentifier of the IdMappingTable resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the IdMappingTable resource.
     */
    readonly idMappingTableArn: string;
}
/**
 * Indicates that this resource can be referenced as a IdNamespaceAssociation.
 *
 * @stability experimental
 */
export interface IIdNamespaceAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IdNamespaceAssociation resource.
     */
    readonly idNamespaceAssociationRef: IdNamespaceAssociationReference;
}
/**
 * A reference to a IdNamespaceAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface IdNamespaceAssociationReference {
    /**
     * The IdNamespaceAssociationIdentifier of the IdNamespaceAssociation resource.
     */
    readonly idNamespaceAssociationIdentifier: string;
    /**
     * The MembershipIdentifier of the IdNamespaceAssociation resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the IdNamespaceAssociation resource.
     */
    readonly idNamespaceAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a PrivacyBudgetTemplate.
 *
 * @stability experimental
 */
export interface IPrivacyBudgetTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrivacyBudgetTemplate resource.
     */
    readonly privacyBudgetTemplateRef: PrivacyBudgetTemplateReference;
}
/**
 * A reference to a PrivacyBudgetTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface PrivacyBudgetTemplateReference {
    /**
     * The PrivacyBudgetTemplateIdentifier of the PrivacyBudgetTemplate resource.
     */
    readonly privacyBudgetTemplateIdentifier: string;
    /**
     * The MembershipIdentifier of the PrivacyBudgetTemplate resource.
     */
    readonly membershipIdentifier: string;
    /**
     * The ARN of the PrivacyBudgetTemplate resource.
     */
    readonly privacyBudgetTemplateArn: string;
}
