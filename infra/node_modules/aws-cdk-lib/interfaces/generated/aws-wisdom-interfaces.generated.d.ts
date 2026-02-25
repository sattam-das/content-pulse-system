import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Assistant.
 *
 * @stability experimental
 */
export interface IAssistantRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Assistant resource.
     */
    readonly assistantRef: AssistantReference;
}
/**
 * A reference to a Assistant resource.
 *
 * @struct
 * @stability external
 */
export interface AssistantReference {
    /**
     * The AssistantId of the Assistant resource.
     */
    readonly assistantId: string;
    /**
     * The ARN of the Assistant resource.
     */
    readonly assistantArn: string;
}
/**
 * Indicates that this resource can be referenced as a AssistantAssociation.
 *
 * @stability experimental
 */
export interface IAssistantAssociationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AssistantAssociation resource.
     */
    readonly assistantAssociationRef: AssistantAssociationReference;
}
/**
 * A reference to a AssistantAssociation resource.
 *
 * @struct
 * @stability external
 */
export interface AssistantAssociationReference {
    /**
     * The AssistantAssociationId of the AssistantAssociation resource.
     */
    readonly assistantAssociationId: string;
    /**
     * The AssistantId of the AssistantAssociation resource.
     */
    readonly assistantId: string;
    /**
     * The ARN of the AssistantAssociation resource.
     */
    readonly assistantAssociationArn: string;
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
 * Indicates that this resource can be referenced as a AIAgent.
 *
 * @stability experimental
 */
export interface IAIAgentRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIAgent resource.
     */
    readonly aiAgentRef: AIAgentReference;
}
/**
 * A reference to a AIAgent resource.
 *
 * @struct
 * @stability external
 */
export interface AIAgentReference {
    /**
     * The AIAgentId of the AIAgent resource.
     */
    readonly aiAgentId: string;
    /**
     * The AssistantId of the AIAgent resource.
     */
    readonly assistantId: string;
    /**
     * The ARN of the AIAgent resource.
     */
    readonly aiAgentArn: string;
}
/**
 * Indicates that this resource can be referenced as a AIAgentVersion.
 *
 * @stability experimental
 */
export interface IAIAgentVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIAgentVersion resource.
     */
    readonly aiAgentVersionRef: AIAgentVersionReference;
}
/**
 * A reference to a AIAgentVersion resource.
 *
 * @struct
 * @stability external
 */
export interface AIAgentVersionReference {
    /**
     * The AssistantId of the AIAgentVersion resource.
     */
    readonly assistantId: string;
    /**
     * The AIAgentId of the AIAgentVersion resource.
     */
    readonly aiAgentId: string;
    /**
     * The VersionNumber of the AIAgentVersion resource.
     */
    readonly versionNumber: string;
}
/**
 * Indicates that this resource can be referenced as a AIGuardrail.
 *
 * @stability experimental
 */
export interface IAIGuardrailRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIGuardrail resource.
     */
    readonly aiGuardrailRef: AIGuardrailReference;
}
/**
 * A reference to a AIGuardrail resource.
 *
 * @struct
 * @stability external
 */
export interface AIGuardrailReference {
    /**
     * The AIGuardrailId of the AIGuardrail resource.
     */
    readonly aiGuardrailId: string;
    /**
     * The AssistantId of the AIGuardrail resource.
     */
    readonly assistantId: string;
    /**
     * The ARN of the AIGuardrail resource.
     */
    readonly aiGuardrailArn: string;
}
/**
 * Indicates that this resource can be referenced as a AIGuardrailVersion.
 *
 * @stability experimental
 */
export interface IAIGuardrailVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIGuardrailVersion resource.
     */
    readonly aiGuardrailVersionRef: AIGuardrailVersionReference;
}
/**
 * A reference to a AIGuardrailVersion resource.
 *
 * @struct
 * @stability external
 */
export interface AIGuardrailVersionReference {
    /**
     * The AssistantId of the AIGuardrailVersion resource.
     */
    readonly assistantId: string;
    /**
     * The AIGuardrailId of the AIGuardrailVersion resource.
     */
    readonly aiGuardrailId: string;
    /**
     * The VersionNumber of the AIGuardrailVersion resource.
     */
    readonly versionNumber: string;
}
/**
 * Indicates that this resource can be referenced as a AIPrompt.
 *
 * @stability experimental
 */
export interface IAIPromptRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIPrompt resource.
     */
    readonly aiPromptRef: AIPromptReference;
}
/**
 * A reference to a AIPrompt resource.
 *
 * @struct
 * @stability external
 */
export interface AIPromptReference {
    /**
     * The AIPromptId of the AIPrompt resource.
     */
    readonly aiPromptId: string;
    /**
     * The AssistantId of the AIPrompt resource.
     */
    readonly assistantId: string;
    /**
     * The ARN of the AIPrompt resource.
     */
    readonly aiPromptArn: string;
}
/**
 * Indicates that this resource can be referenced as a AIPromptVersion.
 *
 * @stability experimental
 */
export interface IAIPromptVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a AIPromptVersion resource.
     */
    readonly aiPromptVersionRef: AIPromptVersionReference;
}
/**
 * A reference to a AIPromptVersion resource.
 *
 * @struct
 * @stability external
 */
export interface AIPromptVersionReference {
    /**
     * The AssistantId of the AIPromptVersion resource.
     */
    readonly assistantId: string;
    /**
     * The AIPromptId of the AIPromptVersion resource.
     */
    readonly aiPromptId: string;
    /**
     * The VersionNumber of the AIPromptVersion resource.
     */
    readonly versionNumber: string;
}
/**
 * Indicates that this resource can be referenced as a MessageTemplate.
 *
 * @stability experimental
 */
export interface IMessageTemplateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MessageTemplate resource.
     */
    readonly messageTemplateRef: MessageTemplateReference;
}
/**
 * A reference to a MessageTemplate resource.
 *
 * @struct
 * @stability external
 */
export interface MessageTemplateReference {
    /**
     * The MessageTemplateArn of the MessageTemplate resource.
     */
    readonly messageTemplateArn: string;
}
/**
 * Indicates that this resource can be referenced as a MessageTemplateVersion.
 *
 * @stability experimental
 */
export interface IMessageTemplateVersionRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a MessageTemplateVersion resource.
     */
    readonly messageTemplateVersionRef: MessageTemplateVersionReference;
}
/**
 * A reference to a MessageTemplateVersion resource.
 *
 * @struct
 * @stability external
 */
export interface MessageTemplateVersionReference {
    /**
     * The MessageTemplateVersionArn of the MessageTemplateVersion resource.
     */
    readonly messageTemplateVersionArn: string;
}
/**
 * Indicates that this resource can be referenced as a QuickResponse.
 *
 * @stability experimental
 */
export interface IQuickResponseRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a QuickResponse resource.
     */
    readonly quickResponseRef: QuickResponseReference;
}
/**
 * A reference to a QuickResponse resource.
 *
 * @struct
 * @stability external
 */
export interface QuickResponseReference {
    /**
     * The QuickResponseArn of the QuickResponse resource.
     */
    readonly quickResponseArn: string;
}
