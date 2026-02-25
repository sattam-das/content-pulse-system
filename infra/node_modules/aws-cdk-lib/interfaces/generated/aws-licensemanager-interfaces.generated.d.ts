import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Grant.
 *
 * @stability experimental
 */
export interface IGrantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Grant resource.
     */
    readonly grantRef: GrantReference;
}
/**
 * A reference to a Grant resource.
 *
 * @struct
 * @stability external
 */
export interface GrantReference {
    /**
     * The GrantArn of the Grant resource.
     */
    readonly grantArn: string;
}
/**
 * Indicates that this resource can be referenced as a License.
 *
 * @stability experimental
 */
export interface ILicenseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a License resource.
     */
    readonly licenseRef: LicenseReference;
}
/**
 * A reference to a License resource.
 *
 * @struct
 * @stability external
 */
export interface LicenseReference {
    /**
     * The LicenseArn of the License resource.
     */
    readonly licenseArn: string;
}
