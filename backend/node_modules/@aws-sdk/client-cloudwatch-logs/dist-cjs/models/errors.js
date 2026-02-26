"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyTagsException = exports.MalformedQueryException = exports.SessionTimeoutException = exports.SessionStreamingException = exports.UnrecognizedClientException = exports.InvalidSequenceTokenException = exports.InternalStreamingException = exports.DataAlreadyAcceptedException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.ServiceQuotaExceededException = exports.ConflictException = exports.InvalidOperationException = exports.ValidationException = exports.ThrottlingException = exports.InternalServerException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.OperationAbortedException = exports.InvalidParameterException = exports.AccessDeniedException = void 0;
const CloudWatchLogsServiceException_1 = require("./CloudWatchLogsServiceException");
class AccessDeniedException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
class InvalidParameterException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class OperationAbortedException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "OperationAbortedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OperationAbortedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OperationAbortedException.prototype);
    }
}
exports.OperationAbortedException = OperationAbortedException;
class ResourceNotFoundException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceUnavailableException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
class InternalServerException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
exports.InternalServerException = InternalServerException;
class ThrottlingException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ThrottlingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
}
exports.ThrottlingException = ThrottlingException;
class ValidationException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ValidationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
exports.ValidationException = ValidationException;
class InvalidOperationException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "InvalidOperationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidOperationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOperationException.prototype);
    }
}
exports.InvalidOperationException = InvalidOperationException;
class ConflictException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
exports.ConflictException = ConflictException;
class ServiceQuotaExceededException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
}
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
class LimitExceededException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceAlreadyExistsException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "ResourceAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    }
}
exports.ResourceAlreadyExistsException = ResourceAlreadyExistsException;
class DataAlreadyAcceptedException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "DataAlreadyAcceptedException";
    $fault = "client";
    expectedSequenceToken;
    constructor(opts) {
        super({
            name: "DataAlreadyAcceptedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DataAlreadyAcceptedException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
exports.DataAlreadyAcceptedException = DataAlreadyAcceptedException;
class InternalStreamingException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "InternalStreamingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InternalStreamingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalStreamingException.prototype);
    }
}
exports.InternalStreamingException = InternalStreamingException;
class InvalidSequenceTokenException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "InvalidSequenceTokenException";
    $fault = "client";
    expectedSequenceToken;
    constructor(opts) {
        super({
            name: "InvalidSequenceTokenException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidSequenceTokenException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
exports.InvalidSequenceTokenException = InvalidSequenceTokenException;
class UnrecognizedClientException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "UnrecognizedClientException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnrecognizedClientException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnrecognizedClientException.prototype);
    }
}
exports.UnrecognizedClientException = UnrecognizedClientException;
class SessionStreamingException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "SessionStreamingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "SessionStreamingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SessionStreamingException.prototype);
    }
}
exports.SessionStreamingException = SessionStreamingException;
class SessionTimeoutException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "SessionTimeoutException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "SessionTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SessionTimeoutException.prototype);
    }
}
exports.SessionTimeoutException = SessionTimeoutException;
class MalformedQueryException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "MalformedQueryException";
    $fault = "client";
    queryCompileError;
    constructor(opts) {
        super({
            name: "MalformedQueryException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedQueryException.prototype);
        this.queryCompileError = opts.queryCompileError;
    }
}
exports.MalformedQueryException = MalformedQueryException;
class TooManyTagsException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    name = "TooManyTagsException";
    $fault = "client";
    resourceName;
    constructor(opts) {
        super({
            name: "TooManyTagsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyTagsException.prototype);
        this.resourceName = opts.resourceName;
    }
}
exports.TooManyTagsException = TooManyTagsException;
