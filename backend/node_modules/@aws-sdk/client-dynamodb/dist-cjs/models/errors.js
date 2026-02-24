"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCanceledException = exports.ConditionalCheckFailedException = exports.IndexNotFoundException = exports.ReplicaNotFoundException = exports.ReplicaAlreadyExistsException = exports.InvalidRestoreTimeException = exports.TableAlreadyExistsException = exports.ImportConflictException = exports.PointInTimeRecoveryUnavailableException = exports.InvalidExportTimeException = exports.ExportConflictException = exports.TransactionInProgressException = exports.IdempotentParameterMismatchException = exports.DuplicateItemException = exports.ImportNotFoundException = exports.GlobalTableNotFoundException = exports.ExportNotFoundException = exports.PolicyNotFoundException = exports.TransactionConflictException = exports.ResourceInUseException = exports.GlobalTableAlreadyExistsException = exports.TableNotFoundException = exports.TableInUseException = exports.LimitExceededException = exports.ContinuousBackupsUnavailableException = exports.ReplicatedWriteConflictException = exports.ItemCollectionSizeLimitExceededException = exports.ResourceNotFoundException = exports.ProvisionedThroughputExceededException = exports.InvalidEndpointException = exports.ThrottlingException = exports.RequestLimitExceeded = exports.InternalServerError = exports.BackupNotFoundException = exports.BackupInUseException = void 0;
const DynamoDBServiceException_1 = require("./DynamoDBServiceException");
class BackupInUseException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "BackupInUseException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BackupInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BackupInUseException.prototype);
    }
}
exports.BackupInUseException = BackupInUseException;
class BackupNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "BackupNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BackupNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BackupNotFoundException.prototype);
    }
}
exports.BackupNotFoundException = BackupNotFoundException;
class InternalServerError extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "InternalServerError";
    $fault = "server";
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
exports.InternalServerError = InternalServerError;
class RequestLimitExceeded extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "RequestLimitExceeded";
    $fault = "client";
    ThrottlingReasons;
    constructor(opts) {
        super({
            name: "RequestLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
        this.ThrottlingReasons = opts.ThrottlingReasons;
    }
}
exports.RequestLimitExceeded = RequestLimitExceeded;
class ThrottlingException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ThrottlingException";
    $fault = "client";
    throttlingReasons;
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.throttlingReasons = opts.throttlingReasons;
    }
}
exports.ThrottlingException = ThrottlingException;
class InvalidEndpointException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "InvalidEndpointException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidEndpointException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidEndpointException.prototype);
        this.Message = opts.Message;
    }
}
exports.InvalidEndpointException = InvalidEndpointException;
class ProvisionedThroughputExceededException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ProvisionedThroughputExceededException";
    $fault = "client";
    ThrottlingReasons;
    constructor(opts) {
        super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
        this.ThrottlingReasons = opts.ThrottlingReasons;
    }
}
exports.ProvisionedThroughputExceededException = ProvisionedThroughputExceededException;
class ResourceNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
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
class ItemCollectionSizeLimitExceededException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ItemCollectionSizeLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ItemCollectionSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ItemCollectionSizeLimitExceededException.prototype);
    }
}
exports.ItemCollectionSizeLimitExceededException = ItemCollectionSizeLimitExceededException;
class ReplicatedWriteConflictException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ReplicatedWriteConflictException";
    $fault = "client";
    $retryable = {};
    constructor(opts) {
        super({
            name: "ReplicatedWriteConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ReplicatedWriteConflictException.prototype);
    }
}
exports.ReplicatedWriteConflictException = ReplicatedWriteConflictException;
class ContinuousBackupsUnavailableException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ContinuousBackupsUnavailableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ContinuousBackupsUnavailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ContinuousBackupsUnavailableException.prototype);
    }
}
exports.ContinuousBackupsUnavailableException = ContinuousBackupsUnavailableException;
class LimitExceededException extends DynamoDBServiceException_1.DynamoDBServiceException {
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
class TableInUseException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TableInUseException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TableInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TableInUseException.prototype);
    }
}
exports.TableInUseException = TableInUseException;
class TableNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TableNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TableNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TableNotFoundException.prototype);
    }
}
exports.TableNotFoundException = TableNotFoundException;
class GlobalTableAlreadyExistsException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "GlobalTableAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "GlobalTableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, GlobalTableAlreadyExistsException.prototype);
    }
}
exports.GlobalTableAlreadyExistsException = GlobalTableAlreadyExistsException;
class ResourceInUseException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
exports.ResourceInUseException = ResourceInUseException;
class TransactionConflictException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TransactionConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TransactionConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TransactionConflictException.prototype);
    }
}
exports.TransactionConflictException = TransactionConflictException;
class PolicyNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "PolicyNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PolicyNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    }
}
exports.PolicyNotFoundException = PolicyNotFoundException;
class ExportNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ExportNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ExportNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ExportNotFoundException.prototype);
    }
}
exports.ExportNotFoundException = ExportNotFoundException;
class GlobalTableNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "GlobalTableNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "GlobalTableNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, GlobalTableNotFoundException.prototype);
    }
}
exports.GlobalTableNotFoundException = GlobalTableNotFoundException;
class ImportNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ImportNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ImportNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ImportNotFoundException.prototype);
    }
}
exports.ImportNotFoundException = ImportNotFoundException;
class DuplicateItemException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "DuplicateItemException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateItemException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateItemException.prototype);
    }
}
exports.DuplicateItemException = DuplicateItemException;
class IdempotentParameterMismatchException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "IdempotentParameterMismatchException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "IdempotentParameterMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
        this.Message = opts.Message;
    }
}
exports.IdempotentParameterMismatchException = IdempotentParameterMismatchException;
class TransactionInProgressException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TransactionInProgressException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TransactionInProgressException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TransactionInProgressException.prototype);
        this.Message = opts.Message;
    }
}
exports.TransactionInProgressException = TransactionInProgressException;
class ExportConflictException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ExportConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ExportConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ExportConflictException.prototype);
    }
}
exports.ExportConflictException = ExportConflictException;
class InvalidExportTimeException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "InvalidExportTimeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidExportTimeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidExportTimeException.prototype);
    }
}
exports.InvalidExportTimeException = InvalidExportTimeException;
class PointInTimeRecoveryUnavailableException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "PointInTimeRecoveryUnavailableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PointInTimeRecoveryUnavailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PointInTimeRecoveryUnavailableException.prototype);
    }
}
exports.PointInTimeRecoveryUnavailableException = PointInTimeRecoveryUnavailableException;
class ImportConflictException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ImportConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ImportConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ImportConflictException.prototype);
    }
}
exports.ImportConflictException = ImportConflictException;
class TableAlreadyExistsException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TableAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TableAlreadyExistsException.prototype);
    }
}
exports.TableAlreadyExistsException = TableAlreadyExistsException;
class InvalidRestoreTimeException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "InvalidRestoreTimeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidRestoreTimeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRestoreTimeException.prototype);
    }
}
exports.InvalidRestoreTimeException = InvalidRestoreTimeException;
class ReplicaAlreadyExistsException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ReplicaAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ReplicaAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ReplicaAlreadyExistsException.prototype);
    }
}
exports.ReplicaAlreadyExistsException = ReplicaAlreadyExistsException;
class ReplicaNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ReplicaNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ReplicaNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ReplicaNotFoundException.prototype);
    }
}
exports.ReplicaNotFoundException = ReplicaNotFoundException;
class IndexNotFoundException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "IndexNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "IndexNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IndexNotFoundException.prototype);
    }
}
exports.IndexNotFoundException = IndexNotFoundException;
class ConditionalCheckFailedException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "ConditionalCheckFailedException";
    $fault = "client";
    Item;
    constructor(opts) {
        super({
            name: "ConditionalCheckFailedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
        this.Item = opts.Item;
    }
}
exports.ConditionalCheckFailedException = ConditionalCheckFailedException;
class TransactionCanceledException extends DynamoDBServiceException_1.DynamoDBServiceException {
    name = "TransactionCanceledException";
    $fault = "client";
    Message;
    CancellationReasons;
    constructor(opts) {
        super({
            name: "TransactionCanceledException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TransactionCanceledException.prototype);
        this.Message = opts.Message;
        this.CancellationReasons = opts.CancellationReasons;
    }
}
exports.TransactionCanceledException = TransactionCanceledException;
