export class InfrastructureError extends Error {
  public readonly cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'InfrastructureError';
    this.cause = cause;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InfrastructureError);
    }
  }
}
