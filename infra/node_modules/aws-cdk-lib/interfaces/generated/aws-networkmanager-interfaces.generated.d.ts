import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ConnectAttachment.
 *
 * @stability experimental
 */
export interface IConnectAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectAttachment resource.
     */
    readonly connectAttachmentRef: ConnectAttachmentReference;
}
/**
 * A reference to a ConnectAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectAttachmentReference {
    /**
     * The AttachmentId of the ConnectAttachment resource.
     */
    readonly attachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a ConnectPeer.
 *
 * @stability experimental
 */
export interface IConnectPeerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ConnectPeer resource.
     */
    readonly connectPeerRef: ConnectPeerReference;
}
/**
 * A reference to a ConnectPeer resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectPeerReference {
    /**
     * The ConnectPeerId of the ConnectPeer resource.
     */
    readonly connectPeerId: string;
}
/**
 * Indicates that this resource can be referenced as a CoreNetwork.
 *
 * @stability experimental
 */
export interface ICoreNetworkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CoreNetwork resource.
     */
    readonly coreNetworkRef: CoreNetworkReference;
}
/**
 * A reference to a CoreNetwork resource.
 *
 * @struct
 * @stability external
 */
export interface CoreNetworkReference {
    /**
     * The CoreNetworkId of the CoreNetwork resource.
     */
    readonly coreNetworkId: string;
    /**
     * The ARN of the CoreNetwork resource.
     */
    readonly coreNetworkArn: string;
}
/**
 * Indicates that this resource can be referenced as a CustomerGatewayAssociation.
 *
 * @stability experimental
 */
export interface ICustomerGatewayAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomerGatewayAssociation resource.
     */
    readonly customerGatewayAssociationRef: CustomerGatewayAssociationReference;
}
/**
 * A reference to a CustomerGatewayAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface CustomerGatewayAssociationReference {
    /**
     * The GlobalNetworkId of the CustomerGatewayAssociation resource.
     */
    readonly globalNetworkId: string;
    /**
     * The CustomerGatewayArn of the CustomerGatewayAssociation resource.
     */
    readonly customerGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a Device.
 *
 * @stability experimental
 */
export interface IDeviceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Device resource.
     */
    readonly deviceRef: DeviceReference;
}
/**
 * A reference to a Device resource.
 *
 * @struct
 * @stability external
 */
export interface DeviceReference {
    /**
     * The GlobalNetworkId of the Device resource.
     */
    readonly globalNetworkId: string;
    /**
     * The DeviceId of the Device resource.
     */
    readonly deviceId: string;
    /**
     * The ARN of the Device resource.
     */
    readonly deviceArn: string;
}
/**
 * Indicates that this resource can be referenced as a GlobalNetwork.
 *
 * @stability experimental
 */
export interface IGlobalNetworkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GlobalNetwork resource.
     */
    readonly globalNetworkRef: GlobalNetworkReference;
}
/**
 * A reference to a GlobalNetwork resource.
 *
 * @struct
 * @stability external
 */
export interface GlobalNetworkReference {
    /**
     * The Id of the GlobalNetwork resource.
     */
    readonly globalNetworkId: string;
    /**
     * The ARN of the GlobalNetwork resource.
     */
    readonly globalNetworkArn: string;
}
/**
 * Indicates that this resource can be referenced as a Link.
 *
 * @stability experimental
 */
export interface ILinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Link resource.
     */
    readonly linkRef: LinkReference;
}
/**
 * A reference to a Link resource.
 *
 * @struct
 * @stability external
 */
export interface LinkReference {
    /**
     * The GlobalNetworkId of the Link resource.
     */
    readonly globalNetworkId: string;
    /**
     * The LinkId of the Link resource.
     */
    readonly linkId: string;
    /**
     * The ARN of the Link resource.
     */
    readonly linkArn: string;
}
/**
 * Indicates that this resource can be referenced as a LinkAssociation.
 *
 * @stability experimental
 */
export interface ILinkAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LinkAssociation resource.
     */
    readonly linkAssociationRef: LinkAssociationReference;
}
/**
 * A reference to a LinkAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface LinkAssociationReference {
    /**
     * The GlobalNetworkId of the LinkAssociation resource.
     */
    readonly globalNetworkId: string;
    /**
     * The DeviceId of the LinkAssociation resource.
     */
    readonly deviceId: string;
    /**
     * The LinkId of the LinkAssociation resource.
     */
    readonly linkId: string;
}
/**
 * Indicates that this resource can be referenced as a Site.
 *
 * @stability experimental
 */
