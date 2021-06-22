import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import fetch from 'node-fetch';

import schema from './schema';

const apiGetByIngredients: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const apiKey = process.env.SPOONACULAR_API_KEY;
  const reqBody = event.body;
  const ingredients = reqBody.ingredients.join(',');
  const quanitity = reqBody.quantity;

  const url =
    `https://api.spoonacular.com/recipes/findByIngredients`
    + `?apiKey=${apiKey}&ranking=2&ignorePantry=true`
    + `&limitLicense=true&number=${quanitity}&ingredients=${ingredients}`

  const result = await fetch(url);
  let res = await result.json();

  let newArr = res.map((recipeData) => {
    return {
      id: recipeData["id"],
      title: recipeData["title"],
      image: recipeData["image"],
    }
  });

  console.log(newArr)
  return formatJSONResponse({
    recipes: newArr
  });
};

export const main = middyfy(apiGetByIngredients);
