import 'source-map-support/register';

import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from '@graphql/resolvers';
import { typeDefs } from '@graphql/typeDefs';

const apolloServer = new
  ApolloServer({ resolvers, typeDefs, playground: { endpoint: '/dev/graphql' }});
export const main = apolloServer.createHandler(({
  cors: {
    origin: '*',
    credentials: true,
    }
  }
));
