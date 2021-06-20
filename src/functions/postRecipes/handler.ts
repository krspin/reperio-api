import 'source-map-support/register';

import { knex } from '@database/database-ops';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const postRecipes: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const result = await knex('user_recipes').insert({
    author: event.body.author,
    name: event.body.name,
    ingredients: event.body.ingredients.join(','),
    media: event.body.media || null,
    instructions: event.body.instructions,
    cost: event.body.cost,
    time: event.body.time,
    difficulty: event.body.difficulty,
    likes: 0,
    comments: 0,
    datePosted: new Date()
  });

  return formatJSONResponse({
    result
  });
};

export const main = middyfy(postRecipes);
