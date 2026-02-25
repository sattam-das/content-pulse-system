import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Account.
 *
 * @stability experimental
 */
export interface IAccountRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Account resource.
     */
    readonly accountRef: AccountReference;
}
/**
 * A reference to a Account resource.
 *
 * @struct
 * @stability external
 */
export interface AccountReference {
    /**
     * The Id of the Account resource.
     */
    readonly accountId: string;
}
/**
 * Indicates that this resource can be referenced as a ApiKey.
 *
 * @stability experimental
 */
export interface IApiKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApiKey resource.
     */
    readonly apiKeyRef: ApiKeyReference;
}
/**
 * A reference to a ApiKey resource.
 *
 * @struct
 * @stability external
 */
export interface ApiKeyReference {
    /**
     * The APIKeyId of the ApiKey resource.
     */
    readonly apiKeyId: string;
}
/**
 * Indicates that this resource can be referenced as a Authorizer.
 *
 * @stability experimental
 */
export interface IAuthorizerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Authorizer resource.
     */
    readonly authorizerRef: AuthorizerReference;
}
/**
 * A reference to a Authorizer resource.
 *
 * @struct
 * @stability external
 */
export interface AuthorizerReference {
    /**
     * The RestApiId of the Authorizer resource.
     */
    readonly restApiId: string;
    /**
     * The AuthorizerId of the Authorizer resource.
     */
    readonly authorizerId: string;
}
/**
 * Indicates that this resource can be referenced as a BasePathMapping.
 *
 * @stability experimental
 */
export interface IBasePathMappingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BasePathMapping resource.
     */
    readonly basePathMappingRef: BasePathMappingReference;
}
/**
 * A reference to a BasePathMapping resource.
 *
 * @struct
 * @stability external
 */
export interface BasePathMappingReference {
    /**
     * The DomainName of the BasePathMapping resource.
     */
    readonly domainName: string;
    /**
     * The BasePath of the BasePathMapping resource.
     */
    readonly basePath: string;
}
/**
 * Indicates that this resource can be referenced as a ClientCertificate.
 *
 * @stability experimental
 */
export interface IClientCertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ClientCertificate resource.
     */
    readonly clientCertificateRef: ClientCertificateReference;
}
/**
 * A reference to a ClientCertificate resource.
 *
 * @struct
 * @stability external
 */
export interface ClientCertificateReference {
    /**
     * The ClientCertificateId of the ClientCertificate resource.
     */
    readonly clientCertificateId: string;
}
/**
 * Indicates that this resource can be referenced as a Deployment.
 *
 * @stability experimental
 */
export interface IDeploymentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Deployment resource.
     */
    readonly deploymentRef: DeploymentReference;
}
/**
 * A reference to a Deployment resource.
 *
 * @struct
 * @stability external
 */
export interface DeploymentReference {
    /**
     * The DeploymentId of the Deployment resource.
     */
    readonly deploymentId: string;
    /**
     * The RestApiId of the Deployment resource.
     */
    readonly restApiId: string;
}
/**
 * Indicates that this resource can be referenced as a DocumentationPart.
 *
 * @stability experimental
 */
export interface IDocumentationPartRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DocumentationPart resource.
     */
    readonly documentationPartRef: DocumentationPartReference;
}
/**
 * A reference to a DocumentationPart resource.
 *
 * @struct
 * @stability external
 */
export interface DocumentationPartReference {
    /**
     * The DocumentationPartId of the DocumentationPart resource.
     */
    readonly documentationPartId: string;
    /**
     * The RestApiId of the DocumentationPart resource.
     */
    readonly restApiId: string;
}
/**
 * Indicates that this resource can be referenced as a DocumentationVersion.
 *
 * @stability experimental
 */
export interface IDocumentationVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DocumentationVersion resource.
     */
    readonly documentationVersionRef: DocumentationVersionReference;
}
/**
 * A reference to a DocumentationVersion resource.
 *
 * @struct
 * @stability external
 */
export interface DocumentationVersionReference {
    /**
     * The DocumentationVersion of the DocumentationVersion resource.
     */
    readonly documentationVersion: string;
    /**
     * The RestApiId of the DocumentationVersion resource.
     */
    readonly restApiId: string;
}
/**
 * Indicates that this resource can be referenced as a DomainName.
 *
 * @stability experimental
 */
export interface IDomainNameRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainName resource.
     */
    readonly domainNameRef: DomainNameReference;
}
/**
 * A reference to a DomainName resource.
 *
 * @struct
 * @stability external
 */
export interface DomainNameReference {
    /**
     * The DomainName of the DomainName resource.
     */
    readonly domainName: string;
    /**
     * The ARN of the DomainName resource.
     */
    readonly domainNameArn: string;
}
/**
 * Indicates that this resource can be referenced as a GatewayResponse.
 *
 * @stability experimental
 */
export interface IGatewayResponseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GatewayResponse resource.
     */
    readonly gatewayResponseRef: GatewayResponseReference;
}
/**
 * A reference to a GatewayResponse resource.
 *
 * @struct
 * @stability external
 */
export interface GatewayResponseReference {
    /**
     * The Id of the GatewayResponse resource.
     */
    readonly gatewayResponseId: string;
}
/**
 * Indicates that this resource can be referenced as a Method.
 *
 * @stability experimental
 */
export interface IMethodRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Method resource.
     */
    readonly methodRef: MethodReference;
}
/**
 * A reference to a Method resource.
 *
 * @struct
 * @stability external
 */
