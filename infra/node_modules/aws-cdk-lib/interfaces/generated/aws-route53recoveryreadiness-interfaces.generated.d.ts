import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Cell.
 *
 * @stability experimental
 */
export interface ICellRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Cell resource.
     */
    readonly cellRef: CellReference;
}
/**
 * A reference to a Cell resource.
 *
 * @struct
 * @stability external
 */
export interface CellReference {
    /**
     * The CellName of the Cell resource.
     */
    readonly cellName: string;
    /**
     * The ARN of the Cell resource.
     */
    readonly cellArn: string;
}
/**
 * Indicates that this resource can be referenced as a ReadinessCheck.
 *
 * @stability experimental
 */
export interface IReadinessCheckRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReadinessCheck resource.
     */
    readonly readinessCheckRef: ReadinessCheckReference;
}
/**
 * A reference to a ReadinessCheck resource.
 *
 * @struct
 * @stability external
 */
export interface ReadinessCheckReference {
    /**
     * The ReadinessCheckName of the ReadinessCheck resource.
     */
    readonly readinessCheckName: string;
    /**
     * The ARN of the ReadinessCheck resource.
     */
    readonly readinessCheckArn: string;
}
/**
 * Indicates that this resource can be referenced as a RecoveryGroup.
 *
 * @stability experimental
 */
export interface IRecoveryGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RecoveryGroup resource.
     */
    readonly recoveryGroupRef: RecoveryGroupReference;
}
/**
 * A reference to a RecoveryGroup resource.
 *
 * @struct
 * @stability external
 */
export interface RecoveryGroupReference {
    /**
     * The RecoveryGroupName of the RecoveryGroup resource.
     */
    readonly recoveryGroupName: string;
    /**
     * The ARN of the RecoveryGroup resource.
     */
    readonly recoveryGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourceSet.
 *
 * @stability experimental
 */
export interface IResourceSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourceSet resource.
     */
    readonly resourceSetRef: ResourceSetReference;
}
/**
 * A reference to a ResourceSet resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceSetReference {
    /**
     * The ResourceSetName of the ResourceSet resource.
     */
    readonly resourceSetName: string;
    /**
     * The ARN of the ResourceSet resource.
     */
    readonly resourceSetArn: string;
}
