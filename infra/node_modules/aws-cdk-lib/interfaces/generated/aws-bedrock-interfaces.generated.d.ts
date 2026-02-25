import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Agent.
 *
 * @stability experimental
 */
export interface IAgentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Agent resource.
     */
    readonly agentRef: AgentReference;
}
/**
 * A reference to a Agent resource.
 *
 * @struct
 * @stability external
 */
export interface AgentReference {
    /**
     * The AgentId of the Agent resource.
     */
    readonly agentId: string;
    /**
     * The ARN of the Agent resource.
     */
    readonly agentArn: string;
}
/**
 * Indicates that this resource can be referenced as a AgentAlias.
 *
 * @stability experimental
 */
export interface IAgentAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AgentAlias resource.
     */
    readonly agentAliasRef: AgentAliasReference;
}
/**
 * A reference to a AgentAlias resource.
 *
 * @struct
 * @stability external
 */
export interface AgentAliasReference {
    /**
     * The AgentId of the AgentAlias resource.
     */
    readonly agentId: string;
    /**
     * The AgentAliasId of the AgentAlias resource.
     */
    readonly agentAliasId: string;
    /**
     * The ARN of the AgentAlias resource.
     */
    readonly agentAliasArn: string;
}
/**
 * Indicates that this resource can be referenced as a ApplicationInferenceProfile.
 *
 * @stability experimental
 */
export interface IApplicationInferenceProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a ApplicationInferenceProfile resource.
     */
    readonly applicationInferenceProfileRef: ApplicationInferenceProfileReference;
}
/**
 * A reference to a ApplicationInferenceProfile resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationInferenceProfileReference {
    /**
     * The InferenceProfileIdentifier of the ApplicationInferenceProfile resource.
     */
    readonly inferenceProfileIdentifier: string;
}
/**
 * Indicates that this resource can be referenced as a AutomatedReasoningPolicy.
 *
 * @stability experimental
 */
export interface IAutomatedReasoningPolicyRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutomatedReasoningPolicy resource.
     */
    readonly automatedReasoningPolicyRef: AutomatedReasoningPolicyReference;
}
/**
 * A reference to a AutomatedReasoningPolicy resource.
 *
 * @struct
 * @stability external
 */
export interface AutomatedReasoningPolicyReference {
    /**
     * The PolicyArn of the AutomatedReasoningPolicy resource.
     */
    readonly policyArn: string;
}
/**
 * Indicates that this resource can be referenced as a AutomatedReasoningPolicyVersion.
 *
 * @stability experimental
 */
export interface IAutomatedReasoningPolicyVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AutomatedReasoningPolicyVersion resource.
     */
    readonly automatedReasoningPolicyVersionRef: AutomatedReasoningPolicyVersionReference;
}
/**
 * A reference to a AutomatedReasoningPolicyVersion resource.
 *
 * @struct
 * @stability external
 */
export interface AutomatedReasoningPolicyVersionReference {
    /**
     * The PolicyArn of the AutomatedReasoningPolicyVersion resource.
     */
    readonly policyArn: string;
    /**
     * The Version of the AutomatedReasoningPolicyVersion resource.
     */
    readonly version: string;
}
/**
 * Indicates that this resource can be referenced as a Blueprint.
 *
 * @stability experimental
 */
export interface IBlueprintRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Blueprint resource.
     */
    readonly blueprintRef: BlueprintReference;
}
/**
 * A reference to a Blueprint resource.
 *
 * @struct
 * @stability external
 */
export interface BlueprintReference {
    /**
     * The BlueprintArn of the Blueprint resource.
     */
    readonly blueprintArn: string;
}
/**
 * Indicates that this resource can be referenced as a DataAutomationProject.
 *
 * @stability experimental
 */
export interface IDataAutomationProjectRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataAutomationProject resource.
     */
    readonly dataAutomationProjectRef: DataAutomationProjectReference;
}
/**
 * A reference to a DataAutomationProject resource.
 *
 * @struct
 * @stability external
 */
export interface DataAutomationProjectReference {
    /**
     * The ProjectArn of the DataAutomationProject resource.
     */
    readonly projectArn: string;
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
     * The KnowledgeBaseId of the DataSource resource.
     */
    readonly knowledgeBaseId: string;
    /**
     * The DataSourceId of the DataSource resource.
     */
    readonly dataSourceId: string;
}
/**
 * Indicates that this resource can be referenced as a Flow.
 *
 * @stability experimental
 */
