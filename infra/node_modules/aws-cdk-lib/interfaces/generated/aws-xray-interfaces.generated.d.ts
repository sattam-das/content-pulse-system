import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Group.
 *
 * @stability experimental
 */
export interface IGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Group resource.
     */
    readonly groupRef: GroupReference;
}
/**
 * A reference to a Group resource.
 *
 * @struct
 * @stability external
 */
export interface GroupReference {
    /**
     * The GroupARN of the Group resource.
     */
    readonly groupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The PolicyName of the ResourcePolicy resource.
     */
    readonly policyName: string;
}
/**
 * Indicates that this resource can be referenced as a SamplingRule.
 *
 * @stability experimental
 */
export interface ISamplingRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SamplingRule resource.
     */
    readonly samplingRuleRef: SamplingRuleReference;
}
/**
 * A reference to a SamplingRule resource.
 *
 * @struct
 * @stability external
 */
export interface SamplingRuleReference {
    /**
     * The RuleARN of the SamplingRule resource.
     */
    readonly ruleArn: string;
}
/**
 * Indicates that this resource can be referenced as a TransactionSearchConfig.
 *
 * @stability experimental
 */
export interface ITransactionSearchConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransactionSearchConfig resource.
     */
    readonly transactionSearchConfigRef: TransactionSearchConfigReference;
}
/**
 * A reference to a TransactionSearchConfig resource.
 *
 * @struct
 * @stability external
 */
export interface TransactionSearchConfigReference {
    /**
     * The AccountId of the TransactionSearchConfig resource.
     */
    readonly accountId: string;
}
