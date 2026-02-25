import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConnectorDefinition.
 *
 * @stability experimental
 */
export interface IConnectorDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectorDefinition resource.
     */
    readonly connectorDefinitionRef: ConnectorDefinitionReference;
}
/**
 * A reference to a ConnectorDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorDefinitionReference {
    /**
     * The Id of the ConnectorDefinition resource.
     */
    readonly connectorDefinitionId: string;
    /**
     * The ARN of the ConnectorDefinition resource.
     */
    readonly connectorDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectorDefinitionVersion.
 *
 * @stability experimental
 */
export interface IConnectorDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectorDefinitionVersion resource.
     */
    readonly connectorDefinitionVersionRef: ConnectorDefinitionVersionReference;
}
/**
 * A reference to a ConnectorDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorDefinitionVersionReference {
    /**
     * The Id of the ConnectorDefinitionVersion resource.
     */
    readonly connectorDefinitionVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a CoreDefinition.
 *
 * @stability experimental
 */
export interface ICoreDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CoreDefinition resource.
     */
    readonly coreDefinitionRef: CoreDefinitionReference;
}
/**
 * A reference to a CoreDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface CoreDefinitionReference {
    /**
     * The Id of the CoreDefinition resource.
     */
    readonly coreDefinitionId: string;
    /**
     * The ARN of the CoreDefinition resource.
     */
    readonly coreDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a CoreDefinitionVersion.
 *
 * @stability experimental
 */
export interface ICoreDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CoreDefinitionVersion resource.
     */
    readonly coreDefinitionVersionRef: CoreDefinitionVersionReference;
}
/**
 * A reference to a CoreDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface CoreDefinitionVersionReference {
    /**
     * The Id of the CoreDefinitionVersion resource.
     */
    readonly coreDefinitionVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a DeviceDefinition.
 *
 * @stability experimental
 */
export interface IDeviceDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeviceDefinition resource.
     */
    readonly deviceDefinitionRef: DeviceDefinitionReference;
}
/**
 * A reference to a DeviceDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceDefinitionReference {
    /**
     * The Id of the DeviceDefinition resource.
     */
    readonly deviceDefinitionId: string;
    /**
     * The ARN of the DeviceDefinition resource.
     */
    readonly deviceDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a DeviceDefinitionVersion.
 *
 * @stability experimental
 */
export interface IDeviceDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeviceDefinitionVersion resource.
     */
    readonly deviceDefinitionVersionRef: DeviceDefinitionVersionReference;
}
/**
 * A reference to a DeviceDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceDefinitionVersionReference {
    /**
     * The Id of the DeviceDefinitionVersion resource.
     */
    readonly deviceDefinitionVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a FunctionDefinition.
 *
 * @stability experimental
 */
export interface IFunctionDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FunctionDefinition resource.
     */
    readonly functionDefinitionRef: FunctionDefinitionReference;
}
/**
 * A reference to a FunctionDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface FunctionDefinitionReference {
    /**
     * The Id of the FunctionDefinition resource.
     */
    readonly functionDefinitionId: string;
    /**
     * The ARN of the FunctionDefinition resource.
     */
    readonly functionDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a FunctionDefinitionVersion.
 *
 * @stability experimental
 */
export interface IFunctionDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FunctionDefinitionVersion resource.
     */
    readonly functionDefinitionVersionRef: FunctionDefinitionVersionReference;
}
/**
 * A reference to a FunctionDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface FunctionDefinitionVersionReference {
    /**
     * The Id of the FunctionDefinitionVersion resource.
     */
    readonly functionDefinitionVersionId: string;
}
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
     * The Id of the Group resource.
     */
    readonly groupId: string;
    /**
     * The ARN of the Group resource.
     */
    readonly groupArn: string;
}
/**
 * Indicates that this resource can be referenced as a GroupVersion.
 *
 * @stability experimental
 */
export interface IGroupVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GroupVersion resource.
     */
    readonly groupVersionRef: GroupVersionReference;
}
/**
 * A reference to a GroupVersion resource.
 *
 * @struct
 * @stability external
 */
export interface GroupVersionReference {
    /**
     * The Id of the GroupVersion resource.
     */
    readonly groupVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a LoggerDefinition.
 *
 * @stability experimental
 */
export interface ILoggerDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoggerDefinition resource.
     */
    readonly loggerDefinitionRef: LoggerDefinitionReference;
}
/**
 * A reference to a LoggerDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface LoggerDefinitionReference {
    /**
     * The Id of the LoggerDefinition resource.
     */
    readonly loggerDefinitionId: string;
    /**
     * The ARN of the LoggerDefinition resource.
     */
    readonly loggerDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a LoggerDefinitionVersion.
 *
 * @stability experimental
 */
export interface ILoggerDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LoggerDefinitionVersion resource.
     */
    readonly loggerDefinitionVersionRef: LoggerDefinitionVersionReference;
}
/**
 * A reference to a LoggerDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface LoggerDefinitionVersionReference {
    /**
     * The Id of the LoggerDefinitionVersion resource.
     */
    readonly loggerDefinitionVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceDefinition.
 *
 * @stability experimental
 */
export interface IResourceDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceDefinition resource.
     */
    readonly resourceDefinitionRef: ResourceDefinitionReference;
}
/**
 * A reference to a ResourceDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceDefinitionReference {
    /**
     * The Id of the ResourceDefinition resource.
     */
    readonly resourceDefinitionId: string;
    /**
     * The ARN of the ResourceDefinition resource.
     */
    readonly resourceDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceDefinitionVersion.
 *
 * @stability experimental
 */
export interface IResourceDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceDefinitionVersion resource.
     */
    readonly resourceDefinitionVersionRef: ResourceDefinitionVersionReference;
}
/**
 * A reference to a ResourceDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceDefinitionVersionReference {
    /**
     * The Id of the ResourceDefinitionVersion resource.
     */
    readonly resourceDefinitionVersionId: string;
}
/**
 * Indicates that this resource can be referenced as a SubscriptionDefinition.
 *
 * @stability experimental
 */
export interface ISubscriptionDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubscriptionDefinition resource.
     */
    readonly subscriptionDefinitionRef: SubscriptionDefinitionReference;
}
/**
 * A reference to a SubscriptionDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriptionDefinitionReference {
    /**
     * The Id of the SubscriptionDefinition resource.
     */
    readonly subscriptionDefinitionId: string;
    /**
     * The ARN of the SubscriptionDefinition resource.
     */
    readonly subscriptionDefinitionArn: string;
}
/**
 * Indicates that this resource can be referenced as a SubscriptionDefinitionVersion.
 *
 * @stability experimental
 */
export interface ISubscriptionDefinitionVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubscriptionDefinitionVersion resource.
     */
    readonly subscriptionDefinitionVersionRef: SubscriptionDefinitionVersionReference;
}
/**
 * A reference to a SubscriptionDefinitionVersion resource.
 *
 * @struct
 * @stability external
 */
export interface SubscriptionDefinitionVersionReference {
    /**
     * The Id of the SubscriptionDefinitionVersion resource.
     */
    readonly subscriptionDefinitionVersionId: string;
}
