import { ErrorCodes } from './error-codes';

export const ErrorMessage = {
  [ErrorCodes.UNABLE_TO_CREATE_RESOURCE]: 'Unexpect error creating resource',
  [ErrorCodes.UNABLE_TO_FIND_RESOURCE]: 'Unable to find resource',
  [ErrorCodes.RESOURCE_ALREADY_EXISTS]: 'Resource already exists',
};
