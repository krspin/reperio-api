import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const len: Number = event.body.name.length;

  return formatJSONResponse({
    length: len,
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  });
}

export const main = middyfy(hello);
