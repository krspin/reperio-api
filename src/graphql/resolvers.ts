import { GraphQLScalarType } from 'graphql';

const Datetime: GraphQLScalarType = new GraphQLScalarType({
  name: 'Datetime',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  }
});

export const resolvers = {
  Datetime,
  Query: {
    books: () => books,
  }
};

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

