import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AppMonitor.
 *
 * @stability experimental
 */
export interface IAppMonitorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AppMonitor resource.
     */
    readonly appMonitorRef: AppMonitorReference;
}
/**
 * A reference to a AppMonitor resource.
 *
 * @struct
 * @stability external
 */
export interface AppMonitorReference {
    /**
     * The Name of the AppMonitor resource.
     */
    readonly appMonitorName: string;
}
