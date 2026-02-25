import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Broker.
 *
 * @stability experimental
 */
export interface IBrokerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Broker resource.
     */
    readonly brokerRef: BrokerReference;
}
/**
 * A reference to a Broker resource.
 *
 * @struct
 * @stability external
 */
export interface BrokerReference {
    /**
     * The Id of the Broker resource.
     */
    readonly brokerId: string;
    /**
     * The ARN of the Broker resource.
     */
    readonly brokerArn: string;
}
/**
 * Indicates that this resource can be referenced as a Configuration.
 *
 * @stability experimental
 */
export interface IConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Configuration resource.
     */
    readonly configurationRef: ConfigurationReference;
}
/**
 * A reference to a Configuration resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationReference {
    /**
     * The Id of the Configuration resource.
     */
    readonly configurationId: string;
    /**
     * The ARN of the Configuration resource.
     */
    readonly configurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationAssociation.
 *
 * @stability experimental
 */
export interface IConfigurationAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationAssociation resource.
     */
    readonly configurationAssociationRef: ConfigurationAssociationReference;
}
/**
 * A reference to a ConfigurationAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationAssociationReference {
    /**
     * The Id of the ConfigurationAssociation resource.
     */
    readonly configurationAssociationId: string;
}
