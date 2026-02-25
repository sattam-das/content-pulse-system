import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Export.
 *
 * @stability experimental
 */
export interface IExportRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Export resource.
     */
    readonly exportRef: ExportReference;
}
/**
 * A reference to a Export resource.
 *
 * @struct
 * @stability external
 */
export interface ExportReference {
    /**
     * The ExportArn of the Export resource.
     */
    readonly exportArn: string;
}
