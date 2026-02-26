import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";
export class AccessDeniedException extends __BaseException {
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
export class InvalidParameterException extends __BaseException {
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
export class OperationAbortedException extends __BaseException {
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
export class ResourceNotFoundException extends __BaseException {
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
export class ServiceUnavailableException extends __BaseException {
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
export class InternalServerException extends __BaseException {
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
export class ThrottlingException extends __BaseException {
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
export class ValidationException extends __BaseException {
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
export class InvalidOperationException extends __BaseException {
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
export class ConflictException extends __BaseException {
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
export class ServiceQuotaExceededException extends __BaseException {
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
export class LimitExceededException extends __BaseException {
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
export class ResourceAlreadyExistsException extends __BaseException {
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
export class DataAlreadyAcceptedException extends __BaseException {
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
export class InternalStreamingException extends __BaseException {
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
export class InvalidSequenceTokenException extends __BaseException {
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
export class UnrecognizedClientException extends __BaseException {
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
export class SessionStreamingException extends __BaseException {
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
export class SessionTimeoutException extends __BaseException {
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
export class MalformedQueryException extends __BaseException {
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
export class TooManyTagsException extends __BaseException {
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