export interface ISiteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Site resource.
     */
    readonly siteRef: SiteReference;
}
/**
 * A reference to a Site resource.
 *
 * @struct
 * @stability external
 */
export interface SiteReference {
    /**
     * The GlobalNetworkId of the Site resource.
     */
    readonly globalNetworkId: string;
    /**
     * The SiteId of the Site resource.
     */
    readonly siteId: string;
    /**
     * The ARN of the Site resource.
     */
    readonly siteArn: string;
}
/**
 * Indicates that this resource can be referenced as a SiteToSiteVpnAttachment.
 *
 * @stability experimental
 */
export interface ISiteToSiteVpnAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SiteToSiteVpnAttachment resource.
     */
    readonly siteToSiteVpnAttachmentRef: SiteToSiteVpnAttachmentReference;
}
/**
 * A reference to a SiteToSiteVpnAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface SiteToSiteVpnAttachmentReference {
    /**
     * The AttachmentId of the SiteToSiteVpnAttachment resource.
     */
    readonly attachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayPeering.
 *
 * @stability experimental
 */
export interface ITransitGatewayPeeringRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayPeering resource.
     */
    readonly transitGatewayPeeringRef: TransitGatewayPeeringReference;
}
/**
 * A reference to a TransitGatewayPeering resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayPeeringReference {
    /**
     * The PeeringId of the TransitGatewayPeering resource.
     */
    readonly peeringId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRegistration.
 *
 * @stability experimental
 */
export interface ITransitGatewayRegistrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRegistration resource.
     */
    readonly transitGatewayRegistrationRef: TransitGatewayRegistrationReference;
}
/**
 * A reference to a TransitGatewayRegistration resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRegistrationReference {
    /**
     * The GlobalNetworkId of the TransitGatewayRegistration resource.
     */
    readonly globalNetworkId: string;
    /**
     * The TransitGatewayArn of the TransitGatewayRegistration resource.
     */
    readonly transitGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRouteTableAttachment.
 *
 * @stability experimental
 */
export interface ITransitGatewayRouteTableAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRouteTableAttachment resource.
     */
    readonly transitGatewayRouteTableAttachmentRef: TransitGatewayRouteTableAttachmentReference;
}
/**
 * A reference to a TransitGatewayRouteTableAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRouteTableAttachmentReference {
    /**
     * The AttachmentId of the TransitGatewayRouteTableAttachment resource.
     */
    readonly attachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a VpcAttachment.
 *
 * @stability experimental
 */
export interface IVpcAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcAttachment resource.
     */
    readonly vpcAttachmentRef: VpcAttachmentReference;
}
/**
 * A reference to a VpcAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface VpcAttachmentReference {
    /**
     * The AttachmentId of the VpcAttachment resource.
     */
    readonly attachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a CoreNetworkPrefixListAssociation.
 *
 * @stability experimental
 */
export interface ICoreNetworkPrefixListAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CoreNetworkPrefixListAssociation resource.
     */
    readonly coreNetworkPrefixListAssociationRef: CoreNetworkPrefixListAssociationReference;
}
/**
 * A reference to a CoreNetworkPrefixListAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface CoreNetworkPrefixListAssociationReference {
    /**
     * The CoreNetworkId of the CoreNetworkPrefixListAssociation resource.
     */
    readonly coreNetworkId: string;
    /**
     * The PrefixListArn of the CoreNetworkPrefixListAssociation resource.
     */
    readonly prefixListArn: string;
}
/**
 * Indicates that this resource can be referenced as a DirectConnectGatewayAttachment.
 *
 * @stability experimental
 */
export interface IDirectConnectGatewayAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DirectConnectGatewayAttachment resource.
     */
    readonly directConnectGatewayAttachmentRef: DirectConnectGatewayAttachmentReference;
}
/**
 * A reference to a DirectConnectGatewayAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface DirectConnectGatewayAttachmentReference {
    /**
     * The AttachmentId of the DirectConnectGatewayAttachment resource.
     */
    readonly attachmentId: string;
}
