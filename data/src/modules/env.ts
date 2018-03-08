import { join, dirname } from 'path';

import * as dotenv from 'dotenv';

dotenv.config({
  path: join(dirname(dirname(__dirname)), '.env')
});

export const NODE_ENV: string = (
  (env) => env === 'production' ? env : 'development'
)(process.env.NODE_ENV);

export const IS_PRODUCTION: boolean = NODE_ENV === 'production';
export const IS_DEVELOPMENT: boolean = NODE_ENV === 'development';

export const JWT_SECRET: string = process.env.JWT_SECRET;

export const REDIS_HOST: string = process.env.REDIS_HOST;
export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT, 10);
export const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD;

export const REDIS_SERVER_TO_CLIENT_CHANNEL: string = process.env.REDIS_SERVER_TO_CLIENT_CHANNEL;
export const REDIS_CLIENT_TO_SERVER_CHANNEL: string = process.env.REDIS_CLIENT_TO_SERVER_CHANNEL;
export const REDIS_ERROR_CHANNEL: string = process.env.REDIS_ERROR_CHANNEL;
