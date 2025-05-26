import { ErrorMessage } from './error-message';
import { ErrorCodes } from './error-codes';
/**
 * DomainError is used to represent errors that occur within the domain layer of the application.
 * It extends the built-in Error class and provides a standardized way to handle domain-specific errors.
 */
export class DomainError extends Error {
  public readonly cause?: unknown;
  public internalCode: ErrorCodes;

  constructor(internalCode: ErrorCodes, cause?: unknown) {
    const message = ErrorMessage[internalCode];
    super(message);
    this.name = 'DomainError';
    this.cause = cause;
    this.internalCode = internalCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DomainError);
    }
  }
}