export interface IFlowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Flow resource.
     */
    readonly flowRef: FlowReference;
}
/**
 * A reference to a Flow resource.
 *
 * @struct
 * @stability external
 */
export interface FlowReference {
    /**
     * The Arn of the Flow resource.
     */
    readonly flowArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowAlias.
 *
 * @stability experimental
 */
export interface IFlowAliasRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowAlias resource.
     */
    readonly flowAliasRef: FlowAliasReference;
}
/**
 * A reference to a FlowAlias resource.
 *
 * @struct
 * @stability external
 */
export interface FlowAliasReference {
    /**
     * The Arn of the FlowAlias resource.
     */
    readonly flowAliasArn: string;
    /**
     * The FlowArn of the FlowAlias resource.
     */
    readonly flowArn: string;
}
/**
 * Indicates that this resource can be referenced as a FlowVersion.
 *
 * @stability experimental
 */
export interface IFlowVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a FlowVersion resource.
     */
    readonly flowVersionRef: FlowVersionReference;
}
/**
 * A reference to a FlowVersion resource.
 *
 * @struct
 * @stability external
 */
export interface FlowVersionReference {
    /**
     * The FlowArn of the FlowVersion resource.
     */
    readonly flowArn: string;
    /**
     * The Version of the FlowVersion resource.
     */
    readonly version: string;
}
/**
 * Indicates that this resource can be referenced as a Guardrail.
 *
 * @stability experimental
 */
export interface IGuardrailRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Guardrail resource.
     */
    readonly guardrailRef: GuardrailReference;
}
/**
 * A reference to a Guardrail resource.
 *
 * @struct
 * @stability external
 */
export interface GuardrailReference {
    /**
     * The GuardrailArn of the Guardrail resource.
     */
    readonly guardrailArn: string;
}
/**
 * Indicates that this resource can be referenced as a GuardrailVersion.
 *
 * @stability experimental
 */
export interface IGuardrailVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a GuardrailVersion resource.
     */
    readonly guardrailVersionRef: GuardrailVersionReference;
}
/**
 * A reference to a GuardrailVersion resource.
 *
 * @struct
 * @stability external
 */
export interface GuardrailVersionReference {
    /**
     * The GuardrailId of the GuardrailVersion resource.
     */
    readonly guardrailId: string;
    /**
     * The Version of the GuardrailVersion resource.
     */
    readonly version: string;
}
/**
 * Indicates that this resource can be referenced as a IntelligentPromptRouter.
 *
 * @stability experimental
 */
export interface IIntelligentPromptRouterRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a IntelligentPromptRouter resource.
     */
    readonly intelligentPromptRouterRef: IntelligentPromptRouterReference;
}
/**
 * A reference to a IntelligentPromptRouter resource.
 *
 * @struct
 * @stability external
 */
export interface IntelligentPromptRouterReference {
    /**
     * The PromptRouterArn of the IntelligentPromptRouter resource.
     */
    readonly promptRouterArn: string;
}
/**
 * Indicates that this resource can be referenced as a KnowledgeBase.
 *
 * @stability experimental
 */
export interface IKnowledgeBaseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a KnowledgeBase resource.
     */
    readonly knowledgeBaseRef: KnowledgeBaseReference;
}
/**
 * A reference to a KnowledgeBase resource.
 *
 * @struct
 * @stability external
 */
export interface KnowledgeBaseReference {
    /**
     * The KnowledgeBaseId of the KnowledgeBase resource.
     */
    readonly knowledgeBaseId: string;
    /**
     * The ARN of the KnowledgeBase resource.
     */
    readonly knowledgeBaseArn: string;
}
/**
 * Indicates that this resource can be referenced as a Prompt.
 *
 * @stability experimental
 */
export interface IPromptRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Prompt resource.
     */
    readonly promptRef: PromptReference;
}
/**
 * A reference to a Prompt resource.
 *
 * @struct
 * @stability external
 */
export interface PromptReference {
    /**
     * The Arn of the Prompt resource.
     */
    readonly promptArn: string;
}
/**
 * Indicates that this resource can be referenced as a PromptVersion.
 *
 * @stability experimental
 */
export interface IPromptVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a PromptVersion resource.
     */
    readonly promptVersionRef: PromptVersionReference;
}
/**
 * A reference to a PromptVersion resource.
 *
 * @struct
 * @stability external
 */
export interface PromptVersionReference {
    /**
     * The Arn of the PromptVersion resource.
     */
    readonly promptVersionArn: string;
}
