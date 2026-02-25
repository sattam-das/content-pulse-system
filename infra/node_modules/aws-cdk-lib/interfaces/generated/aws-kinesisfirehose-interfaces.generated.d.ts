import { IEnvironmentAware } from "../environment-aware";
import * as constructs from "constructs";
/**
 * Indicates that this resource can be referenced as a DeliveryStream.
 *
 * @stability experimental
 */
export interface IDeliveryStreamRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a DeliveryStream resource.
     */
    readonly deliveryStreamRef: DeliveryStreamReference;
}
/**
 * A reference to a DeliveryStream resource.
 *
 * @struct
 * @stability external
 */
export interface DeliveryStreamReference {
    /**
     * The DeliveryStreamName of the DeliveryStream resource.
     */
    readonly deliveryStreamName: string;
    /**
     * The ARN of the DeliveryStream resource.
     */
    readonly deliveryStreamArn: string;
}
