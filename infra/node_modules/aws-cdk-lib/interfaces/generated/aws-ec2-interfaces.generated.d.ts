import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CapacityReservation.
 *
 * @stability experimental
 */
export interface ICapacityReservationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityReservation resource.
     */
    readonly capacityReservationRef: CapacityReservationReference;
}
/**
 * A reference to a CapacityReservation resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityReservationReference {
    /**
     * The Id of the CapacityReservation resource.
     */
    readonly capacityReservationId: string;
    /**
     * The ARN of the CapacityReservation resource.
     */
    readonly capacityReservationArn: string;
}
/**
 * Indicates that this resource can be referenced as a CapacityReservationFleet.
 *
 * @stability experimental
 */
export interface ICapacityReservationFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityReservationFleet resource.
     */
    readonly capacityReservationFleetRef: CapacityReservationFleetReference;
}
/**
 * A reference to a CapacityReservationFleet resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityReservationFleetReference {
    /**
     * The CapacityReservationFleetId of the CapacityReservationFleet resource.
     */
    readonly capacityReservationFleetId: string;
}
/**
 * Indicates that this resource can be referenced as a CarrierGateway.
 *
 * @stability experimental
 */
export interface ICarrierGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CarrierGateway resource.
     */
    readonly carrierGatewayRef: CarrierGatewayReference;
}
/**
 * A reference to a CarrierGateway resource.
 *
 * @struct
 * @stability external
 */
export interface CarrierGatewayReference {
    /**
     * The CarrierGatewayId of the CarrierGateway resource.
     */
    readonly carrierGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a ClientVpnAuthorizationRule.
 *
 * @stability experimental
 */
export interface IClientVpnAuthorizationRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClientVpnAuthorizationRule resource.
     */
    readonly clientVpnAuthorizationRuleRef: ClientVpnAuthorizationRuleReference;
}
/**
 * A reference to a ClientVpnAuthorizationRule resource.
 *
 * @struct
 * @stability external
 */
export interface ClientVpnAuthorizationRuleReference {
    /**
     * The Id of the ClientVpnAuthorizationRule resource.
     */
    readonly clientVpnAuthorizationRuleId: string;
}
/**
 * Indicates that this resource can be referenced as a ClientVpnEndpoint.
 *
 * @stability experimental
 */
export interface IClientVpnEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClientVpnEndpoint resource.
     */
    readonly clientVpnEndpointRef: ClientVpnEndpointReference;
}
/**
 * A reference to a ClientVpnEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface ClientVpnEndpointReference {
    /**
     * The Id of the ClientVpnEndpoint resource.
     */
    readonly clientVpnEndpointId: string;
}
/**
 * Indicates that this resource can be referenced as a ClientVpnRoute.
 *
 * @stability experimental
 */
export interface IClientVpnRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClientVpnRoute resource.
     */
    readonly clientVpnRouteRef: ClientVpnRouteReference;
}
/**
 * A reference to a ClientVpnRoute resource.
 *
 * @struct
 * @stability external
 */
export interface ClientVpnRouteReference {
    /**
     * The Id of the ClientVpnRoute resource.
     */
    readonly clientVpnRouteId: string;
}
/**
 * Indicates that this resource can be referenced as a ClientVpnTargetNetworkAssociation.
 *
 * @stability experimental
 */
export interface IClientVpnTargetNetworkAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClientVpnTargetNetworkAssociation resource.
     */
    readonly clientVpnTargetNetworkAssociationRef: ClientVpnTargetNetworkAssociationReference;
}
/**
 * A reference to a ClientVpnTargetNetworkAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface ClientVpnTargetNetworkAssociationReference {
    /**
     * The Id of the ClientVpnTargetNetworkAssociation resource.
     */
    readonly clientVpnTargetNetworkAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a CustomerGateway.
 *
 * @stability experimental
 */
export interface ICustomerGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CustomerGateway resource.
     */
    readonly customerGatewayRef: CustomerGatewayReference;
}
/**
 * A reference to a CustomerGateway resource.
 *
 * @struct
 * @stability external
 */
export interface CustomerGatewayReference {
    /**
     * The CustomerGatewayId of the CustomerGateway resource.
     */
    readonly customerGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a DHCPOptions.
 *
 * @stability experimental
 */
export interface IDHCPOptionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DHCPOptions resource.
     */
    readonly dhcpOptionsRef: DHCPOptionsReference;
}
/**
 * A reference to a DHCPOptions resource.
 *
 * @struct
 * @stability external
 */
export interface DHCPOptionsReference {
    /**
     * The DhcpOptionsId of the DHCPOptions resource.
     */
    readonly dhcpOptionsId: string;
}
/**
 * Indicates that this resource can be referenced as a EC2Fleet.
 *
 * @stability experimental
 */
export interface IEC2FleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EC2Fleet resource.
     */
    readonly ec2FleetRef: EC2FleetReference;
}
/**
 * A reference to a EC2Fleet resource.
 *
 * @struct
 * @stability external
 */
export interface EC2FleetReference {
    /**
     * The FleetId of the EC2Fleet resource.
     */
    readonly fleetId: string;
}
/**
 * Indicates that this resource can be referenced as a EIP.
 *
 * @stability experimental
 */
export interface IEIPRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EIP resource.
     */
    readonly eipRef: EIPReference;
}
/**
 * A reference to a EIP resource.
 *
 * @struct
 * @stability external
 */
export interface EIPReference {
    /**
     * The PublicIp of the EIP resource.
     */
    readonly publicIp: string;
    /**
     * The AllocationId of the EIP resource.
     */
    readonly allocationId: string;
}
/**
 * Indicates that this resource can be referenced as a EIPAssociation.
 *
 * @stability experimental
 */
export interface IEIPAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EIPAssociation resource.
     */
    readonly eipAssociationRef: EIPAssociationReference;
}
/**
 * A reference to a EIPAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface EIPAssociationReference {
    /**
     * The Id of the EIPAssociation resource.
     */
    readonly eipAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a EgressOnlyInternetGateway.
 *
 * @stability experimental
 */
export interface IEgressOnlyInternetGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EgressOnlyInternetGateway resource.
     */
    readonly egressOnlyInternetGatewayRef: EgressOnlyInternetGatewayReference;
}
/**
 * A reference to a EgressOnlyInternetGateway resource.
 *
 * @struct
 * @stability external
 */
export interface EgressOnlyInternetGatewayReference {
    /**
     * The Id of the EgressOnlyInternetGateway resource.
     */
    readonly egressOnlyInternetGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a EnclaveCertificateIamRoleAssociation.
 *
 * @stability experimental
 */
export interface IEnclaveCertificateIamRoleAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EnclaveCertificateIamRoleAssociation resource.
     */
    readonly enclaveCertificateIamRoleAssociationRef: EnclaveCertificateIamRoleAssociationReference;
}
/**
 * A reference to a EnclaveCertificateIamRoleAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface EnclaveCertificateIamRoleAssociationReference {
    /**
     * The CertificateArn of the EnclaveCertificateIamRoleAssociation resource.
     */
    readonly certificateArn: string;
    /**
     * The RoleArn of the EnclaveCertificateIamRoleAssociation resource.
     */
    readonly roleArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowLog.
 *
 * @stability experimental
 */
