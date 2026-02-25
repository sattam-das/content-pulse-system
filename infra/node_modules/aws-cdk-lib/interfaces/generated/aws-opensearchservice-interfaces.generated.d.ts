import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The DomainName of the Domain resource.
     */
    readonly domainName: string;
    /**
     * The ARN of the Domain resource.
     */
    readonly domainArn: string;
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
     * The Name of the Application resource.
     */
    readonly applicationName: string;
    /**
     * The ARN of the Application resource.
     */
    readonly applicationArn: string;
}
