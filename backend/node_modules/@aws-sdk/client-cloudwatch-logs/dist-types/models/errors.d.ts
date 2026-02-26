import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";
import type { QueryCompileError } from "./models_0";
/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export declare class AccessDeniedException extends __BaseException {
    readonly name: "AccessDeniedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>);
}
/**
 * <p>A parameter is specified incorrectly.</p>
 * @public
 */
export declare class InvalidParameterException extends __BaseException {
    readonly name: "InvalidParameterException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>);
}
/**
 * <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 * @public
 */
export declare class OperationAbortedException extends __BaseException {
    readonly name: "OperationAbortedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<OperationAbortedException, __BaseException>);
}
/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export declare class ResourceNotFoundException extends __BaseException {
    readonly name: "ResourceNotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>);
}
/**
 * <p>The service cannot complete the request.</p>
 * @public
 */
export declare class ServiceUnavailableException extends __BaseException {
    readonly name: "ServiceUnavailableException";
    readonly $fault: "server";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>);
}
/**
 * <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 * @public
 */
export declare class InternalServerException extends __BaseException {
    readonly name: "InternalServerException";
    readonly $fault: "server";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>);
}
/**
 * <p>The request was throttled because of quota limits.</p>
 * @public
 */
export declare class ThrottlingException extends __BaseException {
    readonly name: "ThrottlingException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>);
}
/**
 * <p>One of the parameters for the request is not valid.</p>
 * @public
 */
export declare class ValidationException extends __BaseException {
    readonly name: "ValidationException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>);
}
/**
 * <p>The operation is not valid on the specified resource.</p>
 * @public
 */
export declare class InvalidOperationException extends __BaseException {
    readonly name: "InvalidOperationException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>);
}
/**
 * <p>This operation attempted to create a resource that already exists.</p>
 * @public
 */
export declare class ConflictException extends __BaseException {
    readonly name: "ConflictException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>);
}
/**
 * <p>This request exceeds a service quota.</p>
 * @public
 */
export declare class ServiceQuotaExceededException extends __BaseException {
    readonly name: "ServiceQuotaExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>);
}
/**
 * <p>You have reached the maximum number of resources that can be created.</p>
 * @public
 */
export declare class LimitExceededException extends __BaseException {
    readonly name: "LimitExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>);
}
/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export declare class ResourceAlreadyExistsException extends __BaseException {
    readonly name: "ResourceAlreadyExistsException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>);
}
/**
 * <p>The event was already logged.</p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>DataAlreadyAcceptedException</code> regardless of whether a given batch of log
 *         events has already been accepted. </p>
 *          </important>
 * @public
 */
export declare class DataAlreadyAcceptedException extends __BaseException {
    readonly name: "DataAlreadyAcceptedException";
    readonly $fault: "client";
    expectedSequenceToken?: string | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<DataAlreadyAcceptedException, __BaseException>);
}
/**
 * <p>An internal error occurred during the streaming of log data. This exception is thrown when
 *       there's an issue with the internal streaming mechanism used by the GetLogObject
 *       operation.</p>
 * @public
 */
export declare class InternalStreamingException extends __BaseException {
    readonly name: "InternalStreamingException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalStreamingException, __BaseException>);
}
/**
 * <p>The sequence token is not valid. You can get the correct sequence token in the
 *         <code>expectedSequenceToken</code> field in the <code>InvalidSequenceTokenException</code>
 *       message. </p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>InvalidSequenceTokenException</code> regardless of receiving an invalid sequence
 *         token. </p>
 *          </important>
 * @public
 */
export declare class InvalidSequenceTokenException extends __BaseException {
    readonly name: "InvalidSequenceTokenException";
    readonly $fault: "client";
    expectedSequenceToken?: string | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidSequenceTokenException, __BaseException>);
}
/**
 * <p>The most likely cause is an Amazon Web Services access key ID or secret key that's not
 *       valid.</p>
 * @public
 */
export declare class UnrecognizedClientException extends __BaseException {
    readonly name: "UnrecognizedClientException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UnrecognizedClientException, __BaseException>);
}
/**
 * <p>This exception is returned if an unknown error occurs during a Live Tail session.</p>
 * @public
 */
export declare class SessionStreamingException extends __BaseException {
    readonly name: "SessionStreamingException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SessionStreamingException, __BaseException>);
}
/**
 * <p>This exception is returned in a Live Tail stream when the Live Tail session times out.
 *       Live Tail sessions time out after three hours.</p>
 * @public
 */
export declare class SessionTimeoutException extends __BaseException {
    readonly name: "SessionTimeoutException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SessionTimeoutException, __BaseException>);
}
/**
 * <p>The query string is not valid. Details about this error are displayed in a
 *         <code>QueryCompileError</code> object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html">QueryCompileError</a>.</p>
 *          <p>For more information about valid query syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query
 *         Syntax</a>.</p>
 * @public
 */
export declare class MalformedQueryException extends __BaseException {
    readonly name: "MalformedQueryException";
    readonly $fault: "client";
    /**
     * <p>Reserved.</p>
     * @public
     */
    queryCompileError?: QueryCompileError | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<MalformedQueryException, __BaseException>);
}
/**
 * <p>A resource can have no more than 50 tags.</p>
 * @public
 */
export declare class TooManyTagsException extends __BaseException {
    readonly name: "TooManyTagsException";
    readonly $fault: "client";
    /**
     * <p>The name of the resource.</p>
     * @public
     */
    resourceName?: string | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>);
}
