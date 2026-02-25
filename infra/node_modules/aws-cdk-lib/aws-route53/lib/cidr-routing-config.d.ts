/**
 * Properties for configuring CIDR routing in Route 53 resource record set objects.
 */
export interface CidrRoutingConfigProps {
    /**
     * The CIDR collection ID.
     */
    readonly collectionId: string;
    /**
     * The CIDR collection location name.
     *
     * @default `*`
     */
    readonly locationName?: string;
}
/**
 * Configuration for CIDR routing in Route 53 resource record set objects.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-cidrroutingconfig
 */
export declare class CidrRoutingConfig {
    /**
     * Creates a new instance of CidrRoutingConfig
     */
    static create(props: CidrRoutingConfigProps): CidrRoutingConfig;
    /**
     * Creates a new instance of CidrRoutingConfig for default CIDR record. This method defines the locationName as `*`.
     * @param collectionId The CIDR collection ID.
     * @returns A new instance of CidrRoutingConfig with the default location name as `*`.
     */
    static withDefaultLocationName(collectionId: string): CidrRoutingConfig;
    /**
     * The CIDR collection ID.
     */
    readonly collectionId: string;
    /**
     * The CIDR collection location name.
     */
    readonly locationName: string;
    private constructor();
}