export interface IFlowLogRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowLog resource.
     */
    readonly flowLogRef: FlowLogReference;
}
/**
 * A reference to a FlowLog resource.
 *
 * @struct
 * @stability external
 */
export interface FlowLogReference {
    /**
     * The Id of the FlowLog resource.
     */
    readonly flowLogId: string;
}
/**
 * Indicates that this resource can be referenced as a GatewayRouteTableAssociation.
 *
 * @stability experimental
 */
export interface IGatewayRouteTableAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GatewayRouteTableAssociation resource.
     */
    readonly gatewayRouteTableAssociationRef: GatewayRouteTableAssociationReference;
}
/**
 * A reference to a GatewayRouteTableAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayRouteTableAssociationReference {
    /**
     * The GatewayId of the GatewayRouteTableAssociation resource.
     */
    readonly gatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a Host.
 *
 * @stability experimental
 */
export interface IHostRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Host resource.
     */
    readonly hostRef: HostReference;
}
/**
 * A reference to a Host resource.
 *
 * @struct
 * @stability external
 */
export interface HostReference {
    /**
     * The HostId of the Host resource.
     */
    readonly hostId: string;
}
/**
 * Indicates that this resource can be referenced as a IPAM.
 *
 * @stability experimental
 */
export interface IIPAMRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAM resource.
     */
    readonly ipamRef: IPAMReference;
}
/**
 * A reference to a IPAM resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMReference {
    /**
     * The IpamId of the IPAM resource.
     */
    readonly ipamId: string;
    /**
     * The ARN of the IPAM resource.
     */
    readonly ipamArn: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMAllocation.
 *
 * @stability experimental
 */
export interface IIPAMAllocationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMAllocation resource.
     */
    readonly ipamAllocationRef: IPAMAllocationReference;
}
/**
 * A reference to a IPAMAllocation resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMAllocationReference {
    /**
     * The IpamPoolId of the IPAMAllocation resource.
     */
    readonly ipamPoolId: string;
    /**
     * The IpamPoolAllocationId of the IPAMAllocation resource.
     */
    readonly ipamPoolAllocationId: string;
    /**
     * The Cidr of the IPAMAllocation resource.
     */
    readonly cidr: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMPool.
 *
 * @stability experimental
 */
export interface IIPAMPoolRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMPool resource.
     */
    readonly ipamPoolRef: IPAMPoolReference;
}
/**
 * A reference to a IPAMPool resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMPoolReference {
    /**
     * The IpamPoolId of the IPAMPool resource.
     */
    readonly ipamPoolId: string;
    /**
     * The ARN of the IPAMPool resource.
     */
    readonly ipamPoolArn: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMPoolCidr.
 *
 * @stability experimental
 */
export interface IIPAMPoolCidrRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMPoolCidr resource.
     */
    readonly ipamPoolCidrRef: IPAMPoolCidrReference;
}
/**
 * A reference to a IPAMPoolCidr resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMPoolCidrReference {
    /**
     * The IpamPoolId of the IPAMPoolCidr resource.
     */
    readonly ipamPoolId: string;
    /**
     * The IpamPoolCidrId of the IPAMPoolCidr resource.
     */
    readonly ipamPoolCidrId: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMResourceDiscovery.
 *
 * @stability experimental
 */
export interface IIPAMResourceDiscoveryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMResourceDiscovery resource.
     */
    readonly ipamResourceDiscoveryRef: IPAMResourceDiscoveryReference;
}
/**
 * A reference to a IPAMResourceDiscovery resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMResourceDiscoveryReference {
    /**
     * The IpamResourceDiscoveryId of the IPAMResourceDiscovery resource.
     */
    readonly ipamResourceDiscoveryId: string;
    /**
     * The ARN of the IPAMResourceDiscovery resource.
     */
    readonly ipamResourceDiscoveryArn: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMResourceDiscoveryAssociation.
 *
 * @stability experimental
 */
export interface IIPAMResourceDiscoveryAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMResourceDiscoveryAssociation resource.
     */
    readonly ipamResourceDiscoveryAssociationRef: IPAMResourceDiscoveryAssociationReference;
}
/**
 * A reference to a IPAMResourceDiscoveryAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMResourceDiscoveryAssociationReference {
    /**
     * The IpamResourceDiscoveryAssociationId of the IPAMResourceDiscoveryAssociation resource.
     */
    readonly ipamResourceDiscoveryAssociationId: string;
    /**
     * The ARN of the IPAMResourceDiscoveryAssociation resource.
     */
    readonly ipamResourceDiscoveryAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a IPAMScope.
 *
 * @stability experimental
 */
export interface IIPAMScopeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IPAMScope resource.
     */
    readonly ipamScopeRef: IPAMScopeReference;
}
/**
 * A reference to a IPAMScope resource.
 *
 * @struct
 * @stability external
 */
export interface IPAMScopeReference {
    /**
     * The IpamScopeId of the IPAMScope resource.
     */
    readonly ipamScopeId: string;
    /**
     * The ARN of the IPAMScope resource.
     */
    readonly ipamScopeArn: string;
}
/**
 * Indicates that this resource can be referenced as a Instance.
 *
 * @stability experimental
 */
export interface IInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Instance resource.
     */
    readonly instanceRef: InstanceReference;
}
/**
 * A reference to a Instance resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceReference {
    /**
     * The InstanceId of the Instance resource.
     */
    readonly instanceId: string;
}
/**
 * Indicates that this resource can be referenced as a InstanceConnectEndpoint.
 *
 * @stability experimental
 */
export interface IInstanceConnectEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InstanceConnectEndpoint resource.
     */
    readonly instanceConnectEndpointRef: InstanceConnectEndpointReference;
}
/**
 * A reference to a InstanceConnectEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface InstanceConnectEndpointReference {
    /**
     * The Id of the InstanceConnectEndpoint resource.
     */
    readonly instanceConnectEndpointId: string;
}
/**
 * Indicates that this resource can be referenced as a InternetGateway.
 *
 * @stability experimental
 */
export interface IInternetGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a InternetGateway resource.
     */
    readonly internetGatewayRef: InternetGatewayReference;
}
/**
 * A reference to a InternetGateway resource.
 *
 * @struct
 * @stability external
 */
export interface InternetGatewayReference {
    /**
     * The InternetGatewayId of the InternetGateway resource.
     */
    readonly internetGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a KeyPair.
 *
 * @stability experimental
 */
export interface IKeyPairRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a KeyPair resource.
     */
    readonly keyPairRef: KeyPairReference;
}
/**
 * A reference to a KeyPair resource.
 *
 * @struct
 * @stability external
 */
export interface KeyPairReference {
    /**
     * The KeyName of the KeyPair resource.
     */
    readonly keyName: string;
}
/**
 * Indicates that this resource can be referenced as a LaunchTemplate.
 *
 * @stability experimental
 */
export interface ILaunchTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LaunchTemplate resource.
     */
    readonly launchTemplateRef: LaunchTemplateReference;
}
/**
 * A reference to a LaunchTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface LaunchTemplateReference {
    /**
     * The LaunchTemplateId of the LaunchTemplate resource.
     */
    readonly launchTemplateId: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayRoute.
 *
 * @stability experimental
 */
