import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AutoshiftObserverNotificationStatus.
 *
 * @stability experimental
 */
export interface IAutoshiftObserverNotificationStatusRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutoshiftObserverNotificationStatus resource.
     */
    readonly autoshiftObserverNotificationStatusRef: AutoshiftObserverNotificationStatusReference;
}
/**
 * A reference to a AutoshiftObserverNotificationStatus resource.
 *
 * @struct
 * @stability external
 */
export interface AutoshiftObserverNotificationStatusReference {
    /**
     * The AccountId of the AutoshiftObserverNotificationStatus resource.
     */
    readonly accountId: string;
    /**
     * The Region of the AutoshiftObserverNotificationStatus resource.
     */
    readonly region: string;
}
/**
 * Indicates that this resource can be referenced as a ZonalAutoshiftConfiguration.
 *
 * @stability experimental
 */
export interface IZonalAutoshiftConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ZonalAutoshiftConfiguration resource.
     */
    readonly zonalAutoshiftConfigurationRef: ZonalAutoshiftConfigurationReference;
}
/**
 * A reference to a ZonalAutoshiftConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface ZonalAutoshiftConfigurationReference {
    /**
     * The ResourceIdentifier of the ZonalAutoshiftConfiguration resource.
     */
    readonly resourceIdentifier: string;
}
