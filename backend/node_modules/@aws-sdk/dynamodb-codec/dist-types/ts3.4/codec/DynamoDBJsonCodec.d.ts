import {
  JsonCodec,
  JsonShapeDeserializer,
  JsonShapeSerializer,
} from "@aws-sdk/core/protocols";
export declare class DynamoDBJsonCodec extends JsonCodec {
  constructor();
  createSerializer(): JsonShapeSerializer;
  createDeserializer(): JsonShapeDeserializer;
}
