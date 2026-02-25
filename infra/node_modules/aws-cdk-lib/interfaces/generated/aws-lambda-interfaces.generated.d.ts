import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Alias.
 *
 * @stability experimental
 */
export interface IAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Alias resource.
     */
    readonly aliasRef: AliasReference;
}
/**
 * A reference to a Alias resource.
 *
 * @struct
 * @stability external
 */
export interface AliasReference {
    /**
     * The AliasArn of the Alias resource.
     */
    readonly aliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a CodeSigningConfig.
 *
 * @stability experimental
 */
export interface ICodeSigningConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CodeSigningConfig resource.
     */
    readonly codeSigningConfigRef: CodeSigningConfigReference;
}
/**
 * A reference to a CodeSigningConfig resource.
 *
 * @struct
 * @stability external
 */
export interface CodeSigningConfigReference {
    /**
     * The CodeSigningConfigArn of the CodeSigningConfig resource.
     */
    readonly codeSigningConfigArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventInvokeConfig.
 *
 * @stability experimental
 */
export interface IEventInvokeConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventInvokeConfig resource.
     */
    readonly eventInvokeConfigRef: EventInvokeConfigReference;
}
/**
 * A reference to a EventInvokeConfig resource.
 *
 * @struct
 * @stability external
 */
export interface EventInvokeConfigReference {
    /**
     * The FunctionName of the EventInvokeConfig resource.
     */
    readonly functionName: string;
    /**
     * The Qualifier of the EventInvokeConfig resource.
     */
    readonly qualifier: string;
}
/**
 * Indicates that this resource can be referenced as a EventSourceMapping.
 *
 * @stability experimental
 */
export interface IEventSourceMappingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventSourceMapping resource.
     */
    readonly eventSourceMappingRef: EventSourceMappingReference;
}
/**
 * A reference to a EventSourceMapping resource.
 *
 * @struct
 * @stability external
 */
export interface EventSourceMappingReference {
    /**
     * The Id of the EventSourceMapping resource.
     */
    readonly eventSourceMappingId: string;
    /**
     * The ARN of the EventSourceMapping resource.
     */
    readonly eventSourceMappingArn: string;
}
/**
 * Indicates that this resource can be referenced as a Function.
 *
 * @stability experimental
 */
export interface IFunctionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Function resource.
     */
    readonly functionRef: FunctionReference;
}
/**
 * A reference to a Function resource.
 *
 * @struct
 * @stability external
 */
export interface FunctionReference {
    /**
     * The FunctionName of the Function resource.
     */
    readonly functionName: string;
    /**
     * The ARN of the Function resource.
     */
    readonly functionArn: string;
}
/**
 * Indicates that this resource can be referenced as a LayerVersion.
 *
 * @stability experimental
 */
export interface ILayerVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LayerVersion resource.
     */
    readonly layerVersionRef: LayerVersionReference;
}
/**
 * A reference to a LayerVersion resource.
 *
 * @struct
 * @stability external
 */
export interface LayerVersionReference {
    /**
     * The LayerVersionArn of the LayerVersion resource.
     */
    readonly layerVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a LayerVersionPermission.
 *
 * @stability experimental
 */
export interface ILayerVersionPermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LayerVersionPermission resource.
     */
    readonly layerVersionPermissionRef: LayerVersionPermissionReference;
}
/**
 * A reference to a LayerVersionPermission resource.
 *
 * @struct
 * @stability external
 */
export interface LayerVersionPermissionReference {
    /**
     * The Id of the LayerVersionPermission resource.
     */
    readonly layerVersionPermissionId: string;
}
/**
 * Indicates that this resource can be referenced as a Permission.
 *
 * @stability experimental
 */
export interface IPermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Permission resource.
     */
    readonly permissionRef: PermissionReference;
}
/**
 * A reference to a Permission resource.
 *
 * @struct
 * @stability external
 */
export interface PermissionReference {
    /**
     * The FunctionName of the Permission resource.
     */
    readonly functionName: string;
    /**
     * The Id of the Permission resource.
     */
    readonly permissionId: string;
}
/**
 * Indicates that this resource can be referenced as a Url.
 *
 * @stability experimental
 */
export interface IUrlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Url resource.
     */
    readonly urlRef: UrlReference;
}
/**
 * A reference to a Url resource.
 *
 * @struct
 * @stability external
 */
export interface UrlReference {
    /**
     * The FunctionArn of the Url resource.
     */
    readonly functionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Version.
 *
 * @stability experimental
 */
export interface IVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Version resource.
     */
    readonly versionRef: VersionReference;
}
/**
 * A reference to a Version resource.
 *
 * @struct
 * @stability external
 */
export interface VersionReference {
    /**
     * The FunctionArn of the Version resource.
     */
    readonly functionArn: string;
}
/**
 * Indicates that this resource can be referenced as a CapacityProvider.
 *
 * @stability experimental
 */
export interface ICapacityProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityProvider resource.
     */
    readonly capacityProviderRef: CapacityProviderReference;
}
/**
 * A reference to a CapacityProvider resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityProviderReference {
    /**
     * The CapacityProviderName of the CapacityProvider resource.
     */
    readonly capacityProviderName: string;
    /**
     * The ARN of the CapacityProvider resource.
     */
    readonly capacityProviderArn: string;
}
