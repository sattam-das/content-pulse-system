'use strict';

var protocols = require('@aws-sdk/core/protocols');
var schema = require('@smithy/core/schema');
var smithyClient = require('@smithy/smithy-client');
var utilBase64 = require('@smithy/util-base64');

class DynamoDBJsonCodec extends protocols.JsonCodec {
    constructor() {
        super({
            timestampFormat: {
                useTrait: true,
                default: 7,
            },
            jsonName: false,
        });
    }
    createSerializer() {
        const serializer = new DynamoDBJsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
    }
    createDeserializer() {
        const deserializer = new DynamoDBJsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
    }
}
const ATTRIBUTE_VALUE = "com.amazonaws.dynamodb#AttributeValue";
class DynamoDBJsonShapeSerializer extends protocols.JsonShapeSerializer {
    _write(schema$1, value, container) {
        const ns = schema.NormalizedSchema.of(schema$1);
        if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
            if (value && typeof value === "object") {
                const av = value;
                const out = smithyClient._json(av);
                const base64Encode = this.serdeContext?.base64Encoder ?? utilBase64.toBase64;
                if (av.B instanceof Uint8Array) {
                    out.B = base64Encode(av.B);
                }
                if (Array.isArray(av.BS)) {
                    out.BS = av.BS.map(base64Encode);
                }
                if (Array.isArray(av.L)) {
                    out.L = av.L.filter((v) => v != null).map((v) => this._write(ns, v, container));
                }
                if (av.M && typeof av.M === "object") {
                    out.M = {};
                    for (const [k, v] of Object.entries(av.M)) {
                        if (v != null) {
                            out.M[k] = this._write(ns, v, container);
                        }
                    }
                }
                return out;
            }
        }
        return super._write(ns, value, container);
    }
}
class DynamoDBJsonShapeDeserializer extends protocols.JsonShapeDeserializer {
    _read(schema$1, value) {
        const ns = schema.NormalizedSchema.of(schema$1);
        if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
            if (value && typeof value === "object") {
                const av = value;
                const out = smithyClient._json(av);
                const base64Decoder = this.serdeContext?.base64Decoder ?? utilBase64.fromBase64;
                if (typeof av.B === "string") {
                    out.B = base64Decoder(av.B);
                }
                if (Array.isArray(av.BS)) {
                    out.BS = av.BS.map(base64Decoder);
                }
                if (Array.isArray(av.L)) {
                    out.L = av.L.map((v) => this._read(ns, v));
                }
                if (av.M && typeof av.M === "object") {
                    out.M = {};
                    for (const [k, v] of Object.entries(av.M)) {
                        out.M[k] = this._read(ns, v);
                    }
                }
                return out;
            }
        }
        return super._read(ns, value);
    }
}

exports.DynamoDBJsonCodec = DynamoDBJsonCodec;
