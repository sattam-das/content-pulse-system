import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Agreement.
 *
 * @stability experimental
 */
export interface IAgreementRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Agreement resource.
     */
    readonly agreementRef: AgreementReference;
}
/**
 * A reference to a Agreement resource.
 *
 * @struct
 * @stability external
 */
export interface AgreementReference {
    /**
     * The AgreementId of the Agreement resource.
     */
    readonly agreementId: string;
    /**
     * The ServerId of the Agreement resource.
     */
    readonly serverId: string;
    /**
     * The ARN of the Agreement resource.
     */
    readonly agreementArn: string;
}
/**
 * Indicates that this resource can be referenced as a Certificate.
 *
 * @stability experimental
 */
export interface ICertificateRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Certificate resource.
     */
    readonly certificateRef: CertificateReference;
}
/**
 * A reference to a Certificate resource.
 *
 * @struct
 * @stability external
 */
export interface CertificateReference {
    /**
     * The CertificateId of the Certificate resource.
     */
    readonly certificateId: string;
    /**
     * The ARN of the Certificate resource.
     */
    readonly certificateArn: string;
}
/**
 * Indicates that this resource can be referenced as a Connector.
 *
 * @stability experimental
 */
export interface IConnectorRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Connector resource.
     */
    readonly connectorRef: ConnectorReference;
}
/**
 * A reference to a Connector resource.
 *
 * @struct
 * @stability external
 */
export interface ConnectorReference {
    /**
     * The ConnectorId of the Connector resource.
     */
    readonly connectorId: string;
    /**
     * The ARN of the Connector resource.
     */
    readonly connectorArn: string;
}
/**
 * Indicates that this resource can be referenced as a Profile.
 *
 * @stability experimental
 */
export interface IProfileRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Profile resource.
     */
    readonly profileRef: ProfileReference;
}
/**
 * A reference to a Profile resource.
 *
 * @struct
 * @stability external
 */
export interface ProfileReference {
    /**
     * The ProfileId of the Profile resource.
     */
    readonly profileId: string;
    /**
     * The ARN of the Profile resource.
     */
    readonly profileArn: string;
}
/**
 * Indicates that this resource can be referenced as a Server.
 *
 * @stability experimental
 */
export interface IServerRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Server resource.
     */
    readonly serverRef: ServerReference;
}
/**
 * A reference to a Server resource.
 *
 * @struct
 * @stability external
 */
export interface ServerReference {
    /**
     * The Arn of the Server resource.
     */
    readonly serverArn: string;
}
/**
 * Indicates that this resource can be referenced as a User.
 *
 * @stability experimental
 */
export interface IUserRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a User resource.
     */
    readonly userRef: UserReference;
}
/**
 * A reference to a User resource.
 *
 * @struct
 * @stability external
 */
export interface UserReference {
    /**
     * The Arn of the User resource.
     */
    readonly userArn: string;
}
/**
 * Indicates that this resource can be referenced as a Workflow.
 *
 * @stability experimental
 */
export interface IWorkflowRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Workflow resource.
     */
    readonly workflowRef: WorkflowReference;
}
/**
 * A reference to a Workflow resource.
 *
 * @struct
 * @stability external
 */
export interface WorkflowReference {
    /**
     * The WorkflowId of the Workflow resource.
     */
    readonly workflowId: string;
    /**
     * The ARN of the Workflow resource.
     */
    readonly workflowArn: string;
}
/**
 * Indicates that this resource can be referenced as a WebApp.
 *
 * @stability experimental
 */
export interface IWebAppRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a WebApp resource.
     */
    readonly webAppRef: WebAppReference;
}
/**
 * A reference to a WebApp resource.
 *
 * @struct
 * @stability external
 */
export interface WebAppReference {
    /**
     * The Arn of the WebApp resource.
     */
    readonly webAppArn: string;
}
