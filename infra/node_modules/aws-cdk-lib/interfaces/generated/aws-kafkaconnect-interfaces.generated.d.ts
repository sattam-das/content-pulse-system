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
     * The ConnectorArn of the Connector resource.
     */
    readonly connectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomPlugin.
 *
 * @stability experimental
 */
export interface ICustomPluginRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomPlugin resource.
     */
    readonly customPluginRef: CustomPluginReference;
}
/**
 * A reference to a CustomPlugin resource.
 *
 * @struct
 * @stability external
 */
export interface CustomPluginReference {
    /**
     * The CustomPluginArn of the CustomPlugin resource.
     */
    readonly customPluginArn: string;
}
/**
 * Indicates that this resource can be referenced as a WorkerConfiguration.
 *
 * @stability experimental
 */
export interface IWorkerConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkerConfiguration resource.
     */
    readonly workerConfigurationRef: WorkerConfigurationReference;
}
/**
 * A reference to a WorkerConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface WorkerConfigurationReference {
    /**
     * The WorkerConfigurationArn of the WorkerConfiguration resource.
     */
    readonly workerConfigurationArn: string;
}
