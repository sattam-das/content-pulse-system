import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Config.
 *
 * @stability experimental
 */
export interface IConfigRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Config resource.
     */
    readonly configRef: ConfigReference;
}
/**
 * A reference to a Config resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigReference {
    /**
     * The Arn of the Config resource.
     */
    readonly configArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataflowEndpointGroup.
 *
 * @stability experimental
 */
export interface IDataflowEndpointGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataflowEndpointGroup resource.
     */
    readonly dataflowEndpointGroupRef: DataflowEndpointGroupReference;
}
/**
 * A reference to a DataflowEndpointGroup resource.
 *
 * @struct
 * @stability external
 */
export interface DataflowEndpointGroupReference {
    /**
     * The Id of the DataflowEndpointGroup resource.
     */
    readonly dataflowEndpointGroupId: string;
    /**
     * The ARN of the DataflowEndpointGroup resource.
     */
    readonly dataflowEndpointGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a MissionProfile.
 *
 * @stability experimental
 */
export interface IMissionProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MissionProfile resource.
     */
    readonly missionProfileRef: MissionProfileReference;
}
/**
 * A reference to a MissionProfile resource.
 *
 * @struct
 * @stability external
 */
export interface MissionProfileReference {
    /**
     * The Id of the MissionProfile resource.
     */
    readonly missionProfileId: string;
    /**
     * The Arn of the MissionProfile resource.
     */
    readonly missionProfileArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataflowEndpointGroupV2.
 *
 * @stability experimental
 */
export interface IDataflowEndpointGroupV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataflowEndpointGroupV2 resource.
     */
    readonly dataflowEndpointGroupV2Ref: DataflowEndpointGroupV2Reference;
}
/**
 * A reference to a DataflowEndpointGroupV2 resource.
 *
 * @struct
 * @stability external
 */
export interface DataflowEndpointGroupV2Reference {
    /**
     * The Id of the DataflowEndpointGroupV2 resource.
     */
    readonly dataflowEndpointGroupV2Id: string;
    /**
     * The ARN of the DataflowEndpointGroupV2 resource.
     */
    readonly dataflowEndpointGroupV2Arn: string;
}
