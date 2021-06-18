import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const len: Number = event.body.name.length;

  const db_info = {
    uname: process.env.DB_USERNAME,
    pword: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_ENDPOINT
  }

  return formatJSONResponse({
    length: len,
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    db_info
  });
}

export const main = middyfy(hello);
