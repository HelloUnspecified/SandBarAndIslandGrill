import microCors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const cors = microCors({ allowMethods: ['GET', 'POST'] });

export default cors(server.createHandler({ path: '/graph' }));
