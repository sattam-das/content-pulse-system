import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Detector.
 *
 * @stability experimental
 */
export interface IDetectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Detector resource.
     */
    readonly detectorRef: DetectorReference;
}
/**
 * A reference to a Detector resource.
 *
 * @struct
 * @stability external
 */
export interface DetectorReference {
    /**
     * The Id of the Detector resource.
     */
    readonly detectorId: string;
}
/**
 * Indicates that this resource can be referenced as a Filter.
 *
 * @stability experimental
 */
export interface IFilterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Filter resource.
     */
    readonly filterRef: FilterReference;
}
/**
 * A reference to a Filter resource.
 *
 * @struct
 * @stability external
 */
export interface FilterReference {
    /**
     * The DetectorId of the Filter resource.
     */
    readonly detectorId: string;
    /**
     * The Name of the Filter resource.
     */
    readonly filterName: string;
}
/**
 * Indicates that this resource can be referenced as a IPSet.
 *
 * @stability experimental
 */
export interface IIPSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPSet resource.
     */
    readonly ipSetRef: IPSetReference;
}
/**
 * A reference to a IPSet resource.
 *
 * @struct
 * @stability external
 */
export interface IPSetReference {
    /**
     * The Id of the IPSet resource.
     */
    readonly ipSetId: string;
    /**
     * The DetectorId of the IPSet resource.
     */
    readonly detectorId: string;
}
/**
 * Indicates that this resource can be referenced as a Master.
 *
 * @stability experimental
 */
export interface IMasterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Master resource.
     */
    readonly masterRef: MasterReference;
}
/**
 * A reference to a Master resource.
 *
 * @struct
 * @stability external
 */
export interface MasterReference {
    /**
     * The DetectorId of the Master resource.
     */
    readonly detectorId: string;
    /**
     * The MasterId of the Master resource.
     */
    readonly masterId: string;
}
/**
 * Indicates that this resource can be referenced as a Member.
 *
 * @stability experimental
 */
export interface IMemberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Member resource.
     */
    readonly memberRef: MemberReference;
}
/**
 * A reference to a Member resource.
 *
 * @struct
 * @stability external
 */
export interface MemberReference {
    /**
     * The DetectorId of the Member resource.
     */
    readonly detectorId: string;
    /**
     * The MemberId of the Member resource.
     */
    readonly memberId: string;
}
/**
 * Indicates that this resource can be referenced as a ThreatIntelSet.
 *
 * @stability experimental
 */
export interface IThreatIntelSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ThreatIntelSet resource.
     */
    readonly threatIntelSetRef: ThreatIntelSetReference;
}
/**
 * A reference to a ThreatIntelSet resource.
 *
 * @struct
 * @stability external
 */
export interface ThreatIntelSetReference {
    /**
     * The Id of the ThreatIntelSet resource.
     */
    readonly threatIntelSetId: string;
    /**
     * The DetectorId of the ThreatIntelSet resource.
     */
    readonly detectorId: string;
}
/**
 * Indicates that this resource can be referenced as a MalwareProtectionPlan.
 *
 * @stability experimental
 */
export interface IMalwareProtectionPlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MalwareProtectionPlan resource.
     */
    readonly malwareProtectionPlanRef: MalwareProtectionPlanReference;
}
/**
 * A reference to a MalwareProtectionPlan resource.
 *
 * @struct
 * @stability external
 */
export interface MalwareProtectionPlanReference {
    /**
     * The MalwareProtectionPlanId of the MalwareProtectionPlan resource.
     */
    readonly malwareProtectionPlanId: string;
    /**
     * The ARN of the MalwareProtectionPlan resource.
     */
    readonly malwareProtectionPlanArn: string;
}
/**
 * Indicates that this resource can be referenced as a PublishingDestination.
 *
 * @stability experimental
 */
export interface IPublishingDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PublishingDestination resource.
     */
    readonly publishingDestinationRef: PublishingDestinationReference;
}
/**
 * A reference to a PublishingDestination resource.
 *
 * @struct
 * @stability external
 */
export interface PublishingDestinationReference {
    /**
     * The DetectorId of the PublishingDestination resource.
     */
    readonly detectorId: string;
    /**
     * The Id of the PublishingDestination resource.
     */
    readonly publishingDestinationId: string;
}
/**
 * Indicates that this resource can be referenced as a ThreatEntitySet.
 *
 * @stability experimental
 */
export interface IThreatEntitySetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ThreatEntitySet resource.
     */
    readonly threatEntitySetRef: ThreatEntitySetReference;
}
/**
 * A reference to a ThreatEntitySet resource.
 *
 * @struct
 * @stability external
 */
export interface ThreatEntitySetReference {
    /**
     * The Id of the ThreatEntitySet resource.
     */
    readonly threatEntitySetId: string;
    /**
     * The DetectorId of the ThreatEntitySet resource.
     */
    readonly detectorId: string;
}
/**
 * Indicates that this resource can be referenced as a TrustedEntitySet.
 *
 * @stability experimental
 */
export interface ITrustedEntitySetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrustedEntitySet resource.
     */
    readonly trustedEntitySetRef: TrustedEntitySetReference;
}
/**
 * A reference to a TrustedEntitySet resource.
 *
 * @struct
 * @stability external
 */
export interface TrustedEntitySetReference {
    /**
     * The Id of the TrustedEntitySet resource.
     */
    readonly trustedEntitySetId: string;
    /**
     * The DetectorId of the TrustedEntitySet resource.
     */
    readonly detectorId: string;
}
