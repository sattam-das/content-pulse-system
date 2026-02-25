import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a InvoiceUnit.
 *
 * @stability experimental
 */
export interface IInvoiceUnitRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InvoiceUnit resource.
     */
    readonly invoiceUnitRef: InvoiceUnitReference;
}
/**
 * A reference to a InvoiceUnit resource.
 *
 * @struct
 * @stability external
 */
export interface InvoiceUnitReference {
    /**
     * The InvoiceUnitArn of the InvoiceUnit resource.
     */
    readonly invoiceUnitArn: string;
}
