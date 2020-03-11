import { ApolloServer } from 'apollo-server-micro';

import debug from 'debug';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const dlog = debug('sb:api:graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

dlog('creating server');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
