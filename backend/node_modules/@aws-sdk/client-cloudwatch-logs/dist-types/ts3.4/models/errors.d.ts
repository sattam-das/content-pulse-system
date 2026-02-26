import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";
import { QueryCompileError } from "./models_0";
export declare class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AccessDeniedException, __BaseException>
  );
}
export declare class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidParameterException, __BaseException>
  );
}
export declare class OperationAbortedException extends __BaseException {
  readonly name: "OperationAbortedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<OperationAbortedException, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>
  );
}
export declare class InternalServerException extends __BaseException {
  readonly name: "InternalServerException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<InternalServerException, __BaseException>
  );
}
export declare class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ThrottlingException, __BaseException>
  );
}
export declare class ValidationException extends __BaseException {
  readonly name: "ValidationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ValidationException, __BaseException>
  );
}
export declare class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidOperationException, __BaseException>
  );
}
export declare class ConflictException extends __BaseException {
  readonly name: "ConflictException";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>);
}
export declare class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>
  );
}
export declare class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<LimitExceededException, __BaseException>
  );
}
export declare class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>
  );
}
export declare class DataAlreadyAcceptedException extends __BaseException {
  readonly name: "DataAlreadyAcceptedException";
  readonly $fault: "client";
  expectedSequenceToken?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<DataAlreadyAcceptedException, __BaseException>
  );
}
export declare class InternalStreamingException extends __BaseException {
  readonly name: "InternalStreamingException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InternalStreamingException, __BaseException>
  );
}
export declare class InvalidSequenceTokenException extends __BaseException {
  readonly name: "InvalidSequenceTokenException";
  readonly $fault: "client";
  expectedSequenceToken?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<InvalidSequenceTokenException, __BaseException>
  );
}
export declare class UnrecognizedClientException extends __BaseException {
  readonly name: "UnrecognizedClientException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<UnrecognizedClientException, __BaseException>
  );
}
export declare class SessionStreamingException extends __BaseException {
  readonly name: "SessionStreamingException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<SessionStreamingException, __BaseException>
  );
}
export declare class SessionTimeoutException extends __BaseException {
  readonly name: "SessionTimeoutException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<SessionTimeoutException, __BaseException>
  );
}
export declare class MalformedQueryException extends __BaseException {
  readonly name: "MalformedQueryException";
  readonly $fault: "client";
  queryCompileError?: QueryCompileError | undefined;
  constructor(
    opts: __ExceptionOptionType<MalformedQueryException, __BaseException>
  );
}
export declare class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException";
  readonly $fault: "client";
  resourceName?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<TooManyTagsException, __BaseException>
  );
}
