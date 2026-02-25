import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CaseRule.
 *
 * @stability experimental
 */
export interface ICaseRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CaseRule resource.
     */
    readonly caseRuleRef: CaseRuleReference;
}
/**
 * A reference to a CaseRule resource.
 *
 * @struct
 * @stability external
 */
export interface CaseRuleReference {
    /**
     * The CaseRuleArn of the CaseRule resource.
     */
    readonly caseRuleArn: string;
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
     * The DomainArn of the Domain resource.
     */
    readonly domainArn: string;
}
/**
 * Indicates that this resource can be referenced as a Field.
 *
 * @stability experimental
 */
export interface IFieldRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Field resource.
     */
    readonly fieldRef: FieldReference;
}
/**
 * A reference to a Field resource.
 *
 * @struct
 * @stability external
 */
export interface FieldReference {
    /**
     * The FieldArn of the Field resource.
     */
    readonly fieldArn: string;
}
/**
 * Indicates that this resource can be referenced as a Layout.
 *
 * @stability experimental
 */
export interface ILayoutRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Layout resource.
     */
    readonly layoutRef: LayoutReference;
}
/**
 * A reference to a Layout resource.
 *
 * @struct
 * @stability external
 */
export interface LayoutReference {
    /**
     * The LayoutArn of the Layout resource.
     */
    readonly layoutArn: string;
}
/**
 * Indicates that this resource can be referenced as a Template.
 *
 * @stability experimental
 */
export interface ITemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Template resource.
     */
    readonly templateRef: TemplateReference;
}
/**
 * A reference to a Template resource.
 *
 * @struct
 * @stability external
 */
export interface TemplateReference {
    /**
     * The TemplateArn of the Template resource.
     */
    readonly templateArn: string;
}
