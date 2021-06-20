import 'source-map-support/register';

import { knex } from '@database/database-ops';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const updateRecipes: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const reqBody = event.body;
  delete reqBody.id;
  delete reqBody.author;
  delete reqBody.likes;
  delete reqBody.comments;
  delete reqBody.datePosted;

  const result = await knex('user_recipes')
        .where(knex.raw('id = ?', [event.pathParameters.id]))
        .update(reqBody);

  return formatJSONResponse({
    result
  });
};

export const main = middyfy(updateRecipes);
