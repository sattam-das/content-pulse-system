import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a ApiCache.
 *
 * @stability experimental
 */
export interface IApiCacheRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApiCache resource.
     */
    readonly apiCacheRef: ApiCacheReference;
}
/**
 * A reference to a ApiCache resource.
 *
 * @struct
 * @stability external
 */
export interface ApiCacheReference {
    /**
     * The Id of the ApiCache resource.
     */
    readonly apiCacheId: string;
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
     * The Arn of the ApiKey resource.
     */
    readonly apiKeyArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataSource.
 *
 * @stability experimental
 */
export interface IDataSourceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataSource resource.
     */
    readonly dataSourceRef: DataSourceReference;
}
/**
 * A reference to a DataSource resource.
 *
 * @struct
 * @stability external
 */
export interface DataSourceReference {
    /**
     * The DataSourceArn of the DataSource resource.
     */
    readonly dataSourceArn: string;
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
 * Indicates that this resource can be referenced as a DomainNameApiAssociation.
 *
 * @stability experimental
 */
export interface IDomainNameApiAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DomainNameApiAssociation resource.
     */
    readonly domainNameApiAssociationRef: DomainNameApiAssociationReference;
}
/**
 * A reference to a DomainNameApiAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface DomainNameApiAssociationReference {
    /**
     * The ApiAssociationIdentifier of the DomainNameApiAssociation resource.
     */
    readonly apiAssociationIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a FunctionConfiguration.
 *
 * @stability experimental
 */
export interface IFunctionConfigurationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FunctionConfiguration resource.
     */
    readonly functionConfigurationRef: FunctionConfigurationReference;
}
/**
 * A reference to a FunctionConfiguration resource.
 *
 * @struct
 * @stability external
 */
export interface FunctionConfigurationReference {
    /**
     * The FunctionArn of the FunctionConfiguration resource.
     */
    readonly functionArn: string;
}
/**
 * Indicates that this resource can be referenced as a GraphQLApi.
 *
 * @stability experimental
 */
export interface IGraphQLApiRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GraphQLApi resource.
     */
    readonly graphQlApiRef: GraphQLApiReference;
}
/**
 * A reference to a GraphQLApi resource.
 *
 * @struct
 * @stability external
 */
export interface GraphQLApiReference {
    /**
     * The Arn of the GraphQLApi resource.
     */
    readonly graphQlApiArn: string;
}
/**
 * Indicates that this resource can be referenced as a GraphQLSchema.
 *
 * @stability experimental
 */
export interface IGraphQLSchemaRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GraphQLSchema resource.
     */
    readonly graphQlSchemaRef: GraphQLSchemaReference;
}
/**
 * A reference to a GraphQLSchema resource.
 *
 * @struct
 * @stability external
 */
export interface GraphQLSchemaReference {
    /**
     * The Id of the GraphQLSchema resource.
     */
    readonly graphQlSchemaId: string;
}
/**
 * Indicates that this resource can be referenced as a Resolver.
 *
 * @stability experimental
 */
export interface IResolverRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Resolver resource.
     */
    readonly resolverRef: ResolverReference;
}
/**
 * A reference to a Resolver resource.
 *
 * @struct
 * @stability external
 */
export interface ResolverReference {
    /**
     * The ResolverArn of the Resolver resource.
     */
    readonly resolverArn: string;
}
/**
 * Indicates that this resource can be referenced as a SourceApiAssociation.
 *
 * @stability experimental
 */
export interface ISourceApiAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SourceApiAssociation resource.
     */
    readonly sourceApiAssociationRef: SourceApiAssociationReference;
}
/**
 * A reference to a SourceApiAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface SourceApiAssociationReference {
    /**
     * The AssociationArn of the SourceApiAssociation resource.
     */
    readonly associationArn: string;
}
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
     * The ApiArn of the Api resource.
     */
    readonly apiArn: string;
}
/**
 * Indicates that this resource can be referenced as a ChannelNamespace.
 *
 * @stability experimental
 */
export interface IChannelNamespaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ChannelNamespace resource.
     */
    readonly channelNamespaceRef: ChannelNamespaceReference;
}
/**
 * A reference to a ChannelNamespace resource.
 *
 * @struct
 * @stability external
 */
export interface ChannelNamespaceReference {
    /**
     * The ChannelNamespaceArn of the ChannelNamespace resource.
     */
    readonly channelNamespaceArn: string;
}
