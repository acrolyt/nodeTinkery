import * as winston from 'winston';
import * as moment from 'moment';

import { IS_PRODUCTION } from './env';

winston.addColors({
  error:    'black bgRed',
  warn:     'black bgYellow',
  info:     'black bgCyan',
  verbose:  'black bgWhite',
  debug:    'black bgMagenta',
  silly:    'gray'
});

const appLogger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: IS_PRODUCTION ? 'info' : 'silly',
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: IS_PRODUCTION ? '' : () => moment(new Date()).format('hh:mm:ss.SSS')
    })
  ]
});

appLogger.setLevels({
  error:    0,
  warn:     1,
  info:     2,
  verbose:  3,
  debug:    4,
  silly:    5
});

export const log = appLogger;

export const error = appLogger.error;
export const warn = appLogger.warn;
export const info = appLogger.info;
export const verbose = appLogger.verbose;
export const debug = appLogger.debug;
export const silly = appLogger.silly;
