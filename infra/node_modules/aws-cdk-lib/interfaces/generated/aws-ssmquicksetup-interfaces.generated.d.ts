import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConfigurationManager.
 *
 * @stability experimental
 */
export interface IConfigurationManagerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationManager resource.
     */
    readonly configurationManagerRef: ConfigurationManagerReference;
}
/**
 * A reference to a ConfigurationManager resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationManagerReference {
    /**
     * The ManagerArn of the ConfigurationManager resource.
     */
    readonly managerArn: string;
}
/**
 * Indicates that this resource can be referenced as a LifecycleAutomation.
 *
 * @stability experimental
 */
export interface ILifecycleAutomationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LifecycleAutomation resource.
     */
    readonly lifecycleAutomationRef: LifecycleAutomationReference;
}
/**
 * A reference to a LifecycleAutomation resource.
 *
 * @struct
 * @stability external
 */
export interface LifecycleAutomationReference {
    /**
     * The AssociationId of the LifecycleAutomation resource.
     */
    readonly associationId: string;
}
