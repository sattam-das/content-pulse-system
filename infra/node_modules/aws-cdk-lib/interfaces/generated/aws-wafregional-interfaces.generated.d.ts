import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ByteMatchSet.
 *
 * @stability experimental
 */
export interface IByteMatchSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ByteMatchSet resource.
     */
    readonly byteMatchSetRef: ByteMatchSetReference;
}
/**
 * A reference to a ByteMatchSet resource.
 *
 * @struct
 * @stability external
 */
export interface ByteMatchSetReference {
    /**
     * The Id of the ByteMatchSet resource.
     */
    readonly byteMatchSetId: string;
}
/**
 * Indicates that this resource can be referenced as a GeoMatchSet.
 *
 * @stability experimental
 */
export interface IGeoMatchSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GeoMatchSet resource.
     */
    readonly geoMatchSetRef: GeoMatchSetReference;
}
/**
 * A reference to a GeoMatchSet resource.
 *
 * @struct
 * @stability external
 */
export interface GeoMatchSetReference {
    /**
     * The Id of the GeoMatchSet resource.
     */
    readonly geoMatchSetId: string;
}
/**
 * Indicates that this resource can be referenced as a IPSet.
 *
 * @stability experimental
 */
export interface IIPSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPSet resource.
     */
    readonly ipSetRef: IPSetReference;
}
/**
 * A reference to a IPSet resource.
 *
 * @struct
 * @stability external
 */
export interface IPSetReference {
    /**
     * The Id of the IPSet resource.
     */
    readonly ipSetId: string;
}
/**
 * Indicates that this resource can be referenced as a RateBasedRule.
 *
 * @stability experimental
 */
export interface IRateBasedRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RateBasedRule resource.
     */
    readonly rateBasedRuleRef: RateBasedRuleReference;
}
/**
 * A reference to a RateBasedRule resource.
 *
 * @struct
 * @stability external
 */
export interface RateBasedRuleReference {
    /**
     * The Id of the RateBasedRule resource.
     */
    readonly rateBasedRuleId: string;
}
/**
 * Indicates that this resource can be referenced as a RegexPatternSet.
 *
 * @stability experimental
 */
export interface IRegexPatternSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RegexPatternSet resource.
     */
    readonly regexPatternSetRef: RegexPatternSetReference;
}
/**
 * A reference to a RegexPatternSet resource.
 *
 * @struct
 * @stability external
 */
export interface RegexPatternSetReference {
    /**
     * The Id of the RegexPatternSet resource.
     */
    readonly regexPatternSetId: string;
}
/**
 * Indicates that this resource can be referenced as a Rule.
 *
 * @stability experimental
 */
export interface IRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Rule resource.
     */
    readonly ruleRef: RuleReference;
}
/**
 * A reference to a Rule resource.
 *
 * @struct
 * @stability external
 */
export interface RuleReference {
    /**
     * The Id of the Rule resource.
     */
    readonly ruleId: string;
}
/**
 * Indicates that this resource can be referenced as a SizeConstraintSet.
 *
 * @stability experimental
 */
export interface ISizeConstraintSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SizeConstraintSet resource.
     */
    readonly sizeConstraintSetRef: SizeConstraintSetReference;
}
/**
 * A reference to a SizeConstraintSet resource.
 *
 * @struct
 * @stability external
 */
export interface SizeConstraintSetReference {
    /**
     * The Id of the SizeConstraintSet resource.
     */
    readonly sizeConstraintSetId: string;
}
/**
 * Indicates that this resource can be referenced as a SqlInjectionMatchSet.
 *
 * @stability experimental
 */
export interface ISqlInjectionMatchSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SqlInjectionMatchSet resource.
     */
    readonly sqlInjectionMatchSetRef: SqlInjectionMatchSetReference;
}
/**
 * A reference to a SqlInjectionMatchSet resource.
 *
 * @struct
 * @stability external
 */
export interface SqlInjectionMatchSetReference {
    /**
     * The Id of the SqlInjectionMatchSet resource.
     */
    readonly sqlInjectionMatchSetId: string;
}
/**
 * Indicates that this resource can be referenced as a WebACL.
 *
 * @stability experimental
 */
export interface IWebACLRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WebACL resource.
     */
    readonly webAclRef: WebACLReference;
}
/**
 * A reference to a WebACL resource.
 *
 * @struct
 * @stability external
 */
export interface WebACLReference {
    /**
     * The Id of the WebACL resource.
     */
    readonly webAclId: string;
}
/**
 * Indicates that this resource can be referenced as a WebACLAssociation.
 *
 * @stability experimental
 */
export interface IWebACLAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WebACLAssociation resource.
     */
    readonly webAclAssociationRef: WebACLAssociationReference;
}
/**
 * A reference to a WebACLAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface WebACLAssociationReference {
    /**
     * The Id of the WebACLAssociation resource.
     */
    readonly webAclAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a XssMatchSet.
 *
 * @stability experimental
 */
export interface IXssMatchSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a XssMatchSet resource.
     */
    readonly xssMatchSetRef: XssMatchSetReference;
}
/**
 * A reference to a XssMatchSet resource.
 *
 * @struct
 * @stability external
 */
export interface XssMatchSetReference {
    /**
     * The Id of the XssMatchSet resource.
     */
    readonly xssMatchSetId: string;
}
