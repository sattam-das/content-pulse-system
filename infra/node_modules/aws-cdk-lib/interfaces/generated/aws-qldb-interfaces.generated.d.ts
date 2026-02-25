import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Ledger.
 *
 * @stability experimental
 */
export interface ILedgerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Ledger resource.
     */
    readonly ledgerRef: LedgerReference;
}
/**
 * A reference to a Ledger resource.
 *
 * @struct
 * @stability external
 */
export interface LedgerReference {
    /**
     * The Id of the Ledger resource.
     */
    readonly ledgerId: string;
}
/**
 * Indicates that this resource can be referenced as a Stream.
 *
 * @stability experimental
 */
export interface IStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stream resource.
     */
    readonly streamRef: StreamReference;
}
/**
 * A reference to a Stream resource.
 *
 * @struct
 * @stability external
 */
export interface StreamReference {
    /**
     * The LedgerName of the Stream resource.
     */
    readonly ledgerName: string;
    /**
     * The Id of the Stream resource.
     */
    readonly streamId: string;
    /**
     * The ARN of the Stream resource.
     */
    readonly streamArn: string;
}
