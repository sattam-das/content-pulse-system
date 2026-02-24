import { JsonCodec, JsonShapeDeserializer, JsonShapeSerializer } from "@aws-sdk/core/protocols";
/**
 * A throughput optimized version of the AWS JSON Codec
 * for use with Amazon DynamoDB in JSON RPC mode.
 *
 * @internal
 */
export declare class DynamoDBJsonCodec extends JsonCodec {
    constructor();
    /**
     * @override
     */
    createSerializer(): JsonShapeSerializer;
    /**
     * @override
     */
    createDeserializer(): JsonShapeDeserializer;
}
