const { ApolloServer } = require('apollo-server-micro');
const microCors = require('micro-cors');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const cors = microCors({ origin: '*', allowMethods: ['GET', 'POST'] });
module.exports = cors(server.createHandler({ path: '/api' }));

// module.exports = server.createHandler();
