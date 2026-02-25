import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a MicrosoftAD.
 *
 * @stability experimental
 */
export interface IMicrosoftADRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MicrosoftAD resource.
     */
    readonly microsoftAdRef: MicrosoftADReference;
}
/**
 * A reference to a MicrosoftAD resource.
 *
 * @struct
 * @stability external
 */
export interface MicrosoftADReference {
    /**
     * The Id of the MicrosoftAD resource.
     */
    readonly microsoftAdId: string;
}
/**
 * Indicates that this resource can be referenced as a SimpleAD.
 *
 * @stability experimental
 */
export interface ISimpleADRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SimpleAD resource.
     */
    readonly simpleAdRef: SimpleADReference;
}
/**
 * A reference to a SimpleAD resource.
 *
 * @struct
 * @stability external
 */
export interface SimpleADReference {
    /**
     * The DirectoryId of the SimpleAD resource.
     */
    readonly directoryId: string;
}
