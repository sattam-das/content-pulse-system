import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
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
     * The Arn of the Filter resource.
     */
    readonly filterArn: string;
}
/**
 * Indicates that this resource can be referenced as a CisScanConfiguration.
 *
 * @stability experimental
 */
export interface ICisScanConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CisScanConfiguration resource.
     */
    readonly cisScanConfigurationRef: CisScanConfigurationReference;
}
/**
 * A reference to a CisScanConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface CisScanConfigurationReference {
    /**
     * The Arn of the CisScanConfiguration resource.
     */
    readonly cisScanConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a CodeSecurityIntegration.
 *
 * @stability experimental
 */
export interface ICodeSecurityIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CodeSecurityIntegration resource.
     */
    readonly codeSecurityIntegrationRef: CodeSecurityIntegrationReference;
}
/**
 * A reference to a CodeSecurityIntegration resource.
 *
 * @struct
 * @stability external
 */
export interface CodeSecurityIntegrationReference {
    /**
     * The Arn of the CodeSecurityIntegration resource.
     */
    readonly codeSecurityIntegrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a CodeSecurityScanConfiguration.
 *
 * @stability experimental
 */
export interface ICodeSecurityScanConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CodeSecurityScanConfiguration resource.
     */
    readonly codeSecurityScanConfigurationRef: CodeSecurityScanConfigurationReference;
}
/**
 * A reference to a CodeSecurityScanConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface CodeSecurityScanConfigurationReference {
    /**
     * The Arn of the CodeSecurityScanConfiguration resource.
     */
    readonly codeSecurityScanConfigurationArn: string;
}
