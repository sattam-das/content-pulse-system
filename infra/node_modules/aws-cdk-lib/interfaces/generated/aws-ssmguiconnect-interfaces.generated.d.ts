import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Preferences.
 *
 * @stability experimental
 */
export interface IPreferencesRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Preferences resource.
     */
    readonly preferencesRef: PreferencesReference;
}
/**
 * A reference to a Preferences resource.
 *
 * @struct
 * @stability external
 */
export interface PreferencesReference {
    /**
     * The AccountId of the Preferences resource.
     */
    readonly accountId: string;
}