export interface MethodReference {
    /**
     * The RestApiId of the Method resource.
     */
    readonly restApiId: string;
    /**
     * The ResourceId of the Method resource.
     */
    readonly resourceId: string;
    /**
     * The HttpMethod of the Method resource.
     */
    readonly httpMethod: string;
}
/**
 * Indicates that this resource can be referenced as a Model.
 *
 * @stability experimental
 */
export interface IModelRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Model resource.
     */
    readonly modelRef: ModelReference;
}
/**
 * A reference to a Model resource.
 *
 * @struct
 * @stability external
 */
export interface ModelReference {
    /**
     * The Name of the Model resource.
     */
    readonly modelName: string;
}
/**
 * Indicates that this resource can be referenced as a RequestValidator.
 *
 * @stability experimental
 */
export interface IRequestValidatorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RequestValidator resource.
     */
    readonly requestValidatorRef: RequestValidatorReference;
}
/**
 * A reference to a RequestValidator resource.
 *
 * @struct
 * @stability external
 */
export interface RequestValidatorReference {
    /**
     * The RequestValidatorId of the RequestValidator resource.
     */
    readonly requestValidatorId: string;
}
/**
 * Indicates that this resource can be referenced as a Resource.
 *
 * @stability experimental
 */
export interface IResourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Resource resource.
     */
    readonly resourceRef: ResourceReference;
}
/**
 * A reference to a Resource resource.
 *
 * @struct
 * @stability external
 */
export interface ResourceReference {
    /**
     * The RestApiId of the Resource resource.
     */
    readonly restApiId: string;
    /**
     * The ResourceId of the Resource resource.
     */
    readonly resourceId: string;
}
/**
 * Indicates that this resource can be referenced as a RestApi.
 *
 * @stability experimental
 */
export interface IRestApiRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RestApi resource.
     */
    readonly restApiRef: RestApiReference;
}
/**
 * A reference to a RestApi resource.
 *
 * @struct
 * @stability external
 */
export interface RestApiReference {
    /**
     * The RestApiId of the RestApi resource.
     */
    readonly restApiId: string;
}
/**
 * Indicates that this resource can be referenced as a Stage.
 *
 * @stability experimental
 */
export interface IStageRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Stage resource.
     */
    readonly stageRef: StageReference;
}
/**
 * A reference to a Stage resource.
 *
 * @struct
 * @stability external
 */
export interface StageReference {
    /**
     * The RestApiId of the Stage resource.
     */
    readonly restApiId: string;
    /**
     * The StageName of the Stage resource.
     */
    readonly stageName: string;
}
/**
 * Indicates that this resource can be referenced as a UsagePlan.
 *
 * @stability experimental
 */
export interface IUsagePlanRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UsagePlan resource.
     */
    readonly usagePlanRef: UsagePlanReference;
}
/**
 * A reference to a UsagePlan resource.
 *
 * @struct
 * @stability external
 */
export interface UsagePlanReference {
    /**
     * The Id of the UsagePlan resource.
     */
    readonly usagePlanId: string;
}
/**
 * Indicates that this resource can be referenced as a UsagePlanKey.
 *
 * @stability experimental
 */
export interface IUsagePlanKeyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a UsagePlanKey resource.
     */
    readonly usagePlanKeyRef: UsagePlanKeyReference;
}
/**
 * A reference to a UsagePlanKey resource.
 *
 * @struct
 * @stability external
 */
export interface UsagePlanKeyReference {
    /**
     * The Id of the UsagePlanKey resource.
     */
    readonly usagePlanKeyId: string;
}
/**
 * Indicates that this resource can be referenced as a VpcLink.
 *
 * @stability experimental
 */
export interface IVpcLinkRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a VpcLink resource.
     */
    readonly vpcLinkRef: VpcLinkReference;
}
/**
 * A reference to a VpcLink resource.
 *
 * @struct
 * @stability external
 */
export interface VpcLinkReference {
    /**
     * The VpcLinkId of the VpcLink resource.
     */
    readonly vpcLinkId: string;
}
/**
 * Indicates that this resource can be referenced as a BasePathMappingV2.
 *
 * @stability experimental
 */
export interface IBasePathMappingV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a BasePathMappingV2 resource.
     */
    readonly basePathMappingV2Ref: BasePathMappingV2Reference;
}
/**
 * A reference to a BasePathMappingV2 resource.
 *
 * @struct
 * @stability external
 */
export interface BasePathMappingV2Reference {
    /**
     * The BasePathMappingArn of the BasePathMappingV2 resource.
     */
    readonly basePathMappingArn: string;
}
/**
 * Indicates that this resource can be referenced as a DomainNameAccessAssociation.
 *
 * @stability experimental
 */
export interface IDomainNameAccessAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainNameAccessAssociation resource.
     */
    readonly domainNameAccessAssociationRef: DomainNameAccessAssociationReference;
}
/**
 * A reference to a DomainNameAccessAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface DomainNameAccessAssociationReference {
    /**
     * The DomainNameAccessAssociationArn of the DomainNameAccessAssociation resource.
     */
    readonly domainNameAccessAssociationArn: string;
}
/**
 * Indicates that this resource can be referenced as a DomainNameV2.
 *
 * @stability experimental
 */
export interface IDomainNameV2Ref extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainNameV2 resource.
     */
    readonly domainNameV2Ref: DomainNameV2Reference;
}
/**
 * A reference to a DomainNameV2 resource.
 *
 * @struct
 * @stability external
 */
export interface DomainNameV2Reference {
    /**
     * The DomainNameArn of the DomainNameV2 resource.
     */
    readonly domainNameArn: string;
}
