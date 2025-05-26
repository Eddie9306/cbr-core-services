import { PinoLogger } from 'nestjs-pino';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService extends PinoLogger {
  private currentContext = '';

  setContext(value: string) {
    this.currentContext = value;
    super.setContext(value);
  }

  private wrap(dataOrMessage: any, message?: string) {
    let finalMessage = '';
    let data: Record<string, any> = {};

    if (dataOrMessage instanceof Error) {
      data = {
        error: {
          name: dataOrMessage.name,
          message: dataOrMessage.message,
          stack: dataOrMessage.stack,
        },
      };
      finalMessage = message || dataOrMessage.message;
    } else if (typeof dataOrMessage === 'string') {
      data = {};
      finalMessage = dataOrMessage;
    } else {
      data = { ...dataOrMessage };
      finalMessage = message || '';
    }

    return { data, message: finalMessage };
  }

  override info(dataOrMessage: any, message?: string) {
    const { data, message: finalMessage } = this.wrap(dataOrMessage, message);
    super.info({ data }, finalMessage);
  }

  override error(dataOrMessage: any, message?: string) {
    const { data, message: finalMessage } = this.wrap(dataOrMessage, message);
    super.error({ data }, finalMessage);
  }

  override warn(dataOrMessage: any, message?: string) {
    const { data, message: finalMessage } = this.wrap(dataOrMessage, message);
    super.warn({ data }, finalMessage);
  }

  override debug(dataOrMessage: any, message?: string) {
    const { data, message: finalMessage } = this.wrap(dataOrMessage, message);
    super.debug({ data }, finalMessage);
  }
}