export interface ILocalGatewayRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayRoute resource.
     */
    readonly localGatewayRouteRef: LocalGatewayRouteReference;
}
/**
 * A reference to a LocalGatewayRoute resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayRouteReference {
    /**
     * The DestinationCidrBlock of the LocalGatewayRoute resource.
     */
    readonly destinationCidrBlock: string;
    /**
     * The LocalGatewayRouteTableId of the LocalGatewayRoute resource.
     */
    readonly localGatewayRouteTableId: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayRouteTable.
 *
 * @stability experimental
 */
export interface ILocalGatewayRouteTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayRouteTable resource.
     */
    readonly localGatewayRouteTableRef: LocalGatewayRouteTableReference;
}
/**
 * A reference to a LocalGatewayRouteTable resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayRouteTableReference {
    /**
     * The LocalGatewayRouteTableId of the LocalGatewayRouteTable resource.
     */
    readonly localGatewayRouteTableId: string;
    /**
     * The ARN of the LocalGatewayRouteTable resource.
     */
    readonly localGatewayRouteTableArn: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayRouteTableVPCAssociation.
 *
 * @stability experimental
 */
export interface ILocalGatewayRouteTableVPCAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayRouteTableVPCAssociation resource.
     */
    readonly localGatewayRouteTableVpcAssociationRef: LocalGatewayRouteTableVPCAssociationReference;
}
/**
 * A reference to a LocalGatewayRouteTableVPCAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayRouteTableVPCAssociationReference {
    /**
     * The LocalGatewayRouteTableVpcAssociationId of the LocalGatewayRouteTableVPCAssociation resource.
     */
    readonly localGatewayRouteTableVpcAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayRouteTableVirtualInterfaceGroupAssociation.
 *
 * @stability experimental
 */
export interface ILocalGatewayRouteTableVirtualInterfaceGroupAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource.
     */
    readonly localGatewayRouteTableVirtualInterfaceGroupAssociationRef: LocalGatewayRouteTableVirtualInterfaceGroupAssociationReference;
}
/**
 * A reference to a LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociationReference {
    /**
     * The LocalGatewayRouteTableVirtualInterfaceGroupAssociationId of the LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource.
     */
    readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a NatGateway.
 *
 * @stability experimental
 */
export interface INatGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NatGateway resource.
     */
    readonly natGatewayRef: NatGatewayReference;
}
/**
 * A reference to a NatGateway resource.
 *
 * @struct
 * @stability external
 */
export interface NatGatewayReference {
    /**
     * The NatGatewayId of the NatGateway resource.
     */
    readonly natGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkAcl.
 *
 * @stability experimental
 */
export interface INetworkAclRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkAcl resource.
     */
    readonly networkAclRef: NetworkAclReference;
}
/**
 * A reference to a NetworkAcl resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkAclReference {
    /**
     * The Id of the NetworkAcl resource.
     */
    readonly networkAclId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkAclEntry.
 *
 * @stability experimental
 */
export interface INetworkAclEntryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkAclEntry resource.
     */
    readonly networkAclEntryRef: NetworkAclEntryReference;
}
/**
 * A reference to a NetworkAclEntry resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkAclEntryReference {
    /**
     * The Id of the NetworkAclEntry resource.
     */
    readonly networkAclEntryId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInsightsAccessScope.
 *
 * @stability experimental
 */
export interface INetworkInsightsAccessScopeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInsightsAccessScope resource.
     */
    readonly networkInsightsAccessScopeRef: NetworkInsightsAccessScopeReference;
}
/**
 * A reference to a NetworkInsightsAccessScope resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInsightsAccessScopeReference {
    /**
     * The NetworkInsightsAccessScopeId of the NetworkInsightsAccessScope resource.
     */
    readonly networkInsightsAccessScopeId: string;
    /**
     * The ARN of the NetworkInsightsAccessScope resource.
     */
    readonly networkInsightsAccessScopeArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInsightsAccessScopeAnalysis.
 *
 * @stability experimental
 */
export interface INetworkInsightsAccessScopeAnalysisRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInsightsAccessScopeAnalysis resource.
     */
    readonly networkInsightsAccessScopeAnalysisRef: NetworkInsightsAccessScopeAnalysisReference;
}
/**
 * A reference to a NetworkInsightsAccessScopeAnalysis resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInsightsAccessScopeAnalysisReference {
    /**
     * The NetworkInsightsAccessScopeAnalysisId of the NetworkInsightsAccessScopeAnalysis resource.
     */
    readonly networkInsightsAccessScopeAnalysisId: string;
    /**
     * The ARN of the NetworkInsightsAccessScopeAnalysis resource.
     */
    readonly networkInsightsAccessScopeAnalysisArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInsightsAnalysis.
 *
 * @stability experimental
 */
export interface INetworkInsightsAnalysisRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInsightsAnalysis resource.
     */
    readonly networkInsightsAnalysisRef: NetworkInsightsAnalysisReference;
}
/**
 * A reference to a NetworkInsightsAnalysis resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInsightsAnalysisReference {
    /**
     * The NetworkInsightsAnalysisId of the NetworkInsightsAnalysis resource.
     */
    readonly networkInsightsAnalysisId: string;
    /**
     * The ARN of the NetworkInsightsAnalysis resource.
     */
    readonly networkInsightsAnalysisArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInsightsPath.
 *
 * @stability experimental
 */
export interface INetworkInsightsPathRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInsightsPath resource.
     */
    readonly networkInsightsPathRef: NetworkInsightsPathReference;
}
/**
 * A reference to a NetworkInsightsPath resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInsightsPathReference {
    /**
     * The NetworkInsightsPathId of the NetworkInsightsPath resource.
     */
    readonly networkInsightsPathId: string;
    /**
     * The ARN of the NetworkInsightsPath resource.
     */
    readonly networkInsightsPathArn: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInterface.
 *
 * @stability experimental
 */
export interface INetworkInterfaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInterface resource.
     */
    readonly networkInterfaceRef: NetworkInterfaceReference;
}
/**
 * A reference to a NetworkInterface resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInterfaceReference {
    /**
     * The Id of the NetworkInterface resource.
     */
    readonly networkInterfaceId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInterfaceAttachment.
 *
 * @stability experimental
 */
export interface INetworkInterfaceAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInterfaceAttachment resource.
     */
    readonly networkInterfaceAttachmentRef: NetworkInterfaceAttachmentReference;
}
/**
 * A reference to a NetworkInterfaceAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInterfaceAttachmentReference {
    /**
     * The AttachmentId of the NetworkInterfaceAttachment resource.
     */
    readonly attachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkInterfacePermission.
 *
 * @stability experimental
 */
export interface INetworkInterfacePermissionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkInterfacePermission resource.
     */
    readonly networkInterfacePermissionRef: NetworkInterfacePermissionReference;
}
/**
 * A reference to a NetworkInterfacePermission resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkInterfacePermissionReference {
    /**
     * The Id of the NetworkInterfacePermission resource.
     */
    readonly networkInterfacePermissionId: string;
}
/**
 * Indicates that this resource can be referenced as a NetworkPerformanceMetricSubscription.
 *
 * @stability experimental
 */
export interface INetworkPerformanceMetricSubscriptionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a NetworkPerformanceMetricSubscription resource.
     */
    readonly networkPerformanceMetricSubscriptionRef: NetworkPerformanceMetricSubscriptionReference;
}
/**
 * A reference to a NetworkPerformanceMetricSubscription resource.
 *
 * @struct
 * @stability external
 */
