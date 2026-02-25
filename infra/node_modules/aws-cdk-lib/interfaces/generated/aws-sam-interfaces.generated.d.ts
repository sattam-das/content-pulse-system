import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
}
/**
 * Indicates that this resource can be referenced as a Api.
 *
 * @stability experimental
 */
export interface IApiRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Api resource.
     */
    readonly apiRef: ApiReference;
}
/**
 * A reference to a Api resource.
 *
 * @struct
 * @stability external
 */
export interface ApiReference {
}
/**
 * Indicates that this resource can be referenced as a HttpApi.
 *
 * @stability experimental
 */
export interface IHttpApiRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a HttpApi resource.
     */
    readonly httpApiRef: HttpApiReference;
}
/**
 * A reference to a HttpApi resource.
 *
 * @struct
 * @stability external
 */
export interface HttpApiReference {
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
}
/**
 * Indicates that this resource can be referenced as a SimpleTable.
 *
 * @stability experimental
 */
export interface ISimpleTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SimpleTable resource.
     */
    readonly simpleTableRef: SimpleTableReference;
}
/**
 * A reference to a SimpleTable resource.
 *
 * @struct
 * @stability external
 */
export interface SimpleTableReference {
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
}
/**
 * Indicates that this resource can be referenced as a StateMachine.
 *
 * @stability experimental
 */
export interface IStateMachineRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StateMachine resource.
     */
    readonly stateMachineRef: StateMachineReference;
}
/**
 * A reference to a StateMachine resource.
 *
 * @struct
 * @stability external
 */
export interface StateMachineReference {
}
