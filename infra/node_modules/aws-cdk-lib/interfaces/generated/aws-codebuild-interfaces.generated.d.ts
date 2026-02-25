import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Project.
 *
 * @stability experimental
 */
export interface IProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Project resource.
     */
    readonly projectRef: ProjectReference;
}
/**
 * A reference to a Project resource.
 *
 * @struct
 * @stability external
 */
export interface ProjectReference {
    /**
     * The Name of the Project resource.
     */
    readonly projectName: string;
    /**
     * The ARN of the Project resource.
     */
    readonly projectArn: string;
}
/**
 * Indicates that this resource can be referenced as a ReportGroup.
 *
 * @stability experimental
 */
export interface IReportGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReportGroup resource.
     */
    readonly reportGroupRef: ReportGroupReference;
}
/**
 * A reference to a ReportGroup resource.
 *
 * @struct
 * @stability external
 */
export interface ReportGroupReference {
    /**
     * The Arn of the ReportGroup resource.
     */
    readonly reportGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a SourceCredential.
 *
 * @stability experimental
 */
export interface ISourceCredentialRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SourceCredential resource.
     */
    readonly sourceCredentialRef: SourceCredentialReference;
}
/**
 * A reference to a SourceCredential resource.
 *
 * @struct
 * @stability external
 */
export interface SourceCredentialReference {
    /**
     * The Id of the SourceCredential resource.
     */
    readonly sourceCredentialId: string;
}
/**
 * Indicates that this resource can be referenced as a Fleet.
 *
 * @stability experimental
 */
export interface IFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Fleet resource.
     */
    readonly fleetRef: FleetReference;
}
/**
 * A reference to a Fleet resource.
 *
 * @struct
 * @stability external
 */
export interface FleetReference {
    /**
     * The Arn of the Fleet resource.
     */
    readonly fleetArn: string;
}