export interface NetworkPerformanceMetricSubscriptionReference {
    /**
     * The Source of the NetworkPerformanceMetricSubscription resource.
     */
    readonly source: string;
    /**
     * The Destination of the NetworkPerformanceMetricSubscription resource.
     */
    readonly destination: string;
    /**
     * The Metric of the NetworkPerformanceMetricSubscription resource.
     */
    readonly metric: string;
    /**
     * The Statistic of the NetworkPerformanceMetricSubscription resource.
     */
    readonly statistic: string;
}
/**
 * Indicates that this resource can be referenced as a PlacementGroup.
 *
 * @stability experimental
 */
export interface IPlacementGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PlacementGroup resource.
     */
    readonly placementGroupRef: PlacementGroupReference;
}
/**
 * A reference to a PlacementGroup resource.
 *
 * @struct
 * @stability external
 */
export interface PlacementGroupReference {
    /**
     * The GroupName of the PlacementGroup resource.
     */
    readonly groupName: string;
}
/**
 * Indicates that this resource can be referenced as a PrefixList.
 *
 * @stability experimental
 */
export interface IPrefixListRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PrefixList resource.
     */
    readonly prefixListRef: PrefixListReference;
}
/**
 * A reference to a PrefixList resource.
 *
 * @struct
 * @stability external
 */
export interface PrefixListReference {
    /**
     * The PrefixListId of the PrefixList resource.
     */
    readonly prefixListId: string;
    /**
     * The ARN of the PrefixList resource.
     */
    readonly prefixListArn: string;
}
/**
 * Indicates that this resource can be referenced as a Route.
 *
 * @stability experimental
 */
export interface IRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Route resource.
     */
    readonly routeRef: RouteReference;
}
/**
 * A reference to a Route resource.
 *
 * @struct
 * @stability external
 */
export interface RouteReference {
    /**
     * The RouteTableId of the Route resource.
     */
    readonly routeTableId: string;
    /**
     * The CidrBlock of the Route resource.
     */
    readonly cidrBlock: string;
}
/**
 * Indicates that this resource can be referenced as a RouteTable.
 *
 * @stability experimental
 */
export interface IRouteTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteTable resource.
     */
    readonly routeTableRef: RouteTableReference;
}
/**
 * A reference to a RouteTable resource.
 *
 * @struct
 * @stability external
 */
export interface RouteTableReference {
    /**
     * The RouteTableId of the RouteTable resource.
     */
    readonly routeTableId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroup.
 *
 * @stability experimental
 */
export interface ISecurityGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroup resource.
     */
    readonly securityGroupRef: SecurityGroupReference;
}
/**
 * A reference to a SecurityGroup resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupReference {
    /**
     * The Id of the SecurityGroup resource.
     */
    readonly securityGroupId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroupEgress.
 *
 * @stability experimental
 */
export interface ISecurityGroupEgressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroupEgress resource.
     */
    readonly securityGroupEgressRef: SecurityGroupEgressReference;
}
/**
 * A reference to a SecurityGroupEgress resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupEgressReference {
    /**
     * The Id of the SecurityGroupEgress resource.
     */
    readonly securityGroupEgressId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroupIngress.
 *
 * @stability experimental
 */
export interface ISecurityGroupIngressRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroupIngress resource.
     */
    readonly securityGroupIngressRef: SecurityGroupIngressReference;
}
/**
 * A reference to a SecurityGroupIngress resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupIngressReference {
    /**
     * The Id of the SecurityGroupIngress resource.
     */
    readonly securityGroupIngressId: string;
}
/**
 * Indicates that this resource can be referenced as a SpotFleet.
 *
 * @stability experimental
 */
export interface ISpotFleetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SpotFleet resource.
     */
    readonly spotFleetRef: SpotFleetReference;
}
/**
 * A reference to a SpotFleet resource.
 *
 * @struct
 * @stability external
 */
export interface SpotFleetReference {
    /**
     * The Id of the SpotFleet resource.
     */
    readonly spotFleetId: string;
}
/**
 * Indicates that this resource can be referenced as a Subnet.
 *
 * @stability experimental
 */
export interface ISubnetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Subnet resource.
     */
    readonly subnetRef: SubnetReference;
}
/**
 * A reference to a Subnet resource.
 *
 * @struct
 * @stability external
 */
export interface SubnetReference {
    /**
     * The SubnetId of the Subnet resource.
     */
    readonly subnetId: string;
}
/**
 * Indicates that this resource can be referenced as a SubnetCidrBlock.
 *
 * @stability experimental
 */
export interface ISubnetCidrBlockRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubnetCidrBlock resource.
     */
    readonly subnetCidrBlockRef: SubnetCidrBlockReference;
}
/**
 * A reference to a SubnetCidrBlock resource.
 *
 * @struct
 * @stability external
 */
export interface SubnetCidrBlockReference {
    /**
     * The Id of the SubnetCidrBlock resource.
     */
    readonly subnetCidrBlockId: string;
}
/**
 * Indicates that this resource can be referenced as a SubnetNetworkAclAssociation.
 *
 * @stability experimental
 */
export interface ISubnetNetworkAclAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubnetNetworkAclAssociation resource.
     */
    readonly subnetNetworkAclAssociationRef: SubnetNetworkAclAssociationReference;
}
/**
 * A reference to a SubnetNetworkAclAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface SubnetNetworkAclAssociationReference {
    /**
     * The AssociationId of the SubnetNetworkAclAssociation resource.
     */
    readonly associationId: string;
}
/**
 * Indicates that this resource can be referenced as a SubnetRouteTableAssociation.
 *
 * @stability experimental
 */
export interface ISubnetRouteTableAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SubnetRouteTableAssociation resource.
     */
    readonly subnetRouteTableAssociationRef: SubnetRouteTableAssociationReference;
}
/**
 * A reference to a SubnetRouteTableAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface SubnetRouteTableAssociationReference {
    /**
     * The Id of the SubnetRouteTableAssociation resource.
     */
    readonly subnetRouteTableAssociationId: string;
}
/**
 * Indicates that this resource can be referenced as a TrafficMirrorFilter.
 *
 * @stability experimental
 */
export interface ITrafficMirrorFilterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrafficMirrorFilter resource.
     */
    readonly trafficMirrorFilterRef: TrafficMirrorFilterReference;
}
/**
 * A reference to a TrafficMirrorFilter resource.
 *
 * @struct
 * @stability external
 */
export interface TrafficMirrorFilterReference {
    /**
     * The Id of the TrafficMirrorFilter resource.
     */
    readonly trafficMirrorFilterId: string;
}
/**
 * Indicates that this resource can be referenced as a TrafficMirrorFilterRule.
 *
 * @stability experimental
 */
export interface ITrafficMirrorFilterRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrafficMirrorFilterRule resource.
     */
    readonly trafficMirrorFilterRuleRef: TrafficMirrorFilterRuleReference;
}
/**
 * A reference to a TrafficMirrorFilterRule resource.
 *
 * @struct
 * @stability external
 */
export interface TrafficMirrorFilterRuleReference {
    /**
     * The TrafficMirrorFilterRuleId of the TrafficMirrorFilterRule resource.
     */
    readonly trafficMirrorFilterRuleId: string;
}
/**
 * Indicates that this resource can be referenced as a TrafficMirrorSession.
 *
 * @stability experimental
 */
