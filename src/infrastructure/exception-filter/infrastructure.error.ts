import { ErrorCodes } from './error-codes';
import { ErrorMessage } from './error-message';

export class InfrastructureError extends Error {
  public readonly cause?: unknown;
  public internalCode: ErrorCodes;

  constructor(internalCode: ErrorCodes, cause?: unknown) {
    const message = ErrorMessage[internalCode];
    super(message);
    this.name = 'InfrastructureError';
    this.cause = cause;
    this.internalCode = internalCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InfrastructureError);
    }
  }
}
