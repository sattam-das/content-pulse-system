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
     * The Name of the ConfigurationSet resource.
     */
    readonly configurationSetName: string;
}
/**
 * Indicates that this resource can be referenced as a ConfigurationSetEventDestination.
 *
 * @stability experimental
 */
export interface IConfigurationSetEventDestinationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConfigurationSetEventDestination resource.
     */
    readonly configurationSetEventDestinationRef: ConfigurationSetEventDestinationReference;
}
/**
 * A reference to a ConfigurationSetEventDestination resource.
 *
 * @struct
 * @stability external
 */
export interface ConfigurationSetEventDestinationReference {
    /**
     * The Id of the ConfigurationSetEventDestination resource.
     */
    readonly configurationSetEventDestinationId: string;
}
/**
 * Indicates that this resource can be referenced as a ContactList.
 *
 * @stability experimental
 */
export interface IContactListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ContactList resource.
     */
    readonly contactListRef: ContactListReference;
}
/**
 * A reference to a ContactList resource.
 *
 * @struct
 * @stability external
 */
export interface ContactListReference {
    /**
     * The ContactListName of the ContactList resource.
     */
    readonly contactListName: string;
}
/**
 * Indicates that this resource can be referenced as a DedicatedIpPool.
 *
 * @stability experimental
 */
export interface IDedicatedIpPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DedicatedIpPool resource.
     */
    readonly dedicatedIpPoolRef: DedicatedIpPoolReference;
}
/**
 * A reference to a DedicatedIpPool resource.
 *
 * @struct
 * @stability external
 */
export interface DedicatedIpPoolReference {
    /**
     * The PoolName of the DedicatedIpPool resource.
     */
    readonly poolName: string;
}
/**
 * Indicates that this resource can be referenced as a EmailIdentity.
 *
 * @stability experimental
 */
export interface IEmailIdentityRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EmailIdentity resource.
     */
    readonly emailIdentityRef: EmailIdentityReference;
}
/**
 * A reference to a EmailIdentity resource.
 *
 * @struct
 * @stability external
 */
export interface EmailIdentityReference {
    /**
     * The EmailIdentity of the EmailIdentity resource.
     */
    readonly emailIdentity: string;
}
/**
 * Indicates that this resource can be referenced as a ReceiptFilter.
 *
 * @stability experimental
 */
export interface IReceiptFilterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReceiptFilter resource.
     */
    readonly receiptFilterRef: ReceiptFilterReference;
}
/**
 * A reference to a ReceiptFilter resource.
 *
 * @struct
 * @stability external
 */
export interface ReceiptFilterReference {
    /**
     * The Id of the ReceiptFilter resource.
     */
    readonly receiptFilterId: string;
}
/**
 * Indicates that this resource can be referenced as a ReceiptRule.
 *
 * @stability experimental
 */
export interface IReceiptRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReceiptRule resource.
     */
    readonly receiptRuleRef: ReceiptRuleReference;
}
/**
 * A reference to a ReceiptRule resource.
 *
 * @struct
 * @stability external
 */
export interface ReceiptRuleReference {
    /**
     * The Id of the ReceiptRule resource.
     */
    readonly receiptRuleId: string;
}
/**
 * Indicates that this resource can be referenced as a ReceiptRuleSet.
 *
 * @stability experimental
 */
export interface IReceiptRuleSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ReceiptRuleSet resource.
     */
    readonly receiptRuleSetRef: ReceiptRuleSetReference;
}
/**
 * A reference to a ReceiptRuleSet resource.
 *
 * @struct
 * @stability external
 */
export interface ReceiptRuleSetReference {
    /**
     * The RuleSetName of the ReceiptRuleSet resource.
     */
    readonly ruleSetName: string;
}
/**
 * Indicates that this resource can be referenced as a Template.
 *
 * @stability experimental
 */
export interface ITemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Template resource.
     */
    readonly templateRef: TemplateReference;
}
/**
 * A reference to a Template resource.
 *
 * @struct
 * @stability external
 */
export interface TemplateReference {
    /**
     * The Id of the Template resource.
     */
    readonly templateId: string;
}
/**
 * Indicates that this resource can be referenced as a VdmAttributes.
 *
 * @stability experimental
 */
export interface IVdmAttributesRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VdmAttributes resource.
     */
    readonly vdmAttributesRef: VdmAttributesReference;
}
/**
 * A reference to a VdmAttributes resource.
 *
 * @struct
 * @stability external
 */
export interface VdmAttributesReference {
    /**
     * The VdmAttributesResourceId of the VdmAttributes resource.
     */
    readonly vdmAttributesResourceId: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerAddonInstance.
 *
 * @stability experimental
 */
export interface IMailManagerAddonInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerAddonInstance resource.
     */
    readonly mailManagerAddonInstanceRef: MailManagerAddonInstanceReference;
}
/**
 * A reference to a MailManagerAddonInstance resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerAddonInstanceReference {
    /**
     * The AddonInstanceId of the MailManagerAddonInstance resource.
     */
    readonly addonInstanceId: string;
    /**
     * The ARN of the MailManagerAddonInstance resource.
     */
    readonly addonInstanceArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerAddonSubscription.
 *
 * @stability experimental
 */
