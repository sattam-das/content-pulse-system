import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AutoScalingConfiguration.
 *
 * @stability experimental
 */
export interface IAutoScalingConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutoScalingConfiguration resource.
     */
    readonly autoScalingConfigurationRef: AutoScalingConfigurationReference;
}
/**
 * A reference to a AutoScalingConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface AutoScalingConfigurationReference {
    /**
     * The AutoScalingConfigurationArn of the AutoScalingConfiguration resource.
     */
    readonly autoScalingConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ObservabilityConfiguration.
 *
 * @stability experimental
 */
export interface IObservabilityConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ObservabilityConfiguration resource.
     */
    readonly observabilityConfigurationRef: ObservabilityConfigurationReference;
}
/**
 * A reference to a ObservabilityConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface ObservabilityConfigurationReference {
    /**
     * The ObservabilityConfigurationArn of the ObservabilityConfiguration resource.
     */
    readonly observabilityConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Service.
 *
 * @stability experimental
 */
export interface IServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Service resource.
     */
    readonly serviceRef: ServiceReference;
}
/**
 * A reference to a Service resource.
 *
 * @struct
 * @stability external
 */
export interface ServiceReference {
    /**
     * The ServiceArn of the Service resource.
     */
    readonly serviceArn: string;
}
/**
 * Indicates that this resource can be referenced as a VpcConnector.
 *
 * @stability experimental
 */
export interface IVpcConnectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcConnector resource.
     */
    readonly vpcConnectorRef: VpcConnectorReference;
}
/**
 * A reference to a VpcConnector resource.
 *
 * @struct
 * @stability external
 */
export interface VpcConnectorReference {
    /**
     * The VpcConnectorArn of the VpcConnector resource.
     */
    readonly vpcConnectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a VpcIngressConnection.
 *
 * @stability experimental
 */
export interface IVpcIngressConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcIngressConnection resource.
     */
    readonly vpcIngressConnectionRef: VpcIngressConnectionReference;
}
/**
 * A reference to a VpcIngressConnection resource.
 *
 * @struct
 * @stability external
 */
export interface VpcIngressConnectionReference {
    /**
     * The VpcIngressConnectionArn of the VpcIngressConnection resource.
     */
    readonly vpcIngressConnectionArn: string;
}
