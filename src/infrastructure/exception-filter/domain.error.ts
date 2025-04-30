export class DomainError extends Error {
  public readonly cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'DomainError';
    this.cause = cause;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DomainError);
    }
  }
}
