import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Name of the IPSet resource.
     */
    readonly ipSetName: string;
    /**
     * The Id of the IPSet resource.
     */
    readonly ipSetId: string;
    /**
     * The Scope of the IPSet resource.
     */
    readonly scope: string;
    /**
     * The ARN of the IPSet resource.
     */
    readonly ipSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a LoggingConfiguration.
 *
 * @stability experimental
 */
export interface ILoggingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoggingConfiguration resource.
     */
    readonly loggingConfigurationRef: LoggingConfigurationReference;
}
/**
 * A reference to a LoggingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface LoggingConfigurationReference {
    /**
     * The ResourceArn of the LoggingConfiguration resource.
     */
    readonly resourceArn: string;
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
     * The Name of the RegexPatternSet resource.
     */
    readonly regexPatternSetName: string;
    /**
     * The Id of the RegexPatternSet resource.
     */
    readonly regexPatternSetId: string;
    /**
     * The Scope of the RegexPatternSet resource.
     */
    readonly scope: string;
    /**
     * The ARN of the RegexPatternSet resource.
     */
    readonly regexPatternSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a RuleGroup.
 *
 * @stability experimental
 */
export interface IRuleGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RuleGroup resource.
     */
    readonly ruleGroupRef: RuleGroupReference;
}
/**
 * A reference to a RuleGroup resource.
 *
 * @struct
 * @stability external
 */
export interface RuleGroupReference {
    /**
     * The Name of the RuleGroup resource.
     */
    readonly ruleGroupName: string;
    /**
     * The Id of the RuleGroup resource.
     */
    readonly ruleGroupId: string;
    /**
     * The Scope of the RuleGroup resource.
     */
    readonly scope: string;
    /**
     * The ARN of the RuleGroup resource.
     */
    readonly ruleGroupArn: string;
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
     * The Name of the WebACL resource.
     */
    readonly webAclName: string;
    /**
     * The Id of the WebACL resource.
     */
    readonly webAclId: string;
    /**
     * The Scope of the WebACL resource.
     */
    readonly scope: string;
    /**
     * The ARN of the WebACL resource.
     */
    readonly webAclArn: string;
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
     * The ResourceArn of the WebACLAssociation resource.
     */
    readonly resourceArn: string;
    /**
     * The WebACLArn of the WebACLAssociation resource.
     */
    readonly webAclArn: string;
}
