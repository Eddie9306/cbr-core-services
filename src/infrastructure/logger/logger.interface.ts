export interface LoggerInterface {
  info(dataOrMessage: any, message?: string);
  error(dataOrMessage: any, message?: string);
  warn(dataOrMessage: any, message?: string);
  debug(dataOrMessage: any, message?: string);
  setContext(value: string);
}
