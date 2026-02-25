import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Campaign.
 *
 * @stability experimental
 */
export interface ICampaignRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Campaign resource.
     */
    readonly campaignRef: CampaignReference;
}
/**
 * A reference to a Campaign resource.
 *
 * @struct
 * @stability external
 */
export interface CampaignReference {
    /**
     * The Name of the Campaign resource.
     */
    readonly campaignName: string;
    /**
     * The ARN of the Campaign resource.
     */
    readonly campaignArn: string;
}
/**
 * Indicates that this resource can be referenced as a DecoderManifest.
 *
 * @stability experimental
 */
export interface IDecoderManifestRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DecoderManifest resource.
     */
    readonly decoderManifestRef: DecoderManifestReference;
}
/**
 * A reference to a DecoderManifest resource.
 *
 * @struct
 * @stability external
 */
export interface DecoderManifestReference {
    /**
     * The Name of the DecoderManifest resource.
     */
    readonly decoderManifestName: string;
    /**
     * The ARN of the DecoderManifest resource.
     */
    readonly decoderManifestArn: string;
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
     * The Id of the Fleet resource.
     */
    readonly fleetId: string;
    /**
     * The ARN of the Fleet resource.
     */
    readonly fleetArn: string;
}
/**
 * Indicates that this resource can be referenced as a ModelManifest.
 *
 * @stability experimental
 */
export interface IModelManifestRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ModelManifest resource.
     */
    readonly modelManifestRef: ModelManifestReference;
}
/**
 * A reference to a ModelManifest resource.
 *
 * @struct
 * @stability external
 */
export interface ModelManifestReference {
    /**
     * The Name of the ModelManifest resource.
     */
    readonly modelManifestName: string;
    /**
     * The ARN of the ModelManifest resource.
     */
    readonly modelManifestArn: string;
}
/**
 * Indicates that this resource can be referenced as a SignalCatalog.
 *
 * @stability experimental
 */
export interface ISignalCatalogRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SignalCatalog resource.
     */
    readonly signalCatalogRef: SignalCatalogReference;
}
/**
 * A reference to a SignalCatalog resource.
 *
 * @struct
 * @stability external
 */
export interface SignalCatalogReference {
    /**
     * The Name of the SignalCatalog resource.
     */
    readonly signalCatalogName: string;
    /**
     * The ARN of the SignalCatalog resource.
     */
    readonly signalCatalogArn: string;
}
/**
 * Indicates that this resource can be referenced as a Vehicle.
 *
 * @stability experimental
 */
export interface IVehicleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Vehicle resource.
     */
    readonly vehicleRef: VehicleReference;
}
/**
 * A reference to a Vehicle resource.
 *
 * @struct
 * @stability external
 */
export interface VehicleReference {
    /**
     * The Name of the Vehicle resource.
     */
    readonly vehicleName: string;
    /**
     * The ARN of the Vehicle resource.
     */
    readonly vehicleArn: string;
}
/**
 * Indicates that this resource can be referenced as a StateTemplate.
 *
 * @stability experimental
 */
export interface IStateTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a StateTemplate resource.
     */
    readonly stateTemplateRef: StateTemplateReference;
}
/**
 * A reference to a StateTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface StateTemplateReference {
    /**
     * The Name of the StateTemplate resource.
     */
    readonly stateTemplateName: string;
    /**
     * The ARN of the StateTemplate resource.
     */
    readonly stateTemplateArn: string;
}
