import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Component.
 *
 * @stability experimental
 */
export interface IComponentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Component resource.
     */
    readonly componentRef: ComponentReference;
}
/**
 * A reference to a Component resource.
 *
 * @struct
 * @stability external
 */
export interface ComponentReference {
    /**
     * The AppId of the Component resource.
     */
    readonly appId: string;
    /**
     * The EnvironmentName of the Component resource.
     */
    readonly environmentName: string;
    /**
     * The Id of the Component resource.
     */
    readonly componentId: string;
}
/**
 * Indicates that this resource can be referenced as a Form.
 *
 * @stability experimental
 */
export interface IFormRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Form resource.
     */
    readonly formRef: FormReference;
}
/**
 * A reference to a Form resource.
 *
 * @struct
 * @stability external
 */
export interface FormReference {
    /**
     * The AppId of the Form resource.
     */
    readonly appId: string;
    /**
     * The EnvironmentName of the Form resource.
     */
    readonly environmentName: string;
    /**
     * The Id of the Form resource.
     */
    readonly formId: string;
}
/**
 * Indicates that this resource can be referenced as a Theme.
 *
 * @stability experimental
 */
export interface IThemeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Theme resource.
     */
    readonly themeRef: ThemeReference;
}
/**
 * A reference to a Theme resource.
 *
 * @struct
 * @stability external
 */
export interface ThemeReference {
    /**
     * The AppId of the Theme resource.
     */
    readonly appId: string;
    /**
     * The EnvironmentName of the Theme resource.
     */
    readonly environmentName: string;
    /**
     * The Id of the Theme resource.
     */
    readonly themeId: string;
}
