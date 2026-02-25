import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a BrowserCustom.
 *
 * @stability experimental
 */
export interface IBrowserCustomRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BrowserCustom resource.
     */
    readonly browserCustomRef: BrowserCustomReference;
}
/**
 * A reference to a BrowserCustom resource.
 *
 * @struct
 * @stability external
 */
export interface BrowserCustomReference {
    /**
     * The BrowserId of the BrowserCustom resource.
     */
    readonly browserId: string;
    /**
     * The ARN of the BrowserCustom resource.
     */
    readonly browserArn: string;
}
/**
 * Indicates that this resource can be referenced as a CodeInterpreterCustom.
 *
 * @stability experimental
 */
export interface ICodeInterpreterCustomRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CodeInterpreterCustom resource.
     */
    readonly codeInterpreterCustomRef: CodeInterpreterCustomReference;
}
/**
 * A reference to a CodeInterpreterCustom resource.
 *
 * @struct
 * @stability external
 */
export interface CodeInterpreterCustomReference {
    /**
     * The CodeInterpreterId of the CodeInterpreterCustom resource.
     */
    readonly codeInterpreterId: string;
    /**
     * The ARN of the CodeInterpreterCustom resource.
     */
    readonly codeInterpreterArn: string;
}
/**
 * Indicates that this resource can be referenced as a Gateway.
 *
 * @stability experimental
 */
export interface IGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Gateway resource.
     */
    readonly gatewayRef: GatewayReference;
}
/**
 * A reference to a Gateway resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayReference {
    /**
     * The GatewayIdentifier of the Gateway resource.
     */
    readonly gatewayIdentifier: string;
    /**
     * The ARN of the Gateway resource.
     */
    readonly gatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a GatewayTarget.
 *
 * @stability experimental
 */
export interface IGatewayTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GatewayTarget resource.
     */
    readonly gatewayTargetRef: GatewayTargetReference;
}
/**
 * A reference to a GatewayTarget resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayTargetReference {
    /**
     * The GatewayIdentifier of the GatewayTarget resource.
     */
    readonly gatewayIdentifier: string;
    /**
     * The TargetId of the GatewayTarget resource.
     */
    readonly targetId: string;
}
/**
 * Indicates that this resource can be referenced as a Memory.
 *
 * @stability experimental
 */
export interface IMemoryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Memory resource.
     */
    readonly memoryRef: MemoryReference;
}
/**
 * A reference to a Memory resource.
 *
 * @struct
 * @stability external
 */
export interface MemoryReference {
    /**
     * The MemoryArn of the Memory resource.
     */
    readonly memoryArn: string;
}
/**
 * Indicates that this resource can be referenced as a Runtime.
 *
 * @stability experimental
 */
export interface IRuntimeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Runtime resource.
     */
    readonly runtimeRef: RuntimeReference;
}
/**
 * A reference to a Runtime resource.
 *
 * @struct
 * @stability external
 */
export interface RuntimeReference {
    /**
     * The AgentRuntimeId of the Runtime resource.
     */
    readonly agentRuntimeId: string;
    /**
     * The ARN of the Runtime resource.
     */
    readonly agentRuntimeArn: string;
}
/**
 * Indicates that this resource can be referenced as a RuntimeEndpoint.
 *
 * @stability experimental
 */
export interface IRuntimeEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RuntimeEndpoint resource.
     */
    readonly runtimeEndpointRef: RuntimeEndpointReference;
}
/**
 * A reference to a RuntimeEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface RuntimeEndpointReference {
    /**
     * The AgentRuntimeEndpointArn of the RuntimeEndpoint resource.
     */
    readonly agentRuntimeEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a WorkloadIdentity.
 *
 * @stability experimental
 */
export interface IWorkloadIdentityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WorkloadIdentity resource.
     */
    readonly workloadIdentityRef: WorkloadIdentityReference;
}
/**
 * A reference to a WorkloadIdentity resource.
 *
 * @struct
 * @stability external
 */
export interface WorkloadIdentityReference {
    /**
     * The Name of the WorkloadIdentity resource.
     */
    readonly workloadIdentityName: string;
    /**
     * The ARN of the WorkloadIdentity resource.
     */
    readonly workloadIdentityArn: string;
}
