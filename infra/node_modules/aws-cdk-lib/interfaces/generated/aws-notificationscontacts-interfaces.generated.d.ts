import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a EmailContact.
 *
 * @stability experimental
 */
export interface IEmailContactRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a EmailContact resource.
     */
    readonly emailContactRef: EmailContactReference;
}
/**
 * A reference to a EmailContact resource.
 *
 * @struct
 * @stability external
 */
export interface EmailContactReference {
    /**
     * The Arn of the EmailContact resource.
     */
    readonly emailContactArn: string;
}
