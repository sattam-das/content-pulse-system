import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a App.
 *
 * @stability experimental
 */
export interface IAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a App resource.
     */
    readonly appRef: AppReference;
}
/**
 * A reference to a App resource.
 *
 * @struct
 * @stability external
 */
export interface AppReference {
    /**
     * The Arn of the App resource.
     */
    readonly appArn: string;
}
/**
 * Indicates that this resource can be referenced as a Branch.
 *
 * @stability experimental
 */
export interface IBranchRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Branch resource.
     */
    readonly branchRef: BranchReference;
}
/**
 * A reference to a Branch resource.
 *
 * @struct
 * @stability external
 */
export interface BranchReference {
    /**
     * The Arn of the Branch resource.
     */
    readonly branchArn: string;
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
     * The Arn of the Domain resource.
     */
    readonly domainArn: string;
}
