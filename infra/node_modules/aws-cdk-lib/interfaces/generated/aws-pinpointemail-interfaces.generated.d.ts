import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConfigurationSet.
 *
 * @stability experimental
 */
export interface IConfigurationSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationSet resource.
     */
    readonly configurationSetRef: ConfigurationSetReference;
}
/**
 * A reference to a ConfigurationSet resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationSetReference {
    /**
     * The Id of the ConfigurationSet resource.
     */
    readonly configurationSetId: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationSetEventDestination.
 *
 * @stability experimental
 */
export interface IConfigurationSetEventDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationSetEventDestination resource.
     */
    readonly configurationSetEventDestinationRef: ConfigurationSetEventDestinationReference;
}
/**
 * A reference to a ConfigurationSetEventDestination resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationSetEventDestinationReference {
    /**
     * The Id of the ConfigurationSetEventDestination resource.
     */
    readonly configurationSetEventDestinationId: string;
}
/**
 * Indicates that this resource can be referenced as a DedicatedIpPool.
 *
 * @stability experimental
 */
export interface IDedicatedIpPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DedicatedIpPool resource.
     */
    readonly dedicatedIpPoolRef: DedicatedIpPoolReference;
}
/**
 * A reference to a DedicatedIpPool resource.
 *
 * @struct
 * @stability external
 */
export interface DedicatedIpPoolReference {
    /**
     * The Id of the DedicatedIpPool resource.
     */
    readonly dedicatedIpPoolId: string;
}
/**
 * Indicates that this resource can be referenced as a Identity.
 *
 * @stability experimental
 */
export interface IIdentityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Identity resource.
     */
    readonly identityRef: IdentityReference;
}
/**
 * A reference to a Identity resource.
 *
 * @struct
 * @stability external
 */
export interface IdentityReference {
    /**
     * The Id of the Identity resource.
     */
    readonly identityId: string;
}
