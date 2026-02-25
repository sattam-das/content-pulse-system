import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CustomResource.
 *
 * @stability experimental
 */
export interface ICustomResourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomResource resource.
     */
    readonly customResourceRef: CustomResourceReference;
}
/**
 * A reference to a CustomResource resource.
 *
 * @struct
 * @stability external
 */
export interface CustomResourceReference {
    /**
     * The Id of the CustomResource resource.
     */
    readonly customResourceId: string;
}
/**
 * Indicates that this resource can be referenced as a HookDefaultVersion.
 *
 * @stability experimental
 */
export interface IHookDefaultVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HookDefaultVersion resource.
     */
    readonly hookDefaultVersionRef: HookDefaultVersionReference;
}
/**
 * A reference to a HookDefaultVersion resource.
 *
 * @struct
 * @stability external
 */
export interface HookDefaultVersionReference {
    /**
     * The Arn of the HookDefaultVersion resource.
     */
    readonly hookDefaultVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a HookTypeConfig.
 *
 * @stability experimental
 */
export interface IHookTypeConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HookTypeConfig resource.
     */
    readonly hookTypeConfigRef: HookTypeConfigReference;
}
/**
 * A reference to a HookTypeConfig resource.
 *
 * @struct
 * @stability external
 */
export interface HookTypeConfigReference {
    /**
     * The ConfigurationArn of the HookTypeConfig resource.
     */
    readonly configurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a HookVersion.
 *
 * @stability experimental
 */
export interface IHookVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HookVersion resource.
     */
    readonly hookVersionRef: HookVersionReference;
}
/**
 * A reference to a HookVersion resource.
 *
 * @struct
 * @stability external
 */
export interface HookVersionReference {
    /**
     * The Arn of the HookVersion resource.
     */
    readonly hookVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Macro.
 *
 * @stability experimental
 */
export interface IMacroRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Macro resource.
     */
    readonly macroRef: MacroReference;
}
/**
 * A reference to a Macro resource.
 *
 * @struct
 * @stability external
 */
export interface MacroReference {
    /**
     * The Id of the Macro resource.
     */
    readonly macroId: string;
}
/**
 * Indicates that this resource can be referenced as a ModuleDefaultVersion.
 *
 * @stability experimental
 */
export interface IModuleDefaultVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModuleDefaultVersion resource.
     */
    readonly moduleDefaultVersionRef: ModuleDefaultVersionReference;
}
/**
 * A reference to a ModuleDefaultVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ModuleDefaultVersionReference {
    /**
     * The Arn of the ModuleDefaultVersion resource.
     */
    readonly moduleDefaultVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModuleVersion.
 *
 * @stability experimental
 */
export interface IModuleVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModuleVersion resource.
     */
    readonly moduleVersionRef: ModuleVersionReference;
}
/**
 * A reference to a ModuleVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ModuleVersionReference {
    /**
     * The Arn of the ModuleVersion resource.
     */
    readonly moduleVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a PublicTypeVersion.
 *
 * @stability experimental
 */
export interface IPublicTypeVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublicTypeVersion resource.
     */
    readonly publicTypeVersionRef: PublicTypeVersionReference;
}
/**
 * A reference to a PublicTypeVersion resource.
 *
 * @struct
 * @stability external
 */
export interface PublicTypeVersionReference {
    /**
     * The PublicTypeArn of the PublicTypeVersion resource.
     */
    readonly publicTypeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Publisher.
 *
 * @stability experimental
 */
export interface IPublisherRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Publisher resource.
     */
    readonly publisherRef: PublisherReference;
}
/**
 * A reference to a Publisher resource.
 *
 * @struct
 * @stability external
 */
export interface PublisherReference {
    /**
     * The PublisherId of the Publisher resource.
     */
    readonly publisherId: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceDefaultVersion.
 *
 * @stability experimental
 */
export interface IResourceDefaultVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceDefaultVersion resource.
     */
    readonly resourceDefaultVersionRef: ResourceDefaultVersionReference;
}
/**
 * A reference to a ResourceDefaultVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceDefaultVersionReference {
    /**
     * The Arn of the ResourceDefaultVersion resource.
     */
    readonly resourceDefaultVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceVersion.
 *
 * @stability experimental
 */
export interface IResourceVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceVersion resource.
     */
    readonly resourceVersionRef: ResourceVersionReference;
}
/**
 * A reference to a ResourceVersion resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceVersionReference {
    /**
     * The Arn of the ResourceVersion resource.
     */
    readonly resourceVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a Stack.
 *
 * @stability experimental
 */
export interface IStackRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stack resource.
     */
    readonly stackRef: StackReference;
}
/**
 * A reference to a Stack resource.
 *
 * @struct
 * @stability external
 */
export interface StackReference {
    /**
     * The StackId of the Stack resource.
     */
    readonly stackId: string;
}
/**
 * Indicates that this resource can be referenced as a StackSet.
 *
 * @stability experimental
 */
export interface IStackSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StackSet resource.
     */
    readonly stackSetRef: StackSetReference;
}
/**
 * A reference to a StackSet resource.
 *
 * @struct
 * @stability external
 */
export interface StackSetReference {
    /**
     * The StackSetId of the StackSet resource.
     */
    readonly stackSetId: string;
}
/**
 * Indicates that this resource can be referenced as a TypeActivation.
 *
 * @stability experimental
 */
export interface ITypeActivationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TypeActivation resource.
     */
    readonly typeActivationRef: TypeActivationReference;
}
/**
 * A reference to a TypeActivation resource.
 *
 * @struct
 * @stability external
 */
export interface TypeActivationReference {
    /**
     * The Arn of the TypeActivation resource.
     */
    readonly typeActivationArn: string;
}
/**
 * Indicates that this resource can be referenced as a WaitCondition.
 *
 * @stability experimental
 */
export interface IWaitConditionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WaitCondition resource.
     */
    readonly waitConditionRef: WaitConditionReference;
}
/**
 * A reference to a WaitCondition resource.
 *
 * @struct
 * @stability external
 */
export interface WaitConditionReference {
    /**
     * The Id of the WaitCondition resource.
     */
    readonly waitConditionId: string;
}
/**
 * Indicates that this resource can be referenced as a WaitConditionHandle.
 *
 * @stability experimental
 */
export interface IWaitConditionHandleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WaitConditionHandle resource.
     */
    readonly waitConditionHandleRef: WaitConditionHandleReference;
}
/**
 * A reference to a WaitConditionHandle resource.
 *
 * @struct
 * @stability external
 */
export interface WaitConditionHandleReference {
    /**
     * The Id of the WaitConditionHandle resource.
     */
    readonly waitConditionHandleId: string;
}
/**
 * Indicates that this resource can be referenced as a GuardHook.
 *
 * @stability experimental
 */
export interface IGuardHookRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GuardHook resource.
     */
    readonly guardHookRef: GuardHookReference;
}
/**
 * A reference to a GuardHook resource.
 *
 * @struct
 * @stability external
 */
export interface GuardHookReference {
    /**
     * The HookArn of the GuardHook resource.
     */
    readonly hookArn: string;
}
/**
 * Indicates that this resource can be referenced as a LambdaHook.
 *
 * @stability experimental
 */
export interface ILambdaHookRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LambdaHook resource.
     */
    readonly lambdaHookRef: LambdaHookReference;
}
/**
 * A reference to a LambdaHook resource.
 *
 * @struct
 * @stability external
 */
export interface LambdaHookReference {
    /**
     * The HookArn of the LambdaHook resource.
     */
    readonly hookArn: string;
}
