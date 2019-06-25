import { ApolloServer } from 'apollo-server-micro';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

console.log('temp directory:', __dirname);
export default server.createHandler({ path: '/graph' });
