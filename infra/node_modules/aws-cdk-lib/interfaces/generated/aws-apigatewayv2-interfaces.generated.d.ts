import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Api.
 *
 * @stability experimental
 */
export interface IApiRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Api resource.
     */
    readonly apiRef: ApiReference;
}
/**
 * A reference to a Api resource.
 *
 * @struct
 * @stability external
 */
export interface ApiReference {
    /**
     * The ApiId of the Api resource.
     */
    readonly apiId: string;
}
/**
 * Indicates that this resource can be referenced as a ApiGatewayManagedOverrides.
 *
 * @stability experimental
 */
export interface IApiGatewayManagedOverridesRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApiGatewayManagedOverrides resource.
     */
    readonly apiGatewayManagedOverridesRef: ApiGatewayManagedOverridesReference;
}
/**
 * A reference to a ApiGatewayManagedOverrides resource.
 *
 * @struct
 * @stability external
 */
export interface ApiGatewayManagedOverridesReference {
    /**
     * The Id of the ApiGatewayManagedOverrides resource.
     */
    readonly apiGatewayManagedOverridesId: string;
}
/**
 * Indicates that this resource can be referenced as a ApiMapping.
 *
 * @stability experimental
 */
export interface IApiMappingRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApiMapping resource.
     */
    readonly apiMappingRef: ApiMappingReference;
}
/**
 * A reference to a ApiMapping resource.
 *
 * @struct
 * @stability external
 */
export interface ApiMappingReference {
    /**
     * The ApiMappingId of the ApiMapping resource.
     */
    readonly apiMappingId: string;
    /**
     * The DomainName of the ApiMapping resource.
     */
    readonly domainName: string;
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
     * The AuthorizerId of the Authorizer resource.
     */
    readonly authorizerId: string;
    /**
     * The ApiId of the Authorizer resource.
     */
    readonly apiId: string;
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
     * The ApiId of the Deployment resource.
     */
    readonly apiId: string;
    /**
     * The DeploymentId of the Deployment resource.
     */
    readonly deploymentId: string;
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
 * Indicates that this resource can be referenced as a Integration.
 *
 * @stability experimental
 */
export interface IIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Integration resource.
     */
    readonly integrationRef: IntegrationReference;
}
/**
 * A reference to a Integration resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationReference {
    /**
     * The ApiId of the Integration resource.
     */
    readonly apiId: string;
    /**
     * The IntegrationId of the Integration resource.
     */
    readonly integrationId: string;
}
/**
 * Indicates that this resource can be referenced as a IntegrationResponse.
 *
 * @stability experimental
 */
export interface IIntegrationResponseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IntegrationResponse resource.
     */
    readonly integrationResponseRef: IntegrationResponseReference;
}
/**
 * A reference to a IntegrationResponse resource.
 *
 * @struct
 * @stability external
 */
export interface IntegrationResponseReference {
    /**
     * The ApiId of the IntegrationResponse resource.
     */
    readonly apiId: string;
    /**
     * The IntegrationId of the IntegrationResponse resource.
     */
    readonly integrationId: string;
    /**
     * The IntegrationResponseId of the IntegrationResponse resource.
     */
    readonly integrationResponseId: string;
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
     * The ApiId of the Model resource.
     */
    readonly apiId: string;
    /**
     * The ModelId of the Model resource.
     */
    readonly modelId: string;
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
     * The ApiId of the Route resource.
     */
    readonly apiId: string;
    /**
     * The RouteId of the Route resource.
     */
    readonly routeId: string;
}
/**
 * Indicates that this resource can be referenced as a RouteResponse.
 *
 * @stability experimental
 */
export interface IRouteResponseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RouteResponse resource.
     */
    readonly routeResponseRef: RouteResponseReference;
}
/**
 * A reference to a RouteResponse resource.
 *
 * @struct
 * @stability external
 */
export interface RouteResponseReference {
    /**
     * The ApiId of the RouteResponse resource.
     */
    readonly apiId: string;
    /**
     * The RouteId of the RouteResponse resource.
     */
    readonly routeId: string;
    /**
     * The RouteResponseId of the RouteResponse resource.
     */
    readonly routeResponseId: string;
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
     * The StageName of the Stage resource.
     */
    readonly stageName: string;
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
 * Indicates that this resource can be referenced as a RoutingRule.
 *
 * @stability experimental
 */
export interface IRoutingRuleRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a RoutingRule resource.
     */
    readonly routingRuleRef: RoutingRuleReference;
}
/**
 * A reference to a RoutingRule resource.
 *
 * @struct
 * @stability external
 */
export interface RoutingRuleReference {
    /**
     * The RoutingRuleArn of the RoutingRule resource.
     */
    readonly routingRuleArn: string;
}