export interface ITrafficMirrorSessionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrafficMirrorSession resource.
     */
    readonly trafficMirrorSessionRef: TrafficMirrorSessionReference;
}
/**
 * A reference to a TrafficMirrorSession resource.
 *
 * @struct
 * @stability external
 */
export interface TrafficMirrorSessionReference {
    /**
     * The Id of the TrafficMirrorSession resource.
     */
    readonly trafficMirrorSessionId: string;
}
/**
 * Indicates that this resource can be referenced as a TrafficMirrorTarget.
 *
 * @stability experimental
 */
export interface ITrafficMirrorTargetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TrafficMirrorTarget resource.
     */
    readonly trafficMirrorTargetRef: TrafficMirrorTargetReference;
}
/**
 * A reference to a TrafficMirrorTarget resource.
 *
 * @struct
 * @stability external
 */
export interface TrafficMirrorTargetReference {
    /**
     * The Id of the TrafficMirrorTarget resource.
     */
    readonly trafficMirrorTargetId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGateway.
 *
 * @stability experimental
 */
export interface ITransitGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGateway resource.
     */
    readonly transitGatewayRef: TransitGatewayReference;
}
/**
 * A reference to a TransitGateway resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayReference {
    /**
     * The Id of the TransitGateway resource.
     */
    readonly transitGatewayId: string;
    /**
     * The ARN of the TransitGateway resource.
     */
    readonly transitGatewayArn: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayAttachment.
 *
 * @stability experimental
 */
export interface ITransitGatewayAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayAttachment resource.
     */
    readonly transitGatewayAttachmentRef: TransitGatewayAttachmentReference;
}
/**
 * A reference to a TransitGatewayAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayAttachmentReference {
    /**
     * The Id of the TransitGatewayAttachment resource.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayConnect.
 *
 * @stability experimental
 */
export interface ITransitGatewayConnectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayConnect resource.
     */
    readonly transitGatewayConnectRef: TransitGatewayConnectReference;
}
/**
 * A reference to a TransitGatewayConnect resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayConnectReference {
    /**
     * The TransitGatewayAttachmentId of the TransitGatewayConnect resource.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMulticastDomain.
 *
 * @stability experimental
 */
export interface ITransitGatewayMulticastDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMulticastDomain resource.
     */
    readonly transitGatewayMulticastDomainRef: TransitGatewayMulticastDomainReference;
}
/**
 * A reference to a TransitGatewayMulticastDomain resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMulticastDomainReference {
    /**
     * The TransitGatewayMulticastDomainId of the TransitGatewayMulticastDomain resource.
     */
    readonly transitGatewayMulticastDomainId: string;
    /**
     * The ARN of the TransitGatewayMulticastDomain resource.
     */
    readonly transitGatewayMulticastDomainArn: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMulticastDomainAssociation.
 *
 * @stability experimental
 */
export interface ITransitGatewayMulticastDomainAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMulticastDomainAssociation resource.
     */
    readonly transitGatewayMulticastDomainAssociationRef: TransitGatewayMulticastDomainAssociationReference;
}
/**
 * A reference to a TransitGatewayMulticastDomainAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMulticastDomainAssociationReference {
    /**
     * The TransitGatewayMulticastDomainId of the TransitGatewayMulticastDomainAssociation resource.
     */
    readonly transitGatewayMulticastDomainId: string;
    /**
     * The TransitGatewayAttachmentId of the TransitGatewayMulticastDomainAssociation resource.
     */
    readonly transitGatewayAttachmentId: string;
    /**
     * The SubnetId of the TransitGatewayMulticastDomainAssociation resource.
     */
    readonly subnetId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMulticastGroupMember.
 *
 * @stability experimental
 */
export interface ITransitGatewayMulticastGroupMemberRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMulticastGroupMember resource.
     */
    readonly transitGatewayMulticastGroupMemberRef: TransitGatewayMulticastGroupMemberReference;
}
/**
 * A reference to a TransitGatewayMulticastGroupMember resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMulticastGroupMemberReference {
    /**
     * The TransitGatewayMulticastDomainId of the TransitGatewayMulticastGroupMember resource.
     */
    readonly transitGatewayMulticastDomainId: string;
    /**
     * The GroupIpAddress of the TransitGatewayMulticastGroupMember resource.
     */
    readonly groupIpAddress: string;
    /**
     * The NetworkInterfaceId of the TransitGatewayMulticastGroupMember resource.
     */
    readonly networkInterfaceId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMulticastGroupSource.
 *
 * @stability experimental
 */
export interface ITransitGatewayMulticastGroupSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMulticastGroupSource resource.
     */
    readonly transitGatewayMulticastGroupSourceRef: TransitGatewayMulticastGroupSourceReference;
}
/**
 * A reference to a TransitGatewayMulticastGroupSource resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMulticastGroupSourceReference {
    /**
     * The TransitGatewayMulticastDomainId of the TransitGatewayMulticastGroupSource resource.
     */
    readonly transitGatewayMulticastDomainId: string;
    /**
     * The GroupIpAddress of the TransitGatewayMulticastGroupSource resource.
     */
    readonly groupIpAddress: string;
    /**
     * The NetworkInterfaceId of the TransitGatewayMulticastGroupSource resource.
     */
    readonly networkInterfaceId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayPeeringAttachment.
 *
 * @stability experimental
 */
export interface ITransitGatewayPeeringAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayPeeringAttachment resource.
     */
    readonly transitGatewayPeeringAttachmentRef: TransitGatewayPeeringAttachmentReference;
}
/**
 * A reference to a TransitGatewayPeeringAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayPeeringAttachmentReference {
    /**
     * The TransitGatewayAttachmentId of the TransitGatewayPeeringAttachment resource.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRoute.
 *
 * @stability experimental
 */
export interface ITransitGatewayRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRoute resource.
     */
    readonly transitGatewayRouteRef: TransitGatewayRouteReference;
}
/**
 * A reference to a TransitGatewayRoute resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRouteReference {
    /**
     * The TransitGatewayRouteTableId of the TransitGatewayRoute resource.
     */
    readonly transitGatewayRouteTableId: string;
    /**
     * The DestinationCidrBlock of the TransitGatewayRoute resource.
     */
    readonly destinationCidrBlock: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRouteTable.
 *
 * @stability experimental
 */
export interface ITransitGatewayRouteTableRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRouteTable resource.
     */
    readonly transitGatewayRouteTableRef: TransitGatewayRouteTableReference;
}
/**
 * A reference to a TransitGatewayRouteTable resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRouteTableReference {
    /**
     * The TransitGatewayRouteTableId of the TransitGatewayRouteTable resource.
     */
    readonly transitGatewayRouteTableId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRouteTableAssociation.
 *
 * @stability experimental
 */
export interface ITransitGatewayRouteTableAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRouteTableAssociation resource.
     */
    readonly transitGatewayRouteTableAssociationRef: TransitGatewayRouteTableAssociationReference;
}
/**
 * A reference to a TransitGatewayRouteTableAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRouteTableAssociationReference {
    /**
     * The TransitGatewayRouteTableId of the TransitGatewayRouteTableAssociation resource.
     */
    readonly transitGatewayRouteTableId: string;
    /**
     * The TransitGatewayAttachmentId of the TransitGatewayRouteTableAssociation resource.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayRouteTablePropagation.
 *
 * @stability experimental
 */
export interface ITransitGatewayRouteTablePropagationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayRouteTablePropagation resource.
     */
    readonly transitGatewayRouteTablePropagationRef: TransitGatewayRouteTablePropagationReference;
}
/**
 * A reference to a TransitGatewayRouteTablePropagation resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayRouteTablePropagationReference {
    /**
     * The TransitGatewayRouteTableId of the TransitGatewayRouteTablePropagation resource.
     */
    readonly transitGatewayRouteTableId: string;
    /**
     * The TransitGatewayAttachmentId of the TransitGatewayRouteTablePropagation resource.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayVpcAttachment.
 *
 * @stability experimental
 */
export interface ITransitGatewayVpcAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayVpcAttachment resource.
     */
    readonly transitGatewayVpcAttachmentRef: TransitGatewayVpcAttachmentReference;
}
/**
 * A reference to a TransitGatewayVpcAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayVpcAttachmentReference {
    /**
     * The Id of the TransitGatewayVpcAttachment resource.
     */
    readonly transitGatewayVpcAttachmentId: string;
}
/**
 * Indicates that this resource can be referenced as a VPC.
 *
 * @stability experimental
 */
export interface IVPCRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPC resource.
     */
    readonly vpcRef: VPCReference;
}
/**
 * A reference to a VPC resource.
 *
 * @struct
 * @stability external
 */
export interface VPCReference {
    /**
     * The VpcId of the VPC resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCCidrBlock.
 *
 * @stability experimental
 */
export interface IVPCCidrBlockRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCCidrBlock resource.
     */
    readonly vpcCidrBlockRef: VPCCidrBlockReference;
}
/**
 * A reference to a VPCCidrBlock resource.
 *
 * @struct
 * @stability external
 */
export interface VPCCidrBlockReference {
    /**
     * The Id of the VPCCidrBlock resource.
     */
    readonly vpcCidrBlockId: string;
    /**
     * The VpcId of the VPCCidrBlock resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCDHCPOptionsAssociation.
 *
 * @stability experimental
 */
export interface IVPCDHCPOptionsAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCDHCPOptionsAssociation resource.
     */
    readonly vpcdhcpOptionsAssociationRef: VPCDHCPOptionsAssociationReference;
}
/**
 * A reference to a VPCDHCPOptionsAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface VPCDHCPOptionsAssociationReference {
    /**
     * The DhcpOptionsId of the VPCDHCPOptionsAssociation resource.
     */
    readonly dhcpOptionsId: string;
    /**
     * The VpcId of the VPCDHCPOptionsAssociation resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEndpoint.
 *
 * @stability experimental
 */
export interface IVPCEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEndpoint resource.
     */
    readonly vpcEndpointRef: VPCEndpointReference;
}
/**
 * A reference to a VPCEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEndpointReference {
    /**
     * The Id of the VPCEndpoint resource.
     */
    readonly vpcEndpointId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEndpointConnectionNotification.
 *
 * @stability experimental
 */
export interface IVPCEndpointConnectionNotificationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEndpointConnectionNotification resource.
     */
    readonly vpcEndpointConnectionNotificationRef: VPCEndpointConnectionNotificationReference;
}
/**
 * A reference to a VPCEndpointConnectionNotification resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEndpointConnectionNotificationReference {
    /**
     * The VPCEndpointConnectionNotificationId of the VPCEndpointConnectionNotification resource.
     */
    readonly vpcEndpointConnectionNotificationId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEndpointService.
 *
 * @stability experimental
 */
export interface IVPCEndpointServiceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEndpointService resource.
     */
    readonly vpcEndpointServiceRef: VPCEndpointServiceReference;
}
/**
 * A reference to a VPCEndpointService resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEndpointServiceReference {
    /**
     * The ServiceId of the VPCEndpointService resource.
     */
    readonly serviceId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEndpointServicePermissions.
 *
 * @stability experimental
 */
export interface IVPCEndpointServicePermissionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEndpointServicePermissions resource.
     */
    readonly vpcEndpointServicePermissionsRef: VPCEndpointServicePermissionsReference;
}
/**
 * A reference to a VPCEndpointServicePermissions resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEndpointServicePermissionsReference {
    /**
     * The ServiceId of the VPCEndpointServicePermissions resource.
     */
    readonly serviceId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCGatewayAttachment.
 *
 * @stability experimental
 */
export interface IVPCGatewayAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCGatewayAttachment resource.
     */
    readonly vpcGatewayAttachmentRef: VPCGatewayAttachmentReference;
}
/**
 * A reference to a VPCGatewayAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface VPCGatewayAttachmentReference {
    /**
     * The AttachmentType of the VPCGatewayAttachment resource.
     */
    readonly attachmentType: string;
    /**
     * The VpcId of the VPCGatewayAttachment resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCPeeringConnection.
 *
 * @stability experimental
 */
export interface IVPCPeeringConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCPeeringConnection resource.
     */
    readonly vpcPeeringConnectionRef: VPCPeeringConnectionReference;
}
/**
 * A reference to a VPCPeeringConnection resource.
 *
 * @struct
 * @stability external
 */
export interface VPCPeeringConnectionReference {
    /**
     * The Id of the VPCPeeringConnection resource.
     */
    readonly vpcPeeringConnectionId: string;
}
/**
 * Indicates that this resource can be referenced as a VPNConnection.
 *
 * @stability experimental
 */
export interface IVPNConnectionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPNConnection resource.
     */
    readonly vpnConnectionRef: VPNConnectionReference;
}
/**
 * A reference to a VPNConnection resource.
 *
 * @struct
 * @stability external
 */
export interface VPNConnectionReference {
    /**
     * The VpnConnectionId of the VPNConnection resource.
     */
    readonly vpnConnectionId: string;
}
/**
 * Indicates that this resource can be referenced as a VPNConnectionRoute.
 *
 * @stability experimental
 */
export interface IVPNConnectionRouteRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPNConnectionRoute resource.
     */
    readonly vpnConnectionRouteRef: VPNConnectionRouteReference;
}
/**
 * A reference to a VPNConnectionRoute resource.
 *
 * @struct
 * @stability external
 */
export interface VPNConnectionRouteReference {
    /**
     * The DestinationCidrBlock of the VPNConnectionRoute resource.
     */
    readonly destinationCidrBlock: string;
    /**
     * The VpnConnectionId of the VPNConnectionRoute resource.
     */
    readonly vpnConnectionId: string;
}
/**
 * Indicates that this resource can be referenced as a VPNGateway.
 *
 * @stability experimental
 */
export interface IVPNGatewayRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPNGateway resource.
     */
    readonly vpnGatewayRef: VPNGatewayReference;
}
/**
 * A reference to a VPNGateway resource.
 *
 * @struct
 * @stability external
 */
export interface VPNGatewayReference {
    /**
     * The VPNGatewayId of the VPNGateway resource.
     */
    readonly vpnGatewayId: string;
}
/**
 * Indicates that this resource can be referenced as a VPNGatewayRoutePropagation.
 *
 * @stability experimental
 */
export interface IVPNGatewayRoutePropagationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPNGatewayRoutePropagation resource.
     */
    readonly vpnGatewayRoutePropagationRef: VPNGatewayRoutePropagationReference;
}
/**
 * A reference to a VPNGatewayRoutePropagation resource.
 *
 * @struct
 * @stability external
 */
export interface VPNGatewayRoutePropagationReference {
    /**
     * The Id of the VPNGatewayRoutePropagation resource.
     */
    readonly vpnGatewayRoutePropagationId: string;
}
/**
 * Indicates that this resource can be referenced as a VerifiedAccessEndpoint.
 *
 * @stability experimental
 */
export interface IVerifiedAccessEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VerifiedAccessEndpoint resource.
     */
    readonly verifiedAccessEndpointRef: VerifiedAccessEndpointReference;
}
/**
 * A reference to a VerifiedAccessEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface VerifiedAccessEndpointReference {
    /**
     * The VerifiedAccessEndpointId of the VerifiedAccessEndpoint resource.
     */
    readonly verifiedAccessEndpointId: string;
}
/**
 * Indicates that this resource can be referenced as a VerifiedAccessGroup.
 *
 * @stability experimental
 */
export interface IVerifiedAccessGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VerifiedAccessGroup resource.
     */
    readonly verifiedAccessGroupRef: VerifiedAccessGroupReference;
}
/**
 * A reference to a VerifiedAccessGroup resource.
 *
 * @struct
 * @stability external
 */
export interface VerifiedAccessGroupReference {
    /**
     * The VerifiedAccessGroupId of the VerifiedAccessGroup resource.
     */
    readonly verifiedAccessGroupId: string;
    /**
     * The ARN of the VerifiedAccessGroup resource.
     */
    readonly verifiedAccessGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a VerifiedAccessInstance.
 *
 * @stability experimental
 */
export interface IVerifiedAccessInstanceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VerifiedAccessInstance resource.
     */
    readonly verifiedAccessInstanceRef: VerifiedAccessInstanceReference;
}
/**
 * A reference to a VerifiedAccessInstance resource.
 *
 * @struct
 * @stability external
 */
export interface VerifiedAccessInstanceReference {
    /**
     * The VerifiedAccessInstanceId of the VerifiedAccessInstance resource.
     */
    readonly verifiedAccessInstanceId: string;
}
/**
 * Indicates that this resource can be referenced as a VerifiedAccessTrustProvider.
 *
 * @stability experimental
 */
export interface IVerifiedAccessTrustProviderRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VerifiedAccessTrustProvider resource.
     */
    readonly verifiedAccessTrustProviderRef: VerifiedAccessTrustProviderReference;
}
/**
 * A reference to a VerifiedAccessTrustProvider resource.
 *
 * @struct
 * @stability external
 */
export interface VerifiedAccessTrustProviderReference {
    /**
     * The VerifiedAccessTrustProviderId of the VerifiedAccessTrustProvider resource.
     */
    readonly verifiedAccessTrustProviderId: string;
}
/**
 * Indicates that this resource can be referenced as a Volume.
 *
 * @stability experimental
 */
export interface IVolumeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Volume resource.
     */
    readonly volumeRef: VolumeReference;
}
/**
 * A reference to a Volume resource.
 *
 * @struct
 * @stability external
 */
export interface VolumeReference {
    /**
     * The VolumeId of the Volume resource.
     */
    readonly volumeId: string;
}
/**
 * Indicates that this resource can be referenced as a VolumeAttachment.
 *
 * @stability experimental
 */
export interface IVolumeAttachmentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VolumeAttachment resource.
     */
    readonly volumeAttachmentRef: VolumeAttachmentReference;
}
/**
 * A reference to a VolumeAttachment resource.
 *
 * @struct
 * @stability external
 */
export interface VolumeAttachmentReference {
    /**
     * The VolumeId of the VolumeAttachment resource.
     */
    readonly volumeId: string;
    /**
     * The InstanceId of the VolumeAttachment resource.
     */
    readonly instanceId: string;
}
/**
 * Indicates that this resource can be referenced as a CapacityManagerDataExport.
 *
 * @stability experimental
 */
export interface ICapacityManagerDataExportRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CapacityManagerDataExport resource.
     */
    readonly capacityManagerDataExportRef: CapacityManagerDataExportReference;
}
/**
 * A reference to a CapacityManagerDataExport resource.
 *
 * @struct
 * @stability external
 */
export interface CapacityManagerDataExportReference {
    /**
     * The CapacityManagerDataExportId of the CapacityManagerDataExport resource.
     */
    readonly capacityManagerDataExportId: string;
}
/**
 * Indicates that this resource can be referenced as a IpPoolRouteTableAssociation.
 *
 * @stability experimental
 */
export interface IIpPoolRouteTableAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IpPoolRouteTableAssociation resource.
     */
    readonly ipPoolRouteTableAssociationRef: IpPoolRouteTableAssociationReference;
}
/**
 * A reference to a IpPoolRouteTableAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface IpPoolRouteTableAssociationReference {
    /**
     * The AssociationId of the IpPoolRouteTableAssociation resource.
     */
    readonly associationId: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayVirtualInterface.
 *
 * @stability experimental
 */
export interface ILocalGatewayVirtualInterfaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayVirtualInterface resource.
     */
    readonly localGatewayVirtualInterfaceRef: LocalGatewayVirtualInterfaceReference;
}
/**
 * A reference to a LocalGatewayVirtualInterface resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayVirtualInterfaceReference {
    /**
     * The LocalGatewayVirtualInterfaceId of the LocalGatewayVirtualInterface resource.
     */
    readonly localGatewayVirtualInterfaceId: string;
}
/**
 * Indicates that this resource can be referenced as a LocalGatewayVirtualInterfaceGroup.
 *
 * @stability experimental
 */
export interface ILocalGatewayVirtualInterfaceGroupRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a LocalGatewayVirtualInterfaceGroup resource.
     */
    readonly localGatewayVirtualInterfaceGroupRef: LocalGatewayVirtualInterfaceGroupReference;
}
/**
 * A reference to a LocalGatewayVirtualInterfaceGroup resource.
 *
 * @struct
 * @stability external
 */
export interface LocalGatewayVirtualInterfaceGroupReference {
    /**
     * The LocalGatewayVirtualInterfaceGroupId of the LocalGatewayVirtualInterfaceGroup resource.
     */
    readonly localGatewayVirtualInterfaceGroupId: string;
    /**
     * The ARN of the LocalGatewayVirtualInterfaceGroup resource.
     */
    readonly localGatewayVirtualInterfaceGroupArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouteServer.
 *
 * @stability experimental
 */
export interface IRouteServerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteServer resource.
     */
    readonly routeServerRef: RouteServerReference;
}
/**
 * A reference to a RouteServer resource.
 *
 * @struct
 * @stability external
 */
export interface RouteServerReference {
    /**
     * The Id of the RouteServer resource.
     */
    readonly routeServerId: string;
    /**
     * The ARN of the RouteServer resource.
     */
    readonly routeServerArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouteServerAssociation.
 *
 * @stability experimental
 */
export interface IRouteServerAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteServerAssociation resource.
     */
    readonly routeServerAssociationRef: RouteServerAssociationReference;
}
/**
 * A reference to a RouteServerAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface RouteServerAssociationReference {
    /**
     * The RouteServerId of the RouteServerAssociation resource.
     */
    readonly routeServerId: string;
    /**
     * The VpcId of the RouteServerAssociation resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a RouteServerEndpoint.
 *
 * @stability experimental
 */