export interface IMailManagerAddonSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerAddonSubscription resource.
     */
    readonly mailManagerAddonSubscriptionRef: MailManagerAddonSubscriptionReference;
}
/**
 * A reference to a MailManagerAddonSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerAddonSubscriptionReference {
    /**
     * The AddonSubscriptionId of the MailManagerAddonSubscription resource.
     */
    readonly addonSubscriptionId: string;
    /**
     * The ARN of the MailManagerAddonSubscription resource.
     */
    readonly addonSubscriptionArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerAddressList.
 *
 * @stability experimental
 */
export interface IMailManagerAddressListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerAddressList resource.
     */
    readonly mailManagerAddressListRef: MailManagerAddressListReference;
}
/**
 * A reference to a MailManagerAddressList resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerAddressListReference {
    /**
     * The AddressListId of the MailManagerAddressList resource.
     */
    readonly addressListId: string;
    /**
     * The ARN of the MailManagerAddressList resource.
     */
    readonly addressListArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerArchive.
 *
 * @stability experimental
 */
export interface IMailManagerArchiveRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerArchive resource.
     */
    readonly mailManagerArchiveRef: MailManagerArchiveReference;
}
/**
 * A reference to a MailManagerArchive resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerArchiveReference {
    /**
     * The ArchiveId of the MailManagerArchive resource.
     */
    readonly archiveId: string;
    /**
     * The ARN of the MailManagerArchive resource.
     */
    readonly archiveArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerIngressPoint.
 *
 * @stability experimental
 */
export interface IMailManagerIngressPointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerIngressPoint resource.
     */
    readonly mailManagerIngressPointRef: MailManagerIngressPointReference;
}
/**
 * A reference to a MailManagerIngressPoint resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerIngressPointReference {
    /**
     * The IngressPointId of the MailManagerIngressPoint resource.
     */
    readonly ingressPointId: string;
    /**
     * The ARN of the MailManagerIngressPoint resource.
     */
    readonly ingressPointArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerRelay.
 *
 * @stability experimental
 */
export interface IMailManagerRelayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerRelay resource.
     */
    readonly mailManagerRelayRef: MailManagerRelayReference;
}
/**
 * A reference to a MailManagerRelay resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerRelayReference {
    /**
     * The RelayId of the MailManagerRelay resource.
     */
    readonly relayId: string;
    /**
     * The ARN of the MailManagerRelay resource.
     */
    readonly relayArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerRuleSet.
 *
 * @stability experimental
 */
export interface IMailManagerRuleSetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerRuleSet resource.
     */
    readonly mailManagerRuleSetRef: MailManagerRuleSetReference;
}
/**
 * A reference to a MailManagerRuleSet resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerRuleSetReference {
    /**
     * The RuleSetId of the MailManagerRuleSet resource.
     */
    readonly ruleSetId: string;
    /**
     * The ARN of the MailManagerRuleSet resource.
     */
    readonly ruleSetArn: string;
}
/**
 * Indicates that this resource can be referenced as a MailManagerTrafficPolicy.
 *
 * @stability experimental
 */
export interface IMailManagerTrafficPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MailManagerTrafficPolicy resource.
     */
    readonly mailManagerTrafficPolicyRef: MailManagerTrafficPolicyReference;
}
/**
 * A reference to a MailManagerTrafficPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface MailManagerTrafficPolicyReference {
    /**
     * The TrafficPolicyId of the MailManagerTrafficPolicy resource.
     */
    readonly trafficPolicyId: string;
    /**
     * The ARN of the MailManagerTrafficPolicy resource.
     */
    readonly trafficPolicyArn: string;
}
/**
 * Indicates that this resource can be referenced as a MultiRegionEndpoint.
 *
 * @stability experimental
 */
export interface IMultiRegionEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MultiRegionEndpoint resource.
     */
    readonly multiRegionEndpointRef: MultiRegionEndpointReference;
}
/**
 * A reference to a MultiRegionEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface MultiRegionEndpointReference {
    /**
     * The EndpointName of the MultiRegionEndpoint resource.
     */
    readonly endpointName: string;
}
/**
 * Indicates that this resource can be referenced as a Tenant.
 *
 * @stability experimental
 */
export interface ITenantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Tenant resource.
     */
    readonly tenantRef: TenantReference;
}
/**
 * A reference to a Tenant resource.
 *
 * @struct
 * @stability external
 */
export interface TenantReference {
    /**
     * The TenantName of the Tenant resource.
     */
    readonly tenantName: string;
    /**
     * The ARN of the Tenant resource.
     */
    readonly tenantArn: string;
}
