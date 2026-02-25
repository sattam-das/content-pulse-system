import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConfigurationSet.
 *
 * @stability experimental
 */
export interface IConfigurationSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationSet resource.
     */
    readonly configurationSetRef: ConfigurationSetReference;
}
/**
 * A reference to a ConfigurationSet resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationSetReference {
    /**
     * The ConfigurationSetName of the ConfigurationSet resource.
     */
    readonly configurationSetName: string;
    /**
     * The ARN of the ConfigurationSet resource.
     */
    readonly configurationSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a OptOutList.
 *
 * @stability experimental
 */
export interface IOptOutListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a OptOutList resource.
     */
    readonly optOutListRef: OptOutListReference;
}
/**
 * A reference to a OptOutList resource.
 *
 * @struct
 * @stability external
 */
export interface OptOutListReference {
    /**
     * The OptOutListName of the OptOutList resource.
     */
    readonly optOutListName: string;
    /**
     * The ARN of the OptOutList resource.
     */
    readonly optOutListArn: string;
}
/**
 * Indicates that this resource can be referenced as a PhoneNumber.
 *
 * @stability experimental
 */
export interface IPhoneNumberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PhoneNumber resource.
     */
    readonly phoneNumberRef: PhoneNumberReference;
}
/**
 * A reference to a PhoneNumber resource.
 *
 * @struct
 * @stability external
 */
export interface PhoneNumberReference {
    /**
     * The PhoneNumberId of the PhoneNumber resource.
     */
    readonly phoneNumberId: string;
    /**
     * The ARN of the PhoneNumber resource.
     */
    readonly phoneNumberArn: string;
}
/**
 * Indicates that this resource can be referenced as a Pool.
 *
 * @stability experimental
 */
export interface IPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Pool resource.
     */
    readonly poolRef: PoolReference;
}
/**
 * A reference to a Pool resource.
 *
 * @struct
 * @stability external
 */
export interface PoolReference {
    /**
     * The PoolId of the Pool resource.
     */
    readonly poolId: string;
    /**
     * The ARN of the Pool resource.
     */
    readonly poolArn: string;
}
/**
 * Indicates that this resource can be referenced as a ProtectConfiguration.
 *
 * @stability experimental
 */
export interface IProtectConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ProtectConfiguration resource.
     */
    readonly protectConfigurationRef: ProtectConfigurationReference;
}
/**
 * A reference to a ProtectConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface ProtectConfigurationReference {
    /**
     * The ProtectConfigurationId of the ProtectConfiguration resource.
     */
    readonly protectConfigurationId: string;
    /**
     * The ARN of the ProtectConfiguration resource.
     */
    readonly protectConfigurationArn: string;
}
/**
 * Indicates that this resource can be referenced as a ResourcePolicy.
 *
 * @stability experimental
 */
export interface IResourcePolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ResourcePolicy resource.
     */
    readonly resourcePolicyRef: ResourcePolicyReference;
}
/**
 * A reference to a ResourcePolicy resource.
 *
 * @struct
 * @stability external
 */
export interface ResourcePolicyReference {
    /**
     * The ResourceArn of the ResourcePolicy resource.
     */
    readonly resourceArn: string;
}
/**
 * Indicates that this resource can be referenced as a SenderId.
 *
 * @stability experimental
 */
export interface ISenderIdRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SenderId resource.
     */
    readonly senderIdRef: SenderIdReference;
}
/**
 * A reference to a SenderId resource.
 *
 * @struct
 * @stability external
 */
export interface SenderIdReference {
    /**
     * The IsoCountryCode of the SenderId resource.
     */
    readonly isoCountryCode: string;
    /**
     * The SenderId of the SenderId resource.
     */
    readonly senderId: string;
    /**
     * The ARN of the SenderId resource.
     */
    readonly senderIdArn: string;
}
