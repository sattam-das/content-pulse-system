import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a Challenge.
 *
 * @stability experimental
 */
export interface IChallengeRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Challenge resource.
     */
    readonly challengeRef: ChallengeReference;
}
/**
 * A reference to a Challenge resource.
 *
 * @struct
 * @stability external
 */
export interface ChallengeReference {
    /**
     * The ChallengeArn of the Challenge resource.
     */
    readonly challengeArn: string;
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
     * The ConnectorArn of the Connector resource.
     */
    readonly connectorArn: string;
}
