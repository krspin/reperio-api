import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  scalar Datetime

  type Recipe {
    id: ID!
    author: Int!
    name: String!
    ingredients: [String!]!
    media: String
    instructions: String!
    cost: Int!
    time: Int!
    difficulty: Int!
    likes: Int
    comments: Int
    datePosted: Datetime!
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    getRecipesByID(id: ID!): Recipe
  }

  type Mutation {

    postRecipes(author: Int!, name: String!, ingredients: [String!]!,
      media: String, instructions: String!, cost: Int!, time: Int!,
      difficulty: Int!): Boolean

    deleteRecipes(id: ID!): Boolean

    updateRecipes(id: ID!, author: Int, name: String, ingredients: [String!],
      media: String, instructions: String, cost: Int, time: Int,
      difficulty: Int): Boolean

  }

`;
