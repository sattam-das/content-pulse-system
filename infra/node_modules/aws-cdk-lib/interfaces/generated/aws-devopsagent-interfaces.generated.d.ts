import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a AgentSpace.
 *
 * @stability experimental
 */
export interface IAgentSpaceRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AgentSpace resource.
     */
    readonly agentSpaceRef: AgentSpaceReference;
}
/**
 * A reference to a AgentSpace resource.
 *
 * @struct
 * @stability external
 */
export interface AgentSpaceReference {
    /**
     * The AgentSpaceId of the AgentSpace resource.
     */
    readonly agentSpaceId: string;
    /**
     * The ARN of the AgentSpace resource.
     */
    readonly agentSpaceArn: string;
}
/**
 * Indicates that this resource can be referenced as a Association.
 *
 * @stability experimental
 */
export interface IAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Association resource.
     */
    readonly associationRef: AssociationReference;
}
/**
 * A reference to a Association resource.
 *
 * @struct
 * @stability external
 */
export interface AssociationReference {
    /**
     * The AgentSpaceId of the Association resource.
     */
    readonly agentSpaceId: string;
    /**
     * The AssociationId of the Association resource.
     */
    readonly associationId: string;
}
