import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Monitor.
 *
 * @stability experimental
 */
export interface IMonitorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Monitor resource.
     */
    readonly monitorRef: MonitorReference;
}
/**
 * A reference to a Monitor resource.
 *
 * @struct
 * @stability external
 */
export interface MonitorReference {
    /**
     * The MonitorName of the Monitor resource.
     */
    readonly monitorName: string;
    /**
     * The ARN of the Monitor resource.
     */
    readonly monitorArn: string;
}
