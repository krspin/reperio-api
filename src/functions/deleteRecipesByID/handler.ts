import 'source-map-support/register';

import { knex } from '@database/database-ops';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const deleteRecipesByID: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const id = event.pathParameters.id;
  const result = await knex('user_recipes').where(knex.raw('id = ?', [id])).del();

  return formatJSONResponse({
    result
  });
};

export const main = middyfy(deleteRecipesByID);
