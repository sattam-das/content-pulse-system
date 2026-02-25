import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Connector.
 *
 * @stability experimental
 */
export interface IConnectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connector resource.
     */
    readonly connectorRef: ConnectorReference;
}
/**
 * A reference to a Connector resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorReference {
    /**
     * The ConnectorLabel of the Connector resource.
     */
    readonly connectorLabel: string;
    /**
     * The ARN of the Connector resource.
     */
    readonly connectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectorProfile.
 *
 * @stability experimental
 */
export interface IConnectorProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectorProfile resource.
     */
    readonly connectorProfileRef: ConnectorProfileReference;
}
/**
 * A reference to a ConnectorProfile resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorProfileReference {
    /**
     * The ConnectorProfileName of the ConnectorProfile resource.
     */
    readonly connectorProfileName: string;
    /**
     * The ARN of the ConnectorProfile resource.
     */
    readonly connectorProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Flow.
 *
 * @stability experimental
 */
export interface IFlowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Flow resource.
     */
    readonly flowRef: FlowReference;
}
/**
 * A reference to a Flow resource.
 *
 * @struct
 * @stability external
 */
export interface FlowReference {
    /**
     * The FlowName of the Flow resource.
     */
    readonly flowName: string;
    /**
     * The ARN of the Flow resource.
     */
    readonly flowArn: string;
}
