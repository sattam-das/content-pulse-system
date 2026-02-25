import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DataIntegration.
 *
 * @stability experimental
 */
export interface IDataIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DataIntegration resource.
     */
    readonly dataIntegrationRef: DataIntegrationReference;
}
/**
 * A reference to a DataIntegration resource.
 *
 * @struct
 * @stability external
 */
export interface DataIntegrationReference {
    /**
     * The Id of the DataIntegration resource.
     */
    readonly dataIntegrationId: string;
    /**
     * The ARN of the DataIntegration resource.
     */
    readonly dataIntegrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a EventIntegration.
 *
 * @stability experimental
 */
export interface IEventIntegrationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EventIntegration resource.
     */
    readonly eventIntegrationRef: EventIntegrationReference;
}
/**
 * A reference to a EventIntegration resource.
 *
 * @struct
 * @stability external
 */
export interface EventIntegrationReference {
    /**
     * The Name of the EventIntegration resource.
     */
    readonly eventIntegrationName: string;
    /**
     * The ARN of the EventIntegration resource.
     */
    readonly eventIntegrationArn: string;
}
/**
 * Indicates that this resource can be referenced as a Application.
 *
 * @stability experimental
 */
export interface IApplicationRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Application resource.
     */
    readonly applicationRef: ApplicationReference;
}
/**
 * A reference to a Application resource.
 *
 * @struct
 * @stability external
 */
export interface ApplicationReference {
    /**
     * The ApplicationArn of the Application resource.
     */
    readonly applicationArn: string;
}