export interface IRouteServerEndpointRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteServerEndpoint resource.
     */
    readonly routeServerEndpointRef: RouteServerEndpointReference;
}
/**
 * A reference to a RouteServerEndpoint resource.
 *
 * @struct
 * @stability external
 */
export interface RouteServerEndpointReference {
    /**
     * The Id of the RouteServerEndpoint resource.
     */
    readonly routeServerEndpointId: string;
    /**
     * The ARN of the RouteServerEndpoint resource.
     */
    readonly routeServerEndpointArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouteServerPeer.
 *
 * @stability experimental
 */
export interface IRouteServerPeerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteServerPeer resource.
     */
    readonly routeServerPeerRef: RouteServerPeerReference;
}
/**
 * A reference to a RouteServerPeer resource.
 *
 * @struct
 * @stability external
 */
export interface RouteServerPeerReference {
    /**
     * The Id of the RouteServerPeer resource.
     */
    readonly routeServerPeerId: string;
    /**
     * The ARN of the RouteServerPeer resource.
     */
    readonly routeServerPeerArn: string;
}
/**
 * Indicates that this resource can be referenced as a RouteServerPropagation.
 *
 * @stability experimental
 */
export interface IRouteServerPropagationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteServerPropagation resource.
     */
    readonly routeServerPropagationRef: RouteServerPropagationReference;
}
/**
 * A reference to a RouteServerPropagation resource.
 *
 * @struct
 * @stability external
 */
export interface RouteServerPropagationReference {
    /**
     * The RouteServerId of the RouteServerPropagation resource.
     */
    readonly routeServerId: string;
    /**
     * The RouteTableId of the RouteServerPropagation resource.
     */
    readonly routeTableId: string;
}
/**
 * Indicates that this resource can be referenced as a SecurityGroupVpcAssociation.
 *
 * @stability experimental
 */
export interface ISecurityGroupVpcAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SecurityGroupVpcAssociation resource.
     */
    readonly securityGroupVpcAssociationRef: SecurityGroupVpcAssociationReference;
}
/**
 * A reference to a SecurityGroupVpcAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface SecurityGroupVpcAssociationReference {
    /**
     * The GroupId of the SecurityGroupVpcAssociation resource.
     */
    readonly groupId: string;
    /**
     * The VpcId of the SecurityGroupVpcAssociation resource.
     */
    readonly vpcId: string;
}
/**
 * Indicates that this resource can be referenced as a SnapshotBlockPublicAccess.
 *
 * @stability experimental
 */
export interface ISnapshotBlockPublicAccessRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SnapshotBlockPublicAccess resource.
     */
    readonly snapshotBlockPublicAccessRef: SnapshotBlockPublicAccessReference;
}
/**
 * A reference to a SnapshotBlockPublicAccess resource.
 *
 * @struct
 * @stability external
 */
export interface SnapshotBlockPublicAccessReference {
    /**
     * The AccountId of the SnapshotBlockPublicAccess resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayConnectPeer.
 *
 * @stability experimental
 */
export interface ITransitGatewayConnectPeerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayConnectPeer resource.
     */
    readonly transitGatewayConnectPeerRef: TransitGatewayConnectPeerReference;
}
/**
 * A reference to a TransitGatewayConnectPeer resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayConnectPeerReference {
    /**
     * The TransitGatewayConnectPeerId of the TransitGatewayConnectPeer resource.
     */
    readonly transitGatewayConnectPeerId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMeteringPolicy.
 *
 * @stability experimental
 */
export interface ITransitGatewayMeteringPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMeteringPolicy resource.
     */
    readonly transitGatewayMeteringPolicyRef: TransitGatewayMeteringPolicyReference;
}
/**
 * A reference to a TransitGatewayMeteringPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMeteringPolicyReference {
    /**
     * The TransitGatewayMeteringPolicyId of the TransitGatewayMeteringPolicy resource.
     */
    readonly transitGatewayMeteringPolicyId: string;
}
/**
 * Indicates that this resource can be referenced as a TransitGatewayMeteringPolicyEntry.
 *
 * @stability experimental
 */
export interface ITransitGatewayMeteringPolicyEntryRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a TransitGatewayMeteringPolicyEntry resource.
     */
    readonly transitGatewayMeteringPolicyEntryRef: TransitGatewayMeteringPolicyEntryReference;
}
/**
 * A reference to a TransitGatewayMeteringPolicyEntry resource.
 *
 * @struct
 * @stability external
 */
export interface TransitGatewayMeteringPolicyEntryReference {
    /**
     * The TransitGatewayMeteringPolicyId of the TransitGatewayMeteringPolicyEntry resource.
     */
    readonly transitGatewayMeteringPolicyId: string;
    /**
     * The PolicyRuleNumber of the TransitGatewayMeteringPolicyEntry resource.
     */
    readonly policyRuleNumber: string;
}
/**
 * Indicates that this resource can be referenced as a VPCBlockPublicAccessExclusion.
 *
 * @stability experimental
 */
export interface IVPCBlockPublicAccessExclusionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCBlockPublicAccessExclusion resource.
     */
    readonly vpcBlockPublicAccessExclusionRef: VPCBlockPublicAccessExclusionReference;
}
/**
 * A reference to a VPCBlockPublicAccessExclusion resource.
 *
 * @struct
 * @stability external
 */
export interface VPCBlockPublicAccessExclusionReference {
    /**
     * The ExclusionId of the VPCBlockPublicAccessExclusion resource.
     */
    readonly exclusionId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCBlockPublicAccessOptions.
 *
 * @stability experimental
 */
export interface IVPCBlockPublicAccessOptionsRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCBlockPublicAccessOptions resource.
     */
    readonly vpcBlockPublicAccessOptionsRef: VPCBlockPublicAccessOptionsReference;
}
/**
 * A reference to a VPCBlockPublicAccessOptions resource.
 *
 * @struct
 * @stability external
 */
export interface VPCBlockPublicAccessOptionsReference {
    /**
     * The AccountId of the VPCBlockPublicAccessOptions resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a VPCEncryptionControl.
 *
 * @stability experimental
 */
export interface IVPCEncryptionControlRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPCEncryptionControl resource.
     */
    readonly vpcEncryptionControlRef: VPCEncryptionControlReference;
}
/**
 * A reference to a VPCEncryptionControl resource.
 *
 * @struct
 * @stability external
 */
export interface VPCEncryptionControlReference {
    /**
     * The VpcEncryptionControlId of the VPCEncryptionControl resource.
     */
    readonly vpcEncryptionControlId: string;
}
/**
 * Indicates that this resource can be referenced as a VPNConcentrator.
 *
 * @stability experimental
 */
export interface IVPNConcentratorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VPNConcentrator resource.
     */
    readonly vpnConcentratorRef: VPNConcentratorReference;
}
/**
 * A reference to a VPNConcentrator resource.
 *
 * @struct
 * @stability external
 */
export interface VPNConcentratorReference {
    /**
     * The VpnConcentratorId of the VPNConcentrator resource.
     */
    readonly vpnConcentratorId: string;
}
