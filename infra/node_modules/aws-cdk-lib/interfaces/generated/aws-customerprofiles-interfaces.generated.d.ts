import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a CalculatedAttributeDefinition.
 *
 * @stability experimental
 */
export interface ICalculatedAttributeDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a CalculatedAttributeDefinition resource.
     */
    readonly calculatedAttributeDefinitionRef: CalculatedAttributeDefinitionReference;
}
/**
 * A reference to a CalculatedAttributeDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface CalculatedAttributeDefinitionReference {
    /**
     * The DomainName of the CalculatedAttributeDefinition resource.
     */
    readonly domainName: string;
    /**
     * The CalculatedAttributeName of the CalculatedAttributeDefinition resource.
     */
    readonly calculatedAttributeName: string;
}
/**
 * Indicates that this resource can be referenced as a Domain.
 *
 * @stability experimental
 */
export interface IDomainRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Domain resource.
     */
    readonly domainRef: DomainReference;
}
/**
 * A reference to a Domain resource.
 *
 * @struct
 * @stability external
 */
export interface DomainReference {
    /**
     * The DomainName of the Domain resource.
     */
    readonly domainName: string;
}
/**
 * Indicates that this resource can be referenced as a EventStream.
 *
 * @stability experimental
 */
export interface IEventStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventStream resource.
     */
    readonly eventStreamRef: EventStreamReference;
}
/**
 * A reference to a EventStream resource.
 *
 * @struct
 * @stability external
 */
export interface EventStreamReference {
    /**
     * The DomainName of the EventStream resource.
     */
    readonly domainName: string;
    /**
     * The EventStreamName of the EventStream resource.
     */
    readonly eventStreamName: string;
    /**
     * The ARN of the EventStream resource.
     */
    readonly eventStreamArn: string;
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
     * The DomainName of the Integration resource.
     */
    readonly domainName: string;
    /**
     * The Uri of the Integration resource.
     */
    readonly uri: string;
}
/**
 * Indicates that this resource can be referenced as a ObjectType.
 *
 * @stability experimental
 */
export interface IObjectTypeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ObjectType resource.
     */
    readonly objectTypeRef: ObjectTypeReference;
}
/**
 * A reference to a ObjectType resource.
 *
 * @struct
 * @stability external
 */
export interface ObjectTypeReference {
    /**
     * The DomainName of the ObjectType resource.
     */
    readonly domainName: string;
    /**
     * The ObjectTypeName of the ObjectType resource.
     */
    readonly objectTypeName: string;
}
/**
 * Indicates that this resource can be referenced as a EventTrigger.
 *
 * @stability experimental
 */
export interface IEventTriggerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventTrigger resource.
     */
    readonly eventTriggerRef: EventTriggerReference;
}
/**
 * A reference to a EventTrigger resource.
 *
 * @struct
 * @stability external
 */
export interface EventTriggerReference {
    /**
     * The DomainName of the EventTrigger resource.
     */
    readonly domainName: string;
    /**
     * The EventTriggerName of the EventTrigger resource.
     */
    readonly eventTriggerName: string;
}
/**
 * Indicates that this resource can be referenced as a SegmentDefinition.
 *
 * @stability experimental
 */
export interface ISegmentDefinitionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a SegmentDefinition resource.
     */
    readonly segmentDefinitionRef: SegmentDefinitionReference;
}
/**
 * A reference to a SegmentDefinition resource.
 *
 * @struct
 * @stability external
 */
export interface SegmentDefinitionReference {
    /**
     * The DomainName of the SegmentDefinition resource.
     */
    readonly domainName: string;
    /**
     * The SegmentDefinitionName of the SegmentDefinition resource.
     */
    readonly segmentDefinitionName: string;
    /**
     * The ARN of the SegmentDefinition resource.
     */
    readonly segmentDefinitionArn: string;
}
