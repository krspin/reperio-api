import 'source-map-support/register';

import { knex } from '@database/database-ops';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const getRecipeByID: ValidatedEventAPIGatewayProxyEvent<typeof schema> =  async (event) => {

  const id = event.pathParameters.id;
  const result =
    await knex('user_recipes').select().where(knex.raw('id = ?', [id]));
  return formatJSONResponse({
    result
  });
};

export const main = middyfy(getRecipeByID);
