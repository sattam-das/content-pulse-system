"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackTimeoutException = exports.ProvisionedConcurrencyConfigNotFoundException = exports.UnsupportedMediaTypeException = exports.SubnetIPAddressLimitReachedException = exports.SnapStartTimeoutException = exports.SnapStartNotReadyException = exports.SnapStartException = exports.SerializedRequestEntityTooLargeException = exports.ResourceNotReadyException = exports.RequestTooLargeException = exports.RecursiveInvocationException = exports.NoPublishedVersionException = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.InvalidZipFileException = exports.InvalidSubnetIDException = exports.InvalidSecurityGroupIDException = exports.InvalidRuntimeException = exports.InvalidRequestContentException = exports.ENILimitReachedException = exports.EFSMountTimeoutException = exports.EFSMountFailureException = exports.EFSMountConnectivityException = exports.EFSIOException = exports.EC2UnexpectedException = exports.EC2ThrottledException = exports.EC2AccessDeniedException = exports.DurableExecutionAlreadyStartedException = exports.InvalidCodeSignatureException = exports.FunctionVersionsPerCapacityProviderLimitExceededException = exports.CodeVerificationFailedException = exports.CodeStorageExceededException = exports.CodeSigningConfigNotFoundException = exports.ResourceInUseException = exports.CapacityProviderLimitExceededException = exports.TooManyRequestsException = exports.ServiceException = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.PreconditionFailedException = exports.PolicyLengthExceededException = exports.InvalidParameterValueException = void 0;
const LambdaServiceException_1 = require("./LambdaServiceException");
class InvalidParameterValueException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidParameterValueException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "InvalidParameterValueException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
        this.Type = opts.Type;
    }
}
exports.InvalidParameterValueException = InvalidParameterValueException;
class PolicyLengthExceededException extends LambdaServiceException_1.LambdaServiceException {
    name = "PolicyLengthExceededException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "PolicyLengthExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.PolicyLengthExceededException = PolicyLengthExceededException;
class PreconditionFailedException extends LambdaServiceException_1.LambdaServiceException {
    name = "PreconditionFailedException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "PreconditionFailedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PreconditionFailedException.prototype);
        this.Type = opts.Type;
    }
}
exports.PreconditionFailedException = PreconditionFailedException;
class ResourceConflictException extends LambdaServiceException_1.LambdaServiceException {
    name = "ResourceConflictException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
        this.Type = opts.Type;
    }
}
exports.ResourceConflictException = ResourceConflictException;
class ResourceNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceException extends LambdaServiceException_1.LambdaServiceException {
    name = "ServiceException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "ServiceException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ServiceException = ServiceException;
class TooManyRequestsException extends LambdaServiceException_1.LambdaServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    retryAfterSeconds;
    Type;
    Reason;
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
        this.Type = opts.Type;
        this.Reason = opts.Reason;
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
class CapacityProviderLimitExceededException extends LambdaServiceException_1.LambdaServiceException {
    name = "CapacityProviderLimitExceededException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "CapacityProviderLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CapacityProviderLimitExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.CapacityProviderLimitExceededException = CapacityProviderLimitExceededException;
class ResourceInUseException extends LambdaServiceException_1.LambdaServiceException {
    name = "ResourceInUseException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ResourceInUseException = ResourceInUseException;
class CodeSigningConfigNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    name = "CodeSigningConfigNotFoundException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "CodeSigningConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CodeSigningConfigNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.CodeSigningConfigNotFoundException = CodeSigningConfigNotFoundException;
class CodeStorageExceededException extends LambdaServiceException_1.LambdaServiceException {
    name = "CodeStorageExceededException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "CodeStorageExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CodeStorageExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.CodeStorageExceededException = CodeStorageExceededException;
class CodeVerificationFailedException extends LambdaServiceException_1.LambdaServiceException {
    name = "CodeVerificationFailedException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "CodeVerificationFailedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CodeVerificationFailedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.CodeVerificationFailedException = CodeVerificationFailedException;
class FunctionVersionsPerCapacityProviderLimitExceededException extends LambdaServiceException_1.LambdaServiceException {
    name = "FunctionVersionsPerCapacityProviderLimitExceededException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "FunctionVersionsPerCapacityProviderLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, FunctionVersionsPerCapacityProviderLimitExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.FunctionVersionsPerCapacityProviderLimitExceededException = FunctionVersionsPerCapacityProviderLimitExceededException;
class InvalidCodeSignatureException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidCodeSignatureException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "InvalidCodeSignatureException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidCodeSignatureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidCodeSignatureException = InvalidCodeSignatureException;
class DurableExecutionAlreadyStartedException extends LambdaServiceException_1.LambdaServiceException {
    name = "DurableExecutionAlreadyStartedException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "DurableExecutionAlreadyStartedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DurableExecutionAlreadyStartedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.DurableExecutionAlreadyStartedException = DurableExecutionAlreadyStartedException;
class EC2AccessDeniedException extends LambdaServiceException_1.LambdaServiceException {
    name = "EC2AccessDeniedException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EC2AccessDeniedException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, EC2AccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EC2AccessDeniedException = EC2AccessDeniedException;
class EC2ThrottledException extends LambdaServiceException_1.LambdaServiceException {
    name = "EC2ThrottledException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EC2ThrottledException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, EC2ThrottledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EC2ThrottledException = EC2ThrottledException;
class EC2UnexpectedException extends LambdaServiceException_1.LambdaServiceException {
    name = "EC2UnexpectedException";
    $fault = "server";
    Type;
    Message;
    EC2ErrorCode;
    constructor(opts) {
        super({
            name: "EC2UnexpectedException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, EC2UnexpectedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
        this.EC2ErrorCode = opts.EC2ErrorCode;
    }
}
exports.EC2UnexpectedException = EC2UnexpectedException;
class EFSIOException extends LambdaServiceException_1.LambdaServiceException {
    name = "EFSIOException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EFSIOException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EFSIOException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSIOException = EFSIOException;
class EFSMountConnectivityException extends LambdaServiceException_1.LambdaServiceException {
    name = "EFSMountConnectivityException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EFSMountConnectivityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EFSMountConnectivityException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountConnectivityException = EFSMountConnectivityException;
class EFSMountFailureException extends LambdaServiceException_1.LambdaServiceException {
    name = "EFSMountFailureException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EFSMountFailureException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EFSMountFailureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountFailureException = EFSMountFailureException;
class EFSMountTimeoutException extends LambdaServiceException_1.LambdaServiceException {
    name = "EFSMountTimeoutException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "EFSMountTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EFSMountTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountTimeoutException = EFSMountTimeoutException;
class ENILimitReachedException extends LambdaServiceException_1.LambdaServiceException {
    name = "ENILimitReachedException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "ENILimitReachedException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ENILimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ENILimitReachedException = ENILimitReachedException;
class InvalidRequestContentException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidRequestContentException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "InvalidRequestContentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRequestContentException.prototype);
        this.Type = opts.Type;
    }
}
exports.InvalidRequestContentException = InvalidRequestContentException;
class InvalidRuntimeException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidRuntimeException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "InvalidRuntimeException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRuntimeException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidRuntimeException = InvalidRuntimeException;
class InvalidSecurityGroupIDException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidSecurityGroupIDException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "InvalidSecurityGroupIDException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidSecurityGroupIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidSecurityGroupIDException = InvalidSecurityGroupIDException;
class InvalidSubnetIDException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidSubnetIDException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "InvalidSubnetIDException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidSubnetIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidSubnetIDException = InvalidSubnetIDException;
class InvalidZipFileException extends LambdaServiceException_1.LambdaServiceException {
    name = "InvalidZipFileException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "InvalidZipFileException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidZipFileException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidZipFileException = InvalidZipFileException;
class KMSAccessDeniedException extends LambdaServiceException_1.LambdaServiceException {
    name = "KMSAccessDeniedException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSAccessDeniedException = KMSAccessDeniedException;
class KMSDisabledException extends LambdaServiceException_1.LambdaServiceException {
    name = "KMSDisabledException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSDisabledException = KMSDisabledException;
class KMSInvalidStateException extends LambdaServiceException_1.LambdaServiceException {
    name = "KMSInvalidStateException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSInvalidStateException = KMSInvalidStateException;
class KMSNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    name = "KMSNotFoundException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSNotFoundException = KMSNotFoundException;
class NoPublishedVersionException extends LambdaServiceException_1.LambdaServiceException {
    name = "NoPublishedVersionException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "NoPublishedVersionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoPublishedVersionException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.NoPublishedVersionException = NoPublishedVersionException;
class RecursiveInvocationException extends LambdaServiceException_1.LambdaServiceException {
    name = "RecursiveInvocationException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "RecursiveInvocationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, RecursiveInvocationException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.RecursiveInvocationException = RecursiveInvocationException;
class RequestTooLargeException extends LambdaServiceException_1.LambdaServiceException {
    name = "RequestTooLargeException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "RequestTooLargeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, RequestTooLargeException.prototype);
        this.Type = opts.Type;
    }
}
exports.RequestTooLargeException = RequestTooLargeException;
class ResourceNotReadyException extends LambdaServiceException_1.LambdaServiceException {
    name = "ResourceNotReadyException";
    $fault = "server";
    Type;
    constructor(opts) {
        super({
            name: "ResourceNotReadyException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
        this.Type = opts.Type;
    }
}
exports.ResourceNotReadyException = ResourceNotReadyException;
class SerializedRequestEntityTooLargeException extends LambdaServiceException_1.LambdaServiceException {
    name = "SerializedRequestEntityTooLargeException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "SerializedRequestEntityTooLargeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SerializedRequestEntityTooLargeException.prototype);
        this.Type = opts.Type;
    }
}
exports.SerializedRequestEntityTooLargeException = SerializedRequestEntityTooLargeException;
class SnapStartException extends LambdaServiceException_1.LambdaServiceException {
    name = "SnapStartException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "SnapStartException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SnapStartException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartException = SnapStartException;
class SnapStartNotReadyException extends LambdaServiceException_1.LambdaServiceException {
    name = "SnapStartNotReadyException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "SnapStartNotReadyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SnapStartNotReadyException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartNotReadyException = SnapStartNotReadyException;
class SnapStartTimeoutException extends LambdaServiceException_1.LambdaServiceException {
    name = "SnapStartTimeoutException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "SnapStartTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SnapStartTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartTimeoutException = SnapStartTimeoutException;
class SubnetIPAddressLimitReachedException extends LambdaServiceException_1.LambdaServiceException {
    name = "SubnetIPAddressLimitReachedException";
    $fault = "server";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "SubnetIPAddressLimitReachedException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, SubnetIPAddressLimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SubnetIPAddressLimitReachedException = SubnetIPAddressLimitReachedException;
class UnsupportedMediaTypeException extends LambdaServiceException_1.LambdaServiceException {
    name = "UnsupportedMediaTypeException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
        this.Type = opts.Type;
    }
}
exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
class ProvisionedConcurrencyConfigNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    name = "ProvisionedConcurrencyConfigNotFoundException";
    $fault = "client";
    Type;
    constructor(opts) {
        super({
            name: "ProvisionedConcurrencyConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ProvisionedConcurrencyConfigNotFoundException.prototype);
        this.Type = opts.Type;
    }
}
exports.ProvisionedConcurrencyConfigNotFoundException = ProvisionedConcurrencyConfigNotFoundException;
class CallbackTimeoutException extends LambdaServiceException_1.LambdaServiceException {
    name = "CallbackTimeoutException";
    $fault = "client";
    Type;
    Message;
    constructor(opts) {
        super({
            name: "CallbackTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CallbackTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.CallbackTimeoutException = CallbackTimeoutException;
